import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { galleryData } from "../../data/galleryData";

function GalleryHome() {
  const defaultYear =
    galleryData.find((item) => item.year === "2026")?.year ||
    galleryData[0]?.year ||
    "";

  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const navigate = useNavigate();

  const selectedYearIndex = Math.max(
    galleryData.findIndex((item) => item.year === selectedYear),
    0
  );

  const visibleYears = useMemo(() => {
    const total = galleryData.length;

    if (total <= 3) return galleryData;

    let startIndex = selectedYearIndex - 1;

    if (startIndex < 0) startIndex = 0;
    if (startIndex > total - 3) startIndex = total - 3;

    return galleryData.slice(startIndex, startIndex + 3);
  }, [selectedYearIndex]);

  const currentYearData = galleryData.find((item) => item.year === selectedYear);

  const canGoPrev = selectedYearIndex > 0;
  const canGoNext = selectedYearIndex < galleryData.length - 1;

  const handlePrevYear = () => {
    if (!canGoPrev) return;

    const prevYear = galleryData[selectedYearIndex - 1]?.year;
    if (prevYear) setSelectedYear(prevYear);
  };

  const handleNextYear = () => {
    if (!canGoNext) return;

    const nextYear = galleryData[selectedYearIndex + 1]?.year;
    if (nextYear) setSelectedYear(nextYear);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden w-full pb-20">
      {/* Hero Banner */}
      <div className="relative h-[55vh] w-full flex items-center justify-center bg-gray-950 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600"
          alt="GCDA Gallery Header"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          animate={{ scale: [1.02, 1.06] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
            GCDA Photo Gallery
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#e67e22] to-[#0F765E] mb-6 rounded-full" />

          <p className="text-gray-200 text-sm md:text-lg font-medium max-w-2xl">
            Explore GCDA seminar albums, official events, awareness drives,
            medical camps, and organizational moments.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 max-w-[1700px] mx-auto w-full pt-10">
        {/* Year Selector - only 3 years visible */}
        <div className="mb-12 bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F765E] mb-2">
                Select Year
              </p>

              <p className="text-sm text-gray-500 font-medium">
                Use arrows to browse gallery years one by one.
              </p>
            </div>

            <div className="lg:ml-auto flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handlePrevYear}
                disabled={!canGoPrev}
                className={`w-11 h-11 rounded-xl border font-black text-lg transition-all flex items-center justify-center ${
                  canGoPrev
                    ? "bg-white text-gray-700 border-gray-200 hover:bg-[#0F765E] hover:text-white hover:border-[#0F765E]"
                    : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed"
                }`}
                title="Previous Year"
              >
                ‹
              </button>

              <div className="grid grid-cols-3 gap-3">
                {visibleYears.map((data) => (
                  <button
                    key={data.year}
                    type="button"
                    onClick={() => setSelectedYear(data.year)}
                    className={`w-[76px] sm:w-[88px] px-3 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-95 ${
                      selectedYear === data.year
                        ? "bg-[#0F765E] text-white shadow-lg scale-105"
                        : "bg-gray-50 text-gray-600 hover:text-[#0F765E] border border-gray-200"
                    }`}
                  >
                    {data.year}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextYear}
                disabled={!canGoNext}
                className={`w-11 h-11 rounded-xl border font-black text-lg transition-all flex items-center justify-center ${
                  canGoNext
                    ? "bg-white text-gray-700 border-gray-200 hover:bg-[#0F765E] hover:text-white hover:border-[#0F765E]"
                    : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed"
                }`}
                title="Next Year"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F765E] mb-2">
            {selectedYear} Photo Albums
          </p>

          <h2 className="text-3xl font-black text-gray-900">
            Gallery Album Collection
          </h2>

          <div className="w-20 h-1 bg-[#e67e22] mt-4 rounded-full" />
        </div>

        {/* Album Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7"
          >
            {currentYearData && currentYearData.events?.length > 0 ? (
              currentYearData.events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  onClick={() => navigate(`/gallery/${event.id}`)}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/70 overflow-hidden cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200";
                      }}
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/95 text-[#0F765E] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🖼️</span>
                      </div>
                    </div>

                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F765E] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                      📷 {event.images?.length || 0} Photos
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0F765E] mb-2">
                        GCDA Photo Album
                      </p>

                      <h3 className="text-lg font-extrabold text-gray-800 mb-2 group-hover:text-[#0F765E] transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 text-sm font-bold text-[#0F765E] flex items-center justify-between">
                      <span>Open Photo Album</span>
                      <span className="bg-emerald-50 group-hover:bg-[#0F765E] group-hover:text-white p-1.5 rounded-lg transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-semibold">
                  No photo albums available for {selectedYear}.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GalleryHome;