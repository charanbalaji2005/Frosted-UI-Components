#!/usr/bin/env node
#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_commander = require("commander");
var import_chalk = __toESM(require("chalk"));
var import_ora = __toESM(require("ora"));
var import_path = __toESM(require("path"));
var import_fs_extra = __toESM(require("fs-extra"));
var import_execa = require("execa");
var import_prompts = __toESM(require("prompts"));
var REGISTRY_BASE = "https://raw.githubusercontent.com/frosted-ui/frosted-ui/main/registry";
var COMPONENTS = [
  "floating-island-bar",
  "expandable-nav-sheet",
  "pill-bar",
  "pebble-bar",
  "wave-bar",
  "crystal-bar",
  "arc-bar",
  "ribbon-bar",
  "dock-bar",
  "app-launcher",
  "command-sheet",
  "profile-sheet",
  "floating-search-orb",
  "floating-action-button",
  "floating-command-bar"
];
async function detectProject(cwd) {
  const pkg = await import_fs_extra.default.readJson(import_path.default.join(cwd, "package.json")).catch(() => ({}));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  let framework = "unknown";
  if (deps["next"]) framework = "nextjs";
  else if (deps["vite"]) framework = "vite";
  else if (deps["@remix-run/node"] || deps["@remix-run/react"]) framework = "remix";
  const typescript = !!(deps["typescript"] || await import_fs_extra.default.pathExists(import_path.default.join(cwd, "tsconfig.json")));
  const tailwind = !!(deps["tailwindcss"] || await import_fs_extra.default.pathExists(import_path.default.join(cwd, "tailwind.config.js")) || await import_fs_extra.default.pathExists(import_path.default.join(cwd, "tailwind.config.ts")));
  const srcDir = await import_fs_extra.default.pathExists(import_path.default.join(cwd, "src"));
  let packageManager = "npm";
  if (await import_fs_extra.default.pathExists(import_path.default.join(cwd, "bun.lockb"))) packageManager = "bun";
  else if (await import_fs_extra.default.pathExists(import_path.default.join(cwd, "pnpm-lock.yaml"))) packageManager = "pnpm";
  else if (await import_fs_extra.default.pathExists(import_path.default.join(cwd, "yarn.lock"))) packageManager = "yarn";
  const candidateDirs = [
    import_path.default.join(cwd, srcDir ? "src" : "", "components"),
    import_path.default.join(cwd, "components")
  ];
  let componentsDir = candidateDirs[0];
  for (const dir of candidateDirs) {
    if (await import_fs_extra.default.pathExists(dir)) {
      componentsDir = dir;
      break;
    }
  }
  return { root: cwd, framework, typescript, tailwind, srcDir, componentsDir, packageManager };
}
async function installDeps(deps, config) {
  const pkgPath = import_path.default.join(config.root, "package.json");
  const pkg = await import_fs_extra.default.readJson(pkgPath).catch(() => ({ dependencies: {} }));
  const existing = { ...pkg.dependencies, ...pkg.devDependencies };
  const toInstall = deps.filter((d) => !existing[d]);
  if (toInstall.length === 0) return;
  const spinner = (0, import_ora.default)(`Installing ${toInstall.join(", ")}\u2026`).start();
  const installCmd = {
    npm: ["npm", "install", "--save"],
    pnpm: ["pnpm", "add"],
    yarn: ["yarn", "add"],
    bun: ["bun", "add"]
  }[config.packageManager];
  try {
    await (0, import_execa.execa)(installCmd[0], [...installCmd.slice(1), ...toInstall], { cwd: config.root });
    spinner.succeed(import_chalk.default.green(`Installed: ${toInstall.join(", ")}`));
  } catch {
    spinner.fail(import_chalk.default.red(`Failed to install deps. Run manually: ${installCmd[0]} add ${toInstall.join(" ")}`));
  }
}
async function fetchComponentFile(name, typescript) {
  const ext = typescript ? "tsx" : "jsx";
  const url = `${REGISTRY_BASE}/${name}/component.${ext}`;
  const res = await fetch(url);
  if (!res.ok) {
    return generateComponentStub(name, typescript);
  }
  return res.text();
}
function generateComponentStub(name, typescript) {
  const componentName = name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  if (typescript) {
    return `"use client";

/**
 * ${componentName}
 * Generated by Frosted UI CLI v1.0.0
 * 
 * Docs: https://frosted-ui.dev/docs/${name}
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ${componentName}Props {
  className?: string;
}

export function ${componentName}({ className }: ${componentName}Props) {
  return (
    <motion.div
      className={cn(
        "relative rounded-3xl",
        "backdrop-blur-2xl saturate-[180%]",
        "bg-white/[0.07] border border-white/[0.12]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Frosted glass reflection layer */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
      {/* TODO: implement ${componentName} */}
      <div className="p-4 text-sm text-white/60">${componentName}</div>
    </motion.div>
  );
}

export default ${componentName};
`;
  }
  return `"use client";
import { motion } from "framer-motion";

export function ${componentName}({ className }) {
  return (
    <motion.div className={\`relative rounded-3xl backdrop-blur-2xl bg-white/[0.07] border border-white/[0.12] \${className}\`}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="p-4 text-sm text-white/60">${componentName}</div>
    </motion.div>
  );
}
export default ${componentName};
`;
}
async function addComponent(names, options) {
  const cwd = import_path.default.resolve(options.cwd ?? process.cwd());
  console.log(import_chalk.default.bold.white("\n\u2726 Frosted UI\n"));
  const invalid = names.filter((n) => !COMPONENTS.includes(n));
  if (invalid.length) {
    console.error(import_chalk.default.red(`Unknown component(s): ${invalid.join(", ")}`));
    console.log(import_chalk.default.gray(`Available: ${COMPONENTS.join(", ")}`));
    process.exit(1);
  }
  const spinner = (0, import_ora.default)("Detecting project\u2026").start();
  const config = await detectProject(cwd);
  spinner.succeed(import_chalk.default.gray(
    `${import_chalk.default.white(config.framework)} \xB7 ${config.typescript ? "TypeScript" : "JavaScript"} \xB7 ${config.tailwind ? "Tailwind \u2713" : "No Tailwind"} \xB7 ${config.packageManager}`
  ));
  if (!config.tailwind) {
    console.warn(import_chalk.default.yellow("\u26A0 Tailwind CSS not detected. Frosted UI requires Tailwind CSS v3+."));
  }
  if (!await import_fs_extra.default.pathExists(config.componentsDir)) {
    await import_fs_extra.default.mkdirp(config.componentsDir);
    console.log(import_chalk.default.gray(`Created: ${import_path.default.relative(cwd, config.componentsDir)}/`));
  }
  const allDeps = /* @__PURE__ */ new Set(["framer-motion", "lucide-react", "class-variance-authority", "clsx", "tailwind-merge"]);
  await installDeps([...allDeps], config);
  for (const name of names) {
    const compSpinner = (0, import_ora.default)(`Adding ${import_chalk.default.white(name)}\u2026`).start();
    try {
      const ext = config.typescript ? "tsx" : "jsx";
      const destFile = import_path.default.join(config.componentsDir, `${name}.${ext}`);
      if (await import_fs_extra.default.pathExists(destFile) && !options.overwrite) {
        const { overwrite } = await (0, import_prompts.default)({
          type: "confirm",
          name: "overwrite",
          message: `${name}.${ext} already exists. Overwrite?`,
          initial: false
        });
        if (!overwrite) {
          compSpinner.warn(import_chalk.default.yellow(`Skipped: ${name}`));
          continue;
        }
      }
      const content = await fetchComponentFile(name, config.typescript);
      await import_fs_extra.default.outputFile(destFile, content);
      compSpinner.succeed(
        `${import_chalk.default.green("Added")} ${import_chalk.default.white(import_path.default.relative(cwd, destFile))}`
      );
    } catch (err) {
      compSpinner.fail(import_chalk.default.red(`Failed to add ${name}: ${err}`));
    }
  }
  console.log(import_chalk.default.bold.white("\n\u2726 Done!\n"));
  console.log(import_chalk.default.gray("Import your component:"));
  for (const name of names) {
    const componentName = name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    const importPath = `@/components/${name}`;
    console.log(import_chalk.default.cyan(`  import { ${componentName} } from "${importPath}";`));
  }
  console.log();
}
function listComponents() {
  console.log(import_chalk.default.bold.white("\n\u2726 Frosted UI \u2014 Available Components\n"));
  const categories = {
    "Navigation Bars": ["floating-island-bar", "pill-bar", "arc-bar", "crystal-bar", "ribbon-bar", "wave-bar"],
    "Pebble & Dock": ["pebble-bar", "dock-bar"],
    "Expandable Sheets": ["expandable-nav-sheet", "command-sheet", "profile-sheet"],
    "Floating Elements": ["app-launcher", "floating-search-orb", "floating-action-button", "floating-command-bar"]
  };
  for (const [category, components] of Object.entries(categories)) {
    console.log(import_chalk.default.bold.white(`  ${category}`));
    for (const name of components) {
      console.log(import_chalk.default.gray(`    npx frosted-ui add ${name}`));
    }
    console.log();
  }
}
var program = new import_commander.Command().name("frosted-ui").description("Frosted UI \u2014 Add frosted glass components to your React project").version("1.0.0");
program.command("add", { isDefault: true }).description("Add a component to your project").argument("<components...>", "component name(s) to add").option("--cwd <dir>", "working directory", process.cwd()).option("--overwrite", "overwrite existing files", false).action(addComponent);
program.command("list").description("List all available components").action(listComponents);
program.command("init").description("Initialize Frosted UI in your project (installs base deps)").option("--cwd <dir>", "working directory", process.cwd()).action(async (options) => {
  const cwd = import_path.default.resolve(options.cwd ?? process.cwd());
  const config = await detectProject(cwd);
  await installDeps(["framer-motion", "lucide-react", "class-variance-authority", "clsx", "tailwind-merge"], config);
  console.log(import_chalk.default.bold.green("\n\u2726 Frosted UI initialized! Run `npx frosted-ui list` to see components.\n"));
});
program.parse();
