import { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

interface SkillCardProps {
  icon: LucideIcon;
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
        "flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md",
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        "hover:transform hover:scale-105 transition-transform"
      )}
    >
      <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
    </div>
  );
}