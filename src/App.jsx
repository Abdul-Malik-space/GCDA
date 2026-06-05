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
import BoardOfTrustees from "./pages/AboutSubMenus/BoardOfTrustes";
import Committees from "./pages/AboutSubMenus/Committees";

import GalleryHome from "./pages/Gallary/GalleryHome";
import AlbumDetails from "./pages/Gallary/AlbumDetails";

import VideoGalleryHome from "./pages/Gallary/VideoGalleryHome";
import VideoAlbumDetails from "./pages/Gallary/VideoAlbumDetails";

import UpcomingEvents from "./pages/UpcomingEvents";
import EventDetails from "./pages/EventDetails";

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