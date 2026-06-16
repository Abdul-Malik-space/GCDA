const makePressClippings = ({ year, eventKey, titlePrefix }) =>
  Array.from({ length: 10 }, (_, i) => {
    const imgNum = i + 1;

    return {
      imgId: `${year}-${eventKey}-press-${imgNum}`,
      src: `/src/assets/images/pressClippingImages/${imgNum}.jpeg`,
      title: `${titlePrefix} ${imgNum}`,
      details:
        "Official GCDA press clipping covering doctors welfare, healthcare service matters, and organizational updates.",
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
      "Important GCDA press clippings, media coverage, welfare issues, and organizational updates.",
    images: makePressClippings({
      year: "2025",
      eventKey: "gcda-press-coverage",
      titlePrefix: "GCDA Press Clipping",
    }),
  },
  {
    id: "2025-doctors-welfare-news",
    title: "Doctors Welfare News 2025",
    coverImage: "/src/assets/images/pressClippingImages/image1.jpeg",
    description:
      "Press coverage focused on doctors welfare, service matters, and GCDA professional support.",
    images: makePressClippings({
      year: "2025",
      eventKey: "doctors-welfare-news",
      titlePrefix: "Doctors Welfare News Clipping",
    }),
  },
];

const year2026Events = [
  {
    id: "2026-gcda-media-highlights",
    title: "GCDA Media Highlights 2026",
    coverImage: "/src/assets/images/pressClippingImages/3.jpeg",
    description:
      "GCDA media highlights covering official statements, healthcare matters, and updates.",
    images: makePressClippings({
      year: "2026",
      eventKey: "gcda-media-highlights",
      titlePrefix: "GCDA Media Highlight",
    }),
  },
  {
    id: "2026-healthcare-reform-coverage",
    title: "Healthcare Reform Coverage 2026",
    coverImage: "/src/assets/images/pressClippingImages/4.jpeg",
    description:
      "Press clippings related to healthcare reforms, policy dialogue, and GCDA’s role.",
    images: makePressClippings({
      year: "2026",
      eventKey: "healthcare-reform-coverage",
      titlePrefix: "Healthcare Reform Press Clipping",
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