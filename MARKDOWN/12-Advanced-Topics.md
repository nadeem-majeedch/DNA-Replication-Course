# Module 12: Advanced Topics in DNA Replication

**← [Previous: Clinical Applications](11-Clinical-and-Biotechnology-Applications.md) | [Course Home →](../README.md)**

---

## Learning Objectives

1. Describe replication fork dynamics in detail
2. Explain fork stalling, reversal, and restart mechanisms
3. Describe replication-transcription conflicts and R-loops
4. Explain the ATR-CHK1 pathway in detail
5. Understand translesion synthesis and template switching
6. Explain common fragile sites and their role in cancer
7. Describe alternative lengthening of telomeres (ALT)
8. Understand genome instability mechanisms

---

## 1. Replication Fork Dynamics

### Concept

The replication fork is not a static structure — it undergoes dynamic changes in composition, speed, and stability in response to cellular conditions.

### Fork Speed Regulation

| Condition | Effect on Fork Speed |
|-----------|---------------------|
| Normal conditions | 50 nt/s (human), 1000 nt/s (E. coli) |
| Low dNTPs | Slowed |
| Transcription-active regions | Slowed (conflicts) |
| Chromatin-dense regions | Slowed |
| DNA damage | Stalled |
| Replication stress | Stalled or reversed |

### Fork Protection Complex

The fork protection complex (FPC) maintains fork stability:
- **Timeless (Timestop)**: Fork-associated; recruits ATR
- **Claspin**: Mediator; bridges MCM-ATRIP
- **Mrc1/Claspin**: Stabilizes fork; promotes restart

---

## 2. Fork Stalling and Collapse

### Concept

When a replication fork encounters an obstacle (DNA damage, secondary structure, transcription complex), it can:
1. **Pause** (temporary, recoverable)
2. **Stall** (longer pause, may require checkpoint activation)
3. **Collapse** (fork breakage → double-strand break → genome instability)

### Fork Collapse

```
FORK COLLAPSE
═════════════

Intact stalled fork:
    3'═══════════→5' (lagging template)
    ←═══════════════ (new lagging)
    
    5'═══════════→3' (leading template)
    ←═════════════════ (new leading, stopped)
    
Collapsed fork (DSB):
    3'═══════════→5'
    ←═══════════════
                    ✗ DSB
    
    5'═══════════→3'
    
    → Requires HR for repair
    → Risk of chromosome rearrangement
```

### Fork Reversal (Regression)

```
FORK REVERSAL
═════════════

Reversed fork ("chicken foot"):
    3'═════════════════→5' (lagging template)
    ←═════════════════ (new lagging, annealed to leading)
                      │
    5'═════════════════→3' (leading template)
    ←═══════════════════ (new leading, annealed to lagging)
    
    → New strands anneal to each other
    → Creates a 4-way junction
    → Allows template switching or lesion bypass
    
Key enzymes for fork reversal:
- SMARCAL1 (SWI/SNF family translocase)
- ZRANB3 (Holliday junction resolvase-like)
- HLTF (SWI/SNF family)
- RAD51 (facilitates regression)
```

---

## 3. Replication-Transcription Conflicts

### Concept

DNA replication and transcription use the same DNA template. When a replication fork encounters an active transcription complex, they can collide, causing fork stalling, DNA damage, and genome instability.

### Types of Conflicts

```
REPLICATION-TRANSCRIPTION CONFLICTS
═══════════════════════════════════

HEAD-ON CONFLICT (most dangerous):
    ← Fork                    → RNA Pol
    ──────→──→──→──→──→──→──→──→──
    ←─←─←─←─←─←─←─←─←─←─←─←─←
    
    Fork and RNA polymerase move toward each other
    → Direct collision
    → Fork collapse likely
    → DSB formation

CO-TRANSCRIPTIONAL (less dangerous):
    → Fork              → RNA Pol
    ──────→──→──→──→──→──→──→──→──
    ←─←─←─←─←─←─←─←─←─←─←─←─←
    
    Fork catches up to RNA polymerase from behind
    → Fork may push RNA polymerase off
    → Less likely to cause breakage
```

### R-Loops

**R-loops** are three-stranded structures formed when RNA hybridizes to the template DNA strand, displacing the non-template strand.

```
R-LOOP STRUCTURE
════════════════

Normal DNA:
    5'─═══════════════3' (template)
    3'─═══════════════5' (non-template)

R-loop:
    5'─═════RNA═══════3' (template hybridized with RNA)
    3'─═══════════════5' (displaced non-template → ssDNA)
                    ↑
               R-loop
               
Features:
- RNA:DNA hybrid: ~100-300 bp typically
- Displaced ssDNA: prone to damage
- Can block replication forks
- Common at highly transcribed genes
- Regulated by RNase H1/H2 (degrade RNA in R-loops)
```

### R-Loop Regulation

| Factor | Function |
|--------|----------|
| **RNase H1/H2** | Degrade RNA in R-loops |
| **Senataxin** | RNA/DNA helicase; resolves R-loops |
| **SETX (Senataxin)** | Helicase activity |
| **Topoisomerase I** | Relieves torsional stress that promotes R-loops |
| **ASF1** | Histone chaperone; prevents R-loop formation |
| **BRCA1** | Facilitates R-loop resolution |

---

## 4. Translesion Synthesis (TLS)

### Concept

**Translesion synthesis** is a DNA damage tolerance mechanism where specialized low-fidelity polymerases bypass replication-blocking lesions, allowing fork progression at the cost of increased mutagenesis.

### TLS Polymerases in Humans

| Polymerase | Specialization | Error Rate |
|-----------|----------------|------------|
| **Pol η** | Bypasses UV pyrimidine dimers (T-T CPDs) | Low for CPDs |
| **Pol ι** | Bypasses UV lesions, some oxidized bases | Moderate |
| **Pol κ** | Bypasses bulky adducts | Moderate |
| **Rev1** | dCMP transferase; scaffolding | High |
| **Pol ζ** | Extension from mismatched primer termini | High |

### TLS Mechanism

```
TRANSLESION SYNTHESIS
═════════════════════

Normal replication:
    → Pol ε/δ encounters lesion
    → Polymerase stalls (can't bypass)
    
TLS switching:
    1. PCNA is mono-ubiquitylated (K164)
    2. Ubiquitylated PCNA recruits TLS polymerase
    3. TLS polymerase replaces Pol ε/δ at primer terminus
    4. TLS polymerase incorporates 1-2 nucleotides opposite lesion
    5. TLS polymerase dissociates
    6. Pol ε/δ resumes replication (with PCNA de-ubiquitylated)
    
Result: Lesion bypassed (at cost of potential mutation)
        Fork progresses (genome integrity maintained)
```

### Template Switching vs. TLS

| Feature | Template Switching | Translesion Synthesis |
|---------|-------------------|----------------------|
| Fidelity | Error-free | Error-prone |
| Template | Sister chromatid | Lesion-containing strand |
| Polymerase | Pol ε/δ (same as replication) | Specialized TLS polymerases |
| PCNA modification | Poly-ubiquitylation (K63) | Mono-ubiquitylation (K164) |
| Outcome | No mutation | Potential mutation |

---

## 5. Homologous Recombination During Replication

### Concept

Homologous recombination (HR) is essential for repairing replication-associated DNA breaks and restarting collapsed replication forks.

### HR at Collapsed Forks

```
HR AT COLLAPSED FORK
════════════════════

Step 1: Collapsed fork generates DSB
        → 5' end resection by MRN complex + CtIP
        
Step 2: 3' ssDNA overhang generated
        → RPA binds
        
Step 3: RAD51 replaces RPA (with BRCA2 assistance)
        → RAD51 nucleoprotein filament forms
        
Step 4: Strand invasion of sister chromatid
        → D-loop formation
        
Step 5: DNA synthesis using sister chromatid as template
        
Step 6: Resolution/dissolution of recombination intermediates
        
Step 7: Fork restart
```

### BRCA1/2 in Replication

| Protein | Function |
|---------|----------|
| **BRCA1** | Facilitates end resection; recruits repair factors |
| **BRCA2** | Loads RAD51 onto ssDNA |
| **PALB2** | Bridges BRCA1 and BRCA2 |

> BRCA1/2 mutations → defective HR → genome instability → cancer predisposition (breast, ovarian)

---

## 6. Common Fragile Sites (CFS)

### Concept

Common fragile sites are specific genomic regions prone to breakage under replication stress. They are large, gene-rich regions that are difficult to replicate.

### Why They Break

1. **Large genes**: Some CFS genes are >2 Mb long
2. **Late replication**: Despite having early origins, some regions replicate late
3. **Transcription-replication conflicts**: Highly transcribed genes
4. **Difficult-to-replicate sequences**: AT-rich, prone to secondary structures
5. **Origin paucity**: Few origins in large regions

### CFS in Cancer

| CFS | Gene | Cancer Association |
|-----|------|-------------------|
| FRA3B | FHIT | Lung, breast, gastric |
| FRA16D | WWOX | Breast, ovarian, leukemia |
| FRA6E | PARK2 | Colorectal, ovarian |
| FRA7H | Various | Multiple cancers |

### CFS Expression

```
COMMON FRAGILE SITE EXPRESSION
══════════════════════════════

Normal conditions:
    → CFS are intact (rarely break)
    → Adequate time for replication

Mild replication stress (low aphidicolin):
    → CFS show gaps/breaks in metaphase chromosomes
    → Large genes haven't finished replicating
    → Indicates regions prone to breakage

Severe replication stress:
    → CFS break frequently
    → Chromosome rearrangements at CFS
    → → Cancer development
```

---

## 7. Oncogene-Induced Replication Stress — Detailed

### Mechanisms of Oncogene-Induced Stress

| Oncogene | Mechanism of Stress |
|----------|-------------------|
| **Ras** | Aberrant origin firing, increased RNR, S-phase entry |
| **Myc** | Aberrant origin firing, increased transcription, replication-transcription conflicts |
| **Cyclin E** | Premature S-phase entry, incomplete licensing |
| **E2F** | Premature origin firing |
| **Cdc25A** | Premature CDK activation, origin firing |
| **BRCA1 loss** | Defective fork protection |

### Genome Instability Cascade

```
ONCOGENE ACTIVATION → REPLICATION STRESS → GENOME INSTABILITY
═══════════════════════════════════════════════════════════════

Oncogene (e.g., Ras) activated
    ↓
Excessive origin firing
    ↓
Dormant origins activated (should be silent)
    ↓
Fork collisions (forks converge inappropriately)
    ↓
Reversed/collapsed forks
    ↓
Double-strand breaks
    ↓
If checkpoint intact → cell death or senescence
    ↓ (p53 loss)
Checkpoint adaptation
    ↓
Cell survives with damaged genome
    ↓
Chromosomal rearrangements accumulate
    ↓
Cancer progression
```

---

## 8. Genome Instability Mechanisms

### Types of Genome Instability

| Type | Mechanism | Consequence |
|------|-----------|-------------|
| **Point mutations** | Replication errors, TLS | Amino acid changes |
| **Insertions/Deletions** | Replication slippage | Frameshifts, repeat changes |
| **Copy number variations** | Re-replication, NHR | Gene amplification/deletion |
| **Translocations** | NHR between different chromosomes | Oncogene activation |
| **Chromosomal instability** | Defective mitosis, breakage | Aneuploidy |
| **Microsatellite instability** | MMR deficiency | Frameshift mutations |

### Repeat Instability

| Repeat Type | Disease | Mechanism |
|-------------|---------|-----------|
| Trinucleotide (CAG) | Huntington disease | Replication slippage → expansion |
| Trinucleotide (CGG) | Fragile X syndrome | Replication slippage → expansion |
| Trinucleotide (CTG) | Myotonic dystrophy | Replication slippage → expansion |
| Trinucleotide (GAA) | Friedreich ataxia | Replication slippage → expansion |

---

## 9. Alternative Lengthening of Telomeres (ALT)

### Concept

ALT is a telomerase-independent mechanism for telomere maintenance that uses homologous recombination between telomeric sequences.

### ALT Mechanism

```
ALT MECHANISM
═════════════

Step 1: Telomeric DSB or stall
        → Break in telomeric repeat region
        
Step 2: Resection
        → 3' overhang generated
        
Step 3: Strand invasion
        → 3' overhang invades another telomere (sister or homolog)
        → Uses other telomere as template
        
Step 4: DNA synthesis
        → Extends telomere using homologous telomere as template
        
Step 5: Resolution
        → Recombination intermediates resolved
        → Extended telomere
        
Features of ALT:
- Highly heterogeneous telomere lengths (2-50 kb)
- ALT-associated PML bodies (APBs)
- C-circles (partially single-stranded circular telomeric DNA)
- Homologous recombination dependent
```

### ALT Markers

| Marker | Detection Method |
|--------|-----------------|
| **APBs** | FISH for telomeric DNA + PML immunofluorescence |
| **C-circles** | C-circle assay (rolling circle amplification) |
| **Telomere length heterogeneity** | TRF Southern blot |
| **ALT-associated recombination** | Telomere-specific FISH |

---

## 10. Replication Licensing Defects

### Concept

Defective licensing control can lead to:
- **Re-replication**: Origins fire more than once → gene amplification
- **Under-replication**: Not enough origins fire → incomplete replication

### Re-replication Consequences

```
RE-REPLICATION
══════════════

Normal: One round per cell cycle
    Origin fires → complete replication → done
    
Re-replication (licensing defect):
    Origin fires → partial replication → re-licenses → fires again
    ↓
Gene amplification
    ↓
Oncogene activation
    ↓
Cancer
```

### Genes That Prevent Re-replication

| Gene | Function | Cancer Association |
|------|----------|-------------------|
| **Geminin** | Inhibits Cdt1 | Lost in some cancers |
| **CDK** (multiple) | Phosphorylate replication factors | Dysregulated in cancer |
| **APC/C** | Degrades geminin, CDC20 | Mutated in some cancers |
| **Cdt1** | MCM loader (must be inhibited in S) | Overexpressed in some cancers |

---

## Quick Check

1. Explain why replication-transcription conflicts are particularly problematic at highly transcribed genes.
2. Describe how translesion synthesis contributes to both cell survival and mutagenesis.
3. How does fork reversal differ from fork collapse? Which is more dangerous?
4. Explain the relationship between BRCA1/2 mutations, homologous recombination, and PARP inhibitor sensitivity.
5. What molecular features distinguish ALT-positive from telomerase-positive cancers?

---

**← [Previous: Clinical Applications](11-Clinical-and-Biotechnology-Applications.md) | [Course Home →](../README.md)**

*Related Assessment: [Long Questions](../ASSESSMENT/Long-Questions.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
*See also: [FAQ](../FAQ/DNA-Replication-FAQs.md) | [Cheat Sheet](../CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md)*
