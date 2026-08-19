# Lab 02: DNA Quantification and Quality Assessment

**← [Previous: Lab 01](Lab-01-DNA-Replication-Concepts.md) | [Next: Lab 03 →](Lab-03-Gel-Electrophoresis.md)**

---

## Experiment Title
DNA Quantification Using Spectrophotometry and Fluorometry

## Learning Objectives
1. Quantify DNA concentration using UV spectrophotometry
2. Assess DNA purity using A260/A280 and A260/A230 ratios
3. Understand the principles of Beer-Lambert law
4. Perform quality assessment of extracted DNA
5. Compare spectrophotometric and fluorometric quantification methods

## Background Theory

### Beer-Lambert Law
A = εlc
Where:
- A = Absorbance
- ε = Molar extinction coefficient (for dsDNA: 0.020 cm⁻¹ at 260 nm for 50 μg/mL)
- l = Path length (1 cm)
- c = Concentration

### DNA Absorption
- DNA absorbs UV light maximally at **260 nm** (due to aromatic bases)
- Proteins absorb at **280 nm** (due to aromatic amino acids)
- Contaminants (phenol, guanidine) absorb at **230 nm**

### Purity Ratios
| Ratio | Acceptable Range | Interpretation |
|-------|-----------------|----------------|
| A260/A280 | 1.8–2.0 | Pure DNA (~1.8); RNA contamination >1.8 |
| A260/A230 | >2.0 | Pure DNA; <2.0 indicates contamination |

## Materials

| Material | Quantity | Notes |
|----------|----------|-------|
| Genomic DNA samples (various qualities) | 3-5 | Pre-extracted |
| TE buffer (10 mM Tris, 1 mM EDTA, pH 8.0) | 100 mL | Diluent |
| UV spectrophotometer (NanoDrop or equivalent) | 1 | |
| Fluorometer (Qubit or equivalent) | 1 | If available |
| Microvolume cuvettes | As needed | |
| Clean pipette tips | As needed | |
| DEPC-treated water | 50 mL | |

## Equipment
- UV-Vis spectrophotometer (NanoDrop preferred)
- Fluorometer (if available)
- Micropipettes (P20, P200, P1000)
- Vortex mixer
- Microcentrifuge

## Safety Considerations
⚠️ **UV light hazard**: Never look directly at UV light source
⚠️ **Chemical hazard**: Wear gloves when handling DNA samples
⚠️ **Biological hazard**: Follow institutional biosafety guidelines
⚠️ Always use appropriate PPE (lab coat, gloves, safety glasses)

## Experimental Principle

DNA absorbs UV light at 260 nm due to the conjugated ring systems of purine and pyrimidine bases. The absorbance is proportional to DNA concentration (Beer-Lambert law). Contaminating proteins, RNA, and chemicals absorb at different wavelengths, allowing purity assessment.

## Step-by-Step Procedure

### Part A: Spectrophotometric Quantification (30 minutes)

1. **Blank the spectrophotometer**
   - Use 1 μL of TE buffer (same as diluent)
   - Run blank measurement

2. **Measure sample 1 (high-quality genomic DNA)**
   - Load 1 μL onto NanoDrop
   - Record A260, A280, A230
   - Calculate concentration: A260 × dilution factor × 50 μg/mL

3. **Measure samples 2-5**
   - Repeat for all samples
   - Record all values in results table

4. **Calculate purity ratios**
   - A260/A280
   - A260/A230

### Part B: Fluorometric Quantification (if available) (20 minutes)

5. **Prepare Qubit working solution**
   - Dilute Qubit reagent 1:200 in Qubit buffer
   - Add 199 μL buffer + 1 μL reagent per tube

6. **Prepare standards**
   - Standard 1: 0 ng/μL (blank)
   - Standard 2: 10 ng/μL (high standard)

7. **Prepare samples**
   - Dilute 1-10 μL sample in 200 μL working solution
   - Include a "sample blank" (working solution only)

8. **Read standards and samples**
   - Follow instrument protocol
   - Record concentrations

## Expected Observations

| Sample | A260 | A280 | A230 | A260/A280 | A260/A230 | Quality |
|--------|------|------|------|-----------|-----------|---------|
| Sample 1 (high quality) | ~1.0 | ~0.55 | ~0.40 | ~1.85 | ~2.5 | Excellent |
| Sample 2 (RNA contam.) | ~1.2 | ~0.55 | ~0.50 | ~2.1 | ~2.4 | RNA contamination |
| Sample 3 (Protein contam.) | ~0.8 | ~0.50 | ~0.50 | ~1.6 | ~1.6 | Protein contamination |
| Sample 4 (Low concentration) | ~0.1 | ~0.06 | ~0.05 | ~1.7 | ~2.0 | Low but pure |
| Sample 5 (Multiple contam.) | ~0.5 | ~0.35 | ~0.30 | ~1.4 | ~1.7 | Multiple contaminants |

## Results Table

| Sample | Conc. (ng/μL) | A260/A280 | A260/A230 | Fluorometer Conc. | Assessment |
|--------|---------------|-----------|-----------|-------------------|------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

## Calculations

### Concentration Calculation

For a NanoDrop reading:
- Dilution factor (DF): volume of sample + volume of diluent
- Concentration = A260 × DF × 50 μg/mL

**Example:**
- A260 = 0.5
- DF = 1 (undiluted)
- Concentration = 0.5 × 1 × 50 = 25 μg/mL = 25,000 ng/μL

### Total Yield

Total DNA = Concentration × Total volume

**Example:**
- Concentration = 25 μg/mL
- Total volume = 200 μL = 0.2 mL
- Total DNA = 25 × 0.2 = 5.0 μg

## Interpretation

1. Why does RNA contamination increase A260/A280 above 1.8?
2. Why does protein contamination decrease A260/A280 below 1.8?
3. How would you use this DNA for PCR? What concentration is optimal?
4. When would you prefer fluorometric over spectrophotometric quantification?

## Troubleshooting

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| A260 reading too high (>3.0) | Too concentrated | Dilute sample and re-measure |
| A260 reading too low (<0.05) | Too dilute | Use fluorometer or concentrate sample |
| A260/A280 < 1.6 | Protein contamination | Re-extract with proteinase K |
| A260/A280 > 2.0 | RNA contamination | Treat with RNase A |
| A260/A230 < 1.5 | Salt/phenol contamination | ethanol precipitation or clean-up column |
| Negative A260 | Bubbles or dirty cuvette | Clean and re-measure |

## Post-Lab Questions

1. A DNA sample has A260 = 0.8, A280 = 0.5, A230 = 0.4. What is the concentration? Is it pure?
2. Why is TE buffer used instead of water for DNA dilution?
3. When would you use fluorometric quantification instead of spectrophotometric?
4. How does the Beer-Lambert law relate to DNA quantification?
5. A sample has A260/A280 = 2.3. What contamination might this indicate?

## Viva Questions

1. What is the maximum absorbance wavelength for DNA? For proteins?
2. Why do you blank the instrument before measuring samples?
3. What is the path length of a NanoDrop?
4. How does the A260/A280 ratio change with protein contamination?
5. Name two contaminants that absorb at 230 nm.

## Expected Answers

1. **Concentration**: 0.8 × 1 × 50 = 40 μg/mL. **Purity**: A260/A280 = 1.6 (low, protein contamination); A260/A230 = 2.0 (acceptable). Overall: impure DNA with protein contamination.
2. **TE buffer** chelates divalent cations (Mg²⁺) that activate DNases, protecting DNA from degradation.
3. **Fluorometric** is preferred for low-concentration samples, crude preparations, or when contaminants interfere with UV absorbance.
4. **Beer-Lambert law** states that absorbance is directly proportional to concentration (at constant path length and extinction coefficient).
5. **Contaminants at 230 nm**: phenol, guanidine thiocyanate, EDTA, carbohydrates, salt.

## Instructor Notes

- This is a wet-lab exercise requiring a spectrophotometer
- Ensure NanoDrop is cleaned before use
- Prepare DNA samples of varying quality in advance
- Discuss real-world scenarios where DNA quality matters (PCR, sequencing, cloning)
- If fluorometer is not available, focus on spectrophotometric methods

## Related Theory

- [Module 09: Experimental Methods](../MARKDOWN/09-Experimental-Methods.md)
- [Lab 03: Gel Electrophoresis](Lab-03-Gel-Electrophoresis.md)
