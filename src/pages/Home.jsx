
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import ResearchFocus from '../components/ResearchFocus';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Honours from '../components/Honours';

import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg overflow-hidden">
        <Hero />
        <Metrics />
        <FadeInSection><ResearchFocus /></FadeInSection>
        <FadeInSection><WorkExperience /></FadeInSection>
        <FadeInSection><Education /></FadeInSection>
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Honours /></FadeInSection>
      </main>
    </>
  );
}
