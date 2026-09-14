/**
 * GitHub Pages site generator for the DNA Replication course.
 *
 * Converts all course Markdown to styled HTML in place (this course
 * directory IS the Pages deployment root), preserving the relative
 * directory structure so intra-course links keep working. Also writes
 * the course landing page at index.html. PDFs and the PPTX are already
 * in place and are not copied.
 *
 * Generated files: index.html, README.html, REFERENCES.html,
 * BUILD_REPORT.html, and *.html in MARKDOWN/ LAB/ ASSESSMENT/ WORKBOOK/
 * CHEAT-SHEET/ FAQ/ DATA/.
 *
 * Usage: node generate_site.js   (run from DNA-Replication-Course/)
 */
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const COURSE = __dirname;              // DNA-Replication-Course/ (Pages root)
const SITE = COURSE;
const SITE_COURSE = COURSE;

const INSTRUCTOR_HTML = `
<p class="instructor">
  <strong>Dr. Saira Azam</strong><br>
  Assistant Professor<br>
  Centre of Excellence in Molecular Biology<br>
  University of the Punjab, Lahore
</p>`;

/* ---------------------------------------------------------------- */
/* Styles                                                            */
/* ---------------------------------------------------------------- */
const SITE_CSS = `
:root {
  --primary: #1B4F72; --secondary: #2E86C1; --accent: #16A085;
  --dark: #2C3E50; --light: #F4F8FB; --border: #D5E5F1;
}
* { box-sizing: border-box; }
body {
  font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
  margin: 0; color: #22303c; line-height: 1.65;
  background: #fbfdff;
}
.site-header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff; padding: 1.4rem 1rem 1.2rem; text-align: center;
}
.site-header .course-title { font-size: 1.35rem; font-weight: 700; margin: 0; }
.site-header .crumb { font-size: .8rem; opacity: .85; margin: 0 0 .35rem; }
.site-header a { color: #fff; text-decoration: none; opacity: .92; }
.site-header a:hover { text-decoration: underline; opacity: 1; }
.layout { display: flex; max-width: 1180px; margin: 0 auto; gap: 1.5rem; padding: 1.25rem 1rem; }
nav.sidebar {
  flex: 0 0 260px; align-self: flex-start; position: sticky; top: 12px;
  background: #fff; border: 1px solid var(--border); border-radius: 10px;
  padding: 1rem 1.1rem; max-height: calc(100vh - 30px); overflow-y: auto;
}
nav.sidebar h3 {
  font-size: .78rem; text-transform: uppercase; letter-spacing: .06em;
  color: var(--accent); margin: 1.1rem 0 .35rem;
}
nav.sidebar h3:first-of-type { margin-top: 0; }
nav.sidebar a {
  display: block; color: var(--primary); text-decoration: none;
  font-size: .9rem; padding: .28rem .5rem; border-radius: 6px;
}
nav.sidebar a:hover { background: var(--light); }
main.content { flex: 1; min-width: 0; background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 1.6rem 2rem 2.4rem; }
main.content.wide { width: 100%; }
main.content h1 { color: var(--primary); font-size: 1.65rem; border-bottom: 3px solid var(--secondary); padding-bottom: .45rem; }
main.content h2 { color: var(--secondary); font-size: 1.25rem; border-bottom: 1px solid var(--border); padding-bottom: .3rem; margin-top: 2rem; }
main.content h3 { color: var(--accent); font-size: 1.05rem; margin-top: 1.6rem; }
main.content table { border-collapse: collapse; width: 100%; margin: 1rem 0; font-size: .9rem; display: block; overflow-x: auto; }
main.content th, main.content td { border: 1px solid var(--border); padding: .45rem .7rem; text-align: left; vertical-align: top; }
main.content th { background: var(--primary); color: #fff; }
main.content tr:nth-child(even) td { background: var(--light); }
main.content pre {
  background: #F4F6F8; border: 1px solid #DDE3E9; border-radius: 8px;
  padding: .9rem 1.1rem; overflow-x: auto; font-size: .82rem; line-height: 1.45;
}
main.content code { background: #F0F2F4; border-radius: 4px; padding: .1rem .35rem; font-size: .88em; }
main.content pre code { background: none; padding: 0; }
main.content blockquote { border-left: 4px solid var(--secondary); background: var(--light); margin: 1rem 0; padding: .6rem 1.1rem; border-radius: 0 8px 8px 0; }
main.content a { color: var(--secondary); }
main.content img { max-width: 100%; }
.nav-links { margin-top: 2.4rem; padding-top: 1rem; border-top: 2px solid var(--border); display: flex; flex-wrap: wrap; gap: .5rem 1.4rem; font-size: .92rem; }
footer.site-footer {
  text-align: center; padding: 1.6rem 1rem 2.2rem; color: #5a6b7a; font-size: .88rem;
}
footer.site-footer .instructor { margin: 0 0 .4rem; color: var(--primary); font-weight: 600; }

/* Landing page */
.hero {
  background: linear-gradient(160deg, var(--primary) 0%, var(--secondary) 60%, var(--accent) 100%);
  color: #fff; padding: 3.4rem 1.2rem 3rem; text-align: center;
}
.hero h1 { font-size: 2.1rem; margin: 0 0 .6rem; }
.hero .tagline { font-size: 1.08rem; font-style: italic; opacity: .95; margin: 0 0 1.8rem; }
.hero .instructor { color: #fff; background: rgba(255,255,255,.12); display: inline-block; padding: .8rem 1.6rem; border-radius: 10px; line-height: 1.5; }
.hero .instructor strong { font-size: 1.15rem; }
.btn {
  display: inline-block; margin-top: 1.6rem; background: #fff; color: var(--primary);
  font-weight: 700; padding: .7rem 2rem; border-radius: 999px; text-decoration: none; font-size: 1.05rem;
  box-shadow: 0 2px 10px rgba(0,0,0,.18);
}
.btn:hover { transform: translateY(-1px); }
.section-card { max-width: 1080px; margin: 1.4rem auto; padding: 0 1rem; }
.card {
  background: #fff; border: 1px solid var(--border); border-radius: 10px;
  padding: 1.3rem 1.5rem; margin-bottom: 1.1rem;
}
.card h2 { color: var(--primary); margin-top: 0; font-size: 1.25rem; border-bottom: 2px solid var(--border); padding-bottom: .35rem; }
.card table { border-collapse: collapse; width: 100%; font-size: .92rem; }
.card th, .card td { border: 1px solid var(--border); padding: .45rem .7rem; text-align: left; }
.card th { background: var(--primary); color: #fff; }
.card tr:nth-child(even) td { background: var(--light); }
.card a { color: var(--secondary); text-decoration: none; font-weight: 600; }
.card a:hover { text-decoration: underline; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.grid .card { margin-bottom: 0; }

@media (max-width: 900px) {
  .layout { flex-direction: column; padding: .8rem; }
  nav.sidebar { position: static; max-height: none; flex-basis: auto; }
  main.content { padding: 1.1rem 1rem 1.8rem; }
  .hero h1 { font-size: 1.55rem; }
}
`;

/* ---------------------------------------------------------------- */
/* Markdown discovery                                                */
/* ---------------------------------------------------------------- */
const MD_DIRS = ['MARKDOWN', 'LAB', 'ASSESSMENT', 'WORKBOOK', 'CHEAT-SHEET', 'FAQ', 'DATA'];
const FILES = [
  { in: 'README.md', out: 'index.md' },   // handled separately as landing page source
];

function ensureDirs() {
  // The course directory is the deployment root; only make sure the
  // content subdirectories exist. Never wipe the course directory.
  fs.mkdirSync(SITE_COURSE, { recursive: true });
  MD_DIRS.forEach(d => fs.mkdirSync(path.join(SITE_COURSE, d), { recursive: true }));
}

/** Rewrite relative .md links to .html and strip pure-navigation cruft. */
function rewriteLinks(md) {
  // Navigation lines: they duplicate sidebar links
  md = md.replace(/^.{0,3}\*\*←.*$/gm, '');
  md = md.replace(/^.{0,3}\*Related (Lab|Assessment|Data Exercise).*$/gm, '');
  md = md.replace(/^.{0,3}\*See also:.*$/gm, '');
  // README: drop the "Downloadable Resources" duplicate table (landing page has its own)
  md = md.replace(/^#### Downloadable Resources[\s\S]*?(?=\n###|\n#### |\n---)/m, '');
  // .md links -> .html links (relative links only)
  md = md.replace(/\]\((?!https?:|#)([^)#]+?)\.md(#[^)]+)?\)/g, ']($1.html$2)');
  return md;
}

function renderMarkdown(md, pagePath) {
  const html = marked.parse(md);
  return wrapPage(html, path.basename(pagePath));
}

function wrapPage(contentHtml, relPath) {
  const inCourse = relPath !== 'index.html';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DNA Replication in Prokaryotes and Eukaryotes</title>
<style>${SITE_CSS}</style>
</head>
<body>
${inCourse ? headerHtml(relPath) : ''}
${contentHtml}
<footer class="site-footer">
  <p class="instructor">Dr. Saira Azam — Assistant Professor, Centre of Excellence in Molecular Biology, University of the Punjab, Lahore</p>
  <p>DNA Replication in Prokaryotes and Eukaryotes · A Complete Molecular Biology Teaching and Learning Module</p>
</footer>
</body>
</html>`;
}

function headerHtml(relPath) {
  const depth = relPath.includes('/') ? '../' : '';
  return `<header class="site-header">
  <p class="crumb"><a href="${depth}index.html">Course Home</a></p>
  <p class="course-title">DNA Replication in Prokaryotes and Eukaryotes</p>
</header>`;
}

/* ---------------------------------------------------------------- */
/* Sidebar (shared)                                                  */
/* ---------------------------------------------------------------- */
function sidebarHtml(depth = '') {
  // depth: '' for pages at course root, '../' for pages in subdirectories
  const links = (dir, files) => {
    if (!fs.existsSync(path.join(COURSE, dir))) return '';
    return files.map(f => {
      const mdPath = path.join(COURSE, dir, f);
      if (!fs.existsSync(mdPath)) return '';
      const title = fs.readFileSync(mdPath, 'utf8').match(/^#\s+(.+)$/m);
      const label = title ? title[1].replace(/^Module \d+:\s*/, '') : f.replace('.md', '');
      return `<a href="${depth}${dir}/${f.replace('.md', '.html')}">${label}</a>`;
    }).join('\n');
  };
  const modules = ['01-Introduction-to-DNA-Replication.md','02-Core-Concepts.md','03-Prokaryotic-DNA-Replication.md','04-Eukaryotic-DNA-Replication.md','05-Replication-Fidelity-and-Repair.md','06-Telomeres-and-Telomerase.md','07-Replication-Stress-and-Checkpoints.md','08-Prokaryote-vs-Eukaryote.md','09-Experimental-Methods.md','10-Data-Analysis-and-Interpretation.md','11-Clinical-and-Biotechnology-Applications.md','12-Advanced-Topics.md'];
  return `<nav class="sidebar">
  <h3>Course</h3>
  <a href="${depth}README.html">Course Home</a>
  <a href="${depth}REFERENCES.html">References</a>
  <h3>Teaching Modules</h3>
  ${links('MARKDOWN', modules)}
  <h3>Laboratory</h3>
  ${links('LAB', ['Lab-01-DNA-Replication-Concepts.md','Lab-02-DNA-Quantification.md','Lab-03-Gel-Electrophoresis.md','Lab-04-PCR-and-DNA-Amplification.md','Lab-05-Replication-Data-Analysis.md','Lab-06-Capstone-Exercise.md'])}
  <h3>Workbook & Data</h3>
  <a href="${depth}WORKBOOK/DNA-Replication-Lab-Workbook.html">Lab Workbook</a>
  <a href="${depth}DATA/datasets.html">Datasets</a>
  <h3>Resources</h3>
  <a href="${depth}CHEAT-SHEET/DNA-Replication-Cheat-Sheet.html">Cheat Sheet</a>
  <a href="${depth}FAQ/DNA-Replication-FAQs.html">FAQs</a>
  <h3>Assessment</h3>
  ${links('ASSESSMENT', ['MCQs.md','Short-Questions.md','Long-Questions.md','Viva-Questions.md','Case-Studies.md'])}
  <h3>Downloads</h3>
  <a href="${depth}PDF/Complete-Tutorial.pdf">Complete Tutorial (PDF)</a>
  <a href="${depth}PDF/Lab-Workbook.pdf">Lab Workbook (PDF)</a>
  <a href="${depth}PDF/Cheat-Sheet.pdf">Cheat Sheet (PDF)</a>
  <a href="${depth}PDF/FAQs.pdf">FAQs (PDF)</a>
  <a href="${depth}PDF/Assessment.pdf">Assessment (PDF)</a>
  <a href="${depth}PPTX/DNA_Replication_Complete_Lecture.pptx">Lecture Slides (PPTX)</a>
</nav>`;
}

/* ---------------------------------------------------------------- */
/* Conversion                                                        */
/* ---------------------------------------------------------------- */
function convertDir(dir) {
  const srcDir = path.join(COURSE, dir);
  if (!fs.existsSync(srcDir)) return;
  for (const f of fs.readdirSync(srcDir).filter(f => f.endsWith('.md'))) {
    const md = rewriteLinks(fs.readFileSync(path.join(srcDir, f), 'utf8'));
    const body = marked.parse(md);
    const rel = `${dir}/${f.replace('.md', '.html')}`;
    const page = wrapPage(`<div class="layout">${sidebarHtml('../')}<main class="content">${body}</main></div>`, rel);
    fs.writeFileSync(path.join(SITE_COURSE, rel), page);
  }
}

function convertRootMd(file, outName) {
  const md = rewriteLinks(fs.readFileSync(path.join(COURSE, file), 'utf8'));
  const body = marked.parse(md);
  const page = wrapPage(`<div class="layout">${sidebarHtml('')}<main class="content">${body}</main></div>`, outName);
  fs.writeFileSync(path.join(SITE_COURSE, outName), page);
}

/* Landing page ----------------------------------------------------- */
function landingPage() {
  const moduleRows = [
    ['01', 'Introduction to DNA Replication', 'Why replication matters, Meselson–Stahl, history'],
    ['02', 'Core Concepts', 'Semiconservative model, requirements, fork basics'],
    ['03', 'Prokaryotic DNA Replication', 'Complete E. coli mechanism'],
    ['04', 'Eukaryotic DNA Replication', 'Human cell replication, licensing, chromatin'],
    ['05', 'Replication Fidelity and Repair', 'Proofreading, mismatch repair, error rates'],
    ['06', 'Telomeres and Telomerase', 'End-replication problem, telomere biology'],
    ['07', 'Replication Stress and Checkpoints', 'ATR/CHK1, fork stalling, DDR'],
    ['08', 'Prokaryote vs Eukaryote', 'Detailed comparison tables'],
    ['09', 'Experimental Methods', 'How replication is studied'],
    ['10', 'Data Analysis and Interpretation', 'Bioinformatics workflows'],
    ['11', 'Clinical and Biotechnology Applications', 'Drugs, disease, diagnostics'],
    ['12', 'Advanced Topics', 'Fork dynamics, R-loops, fragile sites, ALT']
  ].map(([n, t, d]) => `<tr><td><a href="MARKDOWN/${n}-${t.replace(/ /g, '-').replace(/[?]/g, '')}.html">${n}</a></td><td><a href="MARKDOWN/${n}-${t.replace(/ /g, '-').replace(/[?]/g, '')}.html">${t}</a></td><td>${d}</td></tr>`).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DNA Replication in Prokaryotes and Eukaryotes — Course</title>
<style>${SITE_CSS}</style>
</head>
<body>
<section class="hero">
  <h1>DNA Replication in Prokaryotes and Eukaryotes</h1>
  <p class="tagline">A Complete Molecular Biology Teaching and Learning Module</p>
  <div class="instructor">
    <strong>Dr. Saira Azam</strong><br>
    Assistant Professor<br>
    Centre of Excellence in Molecular Biology<br>
    University of the Punjab, Lahore
  </div>
  <br>
  <a class="btn" href="README.html">Start Learning →</a>
</section>

<div class="section-card">
  <div class="card">
    <h2>About This Course</h2>
    <p>A complete teaching module covering the molecular biology of DNA replication in prokaryotic and eukaryotic systems, designed for BS/MS students in Molecular Biology, Biotechnology, Bioinformatics, Microbiology, and Genetics. The course progresses from foundational concepts through advanced research topics, with integrated laboratory exercises, bioinformatics activities, and full assessment materials.</p>
    <p><strong>Models:</strong> <em>Escherichia coli</em> (prokaryotic) and human cells (eukaryotic)</p>
  </div>

  <div class="card">
    <h2>Learning Outcomes</h2>
    <ul>
      <li>Explain semiconservative replication and the requirements for DNA synthesis</li>
      <li>Describe replication initiation, elongation, and termination in E. coli and human cells</li>
      <li>Identify all major replication proteins and their functions</li>
      <li>Explain replication fidelity, proofreading, and mismatch repair</li>
      <li>Describe the end-replication problem, telomeres, and telomerase</li>
      <li>Explain replication stress, checkpoints, and genome instability</li>
      <li>Interpret experimental data and use bioinformatics to analyze replication systems</li>
      <li>Connect replication to disease, drug development, and biotechnology</li>
    </ul>
  </div>

  <div class="card">
    <h2>Course Roadmap — Teaching Modules</h2>
    <table>
      <tr><th>#</th><th>Module</th><th>Focus</th></tr>
      ${moduleRows}
    </table>
  </div>

  <div class="grid">
    <div class="card">
      <h2>Laboratory</h2>
      <p><a href="WORKBOOK/DNA-Replication-Lab-Workbook.html">Lab Workbook →</a></p>
      <ul>
        <li><a href="LAB/Lab-01-DNA-Replication-Concepts.html">Lab 01 — Replication Modeling</a></li>
        <li><a href="LAB/Lab-02-DNA-Quantification.html">Lab 02 — DNA Quantification</a></li>
        <li><a href="LAB/Lab-03-Gel-Electrophoresis.html">Lab 03 — Gel Electrophoresis</a></li>
        <li><a href="LAB/Lab-04-PCR-and-DNA-Amplification.html">Lab 04 — PCR</a></li>
        <li><a href="LAB/Lab-05-Replication-Data-Analysis.html">Lab 05 — Data Analysis</a></li>
        <li><a href="LAB/Lab-06-Capstone-Exercise.html">Lab 06 — Capstone</a></li>
      </ul>
    </div>
    <div class="card">
      <h2>Datasets & Data Analysis</h2>
      <ul>
        <li><a href="DATA/datasets.html">Simulated Datasets (10)</a></li>
        <li><a href="MARKDOWN/10-Data-Analysis-and-Interpretation.html">Module 10 — Data Analysis</a></li>
        <li><a href="MARKDOWN/09-Experimental-Methods.html">Module 09 — Experimental Methods</a></li>
      </ul>
    </div>
    <div class="card">
      <h2>Lecture Slides</h2>
      <p><a href="PPTX/DNA_Replication_Complete_Lecture.pptx" download>Download Lecture PPTX →</a></p>
      <p>Complete lecture deck covering all 12 modules with speaker notes.</p>
    </div>
    <div class="card">
      <h2>Downloads (PDF)</h2>
      <ul>
        <li><a href="PDF/Complete-Tutorial.pdf">Complete Tutorial</a></li>
        <li><a href="PDF/Lab-Workbook.pdf">Lab Workbook</a></li>
        <li><a href="PDF/Cheat-Sheet.pdf">Cheat Sheet</a></li>
        <li><a href="PDF/FAQs.pdf">FAQs</a></li>
        <li><a href="PDF/Assessment.pdf">Assessment</a></li>
      </ul>
    </div>
    <div class="card">
      <h2>Cheat Sheet & FAQs</h2>
      <ul>
        <li><a href="CHEAT-SHEET/DNA-Replication-Cheat-Sheet.html">Cheat Sheet (online)</a></li>
        <li><a href="FAQ/DNA-Replication-FAQs.html">FAQs (online)</a></li>
      </ul>
    </div>
    <div class="card">
      <h2>Assessments</h2>
      <ul>
        <li><a href="ASSESSMENT/MCQs.html">MCQs (40+)</a></li>
        <li><a href="ASSESSMENT/Short-Questions.html">Short Questions (25+)</a></li>
        <li><a href="ASSESSMENT/Long-Questions.html">Long Questions (15+)</a></li>
        <li><a href="ASSESSMENT/Viva-Questions.html">Viva Questions (30+)</a></li>
        <li><a href="ASSESSMENT/Case-Studies.html">Case Studies (10)</a></li>
      </ul>
    </div>
    <div class="card">
      <h2>References</h2>
      <p><a href="REFERENCES.html">Complete Reference List →</a></p>
      <p>Textbooks (Alberts, Lodish, Watson, Lewin, Lehninger), peer-reviewed literature, and NCBI resources.</p>
    </div>
  </div>
</div>

<footer class="site-footer">
  <p class="instructor">Dr. Saira Azam — Assistant Professor, Centre of Excellence in Molecular Biology, University of the Punjab, Lahore</p>
  <p>DNA Replication in Prokaryotes and Eukaryotes · A Complete Molecular Biology Teaching and Learning Module</p>
</footer>
</body>
</html>`;
  fs.writeFileSync(path.join(SITE, 'index.html'), html);
}

/* ---------------------------------------------------------------- */
/* Main                                                              */
/* ---------------------------------------------------------------- */
function main() {
  console.log('Building GitHub Pages site in place (course directory is the Pages root) …');
  ensureDirs();

  // PDFs and PPTX already live in this directory tree — nothing to copy.

  // Convert all markdown directories
  MD_DIRS.forEach(convertDir);

  // Root-level files: README (as course home) + REFERENCES + BUILD_REPORT
  convertRootMd('README.md', 'README.html');
  convertRootMd('REFERENCES.md', 'REFERENCES.html');
  convertRootMd('BUILD_REPORT.md', 'BUILD_REPORT.html');

  // Landing page
  landingPage();

  // Count outputs
  const count = (dir) => fs.readdirSync(dir).filter(f => f.endsWith('.html')).length;
  console.log(`  modules: ${count(path.join(SITE_COURSE, 'MARKDOWN'))}`);
  console.log(`  labs: ${count(path.join(SITE_COURSE, 'LAB'))}`);
  console.log(`  assessments: ${count(path.join(SITE_COURSE, 'ASSESSMENT'))}`);
  console.log('Site build complete.');
}

main();
