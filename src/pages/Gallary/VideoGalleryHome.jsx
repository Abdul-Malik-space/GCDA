import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { videoData } from '../../data/videoData';

function VideoGalleryHome() {
  const [selectedYear, setSelectedYear] = useState(videoData[0]?.year || '');
  const navigate = useNavigate(); // لنک تبدیل کرنے کے لیے

  const currentYearData = videoData.find(item => item.year === selectedYear);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden w-full pb-20">
      {/* فل اسکرین ہیرو بینر */}
      <div className="relative h-[60vh] w-full flex items-center justify-center bg-gray-950 overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071" 
          alt="GCDA Video Header" 
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          animate={{ scale: [1.02, 1.06] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl">GCDA Video Gallery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-[#0F765E] mb-6 rounded-full"></div>
          <p className="text-gray-200 text-sm md:text-lg font-medium max-w-2xl">Watch and experience our recent healthcare seminars and community work live in action.</p>
        </div>
      </div>

      {/* سال اور کارڈز */}
      <div className="px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full pt-16">
        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-2 px-2 justify-start md:justify-center">
            {videoData.map((data) => (
              <button
                key={data.year}
                onClick={() => setSelectedYear(data.year)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-95 ${
                  selectedYear === data.year ? 'bg-[#0F765E] text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:text-[#0F765E] border border-gray-200'
                }`}
              >
                {data.year}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedYear} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentYearData && currentYearData.events.length > 0 ? (
              currentYearData.events.map((event) => (
                <motion.div
                  key={event.id} variants={itemVariants} whileHover={{ y: -6 }}
                  onClick={() => navigate(`/videos/${event.id}`)} // 👈 اب یہ یو آر ایل بدل دے گا
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/40 overflow-hidden cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-opacity"></div>
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F765E] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                      🎬 {event.videos.length} Videos
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-800 mb-2 group-hover:text-[#0F765E] transition-colors line-clamp-1">{event.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{event.description}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-sm font-bold text-[#0F765E] flex items-center justify-between">
                      <span>Open Video Album</span>
                      <span className="bg-emerald-50 group-hover:bg-[#0F765E] group-hover:text-white p-1.5 rounded-lg transition-colors">→</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200"><p className="text-gray-400">No video events for this year.</p></div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default VideoGalleryHome;