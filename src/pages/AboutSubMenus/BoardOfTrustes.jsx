import React, { useState } from "react";
import {
  boardTrusteesLeadership,
  boardTrusteesRows,
} from "../../data/boardTrusteesData";

// ══════════════════════════════════════════════════════
// چھوٹے ری یوزایبل بلاکس (پروفائل پیج کے لیے)
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
      <li
        key={i}
        className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
      >
        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1A7963] flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const getAvatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || "GCDA Trustee"
  )}&background=1A7963&color=fff&size=300`;

// ══════════════════════════════════════════════════════
// تفصیلی پروفائل ویو — Board of Trustees انداز
// ══════════════════════════════════════════════════════

const ProfileView = ({ member, onBack, onPrev, onNext, currentIndex, total }) => {
  return (
    <div className="w-full bg-slate-100 min-h-screen font-sans pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">
          Home
        </button>
        <span>›</span>
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">
          Members
        </button>
        <span>›</span>
        <button onClick={onBack} className="hover:text-[#1A7963] transition-colors">
          Board of Trustees
        </button>
        <span>›</span>
        <span className="text-slate-800 font-bold">Profile</span>

        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
        <h1 className="text-2xl font-black text-slate-800 mb-6">
          Trustee Profile
        </h1>

        {/* Top Navigation Bar */}
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
            Back to Board of Trustees List
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

        {/* Main Profile Grid */}
        <div className="flex flex-col lg:flex-row gap-0 shadow-lg rounded-lg overflow-hidden">
          {/* Left Column */}
          <div className="lg:w-[300px] flex-shrink-0 bg-[#1e2d3d] text-white flex flex-col">
            <div className="p-6 flex flex-col items-center border-b border-slate-700/50">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-slate-600 shadow-xl mb-4 bg-slate-700">
                <img
                  src={member.imgSrc || getAvatarUrl(member.name)}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = getAvatarUrl(member.name);
                  }}
                />
              </div>

              <h2 className="text-base font-black text-white text-center leading-tight">
                {member.name}
              </h2>

              <p className="text-slate-400 text-xs font-medium mt-1 text-center">
                {member.designation || member.role}
              </p>

              <p className="text-slate-500 text-[10px] mt-0.5 text-center">
                {member.hospital}
              </p>
            </div>

            {member.positions?.length > 0 && (
              <div className="px-5 py-4 border-b border-slate-700/50">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                  Position(s) Held
                </p>

                <div className="space-y-1.5">
                  {member.positions.map((pos, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed"
                    >
                      <span className="text-[#e67e22] font-black mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      <span>{pos}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="px-5 py-4 space-y-0 flex-1">
              <SideInfoRow
                label="Association"
                value="Government Corporate Doctors Association (GCDA)"
              />
              <SideInfoRow label="Father's / Husband's Name" value={member.fathersName} />
              <SideInfoRow label="Qualification" value={member.qualification} />
              <SideInfoRow label="Region / Station" value={member.region} />
              <SideInfoRow label="Joined GCDA" value={member.joinedGCDA} />
              <SideInfoRow label="Current Role" value={member.role} />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 bg-white px-8 py-8 overflow-y-auto">
            <div className="mb-8 pb-6 border-b border-slate-100">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                Board of Trustees Governance Profile
              </p>

              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-1">
                {member.name}
              </h2>

              <p className="text-sm text-slate-500 font-medium mb-5">
                {member.role} — {member.region}
              </p>

              {member.bio && (
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {member.bio}
                </p>
              )}
            </div>

            {member.professionalSummary && (
              <RightSection title="Professional Summary">
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {member.professionalSummary}
                </p>
              </RightSection>
            )}

            {member.education?.length > 0 && (
              <RightSection title="Education & Academic Background">
                <BulletList items={member.education} />
              </RightSection>
            )}

            {member.executiveRoles?.length > 0 && (
              <RightSection title="Board / Executive Roles">
                <BulletList items={member.executiveRoles} />
              </RightSection>
            )}

            {member.achievements?.length > 0 && (
              <RightSection title="Key Achievements">
                <div className="space-y-2 mt-1">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                    Contributions & Governance
                  </p>
                  <BulletList items={member.achievements} />
                </div>
              </RightSection>
            )}

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                Official Communications
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-[#1A7963] transition-all"
                  >
                    <span>✉️</span> {member.email}
                  </a>
                )}

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

        {/* Bottom Navigation Bar */}
        <div className="flex items-center justify-between mt-6">
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
            Back to Board of Trustees List
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={onNext}
              className="w-9 h-9 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
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
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════

const BoardTrustees = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const allMembers = boardTrusteesRows.flatMap((row) => row.members || []);

  const regionsCount = new Set(
    allMembers.map((member) => member.region).filter(Boolean)
  ).size;

  const currentIndex = selectedMember
    ? allMembers.findIndex((member) => member.id === selectedMember.id)
    : -1;

  const handleSelect = (member) => {
    setSelectedMember(member);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!allMembers.length) return;

    const next = allMembers[(currentIndex + 1) % allMembers.length];
    setSelectedMember(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!allMembers.length) return;

    const prev = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
    setSelectedMember(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderMemberCard = (member) => {
    const isChief = member.type === "chief";
    const isPresident = member.type === "president";
    const isGS = member.type === "gs";

    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleSelect(member)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleSelect(member);
        }}
        className={`bg-white rounded-2xl border border-slate-200 p-5 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_45px_rgba(26,121,99,0.1)] hover:-translate-y-2 relative overflow-hidden group w-full cursor-pointer
          ${isChief ? "border-t-4 border-t-amber-500 shadow-md ring-1 ring-amber-500/10" : ""}
          ${isPresident ? "border-t-4 border-t-[#1A7963] shadow-md ring-1 ring-[#1A7963]/20" : ""}
          ${isGS ? "border-t-4 border-t-blue-600 shadow-md ring-1 ring-blue-600/10" : ""}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/10 group-hover:to-emerald-50/30 transition-all duration-500 pointer-events-none" />

        {isChief && (
          <span className="absolute top-2 right-2 bg-amber-50 text-amber-700 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-wider">
            Chairman
          </span>
        )}

        {isPresident && (
          <span className="absolute top-2 right-2 bg-emerald-50 text-[#1A7963] text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider">
            Board Core
          </span>
        )}

        {isGS && (
          <span className="absolute top-2 right-2 bg-blue-50 text-blue-700 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider">
            Secretariat
          </span>
        )}

        <div
          className={`rounded-full p-1 bg-white border shadow-sm mb-3 transition-all duration-500 group-hover:scale-105 relative z-10 w-20 h-20 sm:w-24 sm:h-24 ring-4 ring-slate-50
          ${isChief || isPresident ? "group-hover:ring-[#1A7963]/20" : "group-hover:ring-amber-500/10"}
        `}
        >
          <img
            src={member.imgSrc || getAvatarUrl(member.name)}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              e.currentTarget.src = getAvatarUrl(member.name);
            }}
          />
        </div>

        <h3 className="font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-[#1A7963] z-10 text-sm sm:text-base line-clamp-1">
          {member.name}
        </h3>

        <p className="text-[11px] font-bold text-slate-500 mt-1 z-10 tracking-wide min-h-[32px] line-clamp-2">
          {member.role}
        </p>

        <p className="text-[11px] text-slate-400 mt-2 font-medium border-t pt-2 w-full border-slate-100 line-clamp-2 h-9">
          {member.designation || member.hospital || "GCDA Board of Trustees Member"}
        </p>

        <div
          className="flex gap-3 mt-3 pt-1 justify-center w-full z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-slate-400 hover:text-[#e67e22] transition-colors p-1.5 bg-slate-50 hover:bg-orange-50 rounded-lg"
              title="Send Email"
            >
              ✉️
            </a>
          )}

          <button
            type="button"
            className="text-slate-400 hover:text-[#1A7963] transition-colors p-1.5 bg-slate-50 hover:bg-emerald-50 rounded-lg"
            title="View Profile"
            onClick={() => handleSelect(member)}
          >
            👤
          </button>
        </div>
      </div>
    );
  };

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
        <div className="absolute inset-0 animate-pulse opacity-20" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:15px_15px]" />

        <div className="relative z-10 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out]">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-5 shadow-lg">
            {boardTrusteesLeadership.subtitle}
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg">
            {boardTrusteesLeadership.title}
          </h1>

          <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-6 rounded-full" />

          <p className="text-white/95 font-medium text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {boardTrusteesLeadership.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">
                {boardTrusteesRows.length}
              </p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Trustee Rows
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">
                {allMembers.length}
              </p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Board Members
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">
                {regionsCount}
              </p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Regions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main List Page */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-16">
        <div className="space-y-14">
          {boardTrusteesRows.map((row) => (
            <div key={row.id} className="border-t border-gray-200 pt-10">
              <h3 className="text-lg font-bold text-gray-800 mb-7 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-emerald-600 rounded-full" />
                {row.rowTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {row.members?.map((member) => (
                  <div key={member.id} className="w-full flex justify-center">
                    {renderMemberCard(member)}
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

export default BoardTrustees;