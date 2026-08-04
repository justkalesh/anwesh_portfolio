export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-border-subtle dark:border-outline-variant mt-auto">
      <div className="w-full py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center max-w-[1120px] mx-auto text-center md:text-left gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-label-mono text-label-mono text-slate-gray">
            © 2026 Dr. Anwesh Pandey. All rights reserved.
          </div>
          <div className="font-body-secondary text-body-secondary text-slate-gray">
            Open to collaboration in computational chemistry and structural biology.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-body-secondary text-body-secondary text-slate-gray hover:text-academic-navy underline transition-all" href="https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
          <a className="font-body-secondary text-body-secondary text-slate-gray hover:text-academic-navy underline transition-all" href="https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" target="_blank" rel="noreferrer">ResearchGate</a>
          <a className="font-body-secondary text-body-secondary text-slate-gray hover:text-academic-navy underline transition-all" href="https://www.linkedin.com/in/anwesh-pandey-61831a2a5/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
