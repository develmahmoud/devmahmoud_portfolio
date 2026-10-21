import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import type { IconComponent } from '../types/content';

interface SkillCardProps {
  icon: IconComponent;
  name: string;
  delay?: number;
}

export function SkillCard({ icon: Icon, name, delay = 0 }: SkillCardProps) {
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
    <div
      ref={cardRef}
      className={cn(
        'surface-card flex flex-col items-center p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out',
        'hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold'
      )}
    >
      <Icon className="mb-4 h-10 w-10 text-gold-600 dark:text-gold" />
      <h3 className="text-sm font-semibold text-navy-950 dark:text-white md:text-base">{name}</h3>
    </div>
  );
}
