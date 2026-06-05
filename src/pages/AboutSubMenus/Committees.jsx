// src/pages/Committees/Committees.jsx

import React, { useState } from "react";
import { committeesLeadership, committeesRows } from "../../data/committeesData";

const getAvatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || "GCDA Member"
  )}&background=1A7963&color=fff&size=300`;

const ProfileDetail = ({ member, onClose }) => (
  <div className="mt-6 mb-2 border border-slate-200 bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
    <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-white">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1A7963]">
        Profile Details
      </p>

      <button
        type="button"
        onClick={onClose}
        className="text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
      >
        Close
      </button>
    </div>

    <div className="p-5 flex flex-col md:flex-row gap-5">
      <div className="flex-shrink-0">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-white border border-slate-200 p-1 shadow-sm">
          <img
            src={member.imgSrc || getAvatarUrl(member.name)}
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = getAvatarUrl(member.name);
            }}
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
        <p className="text-sm font-bold text-[#1A7963] mt-1">{member.role}</p>
        <p className="text-sm text-slate-500 mt-1">
          {member.designation} — {member.region}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mt-4 max-w-4xl">
          {member.bio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Hospital
            </p>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              {member.hospital}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Qualification
            </p>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              {member.qualification}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Contact
            </p>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              {member.phone}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:text-[#1A7963] hover:bg-emerald-50 transition-all"
            >
              ✉️ {member.email}
            </a>
          )}

          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:text-[#1A7963] hover:bg-emerald-50 transition-all"
            >
              📞 {member.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const CommitteeMemberCard = ({ member, isActive, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
    className={`bg-white rounded-xl border p-3 flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group w-full cursor-pointer ${
      isActive
        ? "border-[#1A7963] ring-4 ring-emerald-100"
        : "border-slate-200 hover:border-emerald-200"
    }`}
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
      {member.role || member.designation || "GCDA Committee Member"}
    </p>
  </div>
);

const Committees = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [openDescriptions, setOpenDescriptions] = useState({});

  const handleProfileClick = (committeeId, member) => {
    setSelectedProfile((prev) => {
      if (prev?.committeeId === committeeId && prev?.member?.id === member.id) {
        return null;
      }

      return { committeeId, member };
    });
  };

  const toggleDescription = (committeeId) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [committeeId]: !prev[committeeId],
    }));
  };

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
            {committeesLeadership.title}
          </h1>
          <div className="w-20 h-1 bg-[#e67e22] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      <div className="w-full px-4 md:px-6 py-5">
        <div className="w-full space-y-5">
          {committeesRows.map((committee, index) => {
            const activeMember =
              selectedProfile?.committeeId === committee.id
                ? selectedProfile.member
                : null;

            const isDescriptionOpen = !!openDescriptions[committee.id];

            return (
              <section
                key={committee.id}
                className={`w-full pt-4 ${
                  index === 0 ? "" : "border-t border-gray-200"
                }`}
              >
                <div className="w-full">
                  <h3 className="text-base font-black text-gray-800 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-emerald-600 rounded-full" />
                    {committee.committeeName}
                  </h3>

                  <button
                    type="button"
                    onClick={() => toggleDescription(committee.id)}
                    className="mt-2 mb-3 text-xs font-black text-[#1A7963] bg-white border border-emerald-100 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-all"
                  >
                    {isDescriptionOpen ? "Hide Description" : "Show Description"}
                  </button>

                  {isDescriptionOpen && (
                    <p className="text-sm text-slate-600 leading-relaxed bg-white border border-slate-200 rounded-xl p-4 mb-4 w-full text-justify">
                      {committee.description?.replace(/\s+/g, " ")}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {committee.members?.map((member) => (
                      <CommitteeMemberCard
                        key={member.id}
                        member={member}
                        isActive={activeMember?.id === member.id}
                        onClick={() => handleProfileClick(committee.id, member)}
                      />
                    ))}
                  </div>

                  {activeMember && (
                    <ProfileDetail
                      member={activeMember}
                      onClose={() => setSelectedProfile(null)}
                    />
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Committees;