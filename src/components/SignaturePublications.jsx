import { Link } from 'react-router-dom';

export default function SignaturePublications() {
  return (
    <section className="mb-section-gap-lg">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4">Signature Publications</h2>
        <Link className="hidden md:flex items-center text-on-primary-container font-subhead-bold text-subhead-bold hover:text-academic-navy transition-colors" to="/publications">
          View all <span className="material-symbols-outlined ml-1 text-sm" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        {/* Pub 1 */}
        <div className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all items-start md:items-center">
          <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded flex items-center justify-center text-academic-navy">
            <span className="material-symbols-outlined" data-icon="article">article</span>
          </div>
          <div className="flex-grow">
            <div className="font-label-mono text-label-mono text-slate-gray mb-1">Journal of Applied Pharmaceutical Science | Nov 2025</div>
            <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2 cursor-pointer group-hover:underline decoration-academic-navy/30">
              In-silico studies of anti-tuberculosis drugs using advanced computational technique: A DFT, molecular docking, and QSAR analysis
            </h4>
            <div className="font-body-secondary text-body-secondary text-on-surface-variant">
              Bhavana Panthi, Anwesh Pandey, Indra Sen Ram
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link className="text-tertiary-container font-subhead-bold text-subhead-bold border border-border-subtle rounded px-4 py-2 hover:bg-surface-container transition-colors inline-block whitespace-nowrap" to="/publications">
              View Study
            </Link>
          </div>
        </div>
        {/* Pub 2 */}
        <div className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all items-start md:items-center">
          <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded flex items-center justify-center text-academic-navy">
            <span className="material-symbols-outlined" data-icon="article">article</span>
          </div>
          <div className="flex-grow">
            <div className="font-label-mono text-label-mono text-slate-gray mb-1">Journal of Biomolecular Structure and Dynamics | Nov 2024</div>
            <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2 cursor-pointer group-hover:underline decoration-academic-navy/30">
              Discerning potent CSF-1r inhibitors for targeting and therapy of neuroinflammation using computational approaches
            </h4>
            <div className="font-body-secondary text-body-secondary text-on-surface-variant">
              Anupriya Adhikari, Anwesh Pandey
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link className="text-tertiary-container font-subhead-bold text-subhead-bold border border-border-subtle rounded px-4 py-2 hover:bg-surface-container transition-colors inline-block whitespace-nowrap" to="/publications">
              View Study
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 md:hidden flex justify-center">
        <Link className="text-academic-navy font-subhead-bold text-subhead-bold border-b border-academic-navy pb-1" to="/publications">
          View all publications
        </Link>
      </div>
    </section>
  );
}
