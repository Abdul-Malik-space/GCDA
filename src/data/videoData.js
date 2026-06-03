const videoOne = "https://youtu.be/RBZMO0HnH80?si=BTiaxq9m0jdDDN0b";
const videoTwo = "https://youtu.be/rC-JeKW3Pxg?si=ub_OW3Prgcr124Ov";

const getYearData = (year) => ({
  year: String(year),
  events: [],
});

const makeVideos = (seminarPrefix) => [
  {
    id: 1,
    title: `${seminarPrefix} - Opening Session`,
    speaker: "GCDA Leadership",
    description:
      "Opening remarks and introductory address of the seminar. This session highlights the purpose of the event and the core agenda discussed by GCDA leadership.",
    url: videoOne,
  },
  {
    id: 2,
    title: `${seminarPrefix} - Keynote Address`,
    speaker: "Guest Speaker",
    description:
      "Main keynote talk focused on doctors' rights, health policy priorities, and the professional responsibilities of medical leadership.",
    url: videoTwo,
  },
  {
    id: 3,
    title: `${seminarPrefix} - Policy Discussion`,
    speaker: "Policy Panel",
    description:
      "Panel discussion on service structure, administrative reforms, and the role of doctors in strengthening public healthcare systems.",
    url: videoOne,
  },
  {
    id: 4,
    title: `${seminarPrefix} - Legal Affairs Briefing`,
    speaker: "Legal Committee",
    description:
      "A focused briefing on legal protection, service rules, departmental matters, and institutional support for GCDA members.",
    url: videoTwo,
  },
  {
    id: 5,
    title: `${seminarPrefix} - Welfare Session`,
    speaker: "Welfare Committee",
    description:
      "Discussion on doctors' welfare, hardship support, membership facilitation, and coordinated assistance through GCDA committees.",
    url: videoOne,
  },
  {
    id: 6,
    title: `${seminarPrefix} - Media Talk`,
    speaker: "Media Committee",
    description:
      "Media interaction covering organizational messaging, public awareness, communication discipline, and official GCDA updates.",
    url: videoTwo,
  },
  {
    id: 7,
    title: `${seminarPrefix} - Training Session`,
    speaker: "Training Committee",
    description:
      "Professional development session focused on capacity building, leadership skills, and training needs of doctors.",
    url: videoOne,
  },
  {
    id: 8,
    title: `${seminarPrefix} - Committee Reports`,
    speaker: "Committee Representatives",
    description:
      "Committee representatives share updates, progress reports, and future plans for organizational work and member support.",
    url: videoTwo,
  },
  {
    id: 9,
    title: `${seminarPrefix} - Member Interaction`,
    speaker: "GCDA Members",
    description:
      "Interactive segment where members share feedback, regional issues, and suggestions for improving GCDA coordination.",
    url: videoOne,
  },
  {
    id: 10,
    title: `${seminarPrefix} - Closing Remarks`,
    speaker: "GCDA Leadership",
    description:
      "Final remarks summarizing seminar outcomes, future action points, and the collective direction of GCDA leadership.",
    url: videoTwo,
  },
];

export const videoData = [
  ...Array.from({ length: 20 }, (_, index) => {
    const year = 2011 + index;

    if (year !== 2025) {
      return getYearData(year);
    }

    return {
      year: "2025",
      events: [
        {
          id: "national-seminar-youm-e-takbeer-2025",
          title: "National Seminar on Youm-e-Takbeer",
          date: "15-05-2025",
          location: "AIMC Lahore",
          description:
            "A national seminar organized by GCDA at AIMC Lahore, covering leadership addresses, policy discussion, doctors' welfare, and organizational priorities.",
          frontVideo: videoOne,
          coverImage: "https://img.youtube.com/vi/RBZMO0HnH80/maxresdefault.jpg",
          videos: makeVideos("National Seminar on Youm-e-Takbeer"),
        },
        {
          id: "gcda-health-policy-seminar-2025",
          title: "GCDA Health Policy Seminar",
          date: "2025",
          location: "Lahore, Pakistan",
          description:
            "A policy-focused seminar discussing healthcare governance, service structure, doctors' rights, and future reforms for public sector doctors.",
          frontVideo: videoTwo,
          coverImage: "https://img.youtube.com/vi/rC-JeKW3Pxg/maxresdefault.jpg",
          videos: makeVideos("GCDA Health Policy Seminar"),
        },
        {
          id: "doctors-welfare-seminar-2025",
          title: "Doctors Welfare Seminar",
          date: "2025",
          location: "Punjab, Pakistan",
          description:
            "A welfare seminar focused on hardship support, legal facilitation, member assistance, and stronger welfare systems for GCDA members.",
          frontVideo: videoOne,
          coverImage: "https://img.youtube.com/vi/RBZMO0HnH80/maxresdefault.jpg",
          videos: makeVideos("Doctors Welfare Seminar"),
        },
        {
          id: "medical-leadership-seminar-2025",
          title: "Medical Leadership Seminar",
          date: "2025",
          location: "Pakistan",
          description:
            "A leadership development seminar featuring sessions on communication, committee performance, coordination, and organizational discipline.",
          frontVideo: videoTwo,
          coverImage: "https://img.youtube.com/vi/rC-JeKW3Pxg/maxresdefault.jpg",
          videos: makeVideos("Medical Leadership Seminar"),
        },
      ],
    };
  }),
];