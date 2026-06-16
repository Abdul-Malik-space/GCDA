import React from "react";
import { Link } from "react-router-dom";
import centralBodyData from "../../data/centralBodyData";

function CentralBody() {
  const data = centralBodyData;
  const featuredProfile = data.profiles?.[0];

  const firstRowProfiles = data.profiles?.slice(1, 6) || [];
  const secondRowProfiles = data.profiles?.slice(6, 11) || [];
  const thirdRowProfiles = data.profiles?.slice(11, 16) || [];
  const fourthRowProfiles = data.profiles?.slice(16, 21) || [];

  const profileRows = [
    {
      id: 1,
      title: "Core Advisory & Executive Leadership",
      profiles: firstRowProfiles,
    },
    {
      id: 2,
      title: "Provincial & Regional Command",
      profiles: secondRowProfiles,
    },
    {
      id: 3,
      title: "Central Secretariat & Operations Desk",
      profiles: thirdRowProfiles,
    },
    {
      id: 4,
      title: "Extended Governance & Task Force Desk",
      profiles: fourthRowProfiles,
    },
  ];

const ProfileCard = ({ profile, featured = false }) => (
  <Link
    to={`/about/central-body/profile/${profile.id}`}
    className={`group rounded-xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 ${
      featured ? "block max-w-[220px] mx-auto" : ""
    }`}
  >
    <div className="overflow-hidden">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-[170px] object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-4 bg-white text-center">
      <h3 className="font-black text-slate-800 text-sm">
        {profile.name}
      </h3>

      <p className="mt-1 font-semibold text-[#1A7963] text-xs">
        {profile.role}
      </p>

      <p className="mt-2 text-slate-600 text-xs leading-5 line-clamp-3">
        {profile.shortDescription}
      </p>
    </div>
  </Link>
);

  return (
    <main className="w-full bg-white">
      <section
        className="relative min-h-[90px] md:min-h-[145px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 121, 99, 0.84), rgba(26, 121, 99, 0.84)), url(${data.heroImage})`,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            {data.title}
          </h1>

          <p className="mt-2 text-xs md:text-sm font-semibold text-emerald-50">
            {data.subtitle}
          </p>

          <div className="mt-3 w-16 h-[3px] bg-[#E9967A] mx-auto rounded-full" />
        </div>
      </section>

      {featuredProfile && (
        <section className="max-w-[1200px] mx-auto px-4 pt-10 pb-10">
          <ProfileCard profile={featuredProfile} featured />
        </section>
      )}

      <section className="max-w-[1200px] mx-auto px-4 pb-16 space-y-10">
        {profileRows.map((row) => {
          if (!row.profiles || row.profiles.length === 0) return null;

          return (
            <div key={row.id}>
              <h2 className="text-base md:text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#1A7963] rounded-full" />
                {row.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {row.profiles.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default CentralBody;