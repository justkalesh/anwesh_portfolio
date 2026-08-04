export default function Metrics() {
  return (
    <section className="bg-surface-container-lowest border border-border-subtle rounded-xl py-8 px-6 md:px-12 mb-section-gap-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-subtle text-center">
        <div className="flex flex-col">
          <span className="font-metric-value text-metric-value text-academic-navy mb-1">45</span>
          <span className="font-label-mono text-label-mono text-slate-gray uppercase">Citations</span>
        </div>
        <div className="flex flex-col">
          <span className="font-metric-value text-metric-value text-academic-navy mb-1">8</span>
          <span className="font-label-mono text-label-mono text-slate-gray uppercase">h-index</span>
        </div>
        <div className="flex flex-col">
          <span className="font-metric-value text-metric-value text-academic-navy mb-1">6</span>
          <span className="font-label-mono text-label-mono text-slate-gray uppercase">i10-index</span>
        </div>
        <div className="flex flex-col">
          <span className="font-metric-value text-metric-value text-academic-navy mb-1">13</span>
          <span className="font-label-mono text-label-mono text-slate-gray uppercase">Publications</span>
        </div>
      </div>
    </section>
  );
}
