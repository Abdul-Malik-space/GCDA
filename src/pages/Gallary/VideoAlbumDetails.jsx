import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videoData } from "../../data/videoData";

const getYouTubeId = (url = "") => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

const getThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

const getEmbedUrl = (url, autoplay = false) => {
  const id = getYouTubeId(url);
  return id
    ? `https://www.youtube.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}`
    : "";
};

const VideoAlbum = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = useMemo(() => {
    const allEvents = videoData.flatMap((yearItem) => yearItem.events || []);
    return allEvents.find((item) => item.id === eventId);
  }, [eventId]);

  const [activeIndex, setActiveIndex] = useState(null);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black text-gray-800 mb-3">
            Video album not found
          </h1>

          <button
            onClick={() => navigate("/videos")}
            className="px-5 py-2.5 rounded-xl bg-[#0F765E] text-white font-bold"
          >
            Back to Video Gallery
          </button>
        </div>
      </div>
    );
  }

  const activeVideo = activeIndex !== null ? event.videos[activeIndex] : null;

  const closePlayer = () => {
    setActiveIndex(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % event.videos.length;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + event.videos.length) % event.videos.length;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-20">
      {/* Header */}
      <div className="relative bg-gray-950 text-white py-20 px-4 overflow-hidden">
        <img
          src={event.coverImage || getThumbnail(event.frontVideo)}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/videos")}
            className="mb-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            ← Back to Video Gallery
          </button>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300 mb-4">
            Seminar Video Album
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            {event.title}
          </h1>

          <div className="w-24 h-1 bg-[#e67e22] mb-6 rounded-full" />

          <p className="text-white/90 max-w-3xl leading-relaxed text-base md:text-lg">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black">{event.videos.length}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Videos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black">{event.date}</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Year
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-2xl font-black">GCDA</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider">
                Seminar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Front Video */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-12">
          <div className="p-5 md:p-7 border-b border-gray-100">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F765E] mb-2">
              Front Video
            </p>

            <h2 className="text-2xl font-black text-gray-900">
              Main Seminar Video
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="relative w-full h-[260px] sm:h-[380px] md:h-[520px] bg-black block group overflow-hidden"
          >
            <img
              src={event.coverImage || getThumbnail(event.frontVideo)}
              alt={event.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white text-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="text-3xl ml-1">▶</span>
              </div>
            </div>
          </button>
        </div>

        {/* All Videos Grid */}
        <div className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F765E] mb-2">
            All Seminar Videos
          </p>

          <h2 className="text-3xl font-black text-gray-900">
            Complete Video Collection
          </h2>

          <div className="w-20 h-1 bg-[#e67e22] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {event.videos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group"
            >
              <div className="relative h-36 bg-gray-200 overflow-hidden">
                <img
                  src={getThumbnail(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/95 text-red-600 flex items-center justify-center shadow-lg">
                    <span className="text-lg ml-0.5">▶</span>
                  </div>
                </div>

                <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  #{index + 1}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-black text-gray-900 group-hover:text-[#0F765E] transition-colors line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-[11px] text-gray-500 font-semibold mt-2 line-clamp-1">
                  {video.speaker}
                </p>

                {video.description && (
                  <p className="text-[12px] text-gray-500 leading-relaxed mt-3 line-clamp-3">
                    {video.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closePlayer}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Buttons */}
            <div className="absolute -top-14 left-0 right-0 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={closePlayer}
                className="text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 text-sm font-bold"
              >
                ← Back to Videos
              </button>

              <button
                type="button"
                onClick={closePlayer}
                className="text-white bg-red-600 hover:bg-red-700 border border-red-500 rounded-xl px-4 py-2 text-sm font-bold"
              >
                Close ✕
              </button>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-video w-full">
                <iframe
                  src={getEmbedUrl(activeVideo.url, true)}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="bg-white px-5 py-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0F765E] hover:text-white font-black transition-all flex-shrink-0"
                >
                  ←
                </button>

                <div className="text-center max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-wider text-[#0F765E]">
                    {activeIndex + 1} / {event.videos.length}
                  </p>

                  <h3 className="text-sm md:text-lg font-black text-gray-900">
                    {activeVideo.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-semibold mt-1">
                    {activeVideo.speaker}
                  </p>

                  {activeVideo.description && (
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-2 line-clamp-2">
                      {activeVideo.description}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0F765E] hover:text-white font-black transition-all flex-shrink-0"
                >
                  →
                </button>
              </div>
            </div>

            {/* Side Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden md:flex absolute left-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white items-center justify-center text-2xl font-black"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="hidden md:flex absolute right-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white items-center justify-center text-2xl font-black"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAlbum;