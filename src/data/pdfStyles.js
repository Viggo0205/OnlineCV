import { StyleSheet } from '@react-pdf/renderer';

export const pdfSectionTitles = {
  contact: { da: 'Kontakt', en: 'Contact' },
  phone: { da: 'Telefon', en: 'Phone' },
  email: { da: 'E-mail', en: 'Email' },
  technicalSkills: { da: 'Tekniske færdigheder', en: 'Technical Skills' },
  profileSummary: { da: 'Profil', en: 'Profile Summary' },
  education: { da: 'Uddannelse', en: 'Education' },
  keyProjects: { da: 'Nøgleprojekter', en: 'Key Projects' },
  experience: { da: 'Erfaring', en: 'Experience' },
};

export function createPdfStyles() {
  return StyleSheet.create({
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#dbe6ea',
      marginVertical: 6,
    },
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      fontFamily: 'Helvetica',
      fontSize: 10,
      padding: 40,
      paddingTop: 30,
    },
    header: {
      marginBottom: 16,
      borderBottomWidth: 2,
      borderBottomColor: '#2a4a6a',
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    headerCompact: {
      marginBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#2a4a6a',
      paddingBottom: 8,
    },
    headerText: {
      flex: 1,
    },
    avatar: {
      width: 84,
      height: 84,
      objectFit: 'contain',
    },
    contactInfo: {
      fontSize: 9,
      color: '#555',
      marginBottom: 16,
    },
    contactLine: {
      fontSize: 9,
      color: '#4a4a4a',
      lineHeight: 1.4,
      marginTop: 6,
    },
    skillsSection: {
      marginBottom: 16,
      padding: 12,
      backgroundColor: '#f5f5f5',
      borderRadius: 4,
    },
    skillsBox: {
      backgroundColor: '#f2f5f8',
      padding: 8,
      borderRadius: 3,
      lineHeight: 1.5,
    },
    skillsText: {
      fontSize: 9,
      lineHeight: 1.6,
      color: '#222',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 2,
      color: '#1a2a3a',
      textAlign: 'left',
    },
    title: {
      fontSize: 13,
      color: '#2a4a6a',
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    titleCompact: {
      marginTop: 2,
      fontSize: 12,
      color: '#2a4a6a',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#3a4a5a',
      marginTop: 8,
      marginBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    sectionTitleCompact: {
      marginTop: 10,
      marginBottom: 5,
      fontSize: 11,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#2f3f50',
    },
    summary: {
      fontSize: 11,
      marginBottom: 16,
      color: '#222',
      lineHeight: 1.5,
    },
    paragraph: {
      lineHeight: 1.45,
    },
    eduBlock: {
      marginBottom: 10,
    },
    eduTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#222',
    },
    eduSub: {
      fontSize: 10,
      color: '#555',
      marginBottom: 2,
    },
    expBlock: {
      marginBottom: 12,
    },
    itemBlock: {
      marginBottom: 7,
    },
    expTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#1a2a3a',
    },
    itemTitle: {
      fontWeight: 'bold',
      color: '#1f2e3e',
    },
    expSub: {
      fontSize: 10,
      color: '#555',
      marginBottom: 2,
    },
    itemMeta: {
      color: '#555',
      marginBottom: 2,
    },
    skillList: {
      marginBottom: 8,
    },
    skillItem: {
      fontSize: 10,
      marginBottom: 2,
      color: '#222',
    },
    bullet: {
      marginLeft: 8,
      marginBottom: 1,
      lineHeight: 1.4,
    },
  });
}
