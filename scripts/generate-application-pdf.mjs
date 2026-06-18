import fs from "node:fs";
import path from "node:path";
import React from "react";
import { Document, Page, Text, View, StyleSheet, renderToFile } from "@react-pdf/renderer";

const applicant = {
  name: "Victor Tadeusz Ulstrup Olszowski",
  phone: "+45 29176851",
  email: "Victor.olszowski@gmail.com",
  linkedin: "https://www.linkedin.com/in/victor-olszowski-56a40634b/",
  github: "https://github.com/Viggo0205"
};

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    if (!current.startsWith("--")) {
      continue;
    }

    const key = current.slice(2);
    const value = argv[i + 1];

    if (!value || value.startsWith("--")) {
      args[key] = "true";
      continue;
    }

    args[key] = value;
    i += 1;
  }

  return args;
}

function sanitizeFileName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function splitList(value) {
  if (!value) {
    return [];
  }

  return value
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);
}

const cliArgs = parseArgs(process.argv.slice(2));

const isEnglish = (cliArgs.lang || "da").toLowerCase() === "en";

const applicationData = {
  date: cliArgs.date || new Date().toLocaleDateString("da-DK"),
  company: cliArgs.company || "Virksomhed",
  contact: cliArgs.contact || "Ansættelsesudvalg",
  role: cliArgs.role || ".NET-udvikler",
  intro:
    cliArgs.intro ||
    "Jeg søger stillingen som " + (cliArgs.role || ".NET-udvikler") + ", fordi den rammer præcis dér, hvor mine kompetencer og min motivation mødes. Jeg har arbejdet med .NET-udvikling, REST-integrationer og databasedesign både i praktik og i egne projekter – og jeg er klar til at bringe det med ind i jeres team fra dag ét.",
  profile:
    cliArgs.profile ||
    "Jeg er nyuddannet datamatiker fra Zealand og har under min uddannelse fået solid, praktisk erfaring med backend-udvikling. I mit 10-ugers praktikforløb hos Kruso stod jeg selv for hele backend-strukturen på et interntværktøj: fra API-endpoints og servicelag til integrationer med Umbraco og Entity Framework Core. Jeg arbejder struktureret, tager ansvar for mine leverancer og kommunikerer tydeligt med både tekniske og ikke-tekniske kolleger.",
  highlights:
    splitList(cliArgs.highlights).length > 0
      ? splitList(cliArgs.highlights)
      : [
          "Designet og implementeret RESTful API med C# og .NET – fra endpoint til servicelag",
          "Repository-pattern arkitektur med Entity Framework Core og SQLite i praksis",
          "Integrationer til eksterne systemer og CMS (Umbraco), inkl. fejlhåndtering og validering",
          "Test, QA og CI/CD som en naturlig del af udviklingsflowet"
        ],
  ai: cliArgs.ai || "",
  ending:
    cliArgs.ending ||
    "Jeg vil meget gerne mødes og fortælle mere om, hvad jeg kan bidrage med. I er meget velkomne til at kontakte mig på telefon eller e-mail – jeg ser frem til at høre fra jer."
};

if (applicationData.highlights.length === 0) {
  applicationData.highlights = [
    "Udviklet backend med C# og .NET i praktikforloeb hos Kruso",
    "Bygget REST API-endpoints, service-lag og repository-lag",
    "Arbejdet med Entity Framework Core, validering og fejlhaandtering"
  ];
}

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#202020",
    lineHeight: 1.5
  },
  rightMeta: {
    textAlign: "right",
    fontSize: 10,
    color: "#555"
  },
  spacingSm: {
    marginTop: 8
  },
  spacingMd: {
    marginTop: 12
  },
  heading: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1f2e3d"
  },
  paragraph: {
    marginTop: 8
  },
  bullet: {
    marginTop: 6,
    marginLeft: 10
  },
  signature: {
    marginTop: 18
  },
  name: {
    marginTop: 2,
    fontWeight: "bold"
  },
  contactLine: {
    marginTop: 3,
    fontSize: 10,
    color: "#444"
  }
});

function ApplicationDocument() {
  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(Text, { style: styles.rightMeta }, applicationData.date),
      React.createElement(Text, { style: [styles.heading, styles.spacingMd] }, applicationData.company),
      React.createElement(Text, { style: styles.spacingSm }, applicationData.contact),
      React.createElement(Text, { style: styles.spacingMd }, isEnglish ? `Re: Application for the position of ${applicationData.role}` : `Vedr.: Ansogning til stillingen som ${applicationData.role}`),

      React.createElement(Text, { style: styles.paragraph }, isEnglish ? `Dear ${applicationData.contact},` : `Kære ${applicationData.contact},`),
      React.createElement(Text, { style: styles.paragraph }, applicationData.intro),
      React.createElement(Text, { style: styles.paragraph }, applicationData.profile),

      ...applicationData.highlights.map((item, index) =>
        React.createElement(Text, { key: `highlight-${index}`, style: styles.bullet }, `- ${item}`)
      ),

      ...(applicationData.ai && applicationData.ai !== "true" ? [React.createElement(Text, { style: styles.paragraph }, applicationData.ai)] : []),
      React.createElement(Text, { style: styles.paragraph }, applicationData.ending),

      React.createElement(Text, { style: styles.signature }, isEnglish ? "Kind regards," : "Med venlig hilsen"),
      React.createElement(Text, { style: styles.name }, applicant.name)
    )
  );
}

const outputDir = path.resolve("generated");
const slugCompany = sanitizeFileName(applicationData.company) || "virksomhed";
const slugRole = sanitizeFileName(applicationData.role) || "rolle";
const outputFile = path.join(outputDir, `ansoegning_${slugCompany}_${slugRole}.pdf`);

fs.mkdirSync(outputDir, { recursive: true });
await renderToFile(React.createElement(ApplicationDocument), outputFile);

console.log(`Application generated: ${outputFile}`);
console.log("Tip: Use --company \"Inforevision\" --contact \"Ansættelsesudvalg\" --role \\.NET-udvikler\"");
