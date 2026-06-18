import cvData from './cvData.js';
import { t } from './i18n.js';

const orderedExperienceIds = [2, 1, 3];

export function getTechnicalSkills() {
  return [
    ...cvData.programmingSkills.languages.map((item) => item.name),
    ...cvData.programmingSkills.tools,
    ...cvData.programmingSkills.frameworks.map((item) => item.name),
    'Git',
  ];
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
    const courseSample = entry.courses
      .slice(0, 2)
      .map((course) => t(course, lang))
      .join(', ');

    return courseSample
      ? [`${summary}`, `${lang === 'da' ? 'Udvalgte forløb' : 'Selected courses'}: ${courseSample}`]
      : [summary];
  }

  return [t(entry.description, lang)];
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
      const tech = project.technologies.slice(0, 3).join(', ');
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
    technicalSkills: getTechnicalSkills(),
    experience: getPdfExperienceEntries(lang),
    education: getPdfEducationEntries(lang),
    projects: getFeaturedProjects(lang),
  };
}

export function buildCliPdfData(lang = 'da') {
  const { personalInfo, pdf } = cvData;

  return {
    lang,
    name: t(pdf.displayName, lang),
    title: t(personalInfo.title, lang),
    phone: `+45 ${personalInfo.phone}`,
    email: personalInfo.email,
    linkedin: personalInfo.linkedin,
    github: personalInfo.github,
    onlineCv: pdf.onlineCv,
    summary: t(personalInfo.summary, lang),
    technicalSkills: getTechnicalSkills(),
    experience: getPdfExperienceEntries(lang),
    education: getPdfEducationEntries(lang),
    projects: getFeaturedProjects(lang),
  };
}
