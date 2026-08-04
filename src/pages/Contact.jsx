import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const references = [
    {
      name: "Prof. G. Narahari Sastry",
      affiliation: "Department of Biotechnology, Indian Institute of Technology, Hyderabad, Telangana, India. (Former Director, CSIR-North East Institute of Science and Technology, Jorhat, Assam, India)",
      email: "gnsastry@gmail.com"
    },
    {
      name: "Dr. Anil Kumar Yadav",
      affiliation: "Associate Professor, Department of Physics, Babasaheb Bhimrao Ambedkar University, Lucknow, U.P., India.",
      email: "aksdap11@gmail.com"
    },
    {
      name: "Dr. N. Arul Murugan",
      affiliation: "Associate Professor, Department of Computational Biology, Indraprastha Institute of Information Technology, New Delhi, India.",
      email: "arul.murugan@iiitd.ac.in"
    },
    {
      name: "Dr. Selvaraman Nagamani",
      affiliation: "Senior Scientist, Advanced Computation & Data Science Division, CSIR-North East Institute of Science and Technology, Jorhat, Assam, India.",
      email: "nagamaniselvaraman@gmail.com"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-section-gap-md md:py-section-gap-lg">
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-12">Contact & Profiles</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-section-gap-lg">
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Personal Details</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-slate-gray" data-icon="mail">mail</span>
                <span className="font-body-main text-body-main text-academic-navy">apdapbbau@gmail.com, anwesh.pandey@mail.huji.ac.il</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-slate-gray" data-icon="phone">phone</span>
                <span className="font-body-main text-body-main text-academic-navy">+91-9452444164</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-slate-gray" data-icon="location_on">location_on</span>
                <span className="font-body-main text-body-main text-academic-navy">Gorakhpur, U.P., India</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Professional Profiles</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 space-y-4 flex flex-col">
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57219981694" target="_blank" rel="noreferrer" className="font-body-main text-body-main text-academic-navy hover:underline">
                SCOPUS Profile
              </a>
              <a href="https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" target="_blank" rel="noreferrer" className="font-body-main text-body-main text-academic-navy hover:underline">
                Google Scholar Profile
              </a>
              <a href="https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" target="_blank" rel="noreferrer" className="font-body-main text-body-main text-academic-navy hover:underline">
                ResearchGate Profile
              </a>
              <a href="https://www.linkedin.com/in/anwesh-pandey-61831a2a5/" target="_blank" rel="noreferrer" className="font-body-main text-body-main text-academic-navy hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-section-gap-lg">
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Reviewer & Editing</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 space-y-6">
              <div>
                <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2">Reviewer For</h3>
                <ul className="list-disc pl-5 font-body-secondary text-body-secondary text-on-surface-variant space-y-1">
                  <li>Journal of Biomolecular Structure & Dynamics (Taylor and Francis) [16]</li>
                  <li>Scientific Reports (Springer Nature) [03]</li>
                  <li>Journal of Physical Chemistry A (ACS) [01]</li>
                  <li>Journal of Molecular Liquids (Elsevier) [02]</li>
                  <li>Journal of Physics Condensed Matter (IOP Publishing) [01]</li>
                  <li>Physical Biology (IOP Publishing) [01]</li>
                  <li>Medicinal Chemistry Research (Springer) [01]</li>
                  <li>Physical Chemistry Chemical Physics (RSC) [01]</li>
                  <li>In Silico Pharmacology (Springer Nature) [02]</li>
                </ul>
              </div>
              <div>
                <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2">Editing Experiences</h3>
                <p className="font-body-secondary text-body-secondary text-on-surface-variant">
                  Co-editor for Frontiers in Molecular Biosciences “Advancing Protein and Peptide Research through Multiscale Modelling and Machine Learning”
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">References</h2>
            <div className="flex flex-col space-y-4">
              {references.map((ref, i) => (
                <div key={i} className="bg-surface-container-lowest border border-border-subtle rounded-lg p-5">
                  <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{ref.name}</h4>
                  <div className="font-body-secondary text-body-secondary text-slate-gray mb-2">{ref.affiliation}</div>
                  <a href={`mailto:${ref.email}`} className="font-label-mono text-label-mono text-tertiary-container hover:underline">{ref.email}</a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
