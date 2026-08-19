# Lab 05: Replication Data Analysis

**← [Previous: Lab 04](Lab-04-PCR-and-DNA-Amplification.md) | [Next: Lab 06 →](Lab-06-Capstone-Exercise.md)**

---

## Experiment Title
Computational Analysis of DNA Replication Data

## Learning Objectives
1. Analyze simulated DNA fiber data
2. Interpret Okazaki fragment sequencing data
3. Perform bioinformatics analysis of replication origins
4. Analyze replication timing data
5. Connect computational analysis to experimental validation

## Background Theory

### DNA Fiber Analysis
- Label cells with nucleotide analogs (IdU, CldU)
- Stretch DNA fibers on glass slides
- Measure track lengths → fork speed
- Count tracks → origin usage
- Analyze patterns → fork dynamics

### Repli-seq
- Sort cells by S-phase stage (FACS)
- Sequence replicating DNA
- Map early vs. late replicating regions

### Origin Mapping
- Identify DnaA box sequences (E. coli)
- Use GC-skew analysis for origin prediction
- Analyze Okazaki fragment distribution for origin localization

## Materials

### Computational Tools
- Web browser (for online bioinformatics tools)
- Text editor
- Calculator
- Provided datasets (below)

## Equipment
- Computer with internet access
- Calculator
- Printer (optional)

## Safety Considerations
- This is a computational exercise — no wet-lab hazards
- Follow institutional guidelines for computer use

## Experimental Principle

Bioinformatics analysis of replication data involves sequence analysis, statistical interpretation, and data visualization. Students will use simulated datasets that mirror real experimental data to develop analytical skills.

---

## Exercise 1: DNA Fiber Analysis Interpretation (30 minutes)

### Dataset 1: Fiber Track Lengths

A researcher treated cells with IdU (20 min) followed by CldU (20 min) and performed DNA fiber analysis. The following track lengths were measured:

**Wild-type cells:**
| Fiber # | IdU track (μm) | CldU track (μm) | Pattern |
|---------|----------------|-----------------|---------|
| 1 | 12.5 | 13.0 | Symmetric bidirectional |
| 2 | 8.0 | 8.2 | Symmetric bidirectional |
| 3 | 11.2 | 11.5 | Symmetric bidirectional |
| 4 | 0 | 15.5 | Asymmetric (one fork only) |
| 5 | 10.8 | 11.0 | Symmetric bidirectional |
| 6 | 14.2 | 14.5 | Symmetric bidirectional |
| 7 | 9.5 | 9.8 | Symmetric bidirectional |
| 8 | 11.0 | 0 | Asymmetric (one fork only) |

**Drug-treated cells (Replication inhibitor):**
| Fiber # | IdU track (μm) | CldU track (μm) | Pattern |
|---------|----------------|-----------------|---------|
| 1 | 12.0 | 4.0 | Asymmetric (fork slowing) |
| 2 | 11.5 | 3.5 | Asymmetric (fork slowing) |
| 3 | 10.8 | 3.8 | Asymmetric (fork slowing) |
| 4 | 12.2 | 0 | Fork collapse |
| 5 | 11.0 | 2.5 | Asymmetric (fork slowing) |

### Questions:

1. **Calculate the average fork speed for wild-type cells:**
   - Assume 1 μm ≈ 2 kb for stretched DNA
   - Pulse time = 20 minutes
   - Speed = (track length × 2 kb/μm) / 20 min

2. **Compare fork speed between wild-type and drug-treated cells:**
   - Is the drug affecting fork speed or fork stability?

3. **What does the "asymmetric" pattern (Fiber #4, #8) tell you about replication?**

4. **Predict what a "fork collapse" event would look like on a fiber:**

---

## Exercise 2: Okazaki Fragment Analysis (20 minutes)

### Dataset 2: Okazaki Fragment Size Distribution

A researcher analyzed Okazaki fragments from two cell lines using alkaline gel electrophoresis:

**Cell Line A (Normal):**
| Fragment Size Range | Relative Abundance |
|---------------------|-------------------|
| 50-100 nt | 10% |
| 100-150 nt | 45% |
| 150-200 nt | 35% |
| 200-300 nt | 10% |
| >300 nt | 0% |

**Cell Line B (Mutant):**
| Fragment Size Range | Relative Abundance |
|---------------------|-------------------|
| 50-100 nt | 5% |
| 100-150 nt | 15% |
| 150-200 nt | 25% |
| 200-300 nt | 35% |
| >300 nt | 20% |

### Questions:

1. **What is the average Okazaki fragment size for each cell line?**

2. **Cell Line B has larger fragments. Which protein might be mutated?**
   - Consider: Primase, RNase H, FEN1, DNA Ligase I

3. **How would you confirm your hypothesis about the mutation in Cell Line B?**

4. **Design an experiment to test whether the mutation affects primer processing:**
   - What would you measure?
   - What controls would you include?

---

## Exercise 3: Origin Prediction by GC-Skew (25 minutes)

### Dataset 3: GC-Skew Data

A researcher calculated GC-skew for a 100 kb region of a circular bacterial chromosome:

```
Position (kb):   0     10    20    30    40    50    60    70    80    90    100
GC-skew:       +0.05  +0.08  +0.12  +0.15  +0.02  -0.05  -0.12  -0.18  -0.15  -0.08  +0.05
```

### Questions:

1. **Plot the GC-skew values against position:**

2. **At what position does the GC-skew change from positive to negative?**

3. **What does this transition indicate about origin and terminus locations?**

4. **How does GC-skew analysis compare to experimental origin mapping methods?**

---

## Exercise 4: Replication Timing Analysis (25 minutes)

### Dataset 4: Repli-seq Data

Gene expression and replication timing data for Chromosome 1 (partial):

| Gene | Expression Level | Replication Timing | Gene Size (kb) |
|------|-----------------|-------------------|----------------|
| Gene A | High | Early-S | 2.5 |
| Gene B | High | Early-S | 1.8 |
| Gene C | Low | Late-S | 15.0 |
| Gene D | High | Early-S | 3.2 |
| Gene E | Low | Late-S | 22.0 |
| Gene F | High | Early-S | 4.1 |
| Gene G | Low | Late-S | 18.5 |
| Gene H | High | Early-S | 2.9 |
| Gene I | Low | Late-S | 25.0 |
| Gene J | High | Early-S | 3.5 |

### Questions:

1. **Calculate the correlation between gene expression and replication timing.**
   - Assign numerical values: Early-S = 1, Late-S = 0

2. **Calculate the correlation between gene size and replication timing.**

3. **What is the biological significance of these correlations?**

4. **Predict the replication timing of a newly discovered gene that is:**
   a. Highly expressed, 5 kb
   b. Lowly expressed, 30 kb

---

## Exercise 5: Mutation Consequence Analysis (20 minutes)

### Dataset 5: Replication Gene Mutations

| Mutation | Organism | Protein Affected | Consequence |
|----------|----------|-----------------|-------------|
| G671S | E. coli | Pol III ε subunit | ?
| R110A | Human | PCNA (PIP box) | ? |
| S122E | Human | MSH6 | ? |
| N925S | Human | TERT | ? |
| C228T | Human | TERT promoter | ? |
| E49A | E. coli | DnaA | ? |

### Questions:

1. **For each mutation, predict the phenotype:**
   - Would replication be affected?
   - What aspect of replication would be impaired?

2. **How would you test these predictions experimentally?**

3. **Which of these mutations might be associated with cancer? Explain.**

---

## Exercise 6: Comparative Analysis (15 minutes)

### Dataset 6: Replication Protein Comparison

| Protein Feature | E. coli | Yeast | Human |
|----------------|---------|-------|-------|
| Helicase | DnaB | MCM2-7 | MCM2-7 |
| Sliding clamp | β₂ | PCNA | PCNA |
| Primase | DnaG | Pol α/primase | Pol α/primase |
| Leading Pol | Pol III | Pol ε | Pol ε |
| Lagging Pol | Pol III | Pol δ | Pol δ |

### Questions:

1. **Which features are conserved? What does this suggest about evolution?**

2. **Why do eukaryotes use different polymerases for leading and lagging strands?**

3. **If you discovered a new organism with a circular genome but PCNA-like sliding clamp, what would you predict about its replication system?**

---

## Expected Results

### Exercise 1 Answers (Fiber Analysis)
1. **Wild-type speed**: Average IdU track = 11.0 μm; 11.0 × 2 kb/μm = 22 kb; 22 kb / 20 min = 1.1 kb/min ≈ 18 nt/s
2. **Drug effect**: CldU tracks shorter (4.0 vs 13.0 μm) → drug slows fork progression after IdU pulse
3. **Asymmetric pattern**: Only one fork visible → may be a dormant origin or one-directional fork
4. **Fork collapse**: Abrupt termination of one track → DSB at fork

### Exercise 2 Answers (Okazaki Fragments)
1. **Normal**: Average ~150 nt; **Mutant**: Average ~250 nt
2. **Likely FEN1 or RNase H** — impaired primer processing → larger fragments
3. **Confirm by sequencing**: Look for RNA sequence remnants at fragment junctions

### Exercise 3 Answers (GC-Skew)
1. **Transition at ~45 kb** (positive → negative)
2. **Origin at ~45 kb** (transition point); **Terminus at ~95 kb** (opposite transition)
3. **GC-skew reflects strand-specific mutation patterns** caused by asymmetric replication

### Exercise 4 Answers (Replication Timing)
1. **Positive correlation**: Highly expressed genes tend to replicate early
2. **Negative correlation**: Large genes tend to replicate late
3. **Biological significance**: Active chromatin is more accessible to replication machinery

### Exercise 5 Answers (Mutations)
1. **G671S (ε)**: Loss of proofreading → increased mutation rate
2. **R110A (PCNA)**: Loss of PIP interaction → impaired polymerase switching
3. **S122E (MSH6)**: Defective mismatch repair → microsatellite instability
4. **N925S (TERT)**: Altered telomerase activity → telomere dysfunction
5. **C228T (TERT promoter)**: Created ETS binding site → telomerase reactivation → cancer
6. **E49A (DnaA)**: Defective ATP binding → impaired origin firing

---

## Post-Lab Questions

1. Design a complete bioinformatics workflow to identify replication origins in a newly sequenced bacterial genome.
2. How would you use DNA fiber analysis to test whether a drug is a replication fork inhibitor?
3. Explain how replication timing analysis can inform our understanding of gene regulation.
4. Why is the distinction between "fork slowing" and "fork collapse" important in cancer biology?

## Viva Questions

1. What information can DNA fiber analysis provide about replication?
2. How does Okazaki fragment size differ between prokaryotes and eukaryotes? Why?
3. What is the biological significance of replication timing?
4. How can bioinformatics predict replication origins without experimental data?
5. What are the limitations of computational replication analysis?

## Instructor Notes

- This is a computational exercise — no wet-lab equipment needed
- Provide printed datasets or digital files
- Allow time for students to work through each exercise
- Discuss the connection between computational predictions and experimental validation
- Use this lab to introduce students to bioinformatics approaches
- Connect to Modules 09, 10, and 11

## Related Theory

- [Module 09: Experimental Methods](../MARKDOWN/09-Experimental-Methods.md)
- [Module 10: Data Analysis](../MARKDOWN/10-Data-Analysis-and-Interpretation.md)
- [Module 12: Advanced Topics](../MARKDOWN/12-Advanced-Topics.md)
