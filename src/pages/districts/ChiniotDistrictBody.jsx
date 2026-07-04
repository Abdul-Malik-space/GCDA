import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import chiniotDistrictData from "../../data/districts/chiniotDistrictData";

function ChiniotDistrictBody() {
  const data = chiniotDistrictData;

  // First 20 profiles = 4 rows, 5 cards per row on desktop
  const profiles = data.profiles?.slice(0, 20) || [];

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleProfileClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

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

      {/* PROFILE CARDS - FIRST ROW ALSO HAS 5 CARDS */}
      <section className="max-w-[1200px] mx-auto px-4 pt-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/branches/district/chiniot-district/profile/${profile.id}`}
              onClick={handleProfileClick}
              className="group rounded-xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden bg-slate-100">
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
          ))}
        </div>
      </section>
    </main>
  );
}

export default ChiniotDistrictBody;