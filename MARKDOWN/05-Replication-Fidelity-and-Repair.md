# Module 05: Replication Fidelity and Repair

**← [Previous: Eukaryotic Replication](04-Eukaryotic-DNA-Replication.md) | [Next: Telomeres and Telomerase →](06-Telomeres-and-Telomerase.md)**

---

## Learning Objectives

1. Explain the three layers of replication fidelity
2. Describe the mechanism of proofreading
3. Explain mismatch repair (MMR) in detail
4. Compare bacterial and eukaryotic mismatch repair
5. Understand the consequences of replication errors

---

## 1. Overview of Replication Fidelity

### Concept

**Replication fidelity** refers to the accuracy with which DNA is copied. Multiple layers of error correction ensure that the final error rate is approximately **one mistake per 10⁹–10¹⁰ nucleotides**.

### The Error Cascade

| Layer | Mechanism | Error Rate | Improvement |
|-------|-----------|------------|-------------|
| **1. Base selection** | Polymerase active site geometry | ~10⁻⁵ | — |
| **2. Proofreading** | 3'→5' exonuclease | ~10⁻⁷ | 100-fold |
| **3. Mismatch repair** | Post-replicative correction | ~10⁻⁹ to 10⁻¹⁰ | 100–1000-fold |

### Why Fidelity Matters

- Human genome: 3.2 × 10⁹ bp
- Without any correction: ~3.2 × 10⁴ errors per cell division
- With all three layers: ~0.3–3 errors per cell division
- Most remaining errors occur in non-coding DNA → few functional consequences

---

## 2. Base Selection — Layer 1

### Concept

DNA polymerases discriminate between correct and incorrect nucleotides based on the geometry of Watson-Crick base pairs.

### Mechanism

The polymerase active site acts as a **molecular caliper**:
- Correct base pairs (A-T, G-C) have a specific geometry
- Incorrect pairs (mismatches) have altered geometry
- Only correctly shaped pairs fit → catalysis proceeds
- Incorrectly shaped pairs → rejection (kinetic discrimination)

### Two Mechanisms of Selection

1. **Geometric selection**: Active site only accommodates correct pair geometry
2. **Induced-fit mechanism**: Correct binding triggers conformational change → catalysis proceeds; incorrect binding → no conformational change → no catalysis

### Visual Explanation

```
BASE SELECTION BY DNA POLYMERASE
════════════════════════════════

Correct pair (A-T):
    Template: T    Incoming: A
    ┌─────────────┐
    │  T ═══ A    │  ← Correct geometry fits active site
    │  (2 H-bonds) │  ← Induced fit → catalysis
    └─────────────┘
    → dNTP incorporated ✓

Incorrect pair (A-C):
    Template: T    Incoming: C  
    ┌─────────────┐
    │  T ═══ C    │  ← Mismatched geometry
    │  (doesn't fit)│  ← No induced fit → rejection
    └─────────────┘
    → dNTP rejected ✗
```

---

## 3. Proofreading — Layer 2

### Concept

**Proofreading** is the immediate correction of misincorporated nucleotides by the 3'→5' exonuclease activity of DNA polymerase.

### Mechanism

```
PROOFREADING BY 3'→5' EXONUCLEASE
══════════════════════════════════

Normal synthesis:
    3'──Template──5'
    5'──New DNA────→ 3' (growing end)
    
Misincorporation occurs:
    3'──Template──5'
    5'──New DNA───X→ 3'  (X = wrong nucleotide)
                      ↑
                Mismatch detected!
                
Step 1: Polymerase stalls at mismatch
        → Distorted geometry at 3' end
        
Step 2: 3'→5' exonuclease domain activates
        → DNA partitions from polymerase site to exonuclease site
        
Step 3: Exonuclease removes the mismatched nucleotide
        → 3'→5' direction → removes last nucleotide(s)
        
Step 4: DNA returns to polymerase site
        → Correct nucleotide incorporated
        
    3'──Template──5'
    5'──New DNA────→ 3' (correct synthesis continues)
```

### E. coli vs. Eukaryotic Proofreading

| Feature | E. coli | Eukaryotic |
|---------|---------|------------|
| Polymerase | Pol III (ε subunit) | Pol ε (leading), Pol δ (lagging) |
| Exonuclease domain | ε (dnaQ) | Built into Pol ε and Pol δ |
| Removal direction | 3'→5' | 3'→5' |
| Processing rate | ~100 nt/s | ~10 nt/s |

### Consequences of Proofreading Deficiency

| Organism | Mutation | Phenotype |
|----------|----------|-----------|
| E. coli | dnaQ49 (ε mutant) | 100-fold increase in mutation rate; often lethal |
| Mouse | Pol ε exonuclease dead | Embryonic lethal |
| Human | POLE/POLD1 exonuclease domain mutations | Cancer predisposition (Lynch-like syndrome) |

---

## 4. Mismatch Repair (MMR) — Layer 3

### Concept

Mismatch repair corrects errors that escape proofreading. It recognizes mismatched bases and small insertion/deletion loops that occur during replication.

### Why It Matters

- Catches ~99% of errors that escape proofreading
- Reduces error rate from ~10⁻⁷ to ~10⁻⁹–10⁻¹⁰
- **Defective MMR → Lynch syndrome (hereditary nonpolyposis colorectal cancer, HNPCC)**

---

### E. coli Mismatch Repair — MutHLS System

```
E. coli MISMATCH REPAIR (MutHLS)
══════════════════════════════════

Step 1: RECOGNITION
    MutS homodimer (MutS₂) scans DNA
    → Recognizes mismatches and small IDLs (insertion/deletion loops)
    → MutS binds mismatch → ADP → ATP exchange → sliding clamp on DNA
    
Step 2: RECRUITMENT
    MutS recruits MutL (MutL homodimer)
    → MutL acts as a molecular matchmaker
    → MutL recruits MutH (endonuclease)
    
Step 3: STRAND DISCRIMINATION
    MutH nicks the UNMETHYLATED (new) strand
    → E. coli Dam methylase methylates GATC sequences
    → Immediately after replication: hemimethylated state
    → Parental strand: methylated
    → New strand: unmethylated (for ~2 minutes)
    → MutH nicks unmethylated strand at nearest GATC
    
Step 4: EXCISION
    UvrD (helicase II) unwinds DNA from nick toward mismatch
    → Exonuclease (ExoI, ExoVII, ExoX, or RecJ) degrades nicked strand
    → Degrades past the mismatch
    
Step 5: RESYNTHESIS
    Pol III fills gap using methylated (parental) strand as template
    
Step 6: LIGATION
    DNA ligase seals the nick
```

### Visual Explanation

```
MISMATCH REPAIR — STRAND DISCRIMINATION
═══════════════════════════════════════

Before repair:
    5'─G─A─T─C─A─T─G─[X]─C─A─T─G─A─T─C─3'  ← New strand (unmethylated)
    3'─C─T─A─G─T─A─C─[Y]─G─T─A─C─T─A─G─5'  ← Parent strand (methylated)
                  ↑
              Mismatch (X-Y)
              e.g., A-C mismatch

Dam methylase methylates adenine in GATC:
    - Parent strand: methylated (─N⁶methyl─A─)
    - New strand: unmethylated (─A─)

MutH recognizes hemimethylated GATC:
    → Nicks unmethylated strand
    
After repair:
    5'─G─A─T─C─A─T─G─[T]─C─A─T─G─A─T─C─3'  ← Corrected new strand
    3'─C─T─A─G─T─A─C─[A]─G─T─A─C─T─A─G─5'  ← Parent strand
```

---

### Eukaryotic Mismatch Repair

Eukaryotes lack MutH and do not use methylation for strand discrimination. Instead, strand breaks (nicks) mark the new strand.

```
EUKARYOTIC MISMATCH REPAIR
═══════════════════════════

Step 1: RECOGNITION
    MSH2-MSH6 (MutSα): recognizes base-base mismatches and small IDLs (1 nt)
    MSH2-MSH3 (MutSβ): recognizes larger IDLs (2-13 nt)
    
Step 2: RECRUITMENT
    MLH1-PMS2 (MutLα): endonuclease, nicks new strand
    MLH1-PMS1 (MutLβ): additional function
    MLH1-MLH3 (MutLγ): trinucleotide repeat instability
    
Step 3: STRAND DISCRIMINATION
    No methylation system!
    Instead: nicks in the new strand serve as marks
    → Okazaki fragment nicks (3' ends)
    → PCNA-dependent strand discrimination
    → RFC loads PCNA → MutLα recognizes PCNA orientation
    
Step 4: EXCISION
    EXO1 (5'→3' exonuclease) degrades nicked strand past mismatch
    RPA stabilizes remaining ssDNA
    
Step 5: RESYNTHESIS
    Pol δ fills gap (with PCNA)
    
Step 6: LIGATION
    DNA Ligase I seals nick
```

### Comparison: Bacterial vs. Eukaryotic MMR

| Feature | E. coli (MutHLS) | Eukaryotes (MutS/MutL) |
|---------|-------------------|------------------------|
| MutS equivalent | MutS (homodimer) | MSH2-MSH6 (MutSα) |
| MutL equivalent | MutL (homodimer) | MLH1-PMS2 (MutLα) |
| Strand discrimination | Dam methylation (GATC) | Strand nicks (Okazaki fragments) |
| Helicase | UvrD | (role not fully defined) |
| Exonuclease | ExoI, VII, X, RecJ | EXO1 |
| Polymerase | Pol III | Pol δ |

### Clinical Significance

**Lynch Syndrome (HNPCC)**:
- Most common hereditary cancer syndrome
- Caused by germline mutations in MMR genes (MSH2, MLH1, MSH6, PMS2)
- ~1 in 300 individuals carry a mutation
- 50-80% lifetime risk of colorectal cancer
- Also increased risk of endometrial, ovarian, gastric cancers
- **Diagnosis**: Microsatellite instability (MSI) in tumors
- **Treatment**: May respond to immune checkpoint inhibitors (anti-PD-1)

---

## 5. Additional Repair Pathways

### Base Excision Repair (BER)

Repairs small, non-helix-distorting lesions (oxidized bases, deaminated bases, abasic sites):
1. DNA glycosylase recognizes lesion → removes damaged base
2. AP endonuclease cuts backbone at abasic site
3. DNA polymerase (Pol β in eukaryotes) fills gap
4. DNA ligase seals nick

### Nucleotide Excision Repair (NER)

Repairs bulky, helix-distorting lesions (UV-induced pyrimidine dimers, chemical adducts):
1. Damage recognition (XPC-RAD23B in eukaryotes)
2. Unwinding around damage (TFIIH helicases XPB, XPD)
3. Dual incision (XPF-ERCC1 5', XPG 3')
4. Gap filling (Pol δ/ε)
5. Ligation (ligase I)

> **Clinical**: Defects in NER → Xeroderma Pigmentosum (extreme UV sensitivity, skin cancer)

---

## 6. Consequences of Replication Errors

| Error Type | Frequency | Consequence |
|-----------|-----------|-------------|
| Point mutations (transitions) | ~10⁻⁹ per bp per division | May change protein function |
| Point mutations (transversions) | ~10⁻⁹ per bp per division | May change protein function |
| Frameshifts (IDLs) | Very rare with MMR | Protein truncation/function loss |
| Replication slippage | Common at repeats | Expansion/contraction of repeats |

### Mutation Rates

| Organism | Mutation rate (per bp per generation) |
|----------|---------------------------------------|
| E. coli | ~5 × 10⁻¹⁰ |
| Yeast (S. cerevisiae) | ~2 × 10⁻¹⁰ |
| Humans | ~1 × 10⁻⁸ (per cell division) |
| Per individual per generation | ~70 new mutations |

---

## Quick Check

1. If you could only remove one layer of replication fidelity (base selection, proofreading, or mismatch repair), which would have the most severe consequences? Explain.
2. Why can't E. coli use methylation for strand discrimination if Dam methylase is inactivated?
3. A patient presents with microsatellite instability in their colorectal cancer. Which genes would you suspect are mutated? What syndrome does this suggest?
4. Explain how PCNA orientation helps eukaryotic cells distinguish the new strand from the parent strand during mismatch repair.
5. Why are point mutations at G:C → A:T transitions the most common type of spontaneous mutation?

---

**← [Previous: Eukaryotic Replication](04-Eukaryotic-DNA-Replication.md) | [Next: Telomeres and Telomerase →](06-Telomeres-and-Telomerase.md)**

*Related Lab: [Lab 06 — Capstone Exercise](../LAB/Lab-06-Capstone-Exercise.md)*
*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
