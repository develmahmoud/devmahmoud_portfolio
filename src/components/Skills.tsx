import {
  Code2,
  Blocks,
  FileCode,
  Database,
  Github,
  Palette,
  Binary,
  Terminal,
  
} from 'lucide-react';
import { SkillCard } from './SkillCard';

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Blocks },
  { name: 'Node.js', icon: FileCode },
  { name: 'PHP', icon: Binary },
  { name: 'Python', icon: Terminal },
  { name: 'GitHub', icon: Github },
  { name: 'MySQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-span-1">
              <SkillCard
                icon={skill.icon}
                name={skill.name}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}