# Module 03: Prokaryotic DNA Replication

**← [Previous: Core Concepts](02-Core-Concepts.md) | [Next: Eukaryotic Replication →](04-Eukaryotic-DNA-Replication.md)**

---

## Learning Objectives

1. Describe the E. coli circular chromosome and oriC
2. Explain each step of prokaryotic replication initiation
3. Describe the roles of DnaA, DnaB, DnaC, and DnaG
4. Explain the mechanism of the Pol III holoenzyme
5. Describe leading and lagging strand synthesis in E. coli
6. Explain Okazaki fragment processing by Pol I
7. Describe termination using the Tus/Ter system
8. Understand replication fidelity mechanisms

---

## Overview: E. coli as a Model System

### Concept

*Escherichia coli* has been the primary model for understanding DNA replication since the 1960s. Its relatively small genome (4.6 × 10⁶ bp), fast growth rate, and well-characterized genetics make it ideal for mechanistic studies.

### Key Features

| Feature | Value |
|---------|-------|
| Genome size | 4,641,652 bp (circular) |
| Number of origins | 1 (oriC) |
| Replication forks | 2 (bidirectional) |
| Replication time | ~40 minutes |
| Fork speed | ~1,000 nt/second |
| Okazaki fragment size | 1,000–2,000 nt |
| Number of genes | ~4,300 |
| Generation time (optimal) | ~20 minutes |

### Why E. coli?

- Well-defined genetics (complete mutant collection)
- Reconstituted systems in vitro
- Many replication proteins identified and purified
- Structural information available for most components
- Clinical relevance (antibiotic targets)

---

## 1. The E. coli Chromosome

### Concept

The *E. coli* chromosome is a single circular double-stranded DNA molecule of approximately 4.6 × 10⁶ base pairs. It is organized into a compact nucleoid structure.

### Key Features

```
E. coli CHROMOSOME MAP (simplified)
════════════════════════════════════

           oriC (46 min)
              ↓
    ┌─────────●─────────┐
    │         │         │
    │    ← Fork 1       │
    │         │         │
    │         │         │
    │    Fork 2 →       │
    │         │         │
    └─────────●─────────┘
              ↑
          ter region
          (bidirectional termination)
```

### Chromosome Organization

- **Circular**: No ends, no telomere problem
- **Supercoiled**: Negatively supercoiled (superhelical density ~-0.06)
- **Nucleoid**: DNA organized with HU, H-NS, IHF, FIS proteins
- **Macrodomain structure**: Organized into topological domains

---

## 2. Origin of Replication: oriC

### Concept

oriC is the single origin of replication in *E. coli*, located at 84.3 minutes on the genetic map.

### Structure of oriC

```
oriC (245 bp)
═══════════════

Region 1 (13-mer repeats): AT-rich, easily melted
┌─────────────────────────────────────┐
│ AT-rich  AT-rich  AT-rich          │
│ 13-mer   13-mer   13-mer           │
│ (easy to unwind — fewer H-bonds)    │
└─────────────────────────────────────┘

Region 2 (9-mer repeats / DnaA boxes): 
┌─────────────────────────────────────┐
│ R1    R2    R3    R4    R5         │
│ GATCTNTTNTTNCAG  (DnaA consensus) │
│ (DnaA binding sites)               │
└─────────────────────────────────────┘

- R1, R2, R4, R5: High-affinity DnaA binding sites
- R3: Lower affinity (autoregulation)
- When enough DnaA-ATP accumulates → R3 binding → origin melts
```

### Why oriC is Special

1. **AT-rich 13-mers**: A-T pairs have only 2 H-bonds (vs. 3 for G-C), so they melt more easily
2. **Multiple DnaA boxes**: Allow cooperative binding of initiator protein
3. **Small size**: 245 bp is sufficient for autonomous replication
4. **Unique in genome**: No other sequence works as efficiently as oriC

---

## 3. Initiation — Step by Step

### Step 1: DnaA-ATP Accumulation

**What happens:**
- DnaA is the initiator protein
- DnaA binds ATP and ADP, but only DnaA-ATP is active for initiation
- The ratio of DnaA-ATP/DnaA-ADP increases during G1 phase
- When DnaA-ATP reaches a critical concentration, initiation begins

**Which protein:** DnaA (4×)
**Why necessary:** Ensures replication initiates only once per cell cycle

### Step 2: DnaA Binding to oriC

**What happens:**
- DnaA-ATP binds cooperatively to the 9-mer DnaA boxes (R1-R5)
- Forms a helical filament on DNA
- DnaA-ATP oligomerization induces positive supercoiling
- This destabilizes the adjacent AT-rich 13-mer region

**Which protein:** DnaA-ATP (20-30 molecules)
**Why necessary:** Creates the initial opening (bubble) at the origin

### Step 3: Origin Melting (Strand Separation)

**What happens:**
- The AT-rich 13-mer repeats melt (separate into single strands)
- Creates an open complex (replication bubble)
- 45 bp of DNA is initially unwound
- This is the rate-limiting step of initiation

**Which protein:** DnaA-ATP (indirect), thermal energy
**Why necessary:** Provides single-stranded template for helicase loading

### Step 4: DnaB (Helicase) Loading

**What happens:**
- DnaC (helicase loader) delivers DnaB to the melted origin
- DnaB is a hexameric ring helicase
- DnaC holds DnaB in an inactive state during loading
- DnaB encircles one strand of single-stranded DNA
- Once loaded, DnaC dissociates (ATP-dependent)

**Which protein:** DnaB (helicase, 2 hexamers loaded), DnaC (loader)
**Why necessary:** DnaB unwinds DNA ahead of the replication fork

### Step 5: Replication Bubble Formation

**What happens:**
- Two DnaB helicases are loaded (one per fork)
- They move in opposite directions (bidirectional replication)
- DnaB uses ATP hydrolysis to unwind DNA (5'→3' direction on the strand it encircles)
- Creates two replication forks

**Which protein:** DnaB helicase (×2)
**Why necessary:** Generates the Y-shaped replication fork structure

### Visual Explanation: Initiation

```
INITIATION AT oriC
═══════════════════

Step 1: DnaA-ATP binds to DnaA boxes
    ─────[R1][R2][R3][R4][R5]─────
              DnaA    DnaA
              DnaA    DnaA
    
Step 2: AT-rich region melts
    ─────[R1]═══════════[R5]─────
              ↑ Melted region ↑
    
Step 3: DnaC delivers DnaB to each fork
    ─────[R1]═══Helicase═══[R5]─────
              DnaB         DnaB
              (→)          (←)
    
Step 4: Bidirectional replication begins
              ← Fork 1        Fork 2 →
    ─────[R1]═════════════════[R5]─────
```

---

## 4. Elongation — The Replisome

### Concept

Once replication forks are established, the replisome — a complex molecular machine — carries out coordinated leading and lagging strand synthesis.

### Components of the E. coli Replisome

| Component | Function | Copies/Fork |
|-----------|----------|-------------|
| **DnaB helicase** | Unwinds dsDNA (5'→3') | 1 hexamer |
| **DnaG primase** | Synthesizes RNA primers | 1–2 |
| **DNA Pol III** | Synthesizes new DNA | 2 (one per strand) |
| **β sliding clamp** | Increases processivity | 2 |
| **Clamp loader (γ complex)** | Loads β clamp | 1 pentamer |
| **SSB** | Stabilizes ssDNA | Many |
| **Topoisomerase II (Gyrase)** | Relieves positive supercoiling | Ahead of fork |

### DNA Polymerase III Holoenzyme

The Pol III holoenzyme is the primary replicative polymerase in *E. coli*.

```
Pol III HOLOENZYME STRUCTURE
════════════════════════════

                    α  ε  θ
                   ┌───────┐
    Leading →      │ Pol III│ → Leading strand
    strand         │ Core   │
                   └───┬───┘
                       │
              ┌────────┴────────┐
              │   β sliding     │
              │   clamp         │
              └────────┬────────┘
                       │
              ┌────────┴────────┐
              │  τ (tau) subunit │
              │  (dimerizes)     │
              └────────┬────────┘
                       │
                   ┌───┴───┐
    Lagging →     │ Pol III│ → Lagging strand
    strand        │ Core   │
                  └───────┘
                    α  ε  θ

Subunits:
- α (dnaE): Polymerase activity (5'→3')
- ε (dnaQ): Proofreading exonuclease (3'→5')
- θ: Stimulates ε activity
- τ (dnaX): Dimerizes core, connects to helicase
- γ/δ/δ'/χ/ψ: Clamp loader complex
- β (dnaN): Sliding clamp (processivity factor)
```

### Pol III Core Function

| Subunit | Gene | Function |
|---------|------|----------|
| α | dnaE | DNA polymerase (5'→3' synthesis) |
| ε | dnaQ | 3'→5' exonuclease (proofreading) |
| θ | holE | Enhances ε stability |

**Combined error rate of Pol III core**: ~10⁻⁵ (before proofreading by ε: ~10⁻⁷)

---

## 5. β Sliding Clamp

### Concept

The β sliding clamp is a ring-shaped protein that encircles DNA and tethers DNA polymerase to the template, dramatically increasing processivity.

### Why It Matters

Without the β clamp:
- Pol III synthesizes only **10–20 nucleotides** before falling off
- With the β clamp: Pol III synthesizes **>50,000 nucleotides** without dissociating

### Structure

```
β SLIDING CLAMP
═══════════════

    ┌─────────────┐
    │  ╔═══════╗  │
    │  ║       ║  │
    │  ║  DNA  ║  │  ← Ring-shaped homodimer
    │  ║       ║  │     Inner diameter: ~35 Å
    │  ╚═══════╝  │     Fits dsDNA snugly
    └─────────────┘
    
- Homodimer (β₂)
- 6-fold symmetry
- Slides freely along DNA (no sequence specificity)
- Interacts with Pol III core and clamp loader
```

### Advanced Explanation

The β clamp is a **toroidal (ring-shaped)** protein with remarkable properties:
- It slides along DNA at the same speed as the polymerase
- It has **no intrinsic enzymatic activity** — it is purely a processivity factor
- Its structure is conserved: the eukaryotic equivalent (PCNA) has a similar ring shape but is a **trimer** (vs. dimer in prokaryotes)

---

## 6. Clamp Loader (γ Complex)

### Concept

The clamp loader (also called the γ complex) uses ATP hydrolysis to open the β sliding clamp ring and load it onto primer-template junctions.

### Components

| Subunit | Function |
|---------|----------|
| γ (gamma) | ATPase, motor activity |
| δ (delta) | Opens β clamp |
| δ' (delta-prime) | Structural scaffold |
| χ (chi) | Interacts with SSB |
| ψ (psi) | Bridges γ and χ |

### Mechanism

1. γ complex binds ATP
2. γ-ATP complex binds β clamp → opens the ring
3. β-clamp-loaded complex binds primer-template DNA
4. ATP hydrolysis → β clamp closes around DNA
5. γ complex releases, leaving β clamp on DNA
6. Pol III core binds β clamp → polymerase is now processive

---

## 7. Leading Strand Synthesis

### Step-by-Step Mechanism

```
LEADING STRAND SYNTHESIS
═════════════════════════

1. DnaB helicase unwinds DNA at the fork
2. SSB proteins coat the exposed single-stranded template
3. DnaG primase synthesizes a short RNA primer (~10-12 nt)
4. Clamp loader loads β clamp at the primer-template junction
5. Pol III core binds β clamp → now highly processive
6. Pol III extends primer continuously in 5'→3' direction
7. Pol III follows DnaB helicase at the fork

Direction: same as fork movement →
Speed: ~1,000 nt/second
Processivity: >50,000 nt (with β clamp)
Only ONE primer needed per fork
```

### Key Point

The leading strand only needs **one primer** because synthesis is continuous. Once primed, Pol III follows the helicase around the entire chromosome.

---

## 8. Lagging Strand Synthesis — Okazaki Fragments

### Concept

The lagging strand is synthesized discontinuously as short fragments called **Okazaki fragments** (named after Reiji and Tuneko Okazaki, who discovered them in the 1960s).

### Why Okazaki Fragments Exist

The lagging strand template runs 5'→3' in the direction of fork movement. Since DNA polymerase can only synthesize 5'→3', synthesis on this strand must proceed **away from** the fork. As the fork unwinds more template, a new primer must be laid down and a new fragment synthesized.

### Step-by-Step Mechanism

```
LAGGING STRAND SYNTHESIS (cycle repeats)
════════════════════════════════════════

Fork movement →
3'════════════════════════════════════5' (lagging template)

Step 1: Fork exposes new ssDNA
Step 2: DnaG primase synthesizes RNA primer (→ direction)
        5'─rN─rN─rN─rN─rN─rN─rN─rN─rN─rN─3'
Step 3: Clamp loader loads β clamp
Step 4: Pol III synthesizes Okazaki fragment (5'→3', away from fork)
        5'─rN─rN─dN─dN─dN─dN─dN─dN─dN─dN─3'
        [RNA]──────────[DNA]────────────────→
Step 5: Pol III reaches RNA primer of previous Okazaki fragment
Step 6: Pol III releases (collision with previous fragment)
Step 7: β clamp recycled to new primer
Step 8: Cycle repeats

Okazaki fragment size: 1,000–2,000 nt
Each fragment: RNA primer (10-12 nt) + DNA (~1,000-2,000 nt)
```

### The Trombone Model

The lagging strand template loops back so that both Pol III cores can move in the same physical direction at the fork:

```
THE TROMBONE MODEL
═══════════════════

                    DnaB (helicase)
                         │
    Leading template →   │   ← Lagging template
    ───────────────→     │     ←───────────────
                         │
              Pol III (leading) →  ← Pol III (lagging)
                         │         │
                    β clamp     β clamp
                    (leading)    (lagging)
                                  ↑
                              Loop forms and
                              releases as each
                              Okazaki fragment
                              is completed
                              ("trombone slide")
```

### Common Misconception

**Misconception:** Okazaki fragments on the lagging strand are synthesized simultaneously.
**Reality:** Only one Okazaki fragment is being actively synthesized at a time. The lagging strand Pol III cycles between primers, completing one fragment before starting the next.

---

## 9. Primer Removal and Gap Filling

### Concept

After Okazaki fragments are synthesized, the RNA primers must be removed and replaced with DNA to create a continuous strand.

### Mechanism in E. coli

**DNA Polymerase I** (Pol I) performs primer removal and gap filling:

```
PRIMER REMOVAL BY POL I
════════════════════════

Before:
    5'─rNrN──────────────────dN──────────3' (Okazaki fragment 1)
    3'────────────────────────────────────5' (template)
                         5'─rNrN──────────dN──3' (Okazaki fragment 2)

Step 1: Pol I binds to 5' end of Okazaki fragment 2
        (at the nick between fragments)
Step 2: Pol I uses 5'→3' exonuclease to remove RNA primer
Step 3: Pol I simultaneously fills gap with DNA (nick translation)
Step 4: RNA is degraded, replaced with DNA
Step 5: A nick remains between the two DNA fragments

After:
    5'─dN────────────────────────────────3' 
    3'────────────────────────────────────5'
                         5'─dN────────────3'
    
    Nick at the junction → sealed by DNA ligase
```

### Pol I — A Unique Polymerase

| Activity | Direction | Function |
|----------|-----------|----------|
| 5'→3' polymerase | 5'→3' | Fills gaps (DNA synthesis) |
| 3'→5' exonuclease | 3'→5' | Proofreading |
| **5'→3' exonuclease** | 5'→3' | **Removes RNA primers** (unique to Pol I among E. coli polymerases) |

> The 5'→3' exonuclease activity of Pol I is critical — it is the only enzyme that can remove RNA primers ahead of the polymerase in *E. coli*.

---

## 10. DNA Ligase

### Concept

DNA ligase seals the nicks (breaks in the sugar-phosphate backbone) between Okazaki fragments after primer removal and gap filling, creating a continuous DNA strand.

### Mechanism

```
DNA LIGASE REACTION
═══════════════════

Before ligase:
    5'─────────────p─── 3' OH──────3'
                   ↑
              Nick (break in backbone)

Ligase mechanism:
1. Ligase binds NAD⁺ (in E. coli) or ATP (in eukaryotes/viruses)
2. Ligase-AMP intermediate forms (AMP attached to lysine)
3. AMP transferred to 5'-phosphate at nick
4. 3'-OH attacks activated 5'-phosphate → phosphodiester bond
5. AMP released

After ligase:
    5'────────────────────────────3'
                   └── phosphodiester bond
```

### Important Note

In *E. coli*, DNA ligase uses **NAD⁺** as a cofactor (not ATP). This is different from eukaryotic DNA ligases, which use ATP.

---

## 11. Topoisomerases and DNA Gyrase

### Concept

As the helicase unwinds DNA ahead of the replication fork, positive supercoils accumulate. Topoisomerases relieve this torsional stress to prevent the DNA from tangling and breaking.

### Why It Matters

Without topoisomerase activity:
- Positive supercoils accumulate ahead of the fork
- DNA becomes increasingly difficult to unwind
- Fork progression stops (fork stalling)
- DNA can break under torsional stress

### Types of Topoisomerases in E. coli

| Enzyme | Type | Mechanism | Function in Replication |
|--------|------|-----------|------------------------|
| **DNA Gyrase** | Type II | Cuts both strands, passes another duplex through, reseals | Introduces negative supercoils; relieves positive supercoils ahead of fork |
| **Topoisomerase I** | Type I | Cuts one strand, allows rotation, reseals | Relieves negative supercoils |
| **Topoisomerase IV** | Type II | Similar to gyrase | Decatenates (separates) daughter chromosomes after replication |

### DNA Gyrase — Unique to Bacteria

DNA gyrase is unique because it is the **only topoisomerase that can introduce negative supercoils** into DNA. It:
- Uses ATP hydrolysis
- Creates a double-strand break
- Passes another segment of DNA through the break
- Reseals the break
- Results in net introduction of negative supercoils

> **Clinical relevance**: DNA gyrase is the target of **fluoroquinolone antibiotics** (ciprofloxacin, levofloxacin) — they trap the gyrase-DNA complex, causing lethal DNA breaks.

---

## 12. Complete Replication Fork — All Components

### Visual Explanation

```
COMPLETE E. coli REPLICATION FORK
══════════════════════════════════════════════

Direction of fork movement →
                                    
    Topoisomerase/Gyrase
    (relieves positive supercoiling)
         ↓
    ─═══════════════════════════════════
    ← Parental dsDNA (ahead of fork)
    ─═══════════════════════════════════
              │
              │ DnaB Helicase
              │ (unwinds dsDNA)
              ↓
         ╱ ╲
        ╱   ╲
       ╱ SSB  ╲
      ╱  protein ╲
     ╱             ╲
    ╱               ╲
    
LEADING STRAND (top):
    5'────────────────→3' template
    ←3'═════════════════5' new (continuous)
         [Pol III + β clamp]
         
LAGGING STRAND (bottom):
    3'══════════════════→5' template
    ←──Fragment 1──→←Fragment 2──→  (discontinuous)
    [RNA][DNA]       [RNA][DNA]
         [Pol III + β clamp]
         
AFTER the fork (lagging strand processing):
    ┌─────────────────────────────────────┐
    │ Pol I: removes RNA, fills gaps     │
    │ DNA ligase: seals nicks            │
    │ → Continuous lagging strand        │
    └─────────────────────────────────────┘
```

---

## 13. Bidirectional Replication

### Concept

Replication from oriC proceeds bidirectionally — two replication forks move in opposite directions around the circular chromosome until they meet at the termination region.

### Why Bidirectional?

- Two DnaB helicases are loaded at oriC (one for each fork)
- Each fork has its own complete replisome
- Doubles the speed of genome replication (40 min instead of 80 min)

### Replication Timing

```
E. coli CHROMOSOME REPLICATION
══════════════════════════════

                    oriC
                      ●
                     / \
                    /   \
                   /     \
    Fork 1 →     /       \     ← Fork 2
                 /         \
                /           \
               /             \
              /               \
    ─────────●─────────────────●─────────
          TerB              TerA
          (termination region)
          
- Both forks travel at ~1,000 nt/second
- Complete replication: ~40 minutes
- Forks meet in the Ter region (opposite side from oriC)
```

---

## 14. Termination

### Concept

Replication terminates when the two converging replication forks meet in the termination region, opposite to oriC on the circular chromosome.

### The Tus/Ter System

*E. coli* uses a **polar replication fork trap** to ensure termination occurs in the correct region:

```
Tus/Ter SYSTEM
══════════════

Ter sites: 10 sequences (TerA-TerJ) arranged as a "trap"
Tus protein: Binds Ter sequences

Tus binds Ter → creates a polar fork barrier:
    
    TerB ←─── Fork 2 can pass through → allowed
              Fork 1 ←─── blocked by Tus-TerB
    
    TerA ←─── Fork 1 can pass through → allowed
              Fork 2 ←─── blocked by Tus-TerA

Result: Both forks are trapped in the Ter region
        → They meet and terminate there
```

### What Happens at Termination

1. **Forks converge**: The two replisomes meet
2. **Replication machinery disassembles**: Helicase, polymerase, etc. are removed
3. **Catenanes form**: The two daughter chromosomes are interlinked (like chain links)
4. **Topoisomerase IV decatenates**: Separates the interlinked circles
5. **Two daughter chromosomes**: Each is a complete circular molecule

### Post-Termination Events

| Event | Enzyme | Purpose |
|-------|--------|---------|
| Fork convergence | — | Both replisomes meet |
| Replisome disassembly | Tus, proteases | Release replication machinery |
| Catenane formation | — | Topological consequence of bidirectional replication |
| Decatenation | Topoisomerase IV | Separates daughter chromosomes |
| Chromosome segregation | FtsK, MukBEF | Ensures each daughter cell gets one chromosome |
| Cell division | FtsZ ring | Cytokinesis |

---

## 15. Replication Fidelity

### Concept

DNA replication in *E. coli* achieves an extraordinary error rate of approximately **one mistake per 10⁹–10¹⁰ nucleotides** incorporated. This is achieved through three layers of error correction.

### Three Layers of Fidelity

```
REPLICATION FIDELITY
═════════════════════

Layer 1: BASE SELECTION by Pol III
─────────────────────────────────
- Polymerase active site favors correct Watson-Crick pairs
- Geometric selection: only correct pairs fit
- Error rate: ~1 in 10⁵ (10⁻⁵)

Layer 2: PROOFREADING by ε (3'→5' exonuclease)
────────────────────────────────────────────────
- After incorrect nucleotide incorporation:
  - Polymerase stalls (mismatch distorts geometry)
  - DNA transfers from polymerase site to exonuclease site
  - Incorrect nucleotide excised (3'→5')
  - Correct nucleotide incorporated
- Error rate: improves to ~1 in 10⁷ (10⁻⁷)

Layer 3: POST-REPLICATIVE MISMATCH REPAIR (MMR)
────────────────────────────────────────────────
- MutS: recognizes mismatches and small insertion/deletion loops
- MutL: coordinates repair
- MutH: nicks the unmethylated (new) strand
- Exonuclease removes incorrect nucleotide from new strand
- Pol III resynthesizes
- Final error rate: ~1 in 10⁹–10¹⁰ (10⁻⁹ to 10⁻¹⁰)
```

### Strand Discrimination in MMR

How does MutH know which strand is new?

**Methylation-based discrimination in E. coli:**
- Dam methylase methylates adenine in GATC sequences
- Immediately after replication, the parental strand is methylated but the new strand is **not yet methylated** (hemimethylated state)
- MutH specifically nicks the **unmethylated** strand → ensures only the new strand is repaired

> **Note**: In eukaryotes, strand discrimination in mismatch repair is thought to involve strand breaks (nicks) rather than methylation.

---

## 16. Replication Speed and Processivity

### Speed

| Parameter | Value |
|-----------|-------|
| Fork speed | ~1,000 nt/second |
| Replication time | ~40 minutes |
| Total nucleotides per fork | ~2.3 × 10⁶ |
| dNTP consumption | ~2,000 nt/second (both forks combined) |

### Processivity

| Without β clamp | With β clamp |
|-----------------|-------------|
| 10–20 nt | >50,000 nt |
| Pol III falls off easily | Pol III stays on for long stretches |

### dNTP Pool

- *E. coli* maintains a balanced pool of all four dNTPs
- Imbalanced dNTP pools increase mutation rates
- Ribonucleotide reductase (RNR) converts NDPs → dNDPs
- Nucleoside diphosphate kinase converts dNDPs → dNTPs

---

## 17. Special Topics in Prokaryotic Replication

### Replication Coupled to Cell Division

In rapidly growing *E. coli* (doubling time < 40 min):
- A new round of replication initiates before the previous round finishes
- **Multiple replication forks** are present simultaneously
- **Nested replication forks**: Up to 4 forks can be active
- This allows generation times shorter than replication time

```
RAPID GROWTH — MULTIPLE ROUNDS
═══════════════════════════════

Generation time: 20 min
Replication time: 40 min

Solution: Initiate new rounds before previous rounds finish

Time 0:   ← Fork 1     oriC     Fork 2 →
Time 10:  ← Fork 1    ╱    ╲    Fork 2 →
                    ← F3    F4 →
Time 20: Cell divides!
          Each daughter has partially replicated chromosome
          + new initiation at oriC
```

### Archaeal Replication (Brief Comparison)

Archaea share more similarities with eukaryotes than with bacteria:

| Feature | Bacteria | Archaea | Eukaryotes |
|---------|----------|---------|------------|
| Origin | oriC | Multiple (similar to ORC) | Multiple ORIs |
| Initiator | DnaA | Orc1/Cdc6 | ORC complex |
| Helicase | DnaB (3'→5') | MCM (5'→3') | MCM2-7 (5'→3') |
| Clamp | β (dimer) | PCNA (trimer) | PCNA (trimer) |
| Polymerase | Pol III | PolB/PolD | Pol α, δ, ε |

> Archaeal replication machinery is remarkably similar to eukaryotic, reflecting their shared evolutionary ancestry (both are in the supergroup Asgard/OPh group, or share common ancestry as prokaryotic/eukaryotic split).

---

## Complete E. coli Replication Workflow

```
E. coli DNA REPLICATION — COMPLETE WORKFLOW
══════════════════════════════════════════════

INITIATION
│
├→ DnaA-ATP accumulates in the cell
├→ DnaA binds DnaA boxes in oriC (9-mer repeats)
├→ Cooperative binding + DNA wrapping
├→ AT-rich 13-mer region melts (open complex)
├→ DnaC loads DnaB helicase onto each strand
├→ DnaC dissociates (ATP-dependent)
├→ Two DnaB hexamers move in opposite directions
│
PRIMING
│
├→ DnaG primase interacts with DnaB
├→ DnaG synthesizes RNA primer (10-12 nt)
├→ Leading strand: one primer per fork
├→ Lagging strand: new primer every 1,000-2,000 nt
│
ELONGATION
│
├→ Clamp loader loads β sliding clamp at each primer
├→ Pol III core binds β clamp → processive complex
├→ LEADING STRAND:
│   ├→ Pol III extends primer continuously (5'→3')
│   ├→ Follows helicase
│   └→ No discontinuities
│
├→ LAGGING STRAND:
│   ├→ Pol III synthesizes Okazaki fragments (1-2 kb)
│   ├→ Each fragment made 5'→3' (away from fork)
│   ├→ Pol III cycles to new primer when it reaches previous fragment
│   └→ "Trombone model" — lagging template loops
│
├→ PROOFREADING: ε subunit excises misincorporated bases
│
PRIMER REMOVAL
│
├→ Pol I uses 5'→3' exonuclease to remove RNA primers
├→ Pol I simultaneously fills gaps with DNA (nick translation)
├→ Gap is filled completely with DNA
│
LIGATION
│
├→ DNA ligase (NAD⁺) seals nicks between Okazaki fragments
├→ Creates continuous lagging strand
│
TERMINATION
│
├→ Forks converge in Ter region
├→ Tus-Ter system traps forks
├→ Replisomes disassemble
├→ Catenanes (interlinked daughter chromosomes) form
├→ Topoisomerase IV decatenates daughter chromosomes
│
QUALITY CONTROL
│
├→ Proofreading (ε exonuclease) during synthesis
├→ Mismatch repair (MutS/L/H) after replication
├→ Strand discrimination via Dam methylation
│
COMPLETE: Two identical daughter chromosomes
```

---

## Quick Check

1. What is the role of DnaA in initiation? What happens when DnaA cannot bind ATP?
2. Why is the 13-mer region of oriC AT-rich? What would happen if it were GC-rich?
3. A mutation in the ε subunit (dnaQ) eliminates proofreading. What would be the effect on mutation rate?
4. Explain why the β sliding clamp is essential for rapid replication but not for short DNA synthesis.
5. How does the Tus/Ter system ensure termination occurs in the correct region?
6. If DNA ligase is inactivated in *E. coli*, what would you observe?
7. Compare the roles of DnaB and DNA gyrase. Why are both necessary?

---

**← [Previous: Core Concepts](02-Core-Concepts.md) | [Next: Eukaryotic Replication →](04-Eukaryotic-DNA-Replication.md)**

*Related Lab: [Lab 04 — PCR and DNA Amplification](../LAB/Lab-04-PCR-and-DNA-Amplification.md) | [Lab 05 — Replication Data Analysis](../LAB/Lab-05-Replication-Data-Analysis.md)*
*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Long Questions](../ASSESSMENT/Long-Questions.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
*See also: [Cheat Sheet](../CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md) | [FAQ](../FAQ/DNA-Replication-FAQs.md)*
