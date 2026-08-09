import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { createPdfStyles, pdfSectionTitles } from "./pdfStyles.js";

function renderSkillGroups(data, styles, isCompact) {
  const groups = data.skillGroups;
  if (groups?.length) {
    return React.createElement(
      View,
      { style: isCompact ? styles.skillsBox : styles.skillsSection },
      ...groups.map((group, index) =>
        React.createElement(
          View,
          { key: `skill-group-${index}`, style: styles.skillGroupRow },
          React.createElement(Text, { style: styles.skillGroupLabel }, group.label),
          React.createElement(Text, { style: styles.skillGroupValue }, group.skills.join(" \u00b7 "))
        )
      )
    );
  }

  return React.createElement(
    View,
    { style: isCompact ? styles.skillsBox : styles.skillsSection },
    React.createElement(
      Text,
      { style: isCompact ? styles.paragraph : styles.skillsText },
      (data.technicalSkills || []).join(", ")
    )
  );
}

export function createCvPdfElement(data, variant = "web") {
  const styles = createPdfStyles();
  const titles = pdfSectionTitles;
  const lang = data.lang || "da";
  const isCompact = variant === "cli";
  const phone = String(data.phone).replace(/^\+45\s?/, "");

  const experienceNodes = data.experience.map((entry, index) =>
    React.createElement(
      View,
      { key: `exp-${index}`, style: isCompact ? styles.itemBlock : styles.expBlock, wrap: false },
      React.createElement(
        Text,
        { style: isCompact ? styles.itemTitle : styles.expTitle },
        entry.role || entry.title
      ),
      React.createElement(
        Text,
        { style: isCompact ? styles.itemMeta : styles.expSub },
        `${entry.company}${entry.period ? `  \u00b7  ${entry.period}` : ""}`
      ),
      ...(entry.bullets || []).map((bullet, bulletIndex) =>
        React.createElement(
          Text,
          { key: `exp-${index}-bullet-${bulletIndex}`, style: styles.bullet },
          `\u2022 ${bullet}`
        )
      )
    )
  );

  const educationNodes = data.education.map((entry, index) =>
    React.createElement(
      View,
      { key: `edu-${index}`, style: isCompact ? styles.itemBlock : styles.eduBlock },
      React.createElement(Text, { style: isCompact ? styles.itemTitle : styles.eduTitle }, entry.degree),
      React.createElement(
        Text,
        { style: isCompact ? styles.itemMeta : styles.eduSub },
        entry.period ? `${entry.institution}  \u00b7  ${entry.period}` : entry.institution
      ),
      React.createElement(Text, { style: isCompact ? styles.itemMeta : styles.eduSub }, entry.details)
    )
  );

  const projectNodes = data.projects.map((project, index) =>
    React.createElement(
      Text,
      { key: `project-${index}`, style: isCompact ? styles.bullet : styles.skillItem },
      `\u2022 ${project}`
    )
  );

  const headerChildren = [
    React.createElement(Text, { key: "name", style: styles.name }, data.name),
    React.createElement(
      Text,
      { key: "title", style: isCompact ? styles.titleCompact : styles.title },
      data.title
    ),
  ];

  if (isCompact) {
    headerChildren.push(
      React.createElement(
        View,
        { key: "contact", style: styles.contactInfo },
        React.createElement(Text, { style: styles.contactLine }, `${data.email}  \u00b7  ${data.phone}`),
        React.createElement(Text, { style: styles.contactLine }, data.linkedin),
        React.createElement(Text, { style: styles.contactLine }, `${data.github}  \u00b7  ${data.onlineCv}`)
      )
    );
  }

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(
        View,
        { style: styles.headerCompact },
        ...headerChildren
      ),
      !isCompact
        ? React.createElement(
            View,
            { style: styles.contactInfo },
            React.createElement(
              Text,
              { style: styles.contactLine },
              `${titles.email[lang]}: ${data.email}  \u00b7  ${titles.phone[lang]}: +45 ${phone}`
            ),
            React.createElement(Text, { style: styles.contactLine }, data.linkedin),
            React.createElement(Text, { style: styles.contactLine }, `${data.github}  \u00b7  ${data.onlineCv}`)
          )
        : null,
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
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.technicalSkills[lang]
      ),
      renderSkillGroups(data, styles, isCompact),
      React.createElement(
        Text,
        { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
        titles.experience[lang]
      ),
      ...experienceNodes,
      React.createElement(
        View,
        { wrap: false },
        React.createElement(
          Text,
          { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
          titles.education[lang]
        ),
        ...educationNodes
      ),
      React.createElement(
        View,
        { wrap: false },
        React.createElement(
          Text,
          { style: isCompact ? styles.sectionTitleCompact : styles.sectionTitle },
          titles.keyProjects[lang]
        ),
        React.createElement(View, { style: styles.skillList }, ...projectNodes)
      )
    )
  );
}