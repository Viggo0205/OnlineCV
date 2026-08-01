// CV Data for Victor Tadeusz Ulstrup Olszowski
export const cvData = {
  personalInfo: {
    name: "Victor Tadeusz Ulstrup Olszowski",
    title: {
      da: "Junior Softwareudvikler",
      en: "Junior Software Developer"
    },
    address: {
      da: "Møllehusene 16, 1, 51",
      en: "Møllehusene 16, 1, 51"
    },
    phone: "29176851",
    email: "Victor.olszowski@gmail.com",
    summary: {
      da: "Nyuddannet datamatiker med praktisk erfaring i fullstack- og backend-udvikling. I et 10-ugers praktikforløb hos Kruso designede og implementerede jeg REST API'er, service-/repository-lag og integrationer i C# og .NET med SQL. Gennem studiet har jeg arbejdet med JavaScript, Vue.js, React, unit- og integrationstest, Git samt CI/CD og deployment til Azure. Trives i agile teams med code reviews og parprogrammering, og motiveres af at skrive vedligeholdelsesvenlig, veldokumenteret kode.",
      en: "Recently graduated Computer Science professional with hands-on full-stack and backend experience. During a 10-week internship at Kruso I designed and implemented REST APIs, service/repository layers and integrations in C# and .NET with SQL. Through my studies I have worked with JavaScript, Vue.js, React, unit and integration testing, Git, CI/CD and Azure deployment. My thesis focused on Model Context Protocol (MCP) and AI integration in Python. Thrives in agile teams with code reviews and pair programming, and is motivated by writing maintainable, well-documented code."
    },
    github: "https://github.com/Viggo0205",
    linkedin: "https://www.linkedin.com/in/victor-olszowski-56a40634b/"
  },

  pdf: {
    displayName: "V. Olszowski",
    onlineCv: "https://viggo0205.github.io/OnlineCV/",
    avatarPath: "/OnlineCV/ProfilBillede.PNG",
    featuredProjectIds: [2, 4, 5, 1]
  },

  education: [
    {
      id: 1,
      degree: { da: "Datamatiker", en: "AP Degree in Computer Science" },
      institution: "Zealand",
      period: "2023–2026",
      details: {
        da: "Softwareudvikling, fullstack, systemudvikling og backend. Hovedopgave: MCP og AI-integration.",
        en: "Software development, full-stack, system development and backend. Thesis: MCP and AI integration."
      }
    },
    {
      id: 2,
      degree: {
        da: "Cyberteknologi (100 ECTS gennemført)",
        en: "Cyber Technology Studies (100 ECTS completed)"
      },
      institution: {
        da: "Danmarks Tekniske Universitet (DTU)",
        en: "Technical University of Denmark (DTU)"
      },
      period: "2019–2022",
      details: {
        da: "Programmering, netværk, hardwaredesign og softwareudvikling",
        en: "Programming, networking, hardware design, and software engineering"
      }
    },
    {
      id: 3,
      degree: {
        da: "GameIT College – Spiludvikling & IT",
        en: "GameIT College – Game Development & IT"
      },
      institution: "Viden Djurs",
      details: {
        da: "C#, Unity og programmering som del af gymnasieforløb",
        en: "C#, Unity and programming as part of upper secondary education"
      }
    }
  ],

  relevantSkills: {
    generalSkills: [
      {
        category: { da: "Projektarbejde", en: "Project Work" },
        skills: [
          { da: "Projekt styring", en: "Project management" },
          { da: "Scrum", en: "Scrum" },
          { da: "Waterfall", en: "Waterfall" },
          { da: "XP", en: "XP" }
        ]
      },
      {
        category: { da: "Software & Sikkerhed", en: "Software & Security" },
          skills: [
            { da: "Objektorienteret programmering", en: "Object-oriented programming" },
          { da: "Kryptering", en: "Encryption" },
          { da: "Hashing", en: "Hashing" },
          { da: "Sikkerhedsprotokoller", en: "Security protocols" }
        ]
      },
      {
        category: { da: "Database & Server", en: "Database & Server" },
        skills: [
          { da: "SQL database design", en: "SQL database design" },
          { da: "PostgreSQL", en: "PostgreSQL" },
          { da: "Azure App Service", en: "Azure App Service" },
          { da: "GitHub Actions og CI/CD", en: "GitHub Actions and CI/CD" },
          { da: "Server client struktur", en: "Server client structure" },
          { da: "MCP servere", en: "MCP servers" }
        ]
      },
      {
        category: { da: "Kompetencer opnået via DTU-kurser", en: "Skills acquired via DTU courses" },
        skills: [
          { da: "Software engineering og systemudvikling", en: "Software engineering and system development" },
          { da: "Netværk og datakommunikation", en: "Networks and data communication" },
          { da: "Hardwaredesign og digitalteknik", en: "Hardware design and digital technology" },
          { da: "Mobilteknologier og computersystemer", en: "Mobile technologies and computer systems" }
        ]
      }
    ]
  },

  programmingSkills: {
    languages: [
      { name: "C#", level: 75, experience: { da: "God praktisk erfaring", en: "Solid practical experience" } },
      { name: "SQL", level: 70, experience: { da: "God erfaring", en: "Solid experience" } },
      { name: "PostgreSQL", level: 60, experience: { da: "Erfaring fra hovedforløb", en: "Experience from main programme" } },
      { name: "JavaScript", level: 65, experience: { da: "Funktionel arbejdskendskab", en: "Working knowledge" } },
      { name: "Java", level: 60, experience: { da: "God erfaring", en: "Solid experience" } },
      { name: "Python", level: 65, experience: { da: "Erfaring fra hovedopgave", en: "Thesis project experience" } },
      { name: "TypeScript", level: 50, experience: { da: "Grundlæggende", en: "Basic" } },
      { name: "HTML/CSS", level: 70, experience: { da: "Solid grundlag", en: "Solid foundation" } },
      { name: "Matlab", level: 45, experience: { da: "Grundlæggende", en: "Basic" } },
      { name: "C++", level: 40, experience: { da: "Grundlæggende", en: "Basic" } },
      { name: "R", level: 35, experience: { da: "Grundlæggende", en: "Basic" } },
      { name: "C", level: 40, experience: { da: "Grundlæggende", en: "Basic" } }
    ],
    tools: [
      "Visual Studio",
      "Visual Studio Code",
      "Entity Framework Core",
      "Simply.com",
      "Azure App Service",
      "GitHub Actions (CI/CD)",
      "PostgreSQL",
      "TCP/UDP servers",
      "REST API",
      "Webapps",
      "Linux",
      "VirtualBox",
      "Unit testing",
      "Integration testing",
      "AI Integration",
      "LLM APIs",
      "MCP"
    ],
    frameworks: [
      { name: "Umbraco", versions: ["13", "16"] },
      { name: "Vue.js", level: { da: "God erfaring", en: "Solid experience" } },
      { name: "React", level: { da: "Lidt erfaring", en: "Some experience" } }
    ]
  },

  systemDevelopment: {
    methods: [
      { da: "Scrum", en: "Scrum" },
      { da: "Waterfall", en: "Waterfall" },
      { da: "XP", en: "XP" }
    ],
    tools: [
      { da: "Domænemodeller", en: "Domain Models" },
      { da: "Klassediagrammer", en: "Class Diagrams" },
      { da: "ER-diagrammer", en: "ER Diagrams" },
      { da: "Burndownchart", en: "Burndown Chart" },
      { da: "BPM-diagrammer", en: "BPM Diagrams" },
      { da: "PESTEL", en: "PESTEL" },
      { da: "SWOT/TOWS", en: "SWOT/TOWS" },
      { da: "Business model canvas", en: "Business Model Canvas" },
      { da: "Use stories", en: "User Stories" }
    ],
    frameworks: [
      { da: "Umbraco 13 og 16", en: "Umbraco 13 and 16" },
      { da: "Vue.js", en: "Vue.js" },
      { da: "React (lidt erfaring)", en: "React (some experience)" }
    ]
  },

  personalProfile: {
    description: {
      da: "Nyuddannet datamatiker med praktisk erfaring i fullstack- og backend-udvikling. I et 10-ugers praktikforløb hos Kruso designede og implementerede jeg REST API'er, service-/repository-lag og integrationer i C# og .NET med SQL. Gennem studiet har jeg arbejdet med JavaScript, Vue.js, React, unit- og integrationstest, Git samt CI/CD og deployment til Azure. Trives i agile teams med code reviews og parprogrammering, og motiveres af at skrive vedligeholdelsesvenlig, veldokumenteret kode.",
      en: "Recently graduated Computer Science professional with hands-on full-stack and backend experience. During a 10-week internship at Kruso I designed and implemented REST APIs, service/repository layers and integrations in C# and .NET with SQL. Through my studies I have worked with JavaScript, Vue.js, React, unit and integration testing, Git, CI/CD and Azure deployment. My thesis focused on Model Context Protocol (MCP) and AI integration in Python. Thrives in agile teams with code reviews and pair programming, and is motivated by writing maintainable, well-documented code."
    },
    interests: {
      da: [
        "Computer spil med venner",
        "Fitness træning",
        "Airsoft i weekenderne",
        "Sociale aktiviteter med venner"
      ],
      en: [
        "Computer games with friends",
        "Fitness training",
        "Airsoft on weekends",
        "Social activities with friends"
      ]
    },
    highlights: {
      da: [
        { title: "Arbejdsform", text: "Trives både selvstændigt og i teams" },
        { title: "Motivation", text: "Stor passion for teknologi og innovation" },
        { title: "Tilgang", text: "Nysgerrig og lærer konstant nye teknologier" }
      ],
      en: [
        { title: "Work Style", text: "Thrives both independently and in teams" },
        { title: "Motivation", text: "Great passion for technology and innovation" },
        { title: "Approach", text: "Curious and constantly learning new technologies" }
      ]
    }
  },

  experience: [
    {
      id: 3,
      title: { da: "DTU-kurser", en: "DTU Courses" },
      company: {
        da: "Danmarks Tekniske Universitet (DTU) - 100 ECTS (ikke fuldført)",
        en: "Technical University of Denmark (DTU) - 100 ECTS (not completed)"
      },
      isDtu: true,
      period: "2019-2022",
      description: {
        da: "Gennem min bacheloruddannelse i Cyberteknologi bestod jeg en række kurser svarende til 100 ECTS, som gav mig stærke kompetencer inden for programmering, softwareudvikling, netværk, hardwaredesign og systemudvikling. Uddannelsen blev ikke fuldført.",
        en: "During my bachelor's degree in Cyber Technology, I completed courses corresponding to 100 ECTS, which gave me strong skills in programming, software development, networking, hardware design, and system development. The degree was not completed."
      },
      courses: [
        { da: "Indledende programmering", en: "Introductory Programming" },
        { da: "Fagprojekt - Cybertek", en: "Project - Cybertech" },
        { da: "Introduktion til cyberteknologi", en: "Introduction to Cyber Technology" },
        { da: "Ingeniørfagets videnskab", en: "Engineering Science" },
        { da: "Digital hardwaredesign", en: "Digital Hardware Design" },
        { da: "Avancerede datanet og cybersikkerhed", en: "Advanced Data Networks and Cybersecurity" },
        { da: "Software engineering", en: "Software Engineering" },
        { da: "Introduktion til digital teknologi", en: "Introduction to Digital Technology" },
        { da: "Teknologier til mobilkommunikation", en: "Technologies for Mobile Communication" },
        { da: "Netværksteknologi", en: "Network Technology" },
        { da: "Computersystemer", en: "Computer Systems" }
      ]
    },
    {
      id: 1,
      title: { da: "Uddannelse ved Zealand", en: "Education at Zealand" },
      company: "Zealand",
      period: "2023–2026",
      description: {
        da: "Gennem min datamatiker-uddannelse ved Zealand har jeg gennemført en række kurser, der har styrket mine kompetencer inden for softwareudvikling, databaser, systemudvikling og programmering.",
        en: "Through my Computer Science education at Zealand, I completed a series of courses that strengthened my skills in software development, databases, system development, and programming."
      },
      courses: [
        { da: "Hovedopgave: Model Context Protocol (MCP) - Integration af AI-værktøjer og protokoller", en: "Final Thesis: Model Context Protocol (MCP) - AI tool integration and protocol design" },
        { da: "Første årsprøven", en: "First Year Exam" },
        { da: "Systemudviklingsprøven", en: "System Development Exam" },
        { da: "Programmeringsprøven", en: "Programming Exam" },
        { da: "Game Development - Unity", en: "Game Development - Unity" },
        { da: "SQL Databaser", en: "SQL Databases" },
        { da: "IT-sikkerhed", en: "IT Security" },
        { da: "Valgfagsprøven", en: "Elective Course Exam" },
        { da: "Praktikprøven", en: "Internship Exam" }
      ],
      technologies: ["C#", "JavaScript", "SQL", "PostgreSQL", "Azure App Service", "GitHub Actions", "Entity Framework", "Vue.js"]
    },
    {
      id: 2,
      title: { da: "Praktikforløb – Backend udvikling af internt værktøj", en: "Internship – Backend Development of Internal Tool" },
      company: "Kruso",
      period: "Efterår 2025 (10 uger)",
      description: {
        da: "I mit 10-ugers praktikforløb hos Kruso i efteråret 2025 designede og implementerede jeg hele backend-strukturen på et internt værktøj i C# og .NET – fra REST API-endpoints og servicelag til integrationer med Umbraco 13 og 16. Til datalagring arbejdede jeg med SQLite og direkte SQL. Arbejdet gav mig solid erfaring med moderne .NET-udvikling, CMS-integration og arkitektur af backend-løsninger.",
        en: "During my 10-week internship at Kruso in the fall of 2025, I designed and implemented the full backend structure for an internal tool in C# and .NET – from REST API endpoints and service layers to integrations with Umbraco 13 and 16. For data storage I worked with SQLite using direct SQL. The work gave me solid experience with modern .NET development, CMS integration, and backend solution architecture."
      },
      achievements: [
        { da: "Designede og implementerede hele backend-strukturen i C# og .NET", en: "Designed and implemented the full backend structure in C# and .NET" },
        { da: "Byggede REST API-endpoints og service-/repository-lag integreret med Umbraco 13 og 16", en: "Built REST API endpoints and service/repository layers integrated with Umbraco 13 and 16" },
        { da: "Arbejdede med SQLite og direkte SQL til datalagring og -hentning", en: "Worked with SQLite using direct SQL for data storage and retrieval" },
        { da: "Deltog i code reviews og agile udviklingsprocesser med Git", en: "Participated in code reviews and agile development processes with Git" },
        { da: "Håndterede validering og fejlhåndtering på API-niveau", en: "Handled validation and error handling at API level" }
      ],
      technologies: [".NET", "Umbraco", "C#", "SQLite"]
    },
    {
      id: 4,
      title: { da: "Tilkaldevikar – lærer", en: "On-call Substitute Teacher" },
      company: "Fjordlandsskolen",
      period: "2022–nu",
      achievements: []
    }
  ],

  projects: [
    {
      id: 1,
      title: "MultiplayerFarmington",
      description: {
        da: "Multiplayer farming game udviklet i Unity med netværksarkitektur. Designede og implementerede server-client kommunikation med real-time synkronisering af game state mellem spillere.",
        en: "Multiplayer farming game built in Unity with networked architecture. Designed and implemented server-client communication with real-time game state synchronisation between players."
      },
      technologies: ["C#", "Unity", "TCP/UDP networking", "Client-server architecture"],
      github: "https://github.com/Viggo0205/MultiplayerFarmington"
    },
    {
      id: 2,
      title: "FullStackOpgave",
      description: {
        da: "ASP.NET Core applikation med Entity Framework, SQL database og REST API. Implementerer CRUD-operationer, DTOs og service-lag med authentication og data validation.",
        en: "ASP.NET Core application with Entity Framework, SQL database and REST API. Implements CRUD operations, DTOs and service layers with authentication and data validation."
      },
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "REST API"],
      github: "https://github.com/Viggo0205/FullStackOpgave"
    },
    {
      id: 3,
      title: "DevOpsOpgave",
      description: {
        da: "DevOps-projekt med implementering af CI/CD pipelines, automatiseret testing og deployment. Arbejde med versionsstyring og moderne udviklingspraksis.",
        en: "DevOps project implementing CI/CD pipelines, automated testing and deployment. Work with version control and modern development practices."
      },
      technologies: ["C#", "CI/CD", "Git", "Automated Testing"],
      github: "https://github.com/Viggo0205/DevOpsOpgave"
    },
    {
      id: 4,
      title: "OnlineCV",
      description: {
        da: "Interaktivt portfolio website bygget med React og Vite. Responsivt design med PDF-eksport funktionalitet til CV-generering.",
        en: "Interactive portfolio website built with React and Vite. Responsive design with PDF export functionality for CV generation."
      },
      technologies: ["React", "JavaScript", "HTML", "CSS", "Vite"],
      github: "https://github.com/Viggo0205/OnlineCV"
    },
    {
      id: 5,
      title: "Final Thesis – Model Context Protocol (MCP)",
      description: {
        da: "Afsluttende hovedopgave om Model Context Protocol (MCP). Design og implementering af AI-integrationsprotokoller med fokus på sikkerhed, dataflow og API-design.",
        en: "Final thesis on Model Context Protocol (MCP). Design and implementation of AI integration protocols with a focus on security, data flow and API design."
      },
      technologies: ["Python", "API Design", "Protocol Design", "AI Integration"],
      github: "https://github.com/Viggo0205/Hovedopgave"
    },
    {
      id: 6,
      title: "RESTful API Suite",
      description: {
        da: "Flere RESTful API services som demonstrerer backend-udviklingskompetencer. Implementering af HTTP-metoder, routing, og data-håndtering.",
        en: "Multiple RESTful API services demonstrating backend development skills. Implementation of HTTP methods, routing and data handling."
      },
      technologies: ["C#", "Python", "REST API", "HTTP", "JSON"],
      github: "https://github.com/Viggo0205/RestKajakTur"
    },
    {
      id: 7,
      title: "IoT & Embedded Systems",
      description: {
        da: "IoT-løsninger inklusiv UDP broadcast service, SenseHat integration og Raspberry Pi automation. Arbejde med netværksprotokoller og hardware-integration.",
        en: "IoT solutions including UDP broadcast service, SenseHat integration and Raspberry Pi automation. Work with network protocols and hardware integration."
      },
      technologies: ["Python", "Raspberry Pi", "UDP", "IoT", "Hardware Integration"],
      github: "https://github.com/Viggo0205/UDPBroadcaster"
    },
    {
      id: 8,
      title: "Web Applications",
      description: {
        da: "Flere webapplikationer som demonstrerer frontend-udviklingskompetencer med responsivt design og brugerinteraktion.",
        en: "Multiple web applications demonstrating frontend development skills with responsive design and user interaction."
      },
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Viggo0205/KajakTurWebApp"
    }
  ]
};

export default cvData;