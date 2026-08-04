export default function WorkExperience() {
  const experienceData = [
    {
      id: 1,
      period: "July 2026 – Present",
      title: "Postdoctoral Fellow",
      institution: "Department of Computational Biology, Indraprastha Institute of Information Technology, New Delhi, India.",
      area: "AI/ML in Ligand Based Drug Design; Database Development; Noncovalent Interactions.",
      pi: "Dr. N. Arul Murugan"
    },
    {
      id: 2,
      period: "Oct 2023 – July 2026",
      title: "Postdoctoral Fellow",
      institution: "School of Pharmacy, The Hebrew University of Jerusalem, Israel.",
      area: "AI/ML in Enzyme Catalytic Activity Prediction; Database Development; Protein Electrostatics; Noncovalent Interactions; Valence Bond Modelling.",
      pi: "Prof. Avital Shurki"
    },
    {
      id: 3,
      period: "Feb 2021 – Jul 2023",
      title: "CSIR-Senior Project Associate",
      institution: "Advanced Computation and Data Sciences Division, CSIR-North East Institute of Science and Technology, Jorhat, Assam.",
      area: "Manifestation, and quantification of various Non-Covalent Interactions in complex chemical, biological and supramolecular systems.",
      pi: "Prof. G. Narahari Sastry"
    },
    {
      id: 4,
      period: "Jun 2022 – Feb 2023",
      title: "NOVARTIS – CSIR Industry Collaboration Project",
      institution: "Advanced Computation and Data Sciences Division, CSIR-North East Institute of Science and Technology, Jorhat, Assam.",
      area: "Studies involving drug delivery via molecular cavitands; electronic structure and molecular dynamics of cavitand-drug complexes; empirical data collection, manual curation, and pre-processing for the development of ML model to predict binding affinity.",
      pi: "Prof. G. Narahari Sastry"
    },
    {
      id: 5,
      period: "Sep 2020 – Dec 2020",
      title: "DST-SERB (Senior Research Fellow)",
      institution: "Special Center for Molecular Medicine, Jawaharlal Nehru University, New Delhi.",
      area: "Comparison of E. coli and S. aureus in antimicrobial resistance in Human DNA topoisomerase 1A using advanced computational tools, Protein-Ligand Interactions for development of novel COVID therapeutics.",
      pi: "Prof. Vibha Tandon"
    },
    {
      id: 6,
      period: "Feb 2020 – Mar 2020",
      title: "Internship",
      institution: "Department of Chemistry, Indian Institute of Technology, Guwahati, Assam.",
      area: "Shell Scripting, Python & C Programming, Automation of work flow in computational chemistry & biology softwares.",
      pi: "(Late) Dr. Hemant Kumar Srivastava"
    }
  ];

  return (
    <section className="mb-section-gap-lg">
      <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Work Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 hover:shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all">
            <div className="font-label-mono text-label-mono text-slate-gray mb-2">{exp.period}</div>
            <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{exp.title}</h3>
            <div className="font-body-secondary text-body-secondary text-slate-gray font-semibold mb-3">{exp.institution}</div>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant mb-3">
              <span className="font-semibold text-academic-navy">Area:</span> {exp.area}
            </p>
            <div className="font-body-secondary text-body-secondary text-on-surface-variant italic">
              <span className="font-semibold not-italic text-academic-navy">PI:</span> {exp.pi}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
