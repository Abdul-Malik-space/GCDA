import React from "react";
import { Link } from "react-router-dom";
import azadJammuKashmirProvincialData from "../data/azadJammuKashmirProvincialData";

function ProfileCard({ profile }) {
  return (
    <Link
      to={`/branches/provincial/azad-jammu-kashmir/profile/${profile.id}`}
      className="group rounded-xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-[170px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 text-center">
        <h4 className="text-sm font-black text-slate-800">
          {profile.name}
        </h4>

        <p className="mt-2 text-xs text-slate-600 leading-5 line-clamp-3">
          {profile.shortDescription}
        </p>
      </div>
    </Link>
  );
}

function AzadJammuKashmirProvincialBody() {
  const data = azadJammuKashmirProvincialData;
  const featuredProfile = data.profiles?.[0];
  const otherProfiles = data.profiles?.slice(1) || [];

  return (
    <main className="w-full bg-white">
      {/* SMALL HERO SECTION */}
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

      {/* FIRST ROW - SINGLE SMALL PROFILE CARD */}
      {featuredProfile && (
        <section className="max-w-[1200px] mx-auto px-4 pt-10 pb-8">
          <div className="max-w-[220px] mx-auto">
            <ProfileCard profile={featuredProfile} />
          </div>
        </section>
      )}

      {/* OTHER PROFILE CARDS */}
      <section className="max-w-[1200px] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {otherProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AzadJammuKashmirProvincialBody;