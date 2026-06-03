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
            <p className="text-sm font-semibold text-slate-700 mt-1">{member.hospital}</p>
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
            <p className="text-sm font-semibold text-slate-700 mt-1">{member.phone}</p>
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
  <button
    type="button"
    onClick={onClick}
    className={`text-left group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white
      ${
        isActive
          ? "border-[#1A7963] ring-4 ring-emerald-100"
          : "border-slate-200 hover:border-emerald-200"
      }
    `}
  >
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 bg-slate-50 p-1 flex-shrink-0">
        <img
          src={member.imgSrc || getAvatarUrl(member.name)}
          alt={member.name}
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            e.currentTarget.src = getAvatarUrl(member.name);
          }}
        />
      </div>

      <div className="min-w-0">
        <h4 className="text-sm font-black text-slate-900 leading-tight group-hover:text-[#1A7963] transition-colors">
          {member.name}
        </h4>

        <p className="text-[11px] font-bold text-slate-500 mt-1 line-clamp-2">
          {member.role}
        </p>

        <p className="text-[10px] font-bold text-emerald-700 mt-2">
          {member.region}
        </p>
      </div>
    </div>
  </button>
);

const Committees = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const allMembers = committeesRows.flatMap((committee) => committee.members || []);

  const regionsCount = new Set(
    allMembers.map((member) => member.region).filter(Boolean)
  ).size;

  const handleProfileClick = (committeeId, member) => {
    setSelectedProfile((prev) => {
      if (prev?.committeeId === committeeId && prev?.member?.id === member.id) {
        return null;
      }

      return { committeeId, member };
    });
  };

  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {/* Hero Banner */}
      <div
        className="w-full text-white py-20 px-4 text-left relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:15px_15px]" />

        <div className="relative z-10 max-w-none ml-0 md:ml-8 lg:ml-10">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-5 shadow-lg">
            {committeesLeadership.subtitle}
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg">
            {committeesLeadership.title}
          </h1>

          <div className="w-24 h-1 bg-[#e67e22] mb-6 rounded-full" />

          <p className="text-white/95 font-medium text-base md:text-lg max-w-3xl leading-relaxed">
            {committeesLeadership.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">{committeesRows.length}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">Committees</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">{allMembers.length}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Committee Profiles
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black text-white">{regionsCount}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Committees Content */}
      <div className="w-full px-4 md:px-8 lg:px-10 py-12">
        <div className="max-w-none">
          {committeesRows.map((committee) => {
            const activeMember =
              selectedProfile?.committeeId === committee.id
                ? selectedProfile.member
                : null;

            return (
              <section
                key={committee.id}
                className="border-t border-[#d6b35a] py-8 first:border-t-0 first:pt-0"
              >
                <div className="max-w-6xl">
                  <h2 className="text-2xl md:text-3xl font-black text-[#00334d] leading-tight">
                    {committee.committeeName}
                  </h2>

                  <div className="w-full h-px bg-[#d6b35a] mt-3 mb-4" />

                  <p className="whitespace-pre-line text-[15px] md:text-base text-slate-700 leading-7 max-w-5xl">
                    {committee.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
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