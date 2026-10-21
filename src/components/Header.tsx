import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { smoothScroll } from '../utils/smoothScroll';
import { navItems } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    smoothScroll(event, id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-navy-900/10 bg-cream/85 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="flex items-center gap-3 py-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold font-display text-lg font-extrabold text-navy-950">
            M.
          </span>
          <span className="font-display text-lg font-bold text-navy-950 dark:text-white">DevMahmoud</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNav(e, `#${section.id}`)}
              className="text-sm font-medium text-navy-900/70 transition hover:text-gold-600 dark:text-white/70 dark:hover:text-gold"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-gold hidden sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            className="rounded-xl border border-navy-900/10 p-2 text-navy-900 dark:border-white/10 dark:text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-900/10 bg-cream px-4 py-4 dark:border-white/10 dark:bg-navy-900 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNav(e, `#${section.id}`)}
                className="rounded-lg px-3 py-2 text-navy-900 hover:bg-gold/20 dark:text-white"
              >
                {section.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn-gold mt-2">
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
