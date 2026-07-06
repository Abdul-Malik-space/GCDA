import React, { useState } from "react";

const basePath = "/assets/pdfs/service-matter";

const serviceMatterRulesData = [
  {
    id: "policies",
    title: "Policies",
    description: "View all policy related PDF documents.",
    documents: [
      {
        title: "Policy Document 1",
        file: `${basePath}/policies/pdf-1.pdf`,
      },
      {
        title: "Policy Document 2",
        file: `${basePath}/policies/pdf-2.pdf`,
      },
      {
        title: "Policy Document 3",
        file: `${basePath}/policies/pdf-3.pdf`,
      },
      {
        title: "Policy Document 4",
        file: `${basePath}/policies/pdf-4.pdf`,
      },
      {
        title: "Policy Document 5",
        file: `${basePath}/policies/pdf-5.pdf`,
      },
      {
        title: "Policy Document 6",
        file: `${basePath}/policies/pdf-6.pdf`,
      },
      {
        title: "Policy Document 7",
        file: `${basePath}/policies/pdf-7.pdf`,
      },
      {
        title: "Policy Document 8",
        file: `${basePath}/policies/pdf-8.pdf`,
      },
      {
        title: "Policy Document 9",
        file: `${basePath}/policies/pdf-9.pdf`,
      },
      {
        title: "Policy Document 10",
        file: `${basePath}/policies/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "rules-regulation",
    title: "Rules Regulation",
    description: "View all rules and regulation related PDF documents.",
    documents: [
      {
        title: "Rules Regulation Document 1",
        file: `${basePath}/rules-regulation/pdf-1.pdf`,
      },
      {
        title: "Rules Regulation Document 2",
        file: `${basePath}/rules-regulation/pdf-2.pdf`,
      },
      {
        title: "Rules Regulation Document 3",
        file: `${basePath}/rules-regulation/pdf-3.pdf`,
      },
      {
        title: "Rules Regulation Document 4",
        file: `${basePath}/rules-regulation/pdf-4.pdf`,
      },
      {
        title: "Rules Regulation Document 5",
        file: `${basePath}/rules-regulation/pdf-5.pdf`,
      },
      {
        title: "Rules Regulation Document 6",
        file: `${basePath}/rules-regulation/pdf-6.pdf`,
      },
      {
        title: "Rules Regulation Document 7",
        file: `${basePath}/rules-regulation/pdf-7.pdf`,
      },
      {
        title: "Rules Regulation Document 8",
        file: `${basePath}/rules-regulation/pdf-8.pdf`,
      },
      {
        title: "Rules Regulation Document 9",
        file: `${basePath}/rules-regulation/pdf-9.pdf`,
      },
      {
        title: "Rules Regulation Document 10",
        file: `${basePath}/rules-regulation/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "service-case-laws",
    title: "Service Case Laws",
    description: "View all service case laws related PDF documents.",
    documents: [
      {
        title: "Service Case Law Document 1",
        file: `${basePath}/service-case-laws/pdf-1.pdf`,
      },
      {
        title: "Service Case Law Document 2",
        file: `${basePath}/service-case-laws/pdf-2.pdf`,
      },
      {
        title: "Service Case Law Document 3",
        file: `${basePath}/service-case-laws/pdf-3.pdf`,
      },
      {
        title: "Service Case Law Document 4",
        file: `${basePath}/service-case-laws/pdf-4.pdf`,
      },
      {
        title: "Service Case Law Document 5",
        file: `${basePath}/service-case-laws/pdf-5.pdf`,
      },
      {
        title: "Service Case Law Document 6",
        file: `${basePath}/service-case-laws/pdf-6.pdf`,
      },
      {
        title: "Service Case Law Document 7",
        file: `${basePath}/service-case-laws/pdf-7.pdf`,
      },
      {
        title: "Service Case Law Document 8",
        file: `${basePath}/service-case-laws/pdf-8.pdf`,
      },
      {
        title: "Service Case Law Document 9",
        file: `${basePath}/service-case-laws/pdf-9.pdf`,
      },
      {
        title: "Service Case Law Document 10",
        file: `${basePath}/service-case-laws/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "service-matters",
    title: "Service Matters",
    description: "View all service matter related PDF documents.",
    documents: [
      {
        title: "Service Matter Document 1",
        file: `${basePath}/service-matter/pdf-1.pdf`,
      },
      {
        title: "Service Matter Document 2",
        file: `${basePath}/service-matter/pdf-2.pdf`,
      },
      {
        title: "Service Matter Document 3",
        file: `${basePath}/service-matter/pdf-3.pdf`,
      },
      {
        title: "Service Matter Document 4",
        file: `${basePath}/service-matter/pdf-4.pdf`,
      },
      {
        title: "Service Matter Document 5",
        file: `${basePath}/service-matter/pdf-5.pdf`,
      },
      {
        title: "Service Matter Document 6",
        file: `${basePath}/service-matter/pdf-6.pdf`,
      },
      {
        title: "Service Matter Document 7",
        file: `${basePath}/service-matter/pdf-7.pdf`,
      },
      {
        title: "Service Matter Document 8",
        file: `${basePath}/service-matter/pdf-8.pdf`,
      },
      {
        title: "Service Matter Document 9",
        file: `${basePath}/service-matter/pdf-9.pdf`,
      },
      {
        title: "Service Matter Document 10",
        file: `${basePath}/service-matter/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "taxation-matters",
    title: "Taxation Matters",
    description: "View all taxation matter related PDF documents.",
    documents: [
      {
        title: "Taxation Matter Document 1",
        file: `${basePath}/taxation-matters/pdf-1.pdf`,
      },
      {
        title: "Taxation Matter Document 2",
        file: `${basePath}/taxation-matters/pdf-2.pdf`,
      },
      {
        title: "Taxation Matter Document 3",
        file: `${basePath}/taxation-matters/pdf-3.pdf`,
      },
      {
        title: "Taxation Matter Document 4",
        file: `${basePath}/taxation-matters/pdf-4.pdf`,
      },
      {
        title: "Taxation Matter Document 5",
        file: `${basePath}/taxation-matters/pdf-5.pdf`,
      },
      {
        title: "Taxation Matter Document 6",
        file: `${basePath}/taxation-matters/pdf-6.pdf`,
      },
      {
        title: "Taxation Matter Document 7",
        file: `${basePath}/taxation-matters/pdf-7.pdf`,
      },
      {
        title: "Taxation Matter Document 8",
        file: `${basePath}/taxation-matters/pdf-8.pdf`,
      },
      {
        title: "Taxation Matter Document 9",
        file: `${basePath}/taxation-matters/pdf-9.pdf`,
      },
      {
        title: "Taxation Matter Document 10",
        file: `${basePath}/taxation-matters/pdf-10.pdf`,
      },
    ],
  },
];

function RulesRegulation() {
  const [selectedRule, setSelectedRule] = useState(null);

  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            Rules & Regulation
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            General Cadre Doctors Association
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
        {!selectedRule ? (
          <>
           

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {serviceMatterRulesData.map((rule) => (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setSelectedRule(rule)}
                  className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📘</span>
                    </div>

                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                      {rule.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {rule.description}
                    </p>

                    <div className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1A7963] text-white text-sm font-bold group-hover:bg-[#146552] transition-colors">
                      View Documents
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-10">
              <button
                type="button"
                onClick={() => setSelectedRule(null)}
                className="mb-6 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
              >
                ← Back to Rules
              </button>

              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                  {selectedRule.title}
                </h2>

                <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
                  Click on any document to view the PDF. You can also download
                  the document for offline use.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedRule.documents.map((item, index) => (
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

export default RulesRegulation;