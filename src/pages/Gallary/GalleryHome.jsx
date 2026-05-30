// src/pages/Gallary/GalleryHome.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 1. ری ایکٹ راؤٹر امپورٹ کیا
import { galleryData } from '../../data/galleryData';

function GalleryHome() { // 👈 2. یہاں سے onAlbumSelect ہٹا دیا کیونکہ اب ہم راؤٹر استعمال کریں گے
  const navigate = useNavigate(); // 👈 3. نیویگیشن ہک انیشیئلائز کیا
  const [selectedYear, setSelectedYear] = useState(galleryData[0]?.year || '');

  const currentYearData = galleryData.find(item => item.year === selectedYear);

  // کارڈز کی ترتیب کے لیے اینیمیشن ویرینٹس
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 15 } 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden w-full left-0 right-0">
      
      {/* 1. فل اسکرین ہیرو بینر */}
      <div className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center bg-gray-950 overflow-hidden left-0 right-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
          alt="GCDA Gallery Header" 
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          animate={{ scale: [1.02, 1.07] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/85 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl"
          >
            GCDA Photo Gallery
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-[#0F765E] mb-6 rounded-full"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-gray-200 text-sm md:text-lg leading-relaxed font-medium drop-shadow max-w-2xl"
          >
            Explore and revisit memories, annual seminars, and free medical camps organized by the General Cadre Doctor's Association.
          </motion.p>
        </div>
      </div>

      {/* 2. بٹنز اور گرڈ سیکشن */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0F765E]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* سالوں (Years) کا بٹن سیکشن */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-14 relative z-10"
        >
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-2 px-2 scrollbar-thin scrollbar-track-transparent justify-start md:justify-center">
            {galleryData.map((data) => (
              <button
                key={data.year}
                onClick={() => setSelectedYear(data.year)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform active:scale-95 flex-shrink-0 ${
                  selectedYear === data.year
                    ? 'bg-[#0F765E] text-white shadow-lg shadow-[#0F765E]/30 scale-105 border border-transparent'
                    : 'bg-white text-gray-600 hover:text-[#0F765E] hover:bg-emerald-50/50 border border-gray-200 shadow-sm'
                }`}
              >
                {data.year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* البم گرڈ سیکشن */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {currentYearData && currentYearData.events.length > 0 ? (
              <motion.div
                key={selectedYear}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentYearData.events.map((album) => (
                  <motion.div
                    key={album.id}
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    onClick={() => navigate(`/gallery/${album.id}`)} // 👈 4. اب یہ کلک کرنے پر صحیح یو آر ایل پر لے جائے گا!
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100/80 overflow-hidden cursor-pointer flex flex-col"
                  >
                    {/* کور امیج */}
                    <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F765E] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-emerald-100 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {album.images.length} Photos
                      </span>
                    </div>

                    {/* تفصیلات */}
                    <div className="p-6 flex-1 flex flex-col justify-between bg-white relative">
                      <div>
                        <h3 className="text-xl font-extrabold text-gray-800 mb-2.5 group-hover:text-[#0F765E] transition-colors duration-300 line-clamp-1 leading-tight">
                          {album.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-normal">
                          {album.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-[#0F765E] group-hover:text-emerald-500 transition-colors">
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0F765E] group-hover:after:w-full after:transition-all after:duration-300">
                          Open Album
                        </span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300 bg-emerald-50 group-hover:bg-[#0F765E] group-hover:text-white p-1.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm"
              >
                <p className="text-gray-400 text-lg font-medium">
                  No albums available for this year.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-thin::-webkit-scrollbar {
          height: 5px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(15, 118, 94, 0.2);
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}

export default GalleryHome;