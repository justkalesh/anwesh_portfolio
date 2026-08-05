import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="font-metric-value text-[120px] leading-none text-border-subtle font-bold mb-4 select-none">404</div>
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-4">
          Page Not Found
        </h1>
        <p className="font-body-main text-body-main text-on-surface-variant mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-academic-navy text-on-primary font-subhead-bold text-subhead-bold px-8 py-3 rounded hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
          Back to Home
        </Link>
      </main>
    </>
  );
}
