import React from "react";
import serviceMattersData from "../../data/serviceMattersData";

function ServiceMatters() {
  return (
    <main className="w-full bg-white">
      {/* SMALL HERO SECTION */}
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            Service Matters
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            General Cadre Doctors Association
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      {/* PDF LINKS GRID */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            Service Matter Documents
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
            Click on any document to view the PDF. You can also download the
            document for offline use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceMattersData.map((item, index) => (
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
                  Open this document in PDF format or download it directly.
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
      </section>
    </main>
  );
}

export default ServiceMatters;