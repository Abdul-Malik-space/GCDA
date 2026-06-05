// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MembershipForm from "./MembershipForm";
import gcdaLogo from "../assets/images/gcda-logo.png";

function Navbar({ onOpenMembership, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [activeBranchMenu, setActiveBranchMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileBranchType, setActiveMobileBranchType] = useState(null);

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

  const aboutLinks = [
    { label: "Introduction", to: "/about/introduction" },
    { label: "Mission & Vision", to: "/about/mission-vision" },
    { label: "History", to: "/about/history" },
    { label: "Chief Patron", to: "/about/chief-patron" },
    { label: "Patrons", to: "/about/patrons" },
    { label: "Central Body", to: "/about/central-body" },
    { label: "House of Delegates", to: "/about/house-delegates" },
    { label: "Board of Trustees", to: "/about/board-trustees" },
    { label: "Committees", to: "/about/committees" },
  ];

  const publicationLinks = [
    { label: "Scientific Journal of GCDA", to: "/publications/scientific-journal" },
    { label: "News Letter", to: "/publications/newsletter" },
    { label: "GCDA Gazette", to: "/publications/gazette" },
    { label: "Annual Report", to: "/publications/annual-report" },
    { label: "Leadership", to: "/publications/leadership" },
  ];

  const programLinks = [
    { label: "Upcoming Programs", to: "/programs/upcoming" },
    { label: "Health Programs", to: "/programs/health" },
    { label: "Training Programs", to: "/programs/training" },
  ];

  const diseaseLinks = [
    { label: "Pneumonia", to: "/diseases/pneumonia" },
    { label: "Asthma", to: "/diseases/asthma" },
  ];

  const galleryLinks = [
    { label: "Video Gallery", to: "/videos" },
    { label: "Photos Gallery", to: "/gallery" },
    { label: "Press Clipping Gallery", to: "/press-gallery" },
  ];

  const contactLinks = [
    { label: "Contact Info", to: "/contact/info" },
    { label: "Ask a Question", to: "/contact/ask" },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileBranchType(null);
  };

  const handleMembershipOpen = () => {
    if (onOpenMembership) {
      onOpenMembership();
    } else {
      setIsFormOpen(true);
    }

    closeMobileMenu();
  };

  const toggleMobileMenu = (menuName) => {
    setActiveMobileMenu((prev) => (prev === menuName ? null : menuName));
    setActiveMobileBranchType(null);
  };

  const toggleMobileBranchType = (type) => {
    setActiveMobileBranchType((prev) => (prev === type ? null : type));
  };

  const MobileLink = ({ to, children, extraClass = "" }) => (
    <Link
      to={to}
      onClick={closeMobileMenu}
      className={`block px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-100 hover:bg-emerald-50 hover:text-[#1A7963] ${extraClass}`}
    >
      {children}
    </Link>
  );

  const MobileToggle = ({ id, label }) => (
    <button
      type="button"
      onClick={() => toggleMobileMenu(id)}
      className="w-full flex items-center justify-between px-4 py-3 text-sm font-black text-slate-800 border-b border-slate-100 hover:bg-emerald-50"
    >
      <span>{label}</span>
      <span className="text-lg text-[#1A7963]">
        {activeMobileMenu === id ? "−" : "+"}
      </span>
    </button>
  );

  const DesktopDropdown = ({ label, links, width = "w-56" }) => (
    <div className="relative group py-5">
      <button
        type="button"
        className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer"
      >
        {label}
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

      <div
        className={`absolute left-0 mt-2 ${width} bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50`}
      >
        {links.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] ${
              index !== links.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="w-full font-sans relative z-50">
      {/* TOP GREEN BAR */}
      <div className="w-full bg-[#1A7963] text-white text-sm hidden md:block">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 min-h-[96px] py-2.5 transition-all duration-300">
          <div
            className="flex items-center cursor-pointer group flex-shrink-0 min-w-0"
            onClick={() => setActivePage?.("home")}
          >
            <div className="bg-white rounded-2xl px-2.5 py-2 shadow-lg border border-white/70 flex items-center justify-center flex-shrink-0">
              <img
                src={gcdaLogo}
                alt="GCDA Logo"
                className="h-[40px] lg:h-[60px] xl:h-[74px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <div className="ml-4 leading-tight min-w-0">
              <h1 className="text-white text-lg lg:text-xl xl:text-2xl font-black tracking-wide leading-snug max-w-[340px] xl:max-w-none">
                General Cadre Doctors Association
              </h1>

              <p className="text-emerald-100 text-xs xl:text-sm font-bold tracking-[0.25em] uppercase mt-1.5">
                GCDA
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2.5 min-w-0 flex-1">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 min-w-0">
              <a
                href="mailto:amdulma125656@ggmail.com"
                className="hover:underline truncate max-w-[120px] lg:max-w-[180px] xl:max-w-[245px] text-xs xl:text-sm font-medium"
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

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex-shrink-0">
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

            <button
              type="button"
              onClick={handleMembershipOpen}
              className="bg-[#E9967A] hover:bg-[#d68569] text-white text-xs xl:text-sm font-bold px-3 xl:px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer flex-shrink-0"
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

              <span className="leading-tight whitespace-nowrap">
                Online Membership
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between min-h-[66px] py-1.5 items-center gap-6">
            <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-7 font-semibold text-gray-800 text-sm xl:text-[15px]">
              <Link
                to="/"
                className="pb-1 transition-all cursor-pointer text-gray-600 hover:text-[#1A7963]"
              >
                Home
              </Link>

              

              <DesktopDropdown label="About" links={aboutLinks} />
              {/* BRANCHES MAIN MENU */}
              <div
                className="relative group py-5"
                onMouseLeave={() => setActiveBranchMenu(null)}
              >
                <button
                  type="button"
                  className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Branches
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
                  <div
                    className="relative border-b border-gray-100"
                    onMouseEnter={() => setActiveBranchMenu("provincial")}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                      <span>Provincial Body</span>
                      <span className="text-gray-400">›</span>
                    </div>

                    {activeBranchMenu === "provincial" && (
                      <div className="absolute left-full top-0 w-52 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                        {provinces.map((province) => (
                          <Link
                            key={province}
                            to={`/branches/provincial/${province.toLowerCase()}`}
                            className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-50 last:border-none"
                          >
                            {province}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="relative"
                    onMouseEnter={() => setActiveBranchMenu("district")}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                      <span>District Body</span>
                      <span className="text-gray-400">›</span>
                    </div>

                    {activeBranchMenu === "district" && (
                      <div className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 max-h-72 overflow-y-auto z-50">
                        {districts.map((district) => (
                          <Link
                            key={district}
                            to={`/branches/district/${district.toLowerCase()}`}
                            className="block px-4 py-1.5 hover:bg-gray-50 hover:text-[#1A7963] text-xs border-b border-gray-50 last:border-none"
                          >
                            {district}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <DesktopDropdown
                label="Publication"
                links={publicationLinks}
                width="w-64"
              />
              
              

              {/* Membership Dropdown */}
              <div className="relative group py-5">
                <button
                  type="button"
                  className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Membership
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

                <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50">
                  <Link
                    to="/membership/overview"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100"
                  >
                    Membership Overview
                  </Link>

                  <button
                    type="button"
                    onClick={handleMembershipOpen}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100 font-normal cursor-pointer"
                  >
                    Online Membership Form
                  </button>

                  <Link
                    to="/membership/doctors-form"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-100"
                  >
                    Doctors Form
                  </Link>

                  <Link
                    to="/membership/students"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963]"
                  >
                    Membership for Students
                  </Link>
                </div>
              </div>

              <DesktopDropdown label="Programs" links={programLinks} width="w-52" />
              <DesktopDropdown label="Diseases" links={diseaseLinks} width="w-44" />
              <DesktopDropdown label="Gallery" links={galleryLinks} width="w-52" />
              <DesktopDropdown label="Contact" links={contactLinks} width="w-48" />
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
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between w-full py-1.5">
              <div
                className="flex items-center gap-2 cursor-pointer min-w-0"
                onClick={() => {
                  setActivePage?.("home");
                  closeMobileMenu();
                }}
              >
                <img
                  src={gcdaLogo}
                  alt="GCDA Logo"
                  className="h-10 w-auto object-contain flex-shrink-0"
                />

                <div className="leading-tight min-w-0">
                  <p className="text-[#1A7963] text-[12px] font-black leading-tight">
                    General Cadre Doctors
                  </p>
                  <p className="text-slate-500 text-[9px] font-bold tracking-widest leading-tight">
                    Association GCDA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={handleMembershipOpen}
                  className="bg-[#E9967A] hover:bg-[#d68569] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm transition-all duration-200 flex items-center gap-1 cursor-pointer"
                >
                  Membership
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-gray-700 hover:text-[#1A7963] p-1.5 border border-gray-200 rounded-md bg-gray-50 cursor-pointer"
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="px-4 py-4 border-b border-slate-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1A7963]"
                />
                <svg
                  className="w-4 h-4 text-gray-400 absolute left-3 top-3.5"
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
            </div>

            <nav className="pb-6">
              <MobileLink to="/">Home</MobileLink>

              

              <MobileToggle id="about" label="About" />
              <MobileToggle id="branches" label="Branches" />
              {activeMobileMenu === "branches" && (
                <div className="bg-slate-50">
                  <button
                    type="button"
                    onClick={() => toggleMobileBranchType("provincial")}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:bg-emerald-50"
                  >
                    <span>Provincial Body</span>
                    <span className="text-[#1A7963]">
                      {activeMobileBranchType === "provincial" ? "−" : "+"}
                    </span>
                  </button>

                  {activeMobileBranchType === "provincial" && (
                    <div className="bg-white">
                      {provinces.map((province) => (
                        <MobileLink
                          key={province}
                          to={`/branches/provincial/${province.toLowerCase()}`}
                          extraClass="pl-8 text-xs"
                        >
                          {province}
                        </MobileLink>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleMobileBranchType("district")}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:bg-emerald-50"
                  >
                    <span>District Body</span>
                    <span className="text-[#1A7963]">
                      {activeMobileBranchType === "district" ? "−" : "+"}
                    </span>
                  </button>

                  {activeMobileBranchType === "district" && (
                    <div className="bg-white max-h-72 overflow-y-auto">
                      {districts.map((district) => (
                        <MobileLink
                          key={district}
                          to={`/branches/district/${district.toLowerCase()}`}
                          extraClass="pl-8 text-xs"
                        >
                          {district}
                        </MobileLink>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {activeMobileMenu === "about" && (
                <div className="bg-slate-50">
                  {aboutLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              <MobileToggle id="publication" label="Publication" />
              {activeMobileMenu === "publication" && (
                <div className="bg-slate-50">
                  {publicationLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              <MobileToggle id="membership" label="Membership" />
              {activeMobileMenu === "membership" && (
                <div className="bg-slate-50">
                  <MobileLink to="/membership/overview">
                    Membership Overview
                  </MobileLink>

                  <button
                    type="button"
                    onClick={handleMembershipOpen}
                    className="w-full text-left block px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-100 hover:bg-emerald-50 hover:text-[#1A7963]"
                  >
                    Online Membership Form
                  </button>

                  <MobileLink to="/membership/doctors-form">
                    Doctors Form
                  </MobileLink>
                  <MobileLink to="/membership/students">
                    Membership for Students
                  </MobileLink>
                </div>
              )}

              <MobileToggle id="programs" label="Programs" />
              {activeMobileMenu === "programs" && (
                <div className="bg-slate-50">
                  {programLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              <MobileToggle id="diseases" label="Diseases" />
              {activeMobileMenu === "diseases" && (
                <div className="bg-slate-50">
                  {diseaseLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              <MobileToggle id="gallery" label="Gallery" />
              {activeMobileMenu === "gallery" && (
                <div className="bg-slate-50">
                  {galleryLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              <MobileToggle id="contact" label="Contact" />
              {activeMobileMenu === "contact" && (
                <div className="bg-slate-50">
                  {contactLinks.map((item) => (
                    <MobileLink key={item.to} to={item.to}>
                      {item.label}
                    </MobileLink>
                  ))}
                </div>
              )}
            </nav>
          </div>
        )}
      </div>

      {isFormOpen && !onOpenMembership && (
        <MembershipForm onClose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}

export default Navbar;