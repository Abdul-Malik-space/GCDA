// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MembershipForm from "./MembershipForm";
import gcdaLogo from "../assets/images/gcda-logo.png.jpeg";

function Navbar({ onOpenMembership, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [activeBranchMenu, setActiveBranchMenu] = useState(null);
  const [activeDesktopNestedMenu, setActiveDesktopNestedMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileBranchType, setActiveMobileBranchType] = useState(null);
  const [activeMobileNestedMenu, setActiveMobileNestedMenu] = useState(null);
  const [districtSearch, setDistrictSearch] = useState("");

  const provinces = [
    { label: "Punjab", slug: "punjab" },
    { label: "Sindh", slug: "sindh" },
    { label: "Balochistan", slug: "balochistan" },
    { label: "KPK", slug: "kpk" },
    { label: "Gilgit Baltistan", slug: "gilgit-baltistan" },
    { label: "Azad Jammu Kashmir", slug: "azad-jammu-kashmir" },
  ];

  const districts = [
    { label: "Attock District", slug: "attock-district" },
    { label: "Bahawalnagar District", slug: "bahawalnagar-district" },
    { label: "Bahawalpur District", slug: "bahawalpur-district" },
    { label: "Bhakkar District", slug: "bhakkar-district" },
    { label: "Chiniot District", slug: "chiniot-district" },
    { label: "Chakwal District", slug: "chakwal-district" },
    { label: "DG Khan District", slug: "dg-khan-district" },
    { label: "Faisalabad District", slug: "faisalabad-district" },
    { label: "Gujranwala District", slug: "gujranwala-district" },
    { label: "Gujrat District", slug: "gujrat-district" },
    { label: "Hafizabad District", slug: "hafizabad-district" },
    { label: "Jehlum District", slug: "jhelum-district" },
    { label: "Kasur District", slug: "kasur-district" },
    { label: "Khanewal District", slug: "khanewal-district" },
    { label: "Khushab District", slug: "khushab-district" },
    { label: "Lahore District", slug: "lahore-district" },
    { label: "Layyah District", slug: "layyah-district" },
    { label: "Lodharan District", slug: "lodharan-district" },
    { label: "Mandi Bahauddin District", slug: "mandi-bahauddin-district" },
    { label: "Mianwali District", slug: "mianwali-district" },
    { label: "Multan District", slug: "multan-district" },
    { label: "Muzaffargarh District", slug: "muzaffargarh-district" },
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
    { label: "Training Session", to: "/programs/training-session" },
    { label: "ACSM Activities", to: "/programs/acsm-activities" },
    { label: "International Programs", to: "/programs/international-programs" },
  ];

  const serviceMatterLinks = [
    { label: "Rules & Regulation", to: "/service-matter/rules-regulation" },
    { label: "Policies", to: "/service-matter/policies" },
    { label: "Service Matters", to: "/service-matter/service-matters" },
    { label: "Service Case Laws", to: "/service-matter/service-case-laws" },
    { label: "Taxation Matters", to: "/service-matter/taxation-matters" },
  ];

  const jobPortalLinks = [
    { label: "Jobs in Primary & Secondary Health Care Dept", to: "/job-portal/primary-secondary-health-care-dept" },
    { label: "Jobs in SHC & MED", to: "/job-portal/shc-med" },
    { label: "Job in Private Sector", to: "/job-portal/private-sector" },
    { label: "Overseas Jobs", to: "/job-portal/overseas-jobs" },
  ];

  const registrationHccLinks = [
    { label: "Laboratory", to: "/registration-hcc/laboratory" },
    { label: "Collection Center", to: "/registration-hcc/collection-center" },
    { label: "Clinic", to: "/registration-hcc/clinic" },
    { label: "Hospital", to: "/registration-hcc/hospital" },
  ];

  const doctorsInitiativeLinks = [
    { label: "Children Scholarships", to: "/doctors-initiatives/children-scholarships" },
    { label: "Educational Gold Medals", to: "/doctors-initiatives/educational-gold-medals" },
    { label: "International Trainings", to: "/doctors-initiatives/international-trainings" },
    { label: "Housing Projects", to: "/doctors-initiatives/housing-projects" },
    { label: "Adopt a Doctor Scheme", to: "/doctors-initiatives/adopt-a-doctor-scheme" },
    { label: "Lab Test Subsidised", to: "/doctors-initiatives/lab-test-subsidised" },
    { label: "Subsidised Hospital Care", to: "/doctors-initiatives/subsidised-hospital-care" },
    { label: "Health Insurance", to: "/doctors-initiatives/health-insurance" },
    {
      label: "Medical Students",
      children: [
        {
          label: "Career Counsellings (National & International)",
          to: "/doctors-initiatives/medical-students/career-counsellings",
        },
      ],
    },
    { label: "Dr 4 Dr Program", to: "/doctors-initiatives/dr-4-dr-program" },
  ];

  const consultationHubLinks = [
    { label: "Skin Disease", to: "/consultation-hub/skin-disease" },
    { label: "Stomach", to: "/consultation-hub/stomach" },
    { label: "Respiratory", to: "/consultation-hub/respiratory" },
    { label: "Digestive", to: "/consultation-hub/digestive" },
    { label: "Reproductive", to: "/consultation-hub/reproductive" },
  ];

  const diseaseLinks = [
    { label: "Pneumonia", to: "/diseases/pneumonia" },
    { label: "Asthma", to: "/diseases/asthma" },
  ];

  const galleryLinks = [
    { label: "Video Gallery", to: "/videos" },
    { label: "Photos Gallery", to: "/gallery" },
    { label: "Press Clipping Gallery", to: "/gallery/press-clipping-gallery" },
    { label: "Procurement Videos", to: "/gallery/procurement-videos" },
    { label: "Service Matter Videos", to: "/gallery/service-matter-videos" },
  ];

  const contactLinks = [
    { label: "Contact Info", to: "/contact/contact-info" },
    { label: "Ask a Question", to: "/contact/ask-a-question" },
  ];

  const districtSearchValue = districtSearch.trim().toLowerCase();

  const filteredDistricts = districts.filter((district) => {
    const label = district.label.toLowerCase();
    const slug = district.slug.toLowerCase().replaceAll("-", " ");
    return label.includes(districtSearchValue) || slug.includes(districtSearchValue);
  });

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileBranchType(null);
    setActiveMobileNestedMenu(null);
    setDistrictSearch("");
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
    setActiveMobileNestedMenu(null);
  };

  const toggleMobileBranchType = (type) => {
    setActiveMobileBranchType((prev) => (prev === type ? null : type));
  };

  const toggleMobileNestedMenu = (menuName) => {
    setActiveMobileNestedMenu((prev) => (prev === menuName ? null : menuName));
  };

  const ChevronDown = ({ light = false }) => (
    <svg
      className={`w-[10px] h-[10px] mt-[1px] ${light ? "text-white/90" : "text-gray-500"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const MobileLink = ({ to, children, extraClass = "" }) => (
    <Link
      to={to}
      onClick={closeMobileMenu}
      className={`block px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-100 hover:bg-emerald-50 hover:text-[#166d58] ${extraClass}`}
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
      <span className="text-lg text-[#166d58]">{activeMobileMenu === id ? "−" : "+"}</span>
    </button>
  );

  const MobileNestedLinks = ({ links, parentId }) => (
    <div className="bg-slate-50">
      {links.map((item) => {
        const nestedId = `${parentId}-${item.label}`;

        if (item.children?.length) {
          return (
            <div key={nestedId}>
              <button
                type="button"
                onClick={() => toggleMobileNestedMenu(nestedId)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:bg-emerald-50 hover:text-[#166d58]"
              >
                <span>{item.label}</span>
                <span className="text-[#166d58]">{activeMobileNestedMenu === nestedId ? "−" : "+"}</span>
              </button>

              {activeMobileNestedMenu === nestedId && (
                <div className="bg-white">
                  {item.children.map((child) => (
                    <MobileLink key={child.to} to={child.to} extraClass="pl-8 text-xs">
                      {child.label}
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <MobileLink key={item.to} to={item.to}>
            {item.label}
          </MobileLink>
        );
      })}
    </div>
  );

  const TopBarLink = ({ to, children }) => (
    <Link
      to={to}
      className="h-full flex items-center text-[12px] font-extrabold text-white hover:text-white/80 transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  );

  const TopBarDropdown = ({ label, links, width = "w-60" }) => (
    <div className="relative group h-full flex items-center">
      <button
        type="button"
        className="h-full flex items-center gap-[5px] text-[12px] font-extrabold text-white hover:text-white/80 transition-colors whitespace-nowrap"
      >
        {label}
        <ChevronDown light />
      </button>

      <div
        className={`absolute left-0 top-full ${width} bg-white border border-gray-100 shadow-xl rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 text-[13px] font-semibold text-gray-700 py-2 z-[99999]`}
      >
        {links.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] ${
              index !== links.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const DesktopLink = ({ to, children }) => (
    <Link
      to={to}
      className="h-[57px] flex items-center text-[12px] font-semibold text-[#111827] hover:text-[#166d58] transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  );

  const DesktopDropdown = ({ label, links, width = "w-56" }) => (
    <div className="relative group h-[57px] flex items-center">
      <button
        type="button"
        className="h-[57px] flex items-center gap-[5px] text-[12px] font-semibold text-[#111827] hover:text-[#166d58] transition-colors whitespace-nowrap"
      >
        {label}
        <ChevronDown />
      </button>

      <div
        className={`absolute left-0 top-full ${width} bg-white border border-gray-100 shadow-xl rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 text-[13px] font-semibold text-gray-700 py-2 z-[99999]`}
      >
        {links.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] ${
              index !== links.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const DesktopNestedDropdown = ({ label, links, width = "w-72" }) => (
    <div className="relative group h-[57px] flex items-center" onMouseLeave={() => setActiveDesktopNestedMenu(null)}>
      <button
        type="button"
        className="h-[57px] flex items-center gap-[5px] text-[12px] font-semibold text-[#111827] hover:text-[#166d58] transition-colors whitespace-nowrap"
      >
        {label}
        <ChevronDown />
      </button>

      <div
        className={`absolute left-0 top-full ${width} bg-white border border-gray-100 shadow-xl rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 text-[13px] font-semibold text-gray-700 py-2 z-[99999]`}
      >
        {links.map((item, index) => {
          const hasChildren = item.children?.length;

          if (hasChildren) {
            return (
              <div
                key={item.label}
                className={`relative ${index !== links.length - 1 ? "border-b border-gray-100" : ""}`}
                onMouseEnter={() => setActiveDesktopNestedMenu(item.label)}
              >
                <div className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] cursor-pointer">
                  <span>{item.label}</span>
                  <span className="text-gray-400 text-lg leading-none">›</span>
                </div>

                {activeDesktopNestedMenu === item.label && (
                  <div className="absolute left-full top-0 w-80 bg-white border border-gray-100 shadow-xl rounded-[3px] py-2 z-[99999]">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] ${
                          childIndex !== item.children.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] ${
                index !== links.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <header
      className="fixed top-0 left-0 w-full z-[9999] bg-white"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* TOP GREEN BAR */}
      <div className="hidden lg:block w-full h-[85px] bg-[#166d58] text-white">
        <div
          className="w-full h-full px-[30px] grid items-center"
          style={{ gridTemplateColumns: "485px minmax(0, 1fr) 285px" }}
        >
          <Link
            to="/"
            onClick={() => setActivePage?.("home")}
            className="h-full flex items-center min-w-0"
          >
            <img
              src={gcdaLogo}
              alt="GCDA Logo"
              className="w-[70px] h-[70px] object-contain rounded-full flex-shrink-0"
            />

            <div className="ml-[13px] leading-tight text-white min-w-0">
              <h1 className="text-[15px] font-black tracking-[0.45px] leading-[18px] uppercase whitespace-nowrap">
                GENERAL CADER DOCTORS ASSOCIATION
              </h1>
              <p className="text-[15px] font-black tracking-[0.7px] leading-[18px] uppercase mt-[4px]">
                GCDA
              </p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center justify-center gap-[18px] 2xl:gap-[26px] h-full min-w-0 overflow-hidden px-[10px]">
            <TopBarDropdown label="About Us" links={aboutLinks} width="w-64" />
            <TopBarDropdown label="Publication" links={publicationLinks} width="w-64" />
            <TopBarLink to="/pharmaceutical-updates">Pharmaceutical Updates</TopBarLink>
            <TopBarLink to="/medical-tourism">Medical Tourism</TopBarLink>
          </nav>

          <div className="flex items-center justify-end gap-[12px] min-w-0">
            <a
              href="tel:+3337074846"
              className="h-[30px] min-w-[116px] px-[11px] rounded-[7px] border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-[7px] text-white transition-colors"
            >
              <span className="text-[11px] font-extrabold whitespace-nowrap">+333-7074846</span>
              <svg className="w-[12px] h-[12px] rotate-90 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.58 10.58 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={handleMembershipOpen}
              className="h-[30px] min-w-[148px] px-[14px] rounded-[7px] bg-[#ee9a84] hover:bg-[#dc846d] flex items-center justify-center gap-[8px] text-white transition-colors"
            >
              <svg className="w-[13px] h-[13px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[11px] font-extrabold whitespace-nowrap">Online Membership</span>
            </button>
          </div>
        </div>
      </div>

      {/* WHITE NAVBAR */}
      <div className="w-full h-[57px] bg-white border-b border-gray-200 shadow-[0_2px_7px_rgba(0,0,0,0.22)]">
        <div className="w-full h-full px-[30px]">
          <div className="h-full flex items-center justify-between">
            <nav className="hidden lg:flex items-center gap-[18px] h-[57px] whitespace-nowrap">
              <DesktopLink to="/">Home</DesktopLink>

              <div
                className="relative group h-[57px] flex items-center"
                onMouseLeave={() => {
                  setActiveBranchMenu(null);
                  setDistrictSearch("");
                }}
              >
                <button
                  type="button"
                  className="h-[57px] flex items-center gap-[5px] text-[12px] font-semibold text-[#111827] hover:text-[#166d58] transition-colors whitespace-nowrap"
                >
                  Branches
                  <ChevronDown />
                </button>

                <div className="absolute left-0 top-full w-[215px] bg-white border border-gray-100 shadow-xl rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 text-[13px] font-semibold text-gray-700 py-2 z-[99999]">
                  <div className="relative border-b border-gray-100" onMouseEnter={() => setActiveBranchMenu("provincial")}>
                    <div className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] cursor-pointer">
                      <span>Provincial Body</span>
                      <span className="text-gray-400 text-lg leading-none">›</span>
                    </div>

                    {activeBranchMenu === "provincial" && (
                      <div className="absolute left-full top-0 w-[215px] bg-white border border-gray-100 shadow-xl rounded-[3px] py-2 z-[99999]">
                        {provinces.map((province, index) => (
                          <Link
                            key={province.slug}
                            to={`/branches/provincial/${province.slug}`}
                            className={`block px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] ${
                              index !== provinces.length - 1 ? "border-b border-gray-100" : ""
                            }`}
                          >
                            {province.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" onMouseEnter={() => setActiveBranchMenu("district")}>
                    <div className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50 hover:text-[#166d58] cursor-pointer">
                      <span>District Body</span>
                      <span className="text-gray-400 text-lg leading-none">›</span>
                    </div>

                    {activeBranchMenu === "district" && (
                      <div className="absolute left-full top-0 w-[300px] bg-white border border-gray-100 shadow-xl rounded-[3px] overflow-hidden z-[99999]">
                        <div className="p-[10px] border-b border-gray-100 bg-white">
                          <div className="relative">
                            <input
                              type="text"
                              value={districtSearch}
                              onChange={(event) => setDistrictSearch(event.target.value)}
                              onClick={(event) => event.stopPropagation()}
                              placeholder="Search district..."
                              autoComplete="off"
                              onFocus={() => setActiveBranchMenu("district")}
                              className="w-full h-[36px] rounded-[4px] border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-[12px] font-semibold text-gray-700 outline-none focus:border-[#166d58] focus:bg-white"
                            />
                            <svg
                              className="absolute left-3 top-[11px] h-[14px] w-[14px] text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="max-h-[285px] overflow-y-auto py-1">
                          {filteredDistricts.length > 0 ? (
                            filteredDistricts.map((district, index) => (
                              <Link
                                key={district.slug}
                                to={`/branches/district/${district.slug}`}
                                className={`block px-4 py-2.5 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#166d58] ${
                                  index !== filteredDistricts.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                              >
                                {district.label}
                              </Link>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-[12px] font-semibold text-gray-400">
                              No district found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <DesktopDropdown label="Programs" links={programLinks} width="w-60" />
              <DesktopDropdown label="Service Matter" links={serviceMatterLinks} width="w-60" />
              <DesktopDropdown label="Job Portal" links={jobPortalLinks} width="w-80" />
              <DesktopDropdown label="Registration with HCC" links={registrationHccLinks} width="w-64" />
              <DesktopNestedDropdown label="Doctors Initiatives" links={doctorsInitiativeLinks} width="w-72" />
              <DesktopDropdown label="Consultation Hub" links={consultationHubLinks} width="w-56" />
              <DesktopDropdown label="Diseases" links={diseaseLinks} width="w-44" />
              <DesktopDropdown label="Gallery" links={galleryLinks} width="w-60" />
              <DesktopDropdown label="Contact" links={contactLinks} width="w-48" />
            </nav>

            <div className="lg:hidden flex items-center justify-between w-full h-[57px]">
              <Link
                to="/"
                className="flex items-center gap-2 min-w-0"
                onClick={() => {
                  setActivePage?.("home");
                  closeMobileMenu();
                }}
              >
                <img src={gcdaLogo} alt="GCDA Logo" className="h-11 w-11 object-contain flex-shrink-0" />
                <div className="leading-tight min-w-0">
                  <p className="text-[#166d58] text-[12px] font-black leading-tight uppercase">
                    General Cader Doctors
                  </p>
                  <p className="text-slate-500 text-[9px] font-bold tracking-widest leading-tight uppercase">
                    Association GCDA
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={handleMembershipOpen}
                  className="bg-[#ee9a84] hover:bg-[#dc846d] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm transition-all duration-200"
                >
                  Membership
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-gray-700 hover:text-[#166d58] p-1.5 border border-gray-200 rounded-md bg-gray-50"
                  aria-label="Toggle mobile menu"
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

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100vh-57px)] overflow-y-auto">
            <nav className="pb-6">
              <MobileLink to="/">Home</MobileLink>

              <MobileToggle id="about" label="About Us" />
              {activeMobileMenu === "about" && <MobileNestedLinks links={aboutLinks} parentId="about" />}

              <MobileToggle id="branches" label="Branches" />
              {activeMobileMenu === "branches" && (
                <div className="bg-slate-50">
                  <button
                    type="button"
                    onClick={() => toggleMobileBranchType("provincial")}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:bg-emerald-50"
                  >
                    <span>Provincial Body</span>
                    <span className="text-[#166d58]">{activeMobileBranchType === "provincial" ? "−" : "+"}</span>
                  </button>

                  {activeMobileBranchType === "provincial" && (
                    <div className="bg-white">
                      {provinces.map((province) => (
                        <MobileLink key={province.slug} to={`/branches/provincial/${province.slug}`} extraClass="pl-8 text-xs">
                          {province.label}
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
                    <span className="text-[#166d58]">{activeMobileBranchType === "district" ? "−" : "+"}</span>
                  </button>

                  {activeMobileBranchType === "district" && (
                    <div className="bg-white">
                      <div className="p-3 border-b border-slate-100 bg-white">
                        <div className="relative">
                          <input
                            type="text"
                            value={districtSearch}
                            onChange={(event) => setDistrictSearch(event.target.value)}
                            placeholder="Search district..."
                            autoComplete="off"
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-xs font-semibold text-gray-700 outline-none focus:border-[#166d58] focus:bg-white"
                          />
                          <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>

                      <div className="max-h-72 overflow-y-auto">
                        {filteredDistricts.length > 0 ? (
                          filteredDistricts.map((district) => (
                            <MobileLink key={district.slug} to={`/branches/district/${district.slug}`} extraClass="pl-8 text-xs">
                              {district.label}
                            </MobileLink>
                          ))
                        ) : (
                          <div className="px-8 py-3 text-xs font-semibold text-gray-400 border-b border-slate-100">
                            No district found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <MobileToggle id="publication" label="Publication" />
              {activeMobileMenu === "publication" && <MobileNestedLinks links={publicationLinks} parentId="publication" />}

              <MobileToggle id="programs" label="Programs" />
              {activeMobileMenu === "programs" && <MobileNestedLinks links={programLinks} parentId="programs" />}

              <MobileToggle id="service-matter" label="Service Matter" />
              {activeMobileMenu === "service-matter" && <MobileNestedLinks links={serviceMatterLinks} parentId="service-matter" />}

              <MobileToggle id="job-portal" label="Job Portal" />
              {activeMobileMenu === "job-portal" && <MobileNestedLinks links={jobPortalLinks} parentId="job-portal" />}

              <MobileToggle id="registration-hcc" label="Registration with HCC" />
              {activeMobileMenu === "registration-hcc" && <MobileNestedLinks links={registrationHccLinks} parentId="registration-hcc" />}

              <MobileToggle id="doctors-initiatives" label="Doctors Initiatives" />
              {activeMobileMenu === "doctors-initiatives" && <MobileNestedLinks links={doctorsInitiativeLinks} parentId="doctors-initiatives" />}

              <MobileToggle id="consultation-hub" label="Consultation Hub" />
              {activeMobileMenu === "consultation-hub" && <MobileNestedLinks links={consultationHubLinks} parentId="consultation-hub" />}

              <MobileLink to="/pharmaceutical-updates">Pharmaceutical Updates</MobileLink>
              <MobileLink to="/medical-tourism">Medical Tourism</MobileLink>

              <MobileToggle id="diseases" label="Diseases" />
              {activeMobileMenu === "diseases" && <MobileNestedLinks links={diseaseLinks} parentId="diseases" />}

              <MobileToggle id="gallery" label="Gallery" />
              {activeMobileMenu === "gallery" && <MobileNestedLinks links={galleryLinks} parentId="gallery" />}

              <MobileToggle id="contact" label="Contact" />
              {activeMobileMenu === "contact" && <MobileNestedLinks links={contactLinks} parentId="contact" />}
            </nav>
          </div>
        )}
      </div>

      {isFormOpen && !onOpenMembership && <MembershipForm onClose={() => setIsFormOpen(false)} />}
    </header>
  );
}

export default Navbar;