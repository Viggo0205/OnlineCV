import cvData from './cvData.js';
import { t } from './i18n.js';

const orderedExperienceIds = [2, 4, 1, 3];

/** Curated PDF skills — keyword-packed, no clutter */
export function getPdfSkillGroups(lang = 'da') {
  const labels =
    lang === 'da'
      ? {
          backend: 'Backend',
          frontend: 'Frontend',
          databases: 'Databaser',
          devops: 'DevOps & værktøjer',
          methods: 'Metoder',
        }
      : {
          backend: 'Backend',
          frontend: 'Frontend',
          databases: 'Databases',
          devops: 'DevOps & tools',
          methods: 'Methods',
        };

  return [
    {
      label: labels.backend,
      skills: ['C#', '.NET', 'REST API', 'Entity Framework Core', 'ASP.NET Core'],
    },
    {
      label: labels.frontend,
      skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML/CSS'],
    },
    {
      label: labels.databases,
      skills: ['SQL', 'PostgreSQL', 'SQLite'],
    },
    {
      label: labels.devops,
      skills: [
        'Git',
        'GitHub Actions (CI/CD)',
        'Azure App Service',
        'Unit testing',
        'Integration testing',
        'Linux',
      ],
    },
    {
      label: labels.methods,
      skills:
        lang === 'da'
          ? ['Scrum', 'Agile', 'Code reviews', 'Parprogrammering', 'Dokumentation']
          : ['Scrum', 'Agile', 'Code reviews', 'Pair programming', 'Documentation'],
    },
  ];
}

export function getTechnicalSkills(lang = 'da') {
  return getPdfSkillGroups(lang).flatMap((group) => group.skills);
}

export function getPdfExperienceEntries(lang = 'da') {
  return orderedExperienceIds
    .map((id) => cvData.experience.find((entry) => entry.id === id))
    .filter(Boolean)
    .map((entry) => ({
      role: t(entry.title, lang),
      company: t(entry.company, lang),
      period: entry.period,
      bullets: getExperienceBullets(entry, lang),
    }));
}

function getExperienceBullets(entry, lang) {
  if (entry.achievements?.length) {
    return entry.achievements.map((item) => t(item, lang));
  }

  if (entry.courses?.length) {
    const summary = t(entry.description, lang);
    const preferred =
      lang === 'da'
        ? ['Programmeringsprøven', 'Systemudviklingsprøven', 'Hovedopgave']
        : ['Programming Exam', 'System Development Exam', 'Final Thesis'];

    const courseSample = entry.courses
      .filter((course) => {
        const label = t(course, lang);
        return preferred.some((p) => label.includes(p));
      })
      .slice(0, 2)
      .map((course) => t(course, lang))
      .join(', ');

    const fallback = entry.courses
      .slice(0, 2)
      .map((course) => t(course, lang))
      .join(', ');

    const sample = courseSample || fallback;

    return sample
      ? [`${summary}`, `${lang === 'da' ? 'Udvalgte forløb' : 'Selected courses'}: ${sample}`]
      : [summary];
  }

  if (entry.description) {
    return [t(entry.description, lang)];
  }

  return [];
}

export function getPdfEducationEntries(lang = 'da') {
  return cvData.education.map((entry) => ({
    degree: t(entry.degree, lang),
    institution: t(entry.institution, lang),
    details: t(entry.details, lang),
    period: entry.period || '',
  }));
}

export function getFeaturedProjects(lang = 'da') {
  const featuredIds = cvData.pdf.featuredProjectIds;

  return cvData.projects
    .filter((project) => featuredIds.includes(project.id))
    .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id))
    .map((project) => {
      const tech = project.technologies.slice(0, 4).join(', ');
      return `${project.title} (${tech}): ${t(project.description, lang)}`;
    });
}

export function buildWebPdfData(lang = 'da') {
  const { personalInfo, pdf } = cvData;

  return {
    lang,
    name: personalInfo.name,
    title: t(personalInfo.title, lang),
    avatar: pdf.avatarPath,
    phone: personalInfo.phone,
    email: personalInfo.email,
    address: t(personalInfo.address, lang),
    linkedin: personalInfo.linkedin,
    github: personalInfo.github,
    onlineCv: pdf.onlineCv,
    summary: t(personalInfo.summary, lang),
    technicalSkills: getTechnicalSkills(lang),
    skillGroups: getPdfSkillGroups(lang),
    experience: getPdfExperienceEntries(lang),
    education: getPdfEducationEntries(lang),
    projects: getFeaturedProjects(lang),
  };
}

export function buildCliPdfData(lang = 'da', options = {}) {
  const { personalInfo, pdf } = cvData;

  return {
    lang,
    name: personalInfo.name,
    title: t(personalInfo.title, lang),
    avatar: options.avatarPath || null,
    phone: `+45 ${personalInfo.phone}`,
    email: personalInfo.email,
    linkedin: personalInfo.linkedin,
    github: personalInfo.github,
    onlineCv: pdf.onlineCv,
    summary: t(personalInfo.summary, lang),
    technicalSkills: getTechnicalSkills(lang),
    skillGroups: getPdfSkillGroups(lang),
    experience: getPdfExperienceEntries(lang),
    education: getPdfEducationEntries(lang),
    projects: getFeaturedProjects(lang),
  };
}
