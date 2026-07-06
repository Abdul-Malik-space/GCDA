const basePath = "/assets/pdfs/service-matter/service-case-laws";

const createDocuments = (courtFolder, sectionFolder, titlePrefix) =>
  Array.from({ length: 10 }, (_, index) => ({
    title: `${titlePrefix} ${index + 1}`,
    file: `${basePath}/${courtFolder}/${sectionFolder}/pdf-${index + 1}.pdf`,
  }));

const createCourtSections = (courtFolder, courtTitle) => [
  {
    id: "appointment-cases",
    title: "Appointment Cases",
    description: `${courtTitle} appointment related case laws and documents.`,
    documents: createDocuments(
      courtFolder,
      "appointment-cases",
      `${courtTitle} Appointment Case`
    ),
  },
  {
    id: "transfer-cases",
    title: "Transfer Cases",
    description: `${courtTitle} transfer and posting related case laws.`,
    documents: createDocuments(
      courtFolder,
      "transfer-cases",
      `${courtTitle} Transfer Case`
    ),
  },
  {
    id: "promotion-cases",
    title: "Promotion Cases",
    description: `${courtTitle} promotion related case laws and documents.`,
    documents: createDocuments(
      courtFolder,
      "promotion-cases",
      `${courtTitle} Promotion Case`
    ),
  },
  {
    id: "seniority-cases",
    title: "Seniority Cases",
    description: `${courtTitle} seniority related case laws and documents.`,
    documents: createDocuments(
      courtFolder,
      "seniority-cases",
      `${courtTitle} Seniority Case`
    ),
  },
  {
    id: "disciplinary-cases",
    title: "Disciplinary Cases",
    description: `${courtTitle} disciplinary related case laws and documents.`,
    documents: createDocuments(
      courtFolder,
      "disciplinary-cases",
      `${courtTitle} Disciplinary Case`
    ),
  },
];

const serviceCaseLawsData = {
  title: "Service Case Laws",
  subtitle: "General Cadre Doctors Association",

  courts: [
    {
      id: "session-court",
      title: "Session Court",
      description: "View Session Court service case law sections.",
      sections: createCourtSections("session-court", "Session Court"),
    },
    {
      id: "high-court",
      title: "High Court",
      description: "View High Court service case law sections.",
      sections: createCourtSections("high-court", "High Court"),
    },
    {
      id: "service-tribunal",
      title: "Service Tribunal",
      description: "View Service Tribunal service case law sections.",
      sections: createCourtSections("service-tribunal", "Service Tribunal"),
    },
    {
      id: "supreme-court",
      title: "Supreme Court",
      description: "View Supreme Court service case law sections.",
      sections: createCourtSections("supreme-court", "Supreme Court"),
    },
  ],
};

export default serviceCaseLawsData;