import { Github, Linkedin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { smoothScroll } from '../utils/smoothScroll';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dev <Rocket style={{display: 'inline-block'}} /></h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              {['about', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => smoothScroll(e, `#${section}`)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              {/* <a href="https://github.com/develmahmoud" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a> */}
              <a href="https://www.linkedin.com/in/mahmoud-muhammad-sani-680752223/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/mahmoud.muhammadsani.9" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dev_el_mahmoud" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/dev_el_mahmoud" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:your.sanimahmoud10@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}