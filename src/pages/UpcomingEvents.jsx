// src/pages/UpcomingEvents.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

const UpcomingEvents = () => {
  const navigate = useNavigate();

  // لیٹسٹ ایونٹ اور باقی ایونٹس کو الگ کرنا
  const latestEvent = eventsData.find(event => event.isLatest) || eventsData[0];
  const otherEvents = eventsData.filter(event => event.id !== latestEvent.id);

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      
      {/* 🖤 1. گیلری جیسا خوبصورت ہیڈر بینر (مکمل چوڑائی میں) */}
      <div className="w-full bg-gradient-to-r from-[#072F1D] to-[#0A4429] text-white py-16 px-4 text-center relative overflow-hidden shadow-inner">
        {/* ہلکا سا بیک گراؤنڈ پیٹرن یا اوورلے دینے کے لیے */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            GCDA Upcoming Programs
          </h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto mb-4 rounded"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest healthcare seminars, professional medical training programs, and annual medical conferences.
          </p>
        </div>
      </div>

      {/* 📦 2. مین کنٹینٹ کا ایریا جو نیچے چلے گا */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        <h2 className="text-2xl font-bold text-[#0f5132] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#e67e22] rounded-full inline-block"></span>
          Latest Event Focus
        </h2>

        {/* 🌟 3. بڑا بینر (Latest Event) */}
        <div 
          onClick={() => navigate(`/event/${latestEvent.id}`)}
          className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer group mb-14 transition-all duration-300 hover:shadow-xl hover:scale-[1.005]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* امیج سیکشن */}
            <div className="lg:col-span-3 h-64 md:h-80 lg:h-[400px] relative overflow-hidden">
              <img 
                src={latestEvent.image} 
                alt={latestEvent.title} 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#e67e22] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
                Latest Event
              </span>
            </div>
            
            {/* ٹیکسٹ سیکشن */}
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0f5132] to-[#0a3a24] text-white">
              <div>
                <div className="text-orange-400 font-semibold text-sm tracking-wide mb-2 flex items-center gap-1">
                  📅 {latestEvent.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-amber-300 transition-colors">
                  {latestEvent.title}
                </h3>
                <p className="text-emerald-100/90 text-sm md:text-base line-clamp-4 leading-relaxed font-light">
                  {latestEvent.description}
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 bg-[#e67e22] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow hover:bg-[#d35400] transition-colors">
                  View Details & Enroll →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 👥 4. باقی ایونٹس کی لسٹ (ایک رو میں 4) */}
        <div className="border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gray-400 rounded-full inline-block"></span>
            Other Upcoming Programs
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => navigate(`/event/${event.id}`)}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between border border-gray-200/60 overflow-hidden group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded font-medium">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-base text-gray-900 line-clamp-2 group-hover:text-[#0f5132] transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button className="w-full mt-2 text-center text-xs font-bold text-[#0f5132] border border-[#0f5132]/30 py-2 rounded-lg group-hover:bg-[#0f5132] group-hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpcomingEvents;