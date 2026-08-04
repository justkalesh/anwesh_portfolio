
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import ResearchFocus from '../components/ResearchFocus';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Honours from '../components/Honours';

export default function Home() {
  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg">
        <Hero />
        <Metrics />
        <ResearchFocus />
        <WorkExperience />
        <Education />
        <Skills />
        <Honours />
      </main>
    </>
  );
}
