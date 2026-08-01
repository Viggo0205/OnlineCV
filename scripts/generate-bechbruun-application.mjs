import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = [
  path.join(__dirname, "generate-application-pdf.mjs"),
  "--lang", "da",
  "--company", "Bech-Bruun",
  "--contact", "IT-rekruttering",
  "--role", "Softwareudvikler",
  "--intro", "Jeg s\u00f8ger stillingen som softwareudvikler, fordi Bech-Bruuns retning \u2014 modernisering, integrationer, automatisering og ansvarlig brug af AI i et forretningskritisk milj\u00f8 \u2014 matcher det, jeg vil bygge min karriere p\u00e5. Jeg er nyuddannet datamatiker og er bevidst om, at I s\u00f8ger erfaring ud over studiet. Jeg h\u00e5ber alligevel, I vil vurdere mig p\u00e5 det, jeg har leveret i praksis: en praktik, hvor jeg tog ansvar for backend, API\u2019er og integrationer i et milj\u00f8, hvor l\u00f8sningerne skulle fungere for andre end mig selv.",
  "--profile", "I mit 10-ugers praktikforl\u00f8b hos Kruso designede og implementerede jeg backend-struktur i C# og .NET: REST API\u2019er, service-/repository-lag, SQL-baseret datalagring og integration med eksisterende systemer (Umbraco). Det gav mig erfaring med at s\u00e6tte mig ind i en kodebase, samarbejde om krav og levere noget, kolleger kunne bygge videre p\u00e5. Min hovedopgave om Model Context Protocol (MCP) har givet mig hands-on erfaring med AI-integration og API-koblinger. Jeg ser AI som et v\u00e6rkt\u00f8j til bl.a. forst\u00e5else, test og dokumentation \u2014 ikke som erstatning for solid ingeni\u00f8rarbejde.",
  "--highlights", "C# og .NET \u2014 backend-udvikling fra praktik og studieprojekter;REST API\u2019er og services \u2014 design og implementering hos Kruso;Integrationer mellem systemer \u2014 erfaring med at koble nye l\u00f8sninger til eksisterende platforme;SQL og datamodellering \u2014 SQLite, PostgreSQL og Entity Framework;Vedligehold og videreudvikling \u2014 arbejde i eksisterende kodebase med fokus p\u00e5 struktur og kvalitet;Test og kvalitetssikring \u2014 unit testing og integration testing;CI/CD og deployment \u2014 GitHub Actions og Azure Web Apps;Azure \u2014 praktisk erfaring med cloud-deployment;AI-assisteret udvikling \u2014 MCP-hovedopgave med fokus p\u00e5 ansvarlig integration;Dokumentation og samarbejde \u2014 vant til sparring og at oms\u00e6tte behov til tekniske l\u00f8sninger",
  "--ai", "Som person er jeg struktureret, nysgerrig og kvalitetsbevidst. Jeg trives med ansvar og forst\u00e5r, at diskretion, p\u00e5lidelighed og grundighed er afg\u00f8rende i en advokatvirksomhed. Jeg ser frem til at bidrage til jeres digitale udvikling p\u00e5 tv\u00e6rs af IT, Legal Tech og forretningen.",
  "--ending", "Jeg vil meget gerne h\u00f8re mere om rollen og fort\u00e6lle, hvordan jeg kan bidrage til jeres team. Tak fordi I overvejer min ans\u00f8gning.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: path.resolve(__dirname, "..") });
process.exit(result.status ?? 1);
