

export default function Publications() {
  const publicationsList = [
    {
      id: 1,
      journal: "Journal of Applied Pharmaceutical Science",
      date: "2025",
      title: "In-silico studies of anti-tuberculosis drugs using advanced computational technique: A DFT, molecular docking, and QSAR analysis",
      authors: "B. Panthi, A. Pandey, I. S. Ram, S. Begum, S. Kumar"
    },
    {
      id: 2,
      journal: "Probiotics & Antimicrobial Proteins",
      date: "2025",
      title: "High Throughput Meta-analysis of Antimicrobial Peptides for Characterizing Class Specific Therapeutic Candidates: An In-Silico Approach",
      authors: "A. Pandey, R. R. Lenin, S. Patiyal, P. Agrawal"
    },
    {
      id: 3,
      journal: "Journal of Biomolecular Structure and Dynamics",
      date: "2024",
      title: "Discerning Potent CSF-1R inhibitors for Targeting and Therapy of Neuroinflammation using Computational Approaches",
      authors: "A. Adhikari, A. Pandey*"
    },
    {
      id: 4,
      journal: "Indian Journal of Chemistry",
      date: "2024",
      title: "Modelling DNA-ligand interactions through variable force-field based MD simulations",
      authors: "A. Pandey*, A. Adhikari"
    },
    {
      id: 5,
      journal: "RSC Advances",
      date: "2023",
      title: "Tracing the Transition from Covalent to Non-covalent Functionalization of Pyrene through C-, N-, and O- based Ionic and Radical Substrates using Quantum Mechanical Calculations",
      authors: "A. Pandey*, N. Kumar"
    },
    {
      id: 6,
      journal: "J. Comput. Chem.",
      date: "2023",
      title: "Binding propensity and selectivity of cationic, anionic, and neutral guests with model hydrophobic hosts: A first principles study",
      authors: "Y. B. Kumar, A. Pandey, N. Kumar, G. N. Sastry"
    },
    {
      id: 7,
      journal: "Materials Science and Engineering: B",
      date: "2022",
      title: "Synthesis of La2O3-Cr2O3-SrO nanocomposite by pyrolysis of metal carboxylates; its characterization, DFT studies and significance in humidity sensing",
      authors: "S. Sikarwar, A. Pandey, A. Singh, B.C. Yadav, I.E. Uflyand, G.I. Dzhardimalieva"
    },
    {
      id: 8,
      journal: "Letters in Drug Design & Discovery",
      date: "2022",
      title: "Determination of Hybrid TSPO Ligands with Minimal Impact of SNP (rs6971) through Molecular Docking and MD Simulation Study",
      authors: "A. Adhikari, A. Pandey, D. Kumar, A. K. Tiwari"
    },
    {
      id: 9,
      journal: "Sensors and Actuators B: Chemical",
      date: "2022",
      title: "Design and development of flexible humidity sensor for baby diaper alarm: Experimental and theoretical study",
      authors: "P. Chaudhary, D. K. Maurya, A. Pandey, A. Verma, R. K. Tripathi, S. Kumar, B. C. Yadav"
    },
    {
      id: 10,
      journal: "Bioorganic Chemistry",
      date: "2021",
      title: "Synthesis, in vitro and computational studies of novel glycosyl-1, 2, 3-1H-triazolyl methyl benzamide derivatives as potential α-glucosidase inhibitory activity",
      authors: "A. K. Shukla, M. K. Shrivas, A. Pandey, J. Pandey"
    },
    {
      id: 11,
      journal: "Biointerface Research in Applied Chemistry",
      date: "2021",
      title: "Vibrational Analysis Vibrational Analysis and Molecular Docking Studies on some Ribonuclease-H HIV Inhibitors",
      authors: "P. Sinha, A. Pandey, A. K. Yadav"
    },
    {
      id: 12,
      journal: "Drug Des.",
      date: "2020",
      title: "Interaction, Dynamics and Stability Analysis of Some Minor Groove Binders with B-DNA Dodecamer 5’-(CGCAAATTTGCG)-3’",
      authors: "A. Pandey, A. Upadhyaya, S. Kumar, A. K. Yadav"
    },
    {
      id: 13,
      journal: "Sensors and Actuators B: Chemical",
      date: "2020",
      title: "Ultrafast response humidity sensor based on roasted gram derived carbon quantum dots: Experimental and theoretical study.",
      authors: "P. Chaudhary, D. K. Maurya, S. Yadav, A. Pandey, R. K. Tripathi, B. C. Yadav"
    },
    {
      id: 14,
      journal: "European Journal of Biological Research",
      date: "2020",
      title: "Molecular Docking Studies on Binding Specificity of 3,6- and 2,7-Carbazoles With DNA Duplexes.",
      authors: "A. Pandey, M. Misra, A. K. Yadav"
    },
    {
      id: 15,
      journal: "The International Journal of Analytical And Experimental Modal Analysis",
      date: "2020",
      title: "Understanding interactions of DNA minor groove binders using advanced computational techniques",
      authors: "A. Pandey, A. K. Yadav, R. Mishra, D. Kumar"
    },
    {
      id: 16,
      journal: "Advanced Science, Engineering and Medicine",
      date: "2020",
      title: "Unveiling the Antimicrobial Activities of Dicationic Carbazoles and Related Analogs Through Computational Docking",
      authors: "A. Pandey, R. Yadav, A. Shukla, A.K. Yadav"
    },
    {
      id: 17,
      journal: "Advanced Science, Engineering and Medicine",
      date: "2020",
      title: "Molecular Docking Studies of Enzyme Binding Drugs on Family of Cytochrome P450 Enzymes",
      authors: "R. Yadav, A. Pandey, N. Awasthi, A. Shukla"
    },
    {
      id: 18,
      journal: "Conference Proceedings of ISAFBM-2019",
      date: "2019",
      title: "In-silico docking studies of 2,5-bis(4- amidinophenyl) furan and its derivatives",
      authors: "A. Pandey, R. Mishra, A. Shukla, A.K. Yadav, D. Kumar"
    },
    {
      id: 19,
      journal: "Conference Proceedings of ISAFBM-2019",
      date: "2019",
      title: "Interactions of Flavonols with DNA: Molecular Docking Studies",
      authors: "A. Shukla, R. Mishra, A. Pandey, A.K. Dwivedi, D. Kumar"
    },
    {
      id: 20,
      journal: "Journal [Volume 10, Issue 7]",
      date: "2018",
      title: "A density functional theory study on structural stability and electronic properties of Co x O y (X+ Y= 4–12) nanoclusters",
      authors: "R. Shastri, N. Awasthi, D. Kumar, A. K. Yadav, D. Roy, S. P. Goutam, A. Pandey"
    }
  ];

  const bookChapters = [
    {
      id: 1,
      title: "Computational work on Designing of Membrane Materials useful for Petroleum Industry",
      authors: "A. Pandey, S. Hazarika",
      publisher: "CRC Press, Taylor & Francis, 2023"
    },
    {
      id: 2,
      title: "Unravelling the factors controlling Molecular Aggregation: Examining various Non-Covalent Interactions and their Cooperativity",
      authors: "A. Pandey, N. Kumar, Y. B. Kumar, G. N. Sastry",
      publisher: "Elsevier, 2022 (Communicated)"
    },
    {
      id: 3,
      title: "Free Energy Calculations and Molecular Dynamics in Ligand-Target Interactions",
      authors: "A. Pandey, G. Gayathri",
      publisher: "Bentham Science, 2026 (to be communicated soon)"
    }
  ];

  const books = [
    {
      id: 1,
      title: "Molecular Targets and Pharmacotherapy in Heptacellular Carcinoma",
      authors: "A.K. Gautam, P. Kumar, V.K. Vishwakarma, A. Pandey, S. Mishra",
      publisher: "Bentham Science, 2026"
    },
    {
      id: 2,
      title: "Advances in Computational Molecular Sciences: From Non-Covalent Interactions to Artificial Intelligence",
      authors: "A. Pandey, N. Kumar, Y.B. Kumar",
      publisher: "Bentham Science, 2026, (Proposed)"
    }
  ];

  const manuscripts = [
    {
      id: 1,
      title: "Ti(IV) Asymmetric Acetyl-substituted Phenolato Hexacoordinate Complexes as Anticancer Chemotherapy of Enhanced Bioavailability (Communicated)",
      authors: "M. Taha, A. Pandey, A. Shurki, E. Y. Tshuva"
    },
    {
      id: 2,
      title: "A simpler approach to study bonding in Large Molecular Systems (under preparation)",
      authors: "A. Pandey, D. Danovich, A. Shurki"
    },
    {
      id: 3,
      title: "Capping of Host-Guest Complexes and Effect of Cooperativity (to be communicated soon)",
      authors: "A. Pandey, Y. B. Kumar, G. N. Sastry"
    },
    {
      id: 4,
      title: "Size Dependency of Reactive Substrates on Covalent Functionalization of Carbon Nanostructures (under preparation)",
      authors: "A. Pandey, G. Gayathri, G.N. Sastry"
    }
  ];

  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg">
        
        {/* Peer-Reviewed Publications */}
        <section className="mb-section-gap-lg">
          <div className="mb-12">
            <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-4">Publications</h1>
            <p className="font-body-main text-body-main text-on-surface-variant max-w-3xl">
              A comprehensive list of peer-reviewed articles, preprints, and research outputs focusing on structural biology, biomolecular dynamics, and computational chemistry.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            {publicationsList.map((pub) => (
              <a 
                key={pub.id} 
                href={pub.link || `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-surface-container-lowest border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-academic-navy/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                  <div className="font-label-mono text-label-mono text-slate-gray uppercase group-hover:text-academic-navy transition-colors">{pub.journal}</div>
                  <div className="font-label-mono text-label-mono text-slate-gray bg-surface-container px-3 py-1 rounded">{pub.date}</div>
                </div>
                <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-3 group-hover:underline">
                  {pub.title}
                </h4>
                <div className="font-body-secondary text-body-secondary text-on-surface-variant mb-4">
                  {pub.authors}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Books & Book Chapters */}
        <section className="mb-section-gap-lg grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Book Chapters</h2>
            <div className="flex flex-col space-y-4">
              {bookChapters.map(bc => (
                <a 
                  key={bc.id} 
                  href={bc.link || `https://scholar.google.com/scholar?q=${encodeURIComponent(bc.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-surface-container-lowest border border-border-subtle rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-academic-navy/30 transition-all duration-300 group cursor-pointer"
                >
                  <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2 group-hover:underline">{bc.title}</h4>
                  <div className="font-body-secondary text-body-secondary text-on-surface-variant mb-1">{bc.authors}</div>
                  <div className="font-label-mono text-label-mono text-slate-gray">{bc.publisher}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Books</h2>
            <div className="flex flex-col space-y-4">
              {books.map(b => (
                <a 
                  key={b.id} 
                  href={b.link || `https://scholar.google.com/scholar?q=${encodeURIComponent(b.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-surface-container-lowest border border-border-subtle rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-academic-navy/30 transition-all duration-300 group cursor-pointer"
                >
                  <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2 group-hover:underline">{b.title}</h4>
                  <div className="font-body-secondary text-body-secondary text-on-surface-variant mb-1">{b.authors}</div>
                  <div className="font-label-mono text-label-mono text-slate-gray">{b.publisher}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Manuscripts */}
        <section className="mb-section-gap-lg">
          <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Manuscripts (Communicated / Under Preparation)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {manuscripts.map(m => (
              <a 
                key={m.id} 
                href={m.link || `https://scholar.google.com/scholar?q=${encodeURIComponent(m.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-surface-container-lowest border border-border-subtle rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-academic-navy/30 transition-all duration-300 group cursor-pointer"
              >
                <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-2 group-hover:underline">{m.title}</h4>
                <div className="font-body-secondary text-body-secondary text-on-surface-variant">{m.authors}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
