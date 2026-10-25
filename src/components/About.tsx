import { Mail, User, Briefcase } from 'lucide-react';
import { about } from '../data/site';
import { SectionHeading } from './SectionHeading';

const detailIcons = [User, Mail, Briefcase];

export function About() {
  return (
    <section id="about" className="section-shell bg-white dark:bg-navy-900">
      <div className="section-container grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[28px]" />
          <img
            src={about.Picture2}
            alt={about.photoAlt}
            className="relative z-10 w-full rounded-[24px] object-cover object-top shadow-xl"
          />
        </div>

        <div>
          <SectionHeading kicker={about.kicker} title={about.heading} />
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-base leading-relaxed text-navy-900/70 dark:text-white/70">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 space-y-4">
            {about.details.map((detail, index) => {
              const Icon = detailIcons[index];
              return (
                <li key={detail.label} className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-600 dark:text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="w-16 font-medium text-navy-900/50 dark:text-white/50">{detail.label}</span>
                  <span className="text-navy-950 dark:text-white">{detail.value}</span>
                </li>
              );
            })}
          </ul>

          <a
            href={`https://ng.linkedin.com/in/${about.linkedInVanity}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
