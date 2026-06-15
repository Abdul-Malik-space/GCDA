// src/pages/BoardOftrusty/BoardOftrusty.jsx

import React, { useState } from "react";
import {
  boardOftrustyLeadership,
  boardOftrustyRows,
} from "../../data/boardTrusteesData";

const getAvatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || "GCDA Trustee"
  )}&background=1A7963&color=fff&size=300`;

function SideSection({ title, children }) {
  if (!children) return null;

  return (
    <div className="border-t border-slate-600 pt-4">
      <h3 className="text-xs font-black uppercase tracking-wider text-slate-200">
        {title}
      </h3>

      <div className="mt-2 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 leading-7">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function SimpleTable({ title, columns, rows }) {
  return (
    <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 overflow-x-auto">
      <h2 className="text-lg font-black uppercase tracking-wider text-slate-800 mb-4">
        {title}
      </h2>

      {rows && rows.length > 0 ? (
        <table className="w-full border border-slate-200 text-sm">
          <thead className="bg-slate-200 text-slate-800 uppercase text-xs">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="border border-slate-300 px-4 py-3 text-left"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-slate-50">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="border border-slate-200 px-4 py-3 align-top"
                  >
                    {row[column.key] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm text-slate-500">No record available.</p>
      )}
    </section>
  );
}

function ProfileView({
  member,
  onBack,
  onPrev,
  onNext,
  currentIndex,
  total,
}) {
  const personalCareerInterests = [
    member.bio,
    member.positions?.length
      ? member.positions.join(" ")
      : "",
  ].filter(Boolean);

  const previousOfficialPositions = (
    member.executiveRoles?.length ? member.executiveRoles : member.positions || []
  ).map((position) => ({
    officialBody: member.hospital || "GCDA",
    post: position,
    duration: "-",
  }));

  return (
    <main className="w-full bg-white min-h-screen">
      <section className="max-w-[1200px] mx-auto px-4 py-8 md:py-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-block text-sm font-bold text-[#1A7963] hover:underline"
          >
            ← Back to Board of Trustees
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-[#1A7963] hover:bg-[#14624f] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Print
          </button>
        </div>

        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={onPrev}
            className="hidden md:flex absolute left-[-18px] top-[155px] z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-xl font-black text-slate-700 hover:bg-[#1A7963] hover:text-white transition-all"
            title="Previous"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={onNext}
            className="hidden md:flex absolute right-[-18px] top-[155px] z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-xl font-black text-slate-700 hover:bg-[#1A7963] hover:text-white transition-all"
            title="Next"
          >
            ›
          </button>

          <div className="flex md:hidden items-center justify-center gap-3 mb-5">
            <button
              type="button"
              onClick={onPrev}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-xl font-black text-slate-700 hover:bg-[#1A7963] hover:text-white"
            >
              ‹
            </button>

            <span className="text-xs font-bold text-slate-500">
              {currentIndex + 1} / {total}
            </span>

            <button
              type="button"
              onClick={onNext}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-xl font-black text-slate-700 hover:bg-[#1A7963] hover:text-white"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-8 items-start">
            {/* LEFT SIDE */}
            <aside className="bg-slate-700 text-white shadow-lg overflow-hidden">
              <div className="p-7 text-center">
                <div className="w-full h-[310px] bg-slate-800 border border-slate-600 overflow-hidden">
                  <img
                    src={member.imgSrc || getAvatarUrl(member.name)}
                    alt={member.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = getAvatarUrl(member.name);
                    }}
                  />
                </div>

                <h1 className="mt-6 text-xl font-black tracking-wide">
                  {member.name}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {member.qualification}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {member.role || member.designation}
                </p>
              </div>

              <div className="px-8 pb-8 space-y-5">
                <SideSection title="Position Held">
                  <ul className="space-y-1">
                    {member.positions?.map((position, index) => (
                      <li key={index}>{position}</li>
                    ))}
                  </ul>
                </SideSection>

                <SideSection title="Current Posting">
                  {member.hospital}
                </SideSection>

                <SideSection title="Region / Station">
                  {member.region}
                </SideSection>

                <SideSection title="Joined GCDA">
                  {member.joinedGCDA}
                </SideSection>
              </div>
            </aside>

            {/* RIGHT SIDE */}
            <div className="space-y-8">
              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Personal Career & Interests
                </h2>

                <div className="mt-4 space-y-4 text-sm md:text-base leading-8 text-slate-700 text-justify">
                  {personalCareerInterests.length > 0 ? (
                    personalCareerInterests.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>No record available.</p>
                  )}
                </div>
              </section>

              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Professional Summary
                </h2>

                <p className="mt-4 text-sm md:text-base leading-8 text-slate-700 text-justify">
                  {member.professionalSummary || "No record available."}
                </p>
              </section>

              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Education
                </h2>

                <BulletList items={member.education} />
              </section>

              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Key Achievements
                </h2>

                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-black text-slate-800">
                      Contributions & Governance
                    </h3>
                    <BulletList items={member.achievements} />
                  </div>
                </div>
              </section>

              <SimpleTable
                title="Previous Official Positions"
                columns={[
                  { key: "officialBody", label: "Official Body" },
                  { key: "post", label: "Post" },
                  { key: "duration", label: "Duration" },
                ]}
                rows={previousOfficialPositions}
              />

              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Permanent Contact
                </h2>

                <p className="mt-4 text-slate-700 leading-7">
                  {member.region || "No record available."}
                </p>
              </section>

              <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
                <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                  Present Contact
                </h2>

                <p className="mt-4 text-slate-700 leading-7">
                  {member.hospital || "No record available."}
                </p>

                {member.phone && (
                  <p className="mt-2 text-[#1A7963] font-semibold">
                    {member.phone}
                  </p>
                )}

                {member.email && (
                  <p className="mt-1 text-[#1A7963] font-semibold">
                    {member.email}
                  </p>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BoardOfTrustees() {
  const [selectedMember, setSelectedMember] = useState(null);

  const allMembers = boardOftrustyRows.flatMap((row) => row.members || []);
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

    const prev =
      allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];

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
      className="group rounded-xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={member.imgSrc || getAvatarUrl(member.name)}
          alt={member.name}
          className="w-full h-[170px] object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = getAvatarUrl(member.name);
          }}
        />
      </div>

      <div className="p-4 text-center">
        <h4 className="text-sm font-black text-slate-800">{member.name}</h4>

        <p className="mt-2 text-xs text-slate-600 leading-5 line-clamp-3">
          {member.role || member.designation || "GCDA Trustee Member"}
        </p>
      </div>
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
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 121, 99, 0.84), rgba(26, 121, 99, 0.84)), url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            {boardOftrustyLeadership.title}
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            {boardOftrustyLeadership.subtitle}
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      {/* FIRST PROFILE CENTERED */}
      {featuredMember && (
        <section className="max-w-[1200px] mx-auto px-4 pt-10 pb-8">
          <div className="max-w-[220px] mx-auto">
            {renderMemberCard(featuredMember)}
          </div>
        </section>
      )}

      {/* OTHER MEMBERS ROWS */}
      <section className="max-w-[1200px] mx-auto px-4 pb-16">
        <div className="space-y-8">
          {boardOftrustyRows.map((row) => {
            const members = row.members?.filter(
              (member) => member.id !== featuredMember?.id
            );

            if (!members || members.length === 0) return null;

            return (
              <section key={row.id}>
                <h3 className="text-base font-black text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#1A7963] rounded-full" />
                  {row.rowTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  {members.map((member) => (
                    <div key={member.id}>{renderMemberCard(member)}</div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default BoardOfTrustees;