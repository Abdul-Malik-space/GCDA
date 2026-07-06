const galleryImages = import.meta.glob(
  "../assets/images/gallaryImages/**/*.{jpeg,jpg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const getGalleryImage = (year, imgNum) => {
  const possiblePaths = [
    `../assets/images/gallaryImages/${year}/${imgNum}.jpeg`,
    `../assets/images/gallaryImages/${year}/${imgNum}.jpg`,
    `../assets/images/gallaryImages/${year}/${imgNum}.png`,
    `../assets/images/gallaryImages/${year}/${imgNum}.webp`,
  ];

  const foundPath = possiblePaths.find((path) => galleryImages[path]);

  return foundPath ? galleryImages[foundPath] : "";
};

const makeImages = ({ year, eventKey, titlePrefix, totalImages = 10 }) =>
  Array.from({ length: totalImages }, (_, i) => {
    const imgNum = i + 1;

    return {
      imgId: `${year}-${eventKey}-img-${imgNum}`,
      src: getGalleryImage(year, imgNum),
      title: `${titlePrefix} ${imgNum}`,
      details:
        "GCDA event photo highlighting doctors welfare, healthcare discussion, and organizational activities.",
    };
  });

const getEmptyYearData = (year) => ({
  year: String(year),
  events: [],
});

const year2025Events = [
  {
    id: "2025-medical-camp",
    title: "Free Flood Relief Medical Camp 2025",
    coverImage: getGalleryImage("2025", 1),
    description:
      "Emergency medical relief camp organized by GCDA teams for flood-affected areas.",
    images: makeImages({
      year: "2025",
      eventKey: "medical-camp",
      titlePrefix: "Relief Camp Medical Service",
      totalImages: 10,
    }),
  },
];

const year2026Events = [
  {
    id: "2026-annual-seminar",
    title: "GCDA Annual Seminar 2026",
    coverImage: getGalleryImage("2026", 1),
    description:
      "Annual GCDA seminar focused on healthcare reforms, infrastructure, and doctors career matters.",
    images: makeImages({
      year: "2026",
      eventKey: "annual-seminar",
      titlePrefix: "Seminar Session Highlight Part",
      totalImages: 10,
    }),
  },
  {
    id: "2026-health-expo",
    title: "National Healthcare Expo 2026",
    coverImage: getGalleryImage("2026", 2),
    description:
      "Healthcare expo showcasing medical technology, digital health, and professional collaboration.",
    images: makeImages({
      year: "2026",
      eventKey: "health-expo",
      titlePrefix: "Healthcare Expo Showcase",
      totalImages: 10,
    }),
  },
  {
    id: "2026-public-awareness",
    title: "Public Health Awareness Drive 2026",
    coverImage: getGalleryImage("2026", 3),
    description:
      "Public health awareness campaign led by GCDA doctors for local communities.",
    images: makeImages({
      year: "2026",
      eventKey: "public-awareness",
      titlePrefix: "Awareness Campaign Activity",
      totalImages: 10,
    }),
  },
];

export const galleryData = [
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