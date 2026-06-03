// src/data/galleryData.js

const makeImages = ({ year, eventKey, titlePrefix, detailsPrefix }) =>
  Array.from({ length: 10 }, (_, i) => {
    const imgNum = i + 1;

    return {
      imgId: `${year}-${eventKey}-img-${imgNum}`,
      src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`,
      title: `${titlePrefix} ${imgNum}`,
      details: `${detailsPrefix} ${imgNum} at the prestigious General Cadre Doctors Association (GCDA) event. The activity brought together medical officers, administrators, senior doctors, and policy experts to discuss important matters related to healthcare service delivery, professional development, and organizational coordination.

Throughout this specific session, GCDA leadership emphasized practical reforms, better healthcare management, safer working environments, and stronger welfare structures for general cadre medical officers. Participants actively engaged in discussions focused on improving hospital administration, supporting doctors in peripheral areas, and strengthening professional unity across different regions.

This photograph represents an important moment from the event and reflects GCDA’s commitment to doctors' welfare, institutional progress, public health awareness, and meaningful professional engagement. The session also highlighted the importance of teamwork, policy dialogue, and continuous collaboration for improving healthcare services across Pakistan.`,
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
      "Emergency medical relief camps organized by GCDA teams to provide free treatment, medications, and clean water supplies to flood-affected areas.",
    images: makeImages({
      year: "2025",
      eventKey: "medical-camp",
      titlePrefix: "Relief Camp Medical Service",
      detailsPrefix:
        "An unvarnished historical documentation of the humanitarian efforts captured during Emergency Medical Service",
    }),
  },
];

const year2026Events = [
  {
    id: "2026-annual-seminar",
    title: "GCDA Annual Seminar 2026",
    coverImage: "/src/assets/images/gallaryImages/1.jpeg",
    description:
      "The flagship annual seminar of General Cadre Doctor's Association, focusing on modern healthcare infrastructure, healthcare reforms, and career paths for medical professionals.",
    images: makeImages({
      year: "2026",
      eventKey: "annual-seminar",
      titlePrefix: "Seminar Session Highlight Part",
      detailsPrefix:
        "This comprehensive photograph explicitly documents the key proceedings of Session Part",
    }),
  },
  {
    id: "2026-health-expo",
    title: "National Healthcare Expo 2026",
    coverImage: "/src/assets/images/gallaryImages/2.jpeg",
    description:
      "An international standard exhibition showcasing advanced medical technology, innovative surgical tools, and digital health breakthroughs in Pakistan.",
    images: makeImages({
      year: "2026",
      eventKey: "health-expo",
      titlePrefix: "Healthcare Expo Showcase",
      detailsPrefix:
        "A detailed and analytical overview of Exhibition Showcase Segment",
    }),
  },
  {
    id: "2026-public-awareness",
    title: "Public Health Awareness Drive 2026",
    coverImage: "/src/assets/images/gallaryImages/3.jpeg",
    description:
      "A nationwide public campaign led by GCDA doctors to educate local communities on preventive medicine, healthy lifestyles, and early disease detection.",
    images: makeImages({
      year: "2026",
      eventKey: "public-awareness",
      titlePrefix: "Awareness Campaign Activity",
      detailsPrefix:
        "This evocative photograph beautifully captures the essence of Community Activity",
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