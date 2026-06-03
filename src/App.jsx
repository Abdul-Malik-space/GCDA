// src/App.jsx
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CentralBody from './pages/AboutSubMenus/CentralBody';
import MembershipForm from './components/MembershipForm'; 
import Introduction from './pages/Introduction';
import MissionVision from './pages/AboutSubMenus/MissionVision';
import History from './pages/AboutSubMenus/History';
import HouseOfDelegates from './pages/AboutSubMenus/HouseOfDelegates';
import BoardOfTrustees from './pages/AboutSubMenus/BoardOfTrustes';
import Committees from './pages/AboutSubMenus/Committees';
import GalleryHome from './pages/Gallary/GalleryHome';
import AlbumDetails from './pages/Gallary/AlbumDetails';


// ویڈیو گیلری پیجز
import VideoGalleryHome from './pages/Gallary/VideoGalleryHome';
import VideoAlbumDetails from './pages/Gallary/VideoAlbumDetails';

// 👈 ایونٹس کے نئے پیجز کو یہاں امپورٹ کیا (اپنے فولڈر سٹرکچر کے مطابق پاتھ چیک کر لیں)
import UpcomingEvents from './pages/UpcomingEvents'; 
import EventDetails from './pages/EventDetails'; 

function App() {
  // 🔑 فارم کو پوری ویب سائٹ پر کہیں بھی کھولنے/بند کرنے کی گلوبل اسٹیٹ
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 w-full overflow-x-hidden selection:bg-[#1A7963] selection:text-white relative">
        
        {/* 🧭 مینیو بار کو ہم نے اسٹیٹ بدلنے کا فنکشن پاس کر دیا */}
        <Navbar onOpenMembership={() => setIsFormOpen(true)} />
        
        {/* 🔀 راؤٹنگ سسٹم — جو یو آر ایل کے مطابق پیج بدلتا ہے */}
        <main className="w-full">
          {/* 🟢 صرف ایک ہی مین Routes ٹیگ استعمال ہوگا */}
          <Routes>
            {/* 🏠 ہوم پیج راؤٹ */}
            <Route path="/" element={<div className="animate-fade-in"><Hero /></div>} />

            {/* 📸 فوٹو گیلری راؤٹس */}
            <Route path="/gallery" element={<div className="w-full animate-fade-in"><GalleryHome /></div>} />
            <Route path="/gallery/:albumId" element={<div className="w-full animate-fade-in"><AlbumDetails /></div>} />

            {/* 🎥 ویڈیو گیلری راؤٹس */}
            <Route path="/videos" element={<div className="w-full animate-fade-in"><VideoGalleryHome /></div>} />
            <Route path="/videos/:eventId" element={<div className="w-full animate-fade-in"><VideoAlbumDetails /></div>} />
            <Route path="/about/central-body" element={<div className="w-full animate-fade-in"><CentralBody /></div>} />
            <Route path="/about/introduction" element={<div className="w-full animate-fade-in"><Introduction /></div>} />
            <Route path="/about/mission-vision" element={<div className="w-full animate-fade-in"><MissionVision /></div>} />
            <Route path="/about/history" element={<div className="w-full animate-fade-in"><History /></div>} />
            <Route path="/about/house-delegates" element={<div className="w-full animate-fade-in"><HouseOfDelegates /></div>} />
            <Route path="/about/board-trustees" element={<div className="w-full animate-fade-in"><BoardOfTrustees /></div>} />
            <Route path="/about/committees" element={<div className="w-full animate-fade-in"><Committees /></div>} />
            <Route path="/programs/upcoming" element={<div className="w-full animate-fade-in"><UpcomingEvents /></div>} />
            
            {/* 🔍 ایونٹ ڈیٹیل کا ڈائنامک پیج */}
            <Route path="/event/:id" element={<div className="w-full animate-fade-in"><EventDetails onOpenMembership={() => setIsFormOpen(true)} /></div>} />

            {/* 📰 پریس کلپنگ گیلری راؤٹ */}
            <Route path="/press-gallery" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Press Clipping Gallery Component Coming Soon!</div>} />

           
            <Route path="/about/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">About Section Component Coming Soon!</div>} />
            <Route path="/publications/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Publications Component Coming Soon!</div>} />
            <Route path="/membership/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Membership Component Coming Soon!</div>} />
            <Route path="/programs/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Programs Component Coming Soon!</div>} />
            <Route path="/diseases/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Diseases Information Component Coming Soon!</div>} />
            <Route path="/contact/:section" element={<div className="text-center py-20 font-bold text-gray-500 bg-white min-h-[60vh] flex items-center justify-center">Contact Component Coming Soon!</div>} />

            {/* 🚫 404 پیج */}
            <Route path="*" element={<div className="text-center py-20 font-bold text-gray-400 bg-white min-h-[60vh] flex items-center justify-center">404 - Page Not Found!</div>} />
          </Routes>
        </main>

        {/* 🌟 جادوئی لاجک: اب فارم پوری ویب سائٹ کے بالکل اوپر (Top Layer) پر رینڈر ہوگا */}
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