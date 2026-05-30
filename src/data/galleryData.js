// src/data/galleryData.js

export const galleryData = [
  {
    year: "2026",
    events: [
      {
        id: "2026-annual-seminar",
        title: "GCDA Annual Seminar 2026",
        coverImage: "/src/assets/images/gallaryImages/1.jpeg", // 👈 پاتھ کے شروع میں سلیش لگا دی ہے
        description: "The flagship annual seminar of General Cadre Doctor's Association, focusing on modern healthcare infrastructure, healthcare reforms, and career paths for medical professionals.",
        images: Array.from({ length: 10 }, (_, i) => {
          const imgNum = i + 1;
          return {
            imgId: `2026-as-img-${imgNum}`,
            src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`, // 👈 درست لوکل پاتھ
            title: `Seminar Session Highlight Part ${imgNum}`,
            details: `This comprehensive photograph explicitly documents the key proceedings of Session Part ${imgNum} at the prestigious General Cadre Doctors Association (GCDA) Annual Seminar 2026. The seminar brought together medical officers, administrators, and policy experts under one roof to deliberately converse about modern healthcare infrastructure across the country. 

Throughout this specific event, the senior leadership emphasized strategic pathways for systemic healthcare reforms, actively advocating for safer working environments and equitable promotion structures for general cadre medical officers. Attendees rigorously engaged in workshop modules designed to enhance hospital management efficiency, mitigate workplace burnout, and bridge the operational gaps between rural basic health units and tertiary care institutions. 

Furthermore, detailed statistical analysis regarding patient-to-doctor ratios was formally presented to the health ministry representatives present in the audience. The panel reached a mutual consensus that equipping primary care centers with digital tools and automated supply lines is paramount to alleviating the extreme burden on major city hospitals. This landmark discussion stands as a major testament to GCDA’s unwavering dedication toward elevating the professional standards of medical officers, ensuring that their welfare is prioritized, and ultimately delivering high-quality, continuous healthcare services to every citizen across Pakistan.`
          };
        })
      },
      {
        id: "2026-health-expo",
        title: "National Healthcare Expo 2026",
        coverImage: "/src/assets/images/gallaryImages/2.jpeg",
        description: "An international standard exhibition showcasing advanced medical technology, innovative surgical tools, and digital health breakthroughs in Pakistan.",
        images: Array.from({ length: 10 }, (_, i) => {
          const imgNum = i + 1;
          return {
            imgId: `2026-he-img-${imgNum}`,
            src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`,
            title: `Healthcare Expo Showcase ${imgNum}`,
            details: `A detailed and analytical overview of Exhibition Showcase Segment ${imgNum} captured during the high-profile National Healthcare Expo 2026. This premier international-standard exhibition was officially organized to serve as an interactive launchpad for cutting-edge medical technologies, revolutionary diagnostic devices, and state-of-the-art surgical instrumentation systems within the local healthcare ecosystem. 

General cadre doctors and hospital directors from various districts visited this specific pavilion to interact directly with global biotechnology manufacturers and engineering firms. The primary focus of these intensive discussions centered around cost-effective technology deployment, exploring how community-level clinics can sustainably adopt high-efficiency laboratory machines without exceeding rural budget allocations. 

By demonstrating real-time artificial intelligence integration in imaging techniques and automated screening tools, the expo highlighted the inevitable future of diagnostics. Participants thoroughly evaluated these digital modules to assess how automated triaging can streamline critical patient handling in high-flow emergencies. This exhibit successfully fostered vital public-private partnerships, laying down a highly practical roadmap for modernizing regional operation theaters and ensuring that even remote populations gain immediate access to advanced medical breakthroughs.`
          };
        })
      },
      {
        id: "2026-public-awareness",
        title: "Public Health Awareness Drive 2026",
        coverImage: "/src/assets/images/gallaryImages/3.jpeg",
        description: "A nationwide public campaign led by GCDA doctors to educate local communities on preventive medicine, healthy lifestyles, and early disease detection.",
        images: Array.from({ length: 10 }, (_, i) => {
          const imgNum = i + 1;
          return {
            imgId: `2026-pa-img-${imgNum}`,
            src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`,
            title: `Awareness Campaign Activity ${imgNum}`,
            details: `This evocative photograph beautifully captures the essence of Community Activity ${imgNum} conducted during the extensive, nationwide Public Health Awareness Drive 2026. Recognizing that preventive medicine is the absolute cornerstone of a robust society, the General Cadre Doctors Association mobilized teams of dedicated volunteers to directly engage with local populations in both urban markets and remote rural centers. 

The primary mandate of this phase was to combat the rapidly rising surge of non-communicable metabolic diseases, such as diabetes and hypertension, through proactive education and free lifestyle counseling. Doctors patiently set up temporary health desks to distribute accessible literature written in local languages, perform fundamental screenings, and check baseline body mass indexes. 

Special emphasis was also placed on maternal healthcare, essential infant hygiene practices, and clean water preservation methods to significantly reduce the preventable burden of waterborne epidemics. Through these grassroots seminars, GCDA has successfully bridged the trust gap between communities and local medical units, empowering everyday citizens with actionable knowledge to identify early warning signs of illness, make healthier dietary choices, and actively transition from reactive treatment models to a lifestyle of preventive wellness.`
          };
        })
      }
    ]
  },
  {
    year: "2025",
    events: [
      {
        id: "2025-medical-camp",
        title: "Free Flood Relief Medical Camp 2025",
        coverImage: "/src/assets/images/gallaryImages/4.jpeg",
        description: "Emergency medical relief camps organized by GCDA teams to provide free treatment, medications, and clean water supplies to flood-affected areas.",
        images: Array.from({ length: 10 }, (_, i) => {
          const imgNum = i + 1;
          return {
            imgId: `2025-mc-img-${imgNum}`,
            src: `/src/assets/images/gallaryImages/${imgNum}.jpeg`,
            title: `Relief Camp Medical Service ${imgNum}`,
            details: `An unvarnished, historical documentation of the relentless humanitarian efforts put forth during Emergency Medical Service ${imgNum} inside the flood-devastated regions. Following the catastrophic climate events of 2025, the GCDA swiftly established fully operational, temporary medical camps to deliver urgent healthcare, life-saving pharmaceuticals, and sanitation support directly to displaced populations stranded in remote zones. 

Working under highly volatile weather conditions and severe structural constraints, general cadre medical officers and nursing staff worked tirelessly around the clock, treating thousands of vulnerable families daily for acute waterborne infections, respiratory ailments, and severe malnutrition. Special pediatric triage areas were organized to monitor infants requiring immediate nutritional supplementation and rehydration therapies. 

In addition to rendering clinical treatments, the GCDA teams systematically managed the distribution of clean drinking water tablets and hygiene kits to check the spread of skin diseases and cholera. This selfless deployment exemplifies the true spirit of the medical community, proving that even in the face of absolute infrastructure collapse, the organization remains steadfastly committed to defending public safety, preserving human dignity, and providing a critical lifeline to those who need it most.`
          };
        })
      }
    ]
  }
];