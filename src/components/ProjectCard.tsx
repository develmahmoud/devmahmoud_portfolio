import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../types/content';

interface ProjectCardProps extends Project {
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <article
      ref={cardRef}
      className="surface-card overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
    >
      <img src={image} alt={title} className="h-52 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-navy-950 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-900/70 dark:text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-600 dark:text-gold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-4 text-sm font-semibold">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-navy-900 hover:text-gold-600 dark:text-white dark:hover:text-gold"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold-600 dark:text-gold"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
