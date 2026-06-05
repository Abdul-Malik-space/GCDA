import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { galleryData } from "../../data/galleryData";

function AlbumDetails() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [activeIndex, setActiveIndex] = useState(null);
  const [showSeminarDescription, setShowSeminarDescription] = useState(true);

  let album = null;
  let albumYear =
    searchParams.get("year") || localStorage.getItem("selectedGalleryYear") || "";

  if (galleryData && Array.isArray(galleryData)) {
    for (const yearData of galleryData) {
      const found = yearData.events?.find(
        (event) => event.id.toString() === albumId?.toString()
      );

      if (found) {
        album = found;
        albumYear = yearData.year || albumYear;
        break;
      }
    }
  }

  const backToGallery = () => {
    if (albumYear) {
      localStorage.setItem("selectedGalleryYear", albumYear);
      navigate(`/gallery?year=${albumYear}`);
    } else {
      navigate("/gallery");
    }
  };

  if (!album) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-white w-full">
        <h2 className="text-xl font-bold text-gray-700">Album Not Found!</h2>

        <button
          onClick={backToGallery}
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
    setShowSeminarDescription(true);
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
    <div className="min-h-screen bg-gray-50 w-full pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0F765E] mb-1">
              Seminar Photo Album
            </p>
            <h1 className="text-xl md:text-2xl font-black text-gray-900">
              {album.title}
            </h1>
          </div>

          <button
            onClick={backToGallery}
            className="self-start md:self-auto inline-flex items-center gap-2 bg-[#0F765E] hover:bg-[#0b5e4b] text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            ← Back to Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {album.images?.map((image, index) => (
            <button
              key={image.imgId}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setShowSeminarDescription(true);
              }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
            >
              <div className="relative h-44 bg-gray-200 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

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

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`relative w-full ${
                showSeminarDescription ? "max-w-[1320px]" : "max-w-[1120px]"
              } max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl`}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute top-4 left-4 z-50 pointer-events-none">
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="pointer-events-auto text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-sm font-bold"
                >
                  ← Back to Photos
                </button>
              </div>

              <div
                className={`grid grid-cols-1 ${
                  showSeminarDescription
                    ? "lg:grid-cols-[70%_30%]"
                    : "lg:grid-cols-1"
                } max-h-[90vh]`}
              >
                <div className="bg-black flex flex-col max-h-[90vh]">
                  <div
                    className={`relative bg-black flex items-center justify-center overflow-hidden ${
                      showSeminarDescription
                        ? "h-[56vh] lg:h-[68vh]"
                        : "h-[64vh] lg:h-[76vh]"
                    }`}
                  >
                    <img
                      src={activeImage.src}
                      alt={activeImage.title}
                      className="max-w-full max-h-full object-contain p-3 lg:p-5"
                    />

                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-50 min-w-[52px] min-h-[52px] rounded-full bg-black/65 hover:bg-[#0F765E] text-white flex items-center justify-center text-3xl font-black transition-all backdrop-blur-md border border-white/30 shadow-xl"
                      title="Previous Image"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-50 min-w-[52px] min-h-[52px] rounded-full bg-black/65 hover:bg-[#0F765E] text-white flex items-center justify-center text-3xl font-black transition-all backdrop-blur-md border border-white/30 shadow-xl"
                      title="Next Image"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-black/65 text-white backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-black">
                      {activeIndex + 1} / {album.images.length}
                    </div>
                  </div>

                  <div className="bg-white px-6 md:px-8 py-4 flex-shrink-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0F765E] mb-2">
                      Photo Details
                    </p>

                    <h2 className="text-lg md:text-xl font-black text-gray-900 leading-tight">
                      {activeImage.title}
                    </h2>

                    {activeImage.details && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-3">
                        {activeImage.details}
                      </p>
                    )}

                    {album.description && !showSeminarDescription && (
                      <button
                        type="button"
                        onClick={() => setShowSeminarDescription(true)}
                        className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#0F765E] hover:bg-[#0b5e4b] text-white px-4 py-2 text-xs md:text-sm font-bold transition-all"
                      >
                        Show Seminar Description
                      </button>
                    )}
                  </div>
                </div>

                {showSeminarDescription && album.description && (
                  <div className="bg-white border-l border-gray-100 max-h-[90vh] flex flex-col overflow-hidden">
                    <div className="px-6 md:px-7 pt-7 pb-5 border-b border-gray-100 flex-shrink-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0F765E] mb-3">
                            Complete Seminar Description
                          </p>

                          <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                            {album.title}
                          </h3>

                          <div className="w-16 h-1 bg-[#e67e22] mt-4 rounded-full" />
                        </div>

                        <button
                          type="button"
                          onClick={() => setShowSeminarDescription(false)}
                          className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white rounded-xl px-3 py-2 text-xs font-black transition-all"
                        >
                          Close ✕
                        </button>
                      </div>
                    </div>

                    <div className="px-6 md:px-7 py-5 overflow-y-auto flex-1 custom-scrollbar">
                      <p className="text-sm md:text-base text-gray-600 leading-8">
                        {album.description?.replace(/\s+/g, " ")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AlbumDetails;