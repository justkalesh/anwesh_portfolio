export default function Honours() {
  const honoursData = [
    {
      title: "Postdoctoral Fellowship",
      date: "Oct 2023 - onwards",
      description: "Awarded a postdoctoral research fellowship by The Hebrew University of Jerusalem, Israel."
    },
    {
      title: "UGC PhD Fellowship",
      date: "Sep 2016 - Aug 2020",
      description: "Awarded a research fellowship for four years for pursuing Ph.D. by the University Grants Commission, Govt. of India, New Delhi, India."
    },
    {
      title: "Best Poster Award",
      date: "2019",
      description: "International Symposium on Advances in Functional & Biological Materials (ISAFBM-2019) organized by University of Lucknow & Humboldt Academy."
    },
    {
      title: "Graduate Aptitude Test in Engineering",
      date: "2019",
      description: "Qualified GATE-2019 in Physics with AIR-1907 conducted by Indian Institute of Technology, Madras, India."
    },
    {
      title: "Joint Admission Test in M.Sc.",
      date: "2014",
      description: "Qualified JAM-2014 in Physics with AIR-1831, conducted by Indian Institute of Technology, Kanpur, India."
    },
    {
      title: "College Topper",
      date: "2014",
      description: "Topper in B.Sc. (Mathematics and Physics), DAV College, DDU Gorakhpur University, Gorakhpur, U.P., India."
    }
  ];

  return (
    <section className="mb-section-gap-lg">
      <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-8">Honours and Awards</h2>
      <div className="flex flex-col space-y-4">
        {honoursData.map((honour, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2 bg-surface-container-lowest border border-border-subtle p-5 rounded-lg">
            <div className="w-full md:w-1/4 font-label-mono text-label-mono text-slate-gray whitespace-nowrap">
              {honour.date}
            </div>
            <div className="w-full md:w-3/4">
              <h4 className="font-subhead-bold text-subhead-bold text-academic-navy mb-1">{honour.title}</h4>
              <p className="font-body-secondary text-body-secondary text-on-surface-variant">{honour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
