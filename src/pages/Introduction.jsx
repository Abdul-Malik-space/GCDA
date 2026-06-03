// src/pages/Introduction.jsx
import React from 'react';

const Introduction = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      
      {/* 🖤 1. گیلری جیسا خوبصورت ہیڈر بینر */}
      <div className="w-full bg-gradient-to-r from-[#072F1D] to-[#0A4429] text-white py-16 px-4 text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Introduction to GCDA
          </h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-4 rounded"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The collective voice of general cadre medical practitioners in Pakistan.
          </p>
        </div>
      </div>

      {/* 📦 2. مین کنٹینٹ کا ایریا */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        
        {/* تعارف کا سیکشن */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
          <h2 className="text-2xl font-bold text-[#0f5132] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            The General Cadre Doctors Association (GCDA) is a prominent professional association and advocacy group representing general cadre medical practitioners (Medical Officers and non-specialist government doctors) primarily operating within the public healthcare sector of Pakistan, with its most active presence in Punjab.
          </p>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            Within the Pakistani public health infrastructure, general cadre doctors represent the backbone of primary and secondary healthcare facilities (such as Rural Health Centres and District Headquarter Hospitals). The GCDA acts as their collective union voice to balance structural administrative decisions against the professional rights, transfers, postings, and promotions of its members.
          </p>
        </div>

        {/* 📋 گرڈ کارڈز (Objectives & Strategy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* مقاصد */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#0f5132] mb-4">Core Objectives & Functions</h3>
            <ul className="text-gray-600 text-sm space-y-3 list-none">
              <li className="flex gap-2"><span>✅</span> <strong>Advocacy:</strong> Lobbies the Punjab Health Department to secure promotions and establish structured career ladders (four-tier formula).</li>
              <li className="flex gap-2"><span>✅</span> <strong>Career Advancement:</strong> Streamlines the movement of doctors from BPS-17 through grades 18, 19, and 20.</li>
              <li className="flex gap-2"><span>✅</span> <strong>Policy Negotiations:</strong> Represents doctors in government-appointed committees alongside YDA and PMA.</li>
              <li className="flex gap-2"><span>✅</span> <strong>Public Health Campaigns:</strong> Participates in awareness initiatives like tobacco control and environmental health seminars.</li>
            </ul>
          </div>

          {/* قیادت */}
          <div className="bg-gradient-to-br from-[#0f5132] to-[#0a3a24] p-6 rounded-xl shadow-lg text-white">
            <h3 className="text-xl font-bold mb-4">Key Leadership</h3>
            <p className="text-emerald-100 text-sm leading-relaxed mb-4">
              The association is guided by experienced leadership focused on major negotiations and public health policy.
            </p>
            <div className="bg-black/20 p-4 rounded-lg border border-white/10">
              <p className="text-sm text-gray-300">President</p>
              <p className="text-lg font-bold text-white">Dr. Masood Akhtar Sheikh</p>
              <p className="text-xs text-orange-400 mt-1">Long-serving provincial and central president.</p>
            </div>
          </div>
        </div>

        {/* اختتامی سوال */}
        <div className="mt-12 text-center p-8 bg-gray-100 rounded-xl border border-gray-200">
          <p className="text-gray-700 font-medium">
            Are you looking for information regarding seniority lists and current promotion criteria for general cadre doctors, or do you need details about membership or specific government agreements?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Introduction;