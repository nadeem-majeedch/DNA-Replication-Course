# Module 09: Experimental Methods

**← [Previous: Comparison](08-Prokaryote-vs-Eukaryote.md) | [Next: Data Analysis →](10-Data-Analysis-and-Interpretation.md)**

---

## Learning Objectives

1. Describe major experimental approaches to study DNA replication
2. Understand in vitro reconstitution of replication
3. Explain how replication origins are mapped
4. Describe fiber labeling and DNA combing
5. Understand the uses and limitations of each technique

---

## 1. In Vitro Replication Systems

### Concept

**In vitro reconstitution** involves purifying all necessary replication proteins and combining them with DNA template to study replication mechanisms in a test tube.

### E. coli In Vitro System

The complete E. coli replication machinery has been reconstituted from purified components:

| Component | Source |
|-----------|--------|
| DnaB helicase | Overexpressed, purified |
| DnaG primase | Overexpressed, purified |
| Pol III holoenzyme | Overexpressed, purified |
| SSB protein | Overexpressed, purified |
| β sliding clamp | Overexpressed, purified |
| γ complex | Overexpressed, purified |
| Gyrase | Overexpressed, purified |
| oriC plasmid | Cloned |

### Experiments Possible

1. **Origination**: Show that replication initiates at oriC
2. **Bidirectionality**: Demonstrate two forks from a single origin
3. **Processivity**: Measure polymerase processivity with/without β clamp
4. **Fidelity**: Measure error rates under different conditions
5. **Kinetics**: Measure fork speed, dNTP incorporation rates

---

## 2. 2D Gel Electrophoresis (BrdU/BrdC Labeling)

### Principle

Bromodeoxyuridine (BrdU) is a thymidine analog that is incorporated into DNA during replication. It allows detection and analysis of replicating DNA.

### Applications

- **Pulse labeling**: Short BrdU pulses label replicating DNA
- **Density gradient separation**: BrdU-containing DNA is heavier
- **Immunodetection**: Anti-BrdU antibodies detect labeled DNA

---

## 3. DNA Fiber Analysis

### Concept

DNA fiber analysis is a powerful technique for measuring replication fork dynamics at single-molecule resolution.

### DNA Combing

```
DNA COMBING TECHNIQUE
═════════════════════

Step 1: Label cells with nucleotide analogs
        → IdU (iododeoxyuridine) — pulse 1
        → CldU (chlorodeoxyuridine) — pulse 2
        
Step 2: Extract genomic DNA
        → Gently extract high-molecular-weight DNA
        
Step 3: Mount on glass coverslips
        → DNA molecules attach to silanized glass
        
Step 4: Stretch DNA by combing
        → Pulling force straightens DNA molecules
        → ~2-3 kb/μm stretching ratio
        
Step 5: Immunostaining
        → Anti-BrdU antibody (different clones for IdU vs CldU)
        → Red signal = IdU (pulse 1)
        → Green signal = CldU (pulse 2)
        
Step 6: Analyze fiber patterns
        → Measure track lengths = fork speed
        → Count tracks = origin usage
        → Analyze fork asymmetry
```

### DNA Fiber Interpretation

```
FIBER PATTERNS
══════════════

REPLICATION BUBBLE:
    ────────────────────────────────
    │         ╭─────╮              │
    │        ╱ IdU   ╲ CldU       │
    │       ╱─────────╲           │
    │      ╱           ╲          │
    ────────────────────────────────
    → Origin fired between pulses

TWO FORKS (bidirectional):
    ─────────────────────────────
    CldU ← IdU → → IdU ← CldU
    ─────────────────────────────
    → Two forks moving in opposite directions

FORK COLLISION:
    ─────────────────────────────
    CldU ← IdU → IdU ← CldU
    ─────────────────────────────
    → Forks converged

DORMANT ORIGIN:
    ─────────────────────────────
    CldU ← IdU →    ← IdU CldU
    ─────────────────────────────
    → One fork fired, other dormant
```

---

## 4. Okazaki Fragment Analysis

### Method

Analyze Okazaki fragments by:
1. Labeling nascent DNA with [α-³²P]dNTPs
2. Denaturing alkaline gel electrophoresis
3. Visualizing short nascent DNA fragments

### Expected Results

```
ALKALINE GEL — OKAZAKI FRAGMENTS
═════════════════════════════════

Lane:     M   1   2   3   4
          
          ┃   ┃   ┃   ┃   ┃
          ┃   ┃   ┃   ┃   ┃
          ┃   ║   ║   ┃   ┃
          ┃   ║   ║   ┃   ╃  ← High MW
          ┃   ║   ║   ║   ┃
          ┃   ║   ║   ║   ║
          ┃   ║   ║   ║   ║
          ┃   ║   ║   ║   ║  ← ~1-2 kb (E. coli)
          ┃   ║   ║   ║   ┃
          ┃   ║   ║   ║   ┃
          ┃   ╃   ║   ╃   ┃
          ┃   ┃   ║   ┃   ┃
          ┃   ┃   ┃   ┃   ┃
          ┃   ┃   ┃   ┃   ┃  ← ~100-200 nt (eukaryotes)
          ┃   ┃   ┃   ┃   ┃
          
M = size markers
1 = Wild type (normal fragment size)
2 = Ligase mutant (fragments persist)
3 = Pol I mutant (fragments accumulate)
4 = Small fragments (eukaryote sample)
```

---

## 5. Replication Origin Mapping

### Methods for Origin Identification

| Method | Resolution | Genome-wide? | Principle |
|--------|------------|--------------|-----------|
| **ARS analysis (yeast)** | Sequence-level | No | Clone fragments, test autonomous replication |
| **Replication bubble mapping** | ~1-2 kb | Yes | 2D gel electrophoresis |
| **Origin mapping by microarray** | ~1 kb | Yes | Nascent strand abundance |
| **Repli-seq** | ~100 bp | Yes | FACS + sequencing of early/late replicating DNA |
| **Okazaki fragment sequencing** | ~100 bp | Yes | Sequence Okazaki fragments to map origins |
| **STN-seq** | ~50 bp | Yes | Strande-specific Okazaki fragment sequencing |

### Repli-seq (Replication Timing Sequencing)

```
REPLI-SEQ WORKFLOW
══════════════════

1. Pulse-label cells with BrdU
2. Synchronize or sort cells by DNA content
3. FACS-sort early-S vs. late-S cells
4. Isolate BrdU-labeled (replicating) DNA
5. Sequence
6. Map peaks → early origins
7. Map valleys → late origins

Result: Genome-wide replication timing profile
```

---

## 6. Chromatin Immunoprecipitation (ChIP) for Replication

### Applications

| Target | ChIP Application |
|--------|-----------------|
| ORC subunits | Map origin binding sites |
| MCM2-7 | Map licensed origins |
| PCNA | Map active replication forks |
| Pol ε / Pol δ | Map active polymerases |
| Cdc45 | Map active CMG helicases |
| Histone modifications | Map replication timing domains |

---

## 7. Fluorescence Microscopy

### Applications

| Technique | Use |
|-----------|-----|
| **GFP-tagged replication proteins** | Visualize replication factories in live cells |
| **Replication foci** | Count and locate active replication sites |
| **FRAP** | Measure protein dynamics at replication forks |
| **FISH** | Map specific sequences relative to replication timing |
| **STORM/PALM** | Super-resolution imaging of replication factories |

### Replication Foci

```
REPLICATION FOCI IN S-PHASE NUCLEI
══════════════════════════════════

Early S phase:
    ┌────────────────────┐
    │  •    •    •    •  │   Small, numerous foci
    │    •    •    •     │   (euchromatin replication)
    │  •    •    •    •  │
    └────────────────────┘
    
Mid S phase:
    ┌────────────────────┐
    │  ••  •••  ••  ••  │   Intermediate foci
    │  •••  ••  •••  ••  │   (transitioning)
    │  ••  •••  ••  ••  │
    └────────────────────┘
    
Late S phase:
    ┌────────────────────┐
    │  ■■■      ■■■     │   Few large foci
    │      ■■■■         │   (heterochromatin, centromeres)
    │  ■■■      ■■■     │
    └────────────────────┘
```

---

## 8. CRISPR/Cas9 Approaches

### Applications

| Approach | Use |
|----------|-----|
| **Origin deletion** | Remove specific origins → study consequences |
| **Origin replacement** | Swap origins between locations |
| **Protein tagging** | Endogenous tagging of replication proteins |
| **Gene knockout** | Knock out replication genes (essential genes: use depletion) |
| **Base editing** | Introduce specific mutations in replication genes |

---

## Quick Check

1. What are the advantages and limitations of in vitro reconstitution vs. in vivo studies of replication?
2. How would you use DNA fiber analysis to determine if a drug slows replication fork speed?
3. Design an experiment to determine whether a specific protein is required for replication initiation vs. elongation.
4. Explain how Repli-seq can be used to map genome-wide replication timing.
5. How does ChIP-seq for MCM2-7 differ from ChIP-seq for PCNA in terms of what they tell you about replication?

---

**← [Previous: Comparison](08-Prokaryote-vs-Eukaryote.md) | [Next: Data Analysis →](10-Data-Analysis-and-Interpretation.md)**

*Related Lab: [Lab 05 — Replication Data Analysis](../LAB/Lab-05-Replication-Data-Analysis.md)*
*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Short Questions](../ASSESSMENT/Short-Questions.md)*
