// src/pages/AboutSubMenus/MissionVision.jsx
import React from 'react';

const MissionVision = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      
      {/* 🖤 1. خوبصورت ہیڈر بینر (مکمل چوڑائی میں) */}
      <div className="w-full bg-gradient-to-r from-[#072F1D] to-[#0A4429] text-white py-20 px-4 text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Mission & Vision
          </h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-4 rounded"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the foundational principles, core mandates, and operational pillars driving the General Cadre Doctors Association.
          </p>
        </div>
      </div>

      {/* 📦 2. مین کنٹینٹ کا ایریا */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        
        {/* 🌟 3. دو کالم لے آؤٹ: مشن اور وژن کے خوبصورت ہائی لائٹڈ کارڈز */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* مشن کارڈ */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#0f5132] to-[#0a3a24] text-white relative h-full flex flex-col justify-center">
              <div className="absolute top-4 right-6 text-7xl text-emerald-800/40 font-serif select-none">“</div>
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
                Our Core Mission
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed italic text-emerald-50/95">
                "To advocate fiercely for the professional rights, fair promotions, and systemic workplace safety of general cadre physicians, while bridging the gap between frontline public health delivery and government policy to ensure accessible, high-quality care at primary and secondary healthcare levels."
              </p>
            </div>
          </div>

          {/* وژن کارڈ */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#0a3a24] to-[#062416] text-white relative h-full flex flex-col justify-center">
              <div className="absolute top-4 right-6 text-7xl text-emerald-900/50 font-serif select-none">”</div>
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
                Our Core Vision
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed italic text-emerald-50/95">
                "To establish a unified, secure, and empowered workforce of general cadre medical professionals in Pakistan, where career progression is transparently structured and public health institutions are run by expert medical leadership to build an equitable healthcare infrastructure."
              </p>
            </div>
          </div>

        </div>

        {/* 📋 4. وژن کے 3 ستون (Operational Pillars) */}
        <div className="border-t border-gray-200 pt-12">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Organisational Vision & Mandate
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              As an advocacy union rather than a corporate body, our collective vision is defined through established operational pillars.
            </p>
          </div>

          {/* 3 گرڈ کارڈز */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#e67e22] group-hover:text-white transition-colors duration-300">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f5132] transition-colors">
                  Career Equity
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Establishing a just, transparent, and predictable <strong>Four-Tier Service Structure</strong>. We envision a system where a Medical Officer entering government service at <strong>BPS-17</strong> can reliably advance to <strong>BPS-18, BPS-19, and BPS-20</strong> based on performance and seniority without political stagnation.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#e67e22] group-hover:text-white transition-colors duration-300">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f5132] transition-colors">
                  Administrative Autonomy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advocating for public hospitals to be managed directly by doctors who possess formal <strong>healthcare administration expertise</strong>. We believe leadership roles like Medical Superintendents shouldn't be outsourced exclusively to bureaucratic cadres lacking public health background.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#e67e22] group-hover:text-white transition-colors duration-300">
                  🏥
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f5132] transition-colors">
                  Primary & Secondary Strength
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Empowering the backbone of healthcare—<strong>BHUs, RHCs, THQs, and DHQs</strong>. We fiercely advocate for better working conditions, competitive non-practising allowances, and rigid safety protocols for the frontline doctors staffing these centres.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;