// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MembershipForm from "./MembershipForm";
import gcdaLogo from "../assets/images/gcda-logo.png.jpeg";

function Navbar({ onOpenMembership, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [activeBranchMenu, setActiveBranchMenu] = useState(null);
  const [isDesktopBranchesOpen, setIsDesktopBranchesOpen] = useState(false);
  const [activeDesktopNestedMenu, setActiveDesktopNestedMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileBranchType, setActiveMobileBranchType] = useState(null);
  const [activeMobileNestedMenu, setActiveMobileNestedMenu] = useState(null);

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
  { label: "Mianwali", slug: "mianwali-district" },
  { label: "Multan", slug: "multan-district" },
  { label: "Muzaffar Gargh", slug: "muzaffar-gargh" },
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
    {
      label: "Jobs in Primary & Secondary Health Care Dept",
      to: "/job-portal/primary-secondary-health-care-dept",
    },
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
    {
      label: "Children Scholarships",
      to: "/doctors-initiatives/children-scholarships",
    },
    {
      label: "Educational Gold Medals",
      to: "/doctors-initiatives/educational-gold-medals",
    },
    {
      label: "International Trainings",
      to: "/doctors-initiatives/international-trainings",
    },
    { label: "Housing Projects", to: "/doctors-initiatives/housing-projects" },
    {
      label: "Adopt a Doctor Scheme",
      to: "/doctors-initiatives/adopt-a-doctor-scheme",
    },
    {
      label: "Lab Test Subsidised",
      to: "/doctors-initiatives/lab-test-subsidised",
    },
    {
      label: "Subsidised Hospital Care",
      to: "/doctors-initiatives/subsidised-hospital-care",
    },
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
  {
    label: "Contact Info",
    to: "/contact/contact-info",
  },
  {
    label: "Ask a Question",
    to: "/contact/ask-a-question",
  },
];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileBranchType(null);
    setActiveMobileNestedMenu(null);
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
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:bg-emerald-50 hover:text-[#1A7963]"
              >
                <span>{item.label}</span>
                <span className="text-[#1A7963]">
                  {activeMobileNestedMenu === nestedId ? "−" : "+"}
                </span>
              </button>

              {activeMobileNestedMenu === nestedId && (
                <div className="bg-white">
                  {item.children.map((child) => (
                    <MobileLink
                      key={child.to}
                      to={child.to}
                      extraClass="pl-8 text-xs"
                    >
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

  const DesktopLink = ({ to, children }) => (
    <Link
      to={to}
      className="py-3 hover:text-[#1A7963] transition-colors cursor-pointer whitespace-nowrap"
    >
      {children}
    </Link>
  );

  const DesktopDropdown = ({ label, links, width = "w-56" }) => (
    <div className="relative group py-3">
      <button
        type="button"
        className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
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
            className={`block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] ${index !== links.length - 1 ? "border-b border-gray-100" : ""
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const DesktopNestedDropdown = ({ label, links, width = "w-72" }) => (
    <div
      className="relative group py-3"
      onMouseLeave={() => setActiveDesktopNestedMenu(null)}
    >
      <button
        type="button"
        className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
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
        {links.map((item, index) => {
          const hasChildren = item.children?.length;

          if (hasChildren) {
            return (
              <div
                key={item.label}
                className={`relative ${index !== links.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                onMouseEnter={() => setActiveDesktopNestedMenu(item.label)}
              >
                <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
                  <span>{item.label}</span>
                  <span className="text-gray-400">›</span>
                </div>

                {activeDesktopNestedMenu === item.label && (
                  <div className="absolute left-full top-0 w-72 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] ${childIndex !== item.children.length - 1
                          ? "border-b border-gray-100"
                          : ""
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
              className={`block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] ${index !== links.length - 1 ? "border-b border-gray-100" : ""
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );


  const DesktopBranchesDropdown = () => (
    <div
      className="relative py-3"
      onMouseEnter={() => setIsDesktopBranchesOpen(true)}
      onMouseLeave={() => {
        setIsDesktopBranchesOpen(false);
        setActiveBranchMenu(null);
      }}
    >
      <button
        type="button"
        className="hover:text-[#1A7963] flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
        onMouseEnter={() => setIsDesktopBranchesOpen(true)}
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

      {/* Hover bridge: cursor dropdown تک جاتے ہوئے menu close نہیں ہوگا */}
      {isDesktopBranchesOpen && (
        <div className="absolute left-0 top-full h-3 w-56 z-50" />
      )}

      <div
        className={`absolute left-0 top-full w-56 bg-white border border-gray-100 shadow-xl rounded-md transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-50 ${
          isDesktopBranchesOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          className="relative border-b border-gray-100"
          onMouseEnter={() => setActiveBranchMenu("desktop-provincial")}
          onMouseMove={() => setActiveBranchMenu("desktop-provincial")}
        >
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
            <span>Provincial Body</span>
            <span className="text-gray-400">›</span>
          </div>

          {activeBranchMenu === "desktop-provincial" && (
            <div
              className="absolute left-[calc(100%-1px)] top-0 w-52 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-[70]"
              onMouseEnter={() => setActiveBranchMenu("desktop-provincial")}
            >
              {provinces.map((province) => (
                <Link
                  key={province.slug}
                  to={`/branches/provincial/${province.slug}`}
                  onClick={() => {
                    setIsDesktopBranchesOpen(false);
                    setActiveBranchMenu(null);
                  }}
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-50 last:border-none"
                >
                  {province.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveBranchMenu("desktop-district")}
          onMouseMove={() => setActiveBranchMenu("desktop-district")}
        >
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
            <span>District Body</span>
            <span className="text-gray-400">›</span>
          </div>

          {activeBranchMenu === "desktop-district" && (
            <div
              className="absolute left-[calc(100%-1px)] top-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 max-h-72 overflow-y-auto z-[70]"
              onMouseEnter={() => setActiveBranchMenu("desktop-district")}
            >
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  to={`/branches/district/${district.slug}`}
                  onClick={() => {
                    setIsDesktopBranchesOpen(false);
                    setActiveBranchMenu(null);
                  }}
                  className="block px-4 py-1.5 hover:bg-gray-50 hover:text-[#1A7963] text-xs border-b border-gray-50 last:border-none"
                >
                  {district.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const TopBarDropdown = ({ label, links, width = "w-56" }) => (
    <div className="relative group h-full flex items-center">
      <button
        type="button"
        className="flex items-center gap-1 rounded-md px-2 xl:px-2.5 py-2 text-[11px] xl:text-xs 2xl:text-[13px] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
      >
        {label}
        <svg
          className="w-3 h-3 text-white/80 mt-0.5"
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
        className={`absolute left-0 top-full mt-1 ${width} bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-[60]`}
      >
        {links.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] ${index !== links.length - 1 ? "border-b border-gray-100" : ""
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const TopBarBranchesDropdown = () => (
    <div
      className="relative group h-full flex items-center"
      onMouseLeave={() => setActiveBranchMenu(null)}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-md px-2 xl:px-2.5 py-2 text-[11px] xl:text-xs 2xl:text-[13px] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
      >
        Branches
        <svg
          className="w-3 h-3 text-white/80 mt-0.5"
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

      <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm font-normal text-gray-700 py-2 z-[60]">
        <div
          className="relative border-b border-gray-100"
          onMouseEnter={() => setActiveBranchMenu("top-provincial")}
        >
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
            <span>Provincial Body</span>
            <span className="text-gray-400">›</span>
          </div>

          {activeBranchMenu === "top-provincial" && (
            <div className="absolute left-full top-0 w-52 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-[70]">
              {provinces.map((province) => (
                <Link
                  key={province.slug}
                  to={`/branches/provincial/${province.slug}`}
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] border-b border-gray-50 last:border-none"
                >
                  {province.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveBranchMenu("top-district")}
        >
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#1A7963] cursor-pointer">
            <span>District Body</span>
            <span className="text-gray-400">›</span>
          </div>

          {activeBranchMenu === "top-district" && (
            <div className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 max-h-72 overflow-y-auto z-[70]">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  to={`/branches/district/${district.slug}`}
                  className="block px-4 py-1.5 hover:bg-gray-50 hover:text-[#1A7963] text-xs border-b border-gray-50 last:border-none"
                >
                  {district.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* TOP GREEN BAR */}
      <div className="w-full bg-[#1A7963] text-white text-sm hidden md:block">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 xl:gap-4 h-[90px] overflow-visible">
          {/* لوگو سیکشن */}
          <div
            className="flex items-center cursor-pointer group flex-shrink-0 min-w-0 lg:w-[420px] xl:w-[455px] 2xl:w-[500px]"
            onClick={() => setActivePage?.("home")}
          >
            <div className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img
                src={gcdaLogo}
                alt="GCDA Logo"
                className="h-[70px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <div className="ml-4 leading-tight min-w-0 lg:w-[335px] xl:w-[370px] 2xl:w-[415px]">
              <h1 className="text-white text-[13px] xl:text-[15px] 2xl:text-base font-black tracking-wide leading-snug whitespace-nowrap">
                GENERAL CADER DOCOTORS ASSOCIATION
              </h1>
              <p className="text-center text-base 2xl:text-lg font-black">GCDA</p>
            </div>
          </div>

          {/* Top bar menu: logo text کے بعد اور phone number سے پہلے */}
          <nav className="hidden lg:flex items-center justify-center gap-1 2xl:gap-2 flex-1 min-w-0">
            <TopBarDropdown label="About Us" links={aboutLinks} width="w-64" />
            <TopBarDropdown label="Publication" links={publicationLinks} width="w-64" />
            <Link
              to="/pharmaceutical-updates"
              className="rounded-md px-2 xl:px-2.5 py-2 text-[11px] xl:text-xs 2xl:text-[13px] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Pharmaceutical Updates
            </Link>
            <Link
              to="/medical-tourism"
              className="rounded-md px-2 xl:px-2.5 py-2 text-[11px] xl:text-xs 2xl:text-[13px] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Medical Tourism
            </Link>
          </nav>

          {/* بٹن اور فون نمبر سیکشن */}
          <div className="flex items-center justify-end gap-2 xl:gap-3 flex-shrink-0 ml-auto">
            {/* فون نمبر */}
            <div className="flex items-center gap-2 border border-white/20 rounded-lg px-2.5 xl:px-3 py-1.5 flex-shrink-0 bg-white/5">
              <a
                href="tel:+3337074846"
                className="cursor-pointer text-[11px] xl:text-xs font-medium whitespace-nowrap"
              >
                +333-7074846
              </a>
              <div className="text-white">
                <svg className="w-3.5 h-3.5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>

            {/* ممبرشپ بٹن */}
            <button
              type="button"
              onClick={handleMembershipOpen}
              className="bg-[#E9967A] hover:bg-[#d68569] text-white text-[11px] xl:text-xs font-bold px-3 xl:px-4 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="whitespace-nowrap">Online Membership</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between min-h-[62px] py-1.5 items-center gap-6">
            <div className="hidden lg:flex flex-nowrap items-center gap-x-3 xl:gap-x-4 gap-y-0 font-semibold text-gray-800 text-[13px] xl:text-sm 2xl:text-[15px] leading-none flex-1 min-w-0">
              <DesktopLink to="/">Home</DesktopLink>
              <DesktopBranchesDropdown />

              <DesktopDropdown label="Programs" links={programLinks} width="w-60" />
              <DesktopDropdown
                label="Service Matter"
                links={serviceMatterLinks}
                width="w-60"
              />
              <DesktopDropdown
                label="Job Portal"
                links={jobPortalLinks}
                width="w-80"
              />
              <DesktopDropdown
                label="Registration with HCC"
                links={registrationHccLinks}
                width="w-64"
              />
              <DesktopNestedDropdown
                label="Doctors Initiatives"
                links={doctorsInitiativeLinks}
                width="w-72"
              />
              <DesktopDropdown
                label="Consultation Hub"
                links={consultationHubLinks}
                width="w-56"
              />
              <DesktopDropdown label="Diseases" links={diseaseLinks} width="w-44" />
              <DesktopDropdown label="Gallery" links={galleryLinks} width="w-60" />
              <DesktopDropdown label="Contact" links={contactLinks} width="w-48" />
            </div>

            {/* Desktop Search */}
            <div className="hidden 2xl:flex items-center space-x-4 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-50 border border-gray-200 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[#1A7963] w-44"
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
              {activeMobileMenu === "about" && (
                <MobileNestedLinks links={aboutLinks} parentId="about" />
              )}

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
                          key={province.slug}
                          to={`/branches/provincial/${province.slug}`}
                          extraClass="pl-8 text-xs"
                        >
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
                    <span className="text-[#1A7963]">
                      {activeMobileBranchType === "district" ? "−" : "+"}
                    </span>
                  </button>

                  {activeMobileBranchType === "district" && (
                    <div className="bg-white max-h-72 overflow-y-auto">
                     {districts.map((district) => (
  <MobileLink
    key={district.slug}
    to={`/branches/district/${district.slug}`}
    extraClass="pl-8 text-xs"
  >
    {district.label}
  </MobileLink>
))}
                    </div>
                  )}
                </div>
              )}

              <MobileToggle id="publication" label="Publication" />
              {activeMobileMenu === "publication" && (
                <MobileNestedLinks
                  links={publicationLinks}
                  parentId="publication"
                />
              )}

              <MobileToggle id="programs" label="Programs" />
              {activeMobileMenu === "programs" && (
                <MobileNestedLinks links={programLinks} parentId="programs" />
              )}

              <MobileToggle id="service-matter" label="Service Matter" />
              {activeMobileMenu === "service-matter" && (
                <MobileNestedLinks
                  links={serviceMatterLinks}
                  parentId="service-matter"
                />
              )}

              <MobileToggle id="job-portal" label="Job Portal" />
              {activeMobileMenu === "job-portal" && (
                <MobileNestedLinks links={jobPortalLinks} parentId="job-portal" />
              )}

              <MobileToggle id="registration-hcc" label="Registration with HCC" />
              {activeMobileMenu === "registration-hcc" && (
                <MobileNestedLinks
                  links={registrationHccLinks}
                  parentId="registration-hcc"
                />
              )}

              <MobileToggle id="doctors-initiatives" label="Doctors Initiatives" />
              {activeMobileMenu === "doctors-initiatives" && (
                <MobileNestedLinks
                  links={doctorsInitiativeLinks}
                  parentId="doctors-initiatives"
                />
              )}

              <MobileToggle id="consultation-hub" label="Consultation Hub" />
              {activeMobileMenu === "consultation-hub" && (
                <MobileNestedLinks
                  links={consultationHubLinks}
                  parentId="consultation-hub"
                />
              )}

              <MobileLink to="/pharmaceutical-updates">
                Pharmaceutical Updates
              </MobileLink>
              <MobileLink to="/medical-tourism">Medical Tourism</MobileLink>

              <MobileToggle id="diseases" label="Diseases" />
              {activeMobileMenu === "diseases" && (
                <MobileNestedLinks links={diseaseLinks} parentId="diseases" />
              )}

              <MobileToggle id="gallery" label="Gallery" />
              {activeMobileMenu === "gallery" && (
                <MobileNestedLinks links={galleryLinks} parentId="gallery" />
              )}

              <MobileToggle id="contact" label="Contact" />
              {activeMobileMenu === "contact" && (
                <MobileNestedLinks links={contactLinks} parentId="contact" />
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
