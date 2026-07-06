import React, { useState } from "react";
import serviceCaseLawsData from "../../data/servicematters/serviceCaseLawsData.js";

function ServiceCaseLaws() {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCourtClick = (court) => {
    setSelectedCourt(court);
    setSelectedSection(null);
    scrollTop();
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    scrollTop();
  };

  const backToCourts = () => {
    setSelectedCourt(null);
    setSelectedSection(null);
    scrollTop();
  };

  const backToSections = () => {
    setSelectedSection(null);
    scrollTop();
  };

  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            {serviceCaseLawsData.title}
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            {serviceCaseLawsData.subtitle}
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-8 md:py-10">
        {/* STEP 1: COURTS */}
        {!selectedCourt && !selectedSection && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCaseLawsData.courts.map((court) => (
              <button
                key={court.id}
                type="button"
                onClick={() => handleCourtClick(court)}
                className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                    <span className="text-2xl">⚖️</span>
                  </div>

                  <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                    {court.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {court.description}
                  </p>

                  <div className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1A7963] text-white text-sm font-bold group-hover:bg-[#146552] transition-colors">
                    Open
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* STEP 2: 5 SECTIONS */}
        {selectedCourt && !selectedSection && (
          <>
            <button
              type="button"
              onClick={backToCourts}
              className="mb-6 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
            >
              ← Back
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedCourt.sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionClick(section)}
                  className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📘</span>
                    </div>

                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                      {section.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {section.description}
                    </p>

                    <div className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1A7963] text-white text-sm font-bold group-hover:bg-[#146552] transition-colors">
                      View Documents
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* STEP 3: PDF DOCUMENTS */}
        {selectedCourt && selectedSection && (
          <>
            <div className="mb-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={backToSections}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={backToCourts}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1A7963] text-white text-sm font-bold hover:bg-[#146552] transition-colors"
              >
                Back to Courts
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedSection.documents.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📄</span>
                    </div>

                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      Open this document in PDF format or download it directly.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#1A7963] text-white text-sm font-bold hover:bg-[#146552] transition-colors"
                      >
                        View PDF
                      </a>

                      <a
                        href={item.file}
                        download
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default ServiceCaseLaws;