import { useState, useEffect, useRef } from 'react';

function CountUpMetric({ endValue, label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const metricRef = useRef(null);

  useEffect(() => {
    // Set up an Intersection Observer to detect when the element scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after it becomes visible so it only animates once
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    if (metricRef.current) {
      observer.observe(metricRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only start counting if it has scrolled into view
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const frameRate = 1000 / 60; // ~60fps
    const totalSteps = duration / frameRate;
    const incrementValue = endValue / totalSteps;

    const timer = setInterval(() => {
      start += incrementValue;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div className="flex flex-col" ref={metricRef}>
      <span className="font-metric-value text-metric-value text-academic-navy mb-1">{count}</span>
      <span className="font-label-mono text-label-mono text-slate-gray uppercase">{label}</span>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="bg-surface-container-lowest border border-border-subtle rounded-xl py-8 px-6 md:px-12 mb-section-gap-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-subtle text-center">
        <CountUpMetric endValue={45} label="Citations" />
        <CountUpMetric endValue={8} label="h-index" />
        <CountUpMetric endValue={6} label="i10-index" />
        {/* Note: Kept 13 as shown in the original design/Google Scholar, 
            though your CV lists 20 total including books/reviews! */}
        <CountUpMetric endValue={13} label="Publications" />
      </div>
    </section>
  );
}
