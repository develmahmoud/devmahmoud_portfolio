import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section-shell bg-white dark:bg-navy-900">
      <div className="section-container">
        <SectionHeading kicker="Selected Work" title="Featured" highlight="Projects" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 160}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
