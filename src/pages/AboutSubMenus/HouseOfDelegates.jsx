// src/pages/HouseOfDelegates/HouseOfDelegates.jsx

import React, { useState } from "react";
import { houseLeadership, delegateRows } from "../../data/delegatesData";

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
    {items?.map((item, index) => (
      <li
        key={index}
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
    name || "GCDA Delegate"
  )}&background=1A7963&color=fff&size=300`;

const ProfileView = ({ member, onBack, onPrev, onNext, currentIndex, total }) => {
  return (
    <div className="w-full bg-slate-100 min-h-screen font-sans pb-14">
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
          House of Delegates
        </button>
        <span>›</span>
        <span className="text-slate-800 font-bold">Profile</span>

        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
        <h1 className="text-2xl font-black text-slate-800 mb-4">Profile</h1>

        <div className="flex items-center justify-between mb-5 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-sm"
          >
            ← Back to House of Delegates List
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              className="w-9 h-9 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
              title="Previous"
            >
              ‹
            </button>

            <span className="text-sm font-semibold text-slate-500 min-w-[60px] text-center">
              {currentIndex + 1} / {total}
            </span>

            <button
              onClick={onNext}
              className="w-9 h-9 bg-white hover:bg-[#1A7963] hover:text-white text-slate-700 rounded-full flex items-center justify-center shadow border border-slate-200 transition-all"
              title="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 shadow-lg rounded-lg overflow-hidden">
          <div className="lg:w-[300px] flex-shrink-0 bg-[#1e2d3d] text-white flex flex-col">
            <div className="p-6 flex flex-col items-center border-b border-slate-700/50">
              <div className="w-40 h-44 rounded-xl overflow-hidden ring-4 ring-slate-600 shadow-xl mb-4 bg-slate-700">
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
                  {member.positions.map((position, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed"
                    >
                      <span className="text-[#e67e22] font-black mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      <span>{position}</span>
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
              <SideInfoRow label="Religion" value={member.religion} />
              <SideInfoRow label="Qualification" value={member.qualification} />
              <SideInfoRow label="Region / Station" value={member.region} />
              <SideInfoRow label="Joined GCDA" value={member.joinedGCDA} />
              <SideInfoRow label="Current Role" value={member.role} />
            </div>
          </div>

          <div className="flex-1 bg-white px-8 py-8 overflow-y-auto">
            <div className="mb-8 pb-6 border-b border-slate-100">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                House of Delegates Profile
              </p>

              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-1">
                {member.name}
              </h2>

              <p className="text-sm text-slate-500 font-medium mb-5">
                {member.role} {member.region ? `— ${member.region}` : ""}
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
              <RightSection title="Delegate / Executive Roles">
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
          </div>
        </div>
      </div>
    </div>
  );
};

const HouseOfDelegates = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const allMembers = delegateRows.flatMap((row) => row.members || []);
  const featuredMember = allMembers[0];

  const currentIndex = selectedMember
    ? allMembers.findIndex((member) => member.id === selectedMember.id)
    : -1;

  const handleSelect = (member) => {
    setSelectedMember(member);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!allMembers.length || currentIndex < 0) return;
    const next = allMembers[(currentIndex + 1) % allMembers.length];
    setSelectedMember(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!allMembers.length || currentIndex < 0) return;
    const prev = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
    setSelectedMember(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderMemberCard = (member) => (
    <div
      role="button"
      tabIndex={0}
      onClick={() => handleSelect(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleSelect(member);
      }}
      className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group w-full cursor-pointer"
    >
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-3">
        <img
          src={member.imgSrc || getAvatarUrl(member.name)}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = getAvatarUrl(member.name);
          }}
        />
      </div>

      <h3 className="font-black text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-[#1A7963] text-sm line-clamp-1">
        {member.name}
      </h3>

      <p className="text-[11px] font-semibold text-slate-500 mt-1 line-clamp-1">
        {member.role || member.designation || "GCDA Delegate"}
      </p>
    </div>
  );

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
      <section
        className="relative w-full bg-cover bg-center py-10 md:py-12 px-4 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:14px_14px]" />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-lg">
            {houseLeadership.title || "House of Delegates GCDA"}
          </h1>
          <div className="w-20 h-1 bg-[#e67e22] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        {featuredMember && (
          <div className="mb-5 max-w-[250px]">
            {renderMemberCard(featuredMember)}
          </div>
        )}

        <div className="space-y-5">
          {delegateRows.map((row) => (
            <section key={row.id} className="border-t border-gray-200 pt-4">
              <h3 className="text-base font-black text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-emerald-600 rounded-full" />
                {row.rowTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {row.members?.map((member) => (
                  <div key={member.id} className="w-full">
                    {renderMemberCard(member)}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseOfDelegates;