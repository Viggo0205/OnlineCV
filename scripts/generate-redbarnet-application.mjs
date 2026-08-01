import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = [
  path.join(__dirname, "generate-application-pdf.mjs"),
  "--lang", "da",
  "--company", "Red Barnet",
  "--contact", "Software Development teamet, IT-sektionen",
  "--role", "Software developer (fastans\u00e6ttelse)",
  "--intro", "Jeg s\u00f8ger stillingen som software developer i fastans\u00e6ttelse i Red Barnets IT-team, fordi rollen er skr\u00e6ddersyet til at oms\u00e6tte teori til praksis: integrationer, vedligehold, test og dokumentation i en organisation, hvor software skal fungere for kolleger og samarbejdspartnere hver dag. Jeg er nyuddannet datamatiker og motiveres af at arbejde med forretningskritiske l\u00f8sninger, der g\u00f8r en reel forskel \u2014 og Red Barnets mission giver det arbejde en mening, jeg gerne vil st\u00e5 bag.",
  "--profile", "I mit 10-ugers praktikforl\u00f8b hos Kruso designede og implementerede jeg backend-l\u00f8sninger i C# og .NET med REST API\u2019er, service-/repository-lag og integration til eksisterende systemer. Jeg arbejdede med SQL, fejlh\u00e5ndtering, code reviews og agile processer med Git \u2014 og jeg ved, hvad det kr\u00e6ver at levere noget, andre skal kunne vedligeholde og bygge videre p\u00e5. Gennem studieprojekter har jeg desuden arbejdet med CI/CD via GitHub Actions, deployment til Azure Web Apps, unit testing og integration testing.",
  "--highlights", "C# og .NET \u2014 backend-udvikling fra praktik og studieprojekter;Git og versionsstyring \u2014 daglig brug i praktik og projekter;REST API\u2019er og integrationer \u2014 design og implementering hos Kruso;Vedligehold og tilpasning af eksisterende l\u00f8sninger i praksis;SQL og dataforesp\u00f8rgelser \u2014 SQLite, PostgreSQL og Entity Framework;Test og dokumentation af tekniske l\u00f8sninger;CI/CD og Azure Web Apps \u2014 GitHub Actions og cloud-deployment;Fejls\u00f8gning og struktureret probleml\u00f8sning i integrationer og backend;Samarbejde p\u00e5 tv\u00e6rs af fagligheder og formidling af tekniske l\u00f8sninger",
  "--ai", "Jeg er struktureret, nysgerrig og vant til at tage ansvar for opgaver til d\u00f8rs. Jeg er ikke bange for at sp\u00f8rge, n\u00e5r noget er uklart, og jeg trives i et milj\u00f8 med variation, hvor to dage sj\u00e6ldent er ens. Jeg ser frem til at l\u00e6re Azure DevOps, Power Platform og jeres \u00f8vrige enterprise-stack \u2014 og til at bidrage til et lille, professionelt team, hvor kvalitet og samarbejde er en naturlig del af hverdagen.",
  "--ending", "Jeg vil meget gerne h\u00f8re mere om rollen og teamet og fort\u00e6lle, hvordan jeg kan bidrage fra dag \u00e9t. Tak fordi I overvejer min ans\u00f8gning.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: path.resolve(__dirname, "..") });
process.exit(result.status ?? 1);
