import React from 'react';

function LightboxModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-6 backdrop-blur-sm animate-fade-in">
   
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light p-2 transition-colors z-50"
        aria-label="Close modal"
      >
        ✕
      </button>

    
      <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row shadow-2xl border border-gray-800">
        
       
        <div className="md:w-3/5 bg-black flex items-center justify-center p-2 min-h-[30vh] md:min-h-0 overflow-hidden">
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[40vh] md:max-h-[80vh] object-contain"
          />
        </div>

       
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              Event Photo Details
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              {image.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
              {image.details}
            </p>
          </div>

         
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Close Preview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LightboxModal;