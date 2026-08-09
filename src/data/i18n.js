export function t(value, lang = 'da') {
  if (value == null) {
    return ''
  }

  if (typeof value === 'object' && (value.da !== undefined || value.en !== undefined)) {
    return value[lang] || value.da || value.en || ''
  }

  return String(value)
}

/** Shared UI chrome strings (nav, section titles, aria labels). */
export const labels = {
  navAria: { da: 'CV navigation', en: 'CV navigation' },
  themeToDark: { da: 'Skift til mørkt tema', en: 'Switch to dark theme' },
  themeToLight: { da: 'Skift til lyst tema', en: 'Switch to light theme' },
  printCv: { da: 'Udskriv CV', en: 'Print CV' },
  openNav: { da: 'Åbn navigation', en: 'Toggle navigation menu' },
  downloadPdf: { da: 'Download PDF', en: 'Download PDF' },
  languageToggle: { da: 'English', en: 'Dansk' },

  fullCv: { da: 'Fuld CV', en: 'Full CV' },
  personalInfo: { da: 'Personlig Info', en: 'Personal Info' },
  skills: { da: 'Kompetencer', en: 'Skills' },
  experience: { da: 'Erfaring', en: 'Experience' },
  projects: { da: 'Projekter', en: 'Projects' },
  systemDevelopment: { da: 'Systemudvikling', en: 'System Development' },
  contact: { da: 'Kontakt', en: 'Contact' },

  generalSkills: { da: 'Generelle Kompetencer', en: 'General Skills' },
  programmingLanguages: { da: 'Programmeringssprog', en: 'Programming Languages' },
  toolsTechnologies: { da: 'Værktøjer & Teknologier', en: 'Tools & Technologies' },
  versions: { da: 'Versioner', en: 'Versions' },
  resultsExperience: { da: 'Resultater & Erfaringer:', en: 'Results & Experience:' },

  developmentMethods: { da: 'Udviklingsmetoder', en: 'Development Methods' },
  modelingAnalysis: { da: 'Modellering & Analyse', en: 'Modeling & Analysis' },
  frameworksPlatforms: { da: 'Frameworks & Platforme', en: 'Frameworks & Platforms' },
  systemSkillsTitle: { da: 'Systemudviklingskompetencer', en: 'System Development Skills' },
  systemSkillsP1: {
    da: 'Jeg har erfaring med flere systemudviklingsmetoder og værktøjer, der anvendes i udviklingsprocessen. Gennem mine studier og praktikforløb har jeg arbejdet med forskellige tilgange til projekt- og systemudvikling, fra traditionelle metoder som Waterfall til agile metoder som Scrum og XP.',
    en: 'I have experience with several system development methods and tools used in the development process. Through my studies and internships, I have worked with various approaches to project and system development, from traditional methods like Waterfall to agile methods like Scrum and XP.',
  },
  systemSkillsP2: {
    da: 'Min erfaring inkluderer anvendelse af forskellige modelleringsværktøjer til at analysere, designe og dokumentere systemer, samt praktisk arbejde med moderne frameworks og udviklingsplatforme.',
    en: 'My experience includes using various modeling tools to analyze, design, and document systems, as well as practical work with modern frameworks and development platforms.',
  },

  projectsIntro: {
    da: 'Nedenfor ses et udvalg af mine offentlige projekter og eksempler fra GitHub. Flere projekter og løsninger er udviklet gennem uddannelse og arbejde, men kun de mest relevante og illustrative er vist her.',
    en: 'Below is a selection of my public projects and examples from GitHub. More projects and solutions have been developed through education and work, but only the most relevant and illustrative are shown here.',
  },
  projectsNote: {
    da: 'Disse projekter er udviklet gennem mine studier og praktikforløb, hvor jeg har arbejdet med forskellige teknologier og udviklingsprincipper. Projekterne demonstrerer min evne til at arbejde med moderne udviklingsværktøjer og metodikker i både individuelle og team-baserede miljøer.',
    en: 'These projects were developed through my studies and internships, where I worked with various technologies and development principles. The projects demonstrate my ability to work with modern development tools and methodologies in both individual and team-based environments.',
  },
  note: { da: 'Note:', en: 'Note:' },

  contactInfo: { da: 'Kontaktoplysninger', en: 'Contact Information' },
  address: { da: 'Adresse', en: 'Address' },
  phone: { da: 'Telefon', en: 'Phone' },
  email: { da: 'E-mail', en: 'Email' },
  downloadCv: { da: 'Download CV', en: 'Download CV' },
  downloadCvDesc: {
    da: 'Download mit CV som PDF.',
    en: 'Download my CV as PDF.',
  },
  contactFooter: {
    da: 'Tak fordi du tog dig tid til at læse mit CV. Jeg ser frem til at høre fra dig!',
    en: 'Thank you for taking the time to read my CV. I look forward to hearing from you!',
  },

  prevLanguages: { da: 'Forrige sprog', en: 'Previous languages' },
  nextLanguages: { da: 'Næste sprog', en: 'Next languages' },
  languageSlides: { da: 'Sprog slides', en: 'Language slides' },
  showSlide: { da: 'Vis slide', en: 'Show slide' },
}

export function label(key, lang = 'da') {
  return t(labels[key], lang)
}
