const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Dr. Saira Azam';
pptx.company = 'Centre of Excellence in Molecular Biology, University of the Punjab, Lahore';
pptx.subject = 'DNA Replication in Prokaryotes and Eukaryotes';
pptx.title = 'DNA Replication — Complete Lecture Series';

// Color scheme
const COLORS = {
  primary: '1B4F72',
  secondary: '2E86C1',
  accent: 'E74C3C',
  dark: '2C3E50',
  light: 'ECF0F1',
  white: 'FFFFFF',
  green: '27AE60',
  orange: 'E67E22',
  purple: '8E44AD',
  teal: '16A085',
  gray: '7F8C8D'
};

// Helper functions
function addTitleSlide(title, subtitle) {
  pptx.addSlide().addText([
    { text: title, options: { fontSize: 34, color: COLORS.white, bold: true, breakLine: true } },
    { text: subtitle, options: { fontSize: 17, color: COLORS.light, italic: true, breakLine: true } },
    { text: '', options: { fontSize: 10, breakLine: true } },
    { text: 'Dr. Saira Azam', options: { fontSize: 20, color: COLORS.white, bold: true, breakLine: true } },
    { text: 'Assistant Professor', options: { fontSize: 14, color: COLORS.light, breakLine: true } },
    { text: 'Centre of Excellence in Molecular Biology', options: { fontSize: 13, color: COLORS.light, breakLine: true } },
    { text: 'University of the Punjab, Lahore', options: { fontSize: 13, color: COLORS.light } }
  ], { x: '5%', y: '18%', w: '90%', h: '64%', align: 'center', valign: 'middle', fill: { color: COLORS.primary } });
}

function addSectionSlide(title, moduleNum) {
  pptx.addSlide().addText([
    { text: `Module ${moduleNum}`, options: { fontSize: 20, color: COLORS.secondary, breakLine: true } },
    { text: title, options: { fontSize: 36, color: COLORS.white, bold: true } }
  ], { x: '5%', y: '20%', w: '90%', h: '60%', align: 'center', valign: 'middle', fill: { color: COLORS.dark } });
}

function addContentSlide(title, bullets, notes) {
  const slide = pptx.addSlide();
  slide.addText(title, { x: '5%', y: '3%', w: '90%', h: '10%', fontSize: 28, color: COLORS.primary, bold: true, underline: true });
  const bulletText = bullets.map(b => ({ text: b, options: { bullet: true, fontSize: 16, color: COLORS.dark, breakLine: true, paraSpaceAfter: 6 } }));
  slide.addText(bulletText, { x: '5%', y: '15%', w: '88%', h: '75%', valign: 'top' });
  if (notes) slide.addNotes(notes);
}

function addComparisonSlide(title, headers, rows) {
  const slide = pptx.addSlide();
  slide.addText(title, { x: '5%', y: '3%', w: '90%', h: '10%', fontSize: 28, color: COLORS.primary, bold: true, underline: true });
  const tableRows = [headers.map(h => ({ text: h, options: { bold: true, color: COLORS.white, fill: { color: COLORS.primary } } }))];
  rows.forEach(row => tableRows.push(row.map(cell => ({ text: cell, options: { fontSize: 12, color: COLORS.dark } }))));
  slide.addTable(tableRows, { x: '3%', y: '15%', w: '94%', border: { type: 'solid', pt: 0.5, color: COLORS.gray }, autoPage: false, rowH: 0.4 });
}

function addDiagramSlide(title, diagramText, notes) {
  const slide = pptx.addSlide();
  slide.addText(title, { x: '5%', y: '3%', w: '90%', h: '10%', fontSize: 28, color: COLORS.primary, bold: true, underline: true });
  slide.addText(diagramText, { x: '5%', y: '15%', w: '90%', h: '75%', fontSize: 14, fontFace: 'Courier New', color: COLORS.dark, valign: 'top', fill: { color: COLORS.light } });
  if (notes) slide.addNotes(notes);
}

function addKeyTakeawaySlide(title, takeaway) {
  pptx.addSlide().addText([
    { text: 'KEY TAKEAWAY', options: { fontSize: 16, color: COLORS.accent, bold: true, breakLine: true } },
    { text: title, options: { fontSize: 28, color: COLORS.white, bold: true, breakLine: true } },
    { text: takeaway, options: { fontSize: 18, color: COLORS.light, italic: true } }
  ], { x: '5%', y: '15%', w: '90%', h: '70%', align: 'center', valign: 'middle', fill: { color: COLORS.dark } });
}

// ========== MODULE 1: Introduction ==========
addTitleSlide('DNA Replication in Prokaryotes and Eukaryotes', 'Complete Molecular Biology Teaching Module');

addSectionSlide('Introduction and Fundamentals', '1');

addContentSlide('Why DNA Replication Matters', [
  'Every cell division requires complete genome duplication',
  'Ensures genetic information is passed to daughter cells',
  'Errors can lead to: cell death, cancer, genetic disease',
  'One of the most fundamental processes in biology',
  'Evolutionary conservation across all life forms'
], 'Emphasize the universality of DNA replication across all domains of life.');

addContentSlide('The Central Dogma and Replication', [
  'DNA → RNA → Protein (central dogma)',
  'DNA replication precedes transcription and translation',
  'Replication is semi-discontinuous (leading + lagging strands)',
  'Requires: template, primers, polymerase, dNTPs, energy',
  'All organisms use semiconservative replication'
]);

addContentSlide('Historical Milestones', [
  '1953: Watson & Crick — DNA double helix structure',
  '1958: Meselson & Stahl — Semiconservative replication proven',
  '1968: Okazaki — Discovery of Okazaki fragments',
  '1970s: Kornberg — DNA polymerase purification',
  '1985: Greider & Blackburn — Telomerase discovery',
  '2009: Nobel Prize — Blackburn, Greider, Szostak (telomere biology)'
], 'The Meselson-Stahl experiment is a frequently tested topic.');

addDiagramSlide('Meselson-Stahl Experiment', `
MESONSELSON-STAHL EXPERIMENT (1958)
====================================

Growth in ¹⁵N (heavy) medium → All DNA heavy
Transfer to ¹⁴N (light) medium

Gen 0:  ━━━━━━━━━ (heavy band, bottom)
Gen 1:  ━━━━━━━━━ (hybrid band, middle)  
Gen 2:  ━━━━━━━━━ (hybrid + light bands)
Gen 3:  ━━━━━━━━━ (hybrid + light bands, light thicker)

Three models:
• Conservative: Original stays together → REJECTED
• Semiconservative: One old + one new strand → ACCEPTED ✓
• Dispersive: Mixed old/new in each strand → REJECTED
`, 'Explain each generation prediction before showing results.');

// ========== MODULE 2: Core Concepts ==========
addSectionSlide('Core Concepts of DNA Replication', '2');

addContentSlide('Semiconservative Replication', [
  'Each daughter molecule: 1 parental strand + 1 new strand',
  'Template-directed synthesis ensures fidelity',
  'Both strands serve as templates simultaneously',
  'Consistent across all domains of life',
  'Key evidence: Meselson-Stahl density gradient experiment'
]);

addContentSlide('Requirements for DNA Replication', [
  'SUBSTRATES: dNTPs (dATP, dTTP, dGTP, dCTP) — building blocks + energy',
  'TEMPLATE: Parental DNA strands',
  'PRIMER: RNA primer (provides free 3\'-OH for polymerase)',
  'ENZYMES: Helicase, primase, DNA polymerase, topoisomerase, ligase',
  'ACCESSORY: Sliding clamp, clamp loader, SSB/RPA proteins',
  'ENERGY: ATP (helicase, topoisomerase, clamp loader) + pyrophosphate release'
]);

addDiagramSlide('Replication Fork Structure', `
                    Topoisomerase (relieves supercoiling)
                         ↓
    ←═══════════════════════════════════
                Helicase (unwinds DNA)
                         ↓
         ┌──── Replication Fork ────┐
         │                          │
    Leading Strand          Lagging Strand
    (continuous)            (discontinuous)
    5'→3' toward fork       5'→3' away from fork
    [Pol III + β clamp]     [Okazaki fragments]
    One primer              Multiple primers
    ←═══════════════════════════→
                Direction of fork movement →
`, 'Walk through each component systematically.');

addContentSlide('Leading vs. Lagging Strand', [
  'LEADING STRAND: Synthesized continuously toward the fork (5\'→3\')',
  'LAGGING STRAND: Synthesized discontinuously away from the fork',
  'Okazaki fragments: 1-2 kb (E. coli), 100-200 nt (eukaryotes)',
  'BOTH strands are synthesized 5\'→3\' — this is universal',
  'Lagging strand discontinuity is due to antiparallel DNA structure'
], 'Common exam question: Both strands are 5\'→3\'. The lagging strand is NOT 3\'→5\'.');

addKeyTakeawaySlide('The Central Rule', 'DNA is ALWAYS synthesized in the 5\'→3\' direction.\nNo known exception in any organism.');

// ========== MODULE 3: Prokaryotic Replication ==========
addSectionSlide('Prokaryotic DNA Replication — E. coli', '3');

addContentSlide('E. coli Genome Overview', [
  'Circular chromosome: 4,641,652 bp',
  'Single origin of replication: oriC (245 bp)',
  'Two bidirectional replication forks',
  'Replication time: ~40 minutes',
  'Fork speed: ~1,000 nucleotides/second',
  'Okazaki fragments: 1,000-2,000 nt',
  '~4,300 genes'
]);

addDiagramSlide('oriC Structure', `
oriC — E. coli ORIGIN OF REPLICATION (245 bp)
================================================

Region 1: AT-RICH 13-MER REPEATS (easily melted)
┌────────────────────────────────────────────────┐
│  13-mer    13-mer    13-mer                    │
│  (A-T pairs: only 2 H-bonds → easier to melt) │
└────────────────────────────────────────────────┘

Region 2: 9-MER REPEATS (DnaA boxes)
┌────────────────────────────────────────────────┐
│  R1    R2    R3    R4    R5                    │
│  High  High  Low   High  High affinity         │
│  affinity affinity affinity                    │
└────────────────────────────────────────────────┘

Key features:
• DnaA boxes: GATCTNTTNTTNCAG (consensus)
• R3 has lower affinity → only bound when enough DnaA-ATP
• Cooperative binding → helical filament formation
• Positive supercoiling → AT-rich region melts
`, 'Explain the two regions and their functions.');

addContentSlide('Initiation — Step by Step', [
  '1. DnaA-ATP accumulates (active initiator form)',
  '2. DnaA binds DnaA boxes (R1-R5) cooperatively',
  '3. Positive supercoiling induced → AT-rich 13-mers melt',
  '4. DnaC loads DnaB helicase onto each strand',
  '5. DnaC dissociates (ATP-dependent)',
  '6. Two DnaB hexamers → bidirectional forks'
], 'Emphasize the role of ATP in every step.');

addContentSlide('The E. coli Replisome', [
  'DnaB helicase: Unwinds DNA (5\'→3\' direction)',
  'DnaG primase: Synthesizes RNA primers (10-12 nt)',
  'Pol III holoenzyme: Two core complexes (one per strand)',
  'β sliding clamp: Processivity factor (homodimer)',
  'γ complex (clamp loader): Loads β clamp (ATP-dependent)',
  'SSB proteins: Stabilize single-stranded DNA'
]);

addComparisonSlide('Pol III Core Subunits', 
  ['Subunit', 'Gene', 'Function', 'Important Notes'],
  [
    ['α (alpha)', 'dnaE', 'DNA polymerase (5\'→3\' synthesis)', 'No proofreading'],
    ['ε (epsilon)', 'dnaQ', '3\'→5\' exonuclease (proofreading)', 'Essential for fidelity'],
    ['θ (theta)', 'holE', 'Stimulates ε activity', 'Structural role'],
    ['τ (tau)', 'dnaX', 'Dimerizes cores, connects to helicase', 'Coordinates leading/lagging']
  ]
);

addDiagramSlide('Okazaki Fragment Processing', `
OKAZAKI FRAGMENT PROCESSING IN E. coli
========================================

Lagging strand template: 3'═══════════════════════→5'

Step 1: Pol III synthesizes Okazaki fragment
        5'─[RNA 10nt]─[DNA ~1500nt]─3'

Step 2: Pol III reaches previous fragment
        → Polymerase releases (collision)

Step 3: Pol I binds at nick
        → 5'→3' exonuclease removes RNA primer
        → Polymerase fills gap with DNA (nick translation)

Step 4: DNA ligase seals nick (NAD⁺-dependent)

Result: Continuous lagging strand
`, 'Walk through each step showing the molecular events.');

addContentSlide('Termination in E. coli', [
  'Forks converge in Ter region (opposite oriC)',
  'Tus/Ter system: Polar fork trap',
  'Tus binds Ter sequences → blocks fork in one direction',
  'Multiple Ter sites ensure both forks are trapped',
  'Catenanes form (interlinked daughter chromosomes)',
  'Topoisomerase IV decatenates daughter chromosomes',
  'FtsK helps chromosome segregation'
]);

addKeyTakeawaySlide('E. coli Replication Summary', 'Single origin → Bidirectional forks → Pol III holoenzyme → Leading (continuous) + Lagging (Okazaki) → Pol I removes primers → Ligase seals → Tus/Ter termination');

// ========== MODULE 4: Eukaryotic Replication ==========
addSectionSlide('Eukaryotic DNA Replication — Human Cells', '4');

addContentSlide('Eukaryotic Replication Complexity', [
  'Genome: 3.2 × 10⁹ bp (700× larger than E. coli)',
  '46 linear chromosomes (vs. 1 circular)',
  '30,000-50,000 origins (vs. 1 in E. coli)',
  'Replication time: 6-8 hours (S phase)',
  'Fork speed: ~50 nt/s (20× slower than E. coli)',
  'Chromatin packaging: Nucleosomes must be disassembled/reassembled',
  'Telomeres required for linear chromosome ends'
]);

addContentSlide('Replication Licensing', [
  'LICENSING (G1 phase, low CDK):',
  '  • ORC binds origins',
  '  • Cdc6 + Cdt1 recruited',
  '  • MCM2-7 double hexamers loaded',
  '  • Origin is "licensed" (pre-RC assembled)',
  '',
  'ACTIVATION (S phase, high CDK):',
  '  • CDK + DDK phosphorylate MCM',
  '  • Cdc45 + GINS loaded → CMG helicase',
  '  • Origins FIRE → replication begins',
  '  • No new licensing possible (CDK prevents it)'
], 'Key concept: Licensing and firing are mutually exclusive.');

addDiagramSlide('Pre-Replication Complex Assembly', `
PRE-RC ASSEMBLY (G1 Phase)
==========================

Step 1: ORC binds origin DNA (ATP-dependent)
        [Orc1-6 complex]

Step 2: Cdc6 binds ORC (ATP-dependent)
        [ORC-Cdc6 complex]

Step 3: Cdt1 recruits MCM2-7
        [ORC-Cdc6-Cdt1-MCM]

Step 4: MCM2-7 loaded onto DNA (ATP hydrolysis)
        [Double hexamer formed]

Step 5: Cdc6 released, Cdt1 inhibited (by geminin in S)
        [Licensed origin — ready to fire]

Note: Each origin loaded with 4-5 MCM double hexamers
`, 'Emphasize the ATP requirement at multiple steps.');

addContentSlide('The CMG Helicase', [
  'CMG = Cdc45 + MCM2-7 + GINS',
  'Active replicative helicase in eukaryotes',
  'MCM2-7 loaded INACTIVE at origins',
  'Activated by CDK + DDK phosphorylation in S phase',
  'Unwinds DNA in 5\'→3\' direction (on lagging strand template)',
  'Highly processive — can unwind >10 kb',
  'Disassembled at termination by p97/Cdc48'
]);

addComparisonSlide('Eukaryotic DNA Polymerases',
  ['Polymerase', 'Function', 'Location', 'Proofreading', 'Processivity'],
  [
    ['Pol α/primase', 'Initiates synthesis; makes RNA-DNA primer', 'Nucleus', 'NO', 'Low'],
    ['Pol ε', 'Leading strand synthesis', 'Nucleus', 'YES (3\'→5\' exo)', 'High (with PCNA)'],
    ['Pol δ', 'Lagging strand + repair', 'Nucleus', 'YES (3\'→5\' exo)', 'High (with PCNA)'],
    ['Pol γ', 'Mitochondrial DNA', 'Mitochondria', 'YES', 'High'],
    ['Pol η, κ, ι', 'Translesion synthesis', 'Nucleus', 'Varies', 'Low']
  ]
);

addDiagramSlide('Eukaryotic Replication Fork', `
EUKARYOTIC REPLICATION FORK
=============================

Direction of fork movement →

         CMG Helicase
    (Cdc45-MCM2-7-GINS)
         │
    ═════╪═══════════════════
    ← Unwinding →
         │
    ╱    │    ╲
   ╱  RPA     ╲
  ╱  (ssDNA)   ╲
 ╱               ╲

LEADING STRAND:
    5'─────────────→3' (template)
    ←3'═══════════════5' (new DNA, continuous)
         Pol ε + PCNA
         
LAGGING STRAND:
    3'═══════════════→5' (template)
    ←─Frag1─→←─Frag2─→ (Okazaki fragments)
    [Pol α → Pol δ + PCNA]
    
AFTER:
    RNase H2 + FEN1 → remove RNA
    Pol δ → fill gaps
    DNA Ligase I → seal nicks
`, 'Point out the key differences from the prokaryotic fork.');

addContentSlide('Polymerase Switching', [
  'Step 1: Pol α/primase makes RNA-DNA primer (~8-12 nt RNA + ~20 nt DNA)',
  'Step 2: RFC loads PCNA at primer-template junction',
  'Step 3: Pol ε (leading) or Pol δ (lagging) displaces Pol α',
  'Step 4: Processive synthesis begins on the new polymerase',
  'Why switch? Pol α has NO proofreading → low fidelity',
  'Pol ε/δ have proofreading → high fidelity'
], 'Analogy: Pol α starts the race (lays primer), then hands off to Pol ε/δ (the marathon runners).');

addContentSlide('Chromatin Remodeling During Replication', [
  'DNA is packaged into nucleosomes (histones + DNA)',
  'Nucleosomes must be disassembled ahead of the fork',
  'FACT complex: Facilitates nucleosome disassembly',
  'CAF-1: Deposits new H3-H4 tetramers behind the fork',
  'ASF1: Histone chaperone for H3-H4',
  'Parental histones are recycled (maintain epigenetic marks)',
  'New histones fill gaps → epigenetic inheritance'
]);

addKeyTakeawaySlide('Eukaryotic Replication Summary', 'Multiple origins → Licensing in G1 → CMG activation in S → Pol α initiates → Pol ε (leading) + Pol δ (lagging) → Chromatin reassembled → Telomeres maintained by telomerase');

// ========== MODULE 5: Fidelity ==========
addSectionSlide('Replication Fidelity and Repair', '5');

addDiagramSlide('Three Layers of Replication Fidelity', `
REPLICATION FIDELITY — THREE LAYERS
=====================================

Layer 1: BASE SELECTION (Polymerase active site)
─────────────────────────────────────────────────
• Geometric selection of correct Watson-Crick pairs
• Induced-fit mechanism
• Error rate: ~1 in 10⁵ (10⁻⁵)

Layer 2: PROOFREADING (3'→5' exonuclease)
─────────────────────────────────────────────────
• Polymerase stalls at mismatch
• DNA transfers to exonuclease site
• Incorrect nucleotide excised
• Error rate improves: ~1 in 10⁷ (10⁻⁷)

Layer 3: MISMATCH REPAIR (post-replicative)
─────────────────────────────────────────────────
• MutS/MutL/MutH (E. coli) or MSH/MLH (eukaryotes)
• Recognizes mismatch after replication
• Degrades new strand, resynthesizes
• Final error rate: ~1 in 10⁹–10¹⁰

CUMULATIVE: 10⁻⁵ × 10⁻² × 10⁻² = 10⁻⁹
`, 'Emphasize that each layer provides ~100-fold improvement.');

addComparisonSlide('Mismatch Repair: E. coli vs. Eukaryotes',
  ['Feature', 'E. coli (MutHLS)', 'Eukaryotes (MutSα/MutLα)'],
  [
    ['MutS equivalent', 'MutS homodimer', 'MSH2-MSH6 (MutSα)'],
    ['MutL equivalent', 'MutL homodimer', 'MLH1-PMS2 (MutLα)'],
    ['Strand discrimination', 'Dam methylation (GATC)', 'Strand nicks (Okazaki ends)'],
    ['Endonuclease', 'MutH (nicks unmethylated)', 'MutLα (nicks nicked strand)'],
    ['Exonuclease', 'ExoI, VII, X, RecJ', 'EXO1'],
    ['Helicase', 'UvrD', 'Not fully defined']
  ]
);

addKeyTakeawaySlide('Clinical Significance', 'Defective mismatch repair → Lynch syndrome (HNPCC)\nMSI-High tumors → Responsive to anti-PD-1 immunotherapy');

// ========== MODULE 6: Telomeres ==========
addSectionSlide('Telomeres and Telomerase', '6');

addContentSlide('The End-Replication Problem', [
  'Linear chromosomes cannot be fully replicated at 5\' ends',
  'RNA primer at lagging strand terminus is removed → gap',
  'No upstream 3\'-OH available to fill the gap',
  'Result: Progressive shortening (~50-200 bp/division in humans)',
  'Eventually: Critical length → Senescence or apoptosis',
  'Solution: Telomeres (repetitive DNA buffer) + Telomerase'
]);

addDiagramSlide('Telomerase Mechanism', `
TELOMERASE MECHANISM
=====================

Components:
• TERT (Telomerase Reverse Transcriptase) — protein
• TR/TERC (Telomerase RNA) — contains template

Template in TERC: 3'-CAAUCCCAAUC-5'

Mechanism:
Step 1: Telomerase binds 3' overhang
Step 2: Template aligns with telomere end
        Telomere:  5'-TTAGGG-3'
                   |||||||
        Template:  3'-CAAUCCC-5'

Step 3: TERT reverse transcribes template
        → Adds TTAGGG repeats to 3' end

Step 4: Translocation → repeat cycle

Step 5: Complementary strand filled by Pol α/Pol δ
        → Maintains 3' overhang
`, 'Show how telomerase uses RNA as template for DNA synthesis.');

addContentSlide('Telomeres in Disease', [
  'AGING: Telomere shortening → Hayflick limit → senescence',
  'DYSKERATOSIS CONGENITA: TERT/TERC mutations → very short telomeres',
  'CANCER: 85-90% reactivate telomerase (TERT promoter mutations)',
  'ALT: 10-10% use homologous recombination (ALT pathway)',
  'THERAPEUTY: Telomerase inhibitors (imetelstat) for cancer',
  'BIOMARKER: Telomere length measured in clinical diagnostics'
]);

addKeyTakeawaySlide('Telomere Biology', 'Telomerase = TERT + TERC\nTemplate: CAAUCCCAAUC\nCancer: 85-90% telomerase+, 10-15% ALT\nAging: Short telomeres → Senescence');

// ========== MODULE 7: Checkpoints ==========
addSectionSlide('Replication Stress and Checkpoints', '7');

addContentSlide('What is Replication Stress?', [
  'Any condition that slows or blocks replication fork progression',
  'CAUSES: DNA damage, nucleotide depletion, R-loops,',
  '  transcription-replication conflicts, secondary structures,',
  '  oncogene activation, common fragile sites',
  'CONSEQUENCES: Fork stalling, fork collapse (DSBs),',
  '  genome instability, chromosomal rearrangements, cancer'
]);

addDiagramSlide('ATR-CHK1 Checkpoint Pathway', `
ATR-CHK1 CHECKPOINT PATHWAY
============================

1. STALLING EVENT
   Fork stops → ssDNA exposed → RPA binds

2. SENSOR
   ATRIP binds RPA-ssDNA → Recruits ATR kinase

3. ACTIVATION
   TopBP1 activates ATR
   → ATR phosphorylates hundreds of substrates

4. SIGNALING
   ATR phosphorylates CHK1 (effector kinase)

5. EFFECTOR RESPONSES
   ├→ Stabilize stalled forks (prevent collapse)
   ├→ Suppress new origin firing (within S phase)
   ├→ Delay S/M transition
   ├→ Activate DNA repair pathways
   └→ Slow cell-cycle progression

6. RESOLUTION
   Stress resolved → ATR/CHK1 deactivated → Resume
`, 'Walk through the pathway step by step.');

addKeyTakeawaySlide('Replication Stress in Cancer', 'Oncogene activation → Excessive origin firing → Replication stress → Genome instability → Cancer progression');

// ========== MODULE 8: Comparison ==========
addSectionSlide('Prokaryote vs. Eukaryote Comparison', '8');

addComparisonSlide('Comprehensive Replication Comparison',
  ['Feature', 'Prokaryotes (E. coli)', 'Eukaryotes (Human)'],
  [
    ['Genome size', '4.6 × 10⁶ bp', '3.2 × 10⁹ bp'],
    ['Chromosome', '1 (circular)', '46 (linear)'],
    ['Origins', '1 (oriC)', '30,000-50,000'],
    ['Helicase', 'DnaB (3\'→5\')', 'CMG (5\'→3\')'],
    ['Sliding clamp', 'β₂ (dimer)', 'PCNA (trimer)'],
    ['Leading Pol', 'Pol III', 'Pol ε'],
    ['Lagging Pol', 'Pol III', 'Pol δ'],
    ['Okazaki size', '1-2 kb', '100-200 bp'],
    ['Fork speed', '1,000 nt/s', '50 nt/s'],
    ['Telomeres', 'No', 'Yes'],
    ['Licensing', 'No', 'Pre-RC (ORC/Cdc6/Cdt1/MCM)'],
    ['MMR discrimination', 'Dam methylation', 'Strand nicks/PCNA'],
    ['Termination', 'Tus/Ter', 'Fork convergence']
  ]
);

// ========== MODULE 9: Experimental Methods ==========
addSectionSlide('Experimental Methods', '9');

addContentSlide('Methods to Study Replication', [
  'IN VITRO RECONSTITUTION: Purified proteins + DNA template',
  'DNA FIBER ANALYSIS: IdU/CldU labeling → fork dynamics',
  'OKAZAKI FRAGMENT ANALYSIS: Denaturing gels → fragment size',
  'REPLI-SEQ: FACS + sequencing → replication timing',
  'ChIP-seq: Protein-DNA interactions (ORC, MCM, PCNA)',
  'FLUORESCENCE MICROSCOPY: Replication foci in live cells',
  'CRISPR/Cas9: Origin deletion, protein tagging'
]);

addKeyTakeawaySlide('Experimental Design', 'Always consider: What question? What method? What controls?\nIn vitro = mechanistic detail; In vivo = physiological relevance');

// ========== MODULE 10: Data Analysis ==========
addSectionSlide('Data Analysis and Bioinformatics', '10');

addContentSlide('Bioinformatics Approaches', [
  'ORIGIN PREDICTION: GC-skew analysis, DnaA box searching',
  'REPLICATION TIMING: Repli-seq data analysis',
  'FIBER DATA: Track length measurement → fork speed',
  'SEQUENCE ANALYSIS: Primer design, ORF identification',
  'PROTEIN COMPARISON: BLAST, domain analysis',
  'MUTATION ANALYSIS: Consequence prediction',
  'GENOME-WIDE: Origin mapping, replication timing profiles'
]);

// ========== MODULE 11: Clinical Applications ==========
addSectionSlide('Clinical and Biotechnology Applications', '11');

addContentSlide('Drugs Targeting Replication', [
  'FLUOROQUINOLONES (Ciprofloxacin): Trap DNA gyrase → bacterial DSBs',
  'RIFAMPICIN: Blocks RNA polymerase → affects initiation',
  'PARP INHIBITORS (Olaparib): Synthetic lethality in BRCA-mutant cancers',
  'ATR INHIBITORS (Ceralasertib): Sensitize to replication stress',
  'NUCLEOSIDE ANALOGS (Acyclovir, AZT): Chain termination in viral replication',
  'ANTIMETABOLITES (5-FU, Gemcitabine): Deplete dNTP pools'
]);

addContentSlide('Replication and Disease', [
  'LYNCH SYNDROME: MMR gene mutations → MSI → cancer',
  'DYSKERATOSIS CONGENITA: Telomere maintenance defects → aging',
  'FANCONI ANEMIA: Interstrand crosslink repair defect → bone marrow failure',
  'BLOOM SYNDROME: BLM helicase mutation → genome instability',
  'CANCER: Oncogene-induced replication stress → genome instability',
  'TELOMERES: Short telomeres → aging; Telomerase reactivation → cancer'
]);

// ========== MODULE 12: Advanced Topics ==========
addSectionSlide('Advanced Topics', '12');

addContentSlide('Replication Fork Dynamics', [
  'FORK STALLING: Obstacles block progression → ssDNA accumulates',
  'FORK REVERSAL: New strands anneal → "chicken foot" structure',
  '  • Protective: allows template switching, lesion bypass',
  '  • Dangerous: if not resolved → genome instability',
  'FORK COLLAPSE: DSB at fork → requires HR for repair',
  'REPLICATION-TRANSCRIPTION CONFLICTS: R-loops block forks',
  'TRANSLESION SYNTHESIS: TLS polymerases bypass lesions (error-prone)',
  'TEMPLATE SWITCHING: Uses sister chromatid (error-free)'
]);

addContentSlide('Cancer and Replication Stress', [
  'ONCOGENE-INDUCED REPLICATION STRESS:',
  '  • Excessive origin firing (Ras, Myc)',
  '  • dNTP pool imbalance',
  '  • Transcription-replication conflicts',
  '  • Incomplete licensing',
  '',
  'CONSEQUENCES:',
  '  • Fork stalling and collapse',
  '  • Double-strand breaks',
  '  • Chromosomal rearrangements',
  '  • Common fragile site expression',
  '  • Tumor evolution and drug resistance'
]);

addKeyTakeawaySlide('The Bigger Picture', 'DNA replication is fundamental to life, disease, and therapy.\nUnderstanding mechanisms → Better diagnostics and treatments.');

// ========== FINAL SLIDE ==========
addContentSlide('Course Summary', [
  'FOUNDATIONS: Semiconservative replication, directionality, requirements',
  'PROKARYOTIC: E. coli complete mechanism (oriC → termination)',
  'EUKARYOTIC: Licensing, CMG, polymerase switching, chromatin',
  'FIDELITY: Three layers → proofreading → MMR → 10⁻⁹–10⁻¹⁰ error rate',
  'TELOMERES: End-replication problem, telomerase, aging, cancer',
  'CHECKPOINTS: ATR-CHK1, replication stress, genome stability',
  'APPLICATIONS: Antibiotics, cancer therapy, diagnostics, biotechnology',
  'ADVANCED: Fork dynamics, R-loops, fragile sites, cancer genomics'
]);

addContentSlide('Thank You', [
  'Questions?',
  '',
  'Recommended Textbooks:',
  '• Alberts, Molecular Biology of the Cell',
  '• Lodish, Molecular Cell Biology',
  '• Watson, Molecular Biology of the Gene',
  '',
  'Office Hours: _________________________',
  'Email: _________________________'
]);

// Generate the PPTX
pptx.writeFile({ fileName: 'PPTX/DNA_Replication_Complete_Lecture.pptx' })
  .then(() => console.log('PPTX generated successfully!'))
  .catch(err => console.error('Error:', err));
