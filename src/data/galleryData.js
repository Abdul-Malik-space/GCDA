const makeImages = ({ year, eventKey, titlePrefix }) =>
  Array.from({ length: 10 }, (_, i) => {
    const imgNum = i + 1;

    return {
      imgId: `${year}-${eventKey}-img-${imgNum}`,
      src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`,
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
    coverImage: "/src/assets/images/gallaryImages/4.jpeg",
    description:
      "Emergency medical relief camp organized by GCDA teams for flood-affected areas.",
    images: makeImages({
      year: "2025",
      eventKey: "medical-camp",
      titlePrefix: "Relief Camp Medical Service",
    }),
  },
];

const year2026Events = [
  {
    id: "2026-annual-seminar",
    title: "GCDA Annual Seminar 2026",
    coverImage: "/src/assets/images/gallaryImages/1.jpeg",
    description:
      "Annual GCDA seminar focused on healthcare reforms, infrastructure, and doctors career matters.",
    images: makeImages({
      year: "2026",
      eventKey: "annual-seminar",
      titlePrefix: "Seminar Session Highlight Part",
    }),
  },
  {
    id: "2026-health-expo",
    title: "National Healthcare Expo 2026",
    coverImage: "/src/assets/images/gallaryImages/2.jpeg",
    description:
      "Healthcare expo showcasing medical technology, digital health, and professional collaboration.",
    images: makeImages({
      year: "2026",
      eventKey: "health-expo",
      titlePrefix: "Healthcare Expo Showcase",
    }),
  },
  {
    id: "2026-public-awareness",
    title: "Public Health Awareness Drive 2026",
    coverImage: "/src/assets/images/gallaryImages/3.jpeg",
    description:
      "Public health awareness campaign led by GCDA doctors for local communities.",
    images: makeImages({
      year: "2026",
      eventKey: "public-awareness",
      titlePrefix: "Awareness Campaign Activity",
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