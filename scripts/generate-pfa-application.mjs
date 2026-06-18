import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = [
  path.join(__dirname, "generate-application-pdf.mjs"),
  "--company", "PFA",
  "--contact", "Frederik Lilja, leder af Automatisering",
  "--role", "Softwareudvikler til AI & Automation",
  "--intro", "Jeg s\u00f8ger stillingen som Softwareudvikler til AI & Automation, fordi den rammer pr\u00e6cis d\u00e9r, hvor jeg br\u00e6nder for at arbejde: krydsfeltet mellem automatisering, integrationer og agent-baseret AI. PFA\u2019s arbejde med at forbinde BPM-workflows og AI i st\u00f8rre skala matcher b\u00e5de min uddannelse og min hovedopgave, og jeg motiveres af at bidrage til l\u00f8sninger med h\u00f8j kvalitet, governance og stabil drift.",
  "--profile", "Jeg er nyuddannet datamatiker fra Zealand med praktisk backend-erfaring fra et 10-ugers praktikforl\u00f8b hos Kruso, hvor jeg designede og implementerede REST API\u2019er, service- og repository-lag samt SQL-baseret datalagring i C# og .NET. Under min uddannelse har jeg desuden arbejdet med BPM-diagrammer og procesforst\u00e5else, og min hovedopgave handlede om Model Context Protocol (MCP) og AI-integration i Python med API-koblinger til eksterne systemer. Jeg t\u00e6nker API-first, arbejder struktureret med kodekvalitet og test, og trives i t\u00e6t samarbejde med kolleger om tekniske l\u00f8sninger.",
  "--highlights", "Designet og implementeret REST API\u2019er og integrationer i C#/.NET med fokus p\u00e5 vedligeholdelsesvenlig arkitektur;Udviklet MCP-baseret AI-integration i Python som hovedopgave, herunder automatisering via API\u2019er og agent-lignende workflows;Grundl\u00e6ggende erfaring med BPM-modellering og procesforst\u00e5else fra studiet;Arbejdet med CI/CD, test og kvalitetssikring som en naturlig del af udviklingsflowet",
  "--ai", "Jeg har en genuin interesse for, hvordan AI kan blive en praktisk kapabilitet i automatiseringer, der kalder og kaldes af andre systemer, og jeg er nysgerrig p\u00e5 at udvikle mig inden for agent-frameworks, governance og produktionsdrift i et reguleret milj\u00f8 som PFA. Som nyuddannet bringer jeg solid teknisk fundament, l\u00e6revillighed og et brobygger-mindset mellem automatisering og AI.",
  "--ending", "Jeg vil meget gerne h\u00f8re mere om rollen og fort\u00e6lle, hvordan jeg kan bidrage til automatiseringsteamets videre modning. I er velkomne til at kontakte mig, og jeg ser frem til en dialog.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: path.resolve(__dirname, "..") });
process.exit(result.status ?? 1);
