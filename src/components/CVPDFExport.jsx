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
    flexDirection: "row",
    backgroundColor: "#F7F9FA",
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 0,
  },
  leftColumn: {
    width: "32%",
    backgroundColor: "#dbe6ea",
    padding: 16,
    paddingTop: 18,
    alignItems: "center",
  },
  rightColumn: {
    width: "68%",
    backgroundColor: "#fff",
    padding: 30,
    paddingLeft: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    objectFit: "cover",
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
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {data.avatar && (
            <Image src={data.avatar} style={styles.avatar} />
          )}
          <Text style={styles.sectionTitle}>{titles.contact[lang]}</Text>
          <Text style={styles.contactText}>{titles.phone[lang]}: {data.phone}</Text>
          <Text style={styles.contactText}>{titles.email[lang]}: {data.email}</Text>
          <Text style={styles.contactText}>{titles.address[lang]}: {data.address}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.links[lang]}</Text>
          <Text style={styles.contactText}>{titles.linkedin[lang]}: {data.linkedin}</Text>
          <Text style={styles.contactText}>{titles.github[lang]}: https://github.com/Viggo0205</Text>
          <Text style={styles.contactText}>{titles.onlinecv[lang]}: https://viggo0205.github.io/OnlineCV/</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.keySkills[lang]}</Text>
          <View style={styles.skillList}>
            {data.keySkills.map((skill, i) => (
              <Text key={i} style={styles.skillItem}>• {skill}</Text>
            ))}
          </View>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.technicalSkills[lang]}</Text>
          <View style={styles.skillList}>
            {data.technicalSkills.map((skill, i) => (
              <Text key={i} style={styles.skillItem}>• {skill}</Text>
            ))}
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.profileSummary[lang]}</Text>
          <Text style={styles.summary}>{data.summary.split('.').slice(0,2).join('. ') + '.'}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.education[lang]}</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.eduBlock}>
              <Text style={styles.eduTitle}>{edu.degree}</Text>
              <Text style={styles.eduSub}>{edu.location}</Text>
              <Text style={styles.eduSub}>{edu.years}</Text>
              <Text style={styles.eduSub}>{edu.specialization}</Text>
            </View>
          ))}
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.keyProjects[lang]}</Text>
          <View style={styles.skillList}>
            <Text style={styles.skillItem}>• MultiplayerFarmington (C#, Unity): Multiplayer game with networked architecture and real-time synchronization. <Text style={{ color: '#2a4a6a' }}>github.com/Viggo0205/MultiplayerFarmington</Text></Text>
            <Text style={styles.skillItem}>• Full-Stack Applications (C#, ASP.NET): End-to-end app development (FullStackOpgave, DevOpsOpgave), RESTful APIs, CI/CD. <Text style={{ color: '#2a4a6a' }}>github.com/Viggo0205/FullStackOpgave</Text></Text>
            <Text style={styles.skillItem}>• REST API Portfolio (C#, Python): Multiple API services, CRUD, JSON handling. <Text style={{ color: '#2a4a6a' }}>Multiple repositories</Text></Text>
            <Text style={styles.skillItem}>• IoT Solutions (Python, Raspberry Pi): UDPBroadcaster, SenseHat integration, network protocols, hardware interfacing. <Text style={{ color: '#2a4a6a' }}>github.com/Viggo0205/UDPBroadcaster</Text></Text>
            <Text style={styles.skillItem}>• Web Applications (HTML, CSS, JavaScript): KajakTurWebApp, WebApplikation, OnlineCV, responsive design. <Text style={{ color: '#2a4a6a' }}>github.com/Viggo0205/OnlineCV</Text></Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>{titles.experience[lang]}</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.expBlock}>
              <Text style={styles.expTitle}>{exp.title}</Text>
              <Text style={styles.expSub}><Text style={{ fontWeight: 'bold', color: '#2a4a6a' }}>{exp.location}</Text></Text>
              <Text style={styles.expSub}>{exp.years}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

// Example usage component

import { Download } from 'lucide-react';

const CVPDFExport = ({ cvData }) => (
  <PDFDownloadLink
    document={<CVDocument data={cvData} />}
    fileName="CV.pdf"
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
    <span>Download PDF</span>
  </PDFDownloadLink>
);

export default CVPDFExport;
