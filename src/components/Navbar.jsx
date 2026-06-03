import React, { useState } from "react";
import { Link } from "react-router-dom";
import MembershipForm from "./MembershipForm";
import gcdaLogo from "../assets/images/gcda-logo.png";

function Navbar({ onOpenMembership, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);

  const provinces = [
    "Punjab",
    "Sindh",
    "Balochistan",
    "KPK",
    "Gilgit Baltistan",
    "Azad Jammu Kashmir",
  ];

  const districts = [
    "Attock District",
    "Bahawalnagar District",
    "Bahawalpur District",
    "Bhakkar District",
    "Chiniot District",
    "Chakwal District",
    "DG Khan District",
    "Faisalabad District",
    "Gujranwala District",
    "Gujrat District",
    "Hafizabad District",
    "Jehlum District",
    "Kasur District",
    "Khanewal District",
    "Khushab",
    "Lahore",
    "Layyah",
    "Lodharan",
    "Mandi Bahauddin",
    "Mianwali",
    "Multan",
    "Muzaffar Gargh",
  ];

  return (
    <header className="w-full font-sans relative z-50">
      {/* 1. TOP BAR */}
      <div className="w-full bg-[#1A7963] text-white text-sm hidden md:block">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8 min-h-[136px] py-4 transition-all duration-300">
          {/* Left: Logo + Organization Name */}
          <div
            className="flex items-center cursor-pointer group flex-shrink-0 min-w-0"
            onClick={() => setActivePage?.("home")}
          >
            <div className="bg-white rounded-2xl px-4 py-3 shadow-lg border border-white/70 flex items-center justify-center flex-shrink-0">
              <img
                src={gcdaLogo}
                alt="GCDA Logo"
                className="h-24 xl:h-28 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <div className="ml-5 leading-tight">
              <h1 className="text-white text-lg xl:text-2xl font-black tracking-wide leading-snug whitespace-nowrap">
                General Cadre Doctors Association
              </h1>

              <p className="text-emerald-100 text-sm xl:text-base font-bold tracking-[0.25em] uppercase mt-2">
                GCDA
              </p>
            </div>
          </div>

          {/* Right: Email + Phone + Membership */}
          <div className="flex items-center justify-end gap-3 xl:gap-4 flex-shrink-0 whitespace-nowrap">
            {/* Email */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 xl:px-4 py-3">
              <a
                href="mailto:amdulma125656@ggmail.com"
                className="hover:underline truncate max-w-[165px] xl:max-w-[230px] text-xs xl:text-sm font-medium"
              >
                amdulma125656@ggmail.com
              </a>

              <div className="bg-[#E9967A] p-2 text-white rounded-md flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 xl:px-4 py-3">
              <a
                href="tel:+3337074846"
                className="direction-ltr cursor-pointer text-xs xl:text-sm font-medium"
              >
                +333-7074846
              </a>

              <div className="bg-[#E9967A] p-2 text-white rounded-md flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>

            {/* Online Membership */}
            <button
              onClick={onOpenMembership}
              className="bg-[#E9967A] hover:bg-[#d68569] text-white text-xs xl:text-sm font-bold px-5 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <div className="bg-white/20 p-1 rounded">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <span className="leading-tight">Online Membership</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between min-h-[78px] py-2 items-center gap-6">
            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-7 font-semibold text-gray-800 text-sm xl:text-[15px]">
              <Link
                to="/"
                className="pb-1 transition-all cursor-pointer text-gray-600 hover:text-[#1A7963]"
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative group py-6"
                onMouseLeave={() => {
                  setActiveSubMenu?.(null);
                  setActiveChildMenu?.(null);
                }}
              >
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  About
                  <svg
                    className="w-3 h-3 text-gray-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/about/introduction" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Introduction
                  </Link>
                  <Link to="/about/mission-vision" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Mission & Vision
                  </Link>
                  <Link to="/about/history" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    History
                  </Link>
                  <Link to="/about/chief-patron" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Chief Patron
                  </Link>
                  <Link to="/about/patrons" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Patrons
                  </Link>
                  <Link to="/about/central-body" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Central Body
                  </Link>
                  <Link to="/about/house-delegates" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    House of Delegates
                  </Link>
                  <Link to="/about/board-trustees" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Board of Trustees
                  </Link>
                  <Link to="/about/committees" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Committees
                  </Link>

                  {/* Branches Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubMenu?.("branches")}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                      <span>Branches</span>
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    {activeSubMenu === "branches" && (
                      <div className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                        <div
                          className="relative border-b border-gray-100"
                          onMouseEnter={() => setActiveChildMenu?.("provincial")}
                        >
                          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                            <span>Provincial Body</span>
                            <svg
                              className="w-3 h-3 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>

                          {activeChildMenu === "provincial" && (
                            <div className="absolute left-full top-0 w-48 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                              {provinces?.map((p) => (
                                <Link
                                  key={p}
                                  to={`/branches/provincial/${p.toLowerCase()}`}
                                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-50 last:border-none"
                                >
                                  {p}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        <div
                          className="relative"
                          onMouseEnter={() => setActiveChildMenu?.("district")}
                        >
                          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                            <span>District Body</span>
                            <svg
                              className="w-3 h-3 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>

                          {activeChildMenu === "district" && (
                            <div className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 max-h-64 overflow-y-auto custom-scrollbar shadow-inner z-50">
                              {districts?.map((d) => (
                                <Link
                                  key={d}
                                  to={`/branches/district/${d.toLowerCase()}`}
                                  className="block px-4 py-1.5 hover:bg-gray-50 hover:text-[#1A7963] text-xs border-b border-gray-50 last:border-none"
                                >
                                  {d}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Publication Dropdown */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Publication
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/publications/scientific-journal" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Scientific Journal of GCDA
                  </Link>
                  <Link to="/publications/newsletter" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    News Letter
                  </Link>
                  <Link to="/publications/gazette" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    GCDA Gazette
                  </Link>
                  <Link to="/publications/annual-report" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Annual Report
                  </Link>
                  <Link to="/publications/leadership" className="w-full text-left block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] font-medium cursor-pointer">
                    Leadership
                  </Link>
                </div>
              </div>

              {/* Membership Dropdown */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Membership
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/membership/overview" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Membership Overview
                  </Link>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100 font-normal cursor-pointer"
                  >
                    Online Membership Form
                  </button>
                  <Link to="/membership/doctors-form" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Doctors Form
                  </Link>
                  <Link to="/membership/students" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963]">
                    Membership for Students
                  </Link>
                </div>
              </div>

              {/* Programs */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Programs
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/programs/upcoming" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Upcoming Programs
                  </Link>
                  <Link to="/programs/health" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Health Programs
                  </Link>
                  <Link to="/programs/training" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963]">
                    Training Programs
                  </Link>
                </div>
              </div>

              {/* Diseases */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Diseases
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/diseases/pneumonia" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Pneumonia
                  </Link>
                  <Link to="/diseases/asthma" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963]">
                    Asthma
                  </Link>
                </div>
              </div>

              {/* Gallery Dropdown */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Gallery
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/videos" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100 cursor-pointer">
                    Video Gallery
                  </Link>
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100 font-medium cursor-pointer">
                    Photos Gallery
                  </Link>
                  <Link to="/press-gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                    Press Clipping Gallery
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div className="relative group py-6">
                <button className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer">
                  Contact
                  <svg className="w-3 h-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link to="/contact/info" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100">
                    Contact Info
                  </Link>
                  <Link to="/contact/ask" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963]">
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-50 border border-gray-200 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[#1A7963] w-32 xl:w-44"
                />
                <svg
                  className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="border-l border-gray-300 pl-4 h-9 flex items-center">
                <button className="text-[#D11A2A] hover:opacity-80 p-2 bg-gray-50 rounded-md border border-gray-100 shadow-sm cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between w-full py-2">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setActivePage?.("home");
                  setIsOpen(false);
                }}
              >
                <img
                  src={gcdaLogo}
                  alt="GCDA Logo"
                  className="h-12 w-auto object-contain"
                />

                <div className="leading-tight">
                  <p className="text-[#1A7963] text-[13px] font-black">
                    General Cadre Doctors
                  </p>
                  <p className="text-slate-500 text-[10px] font-bold tracking-widest">
                    Association GCDA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-[#E9967A] hover:bg-[#d68569] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-md shadow-sm transition-all duration-200 flex items-center gap-1 cursor-pointer"
                >
                  <span>Membership</span>
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-[#1A7963] p-1.5 border border-gray-200 rounded-md bg-gray-50 cursor-pointer"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;