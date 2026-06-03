// src/pages/HouseOfDelegates/HouseOfDelegates.jsx
import React, { useState } from "react";
import { houseLeadership, delegateRows } from "../../data/delegatesData";

// ══════════════════════════════════════════════════════
//  چھوٹے ری یوزایبل بلاکس (پروفائل پیج کے لیے)
// ══════════════════════════════════════════════════════

const SideInfoRow = ({ label, value }) =>
  value ? (
    <div className="border-b border-slate-700/40 py-3">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mb-1">
        {label}
      </p>
      <p className="text-sm text-slate-100 font-medium leading-snug">{value}</p>
    </div>
  ) : null;

const RightSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-sm font-black text-slate-800 mb-1">{title}</h3>
    <div className="w-10 h-0.5 bg-[#e67e22] mb-4 rounded" />
    {children}
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 mt-1">
    {items?.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1A7963] flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

// ══════════════════════════════════════════════════════
//  تفصیلی پروفائل ویو — Punjab Assembly انداز
// ══════════════════════════════════════════════════════

const ProfileView = ({ member, onBack, onPrev, onNext, currentIndex, total }) => {
  return (
    <div className="w-full bg-slate-100 min-h-screen font-sans pb-20">

      {/* ── Breadcrumb بار ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">Home</button>
        <span>›</span>
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">Members</button>
        <span>›</span>
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">House of Delegates</button>
        <span>›</span>
        <span className="text-slate-800 font-bold">Profile</span>

        {/* پرنٹ بٹن */}
        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </button>
      </div>

      {/* ── "Profile" ہیڈنگ ── */}
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
        <h1 className="text-2xl font-black text-slate-800 mb-6">Profile</h1>
        {/* ══ Top Navigation Bar ══ */}
<div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
  <button
    onClick={onBack}
    className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    Back to Assembly List
  </button>

  <div className="flex items-center gap-3">
    <button
      onClick={onPrev}
      className="w-10 h-10 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
      title="Previous"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <span className="text-sm font-semibold text-slate-500 min-w-[60px] text-center">
      {currentIndex + 1} / {total}
    </span>

    <button
      onClick={onNext}
      className="w-10 h-10 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
      title="Next"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>

        {/* ═══ مین گرڈ: بایاں + دایاں ═══ */}
        <div className="flex flex-col lg:flex-row gap-0 shadow-lg rounded-lg overflow-hidden">

          {/* ══ بایاں کالم (سیاہ/نیلی پس منظر) ══ */}
          <div className="lg:w-[300px] flex-shrink-0 bg-[#1e2d3d] text-white flex flex-col">

            {/* پروفائل تصویر */}
            <div className="p-6 flex flex-col items-center border-b border-slate-700/50">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-slate-600 shadow-xl mb-4">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1A7963&color=fff&size=200`;
                  }}
                />
              </div>
              <h2 className="text-base font-black text-white text-center leading-tight">{member.name}</h2>
              <p className="text-slate-400 text-xs font-medium mt-1 text-center">{member.designation}</p>
              <p className="text-slate-500 text-[10px] mt-0.5 text-center">{member.hospital}</p>
            </div>

            {/* پوزیشنز */}
            {member.positions?.length > 0 && (
              <div className="px-5 py-4 border-b border-slate-700/50">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                  Position(s) Held
                </p>
                <div className="space-y-1.5">
                  {member.positions.map((pos, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed">
                      <span className="text-[#e67e22] font-black mt-0.5 flex-shrink-0">›</span>
                      {pos}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* بنیادی معلومات */}
            <div className="px-5 py-4 space-y-0 flex-1">
              <SideInfoRow label="Party Affiliation" value="Government Corporate Doctors Association (GCDA)" />
              <SideInfoRow label="Father's / Husband's Name" value={member.fathersName} />
              <SideInfoRow label="Religion" value={member.religion} />
              <SideInfoRow label="Qualification" value={member.qualification} />
              <SideInfoRow label="Region" value={member.region} />
              <SideInfoRow label="Joined GCDA" value={member.joinedGCDA} />
            </div>
          </div>

          {/* ══ دایاں کالم (سفید) ══ */}
          <div className="flex-1 bg-white px-8 py-8 overflow-y-auto">

            {/* PERSONAL CAREER & INTERESTS */}
            <div className="mb-8 pb-6 border-b border-slate-100">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                Personal Career &amp; Interests
              </p>

              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-1">
                {member.name}
              </h2>
              <p className="text-sm text-slate-500 font-medium mb-5">{member.role} — {member.region}</p>

              <p className="text-slate-600 text-sm leading-relaxed text-justify">{member.bio}</p>
            </div>

            {/* Professional Summary */}
            {member.professionalSummary && (
              <RightSection title="Professional Summary">
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {member.professionalSummary}
                </p>
              </RightSection>
            )}

            {/* Education */}
            {member.education?.length > 0 && (
              <RightSection title="Education &amp; Academic Background">
                <BulletList items={member.education} />
              </RightSection>
            )}

            {/* Legislative & Executive Roles */}
            {member.executiveRoles?.length > 0 && (
              <RightSection title="Legislative &amp; Executive Roles">
                <BulletList items={member.executiveRoles} />
              </RightSection>
            )}

            {/* Key Achievements */}
            {member.achievements?.length > 0 && (
              <RightSection title="Key Achievements">
                <div className="space-y-2 mt-1">
                  {/* sub-heading style achievements */}
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                    Contributions &amp; Governance
                  </p>
                  <BulletList items={member.achievements} />
                </div>
              </RightSection>
            )}

            {/* رابطہ */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                Official Communications
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-[#1A7963] transition-all"
                >
                  <span>✉️</span> {member.email}
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-[#1A7963] transition-all"
                  >
                    <span>📞</span> {member.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ══ نیویگیشن بار ══ */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Assembly List
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={onPrev}
              className="w-9 h-9 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
              title="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="w-9 h-9 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
              title="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════
//  مین کمپوننٹ
// ══════════════════════════════════════════════════════

const HouseOfDelegates = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // تمام ممبرز کی فلیٹ لسٹ
  const allMembers = delegateRows.flatMap((row) => row.members);

  const currentIndex = selectedMember
    ? allMembers.findIndex((m) => m.id === selectedMember.id)
    : -1;

  const handleSelect = (member) => {
    setSelectedMember(member);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    const next = allMembers[(currentIndex + 1) % allMembers.length];
    setSelectedMember(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    const prev = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
    setSelectedMember(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── پروفائل پیج ──
  if (selectedMember) {
    return (
      <ProfileView
        member={selectedMember}
        onBack={() => setSelectedMember(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        total={allMembers.length}
      />
    );
  }

  // ── مین لسٹ پیج ──
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">

     
{/* Hero Banner */}
<div
  className="w-full text-white py-24 px-4 text-center relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80"></div>

  {/* Animated Background Zoom Effect */}
  <div className="absolute inset-0 animate-pulse opacity-20"></div>

  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:15px_15px]" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out]">
    
    <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-5 shadow-lg">
      GCDA Representative Assembly
    </span>

    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg">
      House of Delegates
    </h1>

    <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-6 rounded-full"></div>

    <p className="text-white/95 font-medium text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
      {houseLeadership.description}
    </p>

    {/* Optional Stats */}
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
        <p className="text-2xl font-black text-white">4</p>
        <p className="text-xs text-slate-300 uppercase tracking-wider">
          Provinces
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
        <p className="text-2xl font-black text-white">20+</p>
        <p className="text-xs text-slate-300 uppercase tracking-wider">
          Delegates
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
        <p className="text-2xl font-black text-white">GCDA</p>
        <p className="text-xs text-slate-300 uppercase tracking-wider">
          Representation
        </p>
      </div>
    </div>

  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-16">

        {/* ہیرو بینر */}
        {/* <div>
          <h2 className="text-xl font-bold text-[#0f5132] flex items-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#e67e22] rounded-full" />
            House Leadership &amp; Representation
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100 relative group">
            <img
              src={houseLeadership.image}
              alt="House of Delegates"
              className="w-full h-[260px] sm:h-[360px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
              <p className="text-orange-400 text-xs font-bold tracking-widest uppercase">{houseLeadership.subtitle}</p>
              <h3 className="text-2xl md:text-3xl font-black mt-1">{houseLeadership.title}</h3>
            </div>
          </div>
        </div> */}

        {/* ڈیلیگیٹ رووز */}
        <div className="space-y-14">
          {delegateRows.map((row) => (
            <div key={row.id} className="border-t border-gray-200 pt-10">
              <h3 className="text-lg font-bold text-gray-800 mb-7 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-emerald-600 rounded-full" />
                {row.rowTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {row.members.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => handleSelect(member)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200/70 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                  >
                    {/* تصویر */}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                      <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1A7963&color=fff&size=300`;
                        }}
                      />
                      <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase px-2 py-0.5 bg-black/55 backdrop-blur-sm text-white rounded-full tracking-wider">
                        {member.region}
                      </span>
                    </div>

                    {/* انفو */}
                    <div className="p-4 flex flex-col flex-1 justify-between bg-gray-50/50 group-hover:bg-white transition-colors">
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#0f5132] text-base transition-colors line-clamp-1">
                          {member.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">{member.designation}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{member.hospital}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-emerald-600 font-bold flex items-center justify-center gap-1 group-hover:text-orange-500 transition-colors">
                        <span>View Full Profile</span>
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseOfDelegates;
