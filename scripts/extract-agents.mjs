import fs from 'fs/promises';
import path from 'path';

const agentUiContent = await fs.readFile(path.join(process.cwd(), 'src/components/agent-ui.tsx'), 'utf-8');

const glassBase = `const glassBase = [
  "backdrop-blur-2xl saturate-[180%]",
  "before:absolute before:inset-0 before:rounded-[inherit]",
  "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
  "before:pointer-events-none",
].join(" ");`;

const components = [
  { name: 'glass-agent-card', exportName: 'GlassAgentCard' },
  { name: 'glass-thinking-panel', exportName: 'GlassThinkingPanel' },
  { name: 'glass-workflow-node', exportName: 'GlassWorkflowNode' },
  { name: 'glass-reasoning-bubble', exportName: 'GlassReasoningBubble' },
  { name: 'glass-memory-panel', exportName: 'GlassMemoryPanel' },
  { name: 'glass-command-center', exportName: 'GlassCommandCenter' },
  { name: 'glass-knowledge-graph', exportName: 'GlassKnowledgeGraph' },
];

for (const comp of components) {
  const compDir = path.join(process.cwd(), 'registry', comp.name);
  await fs.mkdir(compDir, { recursive: true });

  const startIdx = agentUiContent.indexOf(`export function ${comp.exportName}`);
  if (startIdx === -1) continue;

  let endIdx = agentUiContent.indexOf(`export function`, startIdx + 1);
  if (endIdx === -1) endIdx = agentUiContent.length;

  const compCode = agentUiContent.substring(startIdx, endIdx).trim();

  // We need to inject lucide-react imports depending on if the component uses them
  let lucideImports = '';
  if (comp.name === 'glass-command-center') {
    lucideImports = `\nimport { Terminal, Activity, Network, Shield, Cpu } from "lucide-react";`;
  }

  const finalCode = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs, tweens } from "@/lib/animations";${lucideImports}

${glassBase}

${compCode}
`;

  await fs.writeFile(path.join(compDir, 'component.tsx'), finalCode);
  
  const registryJson = {
    name: comp.name,
    dependencies: ["framer-motion", "clsx", "tailwind-merge"],
    registryDependencies: [],
    files: ["component.tsx"]
  };
  
  if (comp.name === 'glass-command-center') {
    registryJson.dependencies.push('lucide-react');
  }

  await fs.writeFile(path.join(compDir, 'registry.json'), JSON.stringify(registryJson, null, 2));
}

console.log('Successfully extracted components to registry!');
