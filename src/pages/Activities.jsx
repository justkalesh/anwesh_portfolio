

export default function Activities() {
  const responsibilities = [
    "Established and managed a fully functional computational research lab by reviving some high-performance computers at Advanced Instrumentation Research Facility, JNU, New Delhi (2020).",
    "Responsible for the maintenance of HPC labs, workstations and servers.",
    "Installed several computational chemistry and computational biology software packages; manage basic network troubleshooting, and provided user support.",
    "Assisted and mentored several junior graduate and dissertation students in computational quantum chemistry, computational biology, computer aided drug design, and non-covalent interactions-based projects.",
    "Resource person for lectures and talks for various academic courses and training programs.",
    "Resource person for hands-on sessions in various training programs and workshops.",
    "Collaborated in a non-academic industrial research and headed a research project.",
    "Reviewed research manuscripts, and projects reports."
  ];

  const activities = [
    {
      title: "Industry Project (NOVARTIS)",
      logoIcon: "corporate_fare",
      logoImg: "https://www.novartis.com/themes/custom/cosmos/logo.svg",
      description: "Studies involving drug delivery via molecular cavitands; structure and dynamics of cavitand-drug complexes; quantum mechanical and electronic structure calculations; molecular dynamics simulations; data collection, curation, and pre-processing for the development of machine learning model for predicting the binding affinity of cavitand-drug complexes."
    },
    {
      title: "Drug Discovery Hackathon (2022)",
      logoIcon: "science",
      logoImg: "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png",
      description: "Preparation of course modules, delivering lectures on molecular docking and simulation, and took hands-on sessions on computational chemistry and biology tools and techniques; guiding students for project work involving data collection, curation, pre-processing and model development. A joint initiative of AICTE, CSIR and supported by Office of Principal Scientific Advisor, Govt. of India, NIC and MyGov."
    },
    {
      title: "ACDS Lecture Series",
      logoIcon: "menu_book",
      logoImg: "",
      description: "Preparation of course study material on artificial intelligence and machine learning; delivering lectures; assessment of progress of participants; delivering hands-on sessions on computational biology and computational chemistry tools."
    },
    {
      title: "DST Student Training Program",
      logoIcon: "school",
      logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXiRdxeOtxOpZQ5_q0IXuK7dVvfeVCvCrIyyzsa-_Rw&s=10",
      description: "Preparation of course module; delivering lectures on basic mathematics and statistics for python programming; and assessment of progress of participants."
    }
  ];

  const conferences = [
    "Awarded Best Poster Presentation for “In-silico studies on 2,5-bis(4-amidinophenyl) furan and its derivatives” in International Symposium on Advances in Functional & Biological Materials (ISAFBM-2019) organized by University of Lucknow & Humboldt Academy Lucknow.",
    "Delivered Oral Presentation on “A comparative analysis of Molecular Dynamics Trajectories for amber03 & charmm27 force fields” in ISCBSC-RSG India Symposium 2019 on: Computational Biology: Connecting Domains of Science, held in, Jawaharlal Nehru University, New Delhi.",
    "Delivered two hands-on sessions on “Using Python scripts in Data Mining” in International Workshop on: Tools and Techniques to Perform Molecular Modelling and Computer Aided Drug Design (MMTT-2021) organized by NIPER Guwahati, Assam, India.",
    "Delivered a hands-on session on “Molecular Docking & Dynamics studies using Autodock & GROMACS” in International Workshop on: Tools and Techniques to Perform Molecular Modelling and Computer Aided Drug Design (MMTT-2021) organized by NIPER Guwahati.",
    "Presented Poster on “Non-covalent Interactions” in North Eastern Research Conclave (NERC- 2022), held in Indian Institute of Technology, Guwahati, Assam, India.",
    "Attended 7-days Training Programme on 'Machine Learning Algorithms using Python for Beginners' organized by Department of Computer Science, Assam University, Silchar (Jan 2023).",
    "Delivered an Invited Talk in DAVPG College, Gorakhpur on “Computer Aided Drug Discovery” on 13th Dec 2023."
  ];

  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg">
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-12">Activities & Responsibilities</h1>
        
        <section className="mb-section-gap-lg">
          <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Key Responsibilities Held</h2>
          <ul className="list-disc pl-6 space-y-3 font-body-main text-body-main text-on-surface-variant max-w-4xl">
            {responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
          </ul>
        </section>

        <section className="mb-section-gap-lg">
          <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Other Academic/Non-Academic Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((act, i) => (
              <div key={i} className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-academic-navy/30 transition-all duration-300 group">
                {act.logoImg ? (
                  <img src={act.logoImg} alt={`${act.title} logo`} className="h-16 w-auto max-w-[200px] object-contain object-left mb-5 group-hover:scale-105 transition-transform duration-300 origin-left" />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-surface-container border border-border-subtle flex items-center justify-center text-academic-navy mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">{act.logoIcon}</span>
                  </div>
                )}
                <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2">{act.title}</h3>
                <p className="font-body-secondary text-body-secondary text-on-surface-variant">{act.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-section-gap-lg">
          <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Conferences, Workshops & Talks</h2>
          <ul className="list-disc pl-6 space-y-4 font-body-secondary text-body-secondary text-on-surface-variant max-w-4xl">
            {conferences.map((conf, i) => <li key={i}>{conf}</li>)}
          </ul>
        </section>
      </main>
    </>
  );
}
