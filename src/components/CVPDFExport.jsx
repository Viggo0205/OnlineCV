import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Font
} from "@react-pdf/renderer";

// Example font import (optional)
// Font.register({ family: 'Open Sans', src: 'https://fonts.gstatic.com/s/opensans/v27/mem8YaGs126MiZpBA-UFVZ0e.ttf' });

const styles = StyleSheet.create({
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#dbe6ea',
      marginVertical: 6,
    },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
    paddingTop: 30,
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#2a4a6a",
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerText: {
    flex: 1,
  },
  avatar: {
    width: 84,
    height: 84,
    objectFit: "contain",
  },
  contactInfo: {
    fontSize: 9,
    color: "#555",
    marginBottom: 16,
  },
  skillsSection: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
  },
  skillsText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#222",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#1a2a3a",
    textAlign: 'left',
  },
  title: {
    fontSize: 13,
    color: "#2a4a6a",
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#3a4a5a",
    marginTop: 8,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  contactText: {
    fontSize: 9,
    marginBottom: 2,
    color: "#222",
  },
  skillList: {
    marginBottom: 8,
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 2,
    color: "#222",
  },
  summary: {
    fontSize: 11,
    marginBottom: 16,
    color: "#222",
    lineHeight: 1.5,
  },
  eduBlock: {
    marginBottom: 10,
  },
  eduTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#222",
  },
  eduSub: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
  },
  expBlock: {
    marginBottom: 12,
  },
  expTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1a2a3a",
  },
  expSub: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
  },
  expDesc: {
    fontSize: 10,
    color: "#222",
    lineHeight: 1.4,
  },
});

const CVDocument = ({ data }) => {
  // Translation object for section titles
  const titles = {
    contact: { da: 'Kontakt', en: 'Contact' },
    phone: { da: 'Telefon', en: 'Phone' },
    email: { da: 'E-mail', en: 'Email' },
    address: { da: 'Adresse', en: 'Address' },
    links: { da: 'Links', en: 'Links' },
    linkedin: { da: 'LinkedIn', en: 'LinkedIn' },
    github: { da: 'GitHub', en: 'GitHub' },
    onlinecv: { da: 'OnlineCV', en: 'OnlineCV' },
    keySkills: { da: 'Nøglekompetencer', en: 'Key Skills' },
    technicalSkills: { da: 'Tekniske færdigheder', en: 'Technical Skills' },
    profileSummary: { da: 'Profil', en: 'Profile Summary' },
    education: { da: 'Uddannelse', en: 'Education' },
    keyProjects: { da: 'Nøgleprojekter', en: 'Key Projects' },
    experience: { da: 'Erfaring', en: 'Experience' }
  };
  const lang = data.lang || 'da';
  
  // Create skills string for ATS parsing
  const skillsString = data.technicalSkills.join(', ');
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with photo, name and contact */}
        <View style={styles.header}>
          {data.avatar && (
            <Image src={data.avatar} style={styles.avatar} />
          )}
          <View style={styles.headerText}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </View>
        
        <View style={styles.contactInfo}>
          <Text>{titles.email[lang]}: {data.email} | {titles.phone[lang]}: +45 {data.phone}</Text>
          <Text>LinkedIn: {data.linkedin}</Text>
          <Text>GitHub: https://github.com/Viggo0205 | OnlineCV: https://viggo0205.github.io/OnlineCV/</Text>
        </View>

        {/* Technical Skills Section - Prominent for ATS */}
        <Text style={styles.sectionTitle}>{titles.technicalSkills[lang]}</Text>
        <View style={styles.skillsSection}>
          <Text style={styles.skillsText}>{skillsString}</Text>
        </View>

        {/* Profile Summary */}
        <Text style={styles.sectionTitle}>{titles.profileSummary[lang]}</Text>
        <Text style={styles.summary}>{data.summary.split('.').slice(0,2).join('. ') + '.'}</Text>
        <View style={styles.divider} />
        
        {/* Experience */}
        <Text style={styles.sectionTitle}>{titles.experience[lang]}</Text>
        {data.experience.map((exp, i) => (
          <View key={i} style={styles.expBlock}>
            <Text style={styles.expTitle}>{exp.title}</Text>
            <Text style={styles.expSub}><Text style={{ fontWeight: 'bold', color: '#2a4a6a' }}>{exp.location}</Text> | {exp.years}</Text>
          </View>
        ))}
        <View style={styles.divider} />
        
        {/* Education */}
        <Text style={styles.sectionTitle}>{titles.education[lang]}</Text>
        {data.education.map((edu, i) => (
          <View key={i} style={styles.eduBlock}>
            <Text style={styles.eduTitle}>{edu.degree}</Text>
            <Text style={styles.eduSub}>{edu.location} | {edu.years}</Text>
            <Text style={styles.eduSub}>{edu.specialization}</Text>
          </View>
        ))}
        <View style={styles.divider} />
        
        {/* Key Projects */}
        <Text style={styles.sectionTitle}>{titles.keyProjects[lang]}</Text>
        <View style={styles.skillList}>
          <Text style={styles.skillItem}>• Model Context Protocol (Python): {lang === 'da' ? 'Hovedopgave om MCP-integration til AI-værktøjer og protokoller.' : 'Final thesis on MCP integration for AI tools and protocols.'}</Text>
          <Text style={styles.skillItem}>• MultiplayerFarmington (C#, Unity): {lang === 'da' ? 'Multiplayer farming-spil med netværksarkitektur.' : 'Multiplayer farming game with networked architecture.'}</Text>
          <Text style={styles.skillItem}>• Full-Stack Applications (C#, ASP.NET): {lang === 'da' ? 'End-to-end appudvikling med RESTful APIs og CI/CD.' : 'End-to-end app development with RESTful APIs and CI/CD.'}</Text>
          <Text style={styles.skillItem}>• OnlineCV (React, Vite): {lang === 'da' ? 'Interaktivt portfolio-website med moderne frontend-teknologier.' : 'Interactive portfolio website with modern frontend technologies.'}</Text>
        </View>
      </Page>
    </Document>
  );
}

// Example usage component

import { Download } from 'lucide-react';

const CVPDFExport = ({ cvData }) => {
  const lang = cvData.lang || 'da';
  const buttonText = lang === 'en' ? 'Download PDF' : 'Download PDF';
  
  return (
    <PDFDownloadLink
      document={<CVDocument data={{...cvData, lang: lang}} />}
      fileName={`CV_${lang}.pdf`}
      className="btn btn-outline"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        textDecoration: 'none',
        height: '40px', // Match other nav button height
        minHeight: '40px',
        padding: '0 1em',
        boxSizing: 'border-box',
        verticalAlign: 'middle'
      }}
    >
      <Download size={16} />
      <span>{buttonText}</span>
    </PDFDownloadLink>
  );
};

export default CVPDFExport;
