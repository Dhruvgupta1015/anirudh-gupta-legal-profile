/**
 * Structured professional data for Anirudh Gupta's Legal Dossier
 * Source: Verified CV (Anirudh Gupta (CV).pdf) + confirmed client brief
 * All facts verified against source audit — no invented data
 */

export const profile = {
  name: { first: 'Anirudh', last: 'Gupta' },
  title: 'Enrolled Advocate · Legal Researcher',
  barCouncil: 'Enrolled Advocate with the State Bar Council of Madhya Pradesh',
  tagline: 'Research with rigour.\nAdvocate with purpose.',
  email: 'anirudhgupta756@gmail.com',
  phone: '+91-8871668677',
  linkedin: 'https://www.linkedin.com/in/anirudhji',
  linkedinDisplay: 'linkedin.com/in/anirudhji',
  cvPath: '/assets/documents/Anirudh-Gupta-CV.pdf',
  portraitPath: '/assets/images/anirudh-portrait.jpeg',
  brandStatement: 'A legal career grounded in rigorous analysis, principled advocacy, problem-solving, integrity, and the pursuit of justice.',
  professionalDirection: {
    primary: ['Litigation', 'Judiciary', 'Academic Legal Research'],
    values: ['Excellence', 'Integrity', 'Rigorous Legal Analysis', 'Advocacy', 'Problem-Solving', 'Pursuit of Justice']
  }
};

export const education = [
  {
    institution: 'Prestige Institute of Management & Research, Gwalior',
    degree: 'BBA.LL.B (Hons)',
    period: '2021–2026',
    result: 'SGPA: 8.0'
  },
  {
    institution: 'Neiil World School, Morena, MP',
    degree: 'Higher Senior Secondary (Class XII)',
    board: 'CBSE',
    period: '2021',
    result: '75%'
  }
];

export const experiences = [
  {
    id: 1,
    organisation: 'Police Station, Bahodapur',
    period: 'Sept 2022 – Oct 2022',
    year: 2022,
    type: 'in-person',
    category: 'criminal-justice',
    categoryLabel: 'Criminal Justice',
    yearTheme: 'Criminal Justice at the Grassroots',
    details: [
      'Assisted in the documentation and filing of FIRs and charge sheets.',
      'Observed criminal investigation procedures and police interrogation techniques.',
      'Gained practical exposure to the functioning of the criminal justice system at the grassroots level.',
      'Learned about coordination between police authorities, legal counsel in ongoing cases.'
    ]
  },
  {
    id: 2,
    organisation: 'District Legal Services Authority (DLSA)',
    period: 'Aug 2023',
    year: 2023,
    type: 'in-person',
    category: 'public-interest',
    categoryLabel: 'Public Interest & Legal Aid',
    yearTheme: 'Legal Aid & Access to Justice',
    details: [
      'Assisted in providing free legal aid and awareness to underprivileged and marginalized communities.',
      'Observed court proceedings and Lok Adalats to understand the practical functioning of the legal system.',
      'Participated in legal awareness campaigns and documentation of case files under the guidance of DLSA officers.',
      'Gained insight into legal aid mechanisms and the implementation of welfare legislations at the grassroots level.'
    ]
  },
  {
    id: 3,
    organisation: 'Office of Romesh Pratap Singh, Advocate, High Court, Gwalior Bench',
    period: '17 July 2024 – 17 August 2024',
    year: 2024,
    type: 'in-person',
    category: 'litigation',
    categoryLabel: 'Litigation & Court Exposure',
    yearTheme: 'High Court & Litigation Exposure',
    details: [
      'Assisted in legal research and drafting under the guidance of a High Court advocate.',
      'Gained practical exposure to litigation processes and High Court procedures.',
      'Worked on a variety of legal issues and contributed to case analysis and legal opinions.',
      'Developed understanding of court decorum, legal ethics, and client counseling techniques.'
    ]
  },
  {
    id: 4,
    organisation: 'Hikmat Helping Hands Foundation',
    period: 'June 2025',
    year: 2025,
    type: 'remote',
    category: 'public-interest',
    categoryLabel: 'Public Interest & Legal Awareness',
    details: [
      'Participated in community outreach and legal awareness initiatives in a remote setting.',
      'Conducted research on legal rights, public policy, and welfare schemes.',
      'Created informative legal content to educate communities about their constitutional entitlements.',
      'Led and contributed to awareness-building projects targeting under-informed and vulnerable populations.',
      'Collaborated with interdisciplinary teams through virtual meetings and group sessions.'
    ]
  },
  {
    id: 5,
    organisation: 'Rajpati and Associates, Patna High Court',
    period: '01 June 2025 – 30 June 2025',
    year: 2025,
    type: 'remote',
    category: 'litigation',
    categoryLabel: 'Legal Drafting & Research',
    details: [
      'Researched, drafted, and reviewed legal documents as part of a fully online internship.',
      'Prepared joint venture agreements, sale deeds, and copyright licenses with digital oversight.',
      'Conducted and presented research on bankruptcy frauds, and engaged in virtual legal discussions.',
      'Demonstrated initiative, strong work ethic, and adaptability in a remote environment.'
    ]
  },
  {
    id: 6,
    organisation: 'Lawful Legal',
    role: 'Legal Content Writer Intern',
    period: '10 June 2025 – 10 July 2025',
    year: 2025,
    type: 'remote',
    category: 'research',
    categoryLabel: 'Legal Research & Writing',
    details: [
      'Authored legal content on diverse fields, supporting Lawful Legal\'s initiatives to enhance public legal knowledge.',
      'Completed a one-month virtual internship successfully, demonstrating dedication and agility in remote work.',
      'Collaborated virtually with team members and mentors, gaining experience in digital legal content creation.'
    ]
  },
  {
    id: 7,
    organisation: 'Chaturvedi & Associates Law Office, Gwalior',
    role: 'Legal Intern',
    period: '03 July 2025 – 26 July 2025',
    year: 2025,
    type: 'in-person',
    category: 'litigation',
    categoryLabel: 'Litigation & Court Exposure',
    details: [
      'Performed legal research, drafted court documents, and assisted in case filings.',
      'Observed and learned from ongoing court proceedings.',
      'Supported legal professionals in preparing affidavits, notices, and fresh matters.',
      'Gained practical understanding of civil and criminal litigation under supervision.'
    ]
  },
  {
    id: 8,
    organisation: 'AGISS Research Institute, Noida, Uttar Pradesh',
    role: 'Legal Research Intern',
    period: 'June 11, 2025 – July 10, 2025',
    year: 2025,
    type: 'remote',
    category: 'research',
    categoryLabel: 'Legal Research',
    details: [
      'Successfully completed a one-month legal research internship.',
      'Conducted research on various legal topics and related issues of interest.',
      'Demonstrated strong research skills, proactive work ethic, and the ability to quickly learn new concepts.',
      'Recognized for diligence and proactivity in professional tasks.'
    ]
  },
  {
    id: 9,
    organisation: 'Nyaya Sarthak',
    subtitle: 'Under the guidance of Advocate Manik Goyal, Supreme Court',
    role: 'Legal Intern',
    period: 'July 2025',
    year: 2025,
    type: 'remote',
    category: 'litigation',
    categoryLabel: 'Pro Bono & Court Exposure',
    details: [
      'Completed a month-long legal internship at NyayaSarthak (a pro bono initiative registered under the Ministry of MSME).',
      'Prepared lists of dates and events, read case briefs, and drafted notes of various case files and legal propositions for matters pending in the Delhi High Court and Supreme Court of India.',
      'Assisted with legal research on Indian Contract Act, 1872; Constitutional Law; and provisions under CPC, BNSS, and BNS.',
      'Demonstrated strong attention to deadlines, reliability, and dedication to assigned legal tasks.'
    ]
  },
  {
    id: 10,
    organisation: 'The Amikus Qriae',
    subtitle: 'Registered under Ministry of MSME, Govt. of India',
    role: 'Legal Research Intern',
    period: 'August 2025',
    year: 2025,
    type: 'remote',
    category: 'research',
    categoryLabel: 'Legal Research & Drafting',
    details: [
      'Successfully completed a focused internship training on Legal Research and Drafting, designed for future legal professionals.',
      'Conducted research on several legal issues and authored research papers during the tenure.',
      'Solved practical-based legal questions and drafted judgments and various legal documents as required.',
      'Demonstrated punctuality, hard work, and inquisitiveness; recommended by supervisors as an asset to any legal institution.'
    ]
  },
  {
    id: 11,
    organisation: 'Nyayavani Foundation',
    subtitle: 'Volunteer Internship Module',
    period: 'September 1 – September 30, 2025',
    year: 2025,
    type: 'remote',
    category: 'public-interest',
    categoryLabel: 'Legal Awareness',
    details: [
      'Completed a one-month virtual internship focused on legal awareness through research-based legal drafting.',
      'Contributed to legal advocacy and public education on legal matters.',
      'Successfully fulfilled all internship requirements under the supervision of the Nyayavani Foundation legal team.'
    ]
  },
  {
    id: 12,
    organisation: 'Competition Commission of India (CCI)',
    period: 'February 2026',
    year: 2026,
    type: 'regulatory',
    category: 'regulatory',
    categoryLabel: 'Regulatory Exposure',
    yearTheme: 'Competition & Securities Regulation',
    details: [
      'Assisted in research on competition law, antitrust regulations, and market dominance issues.',
      'Analysed cases relating to abuse of dominant position, cartels, and merger control.',
      'Supported preparation of case briefs and legal notes under the Competition Act, 2002.'
    ]
  },
  {
    id: 13,
    organisation: 'Securities and Exchange Board of India (SEBI)',
    period: 'April 2026',
    year: 2026,
    type: 'regulatory',
    category: 'regulatory',
    categoryLabel: 'Regulatory Exposure',
    details: [
      'Conducted legal research on securities laws including insider trading and market regulation.',
      'Analyzed judgments of the Supreme Court and Securities Appellate Tribunal (SAT).',
      'Assisted in preparing case briefs and research notes on SEBI regulations.',
      'Studied regulatory framework including PIT Regulations and Takeover Code.'
    ]
  }
];

export const journeyYears = [
  { year: 2022, theme: 'Criminal Justice at the Grassroots', ids: [1] },
  { year: 2023, theme: 'Legal Aid & Access to Justice', ids: [2] },
  { year: 2024, theme: 'High Court & Litigation Exposure', ids: [3] },
  { year: 2025, theme: 'Legal Research · Drafting · Publications', ids: [4, 5, 6, 7, 8, 9, 10, 11] },
  { year: 2026, theme: 'Competition & Securities Regulation', ids: [12, 13] }
];

export const publications = [
  {
    id: 1,
    title: 'Uniform Civil Code (UCC) in India: A Legal Perspective',
    platform: 'Legal Service India',
    date: 'April 2025',
    category: 'constitutional-law',
    categoryLabel: 'Constitutional Law',
    url: 'https://www.legalserviceindia.com/legal/article-20983-uniform-civil-code-ucc-in-india-a-legal-perspective.html'
  },
  {
    id: 2,
    title: 'Terrorism and Human Rights: Striking a Balance between National Security and Civil Liberties',
    platform: 'Legal Service India',
    date: 'May 2025',
    category: 'human-rights',
    categoryLabel: 'Human Rights',
    url: 'https://www.legalserviceindia.com/legal/article-21317-terrorism-and-human-rights-striking-a-balance-between-national-security-and-civil-liberties.html'
  },
  {
    id: 3,
    title: 'The DPDP Act, 2023: A New Beginning for Data Privacy or a Lost Opportunity?',
    platform: 'LawfulLegal.in',
    date: 'July 2025',
    category: 'data-privacy',
    categoryLabel: 'Data Privacy',
    url: 'https://lawfullegal.in/the-dpdp-act-2023-a-new-beginning-for-data-privacy-or-a-lost-opportunity/'
  },
  {
    id: 4,
    title: 'Mutual Consent Divorce under Article 142: A New Chapter in Indian Matrimonial Law — An Analysis of Shilpa Sailesh v. Varun Sreenivasan, (2023) 7 SCC 1',
    platform: 'LawfulLegal.in',
    date: 'July 2025',
    category: 'matrimonial-law',
    categoryLabel: 'Matrimonial Law',
    url: 'https://lawfullegal.in/mutual-consent-divorce-under-article-142-a-new-chapter-in-indian-matrimonial-lawan-analysis-of-shilpa-sailesh-v-varun-sreenivasan-2023-7-scc-1/'
  },
  {
    id: 5,
    title: 'Yes Bank Fraud Case: ED & CBI vs. Rana Kapoor — A Legal Overview',
    platform: 'LawfulLegal.in',
    date: 'July 2025',
    category: 'financial-regulation',
    categoryLabel: 'Financial Regulation',
    url: 'https://lawfullegal.in/yes-bank-fraud-case-ed-cbi-vs-rana-kapoor/'
  },
  {
    id: 6,
    title: 'The Role of AI Surveillance: Does It Threaten the Right to Privacy?',
    platform: 'LawfulLegal.in',
    date: 'June 2025',
    category: 'ai-law',
    categoryLabel: 'AI & Privacy',
    url: 'https://lawfullegal.in/the-role-of-ai-surveillance-does-it-threaten-the-right-to-privacy/'
  },
  {
    id: 7,
    title: 'Regulatory Powers of RBI: A Case Study of RBI v. Peerless General Finance & Investment Co. Ltd. (1987) 1 SCC 424',
    platform: 'LawfulLegal.in',
    date: 'July 2025',
    category: 'financial-regulation',
    categoryLabel: 'Financial Regulation',
    url: 'https://lawfullegal.in/regulatory-powers-of-rbi-a-case-study-of-rbi-v-peerless-general-finance-investment-co-ltd-1987-1-scc-424/'
  },
  {
    id: 8,
    title: 'The Supreme Court\'s Verdict on Same-Sex Marriage: Constitutional Morality vs. Legislative Inertia — A Turning Point or a Missed Moment?',
    platform: 'LawfulLegal.in',
    date: 'August 2025',
    category: 'constitutional-law',
    categoryLabel: 'Constitutional Law',
    url: 'https://lawfullegal.in/the-supreme-courts-verdict-on-same-sex-marriage-constitutional-morality-vs-legislative-inertia-a-turning-point-or-a-missed-moment/'
  },
  {
    id: 9,
    title: 'Criminal Liability of AI Developers for AI-Generated Crimes',
    platform: 'The Amikus Qriae',
    date: 'September 2025',
    category: 'ai-law',
    categoryLabel: 'AI & Criminal Law',
    type: 'Research Publication',
    url: 'https://theamikusqriae.com/criminal-liability-of-ai-developers-for-ai-generated-crimes/'
  },
  {
    id: 10,
    title: 'Harjinder Singh v. State of Punjab',
    platform: 'The Amikus Qriae',
    date: 'September 2025',
    category: 'criminal-law',
    categoryLabel: 'Criminal Law',
    type: 'Case Comment',
    url: 'https://theamikusqriae.com/harjinder-singh-v-state-of-punjab-2025-section-319-crpc-and-abetment-to-suicide/'
  }
];

export const publicationCategories = [
  { id: 'all', label: 'All' },
  { id: 'constitutional-law', label: 'Constitutional Law' },
  { id: 'human-rights', label: 'Human Rights' },
  { id: 'data-privacy', label: 'Data Privacy' },
  { id: 'ai-law', label: 'AI & Law' },
  { id: 'financial-regulation', label: 'Financial Regulation' },
  { id: 'criminal-law', label: 'Criminal Law' },
  { id: 'matrimonial-law', label: 'Matrimonial Law' }
];

export const advocacy = [
  {
    id: 1,
    name: '3rd Intra Moot Court Competition',
    venue: 'Prestige Institute of Management & Research, Gwalior',
    date: '25–27 May 2023',
    role: 'Participant',
    type: 'moot-court',
    typeLabel: 'Moot Court'
  },
  {
    id: 2,
    name: '5th Padma Shri Dr. N.N. Jain National Moot Court Competition, 2025',
    venue: 'Prestige Institute of Management & Research, Indore',
    date: '16–18 April 2025',
    role: 'Participant',
    type: 'moot-court',
    typeLabel: 'Moot Court'
  },
  {
    id: 3,
    name: '1st Intra Trial Advocacy',
    venue: 'Prestige Institute of Management & Research, Gwalior',
    date: '30–31 October 2025',
    role: 'Participant',
    type: 'trial-advocacy',
    typeLabel: 'Trial Advocacy'
  },
  {
    id: 4,
    name: '1st International Law Seminar on "Evolving Dimensions of Law in a Globalized World: Challenges, Reforms and Interdisciplinary Perspectives"',
    venue: 'Prestige Institute of Management & Research, Gwalior',
    date: 'September 26–27, 2025',
    role: 'Author & Paper Presenter',
    paperTitle: 'Defamation and Erosion of Presumption of Innocence: Navigating Freedom of Expression & Media Trial',
    type: 'paper-presentation',
    typeLabel: 'Paper Presentation',
    tags: ['International Law Seminar', 'Paper Presentation']
  },
  {
    id: 5,
    name: 'Multidisciplinary International Conference: "The Future of Artificial Intelligence: Opportunities and Challenges"',
    venue: '',
    date: '9–10 January 2026',
    mode: 'Hybrid Mode',
    role: 'Author & Paper Presenter',
    paperTitle: 'Legal Accountability for AI-Generated Errors in Financial Statements, Audit Opinions, and Tax Filings: Who Is Liable?',
    type: 'paper-presentation',
    typeLabel: 'Paper Presentation',
    tags: ['International Conference', 'Paper Presentation']
  },
  {
    id: 6,
    name: 'JIGYASA 2026',
    venue: 'Prestige Institute of Management and Research, Indore (Deemed To Be University)',
    date: '2026',
    mode: 'Hybrid Mode',
    role: 'Author & Paper Presenter',
    paperTitle: 'Who Is Legally Responsible for Mistakes Made by AI',
    type: 'paper-presentation',
    typeLabel: 'Paper Presentation',
    tags: ['Paper Presentation']
  }
];

export const leadership = [
  {
    role: 'Convenor, Moot Court Society',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2025–2026'
  },
  {
    role: 'Coordinator, National Arbitration Competition "The Pathway of Resolution"',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2025'
  },
  {
    role: 'Core Member & Coordinator, Law Club',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2022–2026'
  },
  {
    role: 'Coordinator, Intra Arbitration Competition 1.0',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2025'
  },
  {
    role: 'Coordinator, Intra Law Quiz Competition',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2024'
  },
  {
    role: 'Volunteer & Event Coordinator, College Events',
    organisation: 'Prestige Institute of Management & Research, Gwalior',
    period: '2021–2026'
  }
];

export const credentials = [
  {
    title: 'Value Added Course on Bhartiya Nyaya Sanhita, 2023',
    provider: 'Prestige Institute of Management & Research, Gwalior'
  },
  {
    title: 'Online Course on the Indian Constitution',
    provider: 'NALSAR University of Law, sponsored by the Department of Legal Affairs, Ministry of Law & Justice, Government of India'
  },
  {
    title: 'Boot Camp on "Crafting Effective Commercial Contracts"',
    provider: 'Prestige Institute of Management & Research, Gwalior'
  },
  {
    title: 'Certified Legal Researcher',
    provider: 'Manupatra Information Solutions Pvt. Ltd'
  },
  {
    title: 'HP LIFE "Finding Funding" Online Course',
    provider: 'HP Foundation',
    date: 'May 30, 2025'
  },
  {
    title: 'AI for Beginners – HP LIFE',
    provider: 'HP Foundation'
  },
  {
    title: 'Understanding Legal Research: A Step-by-Step Approach',
    provider: 'Manupatra',
    date: '2025',
    type: 'Certificate of Achievement'
  },
  {
    title: 'Value Added Course on Master of the Art of Criminal Trial Litigation',
    provider: 'Prestige Institute of Management & Research, Gwalior',
    date: '2026'
  }
];

export const evidenceSnapshot = [
  { value: '13', label: 'Legal Experiences', targetSection: 'journey' },
  { value: '10', label: 'Publications', targetSection: 'research' },
  { value: '3', label: 'Paper Presentations', targetSection: 'advocacy' },
  { value: 'CCI & SEBI', label: 'Regulatory Exposure', targetSection: 'journey', isText: true }
];

export const pillarsData = {
  research: {
    title: 'Research',
    evidence: [
      '10 published legal articles across multiple platforms',
      '3 authored conference/seminar papers',
      'Research internships at AGISS, Amikus Qriae, Lawful Legal',
      'Certified Legal Researcher — Manupatra',
      'Research spanning Constitutional Law, AI & Law, Data Privacy, Human Rights, Financial Regulation'
    ]
  },
  advocacy: {
    title: 'Advocacy',
    evidence: [
      'High Court litigation exposure — Gwalior Bench',
      'Civil & criminal litigation at Chaturvedi & Associates',
      'Moot court participation — Intra & National level',
      'Trial advocacy participation',
      'Legal drafting for Patna High Court matters',
      'Supreme Court research under Advocate Manik Goyal'
    ]
  },
  justice: {
    title: 'Justice',
    evidence: [
      'DLSA — Free legal aid to underprivileged communities',
      'Lok Adalat observation and legal awareness campaigns',
      'Nyayavani Foundation — Legal awareness through research',
      'Hikmat Helping Hands — Constitutional rights education',
      'Pro bono legal work through NyayaSarthak',
      'Commitment to integrity and pursuit of justice'
    ]
  }
};
