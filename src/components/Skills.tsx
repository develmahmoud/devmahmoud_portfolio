import { SkillCard } from './SkillCard';
import { skills } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section className="section-shell bg-grid bg-cream dark:bg-navy-950">
      <div className="section-container">
        <SectionHeading kicker="Capabilities" title="Skills &" highlight="Technologies" align="center" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
