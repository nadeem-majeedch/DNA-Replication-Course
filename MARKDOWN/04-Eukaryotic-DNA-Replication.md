# Module 04: Eukaryotic DNA Replication

**← [Previous: Prokaryotic Replication](03-Prokaryotic-DNA-Replication.md) | [Next: Replication Fidelity →](05-Replication-Fidelity-and-Repair.md)**

---

## Learning Objectives

1. Describe the features of eukaryotic genomes relevant to replication
2. Explain the concept of replication licensing and how it prevents re-replication
3. Describe the roles of ORC, Cdc6, Cdt1, and MCM2-7
4. Explain the activation of the CMG helicase
5. Describe the functions of Pol α, Pol δ, and Pol ε
6. Explain the eukaryotic replisome and polymerase switching
7. Describe Okazaki fragment processing in eukaryotes
8. Explain chromatin remodeling during replication
9. Describe the end-replication problem and telomere biology
10. Explain S-phase regulation and replication checkpoints

---

## Overview: Eukaryotic Replication Complexity

### Key Differences from Prokaryotes

| Feature | E. coli | Human |
|---------|---------|-------|
| Genome size | 4.6 × 10⁶ bp | 3.2 × 10⁹ bp |
| Chromosome | 1 (circular) | 46 (linear) |
| Origins | 1 (oriC) | 30,000–50,000 |
| Replication time | 40 min | 6–8 hours (S phase) |
| Fork speed | 1,000 nt/s | ~50 nt/s |
| Okazaki fragments | 1,000–2,000 nt | 100–200 nt |
| Chromatin | No (nucleoid) | Yes (nucleosomes) |
| Telomeres | Not needed | Required |

### Why Eukaryotic Replication is Different

1. **Genome size**: 3.2 × 10⁹ bp would take ~53 hours to replicate from a single origin at 50 nt/s → multiple origins solve this
2. **Linear chromosomes**: Create end-replication problem → telomeres and telomerase
3. **Chromatin**: DNA is packaged into nucleosomes → must disassemble and reassemble during replication
4. **Cell-cycle regulation**: Must ensure each origin fires once per cell cycle → licensing system
5. **Multiple polymerases**: Different polymerases for different tasks → polymerase switching

---

## 1. Replication Licensing

### Concept

**Replication licensing** is the mechanism that ensures each origin of replication fires **exactly once** per cell cycle. This prevents re-replication, which would cause gene amplification and genome instability.

### Why It Matters

Re-replication can lead to:
- Gene amplification
- DNA damage (recombination between repeated sequences)
- Chromosome breaks
- Cell death or cancer

### The Two-Step Model

```
REPLICATION LICENSING
═════════════════════

G1 PHASE: LICENSING (assembly of pre-replication complex)
───────────────────────────────────────────────────────
    Origin → ORC binds → Cdc6 + Cdt1 recruit → MCM2-7 loaded
    Origin is "licensed" (ready to fire)
    
    ✓ Multiple MCM2-7 complexes loaded per origin (bimolecular)
    ✓ Each origin loaded with 2 MCM helicases (one per fork)
    ✓ Origin is NOW competent to initiate replication
    
S PHASE: ACTIVATION (firing of licensed origins)
───────────────────────────────────────────────
    CDK + DDK phosphorylate MCM and other factors
    → Cdc45 and GINS loaded → CMG helicase forms
    → Origin fires → replication begins
    → ORC is displaced
    → Cdc6 is degraded
    → Cdt1 is degraded/inhibited
    
    ✗ Cannot re-license in S phase (CDK prevents new MCM loading)
    
G2/M PHASE: LICENSING CANNOT OCCUR
─────────────────────────────────
    High CDK activity prevents new pre-RC assembly
    → No re-replication
```

### Key Rule

> **CDK activity switches the system between licensing (low CDK → G1) and firing (high CDK → S/G2/M).** This mutual exclusivity ensures no origin fires twice.

---

## 2. Origin Recognition Complex (ORC)

### Concept

ORC is a six-subunit (Orc1-6) ATPase complex that serves as the landing pad for replication initiation factors at origins of replication.

### Why It Matters

ORC is the **first protein** to bind at replication origins — it marks where replication will begin and recruits all subsequent factors.

### Function

| Property | Details |
|----------|---------|
| Subunits | Orc1-6 (AAA+ ATPase family) |
| ATP binding | Required for origin binding |
| ATP hydrolysis | Required for MCM loading |
| Conservation | Highly conserved from yeast to humans |
| Binding preference | More sequence-dependent in yeast (ARS consensus); less defined in metazoans |

### Mechanism

1. ORC binds origin DNA (ATP-dependent)
2. ORC recruits Cdc6 (ATPase, loads with ORC)
3. ORC-Cdc6 complex recruits Cdt1
4. Cdt1 delivers MCM2-7 double hexamer
5. ORC-Cdc6 hydrolyze ATP → MCM released from loader
6. Origin is licensed

### Human vs. Yeast ORC

| Feature | Yeast (S. cerevisiae) | Human |
|---------|----------------------|-------|
| Origin definition | Strict ARS consensus sequence (ACS) | Loose; chromatin-dependent |
| ORC binding | Sequence-specific | Less sequence-specific |
| Origin efficiency | High, predictable | Variable, context-dependent |
| ORC subunits | Orc1-6 | Orc1-6 |
| Licensing in G1 | Yes | Yes (with some differences) |

---

## 3. Cdc6 and Cdt1

### Cdc6

**Cdc6** (Cell division cycle 6) is an AAA+ ATPase that works with ORC to load MCM2-7 helicases.

| Function | Details |
|----------|---------|
| Binds ORC | Forms ORC-Cdc6 complex |
| ATP binding | Required for MCM loading |
| ATP hydrolysis | Releases MCM after loading |
| Regulation | Degradered in S phase by SCF ubiquitin ligase |
| Gene name | CDC6 (conserved) |

### Cdt1

**Cdt1** (Chromatin licensing and DNA replication factor 1) is the direct MCM loader.

| Function | Details |
|----------|---------|
| Binds MCM2-7 | Directly interacts with MCM |
| Delivers MCM | Bridges ORC-Cdc6 to MCM2-7 |
| Regulation | Inhibited by geminin in S/G2/M |
| Gene name | CDT1 (conserved) |

### Cdt1 Inhibition — The Geminin Pathway

```
GEMININ REGULATION OF LICENSING
═══════════════════════════════

G1 PHASE:
    Cdt1 active → MCM loaded → Origin licensed
    
S PHASE:
    Geminin accumulates (produced after licensing)
    Geminin binds Cdt1 → inhibits MCM loading
    Cdc6 degraded by SCF
    → No new licensing possible
    
M PHASE → G1:
    Geminin degraded by APC/C (anaphase-promoting complex)
    → Cdt1 released → can license new origins in next G1
```

---

## 4. MCM2-7 Helicase

### Concept

MCM2-7 (Minichromosome Maintenance 2-7) is the replicative helicase in eukaryotes. It is loaded as an inactive double hexamer at origins and activated during S phase to unwind DNA.

### Why It Matters

MCM2-7 is the **engine** of the eukaryotic replisome — it provides the unwinding activity that drives fork progression. Understanding MCM is essential for understanding eukaryotic replication.

### Structure

```
MCM2-7 DOUBLE HEXAMER (at licensed origin)
══════════════════════════════════════════

    ┌──────────────┐
    │  MCM2  MCM3  │
    │  MCM5  MCM4  │   Hexamer 1
    │  MCM7  MCM6  │
    └──────┬───────┘
           │ ← N-terminal faces
    ┌──────┴───────┐
    │  MCM2  MCM3  │
    │  MCM5  MCM4  │   Hexamer 2
    │  MCM7  MCM6  │
    └──────────────┘
    
- Loaded as double hexamer (head-to-head)
- Each hexamer encircles one strand of dsDNA
- Inactive until activated by CDK/DDK + Cdc45/GINS
- When activated → CMG helicase forms
```

### Properties

| Property | Value |
|----------|-------|
| Subunits | MCM2, MCM3, MCM4, MCM5, MCM6, MCM7 |
| ATPase | AAA+ family ATPase |
| Helicase direction | 5'→3' (on the lagging strand template) |
| Processivity | Very high (can unwind >10 kb) |
| Regulation | Inactive until phosphorylated by DDK + CDK |

---

## 5. CMG Helicase — Activation

### Concept

**CMG** (Cdc45-MCM-GINS) is the active replicative helicase in eukaryotes. It forms when Cdc45 and the GINS complex bind to the phosphorylated MCM2-7 hexamer.

### Formation of CMG

```
CMG ACTIVATION (S-phase)
═════════════════════════

Step 1: DDK (Dbf4-dependent kinase) phosphorylates MCM2-7
Step 2: CDK (Cyclin-dependent kinase) phosphorylates additional targets
Step 3: Cdc45 binds (one per MCM hexamer)
Step 4: GINS complex (Sld5-Psf1-Psf2-Psf3) binds
Step 5: CMG helicase = Cdc45 + MCM2-7 + GINS
Step 6: CMG is now active — begins unwinding

    Before: Inactive MCM double hexamer
    After: Two active CMG helicases (one per fork)
```

### Properties of CMG

| Property | Value |
|----------|-------|
| Components | Cdc45, MCM2-7, GINS |
| Helicase direction | 5'→3' on the leading strand template |
| Unwinding mechanism | Encircles lagging strand template, translocates 5'→3' |
| Processivity | Very high |
| Regulation | Requires CDK + DDK for activation |

### GINS Complex

**GINS** stands for Go-Ichi-Ni-San (5-1-2-3 in Japanese), referring to the subunit numbers:
- Sld5 (GINS5)
- Psf1 (GINS1)
- Psf2 (GINS2)
- Psf3 (GINS3)

---

## 6. Replication Factors A (RPA)

### Concept

**RPA** (Replication Protein A) is the eukaryotic single-strand binding protein. It binds and stabilizes single-stranded DNA at the replication fork.

### Why It Matters

RPA:
- Prevents ssDNA from forming secondary structures (hairpins, G-quadruplexes)
- Protects ssDNA from nucleolytic degradation
- Coordinates multiple replication and repair factors
- Essential for fork stability

### Properties

| Property | Value |
|----------|-------|
| Subunits | RPA1 (70 kDa), RPA2 (32 kDa), RPA3 (14 kDa) |
| DNA binding | RPA1 has 4 OB-fold DNA binding domains |
| Binding mode | Binds ssDNA cooperatively |
| Equivalent in bacteria | SSB (single-strand binding protein) |
| Additional roles | DNA repair, checkpoint signaling |

---

## 7. Eukaryotic DNA Polymerases

### Overview

Eukaryotes use **three major replicative polymerases** and several specialized polymerases:

| Polymerase | Function | Location | Size |
|-----------|----------|----------|------|
| **Pol α/primase** | Initiates synthesis; makes RNA-DNA primer | Nucleus | ~350 kDa |
| **Pol ε** | Leading strand synthesis | Nucleus | ~350 kDa |
| **Pol δ** | Lagging strand synthesis + repair | Nucleus | ~240 kDa |
| Pol β | Base excision repair | Nucleus | 39 kDa |
| Pol γ | Mitochondrial DNA replication | Mitochondria | ~200 kDa |
| Pol η, κ, ι, Rev1 | Translesion synthesis (error-prone) | Nucleus | Various |
| Pol ζ | Translesion synthesis (extension) | Nucleus | ~350 kDa |

### Pol α/Primase Complex

```
POL α/PRIMASE COMPLEX
══════════════════════

    ┌───────────────────────┐
    │   Primase             │
    │   (p48 + p58)         │ ← Synthesizes RNA primer (~8-12 nt)
    │        ↓              │
    │   Pol α (p180)        │ ← Extends primer with ~20 nt DNA
    │   + Pol α-B subunit   │
    └───────────────────────┘
    
- Makes RNA-DNA hybrid primer (primosome)
- RNA primer: ~8-12 nt
- DNA extension: ~20 nt  
- Total primer: ~20-30 nt
- Lacks 3'→5' exonuclease (NO proofreading)
- Initiates both leading and lagging strand synthesis
- Switched to Pol ε/δ after primer is made
```

### Pol ε — Leading Strand

| Property | Details |
|----------|---------|
| Function | Leading strand synthesis |
| Processivity | High (with PCNA) |
| Proofreading | Yes (3'→5' exonuclease) |
| Regulation | CDK phosphorylation activates |
| Proofreading mutant | Reduced fidelity → mutator phenotype |

### Pol δ — Lagging Strand

| Property | Details |
|----------|---------|
| Function | Lagging strand synthesis + repair |
| Processivity | High (with PCNA) |
| Proofreading | Yes (3'→5' exonuclease) |
| Regulation | Pol δ is distributive without PCNA |
| Additional role | Okazaki fragment extension after Pol α |

---

## 8. PCNA — Eukaryotic Sliding Clamp

### Concept

**PCNA** (Proliferating Cell Nuclear Antigen) is the eukaryotic sliding clamp. It is a **homotrimer** forming a ring structure that encircles DNA and tethers polymerases to the template.

### Comparison with Prokaryotic β Clamp

| Feature | β Clamp (E. coli) | PCNA (Eukaryotes) |
|---------|-------------------|-------------------|
| Structure | Homodimer | Homotrimer |
| Symmetry | 6-fold | 3-fold |
| Inner diameter | ~35 Å | ~35 Å |
| Outer diameter | ~80 Å | ~80 Å |
| Cofactor | — | — (loaded by RFC) |
| Recruitment of Pol | Via τ subunit | Direct interaction with Pol δ/ε |

### PCNA Interacting Proteins

PCNA interacts with many proteins via a **PCNA-interacting protein (PIP) motif**:
- DNA polymerases (Pol δ, Pol ε)
- FEN1 (Okazaki fragment processing)
- DNA ligase I
- CDK inhibitors (p21)
- Mismatch repair proteins
- Chromatin assembly factors (CAF-1)

---

## 9. RFC — Eukaryotic Clamp Loader

### Concept

**RFC** (Replication Factor C) is the eukaryotic clamp loader that loads PCNA onto primer-template junctions.

### Structure and Mechanism

| Subunit | Function |
|---------|----------|
| RFC1 (p145) | Large subunit; ATPase |
| RFC2 (p40) | Small subunit |
| RFC3 (p37) | Small subunit |
| RFC4 (p36) | Small subunit |
| RFC5 (p33) | Small subunit |

**Mechanism**:
1. RFC binds ATP → opens PCNA ring
2. RFC-PCNA complex binds primer-template junction
3. ATP hydrolysis → PCNA closes around DNA
4. RFC releases
5. DNA polymerase binds PCNA

---

## 10. Eukaryotic Replication Fork

### Complete Replisome

```
EUKARYOTIC REPLICATION FORK
═══════════════════════════

Direction of fork movement →

         CMG Helicase
    (Cdc45-MCM2-7-GINS)
         │
    ═════╪═══════════════════
    ← Unwinding →
         │
    ╱    │    ╲
   ╱     │     ╲
  ╱    RPA      ╲
 ╱   (ssDNA)     ╲
╱                  ╲

LEADING STRAND:
    5'─────────────→3' (template)
    ←3'═══════════════5' (new DNA)
         Pol ε + PCNA
         
LAGGING STRAND:
    3'═══════════════→5' (template)
    ←─Fragment 1─→←─Fragment 2─→
    [RNA+DNA]      [RNA+DNA]
         Pol α → Pol δ + PCNA
         
AFTER processing:
    RNase H + FEN1 → remove RNA
    Pol δ → fill gaps
    DNA Ligase I → seal nicks
    CAF-1 → reassemble nucleosomes
```

---

## 11. Polymerase Switching

### Concept

At each origin, synthesis is initiated by **Pol α/primase**, which makes an RNA-DNA primer. This is then replaced by a processive polymerase (**Pol ε** for leading strand, **Pol δ** for lagging strand). This transition is called **polymerase switching**.

### Step-by-Step Mechanism

```
POLYMERASE SWITCHING
═════════════════════

Step 1: Pol α/primase synthesizes RNA-DNA primer
        ~8-12 nt RNA + ~20 nt DNA
        
Step 2: RFC loads PCNA at the primer-template junction
        (PCNA encircles the primer-template)
        
Step 3: Pol ε (leading) or Pol δ (lagging) displaces Pol α
        - High processivity polymerase binds PCNA
        - Pol α dissociates
        
Step 4: Processive synthesis begins
        - Leading: Pol ε synthesizes continuously
        - Lagging: Pol δ synthesizes Okazaki fragments

Step 5: On lagging strand, when Pol δ reaches previous Okazaki fragment:
        - Pol δ displaces the RNA primer (creates flap)
        - FEN1 cuts the flap
        - Pol δ continues
```

### Why Polymerase Switching?

| Pol α/primase | Pol ε/δ |
|---------------|---------|
| Can start synthesis (has primase) | Cannot start synthesis |
| Low processivity | High processivity (with PCNA) |
| No proofreading | Has 3'→5' proofreading exonuclease |
| Error-prone | High fidelity |

> **Analogy**: Pol α is like a runner who starts a relay race (lays down the primer), then hands the baton to Pol ε/δ (the fast runner who completes the distance).

---

## 12. Okazaki Fragment Processing in Eukaryotes

### Mechanism

```
EUKEARYOTIC OKAZAKI FRAGMENT PROCESSING
════════════════════════════════════════

After Pol δ synthesis:
    
5'──[RNA primer]──[DNA Okazaki fragment]──3'  (fragment N+1)
3'────────────────────────────────────────5'  (template)
5'──[RNA primer]──[DNA Okazaki fragment]──3'  (fragment N)

Step 1: Pol δ encounters previous Okazaki fragment
        → Displaces some RNA as flap

Step 2: RNase H2 degrades most of the RNA primer
        → Leaves 1-2 ribonucleotides at junction

Step 3: FEN1 (Flap Endonuclease 1) removes:
        - Remaining ribonucleotides
        - Short DNA flaps displaced by Pol δ

Step 4: Pol δ fills the gap with DNA

Step 5: DNA Ligase I seals the nick

Result: Continuous DNA strand
```

### FEN1 — A Special Endonuclease

| Property | Details |
|----------|---------|
| Full name | Flap Endonuclease 1 |
| Activity | 5' flap endonuclease |
| Substrate | Displaced 5' flap structures |
| Mechanism | Cuts displaced flap, leaving 1 nt 5' overhang |
| Alternative | Dna2 helicase-nuclease can process longer flaps |
| Clinical | FEN1 mutations linked to cancer predisposition |

---

## 13. Chromatin Remodeling During Replication

### Concept

In eukaryotes, DNA is packaged into chromatin — a complex of DNA, histones, and other proteins. During replication, chromatin must be disassembled ahead of the fork and reassembled behind it.

### Why It Matters

- Nucleosomes block replication machinery → must be disassembled
- Parental histones carry epigenetic marks → must be recycled
- New histones must be deposited to fill gaps
- Failure in chromatin reassembly → epigenetic instability

### The Process

```
CHROMATIN DURING REPLICATION
═══════════════════════════

Ahead of fork:        At fork:           Behind fork:
Nucleosomes present   Nucleosomes        Nucleosomes
(H3-H4 tetramers,     displaced,         reassembled
H2A-H2B dimers)       chaperoned         with new + old
                      by FACT            histones

Key factors:
- FACT complex: Facilitates chromatin transcription
  (also facilitates replication through chromatin)
- CAF-1: Chromatin Assembly Factor 1
  (deposits new H3-H4 tetramers)
- ASF1: Anti-silencing function 1
  (histone chaperone for H3-H4)
- MCM2: Has histone chaperone activity
  (helps recycle parental histones)
```

### Histone Recycling

| Histone | Handling during replication |
|---------|---------------------------|
| H3-H4 tetramer | Split between daughter strands; old + new mixed |
| H2A-H2B dimer | More dynamic; largely recycled |
| Epigenetic marks | Parental marks serve as template for new marks |

### Replication Timing

```
REPLICATION TIMING DURING S PHASE
═════════════════════════════════

Early S phase (first 2-3 hours):
├→ Euchromatin (active genes)
├→ High gene density regions
├→ GC-rich regions
└→ Highly accessible chromatin

Late S phase (last 2-3 hours):
├→ Heterochromatin (silent regions)
├→ Centromeric/peri-centromeric heterochromatin
├→ Telomeric heterochromatin
├→ Late-replicating gene-poor regions
└→ Facultative heterochromatin (X-inactivated chromosome)

S phase total: ~6-8 hours in human cells
```

### Why Replication Timing Matters

1. **Gene expression**: Early replication correlates with active gene expression
2. **Epigenetic inheritance**: Late replication may facilitate epigenetic silencing
3. **Genome stability**: Late-replicating regions are more prone to rearrangements
4. **Development**: Replication timing programs change during differentiation

---

## 14. Licensing and Cell-Cycle Regulation

### CDK Regulation of Licensing

```
CDK ACTIVITY AND LICENSING
═══════════════════════════

G1 phase (low CDK activity):
    ✓ ORC can bind origins
    ✓ Cdc6 is stable
    ✓ Cdt1 is active
    ✓ MCM2-7 can be loaded
    → Licensing occurs
    
S phase (high CDK activity):
    ✗ CDK phosphorylates Cdc6 → degraded by SCF
    ✗ CDK + geminin inhibit Cdt1
    ✗ CDK phosphorylates ORC → reduced activity
    ✗ CDK phosphorylates MCM → promotes activation
    → No licensing, only firing
    
G2/M (high CDK):
    ✗ Same restrictions as S phase
    → No licensing
    
M → G1 transition:
    APC/C degrades geminin → Cdt1 released
    APC/C degrades CDK substrates
    → Licensing can resume in next G1
```

### Pre-Replication Complex (Pre-RC) Assembly

The pre-RC is the complete assembly at a licensed origin:

```
PRE-RC ASSEMBLY ORDER
═════════════════════

1. ORC binds origin DNA (ATP-dependent)
2. Cdc6 binds ORC (ATP-dependent)
3. Cdt1 binds MCM2-7 and delivers to ORC-Cdc6
4. MCM2-7 loaded onto DNA (ATP hydrolysis)
5. Additional MCM2-7 loaded (cooperative)
6. Double hexamer forms (2 MCM2-7 per origin)
7. Cdc6 released, Cdt1 released/inhibited
8. Origin is LICENSED

Total MCM2-7 per origin: 4-5 double hexamers (in metazoans)
= 8-10 MCM hexamers per origin
= ensures robust initiation
```

---

## 15. Eukaryotic Termination

### Concept

Unlike bacteria, eukaryotes do not have a defined termination sequence. Termination occurs when two converging replication forks meet.

### Mechanism

```
EUKEARYOTIC TERMINATION
═══════════════════════

Step 1: Converging forks approach each other
        CMG helicases from opposite directions converge
        
Step 2: CMG encounters incoming fork or DNA
        → CMG disassembly (requires p97/Cdc48 AAA+ ATPase)
        → CMG is ubiquitylated → extracted by p97
        
Step 3: Remaining gaps filled by Pol δ
        → Okazaki fragment processing at junction
        
Step 4: DNA Ligase I seals final nicks
        
Step 5: No catenane problem in linear chromosomes
        (Telomeres prevent catenation)
```

### CMG Disassembly — The End of the Road

| Factor | Function |
|--------|----------|
| **p97/Cdc48** | AAA+ ATPase; extracts ubiquitylated CMG |
| **Ubx5** | p97 adaptor |
| **SCF** | Ubiquitylates MCM7 |
| **Sld2/Dpb11** | Regulates termination |

> CMG disassembly is essential — persistent CMG would block subsequent processes (transcription, repair).

---

## 16. S-Phase Checkpoints

### Concept

Cells monitor replication progression through checkpoint mechanisms that detect stalled forks and activate response pathways.

### ATR-CHK1 Pathway

```
S-PHASE CHECKPOINT
══════════════════

Trigger: Stalled replication fork (long stretches of ssDNA)

Step 1: RPA-coated ssDNA accumulates at stalled fork
        → Excessive RPA-ssDNA is a danger signal
        
Step 2: ATRIP binds RPA-ssDNA → recruits ATR kinase
        (ATR = Ataxia Telangiectasia and Rad3-related)
        
Step 3: ATR is activated by:
        - TopBP1 (activator)
        - Dna2 (processed DNA structures)
        
Step 4: ATR phosphorylates CHK1 kinase
        → CHK1 is the effector kinase
        
Step 5: CHK1 phosphorylates targets:
        ├→ Degrades Cdc25 phosphatase → inhibits CDK
        ├→ Stabilizes stalled forks
        ├→ Inhibits new origin firing
        └→ Activates DNA repair pathways

Result:
- Replication slows down
- Damaged forks stabilized
- New origins suppressed (within same S phase)
- Time for repair before continuing
```

### Fork Protection Complex

| Component | Function |
|-----------|----------|
| **Timeless (Timestop)** | Fork protection; recruits ATR |
| **Claspin** | Mediator; bridges MCM-ATRIP |
| **Mrc1/Claspin** | Stabilizes fork; promotes fork restart |
| **14-3-3σ** | Fork-associated protein |

---

## Complete Eukaryotic Replication Workflow

```
EUKEARYOTIC DNA REPLICATION — COMPLETE WORKFLOW
═══════════════════════════════════════════════

G1 PHASE: LICENSING
│
├→ Low CDK activity permits licensing
├→ ORC binds replication origins
├→ Cdc6 and Cdt1 recruited to ORC
├→ MCM2-7 double hexamers loaded at origins
├→ Origins are "licensed" (pre-RC assembled)
├→ Multiple origins per chromosome (~30,000-50,000 total)
│
S-PHASE ENTRY: ACTIVATION
│
├→ CDK activity rises (S-CDK: Cyclin E/A-CDK2)
├→ DDK (Dbf4-dependent kinase) activated
├→ DDK phosphorylates MCM2-7
├→ S-CDK phosphorylates Sld2, Sld3
├→ Cdc45 loaded → GINS loaded → CMG helicase forms
├→ Origins FIRE → replication begins
├→ Only licensed origins can fire (no re-replication)
│
ELONGATION
│
├→ CMG helicase unwinds dsDNA
├→ RPA binds and stabilizes ssDNA
├→ Pol α/primase synthesizes RNA-DNA primer
├→ RFC loads PCNA at primer-template junction
├→ Polymerase switching: Pol α → Pol ε (leading) or Pol δ (lagging)
│
├→ LEADING STRAND:
│   ├→ Pol ε + PCNA synthesizes continuously
│   ├→ Follows CMG helicase
│   └→ Single initiation event per fork
│
├→ LAGGING STRAND:
│   ├→ New primer every 100-200 nt
│   ├→ Pol α/primase → Pol δ + PCNA
│   ├→ Okazaki fragments (~100-200 nt)
│   └→ Pol δ extends primer, meets previous fragment
│
├→ CHROMATIN REMODELING:
│   ├→ FACT complex disassembles nucleosomes ahead of fork
│   ├→ MCM2 + Asf1 recycle parental H3-H4
│   ├→ CAF-1 deposits new H3-H4 tetramers
│   └→ New nucleosomes assembled on daughter strands
│
OKAZAKI FRAGMENT PROCESSING
│
├→ RNase H2 removes most of RNA primer
├→ FEN1 removes remaining RNA + short DNA flaps
├→ Pol δ fills gaps with DNA
├→ DNA Ligase I seals nicks
│
FORK CONVERGENCE AND TERMINATION
│
├→ Two converging forks meet
├→ CMG helicases ubiquitylated
├→ p97/Cdc48 extracts CMG from DNA
├→ Remaining gaps filled by Pol δ
├→ DNA Ligase I seals final nicks
│
QUALITY CONTROL
│
├→ Proofreading by Pol ε and Pol δ (3'→5' exonuclease)
├→ Mismatch repair (MSH2/MSH6, MLH1/PMS2)
├→ ATR-CHK1 checkpoint monitors fork progression
├→ Fork protection complex stabilizes stalled forks
│
COMPLETE: Two identical daughter DNA molecules
         Each wrapped in properly assembled chromatin
```

---

## Quick Check

1. Why do eukaryotes need multiple origins of replication while bacteria typically need only one?
2. What is the role of geminin in preventing re-replication?
3. Describe the difference between Pol α/primase and Pol ε in terms of function and proofreading ability.
4. Why is PCNA loaded at the primer-template junction and not at any position on ssDNA?
5. What would happen if Cdt1 cannot be inhibited by geminin?
6. Explain why the ATR-CHK1 checkpoint is important for genome stability.
7. Describe the chromatin reassembly process during eukaryotic replication.

---

**← [Previous: Prokaryotic Replication](03-Prokaryotic-DNA-Replication.md) | [Next: Replication Fidelity →](05-Replication-Fidelity-and-Repair.md)**

*Related Lab: [Lab 04 — PCR and DNA Amplification](../LAB/Lab-04-PCR-and-DNA-Amplification.md) | [Lab 05 — Replication Data Analysis](../LAB/Lab-05-Replication-Data-Analysis.md)*
*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Long Questions](../ASSESSMENT/Long-Questions.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
*See also: [Cheat Sheet](../CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md) | [FAQ](../FAQ/DNA-Replication-FAQs.md)*
