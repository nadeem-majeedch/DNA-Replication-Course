# Module 10: Data Analysis and Interpretation

**← [Previous: Experimental Methods](09-Experimental-Methods.md) | [Next: Clinical Applications →](11-Clinical-and-Biotechnology-Applications.md)**

---

## Learning Objectives

1. Interpret replication-related molecular biology data
2. Perform basic bioinformatics analysis of replication sequences
3. Analyze replication timing data
4. Interpret DNA fiber analysis results
5. Connect computational and experimental approaches

---

## 1. Analyzing Replication Origins Bioinformatically

### Exercise 1: Identifying DnaA Boxes in E. coli oriC

**Input:**
```
E. coli oriC sequence (245 bp):
ATCTGGTAAAATTATTTCACAGCGAAATTTATCAACTATCGTTAACTATCGTTAACGATTTGAA
ATGATCGTCAAAACGATCGTTACATCAACTATCGTTAATTGATCGTTAACTATCGTTAACGATC
CGATCAACGATCATCGAACGATCAACGATCAATTCGATCATCAACGATCATCAACGATCGTAA
CAATCGTCGAATCAACGATCGTTCAGTTAACTATCGTTAACTATCGTTAACGATTCGATCATC
```

**Task:** Search for DnaA box sequences (GATCTNTTNTTNCAG)

**Expected Workflow:**
1. Identify the consensus sequence for DnaA boxes
2. Scan the sequence for matches (allowing 1-2 mismatches)
3. Note positions of R1-R5 boxes
4. Identify the 13-mer AT-rich region

**Key Results:**
- R1-R5 DnaA boxes found at expected positions
- 13-mer AT-rich region identified upstream of DnaA boxes
- The arrangement allows cooperative DnaA binding

### Exercise 2: Predicting Replication Origins in a Novel Bacterial Genome

**Task:** Given a 5 Mb bacterial genome sequence, predict likely oriC location

**Approach:**
1. Look for DnaA box consensus sequences
2. Identify AT-rich regions near DnaA boxes
3. Map基因 density (genes point away from oriC)
4. Use GC-skew analysis (G/C ratio changes at origin and terminus)

**GC-Skew Analysis:**
```
GC-skew = (G - C) / (G + C)

For a circular chromosome:
- GC-skew changes sign at origin and terminus
- Plot GC-skew along genome → peaks/valleys indicate oriC/ter
```

---

## 2. Analyzing Okazaki Fragment Data

### Exercise: Interpreting Okazaki Fragment Size Data

**Simulated Data:**
```
Experiment: Alkaline gel analysis of Okazaki fragments

Lane 1: Wild type E. coli
        → Band centered at ~1,500 nt
        
Lane 2: dnaG mutant (primase mutant)
        → Band at ~3,000 nt (larger fragments)
        
Lane 3: ligase mutant (E. coli ligase⁻)
        → Smear of fragments (not joined)
        
Lane 4: Human cell extract
        → Band centered at ~150 nt
        
Lane 5: Human cells + FEN1 inhibitor
        → Slightly larger fragments + accumulation of flaps
```

**Questions:**
1. Why are Okazaki fragments larger in the dnaG mutant?
2. Why does the ligase mutant show a smear?
3. Why are human Okazaki fragments smaller than E. coli?
4. What does the FEN1 inhibitor result tell you about primer processing?

**Expected Answers:**
1. Primase mutant → fewer primers → longer fragments between primers
2. Ligase mutant → fragments not joined → all fragment sizes visible
3. Eukaryotes have more nucleosomes → shorter fragments needed to navigate chromatin
4. FEN1 is needed for flap removal → without it, fragments are slightly longer and contain flap structures

---

## 3. Replication Timing Analysis

### Exercise: Interpreting Repli-seq Data

**Simulated Data:**
```
Chromosome 1 (partial, arbitrary region):

Position (Mb):  1.0   2.0   3.0   4.0   5.0   6.0   7.0
Repli-seq 
Early-S:        High  High  Low   Low   High  High  Low
Late-S:         Low   Low   High  High  Low   Low   High
Gene density:   High  High  Low   Low   High  High  Low
```

**Analysis Questions:**
1. What is the replication timing of the region around 1.0 Mb?
2. What is the replication timing of the region around 3.0 Mb?
3. What is the correlation between gene density and replication timing?
4. Predict the replication timing of a region with very high gene density.

**Answers:**
1. Early-S (replicates early in S phase)
2. Late-S (replicates late in S phase)
3. Positive correlation: high gene density → early replication
4. Very early-S (among the first regions to replicate)

---

## 4. Analyzing Telomere Length Data

### Exercise: Telomere Length Measurement

**Southern Blot (TRF) Data:**
```
Sample: Genomic DNA digested with HinfI/RsaI + telomere probe

Lane 1: Newborn (healthy)
        → Broad smear centered at ~12 kb
        
Lane 2: Age 60 (healthy)
        → Broad smear centered at ~8 kb
        
Lane 3: Dyskeratosis congenita patient
        → Very short smear at ~3 kb
        
Lane 4: Cancer cell line (telomerase+)
        → Broad smear at ~10 kb
        
Lane 5: Cancer cell line (ALT+)
        → Very broad smear from ~2-25 kb
```

**Questions:**
1. How much telomere length is lost between birth and age 60?
2. What is the approximate annual rate of telomere shortening?
3. Why is the ALT cancer lane so broad compared to others?
4. Could the patient in Lane 3 have a mutation in TERT?

---

## 5. Sequence Analysis Exercises

### Exercise: Strand Orientation Analysis

**Task:** Given a DNA sequence, determine:
1. Which strand is the template for leading strand synthesis
2. Where RNA primers would be placed on the lagging strand
3. The direction of fork movement

**Example:**
```
Given oriC sequence and surrounding region:

5'─...ATCGATCGATCGATCGATCG...[ORIC]...GCTAGCTAGCTAGCTAGCTA─3'
3'─...TAGCTAGCTAGCTAGCTAGC...[ORIC]...CGATCGATCGATCGATCGAT─5'

Left fork moves ←     Right fork moves →
```

### Exercise: Predicting Primer Binding

**Task:** Given a single-stranded template sequence, predict:
1. Where a primase would bind
2. The sequence of the RNA primer
3. The direction of extension

**Example:**
```
Template: 3'─GCTAGCTAGCTAGC─5'
          5'──────────────→3' (synthesis direction)

If primase recognizes and binds at position 4-5:
RNA primer: 5'─rUrArG─3' (complementary to template)
Extension: 5'─rUrArG─dC─dG─dA─dC─dG─dA─dC─dG─3'
```

---

## 6. Mutation Analysis

### Exercise: Predicting Consequences of Replication Gene Mutations

**Scenario:**
```
A patient presents with:
- Microsatellite instability (MSI) in colorectal cancer
- Family history of colorectal and endometrial cancer
- Tumor shows frameshift mutations in coding microsatellites

Question: Which genes are most likely mutated?
```

**Analysis:**
1. MSI indicates defective mismatch repair
2. Most common MMR gene mutations in Lynch syndrome: MLH1, MSH2, MSH6, PMS2
3. MLH1 and MSH2 account for ~70% of Lynch syndrome cases
4. Microsatellite instability diagnostic test confirms MMR deficiency

---

## 7. Comparative Genomics

### Exercise: Comparing Replication Proteins Across Species

**Task:** Compare the sequences of DNA polymerase catalytic subunits across:
- E. coli (Pol III α, dnaE)
- Yeast (Pol ε catalytic, Pol2)
- Human (Pol ε catalytic, POLE)

**Analysis:**
1. Align sequences using BLAST
2. Identify conserved domains (polymerase, exonuclease)
3. Look for conserved catalytic residues
4. Note species-specific insertions/deletions

---

## Quick Check

1. How would you use GC-skew analysis to predict the origin of replication in an uncharacterized bacterial genome?
2. If a new Okazaki fragment analysis shows fragments of ~500 nt in human cells, what might explain this unexpected result?
3. Design a bioinformatics workflow to identify potential replication origins in a newly sequenced bacterial genome.
4. A patient shows telomere length of 2 kb with premature aging features. What genetic tests would you recommend?

---

**← [Previous: Experimental Methods](09-Experimental-Methods.md) | [Next: Clinical Applications →](11-Clinical-and-Biotechnology-Applications.md)**

*Related Lab: [Lab 05 — Replication Data Analysis](../LAB/Lab-05-Replication-Data-Analysis.md)*
*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
