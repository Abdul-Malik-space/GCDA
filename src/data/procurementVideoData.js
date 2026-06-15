const videoOne = "https://youtu.be/RBZMO0HnH80?si=BTiaxq9m0jdDDN0b";
const videoTwo = "https://youtu.be/rC-JeKW3Pxg?si=ub_OW3Prgcr124Ov";

const makeVideos = (prefix) => [
  {
    id: 1,
    title: `${prefix} - Introduction`,
    speaker: "Procurement Team",
    description:
      "Introductory session about procurement process, basic rules, and important official guidelines.",
    url: videoOne,
  },
  {
    id: 2,
    title: `${prefix} - Tender Process`,
    speaker: "Procurement Officer",
    description:
      "Detailed explanation of tender process, documentation, approvals, and official requirements.",
    url: videoTwo,
  },
  {
    id: 3,
    title: `${prefix} - Bid Evaluation`,
    speaker: "Evaluation Committee",
    description:
      "Session about bid evaluation, technical review, financial comparison, and transparent selection process.",
    url: videoOne,
  },
  {
    id: 4,
    title: `${prefix} - Purchase Rules`,
    speaker: "Admin Department",
    description:
      "Briefing on purchase rules, procurement policy, compliance, and record keeping.",
    url: videoTwo,
  },
  {
    id: 5,
    title: `${prefix} - Closing Session`,
    speaker: "Procurement Leadership",
    description:
      "Closing remarks with important procurement points, future planning, and official instructions.",
    url: videoOne,
  },
];

export const procurementVideoData = [
  {
    id: "procurement-training-videos",
    title: "Procurement Training Videos",
    date: "2025",
    location: "Punjab, Pakistan",
    description:
      "A complete video album covering procurement training, tender process, purchase rules, bid evaluation, and official procurement guidelines.",
    frontVideo: videoOne,
    coverImage: "https://img.youtube.com/vi/RBZMO0HnH80/maxresdefault.jpg",
    videos: makeVideos("Procurement Training"),
  },
  {
    id: "procurement-policy-videos",
    title: "Procurement Policy Videos",
    date: "2025",
    location: "Pakistan",
    description:
      "Policy-focused procurement videos covering rules, compliance, approvals, and official documentation.",
    frontVideo: videoTwo,
    coverImage: "https://img.youtube.com/vi/rC-JeKW3Pxg/maxresdefault.jpg",
    videos: makeVideos("Procurement Policy"),
  },
];