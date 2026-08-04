export default function Education() {
  const educationData = [
    {
      id: 1,
      period: "Sep 2016 – Dec 2020",
      degree: "Ph.D. in Applied Physics",
      institution: "Babasaheb Bhimrao Ambedkar University, Lucknow, U.P.",
      details: [
        { label: "Major", text: "Computational Biophysics, Molecular Modelling, Non-covalent Interactions, and Automation of work flow through bash scripting." },
        { label: "Dissertation", text: "A Computational Study of Drug-DNA Interactions." },
        { label: "PI", text: "Dr. Anil Kumar Yadav" }
      ]
    },
    {
      id: 2,
      period: "2014 – 2016",
      degree: "Master of Science in Applied Physics",
      institution: "Babasaheb Bhimrao Ambedkar University, Lucknow, U.P.",
      details: [
        { label: "Major", text: "Molecular Modelling, C-Programming, Laser & Fiber Optics." },
        { label: "Dissertation", text: "A DFT study of electronic properties of FDA approved drugs used in the treatment of respiratory diseases." },
        { label: "PI", text: "Prof. Devesh Kumar" },
        { label: "CGPA", text: "7.58/10" }
      ]
    },
    {
      id: 3,
      period: "2011 – 2014",
      degree: "Bachelor of Science in Physics & Mathematics",
      institution: "DAV PG College, DDU Gorakhpur University, Gorakhpur, U.P.",
      details: [
        { label: "Major", text: "Quantum Mechanics, Atomic & Molecular Physics, Vector Algebra, Differential Equations." },
        { label: "Marks (%)", text: "69/100" }
      ]
    }
  ];

  return (
    <section className="mb-section-gap-lg">
      <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Education</h2>
      <div className="flex flex-col space-y-6 border-l border-border-subtle ml-2 pl-6 relative">
        {educationData.map((edu) => (
          <div key={edu.id} className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-academic-navy"></div>
            <div className="font-label-mono text-label-mono text-slate-gray mb-1">{edu.period}</div>
            <h3 className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{edu.degree}</h3>
            <div className="font-body-main text-body-main text-academic-navy font-semibold mb-2">{edu.institution}</div>
            <div className="space-y-1">
              {edu.details.map((detail, index) => (
                <div key={index} className="font-body-secondary text-body-secondary text-on-surface-variant">
                  <span className="font-semibold text-slate-gray">{detail.label}:</span> {detail.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
