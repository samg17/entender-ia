#!/usr/bin/env node
// Validação leve do frontmatter em content/**/*.mdx.
// Sem dependências externas, sem infraestrutura — apenas checagens rápidas
// pensadas para rodar localmente ou em CI simples.
//
// Verifica: campos obrigatórios presentes, id/slug duplicados,
// e referências citadas que existem em references/sources.yaml.
//
// Uso: node scripts/validate-content.mjs

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const CONTENT_DIR = join(ROOT, "content");
const SOURCES_FILE = join(ROOT, "references", "sources.yaml");

const REQUIRED_FIELDS = [
  "id", "title", "slug", "description", "locale",
  "type", "category", "level", "status", "created",
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".mdx")) out.push(full);
  }
  return out;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-zA-Z_]+):\s*"?([^"\n]*)"?\s*$/);
    if (m) fm[m[1]] = m[2].trim();
  }
  const refsMatch = match[1].match(/references:\s*\n((?:\s+-\s.+\n?)*)/);
  fm._references = refsMatch
    ? refsMatch[1].split("\n").filter(Boolean).map((l) => l.replace(/^\s*-\s*/, "").trim())
    : [];
  return fm;
}

function loadReferenceIds() {
  const raw = readFileSync(SOURCES_FILE, "utf8");
  return new Set([...raw.matchAll(/^-\s*id:\s*([a-z0-9-]+)/gm)].map((m) => m[1]));
}

function main() {
  const files = walk(CONTENT_DIR);
  const referenceIds = loadReferenceIds();
  const seenIds = new Map();
  const seenSlugs = new Map();
  let errors = 0;

  for (const file of files) {
    const rel = relative(ROOT, file);
    const raw = readFileSync(file, "utf8");
    const fm = parseFrontmatter(raw);

    if (!fm) {
      console.error(`✗ ${rel}: frontmatter ausente ou malformado`);
      errors++;
      continue;
    }

    for (const field of REQUIRED_FIELDS) {
      if (!fm[field]) {
        console.error(`✗ ${rel}: campo obrigatório ausente: "${field}"`);
        errors++;
      }
    }

    if (fm.id) {
      if (seenIds.has(fm.id)) {
        console.error(`✗ ${rel}: id duplicado "${fm.id}" (já usado em ${seenIds.get(fm.id)})`);
        errors++;
      } else {
        seenIds.set(fm.id, rel);
      }
    }

    if (fm.slug) {
      if (seenSlugs.has(fm.slug)) {
        console.error(`✗ ${rel}: slug duplicado "${fm.slug}" (já usado em ${seenSlugs.get(fm.slug)})`);
        errors++;
      } else {
        seenSlugs.set(fm.slug, rel);
      }
    }

    for (const refId of fm._references) {
      if (!referenceIds.has(refId)) {
        console.error(`✗ ${rel}: referência "${refId}" não existe em references/sources.yaml`);
        errors++;
      }
    }
  }

  if (errors === 0) {
    console.log(`✓ ${files.length} arquivo(s) validado(s) sem erros.`);
    process.exit(0);
  } else {
    console.error(`\n${errors} erro(s) encontrado(s).`);
    process.exit(1);
  }
}

main();
