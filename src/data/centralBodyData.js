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
    "Dr Masood Akhtar Sheikh is President, General Cadre Doctors Association. He is a senior medical professional with experience in medical administration, public health, health human resource management, medico-legal understanding, and professional leadership.",

    "Malik Muhammad Ahmad Khan stands as a distinguished figure in national politics and law, boasting a rich tapestry of experience spanning over two decades. As the incumbent Speaker of the Assembly, he brings a wealth of knowledge and expertise to his role. Hailing from district Kasur, Mr. Khan has dutifully represented his constituency in the Assembly for an impressive fourth consecutive term, a testament to the unwavering trust and confidence of his constituents. His journey into public service finds its roots in a family legacy steeped in dedication and commitment to the nation. Following in the footsteps of his esteemed father, Malik Muhammad Ali, a revered parliamentarian in his own right who served as both a member of the Provincial Assembly and as the Deputy Chairman of the Senate, Khan's ascent to prominence is marked by a profound sense of duty and service to the people.",
  ],

  professionalSummary:
    "Malik Muhammad Ahmad Khan is a seasoned legislator, legal expert, and governance reformist, currently serving as the Speaker of the Punjab Assembly since February 2024. With a distinguished career spanning over two decades, he has played a pivotal role in modernizing legislative procedures, enhancing transparency, and fostering inclusive governance. His leadership is marked by institutional independence, bipartisan cooperation, and a commitment to strengthening democratic governance.",

  education: [
    "LL.B. (Hons.) – University of Buckingham, UK (1998)",
    "Government College, Lahore – Pre-Law Studies",
    "Aitchison College, Lahore – Secondary & Higher Secondary Education",
    "Practicing Lawyer – Specializing in constitutional law, governance frameworks, and public policy",
  ],

  keyAchievements: {
    educational: [
      "Led the historic revision of the Assembly’s Rules of Procedure, strengthening executive oversight.",
      "Introduced a Code of Conduct, enforcing ethical standards and decorum.",
      "Strengthened budgetary oversight, reinforcing financial scrutiny by the Assembly.",
    ],

    administrative: [
      "Mandated live-streaming of Assembly sessions, ensuring public accessibility.",
      "Digitized Assembly records, improving access to legislative documentation.",
      "Opened committee proceedings for expert consultations, fostering participatory democracy.",
    ],

    sociopolitical: [
      "Secured unanimous approval for parliamentary rule reforms, reinforcing cross-party collaboration.",
      "Strengthened working relationships between government and opposition, ensuring inclusive decision-making.",
      "Institutionalized independent parliamentary governance, reducing executive interference.",
    ],
  },

  previousOfficialPositions: [
    {
      officialBody: "District Council",
      post: "Chairman",
      duration: "1987-1993",
    },
    {
      officialBody: "District Council",
      post: "Vice Chairman",
      duration: "1983-1987",
    },
    {
      officialBody: "Provincial Assembly of the Punjab",
      post: "MPA",
      duration: "1993-1996",
    },
    {
      officialBody: "Provincial Assembly of the Punjab",
      post: "Minister for Live Stock & Dairy Development",
      duration: "1997-1999",
    },
    {
      officialBody: "Provincial Assembly of the Punjab",
      post: "Speaker",
      duration: "2008-2018",
    },
  ],

  permanentContact: "Khai Hithar P.O. Same, Tehsil & District Kasur",
  presentContact: "3 Upper Mall, Lahore",
  workPhone: "042-99200311 (Off), 042-99200312 (Fax)",
};

const createProfile = (
  name,
  imageNumber,
  role,
  region,
  shortDescription,
  extension = "jpeg"
) => ({
  id: name
    .toLowerCase()
    .replace("dr.", "dr")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),

  name,
  role,
  region,

  image: `/assets/images/about/central-body/image${imageNumber}.${extension}`,

  shortDescription:
    shortDescription ||
    "Senior medical professional associated with GCDA, contributing to doctors welfare, service matters, professional coordination, and healthcare administration.",

  ...sharedProfileDetails,
});

const centralBodyData = {
  title: "Central Executive Body",
  subtitle: "General Cadre Doctors Association",

  heroImage: "/assets/images/about/central-body/hero.jpg",

  profiles: [
    createProfile(
      "Dr Masood Akhtar Sheikh",
      1,
      "Chief Patron / Central President",
      "Central HQ",
      "Chief Patron and Central President associated with GCDA, contributing to doctors welfare, medical leadership, service matters, and healthcare administration."
    ),

    createProfile("Dr Muhammad Arif", 2, "Central Patron", "Multan"),
    createProfile("Dr Salman Kazmi", 3, "Central Patron", "Lahore"),
    createProfile("Dr Shahzad Ali", 4, "Central Patron", "Faisalabad"),
    createProfile(
      "Dr Asad Shahzad",
      5,
      "Central Chairman Executive Committee",
      "Rawalpindi"
    ),
    createProfile("Dr Naveed Iqbal", 6, "Central Executive Member", "Lahore"),

    createProfile("Dr Rana Rafique", 7, "Senior Vice President", "Gujranwala"),
    createProfile("Dr Amjad Khan", 8, "Vice President Punjab", "Sahiwal"),
    createProfile("Dr Tariq Mahmood", 9, "Vice President Sindh", "Karachi"),
    createProfile(
      "Dr Ayesha Siddiqua",
      10,
      "Vice President Ladies Wing",
      "Lahore"
    ),
    createProfile("Dr Bilal Ahmed", 11, "Joint Secretary", "Sialkot"),

    createProfile("Dr Zainab Raza", 12, "Finance Secretary", "Lahore"),
    createProfile("Dr Hamza Ali", 13, "Information Secretary", "Bahawalpur"),
    createProfile(
      "Dr Maryam Khan",
      14,
      "Secretary Legal Affairs",
      "Islamabad"
    ),
    createProfile("Dr Usman Yusuf", 15, "Executive Member", "Sargodha"),
    createProfile("Dr Fatima Sheikh", 16, "Executive Member", "Jhang"),

    createProfile("Dr Omer Farooq", 17, "Executive Member", "Sheikhupura"),
    createProfile("Dr Sana Malik", 18, "Executive Member", "Kasur"),
    createProfile("Dr Kashif Raza", 19, "Co-opted Member", "Okara"),
    createProfile("Dr Hina Batool", 20, "Co-opted Member", "Chiniot"),
    createProfile("Dr Faisal Javed", 21, "Co-opted Member", "Mianwali"),
  ],
};

export default centralBodyData;