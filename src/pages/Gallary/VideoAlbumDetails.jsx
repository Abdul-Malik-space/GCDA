// src/pages/Gallary/VideoAlbumDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { videoData } from '../../data/videoData'; // ڈیٹا کا درست پاتھ

function VideoAlbumDetails() {
  const { eventId } = useParams(); // یو آر ایل سے آئی ڈی (جیسے vid-event-2026-1) حاصل کرنے کے لیے
  const navigate = useNavigate();

  // 🔍 ڈیٹا میں سے درست ایونٹ ڈھونڈنے کا سب سے محفوظ طریقہ
  let selectedEvent = null;
  if (videoData && Array.isArray(videoData)) {
    for (const yearData of videoData) {
      // .toString().trim() استعمال کیا تاکہ اگر کوئی پوشیدہ اسپیس یا ٹائپ کا فرق ہو تو وہ ختم ہو جائے
      const found = yearData.events?.find(
        (e) => e.id.toString().trim() === eventId?.toString().trim()
      );
      if (found) {
        selectedEvent = found;
        break;
      }
    }
  }

  // 🚫 اگر ایونٹ نہ ملے تو یہ خوبصورت اسکرین نظر آئے گی
  if (!selectedEvent) {
    return (
      <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">Video Album Not Found!</h2>
          <p className="text-gray-500 text-sm mb-6">The video album you are looking for does not exist or has been moved.</p>
          <button 
            onClick={() => navigate('/videos')}
            className="bg-[#0F765E] hover:bg-[#0b5443] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            Go Back to Video Gallery
          </button>
        </motion.div>
      </div>
    );
  }

  // ✅ اگر ایونٹ مل جائے تو یہ پیج رینڈر ہوگا اور یوٹیوب ویڈیوز چلیں گی
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* پیچھے جانے کا بٹن */}
        <button 
          onClick={() => navigate('/videos')}
          className="text-gray-600 hover:text-[#0F765E] font-bold text-sm mb-6 flex items-center gap-2 group transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Gallery
        </button>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">{selectedEvent.title}</h1>
          <p className="text-gray-600 max-w-3xl text-sm md:text-base">{selectedEvent.description}</p>
        </div>

        {/* 🎥 یوٹیوب ویڈیوز کا گریڈ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedEvent.videos.map((video) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60 flex flex-col"
            >
              {/* یوٹیوب آئی فریم پلیئر */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-between items-start gap-4">
                <h3 className="font-bold text-gray-800 text-base md:text-lg line-clamp-2">{video.title}</h3>
                <span className="bg-gray-100 text-gray-600 text-xs font-mono font-bold px-2.5 py-1 rounded-md flex-shrink-0">
                  ⏱️ {video.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default VideoAlbumDetails;