// src/pages/Gallary/AlbumDetails.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { galleryData } from '../../data/galleryData'; 
import LightboxModal from '../../components/LightboxModal';

function AlbumDetails() {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  let album = null;
  if (galleryData && Array.isArray(galleryData)) {
    for (const yearData of galleryData) {
      const found = yearData.events?.find(e => e.id.toString() === albumId?.toString());
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
        <button onClick={() => navigate('/gallery')} className="px-5 py-2.5 bg-[#0F765E] text-white rounded-xl font-semibold">
          Go Back to Gallery
        </button>
      </div>
    );
  }

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-20">
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50/30 to-gray-50 border-b border-gray-200/60 py-12 px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-[1600px] mx-auto">
          <button onClick={() => navigate('/gallery')} className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200/80 cursor-pointer">
            ← Back to Albums
          </button>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{album.title}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl">{album.description}</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-10 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {album.images?.map((image) => (
            <div key={image.imgId} onClick={() => handleImageClick(image)} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm">
              <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-emerald-400 text-xs font-bold uppercase mb-1">View Image</span>
                <p className="text-white font-bold text-sm truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && currentImage && (
        <LightboxModal image={currentImage} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default AlbumDetails;