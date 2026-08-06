

export default function Contact() {
  return (
    <>
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-section-gap-md md:pb-section-gap-lg">
        
        {/* Intro */}
        <section className="max-w-3xl mb-10">
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-academic-navy mb-4">Contact & Profiles</h1>
          <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">
            I welcome research discussions, collaborations, invited talks, student mentoring, and academic networking in computational structural biology, molecular simulations, protein language models, peptide science, food protein modeling, and AI-driven biomolecular research.
          </p>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left Column: Contact Information */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-border-subtle relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-academic-navy"></div>
            
            <h2 className="font-headline-section text-headline-section text-academic-navy flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-academic-navy">person</span>
              Contact Information
            </h2>

            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border-subtle bg-surface-container-lowest hover:border-academic-navy/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container text-academic-navy flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-subhead-bold text-sm text-academic-navy mb-1">Email</h3>
                  <div className="flex flex-col font-body-secondary text-sm text-on-surface-variant">
                    <a href="mailto:apdapbbau@gmail.com" className="hover:text-academic-navy transition-colors font-medium">apdapbbau@gmail.com</a>
                    <a href="mailto:anwesh.pandey@mail.huji.ac.il" className="hover:text-academic-navy transition-colors font-medium">anwesh.pandey@mail.huji.ac.il</a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border-subtle bg-surface-container-lowest hover:border-academic-navy/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container text-academic-navy flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <h3 className="font-subhead-bold text-sm text-academic-navy mb-1">Phone</h3>
                  <a href="tel:+919452444164" className="font-body-secondary text-sm text-on-surface-variant hover:text-academic-navy transition-colors font-medium">
                    +91-9452444164
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border-subtle bg-surface-container-lowest hover:border-academic-navy/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container text-academic-navy flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-subhead-bold text-sm text-academic-navy mb-1">Location</h3>
                  <span className="font-body-secondary text-sm text-on-surface-variant">Gorakhpur, U.P., India</span>
                </div>
              </div>
            </div>

            <h3 className="font-subhead-bold text-academic-navy mb-4 text-[0.95rem]">Professional Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "SCOPUS Profile", icon: "link", url: "https://www.scopus.com/authid/detail.uri?authorId=57219981694" },
                { name: "Google Scholar", icon: "school", url: "https://scholar.google.com/citations?user=mIyCMpQAAAAJ&hl=en" },
                { name: "ResearchGate", icon: "science", url: "https://www.researchgate.net/scientific-contributions/Anwesh-Pandey-2198733402" },
                { name: "LinkedIn", icon: "person", url: "https://www.linkedin.com/in/anwesh-pandey-61831a2a5/" }
              ].map((profile, i) => (
                <a key={i} href={profile.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle bg-surface-container-lowest hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50 hover:border-academic-navy/30 transition-all duration-200 text-academic-navy no-underline group">
                  <div className="w-8 h-8 rounded-full bg-surface-container text-academic-navy flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                    {profile.name === "LinkedIn" ? (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ) : (
                      <span className="material-symbols-outlined text-[1.1rem]">{profile.icon}</span>
                    )}
                  </div>
                  <span className="text-sm font-bold">{profile.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-border-subtle relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-academic-navy"></div>
            
            <h2 className="font-headline-section text-headline-section text-academic-navy flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-academic-navy">mail</span>
              Get in touch
            </h2>
            <p className="text-sm text-slate-500 mb-6">Send a message for direct inquiries or collaborations.</p>

            <form action="https://formsubmit.co/apdapbbau@gmail.com" method="POST" className="space-y-4">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New submission from your academic website!" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-academic-navy mb-1.5">Name</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full rounded-xl border border-border-subtle p-3 text-sm focus:outline-none focus:border-academic-navy focus:ring-3 focus:ring-academic-navy/20 transition-all bg-surface-container-lowest text-academic-navy placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-academic-navy mb-1.5">Email</label>
                  <input type="email" name="email" required placeholder="your.email@example.com" className="w-full rounded-xl border border-border-subtle p-3 text-sm focus:outline-none focus:border-academic-navy focus:ring-3 focus:ring-academic-navy/20 transition-all bg-surface-container-lowest text-academic-navy placeholder:text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-academic-navy mb-1.5">Subject</label>
                <select name="subject" required className="w-full rounded-xl border border-border-subtle p-3 text-sm focus:outline-none focus:border-academic-navy focus:ring-3 focus:ring-academic-navy/20 transition-all bg-surface-container-lowest text-academic-navy appearance-none">
                  <option value="Collaboration Inquiry">Collaboration Inquiry</option>
                  <option value="Invited Talk / Seminar">Invited Talk / Seminar</option>
                  <option value="Research Discussion">Research Discussion</option>
                  <option value="Mentoring / Student Project">Mentoring / Student Project</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-academic-navy mb-1.5">Message</label>
                <textarea name="message" required rows="4" placeholder="How can we collaborate?" className="w-full rounded-xl border border-border-subtle p-3 text-sm focus:outline-none focus:border-academic-navy focus:ring-3 focus:ring-academic-navy/20 transition-all bg-surface-container-lowest text-academic-navy placeholder:text-gray-400 resize-y"></textarea>
              </div>
              <div className="pt-2">
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-academic-navy text-white text-sm font-bold hover:bg-academic-navy/90 hover:-translate-y-0.5 transition-all shadow-md">
                  <span className="material-symbols-outlined text-[1.2rem]">send</span>
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 rounded-xl bg-surface-container border-l-4 border-academic-navy text-sm text-on-surface-variant">
              I generally reply within <strong>24-48 hours</strong>. For urgent matters, please indicate so in the subject line.
            </div>
          </div>

        </div>

        {/* Reviewer & Editing Block */}
        <section className="mb-12">
          <h2 className="font-headline-section text-headline-section text-academic-navy border-l-4 border-academic-navy pl-4 mb-6">Reviewer & Editing</h2>
          <div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-subhead-bold text-lg text-academic-navy mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-academic-navy">rate_review</span>
                  Reviewer For
                </h3>
                <ul className="space-y-3 font-body-secondary text-on-surface-variant">
                  {[
                    "Journal of Biomolecular Structure & Dynamics (Taylor and Francis) [16]",
                    "Scientific Reports (Springer Nature) [03]",
                    "Journal of Physical Chemistry A (ACS) [01]",
                    "Journal of Molecular Liquids (Elsevier) [02]",
                    "Journal of Physics Condensed Matter (IOP Publishing) [01]",
                    "Physical Biology (IOP Publishing) [01]",
                    "Medicinal Chemistry Research (Springer) [01]",
                    "Physical Chemistry Chemical Physics (RSC) [01]",
                    "In Silico Pharmacology (Springer Nature) [02]"
                  ].map((journal, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-academic-navy text-[1.1rem] mt-0.5">check_circle</span>
                      <span>{journal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-subhead-bold text-lg text-academic-navy mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-academic-navy">edit_document</span>
                  Editing Experiences
                </h3>
                <div className="p-5 rounded-xl border border-border-subtle bg-surface-container text-academic-navy font-body-main leading-relaxed">
                  Co-editor for Frontiers in Molecular Biosciences: 
                  <br/>
                  <strong className="block mt-2">"Advancing Protein and Peptide Research through Multiscale Modelling and Machine Learning"</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
