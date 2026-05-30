// src/pages/About/CentralBody.jsx
import React, { useState } from 'react';

const centralBodyData = {
  stats: [
    { label: "Registered Doctors", count: "5000+", icon: "👥" },
    { label: "Active Districts", count: "36", icon: "📍" },
    { label: "Representation", count: "National", icon: "🇵🇰" }
  ],
  chiefPatron: { 
    name: "Prof. Dr. Corporate Name", 
    role: "Chief Patron / السرپرستِ اعلیٰ", 
    tagline: "Former Principal & Senior Medical Advisor",
    email: "patron@gcda.org.pk",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300" 
  },
  president: { 
    name: "Dr. Masood Ahmed", 
    role: "Central President / مرکزی صدر", 
    tagline: "Leading Healthcare Policy & Administration",
    email: "president@gcda.org.pk",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300" 
  },
  seniorVicePresident: { 
    name: "Dr. Senior VP Name", 
    role: "Senior Vice President", 
    tagline: "Coordinating Regional Health Chapters",
    email: "svp@gcda.org.pk",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300" 
  },
  vicePresidents: [
    { id: 1, name: "Dr. VP One", role: "Vice President", email: "vp1@gcda.org.pk", image: "https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=300" },
    { id: 2, name: "Dr. VP Two", role: "Vice President", email: "vp2@gcda.org.pk", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300" },
    { id: 3, name: "Dr. VP Three", role: "Vice President", email: "vp3@gcda.org.pk", image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=300" },
  ],
  generalSecretary: { 
    name: "Dr. Secretary Name", 
    role: "General Secretary", 
    email: "gs@gcda.org.pk",
    image: "https://images.unsplash.com/photo-1582750433449-6493528bb644?q=80&w=300" 
  },
  sections: [
    { id: 1, title: "Joint Section", lead: "Dr. Joint Sec Name", desc: "Inter-provincial coordination & records" },
    { id: 2, title: "Finance Section", lead: "Dr. Finance Chief", desc: "Budgeting, transparency & audit control" },
    { id: 3, title: "Public Relations Section", lead: "Dr. PR Director", desc: "Media management & press releases" },
  ]
};

const CentralBody = () => {
  // UX کو بڑھانے کے لیے ایکٹو ٹیب سٹیٹ (تاکہ پورا پیج ایک دم ہجوم نہ لگے)
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'executive', 'secretariat'

  // 🔥 الٹرا پریمیم کارڈ رینڈر انجن
  const renderPremiumCard = (person, cardType = 'normal') => {
    const isChief = cardType === 'chief';
    const isPresident = cardType === 'president';
    
    return (
      <div className={`bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,81,50,0.08)] hover:-translate-y-2 relative overflow-hidden group w-full
        ${isChief ? 'max-w-[340px] border-t-4 border-t-amber-400' : ''}
        ${isPresident ? 'max-w-[340px] border-t-4 border-t-[#0f5132]' : 'max-w-[280px]'}
      `}>
        {/* بیک گراؤنڈ پر ہلکا سا لگژری گریڈینٹ گلو اثر ہوور پر */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/20 group-hover:to-emerald-50/40 transition-all duration-500 pointer-events-none" />

        {/* پوزیشن کا شاہی بیج */}
        {isChief && <span className="absolute top-3 left-3 bg-amber-50 text-amber-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-200">Patron Council</span>}
        {isPresident && <span className="absolute top-3 left-3 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200">Executive Head</span>}

        {/* ڈاکٹر پروفائل امیج فریم */}
        <div className={`rounded-full p-1 bg-white border shadow-md mb-4 transition-all duration-500 group-hover:scale-105 relative z-10
          ${isChief || isPresident ? 'w-28 h-28 ring-4 ring-slate-100/80 group-hover:ring-[#0f5132]/20' : 'w-24 h-24 ring-4 ring-slate-50 group-hover:ring-[#e67e22]/20'}
        `}>
          <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full" />
        </div>

        {/* نام اور پریمیم ہور ایفیکٹ */}
        <h3 className={`font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-[#0f5132] z-10 ${isChief || isPresident ? 'text-xl' : 'text-lg'}`}>
          {person.name}
        </h3>
        
        {/* عہدہ بیج */}
        <p className="text-xs font-bold text-slate-500 mt-1.5 z-10">
          {person.role}
        </p>

        {/* ڈسکرپشن یا ٹیگ لائن */}
        <p className="text-xs text-slate-400 mt-3 font-medium border-t pt-3 w-full border-slate-100 line-clamp-2 h-10">
          {person.tagline || "GCDA Executive Committee Member"}
        </p>

        {/* 📧 کوئک ایکشن کانٹیکٹ بار */}
        <div className="flex gap-3 mt-4 pt-2 justify-center w-full z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <a href={`mailto:${person.email}`} className="text-slate-400 hover:text-[#e67e22] transition-colors p-1.5 bg-slate-50 hover:bg-orange-50 rounded-lg" title="Send Email">
            ✉️
          </a>
          <button className="text-slate-400 hover:text-[#0f5132] transition-colors p-1.5 bg-slate-50 hover:bg-emerald-50 rounded-lg" title="View Profile" onClick={() => alert(`${person.name}'s detailed profile coming soon.`)}>
            👤
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-slate-50/50 min-h-screen font-sans pb-28 text-slate-800 antialiased">
      
      {/* 💚 1. الٹرا ماڈرن منیملیسٹ ہیڈر بینر */}
      <div className="w-full bg-gradient-to-br from-[#052215] via-[#0f5132] to-[#14633e] text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-500/30">
            GCDA Leadership Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm">
            Central Executive Body
          </h1>
          <p className="text-slate-200/90 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            The core strategic council driving corporate healthcare governance, medical excellence, and central administration.
          </p>
        </div>
      </div>

      {/* 📊 2. فلوٹنگ انٹیلیجنٹ ڈیش بورڈ اسٹیٹس */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-200/80 p-5 grid grid-cols-3 gap-4 text-center">
          {centralBodyData.stats.map((stat, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2 group">
              <span className="text-2xl p-2 bg-slate-50 group-hover:bg-emerald-50 rounded-xl transition-colors duration-300">{stat.icon}</span>
              <div className="text-left sm:block flex flex-col items-center">
                <span className="text-xl md:text-2xl font-black text-[#0f5132] block leading-none">{stat.count}</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🕹️ 3. پریمیم لک فلٹر سوئچز (UX کو زبردست بنانے کے لیے) */}
      <div className="max-w-md mx-auto mt-14 flex p-1 bg-slate-200/60 backdrop-blur rounded-xl border border-slate-200">
        <button 
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'all' ? 'bg-white text-[#0f5132] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
        >
          All Members
        </button>
        <button 
          onClick={() => setActiveTab('executive')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'executive' ? 'bg-white text-[#0f5132] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
        >
          Core Council
        </button>
        <button 
          onClick={() => setActiveTab('secretariat')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'secretariat' ? 'bg-white text-[#0f5132] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
        >
          Secretariat
        </button>
      </div>

      {/* 🏛️ 4. فلوئڈ آرگنائزیشنل لے آؤٹ */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-16 space-y-20">
        
        {/* کونسل لیول: Chief Patron & Central President */}
        {(activeTab === 'all' || activeTab === 'executive') && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-slate-200"></span>
              <h2 className="text-xs uppercase tracking-widest font-black text-slate-400">Supreme Command Team</h2>
              <span className="h-px w-12 bg-slate-200"></span>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12">
              {renderPremiumCard(centralBodyData.chiefPatron, 'chief')}
              {renderPremiumCard(centralBodyData.president, 'president')}
            </div>
          </div>
        )}

        {/* سینئر نائب صدر لیول */}
        {(activeTab === 'all' || activeTab === 'executive') && (
          <div className="flex flex-col items-center pt-8 border-t border-slate-100 animate-fade-in">
            <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-6">Senior Leadership</h2>
            {renderPremiumCard(centralBodyData.seniorVicePresident)}
          </div>
        )}

        {/* وائس پریزیڈنٹ پینل */}
        {(activeTab === 'all' || activeTab === 'executive') && (
          <div className="flex flex-col items-center pt-8 border-t border-slate-100 animate-fade-in">
            <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-8">Vice Presidents Panel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl justify-items-center">
              {centralBodyData.vicePresidents.map(vp => (
                <div key={vp.id} className="w-full flex justify-center">{renderPremiumCard(vp)}</div>
              ))}
            </div>
          </div>
        )}

        {/* جنرل سیکرٹری اور سیکشنز لیول */}
        {(activeTab === 'all' || activeTab === 'secretariat') && (
          <div className="pt-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start animate-fade-in">
            
            {/* بائیں طرف سائیڈ مینیو: جنرل سیکرٹری */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:border-r border-slate-200 lg:pr-10">
              <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-6 text-center lg:text-left w-full">Secretariat Head</h2>
              {renderPremiumCard(centralBodyData.generalSecretary)}
            </div>

            {/* دائیں طرف کے انتظامی سیکشنز */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 text-center lg:text-left">Administrative Desks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {centralBodyData.sections.map(sec => (
                  <div key={sec.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-600/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-[#0f5132] group-hover:h-full transition-all duration-300" />
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#0f5132] transition-colors flex items-center gap-2">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-bold mt-3 bg-slate-50 px-2 py-1 rounded-md inline-block">{sec.lead}</p>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-medium">{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CentralBody;