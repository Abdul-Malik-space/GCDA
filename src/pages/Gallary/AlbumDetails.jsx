import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { galleryData } from "../../data/galleryData";

function AlbumDetails() {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  let album = null;

  if (galleryData && Array.isArray(galleryData)) {
    for (const yearData of galleryData) {
      const found = yearData.events?.find(
        (event) => event.id.toString() === albumId?.toString()
      );

      if (found) {
        album = found;
        break;
      }
    }
  }

  if (!album) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-white w-full">
        <h2 className="text-xl font-bold text-gray-700">Album Not Found!</h2>

        <button
          onClick={() => navigate("/gallery")}
          className="px-5 py-2.5 bg-[#0F765E] text-white rounded-xl font-semibold"
        >
          Go Back to Gallery
        </button>
      </div>
    );
  }

  const activeImage = activeIndex !== null ? album.images?.[activeIndex] : null;

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % album.images.length;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + album.images.length) % album.images.length;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-20">
      {/* Album Header */}
      <div className="relative bg-gray-950 text-white py-20 px-4 overflow-hidden">
        <img
          src={album.coverImage}
          alt={album.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/gallery")}
            className="mb-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            ← Back to Albums
          </button>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300 mb-4">
            Seminar Photo Album
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            {album.title}
          </h1>

          <div className="w-24 h-1 bg-[#e67e22] mb-6 rounded-full" />

          <p className="text-white/90 max-w-3xl leading-relaxed text-base md:text-lg">
            {album.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black">{album.images?.length || 0}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Photos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black">GCDA</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Gallery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Album Images */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F765E] mb-2">
            All Seminar Photos
          </p>

          <h2 className="text-3xl font-black text-gray-900">
            Complete Photo Collection
          </h2>

          <div className="w-20 h-1 bg-[#e67e22] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {album.images?.map((image, index) => (
            <button
              key={image.imgId}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group"
            >
              <div className="relative h-44 bg-gray-200 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-white/95 text-[#0F765E] flex items-center justify-center shadow-lg">
                    <span className="text-lg">🔍</span>
                  </div>
                </div>

                <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  #{index + 1}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-black text-gray-900 group-hover:text-[#0F765E] transition-colors line-clamp-2">
                  {image.title}
                </h3>

                {image.details && (
                  <p className="text-[12px] text-gray-500 leading-relaxed mt-3 line-clamp-3">
                    {image.details}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Lightbox Modal */}
<AnimatePresence>
  {activeImage && (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeLightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-[1320px] h-[82vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 30 }}
        transition={{ duration: 0.25 }}
      >
        {/* Top Buttons */}
        <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between gap-3 pointer-events-none">
          <button
            type="button"
            onClick={closeLightbox}
            className="pointer-events-auto text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-sm font-bold"
          >
            ← Back to Photos
          </button>

          <button
            type="button"
            onClick={closeLightbox}
            className="pointer-events-auto text-white bg-red-600 hover:bg-red-700 border border-red-500 rounded-xl px-4 py-2 text-sm font-bold"
          >
            Close ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] h-full">
          {/* Left Image */}
          <div className="relative bg-black flex items-center justify-center h-[44vh] lg:h-full overflow-hidden">
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="max-w-full max-h-full object-contain p-3 lg:p-5"
            />

            {/* Previous Arrow - Always Visible */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-13 h-13 min-w-[52px] min-h-[52px] rounded-full bg-black/65 hover:bg-[#0F765E] text-white flex items-center justify-center text-3xl font-black transition-all backdrop-blur-md border border-white/30 shadow-xl"
              title="Previous Image"
            >
              ‹
            </button>

            {/* Next Arrow - Always Visible */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-13 h-13 min-w-[52px] min-h-[52px] rounded-full bg-black/65 hover:bg-[#0F765E] text-white flex items-center justify-center text-3xl font-black transition-all backdrop-blur-md border border-white/30 shadow-xl"
              title="Next Image"
            >
              ›
            </button>

            {/* Image Counter on Image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-black/65 text-white backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-black">
              {activeIndex + 1} / {album.images.length}
            </div>
          </div>

          {/* Right Scrollable Description */}
          <div className="bg-white h-[38vh] lg:h-full flex flex-col overflow-hidden">
            {/* Fixed Header */}
            <div className="px-6 md:px-8 pt-7 pb-5 border-b border-gray-100 flex-shrink-0">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0F765E] mb-3">
                Photo Details
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                {activeImage.title}
              </h2>

              <div className="w-20 h-1 bg-[#e67e22] mt-5 rounded-full" />

              <div className="flex flex-wrap items-center gap-3 mt-5">
                <span className="inline-flex items-center rounded-xl bg-emerald-50 border border-emerald-100 text-[#0F765E] px-4 py-2 text-xs font-black uppercase tracking-wider">
                  {activeIndex + 1} / {album.images.length}
                </span>

                <span className="inline-flex items-center rounded-xl bg-gray-50 border border-gray-200 text-gray-600 px-4 py-2 text-xs font-bold">
                  {album.title}
                </span>
              </div>
            </div>

            {/* Scroll Area */}
            <div className="px-6 md:px-8 py-6 overflow-y-auto flex-1 custom-scrollbar">
              <p className="text-sm md:text-base text-gray-600 leading-8 whitespace-pre-line">
                {activeImage.details || album.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

export default AlbumDetails;