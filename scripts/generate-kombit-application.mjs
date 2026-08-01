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
  "--company", "KOMBIT",
  "--contact", "Lars Vraa, Chef for Design \u0026 Arkitektur",
  "--role", "AI-udvikler",
  "--intro", "Jeg s\u00f8ger stillingen som AI-udvikler hos KOMBIT, fordi rollen kombinerer det, jeg br\u00e6nder for: ansvarlig softwareudvikling, AI-teknologi i praksis og l\u00f8sninger, der skaber reel v\u00e6rdi for borgere og kommuner. KOMBITs fokus p\u00e5 at modne AI fra id\u00e9 til produktion \u2014 i et st\u00e6rkt fagligt milj\u00f8 sammen med kommunerne \u2014 passer pr\u00e6cis til, hvor jeg ser min karriere tage form som nyuddannet datamatiker.",
  "--profile", "Jeg er nyuddannet datamatiker fra Zealand med praktisk backend-erfaring fra et 10-ugers praktikforl\u00f8b hos Kruso, hvor jeg designede og implementerede REST API\u2019er, service-lag og integrationer i C# og .NET. Min hovedopgave handlede om Model Context Protocol (MCP) og AI-integration i Python \u2014 med fokus p\u00e5 API-design, sikkerhed, dataflow og kobling mellem AI-v\u00e6rkt\u00f8jer og eksterne systemer. Gennem studiet har jeg desuden arbejdet med CI/CD via GitHub Actions, deployment til Azure Web Apps, unit testing og integration testing. Jeg ser mig prim\u00e6rt som en AI-nysgerrig softwareudvikler med st\u00e6rke DevOps- og integrationskompetencer \u2014 og jeg motiveres af at bygge l\u00f8sninger, andre kan stole p\u00e5 i drift.",
  "--highlights", "Model Context Protocol (MCP) og AI-integration \u2014 hovedopgave med Python, API-design og protokoller;Backend-udvikling i C# og .NET \u2014 REST API\u2019er, services og integrationer fra praktik hos Kruso;CI/CD og cloud-deployment \u2014 GitHub Actions og Azure Web Apps;Test og kvalitetssikring \u2014 unit testing og integration testing som del af udviklingsflowet;Integration mellem systemer \u2014 erfaring med at koble nye l\u00f8sninger til eksisterende platforme;Git og struktureret samarbejde \u2014 code reviews og agile udvikling i praksis;Ansvarlig tilgang til AI \u2014 sikkerhed og dataflow som bevidste designvalg i hovedopgaven;React og full stack-projekter \u2014 bl.a. portfolio og studieopgaver",
  "--ai", "Jeg motiveres af offentlig digitalisering, hvor kvalitet, sikkerhed og tillid ikke er buzzwords, men foruds\u00e6tninger. Jeg er nysgerrig, tager ansvar for opgaver til d\u00f8rs og trives i tv\u00e6rfaglige milj\u00f8er, hvor udviklere, arkitekter og dom\u00e6neeksperter arbejder mod samme m\u00e5l. Jeg ser frem til at l\u00e6re af KOMBITs AI core team \u2014 og til at bidrage praktisk til udvikling, test og videreudvikling af l\u00f8sninger som jeres AI Assistent, hvor AI skal underst\u00f8tte mennesker, ikke erstatte dem.",
  "--ending", "Jeg vil meget gerne h\u00f8re mere om teamet og fort\u00e6lle, hvordan jeg kan bidrage. Jeg st\u00e5r naturligvis til r\u00e5dighed for en samtale og ser frem til jeres screening.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: rootDir });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const sourceFile = path.join(outputDir, "ansoegning_kombit_ai-udvikler.pdf");
const targetFile = path.join(outputDir, "Ansogning_KOMBIT_V.Olszowski.pdf");

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied to: ${targetFile}`);
}