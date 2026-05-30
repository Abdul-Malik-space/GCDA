import React, { useState, useEffect } from 'react';

// تصاویر کے پاتھ - آپ کے فولڈر کے مطابق
import img1 from '../assets/images/image1.jpeg';
import img2 from '../assets/images/image3.jpeg';
import img3 from '../assets/images/6.jpg.jpg';

const slides = [
  {
    id: 1,
    image: img1,
    title: "GCDA Executive Council meeting with Malaysian delegate",
    zoomType: "zoom-in" 
  },
  {
    id: 2,
    image: img2,
    title: "GCDA'S National Conference in Collaboration",
    zoomType: "zoom-out" 
  },
  {
    id: 3,
    image: img3,
    title: "General Cadre Doctor's Association, (GCDA)",
    zoomType: "zoom-in" 
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  // پردے کی اینیمیشن کو کنٹرول کرنے کے لیے سٹیٹس
  const [isCurtainVisible, setIsCurtainVisible] = useState(true);
  const [startOpening, setStartOpening] = useState(false);

  // پیج لوڈ یا ریفریش ہونے پر پردہ کھولنے کی لاجک
  useEffect(() => {
    // 500ms بعد پردے کھلنا شروع ہوں گے
    const openTimeout = setTimeout(() => {
      setStartOpening(true);
    }, 500);

    // 2.2 سیکنڈ بعد پردے کا پورا عنصر غائب ہو جائے گا تاکہ بیک گراؤنڈ کلکس کام کریں
    const removeTimeout = setTimeout(() => {
      setIsCurtainVisible(false);
    }, 2200);

    return () => {
      clearTimeout(openTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  // آٹو پلے لاجک
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // ہر 6 سیکنڈ بعد سلائیڈ بدلے گی
    return () => clearInterval(timer);
  }, [index]); 

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-black text-white">
      
      {/* 🎭 پردہ اینیمیشن (Curtain Opener Layout) */}
      {isCurtainVisible && (
        <div className="absolute inset-0 z-50 flex w-full h-full pointer-events-none select-none">
          
          {/* پہلا کالم (بائیں طرف کھلنے والا پردہ) */}
          <div 
            className={`h-full w-1/3 bg-[#0F765E] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-end ${
              startOpening ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* لوگو کا پہلا حصہ جو کھلتے وقت جڑے گا */}
            <h1 className={`text-white text-4xl md:text-7xl font-black font-serif tracking-widest translate-x-1/2 transition-opacity duration-500 ${startOpening ? 'opacity-0' : 'opacity-100'}`}>
              GC
            </h1>
          </div>

          {/* دوسرا کالم (درمیان والا پردہ جو نیچے کی طرف سلائیڈ ہوگا) */}
          <div 
            className={`h-full w-1/3 bg-[#138a6e] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
              startOpening ? 'translate-y-full' : 'translate-y-0'
            }`}
          />

          {/* تیسرا کالم (دائیں طرف کھلنے والا پردہ) */}
          <div 
            className={`h-full w-1/3 bg-[#0F765E] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-start ${
              startOpening ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* لوگو کا دوسرا حصہ */}
            <h1 className={`text-white text-4xl md:text-7xl font-black font-serif tracking-widest -translate-x-1/2 transition-opacity duration-500 ${startOpening ? 'opacity-0' : 'opacity-100'}`}>
              DA
            </h1>
          </div>
          
        </div>
      )}

      {/* تمام سلائیڈز کا کنٹینر */}
      {slides.map((slide, i) => {
        const isActive = i === index;
        
        const zoomClass = slide.zoomType === "zoom-in" 
          ? (isActive ? "scale-106 duration-[6000ms]" : "scale-100")
          : (isActive ? "scale-100 duration-[6000ms]" : "scale-106");

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* بیک گراؤنڈ امیج کنٹرول */}
            <div className="w-full h-full overflow-hidden relative">
              <img
                src={slide.image}
                alt="GCDA Event"
                className={`w-full h-full object-cover transition-transform ease-linear ${zoomClass}`}
                style={{
                  objectPosition: 'center 20%', 
                  transformOrigin: 'center center'
                }}
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* ٹیکسٹ اوورلے */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 md:pb-28 px-6 text-center z-20">
              <div 
                className={`max-w-5xl transition-all duration-1000 transform delay-300 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-serif">
                  {slide.title}
                </h1>
                <div className="mt-5 w-24 h-1 bg-[#E9967A] mx-auto rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* بائیں طرف کا بٹن (Left Arrow) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-[#1A7963] text-white rounded-full transition-all duration-300 border border-white/10 z-30 cursor-pointer backdrop-blur-sm group select-none"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* دائیں طرف کا بٹن (Right Arrow) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-[#1A7963] text-white rounded-full transition-all duration-300 border border-white/10 z-30 cursor-pointer backdrop-blur-sm group select-none"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7-7" />
        </svg>
      </button>

      {/* نیچے والے انڈیکیٹر ڈاٹس (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 transition-all duration-500 rounded-full cursor-pointer ${
              index === i ? "w-9 bg-[#E9967A]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;