import React from "react";
import { Link, useParams } from "react-router-dom";
import delegatesData from "../../data/delegatesData";

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

function HouseOfDelegatesProfileDetails() {
  const { profileId } = useParams();

  const profile = delegatesData.profiles.find(
    (item) => item.id === profileId
  );

  if (!profile) {
    return (
      <main className="min-h-[60vh] bg-white flex items-center justify-center">
        <h2 className="text-xl font-bold text-slate-500">
          Profile Not Found!
        </h2>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      <section className="max-w-[1200px] mx-auto px-4 py-8 md:py-10">
        <Link
          to="/about/house-delegates"
          className="inline-block mb-6 text-sm font-bold text-[#1A7963] hover:underline"
        >
          ← Back to House of Delegates
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-8 items-start">
          <aside className="bg-slate-700 text-white shadow-lg overflow-hidden">
            <div className="p-7 text-center">
              <div className="w-full h-[310px] bg-slate-800 border border-slate-600 overflow-hidden">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h1 className="mt-6 text-xl font-black tracking-wide">
                {profile.name}
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {profile.qualification}
              </p>
            </div>

            <div className="px-8 pb-8 space-y-5">
              <SideSection title="Position Held">
                <ul className="space-y-1">
                  {profile.positionHeld?.map((position, index) => (
                    <li key={index}>{position}</li>
                  ))}
                </ul>
              </SideSection>

              <SideSection title="Current Posting">
                {profile.currentPosting}
              </SideSection>

              <SideSection title="Delegate Role">
                {profile.role}
              </SideSection>

              <SideSection title="Region">
                {profile.region}
              </SideSection>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                Personal Career & Interests
              </h2>

              <div className="mt-4 space-y-4 text-sm md:text-base leading-8 text-slate-700 text-justify">
                {profile.personalCareerInterests?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                Professional Summary
              </h2>

              <p className="mt-4 text-sm md:text-base leading-8 text-slate-700 text-justify">
                {profile.professionalSummary}
              </p>
            </section>

            <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                Education
              </h2>

              <BulletList items={profile.education} />
            </section>

            <SimpleTable
              title="Previous Official Positions"
              columns={[
                { key: "officialBody", label: "Official Body" },
                { key: "post", label: "Post" },
                { key: "duration", label: "Duration" },
              ]}
              rows={profile.previousOfficialPositions}
            />

            <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                Permanent Contact
              </h2>

              <p className="mt-4 text-slate-700 leading-7">
                {profile.permanentContact}
              </p>
            </section>

            <section className="bg-white border border-slate-100 shadow-sm rounded-xl p-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">
                Present Contact
              </h2>

              <p className="mt-4 text-slate-700 leading-7">
                {profile.presentContact}
              </p>

              <p className="mt-2 text-[#1A7963] font-semibold">
                {profile.workPhone}
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HouseOfDelegatesProfileDetails;