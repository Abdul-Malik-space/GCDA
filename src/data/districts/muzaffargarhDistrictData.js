const sharedProfileDetails = {
  qualification:
    "MBBS, DCH, MPH, MBA, LLB, PG Cert in Human Resource Management in Health (QM University UK)",

  positionHeld: [
    "President GCDA",
    "Rx Medical Superintendent, Said Mitha Hospital, Lahore",
    "Ex. Medical Superintendent, Shahdra Teaching Hospital, Lahore",
    "Ex-General Secretary, PMA Punjab",
    "Ex Editor, The Medical Tribune",
  ],

  currentPosting: "Sir Ganga Ram Hospital, Lahore",

  personalCareerInterests: [
    "Dr Masood Akhtar Sheikh is President GCDA and senior medical professional with extensive experience in healthcare administration and public health leadership.",

    "Dedicated physician serving in Muzaffargarh with focus on healthcare improvement and hospital management.",
  ],

  professionalSummary:
    "Senior medical professional with expertise in healthcare administration, clinical services and hospital management.",

  education: [
    "MBBS – Basic Medical Qualification",
    "FCPS (Medicine) – CPSP Pakistan",
    "MPH – Public Health Training",
  ],

  keyAchievements: {
    educational: [
      "Conducted medical training workshops",
      "Supervised junior doctors training programs",
    ],

    administrative: [
      "Improved hospital emergency systems",
      "Introduced patient record digitization",
    ],

    sociopolitical: [
      "Strengthened doctors welfare initiatives",
      "Improved district health coordination",
    ],
  },

  previousOfficialPositions: [
    {
      officialBody: "Health Department Punjab",
      post: "Senior Medical Officer",
      duration: "2018-2023",
    },
  ],

  permanentContact: "Muzaffargarh City, Punjab",

  presentContact: "DHQ Hospital, Muzaffargarh",

  workPhone: "066-XXXXXXX",
};

const createProfile = (name, imageNumber, shortDescription) => ({
  id: name
    .toLowerCase()
    .replace("dr.", "dr")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),

  name,

  image: `/assets/images/districtBody/muzaffargarh-district/image${imageNumber}.jpg`,

  shortDescription:
    shortDescription ||
    "Senior medical professional associated with GCDA contributing to healthcare services",

  ...sharedProfileDetails,
});

const muzaffargarhDistrictData = {
  title: "Muzaffargarh District Body",
  subtitle: "General Cadre Doctors Association",

  heroImage: "/assets/images/districtBody/muzaffargarh-district/hero.jpg",

  profiles: [
    createProfile(
      "Dr Masood Akhtar Sheikh",
      1,
      "President GCDA with leadership in healthcare administration"
    ),

    createProfile("Dr Muzaffargarh Member 02", 2),
    createProfile("Dr Muzaffargarh Member 03", 3),
    createProfile("Dr Muzaffargarh Member 04", 4),
    createProfile("Dr Muzaffargarh Member 05", 5),
    createProfile("Dr Muzaffargarh Member 06", 6),
    createProfile("Dr Muzaffargarh Member 07", 7),
    createProfile("Dr Muzaffargarh Member 08", 8),
    createProfile("Dr Muzaffargarh Member 09", 9),
    createProfile("Dr Muzaffargarh Member 10", 10),
    createProfile("Dr Muzaffargarh Member 11", 11),
    createProfile("Dr Muzaffargarh Member 12", 12),
    createProfile("Dr Muzaffargarh Member 13", 13),
    createProfile("Dr Muzaffargarh Member 14", 14),
    createProfile("Dr Muzaffargarh Member 15", 15),
  ],
};

export default muzaffargarhDistrictData;