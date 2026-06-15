// src/data/pressClippingData.js

const makePressClippings = ({ year, eventKey, titlePrefix, detailsPrefix }) =>
  Array.from({ length: 10 }, (_, i) => {
    const imgNum = i + 1;

    return {
      imgId: `${year}-${eventKey}-press-${imgNum}`,
      src: `/src/assets/images/pressClippingImages/${imgNum}.jpeg`,
      title: `${titlePrefix} ${imgNum}`,
      details: `${detailsPrefix} ${imgNum} published regarding the important activities, official statements, public engagement, professional initiatives, and organizational work of the General Cadre Doctors Association (GCDA).

This press clipping highlights key media coverage related to doctors' welfare, healthcare service improvement, administrative reforms, professional unity, and public health awareness. It reflects the voice of GCDA in print and digital media and documents the role of the association in addressing important concerns of general cadre medical officers.

The coverage also shows GCDA’s continuous commitment to institutional progress, transparent communication, member support, and meaningful dialogue with relevant authorities. This record is preserved as part of the official press clipping archive for awareness, documentation, and historical reference.`,
    };
  });

const getEmptyYearData = (year) => ({
  year: String(year),
  events: [],
});

const year2025Events = [
  {
    id: "2025-gcda-press-coverage",
    title: "GCDA Press Coverage 2025",
    coverImage: "/src/assets/images/pressClippingImages/1.jpeg",
    description:
      "A collection of important press clippings covering GCDA activities, media statements, doctors' welfare issues, healthcare reforms, and organizational updates during 2025.",
    images: makePressClippings({
      year: "2025",
      eventKey: "gcda-press-coverage",
      titlePrefix: "GCDA Press Clipping",
      detailsPrefix:
        "This official press clipping documents media coverage item",
    }),
  },
  {
    id: "2025-doctors-welfare-news",
    title: "Doctors Welfare News 2025",
    coverImage: "/src/assets/images/pressClippingImages/2.jpeg",
    description:
      "Press coverage focused on doctors' welfare, service matters, workplace concerns, and GCDA’s efforts for professional support and institutional reforms.",
    images: makePressClippings({
      year: "2025",
      eventKey: "doctors-welfare-news",
      titlePrefix: "Doctors Welfare News Clipping",
      detailsPrefix:
        "This detailed newspaper clipping highlights doctors welfare news item",
    }),
  },
];

const year2026Events = [
  {
    id: "2026-gcda-media-highlights",
    title: "GCDA Media Highlights 2026",
    coverImage: "/src/assets/images/pressClippingImages/3.jpeg",
    description:
      "Important media highlights from 2026 covering GCDA announcements, official statements, healthcare service matters, and professional activities.",
    images: makePressClippings({
      year: "2026",
      eventKey: "gcda-media-highlights",
      titlePrefix: "GCDA Media Highlight",
      detailsPrefix:
        "This media highlight preserves an important press clipping item",
    }),
  },
  {
    id: "2026-healthcare-reform-coverage",
    title: "Healthcare Reform Coverage 2026",
    coverImage: "/src/assets/images/pressClippingImages/4.jpeg",
    description:
      "A collection of press clippings related to healthcare reforms, policy dialogue, administrative improvement, and GCDA’s role in public health discussions.",
    images: makePressClippings({
      year: "2026",
      eventKey: "healthcare-reform-coverage",
      titlePrefix: "Healthcare Reform Press Clipping",
      detailsPrefix:
        "This clipping records healthcare reform related media coverage item",
    }),
  },
];

export const pressClippingData = [
  ...Array.from({ length: 20 }, (_, index) => {
    const year = 2011 + index;

    if (year === 2025) {
      return {
        year: "2025",
        events: year2025Events,
      };
    }

    if (year === 2026) {
      return {
        year: "2026",
        events: year2026Events,
      };
    }

    return getEmptyYearData(year);
  }),
];