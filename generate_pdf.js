/**
 * PDF Generator for DNA Replication Course
 * Pipeline: Markdown → marked → styled HTML → Puppeteer/Chrome headless → PDF
 *
 * Usage: node generate_pdf.js [only]   (optional arg = filter name, e.g. "cheat")
 *
 * Produces in PDF/:
 *   Complete-Tutorial.pdf, Lab-Workbook.pdf, Cheat-Sheet.pdf, FAQs.pdf, Assessment.pdf
 */
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const OUT_DIR = path.join(ROOT, 'PDF');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const INSTRUCTOR = {
  name: 'Dr. Saira Azam',
  title: 'Assistant Professor',
  dept: 'Centre of Excellence in Molecular Biology',
  univ: 'University of the Punjab, Lahore'
};

const COURSE_TITLE = 'DNA Replication in Prokaryotes and Eukaryotes';
const COURSE_SUB = 'A Complete Molecular Biology Teaching and Learning Module';

/* ------------------------------------------------------------------ */
/* Markdown loading                                                    */
/* ------------------------------------------------------------------ */
function readMd(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) {
    console.warn(`  !! MISSING: ${rel}`);
    return '';
  }
  let md = fs.readFileSync(p, 'utf8');
  // Strip markdown navigation lines (they make no sense inside a PDF)
  md = md.replace(/^.{0,3}\*\*←.*$/gm, '');
  md = md.replace(/^.{0,3}\*Related (Lab|Assessment|Data Exercise).*$/gm, '');
  md = md.replace(/^.{0,3}\*See also:.*$/gm, '');
  md = md.replace(/^---\s*$/gm, ''); // horizontal rules become section spacing via CSS
  return md.trim();
}

/* ------------------------------------------------------------------ */
/* CSS                                                                 */
/* ------------------------------------------------------------------ */
const CSS = `
  * { box-sizing: border-box; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 10.5pt; line-height: 1.55; color: #1a1a2e;
    margin: 0; padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #1B4F72; line-height: 1.25; break-after: avoid;
  }
  h1 { font-size: 20pt; border-bottom: 3px solid #2E86C1; padding-bottom: 6px; margin: 28px 0 14px; }
  h2 { font-size: 15pt; color: #2E86C1; margin: 22px 0 10px; border-bottom: 1px solid #d5e5f1; padding-bottom: 4px; }
  h3 { font-size: 12.5pt; color: #16A085; margin: 18px 0 8px; }
  h4 { font-size: 11pt; color: #2C3E50; margin: 14px 0 6px; }
  p { margin: 8px 0; text-align: justify; }
  ul, ol { margin: 8px 0 8px 22px; padding: 0; }
  li { margin: 3px 0; }
  strong { color: #14405c; }
  a { color: #2E86C1; text-decoration: none; }
  blockquote {
    margin: 12px 0; padding: 10px 16px; background: #eaf4fb;
    border-left: 5px solid #2E86C1; font-style: italic; break-inside: avoid;
  }
  table {
    border-collapse: collapse; width: 100%; margin: 12px 0;
    font-family: 'Segoe UI', Arial, sans-serif; font-size: 9pt;
    break-inside: auto;
  }
  th, td { border: 1px solid #b8cfe0; padding: 5px 8px; text-align: left; vertical-align: top; }
  th { background: #1B4F72; color: #fff; font-weight: 600; }
  tr:nth-child(even) td { background: #f4f8fb; }
  tr { break-inside: avoid; }
  pre {
    background: #f4f6f8; border: 1px solid #dde3e9; border-radius: 4px;
    padding: 10px 12px; font-family: 'Consolas', 'Courier New', monospace;
    font-size: 8.5pt; line-height: 1.35; overflow-x: hidden;
    white-space: pre-wrap; break-inside: avoid; margin: 10px 0;
  }
  code { font-family: 'Consolas', 'Courier New', monospace; font-size: 9pt; background: #f0f2f4; padding: 1px 4px; border-radius: 3px; }
  pre code { background: none; padding: 0; }
  hr { display: none; }
  .cover { min-height: 245mm; page-break-after: always; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(160deg, #1B4F72 0%, #2E86C1 55%, #16A085 100%); color: #fff; padding: 40px; }
  .cover .course-title { font-size: 30pt; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.2; margin-bottom: 14px; }
  .cover .course-sub { font-size: 14pt; font-style: italic; opacity: 0.95; margin-bottom: 40px; }
  .cover .divider { width: 120px; height: 3px; background: rgba(255,255,255,0.75); margin: 0 auto 40px; }
  .cover .instructor { font-size: 13pt; line-height: 1.6; }
  .cover .instructor .name { font-size: 16pt; font-weight: 700; }
  .cover .instructor .role { opacity: 0.9; }
  .cover .footer-note { margin-top: 60px; font-size: 9pt; opacity: 0.8; }
  .toc { page-break-after: always; }
  .toc h2 { border-bottom: 2px solid #1B4F72; color: #1B4F72; font-size: 17pt; }
  .toc ol { list-style: none; margin-left: 0; }
  .toc li { margin: 6px 0; font-size: 10.5pt; }
  .toc .toc-top { font-weight: 700; color: #1B4F72; margin-top: 10px; }
  .toc .toc-sub { margin-left: 18px; color: #444; font-size: 9.5pt; }
  .module { page-break-before: always; }
  .module > h1 { font-size: 22pt; padding-bottom: 10px; margin-top: 6px; }
  .inst-block {
    background: #eaf4fb; border: 1px solid #b8d8ea; border-radius: 6px;
    padding: 10px 16px; margin: 16px 0; font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 9.5pt; break-inside: avoid;
  }
  .inst-block .name { font-weight: 700; font-size: 11pt; color: #1B4F72; }
`;

/* ------------------------------------------------------------------ */
/* PDF targets                                                         */
/* ------------------------------------------------------------------ */
const TARGETS = [
  {
    name: 'Complete-Tutorial',
    title: 'Complete Tutorial',
    filename: 'Complete-Tutorial.pdf',
    modules: [
      'MARKDOWN/01-Introduction-to-DNA-Replication.md',
      'MARKDOWN/02-Core-Concepts.md',
      'MARKDOWN/03-Prokaryotic-DNA-Replication.md',
      'MARKDOWN/04-Eukaryotic-DNA-Replication.md',
      'MARKDOWN/05-Replication-Fidelity-and-Repair.md',
      'MARKDOWN/06-Telomeres-and-Telomerase.md',
      'MARKDOWN/07-Replication-Stress-and-Checkpoints.md',
      'MARKDOWN/08-Prokaryote-vs-Eukaryote.md',
      'MARKDOWN/09-Experimental-Methods.md',
      'MARKDOWN/10-Data-Analysis-and-Interpretation.md',
      'MARKDOWN/11-Clinical-and-Biotechnology-Applications.md',
      'MARKDOWN/12-Advanced-Topics.md',
      'REFERENCES.md'
    ]
  },
  {
    name: 'Lab-Workbook',
    title: 'Laboratory Workbook',
    filename: 'Lab-Workbook.pdf',
    modules: [
      'WORKBOOK/DNA-Replication-Lab-Workbook.md',
      'LAB/Lab-01-DNA-Replication-Concepts.md',
      'LAB/Lab-02-DNA-Quantification.md',
      'LAB/Lab-03-Gel-Electrophoresis.md',
      'LAB/Lab-04-PCR-and-DNA-Amplification.md',
      'LAB/Lab-05-Replication-Data-Analysis.md',
      'LAB/Lab-06-Capstone-Exercise.md'
    ]
  },
  {
    name: 'Cheat-Sheet',
    title: 'Cheat Sheet',
    filename: 'Cheat-Sheet.pdf',
    modules: ['CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md']
  },
  {
    name: 'FAQs',
    title: 'Frequently Asked Questions',
    filename: 'FAQs.pdf',
    modules: ['FAQ/DNA-Replication-FAQs.md']
  },
  {
    name: 'Assessment',
    title: 'Assessment Package & Answer Key',
    filename: 'Assessment.pdf',
    modules: [
      'ASSESSMENT/MCQs.md',
      'ASSESSMENT/Short-Questions.md',
      'ASSESSMENT/Long-Questions.md',
      'ASSESSMENT/Viva-Questions.md',
      'ASSESSMENT/Case-Studies.md'
    ]
  }
];

/* ------------------------------------------------------------------ */
/* Build HTML document                                                 */
/* ------------------------------------------------------------------ */
function coverHtml(docTitle) {
  return `
  <div class="cover">
    <div class="course-title">${COURSE_TITLE}</div>
    <div class="course-sub">${COURSE_SUB}</div>
    <div class="divider"></div>
    <div class="doc-title">${docTitle}</div>
    <div class="divider"></div>
    <div class="instructor">
      <div class="name">${INSTRUCTOR.name}</div>
      <div class="role">${INSTRUCTOR.title}</div>
      <div>${INSTRUCTOR.dept}</div>
      <div>${INSTRUCTOR.univ}</div>
    </div>
    <div class="footer-note">Molecular Biology Teaching Package &nbsp;·&nbsp; ${new Date().getFullYear()}</div>
  </div>`;
}

function instBlockHtml() {
  return `<div class="inst-block">
    <span class="name">${INSTRUCTOR.name}</span> — ${INSTRUCTOR.title}, ${INSTRUCTOR.dept}, ${INSTRUCTOR.univ}
  </div>`;
}

async function buildTarget(browser, target) {
  console.log(`\nBuilding: ${target.name}`);
  const sections = [];
  const tocEntries = [];

  for (const rel of target.modules) {
    const md = readMd(rel);
    if (!md) continue;
    const html = marked.parse(md);
    // Extract first h1 as module title
    const m = md.match(/^#\s+(.+)$/m);
    const modTitle = m ? m[1].trim() : path.basename(rel, '.md');
    tocEntries.push({ title: modTitle, file: rel });
    sections.push(`<section class="module" id="mod-${sections.length}">${instBlockHtml()}${html}</section>`);
  }

  const tocHtml = `<div class="toc">
    <h2>Table of Contents</h2>
    <ol>
      ${tocEntries.map((e, i) => `<li class="toc-top">${i + 1}. ${e.title}</li>`).join('\n')}
    </ol>
  </div>`;

  const doc = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${target.title}</title><style>${CSS}</style></head>
<body>
  ${coverHtml(target.title)}
  ${tocHtml}
  ${sections.join('\n')}
</body></html>`;

  const htmlPath = path.join(OUT_DIR, target.filename.replace('.pdf', '.build.html'));
  fs.writeFileSync(htmlPath, doc);

  const page = await browser.newPage();
  await page.setContent(doc, { waitUntil: ['load', 'networkidle0'] });

  // Page numbers in footer, doc title in header
  await page.pdf({
    path: path.join(OUT_DIR, target.filename),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="width:100%; font-size:8pt; color:#666; padding:0 15mm; display:flex; justify-content:space-between; font-family:Arial, sans-serif;">
      <span>${COURSE_TITLE}</span><span>${target.title}</span></div>`,
    footerTemplate: `<div style="width:100%; font-size:8pt; color:#666; text-align:center; font-family:Arial, sans-serif;">
      <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
    margin: { top: '18mm', bottom: '16mm', left: '15mm', right: '15mm' }
  });

  await page.close();
  fs.unlinkSync(htmlPath); // remove intermediate build file
  const size = fs.statSync(path.join(OUT_DIR, target.filename)).size;
  console.log(`  ✔ ${target.filename} (${(size / 1024).toFixed(0)} KB, ${tocEntries.length} sections)`);
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
(async () => {
  const filter = process.argv[2] || '';
  const targets = TARGETS.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()));
  if (!targets.length) {
    console.error(`No target matches "${filter}". Options: ${TARGETS.map(t => t.name).join(', ')}`);
    process.exit(1);
  }

  console.log('Launching headless Chrome…');
  // Resolution order: CHROME_PATH env → installed Chrome/Edge (Windows) →
  // Puppeteer's own downloaded Chrome (see `npx puppeteer browsers install chrome`).
  let executablePath = process.env.CHROME_PATH || null;
  if (!executablePath && process.platform === 'win32') {
    const candidates = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    ];
    executablePath = candidates.find(p => fs.existsSync(p)) || null;
  }
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath || undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  for (const t of targets) {
    try { await buildTarget(browser, t); }
    catch (e) { console.error(`  ✗ ${t.name} FAILED: ${e.message}`); }
  }

  await browser.close();
  console.log('\nDone.');
})();
