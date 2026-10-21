import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { contact } from '../data/site';
import { SectionHeading } from './SectionHeading';

const details = [
  { label: 'Call me', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'Location', value: contact.location, href: undefined, icon: MapPin },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-grid bg-cream dark:bg-navy-950">
      <div className="section-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading kicker={contact.kicker} title={contact.heading} />
          <ContactForm />
        </div>
        <div className="space-y-4 lg:pt-16">
          {details.map(({ label, value, href, icon: Icon }) => {
            const content = (
              <div className="surface-card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy-950">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-900/50 dark:text-white/50">{label}</p>
                  <p className="font-medium text-navy-950 dark:text-white">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
