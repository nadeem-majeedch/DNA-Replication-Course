/**
 * Link validator for the generated site (the course directory itself
 * is the GitHub Pages deployment root).
 * Checks every href/src in every HTML file resolves to a real file.
 * Usage: node validate_site.js
 */
const fs = require('fs');
const path = require('path');

const SITE = __dirname;

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (f.endsWith('.html')) out.push(p);
  }
  return out;
}

const htmlFiles = walk(SITE);
let broken = 0, checked = 0;
const brokenList = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(SITE, file);
  const refs = [...html.matchAll(/(?:href|src)="([^"#]+)(#[^"]*)?"/g)]
    .map(m => m[1])
    .filter(u => !/^(https?:|mailto:|data:)/.test(u));

  for (const ref of new Set(refs)) {
    checked++;
    const target = path.resolve(path.dirname(file), decodeURIComponent(ref));
    if (!fs.existsSync(target)) {
      broken++;
      brokenList.push(`${rel} → ${ref}`);
    }
  }
}

console.log(`Checked ${checked} links across ${htmlFiles.length} HTML files.`);
if (broken) {
  console.log(`\n✗ ${broken} BROKEN LINKS:`);
  brokenList.forEach(b => console.log('  ' + b));
  process.exit(1);
} else {
  console.log('✓ All internal links resolve.');
}
