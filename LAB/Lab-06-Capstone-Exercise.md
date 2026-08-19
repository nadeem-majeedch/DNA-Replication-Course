# Lab 06: Capstone Exercise — Integrated Replication Analysis

**← [Previous: Lab 05](Lab-05-Replication-Data-Analysis.md) | [Course Home →](../README.md)**

---

## Experiment Title
Integrated Analysis of DNA Replication: From Sequence to Clinical Application

## Learning Objectives
1. Integrate knowledge from all previous modules
2. Analyze a complete replication scenario from initiation to termination
3. Connect molecular mechanisms to disease phenotypes
4. Design experiments to test replication-related hypotheses
5. Present findings in a scientific format

## Background Theory

This capstone exercise brings together:
- Replication initiation (oriC/ORC)
- Elongation (replisome, polymerases)
- Primer processing (Okazaki fragments)
- Fidelity (proofreading, mismatch repair)
- Termination
- Telomere biology
- Replication stress and checkpoints
- Clinical applications

## Materials

- Computer with internet access
- Provided case datasets (below)
- Whiteboard/paper for diagrams
- Calculator

## Safety Considerations
- This is a computational/analytical exercise — no wet-lab hazards
- Follow institutional guidelines for computer and workspace use

## Experimental Principle

Real-world replication problems require integrating multiple concepts. This exercise presents realistic scenarios that require students to apply knowledge from all modules to solve problems.

---

## Part A: The E. coli Replication Scenario (30 minutes)

### Scenario

A researcher isolates a new *E. coli* mutant (strain ΔdnaX) that has a frameshift mutation in the dnaX gene, which encodes the τ and γ subunits of the clamp loader complex.

### Data Provided

**Wild-type vs. Mutant Phenotype:**

| Parameter | Wild-type | ΔdnaX mutant |
|-----------|-----------|-------------|
| Growth rate (doubling time) | 20 min | 90 min |
| Mutation rate | 10⁻⁹/bp/div | 10⁻⁷/bp/div |
| Okazaki fragment size | 1,500 nt | 200 nt |
| Pol III processivity | >50,000 nt | ~50 nt |
| Leading strand synthesis | Continuous | Continuous but slow |
| Lagging strand synthesis | Continuous cycling | Frequent polymerase dissociation |

### Questions

1. **Explain why the mutant has a slower growth rate.**
   - Consider the role of the clamp loader in processivity

2. **Explain why Okazaki fragments are shorter in the mutant.**
   - What happens when the sliding clamp cannot be loaded efficiently?

3. **Why is the mutation rate 100-fold higher in the mutant?**
   - How does processivity affect fidelity?

4. **Design an experiment to test whether adding back functional τ subunit rescues the phenotype.**

5. **Predict the phenotype if only the γ subunit (not τ) were absent.**

---

## Part B: The Cancer Patient Scenario (30 minutes)

### Scenario

A 45-year-old patient presents with:
- History of colorectal cancer (age 38)
- Endometrial cancer (age 42)
- Mother had ovarian cancer (age 50)
- Father had gastric cancer (age 55)
- Tumor testing shows microsatellite instability (MSI-High)

### Data Provided

**Tumor Molecular Profile:**

| Test | Result |
|------|--------|
| MSI testing | MSI-High |
| MLH1 expression | Absent in tumor |
| MLH1 promoter methylation | Negative |
| MLH1 germline sequencing | Heterozygous frameshift mutation |
| MSH2 expression | Present |
| MSH6 expression | Present |
| PMS2 expression | Reduced (likely due to MLH1 loss) |
| BRAF V600E | Negative |

### Questions

1. **What is the most likely diagnosis?**
   - Explain the molecular basis

2. **Why is MLH1 promoter methylation negative?**
   - How does this help distinguish sporadic from hereditary cancer?

3. **Explain the mechanism by which MLH1 loss leads to MSI.**
   - What mismatch repair step is affected?

4. **Recommend genetic testing for the patient's siblings.**
   - What is the recurrence risk?

5. **What immunotherapy might be effective for this patient?**
   - Explain the mechanism

6. **Design a surveillance protocol for this patient.**

---

## Part C: The Telomere Mystery (20 minutes)

### Scenario

A researcher is studying two cell lines:
- **Cell line X**: Normal telomere length, finite lifespan (60 population doublings)
- **Cell line Y**: Very short telomeres (~2 kb), enters senescence after 15 population doublings

The researcher transfects Cell line Y with a retrovirus expressing TERT (telomerase catalytic subunit).

### After TERT Expression:

| Parameter | Cell line Y (before) | Cell line Y (after TERT) |
|-----------|---------------------|-------------------------|
| Telomere length | 2 kb | Stable at 10 kb after 20 passages |
| Population doublings | 15 | >500 (still dividing) |
| p53 status | Wild type | Wild type |
| Senescence markers | Positive (p21, p16) | Negative |
| Karyotype | Normal | Normal initially, then abnormalities |
| Soft agar growth | Negative | Positive after 100 passages |

### Questions

1. **Explain how TERT expression rescues the senescence phenotype.**

2. **Why does the karyotype eventually become abnormal despite TERT expression?**

3. **What does the soft agar growth result indicate?**
   - Has the cell line become transformed?

4. **What is the clinical significance of these findings for cancer therapy?**

5. **Design an experiment to test whether these cells are truly immortalized vs. transformed.**

---

## Part D: Replication Stress and Drug Response (20 minutes)

### Scenario

A pharmaceutical company is developing a new drug (Drug Z) that inhibits a protein involved in replication fork restart. You are asked to analyze its mechanism.

### Data Provided

**Drug Z Effects:**

| Parameter | Control | Drug Z (low dose) | Drug Z (high dose) |
|-----------|---------|-------------------|-------------------|
| Cell viability (24h) | 100% | 85% | 30% |
| γH2AX foci | Low | Moderate | High |
| pRPA foci | Low | High | Very high |
| BRCA1 status | Wild type | Wild type | Wild type |
| Cell cycle arrest | — | S-phase | S-phase + G2/M |
| Fork speed (fiber assay) | 50 nt/s | 45 nt/s | 30 nt/s |
| Fork reversal events | Low | High | Very high |

### Questions

1. **Based on the data, what is the likely target of Drug Z?**
   - Which protein involved in fork restart?

2. **Why does Drug Z cause more toxicity in BRCA1-wild-type cells than BRCA1-deficient cells would?**
   - Consider the synthetic lethal interaction

3. **Would Drug Z be effective as a monotherapy? Why or why not?**

4. **Design a combination therapy strategy using Drug Z.**

5. **What biomarker would you use to select patients for Drug Z therapy?**

---

## Expected Results

### Part A Key Answers
1. **Growth rate**: Without functional clamp loader, Pol III processivity drops dramatically → each Okazaki fragment takes much longer to synthesize → overall replication is much slower
2. **Okazaki fragment size**: Without efficient clamp loading, Pol III dissociates after ~200 nt (vs. >50,000 nt with clamp)
3. **Mutation rate**: Lower processivity → more frequent polymerase cycling → more opportunities for misincorporation at primer junctions
4. **Rescue experiment**: Transform ΔdnaX with plasmid expressing wild-type τ → should restore normal growth rate and Okazaki fragment size
5. **γ-only mutant**: Less severe — τ-specific functions (dimerization, helicase coupling) would be affected, but basic clamp loading (γ function) would remain

### Part B Key Answers
1. **Diagnosis**: Lynch syndrome (HNPCC) — germline MLH1 mutation with loss of heterozygosity in tumor
2. **MLH1 methylation negative**: Sporadic MSI-H typically shows MLH1 promoter methylation; negative methylation + germline mutation = hereditary
3. **MLH1 loss → MSI**: MLH1-PMS2 (MutLα) complex needed for strand-directed mismatch repair; loss → cannot repair replication errors at microsatellites
4. **Recurrence risk**: 50% for siblings (autosomal dominant); genetic testing recommended
5. **Immunotherapy**: Anti-PD-1 (pembrolizumab) — MSI-H tumors have high neoantigen load → respond to immune checkpoint inhibitors
6. **Surveillance**: Colonoscopy annually from age 20-25; endometrial screening; consider prophylactic surgery

### Part C Key Answers
1. **TERT rescue**: TERT extends telomeres → prevents critically short telomeres → prevents senescence entry
2. **Karyotype abnormalities**: Telomerase prevents telomere-driven crisis but does not prevent other forms of genomic instability; cells can still acquire mutations during extended proliferation
3. **Soft agar growth**: Anchorage-independent growth = hallmark of transformation; cells have become cancerous
4. **Clinical significance**: Telomerase inhibition could prevent cancer cell immortalization; telomerase reactivation in normal cells could promote cancer
5. **Experiment**: Test for tumor formation in nude mice (tumorigenicity assay); karyotype analysis; p53 status

### Part D Key Answers
1. **Target**: Likely a fork restart protein (e.g., RAD51, SMARCAL1, or BRCA2) — Drug Z increases fork reversal events
2. **BRCA1 consideration**: BRCA1-deficient cells already have fork restart defects → Drug Z may add little additional toxicity in BRCA1-deficient cells (but see data — actually, BRCA1 WT cells show more toxicity because Drug Z specifically targets fork restart)
3. **Monotherapy**: Likely insufficient — would need combination with DNA-damaging agents to exploit the fork restart defect
4. **Combination**: Drug Z + PARP inhibitor or platinum-based chemotherapy → exploit synthetic lethality
5. **Biomarker**: γH2AX foci, pRPA foci, fork reversal events in tumor biopsies

---

## Post-Lab Questions

1. How do the three scenarios connect to each other in terms of replication biology?
2. What common theme emerges across all four scenarios?
3. If you were a pharmaceutical researcher, which scenario would you focus on for drug development? Why?
4. How would you design a comprehensive replication profiling panel for a cancer center?

## Viva Questions

1. Explain the connection between replication fidelity and cancer.
2. How does the clamp loader mutation affect both replication speed and accuracy?
3. Why does MLH1 loss specifically cause microsatellite instability?
4. How do telomere biology and replication stress interact in cancer development?
5. What is the future of replication-targeted cancer therapy?

## Instructor Notes

- This is the culminating exercise — assess all learning objectives
- Allow students to work in groups or individually
- Present findings in a short oral presentation (5 minutes per group)
- Grade on scientific reasoning, not just correct answers
- Discuss how different concepts integrate
- Connect to all previous modules and labs

## Related Theory

- [Module 03: Prokaryotic Replication](../MARKDOWN/03-Prokaryotic-DNA-Replication.md)
- [Module 04: Eukaryotic Replication](../MARKDOWN/04-Eukaryotic-DNA-Replication.md)
- [Module 05: Fidelity and Repair](../MARKDOWN/05-Replication-Fidelity-and-Repair.md)
- [Module 06: Telomeres](../MARKDOWN/06-Telomeres-and-Telomerase.md)
- [Module 07: Replication Stress](../MARKDOWN/07-Replication-Stress-and-Checkpoints.md)
- [Module 11: Clinical Applications](../MARKDOWN/11-Clinical-and-Biotechnology-Applications.md)
- [Module 12: Advanced Topics](../MARKDOWN/12-Advanced-Topics.md)
