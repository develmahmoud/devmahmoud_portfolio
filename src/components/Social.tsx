import { Github } from 'lucide-react';

import { Facebook, Linkedin, Instagram, X, Mail } from 'lucide-react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { SocialCard } from './SocialCard';

const socials = [
  { name: 'Facebook', icon: Facebook, url: "https://www.facebook.com/mahmoud.muhammadsani.9" },
  { name: 'LinkedIn', icon: Linkedin, url: "https://www.linkedin.com/in/mahmoud-muhammad-sani-680752223/" },
  { name: 'instagram', icon: Instagram, url: "https://www.instagram.com/dev_el_mahmoud" },
  { name: 'Twitter', icon: X, url: "https://twitter.com/dev_el_mahmoud" },
  { name: 'Gmail', icon: Mail, url: "mailto:sanimahmoud10@gmail.com" },
  { name: 'GitHub', icon: Github, url: "https://github.com/develmahmoud" },
  { name: 'WhatsApp', icon: FaWhatsapp, url: "https://wa.me/+2348105003394" },
  { name: 'Discord', icon: FaDiscord, url: "https://" },
];

export function Social() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Connect with Me
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socials.map((skill, index) => (
            <div key={skill.name} className="col-span-1">
              <SocialCard
                icon={skill.icon}
                name={skill.name}
                url={skill.url}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}