import React, { useState } from "react";

const basePath = "/assets/pdfs/service-matter/policies";

const serviceMatterPoliciesData = [
  {
    id: "health-policies",
    title: "Health Policies",
    description: "View health department related policy documents.",
    documents: [
      {
        title: "Health Policy Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Health Policy Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Health Policy Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Health Policy Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Health Policy Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Health Policy Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Health Policy Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Health Policy Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Health Policy Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Health Policy Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "service-policies",
    title: "Service Policies",
    description: "View service related policy documents.",
    documents: [
      {
        title: "Service Policy Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Service Policy Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Service Policy Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Service Policy Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Service Policy Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Service Policy Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Service Policy Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Service Policy Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Service Policy Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Service Policy Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "administrative-policies",
    title: "Administrative Policies",
    description: "View administrative policy documents.",
    documents: [
      {
        title: "Administrative Policy Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Administrative Policy Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Administrative Policy Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Administrative Policy Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Administrative Policy Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Administrative Policy Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Administrative Policy Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Administrative Policy Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Administrative Policy Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Administrative Policy Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "transfer-policies",
    title: "Transfer Policies",
    description: "View transfer and posting related policy documents.",
    documents: [
      {
        title: "Transfer Policy Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Transfer Policy Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Transfer Policy Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Transfer Policy Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Transfer Policy Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Transfer Policy Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Transfer Policy Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Transfer Policy Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Transfer Policy Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Transfer Policy Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "general-policies",
    title: "General Policies",
    description: "View general policy documents.",
    documents: [
      {
        title: "General Policy Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "General Policy Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "General Policy Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "General Policy Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "General Policy Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "General Policy Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "General Policy Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "General Policy Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "General Policy Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "General Policy Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
];

function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  return (
    <main className="w-full bg-white">
      {/* SMALL HERO SECTION */}
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            Policies
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            General Cadre Doctors Association
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
        {!selectedPolicy ? (
          <>
            {/* MAIN POLICY SECTIONS */}
            

            {/* ONE ROW MEIN 5 CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {serviceMatterPoliciesData.map((policy) => (
                <button
                  key={policy.id}
                  type="button"
                  onClick={() => setSelectedPolicy(policy)}
                  className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📘</span>
                    </div>

                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                      {policy.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {policy.description}
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
            {/* SELECTED POLICY PDFS */}
            <div className="mb-10">
              <button
                type="button"
                onClick={() => setSelectedPolicy(null)}
                className="mb-6 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
              >
                ← Back to Policies
              </button>

              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                  {selectedPolicy.title}
                </h2>

                <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
                  Click on any document to view the PDF. You can also download
                  the document for offline use.
                </p>
              </div>
            </div>

            {/* ONE ROW MEIN 5 PDFS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedPolicy.documents.map((item, index) => (
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

export default Policies;