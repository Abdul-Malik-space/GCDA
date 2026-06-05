import React from 'react';

const History = () => {
  // تیکنیکی نوٹیفیکیشنز اور کوٹہ ڈیٹا
  const fourTierFormula = [
    { grade: "Grade 17 (Medical Officers)", percentage: "Locked at 42%" },
    { grade: "Grade 18 (Senior Medical Officers)", percentage: "Expanded to 36% (Adding ~1,400 vacancies)" },
    { grade: "Grade 19 (Additional Principal MOs)", percentage: "Expanded to 19% (Adding ~1,100 vacancies)" },
    { grade: "Grade 20 (Chief Medical Officers)", percentage: "Fixed at 3% (Adding ~200 high-tier vacancies)" },
  ];

  // لاہور ہائی کورٹ کے اہم ترین حالیہ کیسز
  const litigationCases = [
    {
      title: "Mass Regularization & Contract Freezes (January 2026)",
      judge: "Justice Malik Javid Wains",
      detail: "The LHC intervened against the abrupt termination/expiration of medical contracts. Ordered that 752 contract employees be allowed to continue service while seeking a definitive regularization response from the government, halting attempts to phase them out without proper scrutiny."
    },
    {
      title: "Quota & Merit Deviations Challenge (April 2026)",
      judge: "Justice Raheel Kamran",
      detail: "Medical officers heavily backed a constitutional petition challenging flawed recruitment ads for over 2,000 medical officers. The High Court halted and ordered a re-initiation of the recruitment process due to the health department's failure to implement the 3% quota mandated under the Punjab Empowerment of Persons with Disabilities Act."
    },
    {
      title: "Separate Legal Frameworks Defense (May 2025)",
      caseNo: "W.P. No.52251 of 2022",
      detail: "The state argued that contractual appointments operate under entirely separate frameworks from regular civil servants. The GCDA strategically uses these rulings defensively to demonstrate why converting regular general cadre positions into contract/locum rules degrades constitutional civil service rights."
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans antialiased selection:bg-[#1A7963] selection:text-white">
      
      {/* 🖤 1. خوبصورت ہیڈر بینر (Full Width Banner) */}
      <div className="w-full bg-gradient-to-r from-[#072F1D] to-[#0A4429] text-white py-10 md:py-12 px-4 text-center relative overflow-hidden shadow-inner">
  <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
  <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
    {/* <span className="text-[#e67e22] text-xs font-bold tracking-widest uppercase bg-[#e67e22]/10 px-3 py-1 rounded-full">
      Our Journey & Legacy
    </span> */}
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4">
      History of GCDA Pakistan
    </h1>
    <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-4 rounded"></div>
    {/* <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
      Explore the historical milestones, strategic achievements, and legal battles that shaped the primary and secondary public healthcare infrastructure of Punjab.
    </p> */}
  </div>
</div>

      {/* 📦 مین کنٹینٹ ہولڈر */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        
        {/* 🏛️ 2. تعارفی سیکشن (Introductory Overview) */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-[#0f5132] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
            The Roots of Advocacy
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            The history of the General Cadre Doctors Association (GCDA) Pakistan is deeply intertwined with the evolution of the public healthcare infrastructure in Pakistan, particularly within Punjab. Unlike associations representing teaching specialists, the GCDA was established to safeguard the rights of <strong>"General Cadre" doctors</strong>—the medical officers and administrative clinicians who form the bedrock of primary and secondary healthcare.
          </p>
        </div>

        {/* ⏳ 3. ورٹیکل ٹائم لائن سیکشن (Interactive Historical Timeline) */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#0f5132] mb-10 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
            Historical Chronology
          </h2>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
            
            {/* ERA 1 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 bg-white border-4 border-[#1A7963] w-4 h-4 rounded-full transition-all group-hover:bg-[#e67e22] group-hover:border-[#e67e22]"></div>
              <span className="text-xs font-bold text-[#e67e22] bg-orange-50 px-2 py-0.5 rounded">1970s – 1990s</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Pre-Association Era: The Rise of General Practice</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                Historically, the vast majority of medical graduates entered general practice. Recruited as Medical Officers (MOs) and Women Medical Officers (WMOs) in BPS-17, they faced immense structural bottlenecks heavily biased toward the Teaching/Specialist Cadre. Doctors in rural Basic Health Units (BHUs) and Rural Health Centers (RHCs) frequently spent their entire careers locked in BPS-17 with zero promotional upward mobility.
              </p>
            </div>

            {/* ERA 2 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 bg-white border-4 border-[#1A7963] w-4 h-4 rounded-full transition-all group-hover:bg-[#e67e22] group-hover:border-[#e67e22]"></div>
              <span className="text-xs font-bold text-[#e67e22] bg-orange-50 px-2 py-0.5 rounded">Early 2000s</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Formal Emergence & Strategic Leadership</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                As frustrations over irregular promotions and ad-hoc practices peaked, non-teaching physicians formalized the GCDA. Under the pivotal leadership of <strong>Dr. Masood Akhtar Sheikh</strong>, the central and provincial chapters detached themselves from traditional pure street agitations, choosing a sophisticated path of rigorous legal battles, media advocacy, and high-level cabinet negotiations.
              </p>
            </div>

            {/* ERA 3 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 bg-white border-4 border-[#1A7963] w-4 h-4 rounded-full transition-all group-hover:bg-[#e67e22] group-hover:border-[#e67e22]"></div>
              <span className="text-xs font-bold text-[#e67e22] bg-orange-50 px-2 py-0.5 rounded">2013 – 2020</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Administrative Autonomy vs. Bureaucracy</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                Following the historic breakthroughs, the GCDA focused heavily on enforcement. The association fiercely defended Medical Superintendent (MS) slots in DHQ and THQ hospitals, ensuring administrative seats were held by qualified public health management doctors rather than non-medical bureaucrats. They successfully pushed Provincial Selection Boards to clear backlogs of Annual Confidential Reports (ACRs) to unlock stalled promotions.
              </p>
            </div>

            {/* ERA 4 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 bg-white border-4 border-[#1A7963] w-4 h-4 rounded-full transition-all group-hover:bg-[#e67e22] group-hover:border-[#e67e22]"></div>
              <span className="text-xs font-bold text-[#e67e22] bg-red-50 text-red-600 px-2 py-0.5 rounded">2023 – 2026 (Modern Era)</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Existential Threats & Modern Defiance</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                The modern history marks a shift from seeking benefits to fighting for organizational survival. In late 2023, the GCDA aggressively condemned caretaker privatization policies as the "economic murder" of medics. Currently (2025–2026), the association is locked in fierce opposition against new health service rules trying to convert regular civil service seats into temporary contractual/locum positions.
              </p>
            </div>

          </div>
        </div>

        {/* 🏆 4. سنگ میل اور آفیشل نوٹیفیکیشنز (The 2012 Service Structure Milestone) */}
        <div className="bg-gradient-to-br from-[#0f5132] to-[#0a3a24] text-white p-8 rounded-2xl shadow-xl mb-16">
          <div className="max-w-4xl">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Historic Breakthrough</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-1 mb-4">The 2012 Service Structure Milestone</h3>
            <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mb-8 font-light">
              Achieved through intense multi-lateral negotiations alongside the PMA and YDA, this milestone resulted in permanent legal orders that restructured promotion systems for non-specialist physicians in Punjab.
            </p>

            {/* دستاویزات لنکس نما گرڈ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-black">
              <div className="bg-white/95 p-4 rounded-xl border border-emerald-800">
                <p className="text-xs text-orange-600 font-bold">November 7, 2012</p>
                <h4 className="font-bold text-sm text-gray-900 mt-0.5">The Core Agreement</h4>
                <p className="text-xs text-gray-500 mt-1">Unanimously signed by the Government, GCDA, YDA, and PMA setting multi-tier parameters.</p>
              </div>
              <div className="bg-white/95 p-4 rounded-xl border border-emerald-800">
                <p className="text-xs text-orange-600 font-bold">April 14, 2012</p>
                <h4 className="font-bold text-sm text-gray-900 mt-0.5">S&GAD Notification</h4>
                <p className="text-xs text-gray-500 mt-1">Notification No. SOR-III(S&GAD)1-25/2008 officially amended departmental rules.</p>
              </div>
              <div className="bg-white/95 p-4 rounded-xl border border-emerald-800">
                <p className="text-xs text-orange-600 font-bold">December 21, 2012</p>
                <h4 className="font-bold text-sm text-gray-900 mt-0.5">Finance Dept Order</h4>
                <p className="text-xs text-gray-500 mt-1">The landmark splash agreement introducing the quota allocation percentages.</p>
              </div>
            </div>

            {/* کوٹہ بریک ڈاؤن ٹیبل / لسٹ */}
            <div className="border-t border-emerald-700/60 pt-6">
              <h4 className="text-orange-400 font-bold text-sm mb-4 flex items-center gap-1.5">
                📊 The Percentage-Based "Four-Tier Formula" Quota
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {fourTierFormula.map((item, index) => (
                  <div key={index} className="bg-black/20 p-3.5 rounded-lg border border-white/10">
                    <p className="text-xs text-emerald-200 font-medium">{item.grade}</p>
                    <p className="text-lg font-bold text-white mt-1">{item.percentage}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ⚖️ 5. عدالتی محاذ اور حالیہ پٹیشنز (Lahore High Court Litigation) */}
        <div>
          <h2 className="text-2xl font-bold text-[#0f5132] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
            Legal Petitions Against Recent Contractual Health Reforms
          </h2>
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">
            The ongoing judicial battle at the Lahore High Court (LHC) centers heavily on defending permanent civil service frameworks and resisting attempts to transition regular public healthcare seats into temporary locum/contract structures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {litigationCases.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/70 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[11px] font-bold text-[#1A7963] bg-emerald-50 px-2 py-0.5 rounded">
                      {c.judge ? `LHC • ${c.judge}` : `Precedent • ${c.caseNo}`}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#0f5132]">
                    {c.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed mt-2">
                    {c.detail}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-right">
                  <span className="text-[11px] font-bold text-gray-400 uppercase">Constitutional Right Guarded</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;