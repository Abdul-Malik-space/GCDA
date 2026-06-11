import React from "react";
import contactInfoData from "../../data/contactInfoData";

function ContactInfo() {
  const data = contactInfoData;

  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-[#1A7963]">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            {data.title}
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            {data.subtitle}
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1200px] mx-auto px-4 pt-10 pb-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            Get in Touch With GCDA
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 leading-7">
            You can contact the General Cadre Doctors Association through the
            official office address, phone numbers, mobile number, or the email
            contacts listed below.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CARDS */}
      <section className="max-w-[1200px] mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>

            <h3 className="text-lg font-black text-slate-800">Office Address</h3>

            <p className="mt-3 text-slate-600 leading-7 text-sm md:text-base">
              {data.address}
            </p>
          </div>

          {/* Office Contact */}
          <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-4">
              <span className="text-2xl">☎️</span>
            </div>

            <h3 className="text-lg font-black text-slate-800">
              Office Contact
            </h3>

            <div className="mt-3 space-y-2 text-slate-600 text-sm md:text-base">
              <p>
                <span className="font-bold text-slate-800">Office:</span>{" "}
                {data.officePhone}
              </p>
              <p>
                <span className="font-bold text-slate-800">Fax:</span>{" "}
                {data.officeFax}
              </p>
              <p>
                <span className="font-bold text-slate-800">Mobile:</span>{" "}
                {data.mobile}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-4">
              <span className="text-2xl">✉️</span>
            </div>

            <h3 className="text-lg font-black text-slate-800">Quick Actions</h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${data.officePhone}`}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#1A7963] text-white font-bold hover:bg-[#146552] transition-colors"
              >
                Call Office
              </a>

              <a
                href={`tel:${data.mobile}`}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-[#1A7963] text-[#1A7963] font-bold hover:bg-[#1A7963] hover:text-white transition-colors"
              >
                Call Mobile
              </a>

              <a
                href={`mailto:${data.emails[0].email}`}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CONTACTS */}
      <section className="max-w-[1200px] mx-auto px-4 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            Email Contacts
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
            Reach out to the relevant department or office using the email
            contacts below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.emails.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1A7963]/10 flex items-center justify-center mb-4">
                <span className="text-xl">📧</span>
              </div>

              <h3 className="text-base font-black text-slate-800">
                {item.name}
              </h3>

              <p className="mt-3 text-sm text-slate-600 break-words leading-6">
                {item.email}
              </p>

              <a
                href={`mailto:${item.email}`}
                className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#1A7963] text-white text-sm font-bold hover:bg-[#146552] transition-colors"
              >
                Email Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ContactInfo;