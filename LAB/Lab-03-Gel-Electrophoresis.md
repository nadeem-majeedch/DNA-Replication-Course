# Lab 03: Agarose Gel Electrophoresis

**← [Previous: Lab 02](Lab-02-DNA-Quantification.md) | [Next: Lab 04 →](Lab-04-PCR-and-DNA-Amplification.md)**

---

## Experiment Title
Agarose Gel Electrophoresis for DNA Fragment Analysis

## Learning Objectives
1. Prepare and cast agarose gels
2. Load and run DNA samples on an agarose gel
3. Visualize DNA fragments using ethidium bromide or SYBR Safe
4. Estimate DNA fragment sizes using a molecular weight marker
5. Interpret gel electrophoresis results

## Background Theory

Agarose gel electrophoresis separates DNA fragments by size. DNA is negatively charged (phosphate backbone) and migrates toward the positive electrode (anode). Smaller fragments migrate faster through the agarose matrix than larger fragments.

### Key Principles
- **Migration**: DNA moves toward + electrode (anode)
- **Separation by size**: Smaller = faster, Larger = slower
- **Resolution**: Depends on agarose concentration
- **Visualization**: Intercalating dyes (EtBr, SYBR Safe) fluoresce under UV/blue light

### Agarose Concentration Guide
| Agarose % | Optimal Size Range | Resolution |
|-----------|-------------------|------------|
| 0.7% | 0.8–10 kb | Large fragments |
| 1.0% | 0.5–7 kb | General purpose |
| 1.5% | 0.2–4 kb | Medium fragments |
| 2.0% | 0.1–2 kb | Small fragments |

## Materials

| Material | Quantity | Notes |
|----------|----------|-------|
| Agarose powder | 1.5 g | For 1.0% gel in 150 mL |
| 1× TAE buffer | 200 mL | Running and gel buffer |
| Ethidium bromide (10 mg/mL) | 10 μL | Intercalating dye (handle with care) |
| OR SYBR Safe | 10 μL | Safer alternative |
| 6× DNA loading dye | 10 μL | Contains glycerol + tracking dyes |
| DNA molecular weight marker (1 kb ladder) | 5 μL | Size standard |
| DNA samples | 5-10 μL each | Various sizes/qualities |
| Distilled water | As needed | |

## Equipment
- Microwave or agarose gel casting system
- Gel casting tray and comb
- Horizontal gel electrophoresis chamber
- DC power supply (5-10 V/cm)
- UV transilluminator or blue light illuminator
- Gel documentation system
- Micropipettes (P20, P200)
- UV-protective goggles

## Safety Considerations
⚠️ **Ethidium bromide is a mutagen** — handle with gloves at all times
⚠️ **Hot agarose** — allow to cool before pouring
⚠️ **UV light** — use transilluminator with protective shield; wear UV goggles
⚠️ **Electrical hazard** — ensure electrophoresis chamber is properly connected
⚠️ Follow institutional safety guidelines for chemical and biological hazards

## Experimental Principle

DNA migration through agarose is governed by:
- **Electric field strength**: Voltage drives migration
- **Agarose concentration**: Higher % = smaller pores = slower migration of large DNA
- **DNA size**: Log-linear relationship between size and migration distance
- **DNA conformation**: Supercoiled > linear > nicked circular (for same size)

## Step-by-Step Procedure

### Part A: Gel Preparation (15 minutes + cooling)

1. Weigh 1.5 g agarose powder
2. Add to 150 mL of 1× TAE buffer in a flask
3. Microwave to dissolve agarose (2-3 minutes, with swirling)
4. Allow to cool to ~55°C (warm but comfortable to hold flask)
5. Add 10 μL ethidium bromide (or SYBR Safe) per 150 mL gel
6. Pour into casting tray with comb in place
7. Allow to solidify (20-30 minutes at room temperature)
8. Remove comb carefully
9. Place gel in electrophoresis chamber with 1× TAE running buffer

### Part B: Sample Preparation and Loading (10 minutes)

10. Mix each DNA sample with loading dye:
    - 5 μL DNA + 1 μL 6× loading dye

11. Load samples into wells:
    - Lane 1: Molecular weight marker (5 μL)
    - Lane 2: Sample 1 (6 μL)
    - Lane 3: Sample 2 (6 μL)
    - Lane 4: Sample 3 (6 μL)
    - Lane 5: Sample 4 (6 μL)
    - Lane 6: Sample 5 (6 μL)
    - Lane 7: Empty (control)
    - Lane 8: Molecular weight marker

12. Close gel box, connect electrodes (black = cathode, red = anode)

### Part C: Electrophoresis (30-45 minutes)

13. Run at 80-100 V (5-8 V/cm) until blue dye front is ~2/3 down the gel
14. Turn off power supply
15. Remove gel carefully

### Part D: Visualization (10 minutes)

16. Place gel on UV transilluminator
17. Visualize bands using UV light (302 nm) or blue light (470 nm)
18. Photograph gel with gel documentation system
19. Measure migration distances of marker bands and samples

## Expected Observations

| Lane | Sample | Expected Pattern |
|------|--------|-----------------|
| 1, 8 | 1 kb ladder | Multiple bands at known sizes (0.5, 1, 2, 3, 4, 5, 6, 8, 10 kb) |
| 2 | Genomic DNA | High MW band near well (>20 kb) |
| 3 | PCR product (single) | Single sharp band at expected size |
| 4 | Plasmid DNA | Multiple bands (supercoiled, nicked, linear) |
| 5 | Digested plasmid | Bands at expected restriction fragment sizes |
| 6 | Degraded DNA | Smear from high to low MW |

## Results Table

| Marker Band (bp) | Migration Distance (cm) |
|------------------|------------------------|
| 500 | |
| 1,000 | |
| 2,000 | |
| 3,000 | |
| 4,000 | |
| 5,000 | |
| 6,000 | |
| 8,000 | |
| 10,000 | |

| Sample | Migration Distance | Estimated Size | Quality Assessment |
|--------|-------------------|----------------|-------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Calculations

### Standard Curve Construction
1. Plot **log₁₀(size in bp)** vs. **migration distance (cm)** for marker bands
2. Draw best-fit line (should be linear for most of the range)
3. Use line equation to determine size of unknown bands

**Example:**
- Unknown band migration: 3.5 cm
- From standard curve: log₁₀(size) = 3.2
- Size = 10³·² ≈ 1,585 bp

### Gel Percentage Effect
- Higher % agarose → better resolution of small fragments
- Lower % agarose → better resolution of large fragments
- Always use appropriate % for your expected fragment sizes

## Interpretation

1. What does a smear indicate about DNA quality?
2. Why might a plasmid show multiple bands?
3. How does agarose concentration affect resolution?
4. What would happen if you ran the gel at too high a voltage?

## Troubleshooting

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| Bands are fuzzy | Voltage too high; gel too concentrated | Lower voltage; use lower % gel |
| No bands visible | Insufficient EtBr; too little DNA; gel too thick | Add more EtBr; increase DNA; use thinner gel |
| Bands distorted | Uneven gel; wells damaged | Pour gel evenly; load carefully |
| DNA stuck in wells | High MW DNA; incomplete denaturation | Use pulsed-field for very large DNA |
| Bands run crooked | Uneven buffer; gel not level | Ensure even buffer; level gel during casting |
| Bloomed bands | Too much DNA loaded | Load less DNA |

## Post-Lab Questions

1. A DNA sample shows a band at 3.0 kb. What is the estimated size using the standard curve?
2. Why is ethidium bromide added to the gel rather than the running buffer?
3. How would you separate DNA fragments of 500 bp and 600 bp with good resolution?
4. A plasmid preparation shows bands at 3 kb, 6 kb, and 9 kb. What might these represent?
5. What is the effect of increasing voltage on band resolution?

## Viva Questions

1. Why does DNA migrate toward the anode?
2. What is the purpose of loading dye?
3. How does agarose gel differ from polyacrylamide gel?
4. What is the resolution limit of agarose gel electrophoresis?
5. Name two alternatives to ethidium bromide for DNA visualization.

## Expected Answers

1. **3.0 kb** — directly read from the standard curve.
2. **EtBr in gel** allows continuous staining during electrophoresis and eliminates extra staining/destaining steps.
3. **Use 2.0% agarose** — higher percentage provides better resolution for small fragments; run at lower voltage.
4. **3 kb** = supercoiled; **6 kb** = nicked/relaxed circular; **9 kb** = multimer or concatemer.
5. **Increasing voltage** increases migration speed but decreases resolution (bands become fuzzier).

## Instructor Notes

- This is a wet-lab exercise requiring electrophoresis equipment
- Ensure students understand gel safety (EtBr handling)
- Prepare samples in advance: genomic DNA, PCR product, plasmid, digested plasmid, degraded DNA
- Discuss common lab scenarios: checking PCR products, verifying cloning
- Connect to replication: Okazaki fragments could be visualized on denaturing gels

## Related Theory

- [Module 09: Experimental Methods](../MARKDOWN/09-Experimental-Methods.md)
- [Module 10: Data Analysis](../MARKDOWN/10-Data-Analysis-and-Interpretation.md)
