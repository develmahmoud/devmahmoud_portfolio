import { SocialCard } from './SocialCard';
import { socials } from '../data/socials';

export function Social() {
  return (
    <section id="connect" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Connect with Me
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socials.map((social, index) => (
              <div key={social.name} className="col-span-1">
                <SocialCard
                  icon={social.icon}
                  name={social.name}
                  url={social.url}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
