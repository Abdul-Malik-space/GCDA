import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { procurementVideoData } from "../../data/procurementVideoData";

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

const ProcurementVideoAlbum = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = useMemo(() => {
    return procurementVideoData.find((item) => item.id === eventId);
  }, [eventId]);

  const [activeIndex, setActiveIndex] = useState(null);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black text-gray-800 mb-3">
            Procurement video album not found
          </h1>

          <button
            onClick={() => navigate("/procurement-videos")}
            className="px-5 py-2.5 rounded-xl bg-[#0F765E] text-white font-bold"
          >
            Back to Procurement Videos
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
    <div className="min-h-screen bg-gray-50 w-full pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        {!activeVideo && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0F765E] mb-1">
                Procurement Videos
              </p>
              <h1 className="text-xl md:text-2xl font-black text-gray-900">
                {event.title}
              </h1>
            </div>

            <button
              onClick={() => navigate("/procurement-videos")}
              className="self-start md:self-auto inline-flex items-center gap-2 bg-[#0F765E] hover:bg-[#0b5e4b] text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
            >
              ← Back to Procurement Videos
            </button>
          </div>
        )}

        {!activeVideo && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {event.videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
              >
                <div className="relative h-36 bg-gray-200 overflow-hidden">
                  <img
                    src={getThumbnail(video.url)}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-black text-gray-900 group-hover:text-[#0F765E] transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  {video.speaker && (
                    <p className="text-[11px] text-gray-500 font-semibold mt-2 line-clamp-1">
                      {video.speaker}
                    </p>
                  )}

                  {video.description && (
                    <p className="text-[12px] text-gray-500 leading-relaxed mt-3 line-clamp-3">
                      {video.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="w-full aspect-video">
                <iframe
                  src={getEmbedUrl(activeVideo.url, true)}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="bg-white px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0F765E] hover:text-white font-black transition-all flex-shrink-0"
                  >
                    ←
                  </button>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#0F765E]">
                      {activeIndex + 1} / {event.videos.length}
                    </p>
                    <h3 className="text-sm md:text-lg font-black text-gray-900 mt-1">
                      {activeVideo.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0F765E] hover:text-white font-black transition-all flex-shrink-0"
                  >
                    →
                  </button>
                </div>

                <button
                  type="button"
                  onClick={closePlayer}
                  className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-xl bg-[#0F765E] hover:bg-[#0b5e4b] text-white px-4 py-2 text-xs md:text-sm font-bold transition-all"
                >
                  ← Return to Procurement Videos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcurementVideoAlbum;