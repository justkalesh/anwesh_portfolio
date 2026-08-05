export default function ResearchFocus() {
  return (
    <section className="mb-section-gap-lg">
      <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-12">Research Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex flex-col h-full group">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-metric-blue flex items-center justify-center text-academic-navy">
              <span className="material-symbols-outlined" data-icon="hub">hub</span>
            </div>
            <span className="font-label-mono text-label-mono text-slate-gray uppercase">Fundamental Interactions</span>
          </div>
          <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-3">Noncovalent Interactions</h3>
          <p className="font-body-secondary text-body-secondary text-on-surface-variant flex-grow">
            Exploring the forces that stabilize biomolecular structures, utilizing high-level computational methods to dissect complex binding networks.
          </p>
          <div className="mt-6 w-full h-32 bg-surface-container border border-border-subtle rounded overflow-hidden">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Noncovalent Interactions" src="/images/research-noncovalent.jpg" loading="lazy" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex flex-col h-full group">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-metric-blue flex items-center justify-center text-academic-navy">
              <span className="material-symbols-outlined" data-icon="timeline">timeline</span>
            </div>
            <span className="font-label-mono text-label-mono text-slate-gray uppercase">Time-Resolved Biology</span>
          </div>
          <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-3">MD Simulations & Biomolecular Dynamics</h3>
          <p className="font-body-secondary text-body-secondary text-on-surface-variant flex-grow">
            Resolving the temporal evolution of protein-ligand systems to understand functional pathways and allosteric mechanisms at the atomic level.
          </p>
          <div className="mt-6 w-full h-32 bg-surface-container border border-border-subtle rounded overflow-hidden">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="MD Simulations" src="/images/research-md-simulations.jpg" loading="lazy" />
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex flex-col h-full group">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-metric-blue flex items-center justify-center text-academic-navy">
              <span className="material-symbols-outlined" data-icon="electric_bolt">electric_bolt</span>
            </div>
            <span className="font-label-mono text-label-mono text-slate-gray uppercase">Molecular Recognition</span>
          </div>
          <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-3">Protein Electrostatics & Docking</h3>
          <p className="font-body-secondary text-body-secondary text-on-surface-variant flex-grow">
            Predicting molecular recognition and binding affinities through rigorous electrostatic profiling and advanced docking algorithms.
          </p>
          <div className="mt-6 w-full h-32 bg-surface-container border border-border-subtle rounded overflow-hidden">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Protein Electrostatics" src="/images/research-electrostatics.jpg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
