export default function Skills() {
  const skillsData = [
    {
      category: "Programming",
      details: "Python (Beginners Proficiency), Bash Scripting (Proficient), AI-assisted scientific coding and workflow development using various LLM platforms."
    },
    {
      category: "Quantum Chemistry",
      details: "Gaussian09, Gaussian16, ORCA, GAMESS, PSI4, Multiwfn."
    },
    {
      category: "Computational Biology",
      details: "GROMACS, g_mmpbsa, AMBER, CHARMM-GUI, AutoDock, Schrodinger GLIDE, and several online web-servers."
    },
    {
      category: "Visualization Packages",
      details: "PyMol, Chimera, VMD, Discovery Studio, Chem Craft, Mercury, Maestro, LigPlot+, MS PowerPoint."
    },
    {
      category: "Data Tools & DBs",
      details: "MS Excel, ORIGIN, XM-Grace, vi-Editor (Proficient). PDB, MPDS, PubChem, Drug Bank, Uniprot, Kegg."
    },
    {
      category: "Operating Systems",
      details: "Windows, Linux (CentOS, Ubuntu)."
    }
  ];

  return (
    <section className="mb-section-gap-lg">
      <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Technical Experience</h2>
      <div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-6 md:p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {skillsData.map((skill, index) => (
            <li key={index} className="flex flex-col">
              <span className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{skill.category}</span>
              <span className="font-body-secondary text-body-secondary text-on-surface-variant">{skill.details}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
