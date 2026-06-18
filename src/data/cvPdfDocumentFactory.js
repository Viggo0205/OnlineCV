import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { createPdfStyles, pdfSectionTitles } from './pdfStyles.js';

export function createCvPdfElement(data, variant = 'web') {
  const styles = createPdfStyles();
  const titles = pdfSectionTitles;
  const lang = data.lang || 'da';
  const skillsString = data.technicalSkills.join(', ');
  const isCompact = variant === 'cli';
  const phone = String(data.phone).replace(/^\+45\s?/, '');

  const experienceNodes = data.experience.flatMap((entry, index) => {
    const block = React.createElement(
      View,
      { key: `exp-${index}`, style: isCompact ? styles.itemBlock : styles.expBlock },
      React.createElement(
        Text,
        { style: isCompact ? styles.itemTitle : styles.expTitle },
        entry.role || entry.title
      ),
      React.createElement(
        Text,
        { style: isCompact ? styles.itemMeta : styles.expSub },
        `${entry.company}${entry.period ? ` | ${entry.period}` : ''}`
      ),
      ...(entry.bullets || []).map((bullet, bulletIndex) =>
        React.createElement(
          Text,
          { key: `exp-${index}-bullet-${bulletIndex}`, style: styles.bullet },
          `- ${bullet}`
        )
      )
    );

    return [block];
  });

  const educationNodes = data.education.map((entry, index) =>
    React.createElement(
      View,
      { key: `edu-${index}`, style: isCompact ? styles.itemBlock : styles.eduBlock },
      React.createElement(Text, { style: isCompact ? styles.itemTitle : styles.eduTitle }, entry.degree),
      React.createElement(Text, { style: isCompact ? styles.itemMeta : styles.eduSub }, entry.institution),
      entry.period
        ? React.createElement(Text, { style: isCompact ? styles.itemMeta : styles.eduSub }, entry.period)
        : null,
      React.createElement(Text, { style: isCompact ? undefined : styles.eduSub }, entry.details)
    )
  );

  const projectNodes = data.projects.map((project, index) =>
    React.createElement(
      Text,
      { key: `project-${index}`, style: isCompact ? styles.bullet : styles.skillItem },
      isCompact ? `- ${project}` : `• ${project}`
    )
  );

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      React.createElement(
        View,
        { style: isCompact ? styles.headerCompact : styles.header },
        !isCompact && data.avatar
          ? React.createElement(Image, { src: data.avatar, style: styles.avatar })
          : null,
        React.createElement(
          View,
          { style: isCompact ? undefined : styles.headerText },
          React.createElement(Text, { style: styles.name }, data.name),
          React.createElement(
            Text,
            { style: isCompact ? styles.titleCompact : styles.title },
            data.title
          ),
          isCompact
            ? [
                React.createElement(
                  Text,
                  { key: 'contact-email', style: styles.contactLine },
                  `Email: ${data.email} | Phone: ${data.phone}`
                ),
                React.createElement(
                  Text,
                  { key: 'contact-linkedin', style: styles.contactLine },
                  `LinkedIn: ${data.linkedin}`
                ),
                React.createElement(
                  Text,
                  { key: 'contact-github', style: styles.contactLine },
                  `GitHub: ${data.github} | OnlineCV: ${data.onlineCv}`
                ),
              ]
            : null
        )
      ),
      !isCompact
        ? React.createElement(
            View,
            { style: styles.contactInfo },
            React.createElement(
              Text,
              null,
              `${titles.email[lang]}: ${data.email} | ${titles.phone[lang]}: +45 ${phone}`
            ),
            React.createElement(Text, null, `LinkedIn: ${data.linkedin}`),
            React.createElement(Text, null, `GitHub: ${data.github} | OnlineCV: ${data.onlineCv}`)
          )
        : null,
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.technicalSkills[lang]
      ),
      React.createElement(
        View,
        { style: isCompact ? styles.skillsBox : styles.skillsSection },
        React.createElement(
          Text,
          { style: isCompact ? styles.paragraph : styles.skillsText },
          skillsString
        )
      ),
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.profileSummary[lang]
      ),
      React.createElement(
        Text,
        { style: isCompact ? styles.paragraph : styles.summary },
        data.summary
      ),
      !isCompact ? React.createElement(View, { style: styles.divider }) : null,
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.experience[lang]
      ),
      ...experienceNodes,
      !isCompact ? React.createElement(View, { style: styles.divider }) : null,
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.education[lang]
      ),
      ...educationNodes,
      !isCompact ? React.createElement(View, { style: styles.divider }) : null,
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.keyProjects[lang]
      ),
      React.createElement(View, { style: styles.skillList }, ...projectNodes)
    )
  );
}
