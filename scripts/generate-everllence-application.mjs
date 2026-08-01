import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = [
  path.join(__dirname, "generate-application-pdf.mjs"),
  "--lang", "en",
  "--company", "Everllence",
  "--contact", "Edge Platform Team",
  "--role", "Software Engineer",
  "--intro", "I am applying for the Software Engineer position on the Edge Platform team. As a recently graduated computer science professional with hands-on experience in C#/.NET, Python, automated testing, and CI/CD, I am motivated to contribute to Everllence\u2019s Over-The-Air update platform and to work on software that supports a more sustainable future for large engine systems.",
  "--profile", "I recently completed my Datamatiker degree at Zealand, supported by 100 ECTS in Cyber Technology from DTU, giving me a strong foundation in programming, networks, software engineering, and cybersecurity. During a 10-week internship at Kruso, I designed and implemented backend solutions in C# and .NET, including REST APIs, service/repository architecture, and SQL-based data access. Through academic and personal projects, I have gained practical experience with unit and integration testing, Azure Web App deployment, and CI/CD pipelines using GitHub Actions.",
  "--highlights", "C# and Python development across backend services, APIs, and automation projects;GitHub Actions CI/CD pipelines and Azure Web App deployment;Unit testing and integration testing as part of development workflows;TCP/UDP server-client architecture from a multiplayer Unity project;Linux and VirtualBox experience for development and virtual test environments;Cybersecurity fundamentals from DTU coursework and secure API design in my MCP thesis project",
  "--ai", "I am particularly drawn to the Edge Platform team\u2019s end-to-end responsibility for OTA updates, virtual and physical test environments, and cybersecurity enhancements. I enjoy working close to the system \u2014 from client/server communication and automated testing to reliable deployment pipelines \u2014 and I am eager to grow within a cross-functional engineering team building software that runs on real hardware in production.",
  "--ending", "I would welcome the opportunity to discuss how my technical background and motivation to learn can support the Edge Platform team. Thank you for considering my application.",
];

const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: path.resolve(__dirname, "..") });
process.exit(result.status ?? 1);
