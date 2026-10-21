import { SectionHeading } from './SectionHeading';
import Table from './Table';
import { certificationColumns, certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section-shell bg-white dark:bg-navy-900">
      <div className="section-container">
        <SectionHeading kicker="Credentials" title="Professional" highlight="Certifications" align="center" />
        <div className="surface-card overflow-hidden p-2 md:p-4">
          <Table data={certifications} columns={certificationColumns} />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
