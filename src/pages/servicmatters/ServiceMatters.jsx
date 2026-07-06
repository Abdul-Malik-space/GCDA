import React, { useState } from "react";

const basePath = "/assets/pdfs/service-matter/service-matter";

const serviceMattersData = [
  {
    id: "appointment-service",
    title: "Appointment Service",
    description: "View appointment related service matter documents.",
    documents: [
      {
        title: "Appointment Service Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Appointment Service Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Appointment Service Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Appointment Service Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Appointment Service Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Appointment Service Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Appointment Service Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Appointment Service Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Appointment Service Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Appointment Service Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "posting-transfer",
    title: "Posting & Transfer",
    description: "View posting and transfer related service matter documents.",
    documents: [
      {
        title: "Posting & Transfer Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Posting & Transfer Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Posting & Transfer Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Posting & Transfer Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Posting & Transfer Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Posting & Transfer Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Posting & Transfer Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Posting & Transfer Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Posting & Transfer Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Posting & Transfer Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "promotion-service",
    title: "Promotion Service",
    description: "View promotion related service matter documents.",
    documents: [
      {
        title: "Promotion Service Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Promotion Service Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Promotion Service Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Promotion Service Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Promotion Service Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Promotion Service Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Promotion Service Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Promotion Service Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Promotion Service Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Promotion Service Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "leave-service",
    title: "Leave Service",
    description: "View leave related service matter documents.",
    documents: [
      {
        title: "Leave Service Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "Leave Service Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "Leave Service Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "Leave Service Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "Leave Service Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "Leave Service Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "Leave Service Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "Leave Service Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "Leave Service Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "Leave Service Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
  {
    id: "general-service",
    title: "General Service",
    description: "View general service matter documents.",
    documents: [
      {
        title: "General Service Document 1",
        file: `${basePath}/pdf-1.pdf`,
      },
      {
        title: "General Service Document 2",
        file: `${basePath}/pdf-2.pdf`,
      },
      {
        title: "General Service Document 3",
        file: `${basePath}/pdf-3.pdf`,
      },
      {
        title: "General Service Document 4",
        file: `${basePath}/pdf-4.pdf`,
      },
      {
        title: "General Service Document 5",
        file: `${basePath}/pdf-5.pdf`,
      },
      {
        title: "General Service Document 6",
        file: `${basePath}/pdf-6.pdf`,
      },
      {
        title: "General Service Document 7",
        file: `${basePath}/pdf-7.pdf`,
      },
      {
        title: "General Service Document 8",
        file: `${basePath}/pdf-8.pdf`,
      },
      {
        title: "General Service Document 9",
        file: `${basePath}/pdf-9.pdf`,
      },
      {
        title: "General Service Document 10",
        file: `${basePath}/pdf-10.pdf`,
      },
    ],
  },
];

function ServiceMatters() {
  const [selectedService, setSelectedService] = useState(null);

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

      <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-14">
        {!selectedService ? (
          <>
            {/* MAIN SERVICE SECTIONS */}
            

            {/* ONE ROW MEIN 5 CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {serviceMattersData.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="group text-left bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-5">
                      <span className="text-2xl">📘</span>
                    </div>

                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1A7963] transition-colors leading-6">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {service.description}
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
            {/* SELECTED SERVICE PDFS */}
            <div className="mb-10">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="mb-6 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1A7963] text-[#1A7963] text-sm font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
              >
                ← Back to Service Matters
              </button>

              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                  {selectedService.title}
                </h2>

                <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
                  Click on any document to view the PDF. You can also download
                  the document for offline use.
                </p>
              </div>
            </div>

            {/* ONE ROW MEIN 5 PDFS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {selectedService.documents.map((item, index) => (
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

export default ServiceMatters;