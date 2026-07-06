import React, { useState } from "react";

const basePath = "/assets/pdfs/service-matter/taxation-matters";

const createDocuments = (titlePrefix) =>
  Array.from({ length: 10 }, (_, index) => ({
    title: `${titlePrefix} Document ${index + 1}`,
    file: `${basePath}/pdf-${index + 1}.pdf`,
  }));

const taxationMattersData = [
  {
    id: "income-tax",
    title: "Income Tax",
    description: "View income tax related documents and notifications.",
    documents: createDocuments("Income Tax"),
  },
  {
    id: "sales-tax",
    title: "Sales Tax",
    description: "View sales tax related documents and notifications.",
    documents: createDocuments("Sales Tax"),
  },
  {
    id: "withholding-tax",
    title: "Withholding Tax",
    description: "View withholding tax related documents and notifications.",
    documents: createDocuments("Withholding Tax"),
  },
  {
    id: "tax-returns",
    title: "Tax Returns",
    description: "View tax return related documents and guidelines.",
    documents: createDocuments("Tax Returns"),
  },
  {
    id: "tax-notifications",
    title: "Tax Notifications",
    description: "View taxation related notifications and circulars.",
    documents: createDocuments("Tax Notifications"),
  },
];

function TaxationMatters() {
  const [selectedMatter, setSelectedMatter] = useState(null);

  const openMatter = (matter) => {
    setSelectedMatter(matter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToMatters = () => {
    setSelectedMatter(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-white">
      {/* SMALL HERO SECTION */}
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            Taxation Matters
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            General Cadre Doctors Association
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-8 md:py-10">
        {!selectedMatter ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {taxationMattersData.map((matter) => (
              <button
                key={matter.id}
                type="button"
                onClick={() => openMatter(matter)}
                className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                    <span className="text-2xl">📘</span>
                  </div>

                  <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                    {matter.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {matter.description}
                  </p>

                  <div className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1A7963] text-white text-sm font-bold group-hover:bg-[#146552] transition-colors">
                    View Documents
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={backToMatters}
              className="mb-6 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
            >
              ← Back to Taxation Matters
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedMatter.documents.map((item, index) => (
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

export default TaxationMatters;