import React from "react";
import { Link } from "react-router-dom";
import boardTrusteesData from "../../data/boardTrusteesData";

function BoardOfTrustees() {
  const data = boardTrusteesData;
  const featuredProfile = data.profiles?.[0];

  const firstRowProfiles = data.profiles?.slice(1, 6) || [];
  const secondRowProfiles = data.profiles?.slice(6, 11) || [];
  const thirdRowProfiles = data.profiles?.slice(11, 16) || [];
  const fourthRowProfiles = data.profiles?.slice(16, 21) || [];

  const profileRows = [
    firstRowProfiles,
    secondRowProfiles,
    thirdRowProfiles,
    fourthRowProfiles,
  ];

  const ProfileCard = ({ profile, featured = false }) => (
    <Link
      to={`/about/board-trustees/profile/${profile.id}`}
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
        {profileRows.map((rowProfiles, rowIndex) => {
          if (!rowProfiles || rowProfiles.length === 0) return null;

          return (
            <div key={rowIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {rowProfiles.map((profile) => (
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

export default BoardOfTrustees;