import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { procurementVideoData } from "../../data/procurementVideoData";

const getYouTubeId = (url = "") => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

const getThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "";
};

function ProcurementVideoGalleryHome() {
  const navigate = useNavigate();

  const openAlbum = (event) => {
    navigate(`/gallery/procurement-videos/${event.id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-20 font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center py-10 md:py-12 px-4 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:14px_14px]" />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-lg">
            Procurement Videos
          </h1>
          <div className="w-20 h-1 bg-[#e67e22] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {procurementVideoData && procurementVideoData.length > 0 ? (
              procurementVideoData.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  onClick={() => openAlbum(event)}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 overflow-hidden cursor-pointer flex flex-col transition-all"
                >
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <img
                      src={event.coverImage || getThumbnail(event.frontVideo)}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0F765E] text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {event.videos.length} Videos
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0F765E] mb-2">
                      {event.date} {event.location ? `• ${event.location}` : ""}
                    </p>

                    <h3 className="text-base font-black text-gray-900 group-hover:text-[#0F765E] transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="text-xs text-gray-500 leading-relaxed mt-2 line-clamp-3">
                        {event.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-semibold">
                  No procurement videos available.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProcurementVideoGalleryHome;
