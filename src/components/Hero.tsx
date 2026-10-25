import { ArrowUpRight, FolderKanban, MessageCircle } from 'lucide-react';
import { Award, Briefcase, Lightbulb } from 'lucide-react';
import Typewriter from './Typewriter/Typewriter';
import { about, hero, stats } from '../data/site';
import { headerSocials } from '../data/socials';
import { smoothScroll } from '../utils/smoothScroll';

const statIcons = [Lightbulb, Award, Briefcase];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grid pt-24 md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(240,193,75,0.12),transparent_36%)]" />

      <div className="section-container grid items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="relative z-10">
          <p className="text-gold-600 dark:text-gold">{hero.greeting}</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-navy-950 dark:text-white sm:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-navy-900/70 dark:text-white/70">{hero.role.join(', ')}</p>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight text-navy-950 dark:text-white sm:text-5xl">
            {hero.headline} <span className="text-gold-600 dark:text-gold">{hero.highlight}</span>
          </h2>
          <div className="mt-4 max-w-xl text-base text-navy-900/70 dark:text-white/65">
            <Typewriter text={hero.description} speed={18} className="text-base sm:text-lg" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.ctaHref} onClick={(e) => smoothScroll(e, hero.ctaHref)} className="btn-gold">
              <MessageCircle className="h-4 w-4" />
              {hero.ctaLabel}
            </a>
            <a
              href={hero.secondaryHref}
              onClick={(e) => smoothScroll(e, hero.secondaryHref)}
              className="btn-outline"
            >
              {hero.secondaryLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-900/50 dark:text-white/50">
              Connect with me
            </p>
            <div className="flex flex-wrap gap-3">
              {headerSocials.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target={url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 transition hover:border-gold hover:bg-gold hover:text-navy-950 dark:border-white/15 dark:text-white"
                  aria-label={name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 top-10 h-16 w-16 rounded-full bg-gold/30 blur-2xl" />
          <div className="absolute -right-4 bottom-16 h-20 w-20 rounded-full bg-sky-400/20 blur-2xl" />
          <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-full border-[6px] border-gold/80 shadow-gold">
            <img src={about.photo} alt={about.photoAlt} className="h-full w-full object-cover object-top" />
          </div>
          <div className="absolute left-0 top-8 rounded-2xl border border-white/10 bg-navy-800 px-4 py-2 text-sm font-medium text-white shadow-lg">
            {hero.chips[0].label}
          </div>
          <div className="absolute bottom-10 right-0 rounded-2xl border border-gold/30 bg-navy-800 px-4 py-2 text-sm font-medium text-gold shadow-lg">
            {hero.chips[1].label}
          </div>
        </div>
      </div>

      <div className="section-container pb-16">
        <div className="grid gap-4 rounded-[28px] border border-navy-900/10 bg-navy-950 px-6 py-6 text-white shadow-gold dark:border-white/10 sm:grid-cols-3 sm:px-10">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy-950">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
