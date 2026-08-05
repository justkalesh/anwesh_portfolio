

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
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg">
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-8 md:mb-12">Contact & Profiles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-section-gap-lg">
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Personal Details</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-4 md:p-6 space-y-4">
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0 mt-0.5" data-icon="mail">mail</span>
                <div className="font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy break-all">
                  <a href="mailto:apdapbbau@gmail.com" className="hover:underline">apdapbbau@gmail.com</a>
                  <span className="text-slate-gray mx-1">,</span>
                  <a href="mailto:anwesh.pandey@mail.huji.ac.il" className="hover:underline">anwesh.pandey@mail.huji.ac.il</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="phone">phone</span>
                <a href="tel:+919452444164" className="font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy hover:underline">+91-9452444164</a>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="location_on">location_on</span>
                <span className="font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy">Gorakhpur, U.P., India</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Professional Profiles</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-4 md:p-6 space-y-3 flex flex-col">
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57219981694" target="_blank" rel="noreferrer" className="flex items-center space-x-3 font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy hover:underline py-1">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="link">link</span>
                <span>SCOPUS Profile</span>
              </a>
              <a href="https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" target="_blank" rel="noreferrer" className="flex items-center space-x-3 font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy hover:underline py-1">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="school">school</span>
                <span>Google Scholar Profile</span>
              </a>
              <a href="https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" target="_blank" rel="noreferrer" className="flex items-center space-x-3 font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy hover:underline py-1">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="science">science</span>
                <span>ResearchGate Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/anwesh-pandey-61831a2a5/" target="_blank" rel="noreferrer" className="flex items-center space-x-3 font-body-secondary md:font-body-main text-body-secondary md:text-body-main text-academic-navy hover:underline py-1">
                <span className="material-symbols-outlined text-slate-gray flex-shrink-0" data-icon="person">person</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-section-gap-lg">
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Reviewer & Editing</h2>
            <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-4 md:p-6 space-y-6">
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
                  Co-editor for Frontiers in Molecular Biosciences "Advancing Protein and Peptide Research through Multiscale Modelling and Machine Learning"
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">References</h2>
            <div className="flex flex-col space-y-4">
              {references.map((ref, i) => (
                <div key={i} className="bg-surface-container-lowest border border-border-subtle rounded-lg p-4 md:p-5">
                  <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{ref.name}</h4>
                  <div className="font-body-secondary text-body-secondary text-slate-gray mb-2">{ref.affiliation}</div>
                  <a href={`mailto:${ref.email}`} className="font-label-mono text-label-mono text-academic-navy hover:underline break-all">{ref.email}</a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
