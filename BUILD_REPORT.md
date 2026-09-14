# DNA Replication Teaching Package — Build Report

**Course:** DNA Replication in Prokaryotes and Eukaryotes
**A Complete Molecular Biology Teaching and Learning Module**

**Instructor:**
Dr. Saira Azam
Assistant Professor
Centre of Excellence in Molecular Biology
University of the Punjab, Lahore

**Date:** September 2026
**Version:** 2.0 (final, web-published edition)

---

## Files

### Markdown (26 files)
| Group | Count | Location |
|-------|-------|----------|
| Teaching modules | 12 | `MARKDOWN/01…12-*.md` |
| Laboratory exercises | 6 | `LAB/Lab-01…Lab-06*.md` |
| Lab workbook | 1 | `WORKBOOK/DNA-Replication-Lab-Workbook.md` |
| Cheat sheet | 1 | `CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md` |
| FAQs | 1 | `FAQ/DNA-Replication-FAQs.md` |
| Assessments | 5 | `ASSESSMENT/{MCQs, Short, Long, Viva, Case-Studies}.md` |
| Datasets | 1 | `DATA/datasets.md` |
| References | 1 | `REFERENCES.md` |
| Course home | 1 | `README.md` |

### PDF (5 files, generated from Markdown via marked + headless Chrome)
| File | Pages | Content |
|------|-------|---------|
| `PDF/Complete-Tutorial.pdf` | 113 | All 12 modules + references, cover page, TOC, instructor block, page numbers |
| `PDF/Lab-Workbook.pdf` | 43 | Workbook + all 6 labs |
| `PDF/Cheat-Sheet.pdf` | 8 | Rapid-revision reference |
| `PDF/FAQs.pdf` | 11 | 62 FAQs |
| `PDF/Assessment.pdf` | 25 | MCQs, short, long, viva, case studies |

### Presentation (1 file)
| File | Slides |
|------|--------|
| `PPTX/DNA_Replication_Complete_Lecture.pptx` | ~65 slides, 12 modules, speaker notes, instructor on title slide |

### Content totals
| Metric | Count |
|--------|-------|
| Assessment questions | 113 (40 MCQ + 25 short + 15 long + 33 viva) |
| Case studies | 10 |
| FAQs | 62 |
| References | 52 |
| Simulated datasets | 10 |
| Labs | 6 |

### Build tooling (in course root)
| File | Purpose |
|------|---------|
| `generate_pdf.js` | Markdown → styled HTML → PDF (marked + Puppeteer/Chrome) |
| `generate_pptx.js` | Lecture deck generator (pptxgenjs) |
| `generate_site.js` | GitHub Pages site generator (in place — the course directory is the Pages root) |
| `validate_site.js` | Link validator for generated site |

---

## Website

| Item | Detail |
|------|--------|
| Framework | Static HTML generated from Markdown (`generate_site.js`), no runtime dependencies |
| Location | `DNA-Replication-Course/` itself — the course directory is the Pages deployment root; GitHub Actions requires the workflow file to remain under `.github/workflows/` |
| Landing page | `DNA-Replication-Course/index.html` — course hero, instructor card, Start Learning button, module roadmap, labs, datasets, slides, downloads, assessments, references |
| Course pages | `DNA-Replication-Course/**` — 34 HTML pages with shared sidebar navigation, header, footer credits |
| Assets | 5 PDFs + 1 PPTX already inside `DNA-Replication-Course/{PDF,PPTX}/` — published as-is |
| GitHub Pages integration | `.github/workflows/deploy-pages.yml` — official Pages workflow (actions/configure-pages + deploy-pages); rebuilds PDFs and site HTML from Markdown on every push to `main`, prunes `node_modules/`, and deploys the contents of `DNA-Replication-Course/` as the Pages artifact |
| One-time setup needed | Repo Settings → Pages → Source → **GitHub Actions** |
| Base path | Repo-root serving (dedicated repo `nadeem-majeedch/DNA-Replication-Course`); all links relative |
| Link validation | `validate_site.js`: 1,121 internal links checked across 34 pages — **0 broken** |
| Build validation | PDFs regenerated in CI and presence-checked; `.nojekyll` added |
| Visual QA | Landing page, module pages (03, 04, 08), cheat sheet inspected at desktop (1366×900) and mobile (430px, device-emulated) — hero, sidebar, tables, instructor block, navigation all render correctly; no horizontal overflow at mobile width; wide tables scroll internally |
| Mobile QA | No page-level horizontal overflow at 430px; long tables use in-table horizontal scroll |

---

## Git

**No commit performed.**
**No push performed.**

All changes are left uncommitted in the working directory. No GMO course content exists in this repository and none was created or modified. Scope of changes: `DNA-Replication-Course/**`, `.github/workflows/deploy-pages.yml`.

---

## QA Checks Performed

### Scientific
- [x] 5'→3' directionality consistent throughout
- [x] Polymerase assignments correct (Pol ε leading, Pol δ lagging in eukaryotes)
- [x] Error rates correct (10⁻⁵ → 10⁻⁷ → 10⁻⁹–10⁻¹⁰)
- [x] Okazaki fragment sizes correct (E. coli 1–2 kb; human 100–200 nt)
- [x] Telomerase mechanism (TERT + TERC) correct
- [x] ATR–CHK1 checkpoint pathway correct
- [x] No fabricated references

### Educational
- [x] Beginner → advanced progression maintained
- [x] Every module links related lab(s), assessment, cheat sheet, FAQ
- [x] Labs connect to theory modules

### Technical
- [x] All 5 PDFs generated and visually inspected (cover, TOC, body, tables, page numbers, headers/footers)
- [x] Fixed: blank page after PDF cover; body text touching page edges
- [x] PPTX regenerated with instructor title slide; verified openable
- [x] 1,121 site links validated — 0 broken (fixed: doubled `.md.html` links, sidebar relative paths, missing BUILD_REPORT page)
- [x] Fixed: duplicated page header on course subpages
- [x] PDF/PPTX links verified over HTTP (200)
- [x] Mobile (430px) and desktop (1366px) rendering verified via screenshots
- [x] No placeholder text remaining

---

## Limitations and Assumptions

1. **PDF diagrams** are ASCII/text-based inside styled code blocks; publication figures would need BioRender/Illustrator.
2. **Datasets are simulated** for teaching; they are labeled as such in the course material.
3. **CI Chrome**: the workflow installs Chrome via `npx puppeteer browsers install chrome`; if Chrome versions shift, pin as needed.
4. **Pages activation**: the maintainer must select "GitHub Actions" as the Pages source once (Settings → Pages); the workflow handles everything after that. The deployment source is `DNA-Replication-Course/`; the workflow file itself must physically remain under `.github/workflows/` for GitHub Actions to detect it.
5. **Lab SOPs**: wet-lab parameters are educational defaults; institutions must follow their own approved SOPs and biosafety rules.
