const videoOne = "https://youtu.be/RBZMO0HnH80?si=BTiaxq9m0jdDDN0b";
const videoTwo = "https://youtu.be/rC-JeKW3Pxg?si=ub_OW3Prgcr124Ov";

const makeVideos = (prefix) => [
  {
    id: 1,
    title: `${prefix} - Introduction`,
    speaker: "Service Matter Team",
    description:
      "Introductory session about service matters, basic rules, official procedures, and important instructions for members.",
    url: videoOne,
  },
  {
    id: 2,
    title: `${prefix} - Service Rules`,
    speaker: "Administrative Officer",
    description:
      "Detailed explanation of service rules, departmental procedures, documentation, and official requirements.",
    url: videoTwo,
  },
  {
    id: 3,
    title: `${prefix} - Departmental Process`,
    speaker: "Service Matter Committee",
    description:
      "Session about departmental process, application handling, approvals, and proper record keeping.",
    url: videoOne,
  },
  {
    id: 4,
    title: `${prefix} - Legal Guidance`,
    speaker: "Legal Committee",
    description:
      "Briefing on legal guidance, service protection, departmental rights, and support for official matters.",
    url: videoTwo,
  },
  {
    id: 5,
    title: `${prefix} - Closing Session`,
    speaker: "GCDA Leadership",
    description:
      "Closing remarks with important service matter points, future planning, and official guidance for members.",
    url: videoOne,
  },
];

export const serviceMatterVideoData = [
  {
    id: "service-matter-training-videos",
    title: "Service Matter Training Videos",
    date: "2025",
    location: "Punjab, Pakistan",
    description:
      "A complete video album covering service rules, departmental matters, official procedures, legal guidance, and member support.",
    frontVideo: videoOne,
    coverImage: "https://img.youtube.com/vi/RBZMO0HnH80/maxresdefault.jpg",
    videos: makeVideos("Service Matter Training"),
  },
  {
    id: "service-rules-guidance-videos",
    title: "Service Rules Guidance Videos",
    date: "2025",
    location: "Pakistan",
    description:
      "Guidance-focused videos covering service structure, official rules, departmental process, approvals, and documentation.",
    frontVideo: videoTwo,
    coverImage: "https://img.youtube.com/vi/rC-JeKW3Pxg/maxresdefault.jpg",
    videos: makeVideos("Service Rules Guidance"),
  },
];