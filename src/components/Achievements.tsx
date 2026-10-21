import { SectionHeading } from './SectionHeading';
import Table from './Table';
import { achievementColumns, achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="section-shell bg-grid bg-cream dark:bg-navy-950">
      <div className="section-container">
        <SectionHeading kicker="Recognition" title="Awards &" highlight="Achievements" align="center" />
        <div className="surface-card overflow-hidden p-2 md:p-4">
          <Table columns={achievementColumns} data={achievements} />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
