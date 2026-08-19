# Lab 04: PCR and DNA Amplification

**← [Previous: Lab 03](Lab-03-Gel-Electrophoresis.md) | [Next: Lab 05 →](Lab-05-Replication-Data-Analysis.md)**

---

## Experiment Title
Polymerase Chain Reaction (PCR) as an Experimental Model of DNA Synthesis

## ⚠️ Important Distinction: PCR ≠ Cellular DNA Replication

| Feature | Cellular Replication | PCR |
|---------|---------------------|-----|
| Unwinding | Helicase enzyme | Heat denaturation (95°C) |
| Priming | RNA primers (primase) | DNA primers (synthetic) |
| Polymerase | Pol III/Pol ε/δ (37°C) | Taq/Pfu (optimal 72°C) |
| Processivity | >50,000 nt (with clamp) | ~1,000-5,000 nt (no clamp) |
| Proofreading | Yes (3'→5' exonuclease) | Taq: No; Pfu: Yes |
| Okazaki fragments | Yes (lagging strand) | No (linear amplification) |
| Sliding clamp | Yes (β/PCNA) | No |
| Regulation | Highly regulated | None (in vitro) |
| Speed | ~50-1000 nt/s | ~1,000 nt/min |
| Starting material | Whole genome | Specific target sequence |
| Cycles | Once per cell cycle | 25-40 cycles |

> **Key point**: PCR conceptually mimics DNA replication (uses primers, dNTPs, polymerase, template) but uses different strategies for unwinding and lacks the complexity of the cellular replisome.

## Learning Objectives
1. Understand the principles of PCR
2. Design and perform a PCR experiment
3. Analyze PCR products by agarose gel electrophoresis
4. Compare PCR with cellular DNA replication
5. Understand applications of PCR in molecular biology

## Background Theory

### PCR Principle
PCR amplifies a specific DNA sequence through repeated cycles of:
1. **Denaturation** (94-98°C): Separates double-stranded DNA
2. **Annealing** (50-65°C): Primers bind to complementary sequences
3. **Extension** (72°C): Taq polymerase synthesizes new DNA

### Exponential Amplification
After *n* cycles, product = 2ⁿ copies (theoretically)
- 30 cycles → ~10⁹ copies (1 billion)
- The target sequence is amplified exponentially while flanking sequences are amplified linearly

### Components
| Component | Role | Typical Amount |
|-----------|------|----------------|
| Template DNA | Source DNA containing target | 1-100 ng |
| Forward primer | Binds one strand, provides 3'-OH | 0.2-1 μM |
| Reverse primer | Binds other strand, provides 3'-OH | 0.2-1 μM |
| dNTPs (dATP, dTTP, dGTP, dCTP) | Building blocks | 200 μM each |
| DNA polymerase (Taq) | Synthesizes DNA | 1-2.5 U |
| MgCl₂ | Cofactor for polymerase | 1.5-2.5 mM |
| Buffer | Provides optimal pH and salts | 1× |
| Nuclease-free water | Volume to 50 μL | As needed |

## Materials

| Material | Quantity per reaction | Notes |
|----------|----------------------|-------|
| Template DNA (λ phage or human) | 1 μL (10 ng) | Target: specific region |
| Forward primer (20 μM) | 1 μL | Specific to target |
| Reverse primer (20 μM) | 1 μL | Specific to target |
| 10× PCR buffer | 5 μL | With MgCl₂ |
| dNTP mix (10 mM each) | 1 μL | |
| Taq DNA polymerase (5 U/μL) | 0.25 μL | |
| Nuclease-free water | 40.75 μL | |

## Equipment
- Thermal cycler (PCR machine)
- Micropipettes (P10, P20, P200)
- PCR tubes or 96-well plate
- Agarose gel electrophoresis system
- UV transilluminator

## Safety Considerations
⚠️ **Ethidium bromide** — mutagen (use gloves, handle carefully)
⚠️ **UV light** — use protective goggles
⚠️ **Hot surfaces** — thermal cycler reaches 98°C
⚠️ **Biological hazard** — follow institutional guidelines for DNA handling
⚠️ Wear gloves and lab coat throughout

## Experimental Principle

PCR uses thermocycling to achieve exponential amplification of a target sequence. Each cycle doubles the amount of target DNA. The reaction is specific due to primer design (primers only bind to complementary sequences in the template).

## Step-by-Step Procedure

### Part A: PCR Setup (15 minutes)

1. Label PCR tubes: Positive, Negative, Marker control
2. Prepare master mix (for 3 reactions):
   - 15 μL 10× buffer
   - 3 μL dNTP mix
   - 3 μL Forward primer
   - 3 μL Reverse primer
   - 0.75 μL Taq polymerase
   - 122.25 μL water
   - Total: 147 μL master mix

3. Aliquot 49 μL master mix into each tube
4. Add 1 μL template DNA to positive reaction tube
5. Add 1 μL water to negative control tube
6. Vortex briefly and spin down

### Part B: PCR Cycling (90 minutes)

7. Place tubes in thermal cycler

| Step | Temperature | Time | Purpose | Cycles |
|------|-------------|------|---------|--------|
| Initial denaturation | 95°C | 3 min | Complete denaturation | 1 |
| Denaturation | 95°C | 30 sec | Separate strands | 30 |
| Annealing | 55°C | 30 sec | Primers bind | 30 |
| Extension | 72°C | 1 min | Taq polymerase extends | 30 |
| Final extension | 72°C | 5 min | Complete synthesis | 1 |
| Hold | 4°C | ∞ | Storage | — |

### Part C: Analysis by Gel Electrophoresis (30 minutes)

8. Prepare 1.5% agarose gel (see Lab 03)
9. Mix 5 μL PCR product + 1 μL loading dye
10. Load samples: Ladder, Positive, Negative
11. Run at 100 V for 25-30 minutes
12. Visualize under UV light
13. Photograph gel

## Expected Observations

| Lane | Expected Result |
|------|-----------------|
| Ladder | Multiple bands at known sizes |
| Positive | Single sharp band at expected product size |
| Negative | No band (no contamination) |
| Positive control | Band at expected size |

## Results Table

| Lane | Sample | Expected Size | Observed Size | Band Intensity | Interpretation |
|------|--------|---------------|---------------|----------------|----------------|
| 1 | Ladder | Multiple | | | Reference |
| 2 | Positive | | | | |
| 3 | Negative | None | | | Clean/no contamination |
| 4 | | | | | |

## Calculations

### Amplification Efficiency

For 30 cycles with 100% efficiency:
- Final copies = Initial copies × 2³⁰
- = 10 ng × (10⁹ / 660 × 3.2 × 10⁶) × 2³⁰
- ≈ millions of copies

### Annealing Temperature

Tm = 2(A+T) + 4(G+C) °C (for primers <20 nt)

**Example:** Primer sequence: 5'-GCGATCGATCGATCGATCG-3'
- A+T = 4; G+C = 14
- Tm = 2(4) + 4(14) = 8 + 56 = 64°C
- Annealing temperature: Tm - 5°C = 59°C

## Interpretation

1. Why is a negative control important?
2. What would happen if you forgot to add Taq polymerase?
3. How does the annealing temperature affect specificity?
4. Compare the mechanism of PCR with cellular DNA replication.

## Troubleshooting

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| No band in positive | Insufficient template; primer design issue | Increase template; redesign primers |
| Band in negative control | Contamination | Use fresh reagents; UV-treat workspace |
| Multiple bands | Non-specific annealing | Increase annealing temperature |
| Smear | Over-cycling; non-specific | Reduce cycles; optimize annealing temp |
| Weak band | Low template; old Taq | Increase template; use fresh Taq |
| Band at wrong size | Primer dimers; non-specific | Check primer design; optimize conditions |

## Post-Lab Questions

1. A researcher gets no PCR product. List 5 possible reasons.
2. Why is 72°C the optimal extension temperature for Taq polymerase?
3. How does Pfu polymerase differ from Taq? When would you choose Pfu?
4. Calculate the theoretical yield after 25 cycles starting from 10 molecules.
5. Design a simple PCR experiment to detect a specific gene.

## Viva Questions

1. What temperature is used for denaturation and why?
2. Why are two primers needed for PCR?
3. What determines the size of the PCR product?
4. How does the annealing temperature affect PCR specificity?
5. Why is Taq polymerase used instead of E. coli DNA polymerase?

## Expected Answers

1. **Possible causes**: No template DNA, incorrect primers, missing Taq, insufficient cycles, inhibitors in sample, incorrect annealing temperature.
2. **72°C** is the optimal temperature for Taq polymerase activity (isolated from *Thermus aquaticus*, a thermophilic bacterium).
3. **Pfu has proofreading** (3'→5' exonuclease) but is slower; use Pfu when high fidelity is needed (cloning, sequencing).
4. **10 × 2²⁵ = 10 × 33,554,432 ≈ 3.36 × 10⁸ copies**.
5. **Design primers flanking the target gene**, choose annealing temperature based on Tm, run PCR, analyze by gel electrophoresis.

## Instructor Notes

- This is a wet-lab exercise requiring a thermal cycler
- Use a simple, well-characterized target (e.g., human Alu element, λ phage gene)
- Prepare reagents in advance; keep Taq on ice
- Discuss PCR optimization (annealing temperature, Mg²⁺ concentration)
- Emphasize the distinction between PCR and cellular replication
- Connect to Module 03 (prokaryotic replication) and Module 04 (eukaryotic replication)

## Related Theory

- [Module 03: Prokaryotic Replication](../MARKDOWN/03-Prokaryotic-DNA-Replication.md)
- [Module 04: Eukaryotic Replication](../MARKDOWN/04-Eukaryotic-DNA-Replication.md)
- [Module 09: Experimental Methods](../MARKDOWN/09-Experimental-Methods.md)
- [Module 11: Clinical Applications](../MARKDOWN/11-Clinical-and-Biotechnology-Applications.md)
