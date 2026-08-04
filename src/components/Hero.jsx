export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap-lg">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="font-label-mono text-label-mono text-slate-gray uppercase mb-4 tracking-widest">
          Postdoctoral Fellow
        </div>
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-6">
          Dr. Anwesh Pandey
        </h1>
        <div className="flex flex-col space-y-2 mb-8 border-l-4 border-academic-navy pl-4">
          <div className="font-body-main text-body-main text-academic-navy font-semibold">
            Current: IIIT Delhi
          </div>
          <div className="font-body-secondary text-body-secondary text-slate-gray">
            Previous: The Hebrew University of Jerusalem
          </div>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant mb-8 leading-relaxed max-w-3xl">
          I'm a motivated researcher passionate about teaching physics & research at intersection of computational chemistry, biology, computer-aided drug discovery, and in-house database development. During my Ph.D., I explored Protein/DNA-ligand underlying noncovalent interactions. More recently, I've been expanding my work into developing manually curated database for enzyme catalytic activity prediction based on sequence information combining bioinformatics with statistical learning approaches. I'm particularly excited about using AI/ML to accelerate drug discovery pipelines, binding affinity prediction, and molecular property optimization, followed by developing databases. I am willing to join an institution where I can scale as an independent researcher and contribute to advancing research, mentoring students and establishing collaborations.
        </p>
        <div className="flex space-x-4">
          <a href="https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" target="_blank" rel="noreferrer" className="p-2 border border-border-subtle rounded text-slate-gray hover:text-academic-navy hover:border-academic-navy transition-all flex items-center justify-center group" aria-label="Google Scholar">
            <span className="material-symbols-outlined" data-icon="school">school</span>
          </a>
          <a href="https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" target="_blank" rel="noreferrer" className="p-2 border border-border-subtle rounded text-slate-gray hover:text-academic-navy hover:border-academic-navy transition-all flex items-center justify-center group" aria-label="ResearchGate">
            <span className="material-symbols-outlined" data-icon="science">science</span>
          </a>
          <a href="mailto:apdapbbau@gmail.com,anwesh.pandey@mail.huji.ac.il" className="p-2 border border-border-subtle rounded text-slate-gray hover:text-academic-navy hover:border-academic-navy transition-all flex items-center justify-center group" aria-label="Email">
            <span className="material-symbols-outlined" data-icon="mail">mail</span>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative">
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[2rem] border border-border-subtle overflow-hidden bg-surface-container shadow-[0_4px_20px_rgba(15,23,42,0.05)] mx-auto">
            <img 
              src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=mIyCMpQAAAAJ&citpid=10" 
              alt="Dr. Anwesh Pandey" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Current Focus Badge */}
          <div className="absolute -bottom-8 -right-2 md:-bottom-12 md:-right-10 bg-surface-container-lowest border border-border-subtle p-4 md:p-6 rounded-lg shadow-lg max-w-[200px] md:max-w-[280px] z-10">
            <div className="font-label-mono text-label-mono text-slate-gray uppercase mb-1 md:mb-2 text-xs md:text-sm">Current Focus</div>
            <div className="font-body-secondary text-body-secondary text-academic-navy text-sm md:text-base leading-tight md:leading-normal">
              Multiscale modeling of protein electrostatics and noncovalent interactions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
