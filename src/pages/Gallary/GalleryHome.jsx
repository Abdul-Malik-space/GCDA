import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { galleryData } from "../../data/galleryData";

const getLatestYear = () => {
  if (!galleryData?.length) return "";

  return galleryData
    .map((item) => item.year)
    .filter(Boolean)
    .sort((a, b) => Number(b) - Number(a))[0];
};

function GalleryHome() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlYear = searchParams.get("year");
  const savedYear = localStorage.getItem("selectedGalleryYear");
  const latestYear = getLatestYear();

  const initialYear = galleryData.some((item) => item.year === urlYear)
    ? urlYear
    : galleryData.some((item) => item.year === savedYear)
    ? savedYear
    : latestYear;

  const [selectedYear, setSelectedYear] = useState(initialYear);

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

  const updateSelectedYear = (year) => {
    if (!year) return;
    setSelectedYear(year);
    localStorage.setItem("selectedGalleryYear", year);
    setSearchParams({ year });
  };

  const handlePrevYear = () => {
    if (!canGoPrev) return;
    const prevYear = galleryData[selectedYearIndex - 1]?.year;
    updateSelectedYear(prevYear);
  };

  const handleNextYear = () => {
    if (!canGoNext) return;
    const nextYear = galleryData[selectedYearIndex + 1]?.year;
    updateSelectedYear(nextYear);
  };

  const openAlbum = (event) => {
    localStorage.setItem("selectedGalleryYear", selectedYear);
    navigate(`/gallery/${event.id}?year=${selectedYear}`);
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
      {/* Compact Hero Section */}
      <section
        className="relative w-full bg-cover bg-center py-10 md:py-12 px-4 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:14px_14px]" />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-lg">
            GCDA Photo Gallery
          </h1>
          <div className="w-20 h-1 bg-[#e67e22] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        {/* Year Selector shifted to Right */}
        <div className="flex justify-end mb-5">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-2 flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevYear}
              disabled={!canGoPrev}
              className={`w-9 h-9 rounded-lg border font-black text-lg transition-all flex items-center justify-center ${
                canGoPrev
                  ? "bg-white text-gray-700 border-gray-200 hover:bg-[#0F765E] hover:text-white hover:border-[#0F765E]"
                  : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed"
              }`}
              title="Previous Year"
            >
              ‹
            </button>

            <div className="grid grid-cols-3 gap-2">
              {visibleYears.map((data) => (
                <button
                  key={data.year}
                  type="button"
                  onClick={() => updateSelectedYear(data.year)}
                  className={`w-[70px] px-2 py-2 rounded-lg font-bold text-xs transition-all duration-300 ${
                    selectedYear === data.year
                      ? "bg-[#0F765E] text-white shadow-md"
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
              className={`w-9 h-9 rounded-lg border font-black text-lg transition-all flex items-center justify-center ${
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

        {/* Album Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {currentYearData && currentYearData.events?.length > 0 ? (
              currentYearData.events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  onClick={() => openAlbum(event)}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 overflow-hidden cursor-pointer flex flex-col transition-all"
                >
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200";
                      }}
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0F765E] text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {event.images?.length || 0} Photos
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0F765E] mb-2">
                      GCDA Photo Album
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