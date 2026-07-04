// src/App.jsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import MembershipForm from "./components/MembershipForm";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

import CentralBody from "./pages/AboutSubMenus/CentralBody";
import CentralBodyProfileDetails from "./pages/AboutSubMenus/CentralBodyProfileDetails";
import MissionVision from "./pages/AboutSubMenus/MissionVision";
import History from "./pages/AboutSubMenus/History";
import HouseOfDelegates from "./pages/AboutSubMenus/HouseOfDelegates";
import HouseOfDelegatesProfileDetails from "./pages/AboutSubMenus/HouseOfDelegatesProfileDetails";
import ChiefPatron from "./pages/AboutSubMenus/ChiefPatron";
import Patrons from "./pages/AboutSubMenus/Patrons";
import ChiefPatronProfileDetails from "./pages/AboutSubMenus/ChiefPatronProfileDetails";
import PatronProfileDetails from "./pages/AboutSubMenus/PatronProfileDetails";
import BoardOfTrustees from "./pages/AboutSubMenus/BoardOfTrustes";
import BoardOfTrusteesProfileDetails from "./pages/AboutSubMenus/BoardOfTrusteesProfileDetails";
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
import SindhProvincialBody from "./pages/SindhProvincialBody";
import SindhProfileDetails from "./pages/SindhProfileDetails";
import BalochistanProvincialBody from "./pages/BalochistanProvincialBody";
import BalochistanProfileDetails from "./pages/BalochistanProfileDetails";
import KpkProvincialBody from "./pages/KpkProvincialBody";
import KpkProfileDetails from "./pages/KpkProfileDetails";
import GilgitBaltistanProvincialBody from "./pages/GilgitBaltistanProvincialBody";
import GilgitBaltistanProfileDetails from "./pages/GilgitBaltistanProfileDetails";
import AzadJammuKashmirProvincialBody from "./pages/AzadJammuKashmirProvincialBody";
import AzadJammuKashmirProfileDetails from "./pages/AzadJammuKashmirProfileDetails";

// Districts
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
import GujranwalaDistrictBody from "./pages/districts/GujranwalaDistrictBody";
import GujranwalaProfileDetails from "./pages/districts/GujranwalaProfileDetails";
import GujratDistrictBody from "./pages/districts/GujratDistrictBody";
import GujratProfileDetails from "./pages/districts/GujratProfileDetails";
import HafizabadDistrictBody from "./pages/districts/HafizabadDistrictBody";
import HafizabadProfileDetails from "./pages/districts/HafizabadProfileDetails";
import JhelumDistrictBody from "./pages/districts/JhelumDistrictBody";
import JhelumProfileDetails from "./pages/districts/JhelumProfileDetails";
import KasurDistrictBody from "./pages/districts/KasurDistrictBody";
import KasurProfileDetails from "./pages/districts/KasurProfileDetails";
import KhanewalDistrictBody from "./pages/districts/KhanewalDistrictBody";
import KhanewalProfileDetails from "./pages/districts/KhanewalProfileDetails";
import KhushabDistrictBody from "./pages/districts/KhushabDistrictBody";
import KhushabProfileDetails from "./pages/districts/KhushabProfileDetails";
import LahoreDistrictBody from "./pages/districts/LahoreDistrictBody";
import LahoreProfileDetails from "./pages/districts/LahoreProfileDetails";
import LayyahDistrictBody from "./pages/districts/LayyahDistrictBody";
import LayyahProfileDetails from "./pages/districts/LayyahProfileDetails";
import LodharanDistrictBody from "./pages/districts/LodharanDistrictBody";
import LodharanProfileDetails from "./pages/districts/LodharanProfileDetails";
import MandiBahauddinDistrictBody from "./pages/districts/MandiBahauddinDistrictBody";
import MandiBahauddinProfileDetails from "./pages/districts/MandiBahauddinProfileDetails";
import MianwaliDistrictBody from "./pages/districts/MianwaliDistrictBody";
import MianwaliProfileDetails from "./pages/districts/MianwaliProfileDetails";
import MultanDistrictBody from "./pages/districts/MultanDistrictBody";
import MultanProfileDetails from "./pages/districts/MultanProfileDetails";
import ProcurementVideoGalleryHome from "./pages/Gallary/ProcurementVideoGalleryHome";
import ProcurementVideoAlbum from "./pages/Gallary/ProcurementVideoAlbum";
import ServiceMatterVideoGalleryHome from "./pages/Gallary/ServiceMatterVideoGalleryHome";
import ServiceMatterVideoAlbum from "./pages/Gallary/ServiceMatterVideoAlbum";
import PressClippingGalleryHome from "./pages/Gallary/PressClippingGalleryHome";
import PressClippingAlbumDetails from "./pages/Gallary/PressClippingAlbumDetails";
import ScrollToTop from "./components/ScrollToTop";
import ContactInfo from "./pages/Contact/ContactInfo";

function Page({ children }) {
  return <div className="w-full animate-fade-in">{children}</div>;
}

function Placeholder({ text }) {
  return (
    <div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">
      {text}
    </div>
  );
}

function AppContent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();

  const hideNavbarOnProfileDetails = /\/profile\/[^/]+\/?$/.test(
    location.pathname
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 w-full overflow-x-hidden selection:bg-[#1A7963] selection:text-white relative">
      <ScrollToTop />
  {!hideNavbarOnProfileDetails && (
    <Navbar onOpenMembership={() => setIsFormOpen(true)} />
  )}

      <main
        className={`w-full ${
          hideNavbarOnProfileDetails ? "pt-0" : "pt-[142px]"
        }`}
      >
        <Routes>
           
          <Route path="/" element={<Home />} />

          {/* Photo Gallery Routes */}
          <Route
            path="/gallery"
            element={
              <Page>
                <GalleryHome />
              </Page>
            }
          />

          <Route
            path="/gallery/:albumId"
            element={
              <Page>
                <AlbumDetails />
              </Page>
            }
          />

          {/* Video Gallery Routes */}
          <Route
            path="/videos"
            element={
              <Page>
                <VideoGalleryHome />
              </Page>
            }
          />

          <Route
            path="/videos/:eventId"
            element={
              <Page>
                <VideoAlbumDetails />
              </Page>
            }
          />

          <Route
  path="/gallery/procurement-videos"
  element={<ProcurementVideoGalleryHome />}
/>

<Route
  path="/gallery/procurement-videos/:eventId"
  element={<ProcurementVideoAlbum />}
/>

<Route
  path="/gallery/service-matter-videos"
  element={<ServiceMatterVideoGalleryHome />}
/>

<Route
  path="/gallery/service-matter-videos/:eventId"
  element={<ServiceMatterVideoAlbum />}
/>


<Route
  path="/gallery/press-clipping-gallery"
  element={<PressClippingGalleryHome />}
/>

<Route
  path="/gallery/press-clipping-gallery/:albumId"
  element={<PressClippingAlbumDetails />}
/>
          {/* About Routes */}
          <Route
            path="/about/central-body"
            element={
              <Page>
                <CentralBody />
              </Page>
            }
          />

          <Route
            path="/about/introduction"
            element={
              <Page>
                <Introduction />
              </Page>
            }
          />

          <Route
            path="/about/mission-vision"
            element={
              <Page>
                <MissionVision />
              </Page>
            }
          />

          <Route
            path="/about/history"
            element={
              <Page>
                <History />
              </Page>
            }
          />

          <Route
            path="/about/house-delegates"
            element={
              <Page>
                <HouseOfDelegates />
              </Page>
            }
          />

          <Route
            path="/about/chief-patron"
            element={
              <Page>
                <ChiefPatron />
              </Page>
            }
          />

          <Route
            path="/about/chief-patron/profile/:profileId"
            element={
              <Page>
                <ChiefPatronProfileDetails />
              </Page>
            }
          />

          <Route
            path="/about/patrons"
            element={
              <Page>
                <Patrons />
              </Page>
            }
          />

          <Route
            path="/about/patrons/profile/:profileId"
            element={
              <Page>
                <PatronProfileDetails />
              </Page>
            }
          />

          <Route
            path="/about/board-trustees"
            element={
              <Page>
                <BoardOfTrustees />
              </Page>
            }
          />

          <Route
            path="/about/committees"
            element={
              <Page>
                <Committees />
              </Page>
            }
          />

          {/* Service Matter Routes */}
          <Route
            path="/service-matter/rules-regulation"
            element={
              <Page>
                <RulesRegulation />
              </Page>
            }
          />

          <Route
            path="/service-matter/policies"
            element={
              <Page>
                <Policies />
              </Page>
            }
          />

          <Route
            path="/service-matter/service-matters"
            element={
              <Page>
                <ServiceMatters />
              </Page>
            }
          />

          <Route
            path="/service-matter/service-case-laws"
            element={
              <Page>
                <ServiceCaseLaws />
              </Page>
            }
          />

          <Route
            path="/service-matter/taxation-matters"
            element={
              <Page>
                <TaxationMatters />
              </Page>
            }
          />

          {/* Provincial Routes */}
          <Route
            path="/branches/provincial/punjab"
            element={
              <Page>
                <PunjabProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/punjab/profile/:profileId"
            element={
              <Page>
                <PunjabProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/sindh"
            element={
              <Page>
                <SindhProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/sindh/profile/:profileId"
            element={
              <Page>
                <SindhProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/balochistan"
            element={
              <Page>
                <BalochistanProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/balochistan/profile/:profileId"
            element={
              <Page>
                <BalochistanProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/Kpk"
            element={
              <Page>
                <KpkProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/kpk"
            element={
              <Page>
                <KpkProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/kpk/profile/:profileId"
            element={
              <Page>
                <KpkProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/gilgit-baltistan"
            element={
              <Page>
                <GilgitBaltistanProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/gilgit-baltistan/profile/:profileId"
            element={
              <Page>
                <GilgitBaltistanProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/azad-jammu-kashmir"
            element={
              <Page>
                <AzadJammuKashmirProvincialBody />
              </Page>
            }
          />

          <Route
            path="/branches/provincial/azad-jammu-kashmir/profile/:profileId"
            element={
              <Page>
                <AzadJammuKashmirProfileDetails />
              </Page>
            }
          />

          {/* District Routes */}
          <Route
            path="/branches/district/attock-district"
            element={
              <Page>
                <AttockDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/attock-district/profile/:profileId"
            element={
              <Page>
                <AttockProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/bahawalnagar-district"
            element={
              <Page>
                <BahawalnagarDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/bahawalnagar-district/profile/:profileId"
            element={
              <Page>
                <BahawalnagarProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/bahawalpur-district"
            element={
              <Page>
                <BahawalpurDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/bahawalpur-district/profile/:profileId"
            element={
              <Page>
                <BahawalpurProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/bhakkar-district"
            element={
              <Page>
                <BhakkarDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/bhakkar-district/profile/:profileId"
            element={
              <Page>
                <BhakkarProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/chiniot-district"
            element={
              <Page>
                <ChiniotDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/chiniot-district/profile/:profileId"
            element={
              <Page>
                <ChiniotProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/chakwal-district"
            element={
              <Page>
                <ChakwalDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/chakwal-district/profile/:profileId"
            element={
              <Page>
                <ChakwalProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/dg-khan-district"
            element={
              <Page>
                <DGKhanDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/dg-khan-district/profile/:profileId"
            element={
              <Page>
                <DGKhanProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/faisalabad-district"
            element={
              <Page>
                <FaisalabadDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/faisalabad-district/profile/:profileId"
            element={
              <Page>
                <FaisalabadProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/gujranwala-district"
            element={
              <Page>
                <GujranwalaDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/gujranwala-district/profile/:profileId"
            element={
              <Page>
                <GujranwalaProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/gujrat-district"
            element={
              <Page>
                <GujratDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/gujrat-district/profile/:profileId"
            element={
              <Page>
                <GujratProfileDetails />
              </Page>
            }
          />

          <Route
            path="/branches/district/hafizabad-district"
            element={
              <Page>
                <HafizabadDistrictBody />
              </Page>
            }
          />

          <Route
            path="/branches/district/hafizabad-district/profile/:profileId"
            element={
              <Page>
                <HafizabadProfileDetails />
              </Page>
            }
          />






          <Route
  path="/branches/district/jhelum-district"
  element={
    <Page>
      <JhelumDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/jhelum-district/profile/:profileId"
  element={
    <Page>
      <JhelumProfileDetails />
    </Page>
  }
/>

<Route
  path="/branches/district/kasur-district"
  element={
    <Page>
      <KasurDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/kasur-district/profile/:profileId"
  element={
    <Page>
      <KasurProfileDetails />
    </Page>
  }
/>


<Route
  path="/branches/district/khanewal-district"
  element={
    <Page>
      <KhanewalDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/khanewal-district/profile/:profileId"
  element={
    <Page>
      <KhanewalProfileDetails />
    </Page>
  }
/>

<Route
  path="/branches/district/khushab-district"
  element={
    <Page>
      <KhushabDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/khushab-district/profile/:profileId"
  element={
    <Page>
      <KhushabProfileDetails />
    </Page>
  }
/>


<Route
  path="/branches/district/lahore-district"
  element={
    <Page>
      <LahoreDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/lahore-district/profile/:profileId"
  element={
    <Page>
      <LahoreProfileDetails />
    </Page>
  }
/>

<Route
  path="/branches/district/layyah-district"
  element={
    <Page>
      <LayyahDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/layyah-district/profile/:profileId"
  element={
    <Page>
      <LayyahProfileDetails />
    </Page>
  }
/>


<Route
  path="/branches/district/lodharan-district"
  element={
    <Page>
      <LodharanDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/lodharan-district/profile/:profileId"
  element={
    <Page>
      <LodharanProfileDetails />
    </Page>
  }
/>

<Route
  path="/branches/district/mandi-bahauddin-district"
  element={
    <Page>
      <MandiBahauddinDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/mandi-bahauddin-district/profile/:profileId"
  element={
    <Page>
      <MandiBahauddinProfileDetails />
    </Page>
  }
/>

<Route
  path="/branches/district/mianwali-district"
  element={
    <Page>
      <MianwaliDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/mianwali-district/profile/:profileId"
  element={
    <Page>
      <MianwaliProfileDetails />
    </Page>
  }
/>


<Route
  path="/branches/district/multan-district"
  element={
    <Page>
      <MultanDistrictBody />
    </Page>
  }
/>

<Route
  path="/branches/district/multan-district/profile/:profileId"
  element={
    <Page>
      <MultanProfileDetails />
    </Page>
  }
/>


{/* provincila body */}

<Route
  path="/about/central-body/profile/:profileId"
  element={
    <Page>
      <CentralBodyProfileDetails />
    </Page>
  }
/>

<Route
  path="/about/house-delegates/profile/:profileId"
  element={
    <Page>
      <HouseOfDelegatesProfileDetails />
    </Page>
  }
/>

<Route
  path="/about/board-trustees/profile/:profileId"
  element={
    <Page>
      <BoardOfTrusteesProfileDetails />
    </Page>
  }
/>
          {/* Contact */}
          <Route
            path="/contact/contact-info"
            element={
              <Page>
                <ContactInfo />
              </Page>
            }
          />

          {/* Events */}
          <Route
            path="/programs/upcoming"
            element={
              <Page>
                <UpcomingEvents />
              </Page>
            }
          />

          <Route
            path="/event/:id"
            element={
              <Page>
                <EventDetails onOpenMembership={() => setIsFormOpen(true)} />
              </Page>
            }
          />

          {/* Press Gallery */}
          <Route
            path="/press-gallery"
            element={<Placeholder text="Press Clipping Gallery Component Coming Soon!" />}
          />

          {/* Placeholder Routes */}
          <Route
            path="/about/:section"
            element={<Placeholder text="About Section Component Coming Soon!" />}
          />

          <Route
            path="/publications/:section"
            element={<Placeholder text="Publications Component Coming Soon!" />}
          />

          <Route
            path="/membership/:section"
            element={<Placeholder text="Membership Component Coming Soon!" />}
          />

          <Route
            path="/programs/:section"
            element={<Placeholder text="Programs Component Coming Soon!" />}
          />

          <Route
            path="/diseases/:section"
            element={
              <Placeholder text="Diseases Information Component Coming Soon!" />
            }
          />

          <Route
            path="/contact/:section"
            element={<Placeholder text="Contact Component Coming Soon!" />}
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;