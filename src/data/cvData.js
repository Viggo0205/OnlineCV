// CV Data for Victor Tadeusz Ulstrup Olszowski
export const cvData = {
  personalInfo: {
    name: "Victor Tadeusz Ulstrup Olszowski",
    title: "Full Stack Developer & System Designer",
    address: "Møllehusene 16, 1, 51",
    phone: "29176851",
    email: "Victor.olszowski@gmail.com",
    summary: "Jeg er en engageret og energisk person, der trives både selvstændigt og i teams. Jeg har en stor passion for teknologi og nyder at tage nye udfordringer op inden for programmering, elektronik og systemudvikling. Min nysgerrighed driver mig til konstant at udvikle mine færdigheder og udforske nye teknologier.",
    github: "https://github.com/Viggo0205",
    linkedin: "https://www.linkedin.com/in/victor-olszowski-56a40634b/"
  },

  relevantSkills: {
    generalSkills: [
      {
        category: "Projektarbejde",
        skills: ["Projekt styring", "Scrum", "Waterfall", "XP"]
      },
      {
        category: "IT Sikkerhed",
        skills: ["Kryptering", "Hashing", "Sikkerhedsprotokoller"]
      },
      {
        category: "Database & Server",
        skills: ["SQL database design", "Server client struktur", "MCP servere"]
      },
      {
        category: "Kompetencer opnået via DTU-kurser",
        skills: [
          "Objektorienteret og funktionel programmering",
          "Software engineering og systemudvikling",
          "Netværk og datakommunikation",
          "Hardwaredesign og digitalteknik",
          "Mobilteknologier og computersystemer"
        ]
      }
    ]
  },

  programmingSkills: {
    languages: [
      { name: "C#", level: 90, experience: "Avanceret" },
      { name: "SQL", level: 85, experience: "Avanceret" },
      { name: "Java", level: 80, experience: "God erfaring" },
      { name: "JavaScript", level: 85, experience: "Avanceret" },
      { name: "Python", level: 75, experience: "God erfaring" },
      { name: "HTML", level: 95, experience: "Ekspert" },
      { name: "Matlab", level: 70, experience: "Grundlæggende+" },
      { name: "C++", level: 60, experience: "Grundlæggende" },
      { name: "R", level: 50, experience: "Grundlæggende" },
      { name: "C", level: 55, experience: "Grundlæggende" }
    ],
    tools: [
      "Visual Studio",
      "Visual Studio Code",
      "Entity Framework Core",
      "Simply.com",
      "Azure",
      "TCP/UDP servers",
      "REST API",
      "Webapps"
    ],
    frameworks: [
      { name: "Umbraco", versions: ["13", "16"] },
      { name: "Vue.js", level: "God erfaring" },
      { name: "React", level: "Lidt erfaring" }
    ]
  },

  systemDevelopment: {
    methods: ["Scrum", "Waterfall", "XP"],
    tools: [
      "Domænemodeller",
      "Klassediagrammer", 
      "ER-diagrammer",
      "Burndownchart",
      "BPM-diagrammer",
      "PESTEL",
      "SWOT/TOWS",
      "Business model canvas",
      "Use stories"
    ],
    frameworks: [
      "Umbraco 13 og 16",
      "Vue.js",
      "React (lidt erfaring)"
    ]
  },

  personalProfile: {
    description: "Jeg er en engageret og energisk person, der trives både selvstændigt og i teams. Jeg har en stor passion for teknologi og nyder at tage nye udfordringer op inden for programmering, elektronik og systemudvikling. Min nysgerrighed driver mig til konstant at udvikle mine færdigheder og udforske nye teknologier.",
    interests: [
      "Computer spil med venner",
      "Fitness træning",
      "Airsoft i weekenderne",
      "Sociale aktiviteter med venner"
    ]
  },

  experience: [
        {
          id: 3,
          title: "DTU-kurser",
          company: "Danmarks Tekniske Universitet (DTU)",
          period: "2019-2022",
          description: "Gennem min bacheloruddannelse i Cyberteknologi har jeg bestået en række kurser, der har givet mig stærke kompetencer inden for programmering, softwareudvikling, netværk, hardwaredesign og systemudvikling.",
          courses: [
            "Indledende programmering",
            "Fagprojekt - Cybertek",
            "Introduktion til cyberteknologi",
            "Ingeniørfagets videnskab",
            "Digital hardwaredesign",
            "Avancerede datanet",
            "Software engineering",
            "Introduktion til digital teknologi",
            "Teknologier til mobilkommunikation",
            "Netværksteknologi",
            // Fjernet ikke-beståede kurser
            "Computersystemer"
          ],
          // Resultater og erfaringer fjernet efter ønske
        },
    {
      id: 1,
      title: "Praktikforløb & eksamensprojekter",
      company: "Zealand",
      period: "2023– (ongoing)",
      description: "Gennem arbejdet med diverse eksamensprojekter og praktikforløb har jeg opnået praktisk erfaring med forskellige teknologier og udviklingsprincipper.",
      achievements: [
        "Udviklet web-applikationer med moderne frameworks",
        "Implementeret database løsninger og API'er", 
        "Anvendt diverse udviklingsmetoder i teamprojekter",
        "Opbygget erfaring med cloud-platforme som Azure"
      ],
      technologies: ["C#", "JavaScript", "SQL", "Azure", "Entity Framework"]
    },
    {
      id: 2,
      title: "Praktikforløb – Backend udvikling af internt værktøj",
      company: "Kruso",
      period: "Forår 2025",
      description: "I mit praktikforløb hos Kruso arbejdede jeg med backend-udvikling af et internt værktøj, hvor jeg anvendte Umbraco og .NET 9.0. Jeg var ansvarlig for at designe og implementere hele strukturen af backenden – fra API-endpoints til service- og repository-lag – samt integrationer, så værktøjet kunne understøtte virksomhedens interne processer effektivt. Arbejdet gav mig solid erfaring med moderne .NET-udvikling, CMS-integration og arkitektur af backend-løsninger.",
      achievements: [
        "Design og implementering af backend med .NET 9.0",
        "Integration af Umbraco som CMS",
        "Design og implementering af backend-struktur fra API til service/repo-lag",
        "Udvikling af API-endpoints og datamodeller",
        "Samarbejde med frontend-udviklere og brugere"
      ],
      technologies: [".NET 9.0", "Umbraco", "C#", "SQLite"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Web Application Projects",
      description: "Forskellige web-applikationer udviklet gennem uddannelse og praktik",
      technologies: ["C#", "JavaScript", "SQL", "HTML", "CSS"],
      highlights: [
        "REST API udvikling",
        "Database design og implementering",
        "Frontend med moderne frameworks"
      ]
    },
    {
      id: 2,
      title: "System Development Projects", 
      description: "Systemudviklingsprojekter med fokus på arkitektur og design",
      technologies: ["Java", "Python", "SQL", "UML"],
      highlights: [
        "Systemarkitektur design",
        "Anvendelse af udviklingsmetoder",
        "Team-baseret projektarbejde"
      ]
    }
  ]
};

export default cvData;