import { readdir, readFile, writeFile } from "fs/promises";
import { join, resolve } from "path";

const REGISTRY_DIR = resolve("registry");
const OUT_FILE = resolve("registry/index.json");

async function buildRegistry() {
  const dirs = await readdir(REGISTRY_DIR, { withFileTypes: true });
  const components = [];

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;

    const registryPath = join(REGISTRY_DIR, dir.name, "registry.json");
    try {
      const raw = await readFile(registryPath, "utf-8");
      const data = JSON.parse(raw);
      components.push({
        ...data,
        name: dir.name,
        sourceUrl: `https://raw.githubusercontent.com/charanbalaji2005/Frosted-UI-Components/main/registry/${dir.name}/component.tsx`,
        docsUrl: `https://frosted-ui.dev/docs/${dir.name}`,
      });
    } catch {
      console.warn(`Skipping ${dir.name} — no registry.json found`);
    }
  }

  const index = {
    version: "1.0.0",
    updatedAt: new Date().toISOString(),
    components,
  };

  await writeFile(OUT_FILE, JSON.stringify(index, null, 2));
  console.log(`✦ Registry built — ${components.length} components indexed`);
}

buildRegistry().catch(console.error);
