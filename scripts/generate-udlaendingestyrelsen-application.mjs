import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "generated");

const args = [
  path.join(__dirname, "generate-application-pdf.mjs"),
  "--lang", "da",
  "--company", "Udl\u00e6ndingestyrelsen, Koncern It",
  "--contact", "Jeppe Christoffer Tikj\u00f8b / Vera Mali",
  "--role", "Full Stack Udvikler",
  "--intro", "Jeg s\u00f8ger stillingen som Full Stack Udvikler i Udviklingsenheden, fordi rollen er skr\u00e6ddersyet til, hvor jeg st\u00e5r som nyuddannet datamatiker: jeg vil kode i et st\u00e6rkt fagligt milj\u00f8, l\u00e6re af erfarne kolleger gennem parl\u00f8b og code reviews \u2014 og bygge l\u00f8sninger, der g\u00f8r en reel forskel for borgere og sagsbehandlere. At I er midt i en transformationsrejse og investerer i interne udviklingskompetencer, g\u00f8r stillingen ekstra interessant for mig.",
  "--profile", "Jeg er nyuddannet datamatiker fra Zealand med praktisk backend-erfaring fra et 10-ugers praktikforl\u00f8b hos Kruso, hvor jeg designede og implementerede REST API\u2019er, service-/repository-lag og integrationer i C# og .NET. Jeg arbejdede med SQL, fejlh\u00e5ndtering, dokumentation, code reviews og Git \u2014 og jeg ved, hvad det kr\u00e6ver at levere noget, andre skal kunne vedligeholde. Gennem studieprojekter har jeg desuden arbejdet med JavaScript, Vue.js, React, CI/CD via GitHub Actions, deployment til Azure Web Apps samt unit testing og integration testing. Jeg er klar til at dykke ned i jeres kodebase, sp\u00f8rge n\u00e5r jeg sidder fast, og vokse mod at blive selvk\u00f8rende i teamet.",
  "--highlights", "C# og .NET \u2014 backend-udvikling fra praktik og studieprojekter;REST API\u2019er og integrationer \u2014 design og implementering hos Kruso;SQL og databaser \u2014 SQLite, PostgreSQL og Entity Framework;Frontend med JavaScript \u2014 Vue.js fra studiet og React i egne projekter;Git, code reviews og agilt samarbejde i praksis;Unit testing, integration testing og dokumentation;CI/CD og Azure \u2014 GitHub Actions og Azure Web Apps;Lyst til at l\u00e6re Angular/TypeScript og Azure DevOps i jeres stack",
  "--ai", "Jeg motiveres af, at jeres l\u00f8sninger binder styrelserne sammen og underst\u00f8tter sagsbehandling, pas, opholdskort og integrationer til Digital Post og CPR \u2014 arbejde med konkret effekt. Jeg er struktureret, nysgerrig og teamorienteret. Jeg er ikke bange for at sp\u00f8rge om hj\u00e6lp, og jeg ser frem til parl\u00f8b med Lead, Scrum/Kanban og at bidrage til en stabil str\u00f8m af featureudvikling, tests og fejls\u00f8gning.",
  "--ending", "Jeg vil meget gerne m\u00f8des og fort\u00e6lle mere om, hvordan jeg kan bidrage til Udviklingsenheden. Jeg st\u00e5r naturligvis til r\u00e5dighed for samtale i uge 33 \u2014 og for jeres faglige case, hvis I \u00f8nsker at g\u00e5 videre.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: rootDir });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const sourceFile = path.join(outputDir, "ansoegning_udlaendingestyrelsen-koncern-it_full-stack-udvikler.pdf");
const targetFile = path.join(outputDir, "Ansogning_Udlaendingestyrelsen_V.Olszowski.pdf");

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied to: ${targetFile}`);
} else {
  const matches = fs.readdirSync(outputDir).filter((f) => f.includes("udlaendinge") || f.includes("koncern") || f.includes("full-stack"));
  console.log("Source not found. Candidates:", matches);
}