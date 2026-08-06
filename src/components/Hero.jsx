import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap-lg pt-4">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="font-label-mono text-label-mono text-slate-gray uppercase mb-4 tracking-widest flex items-center gap-2">
          <span>Computational Biology</span>
          <span className="w-1.5 h-1.5 rounded-full bg-metric-blue"></span>
          <span>Molecular Dynamics</span>
        </div>
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-6 tracking-tight">
          Dr. Anwesh Pandey
        </h1>
        <div className="flex flex-col space-y-2 mb-8 border-l-4 border-metric-blue pl-5 py-1">
          <div className="font-body-main text-body-main text-academic-navy font-semibold">
            Postdoctoral Researcher | Computational Structural Biologist
          </div>
          <div className="font-body-secondary text-body-secondary text-slate-gray">
            IIIT Delhi • Former: The Hebrew University of Jerusalem
          </div>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant mb-10 leading-relaxed max-w-3xl">
          I develop multiscale molecular simulations and data-driven frameworks to understand, predict, and optimize biomolecular systems. My research spans Protein/DNA-ligand noncovalent interactions, enzyme catalytic activity prediction using statistical learning, and integrating AI/ML to accelerate computational drug discovery and binding affinity profiling.
        </p>
        
        {/* Interactive Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link to="/publications" className="px-6 py-3 bg-academic-navy text-on-primary font-subhead-bold rounded-lg shadow-md hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(15,23,42,0.2)] transition-all duration-300 text-center">
            View Publications
          </Link>
          <Link to="/activities" className="px-6 py-3 bg-surface-container-lowest border border-border-subtle text-academic-navy font-subhead-bold rounded-lg shadow-sm hover:-translate-y-1 hover:border-academic-navy hover:shadow-md transition-all duration-300 text-center">
            Explore Research
          </Link>
          <a href="/Anwesh_Pandey_CV.pdf" download="Anwesh_Pandey_CV.pdf" className="px-6 py-3 bg-surface-container-lowest border border-border-subtle text-academic-navy font-subhead-bold rounded-lg shadow-sm hover:-translate-y-1 hover:border-academic-navy hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg" data-icon="download">download</span> Download CV
          </a>
        </div>

        {/* Interactive Social Pills */}
        <div className="flex flex-wrap gap-4">
          <a href="mailto:apdapbbau@gmail.com,anwesh.pandey@mail.huji.ac.il" className="w-12 h-12 bg-surface-container-lowest border border-border-subtle rounded-full text-slate-gray hover:text-academic-navy hover:border-academic-navy shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 flex items-center justify-center group" aria-label="Email" title="Email">
            <span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
          </a>
          <a href="https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" target="_blank" rel="noreferrer" className="w-12 h-12 bg-surface-container-lowest border border-border-subtle rounded-full text-slate-gray hover:text-academic-navy hover:border-academic-navy shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 flex items-center justify-center group" aria-label="Google Scholar" title="Google Scholar">
            <span className="material-symbols-outlined text-xl" data-icon="school">school</span>
          </a>
          <a href="https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" target="_blank" rel="noreferrer" className="w-12 h-12 bg-surface-container-lowest border border-border-subtle rounded-full text-slate-gray hover:text-academic-navy hover:border-academic-navy shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 flex items-center justify-center group" aria-label="ResearchGate" title="ResearchGate">
            <span className="material-symbols-outlined text-xl" data-icon="science">science</span>
          </a>
          <a href="https://www.linkedin.com/in/anwesh-pandey-61831a2a5/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-surface-container-lowest border border-border-subtle rounded-full text-slate-gray hover:text-academic-navy hover:border-academic-navy shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 flex items-center justify-center group" aria-label="LinkedIn" title="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center items-center mt-16 md:mt-0 relative">
        <div className="relative group">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border-4 border-surface-container-lowest overflow-hidden bg-surface-container shadow-[0_8px_30px_rgba(15,23,42,0.12)] mx-auto transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src="/images/profile.jpg" 
              alt="Dr. Anwesh Pandey" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating Current Focus Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 md:-bottom-24 bg-surface-container-lowest/95 backdrop-blur-md border border-border-subtle p-4 md:p-5 rounded-xl shadow-xl w-[90%] max-w-[260px] md:max-w-[280px] z-10 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <div className="font-label-mono text-label-mono text-slate-gray uppercase text-xs">Current Focus</div>
            </div>
            <div className="font-body-secondary text-body-secondary text-academic-navy text-sm font-medium leading-relaxed">
              Protein electrostatics, noncovalent interactions & AI-driven property optimization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
