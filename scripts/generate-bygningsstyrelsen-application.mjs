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
  "--company", "Bygningsstyrelsen",
  "--contact", "Niklas Kj\u00e6r Nielsen, teamleder",
  "--role", "IT-udvikler",
  "--intro", "Jeg s\u00f8ger stillingen som IT-udvikler i Center for \u00d8konomi og IT, fordi rollen rammer pr\u00e6cis d\u00e9r, hvor jeg gerne vil bygge videre: robuste .NET-l\u00f8sninger, integrationer mellem systemer og et t\u00e6t samarbejde med forretningen om digitale platforme, der skal virke i hverdagen. At I prioriterer en ny data- og integrationsplatform og samtidig giver en konkret, strategisk f\u00f8rsteopgave inden for facility management, g\u00f8r stillingen ekstra interessant for mig som nyuddannet datamatiker.",
  "--profile", "Jeg er nyuddannet datamatiker fra Zealand med praktisk backend-erfaring fra et 10-ugers praktikforl\u00f8b hos Kruso, hvor jeg designede og implementerede REST API\u2019er, service-/repository-lag og integrationer i C# og .NET. Jeg arbejdede med SQL, fejlh\u00e5ndtering, dokumentation, code reviews og Git \u2014 og jeg ved, hvad det kr\u00e6ver at levere noget, andre skal kunne vedligeholde og bygge videre p\u00e5. Gennem studieprojekter har jeg desuden arbejdet med CI/CD via GitHub Actions, deployment til Azure Web Apps, unit testing og integration testing. Jeg er klar over, at I gerne ser erhvervserfaring, men jeres opslag \u00e5bner for alle erfaringsniveauer \u2014 og jeg s\u00f8ger, fordi min profil matcher den tekniske kerne: .NET/C#, API\u2019er, integrationer og relationelle databaser.",
  "--highlights", "C# og .NET \u2014 backend-udvikling fra praktik og studieprojekter;REST API\u2019er og integrationer \u2014 design og implementering hos Kruso;SQL og dataadgang \u2014 SQLite, PostgreSQL og Entity Framework;Test, fejlfinding og dokumentation \u2014 unit- og integrationstest samt struktureret fejlh\u00e5ndtering;CI/CD og Azure Web Apps \u2014 GitHub Actions og cloud-deployment;Git og samarbejde \u2014 code reviews og agile processer i praksis;Forretningsn\u00e6r tilgang \u2014 fokus p\u00e5 l\u00f8sninger, der skal kunne bruges og vedligeholdes af andre;Nysgerrig p\u00e5 Azure, dataflows og integrationer i st\u00f8rre systemlandskaber",
  "--ai", "Jeg motiveres af, at l\u00f8sningerne hos jer har direkte effekt p\u00e5 kollegernes arbejde \u2014 pr\u00e6cis den f\u00f8lelse, Anders beskriver. Jeg er ops\u00f8gende, tager ansvar for opgaver til d\u00f8rs og trives i samarbejdet mellem tekniske og forretningsm\u00e6ssige interessenter. Jeg forventer ikke at kunne alt fra dag \u00e9t, men jeg vil gerne bidrage aktivt til udviklingen af jeres IT- og datalandskab \u2014 og l\u00e6re Azure, arkitekturvalg og de f\u00e6lles integrationer, I er i gang med at etablere.",
  "--ending", "Jeg vil meget gerne m\u00f8des og fort\u00e6lle mere om, hvordan jeg kan bidrage til teamet og faktureringsprojektet. Jeg ser frem til at h\u00f8re fra jer \u2014 og til jeres faglige hjemmeopgave, hvis I \u00f8nsker at g\u00e5 videre med min ans\u00f8gning.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: rootDir });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const sourceFile = path.join(outputDir, "ansoegning_bygningsstyrelsen_it-udvikler.pdf");
const targetFile = path.join(outputDir, "Ansogning_Bygningsstyrelsen_V.Olszowski.pdf");

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied to: ${targetFile}`);
}