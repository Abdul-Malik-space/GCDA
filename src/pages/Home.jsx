// src/pages/Home.jsx

import React from "react";
import Hero from "../components/Hero";

const profiles = [
  { id: 1, name: "Ali", role: "Developer" },
  { id: 2, name: "Sara", role: "Designer" },
  { id: 3, name: "Ahmed", role: "Manager" },
  { id: 4, name: "Zain", role: "Analyst" },
  { id: 5, name: "Maria", role: "Writer" },
];

const sliderProfiles = [...profiles, ...profiles];

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Profile Slider Section */}
      <section className="py-10 bg-white overflow-hidden">
        <h2 className="text-center text-2xl font-bold mb-8 text-slate-800">
          Our Team
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-gcda-marquee w-max">
            {sliderProfiles.map((profile, index) => (
              <div
                key={`${profile.id}-${index}`}
                className="p-4 border border-slate-200 rounded-lg shadow-md w-48 text-center bg-white flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4" />

                <h3 className="font-bold text-slate-800">{profile.name}</h3>

                <p className="text-sm text-gray-600">{profile.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes gcdaMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-gcda-marquee {
            animation: gcdaMarquee 22s linear infinite;
          }

          .animate-gcda-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Home;