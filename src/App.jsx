// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MembershipForm from "./components/MembershipForm";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

import CentralBody from "./pages/AboutSubMenus/CentralBody";
import MissionVision from "./pages/AboutSubMenus/MissionVision";
import History from "./pages/AboutSubMenus/History";
import HouseOfDelegates from "./pages/AboutSubMenus/HouseOfDelegates";
import ChiefPatron from "./pages/AboutSubMenus/ChiefPatron";
import Patrons from "./pages/AboutSubMenus/Patrons";
import ChiefPatronProfileDetails from "./pages/AboutSubMenus/ChiefPatronProfileDetails";
import PatronProfileDetails from "./pages/AboutSubMenus/PatronProfileDetails";
import BoardOfTrustees from "./pages/AboutSubMenus/BoardOfTrustes";
import Committees from "./pages/AboutSubMenus/Committees";

import RulesRegulation from "./pages/ServiceMatter/RulesRegulation";
import Policies from "./pages/ServiceMatter/Policies";
import ServiceMatters from "./pages/ServiceMatter/ServiceMatters";
import ServiceCaseLaws from "./pages/ServiceMatter/ServiceCaseLaws";
import TaxationMatters from "./pages/ServiceMatter/TaxationMatters";

import GalleryHome from "./pages/Gallary/GalleryHome";
import AlbumDetails from "./pages/Gallary/AlbumDetails";

import VideoGalleryHome from "./pages/Gallary/VideoGalleryHome";
import VideoAlbumDetails from "./pages/Gallary/VideoAlbumDetails";

import UpcomingEvents from "./pages/UpcomingEvents";
import EventDetails from "./pages/EventDetails";

import PunjabProvincialBody from "./pages/PunjabProvincialBody";
import PunjabProfileDetails from "./pages/PunjabProfileDetails";
import SindhProfileDetails from "./pages/SindhProfileDetails";
import SindhProvincialBody from "./pages/SindhProvincialBody";
import BalochistanProvincialBody from "./pages/BalochistanProvincialBody";
import BalochistanProfileDetails from "./pages/BalochistanProfileDetails";
import KpkProvincialBody from "./pages/KpkProvincialBody";
import KpkProfileDetails from "./pages/KpkProfileDetails";
import GilgitBaltistanProvincialBody from "./pages/GilgitBaltistanProvincialBody";
import GilgitBaltistanProfileDetails from "./pages/GilgitBaltistanProfileDetails";
import AzadJammuKashmirProvincialBody from "./pages/AzadJammuKashmirProvincialBody";
import AzadJammuKashmirProfileDetails from "./pages/AzadJammuKashmirProfileDetails";
// dIStRIKS
import AttockDistrictBody from "./pages/districts/AttockDistrictBody";
import AttockProfileDetails from "./pages/districts/AttockProfileDetails";
import BahawalnagarDistrictBody from "./pages/districts/BahawalnagarDistrictBody";
import BahawalnagarProfileDetails from "./pages/districts/BahawalnagarProfileDetails";
import BahawalpurDistrictBody from "./pages/districts/BahawalpurDistrictBody";
import BahawalpurProfileDetails from "./pages/districts/BahawalpurProfileDetails";
import BhakkarDistrictBody from "./pages/districts/BhakkarDistrictBody";
import BhakkarProfileDetails from "./pages/districts/BhakkarProfileDetails";
import ChiniotDistrictBody from "./pages/districts/ChiniotDistrictBody";
import ChiniotProfileDetails from "./pages/districts/ChiniotProfileDetails";
import ChakwalDistrictBody from "./pages/districts/ChakwalDistrictBody";
import ChakwalProfileDetails from "./pages/districts/ChakwalProfileDetails";
import DGKhanDistrictBody from "./pages/districts/DGKhanDistrictBody";
import DGKhanProfileDetails from "./pages/districts/DGKhanProfileDetails";
import FaisalabadDistrictBody from "./pages/districts/FaisalabadDistrictBody";
import FaisalabadProfileDetails from "./pages/districts/FaisalabadProfileDetails";


import ContactInfo from "./pages/Contact/ContactInfo";


function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 w-full overflow-x-hidden selection:bg-[#1A7963] selection:text-white relative">
        <Navbar onOpenMembership={() => setIsFormOpen(true)} />

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Photo Gallery Routes */}
            <Route
              path="/gallery"
              element={
                <div className="w-full animate-fade-in">
                  <GalleryHome />
                </div>
              }
            />

            <Route
              path="/gallery/:albumId"
              element={
                <div className="w-full animate-fade-in">
                  <AlbumDetails />
                </div>
              }
            />

            {/* Video Gallery Routes */}
            <Route
              path="/videos"
              element={
                <div className="w-full animate-fade-in">
                  <VideoGalleryHome />
                </div>
              }
            />

            <Route
              path="/videos/:eventId"
              element={
                <div className="w-full animate-fade-in">
                  <VideoAlbumDetails />
                </div>
              }
            />

            {/* About Routes */}
            <Route
              path="/about/central-body"
              element={
                <div className="w-full animate-fade-in">
                  <CentralBody />
                </div>
              }
            />

            <Route
              path="/about/introduction"
              element={
                <div className="w-full animate-fade-in">
                  <Introduction />
                </div>
              }
            />

            <Route
              path="/about/mission-vision"
              element={
                <div className="w-full animate-fade-in">
                  <MissionVision />
                </div>
              }
            />

            <Route
              path="/about/history"
              element={
                <div className="w-full animate-fade-in">
                  <History />
                </div>
              }
            />

            <Route
              path="/about/house-delegates"
              element={
                <div className="w-full animate-fade-in">
                  <HouseOfDelegates />
                </div>
              }
            />

            <Route
  path="/about/chief-patron"
  element={
    <div className="w-full animate-fade-in">
      <ChiefPatron />
    </div>
  }
/>

<Route
  path="/about/chief-patron/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <ChiefPatronProfileDetails />
    </div>
  }
/>

<Route
  path="/about/patrons"
  element={
    <div className="w-full animate-fade-in">
      <Patrons />
    </div>
  }
/>

<Route
  path="/about/patrons/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <PatronProfileDetails />
    </div>
  }
/>

            <Route
              path="/about/board-trustees"
              element={
                <div className="w-full animate-fade-in">
                  <BoardOfTrustees />
                </div>
              }
            />

            <Route
              path="/about/committees"
              element={
                <div className="w-full animate-fade-in">
                  <Committees />
                </div>
              }
            />


            <Route
  path="/service-matter/rules-regulation"
  element={
    <div className="w-full animate-fade-in">
      <RulesRegulation />
    </div>
  }
/>

<Route
  path="/service-matter/policies"
  element={
    <div className="w-full animate-fade-in">
      <Policies />
    </div>
  }
/>

<Route
  path="/service-matter/service-matters"
  element={
    <div className="w-full animate-fade-in">
      <ServiceMatters />
    </div>
  }
/>

<Route
  path="/service-matter/service-case-laws"
  element={
    <div className="w-full animate-fade-in">
      <ServiceCaseLaws />
    </div>
  }
/>


<Route
  path="/service-matter/taxation-matters"
  element={
    <div className="w-full animate-fade-in">
      <TaxationMatters />
    </div>
  }
/>

            <Route
              path="/branches/provincial/punjab"
              element={<PunjabProvincialBody />}
            />

            <Route
  path="/branches/provincial/punjab/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <PunjabProfileDetails />
    </div>
  }
/>

            <Route
              path="/branches/provincial/sindh"
              element={<SindhProvincialBody />}
            />


            <Route
  path="/branches/provincial/sindh/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <SindhProfileDetails />
    </div>
  }
/>

            <Route
              path="/branches/provincial/balochistan"
              element={<BalochistanProvincialBody />}
            />
<Route
  path="/branches/provincial/balochistan/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <BalochistanProfileDetails />
    </div>
  }
/>
            <Route
              path="/branches/provincial/Kpk"
              element={<KpkProvincialBody />}
            />
<Route
  path="/branches/provincial/kpk/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <KpkProfileDetails />
    </div>
  }
/>

            <Route
              path="/branches/provincial/gilgit-baltistan"
              element={<GilgitBaltistanProvincialBody />}
            />
<Route
  path="/branches/provincial/gilgit-baltistan/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <GilgitBaltistanProfileDetails />
    </div>
  }
/>
            <Route
              path="/branches/provincial/azad-jammu-kashmir"
              element={<AzadJammuKashmirProvincialBody />}
            />
<Route
  path="/branches/provincial/azad-jammu-kashmir/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <AzadJammuKashmirProfileDetails />
    </div>
  }
/>
            {/* dISTRIKS */}
           <Route
  path="/branches/district/attock-district"
  element={
    <div className="w-full animate-fade-in">
      <AttockDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/attock-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <AttockProfileDetails />
    </div>
  }
/>
<Route
  path="/branches/district/bahawalnagar-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <BahawalnagarProfileDetails />
    </div>
  }
/>

            <Route
              path="/branches/district/bahawalnagar-district"
              element={<BahawalnagarDistrictBody />}
            />

            <Route
  path="/branches/district/bahawalpur-district"
  element={
    <div className="w-full animate-fade-in">
      <BahawalpurDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/bahawalpur-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <BahawalpurProfileDetails />
    </div>
  }
/>


<Route
  path="/branches/district/bhakkar-district"
  element={
    <div className="w-full animate-fade-in">
      <BhakkarDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/bhakkar-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <BhakkarProfileDetails />
    </div>
  }
/>

<Route
  path="/branches/district/chiniot-district"
  element={
    <div className="w-full animate-fade-in">
      <ChiniotDistrictBody />
    </div>
  }
/>


<Route
  path="/branches/district/chiniot-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <ChiniotProfileDetails />
    </div>
  }
/>


<Route
  path="/branches/district/chakwal-district"
  element={
    <div className="w-full animate-fade-in">
      <ChakwalDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/chakwal-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <ChakwalProfileDetails />
    </div>
  }
/>

<Route
  path="/branches/district/dg-khan-district"
  element={
    <div className="w-full animate-fade-in">
      <DGKhanDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/dg-khan-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <DGKhanProfileDetails />
    </div>
  }
/>

<Route
  path="/branches/district/faisalabad-district"
  element={
    <div className="w-full animate-fade-in">
      <FaisalabadDistrictBody />
    </div>
  }
/>

<Route
  path="/branches/district/faisalabad-district/profile/:profileId"
  element={
    <div className="w-full animate-fade-in">
      <FaisalabadProfileDetails />
    </div>
  }
/>

<Route
  path="/contact/contact-info"
  element={
    <div className="w-full animate-fade-in">
      <ContactInfo />
    </div>
  }
/>
            {/* Events */}
            <Route
              path="/programs/upcoming"
              element={
                <div className="w-full animate-fade-in">
                  <UpcomingEvents />
                </div>
              }
            />

            <Route
              path="/event/:id"
              element={
                <div className="w-full animate-fade-in">
                  <EventDetails onOpenMembership={() => setIsFormOpen(true)} />
                </div>
              }
            />

            {/* Press Gallery */}
            <Route
              path="/press-gallery"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Press Clipping Gallery Component Coming Soon!
                </div>
              }
            />

            {/* Placeholder Routes */}
            <Route
              path="/about/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  About Section Component Coming Soon!
                </div>
              }
            />

            <Route
              path="/publications/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Publications Component Coming Soon!
                </div>
              }
            />

            <Route
              path="/membership/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Membership Component Coming Soon!
                </div>
              }
            />

            <Route
              path="/programs/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Programs Component Coming Soon!
                </div>
              }
            />

            <Route
              path="/diseases/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Diseases Information Component Coming Soon!
                </div>
              }
            />

            <Route
              path="/contact/:section"
              element={
                <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
                  Contact Component Coming Soon!
                </div>
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 font-bold text-gray-400 bg-white min-h-[60vh] flex items-center justify-center">
                  404 - Page Not Found!
                </div>
              }
            />
          </Routes>
        </main>

        {isFormOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[99999] p-4 overflow-y-auto">
            <div className="w-full max-w-5xl my-auto">
              <MembershipForm onClose={() => setIsFormOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;