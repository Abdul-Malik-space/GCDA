import React, { useState } from "react";
import serviceCaseLawsData from "../../data/serviceCaseLawsData";

function ServiceCaseLaws() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const openLaw = (law) => {
    setSelectedLaw(law);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToLaws = () => {
    setSelectedLaw(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 121, 99, 0.84), rgba(26, 121, 99, 0.84)), url(${serviceCaseLawsData.heroImage})`,
        }}
      >
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

      {/* LAWS LIST */}
      {!selectedLaw && (
        <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCaseLawsData.laws.map((law) => (
              <button
                key={law.id}
                type="button"
                onClick={() => openLaw(law)}
                className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-[230px] bg-slate-100 overflow-hidden">
                  <img
                    src={law.image}
                    alt={law.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <span className="absolute top-3 right-3 bg-white/90 text-[#1A7963] text-[10px] font-black px-3 py-1 rounded-lg shadow-sm">
                    {law.documents?.length || 0} PDFs
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h2 className="text-lg md:text-xl font-black">
                      {law.title}
                    </h2>

                    <p className="mt-1 text-xs md:text-sm text-white/90 line-clamp-2">
                      {law.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SELECTED LAW PDF DOCUMENTS */}
      {selectedLaw && (
        <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={backToLaws}
                className="inline-flex items-center text-sm font-bold text-[#1A7963] hover:underline mb-3"
              >
                ← Back to All Service Case Laws
              </button>

              <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                {selectedLaw.title}
              </h2>

              <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-6">
                {selectedLaw.description}
              </p>
            </div>
          </div>

          {selectedLaw.documents && selectedLaw.documents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedLaw.documents.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📄</span>
                    </div>

                    <h3 className="text-lg font-black text-slate-800 group-hover:text-[#1A7963] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      Open this PDF document or download it for offline use.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
          ) : (
            <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-10 text-center">
              <p className="text-slate-500 font-semibold">
                No PDF documents available for this law.
              </p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default ServiceCaseLaws;