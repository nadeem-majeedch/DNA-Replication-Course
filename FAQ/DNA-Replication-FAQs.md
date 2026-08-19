# DNA Replication — Frequently Asked Questions

**Course: Molecular Biology of DNA Replication**

---

## Beginner FAQs (1-10)

### Q1: What is DNA replication?
**A:** DNA replication is the biological process of duplicating the entire genome before cell division, ensuring each daughter cell receives a complete copy of the genetic information. It is semiconservative — each daughter molecule contains one parental strand and one newly synthesized strand.

### Q2: Why is DNA replication necessary?
**A:** DNA replication is essential because:
- Cells must pass genetic information to daughter cells during division
- Growth, tissue repair, and reproduction all require cell division
- Without accurate replication, mutations accumulate → disease or cell death

### Q3: What does "semiconservative" mean?
**A:** Semiconservative means each daughter DNA molecule contains one strand from the original (parental) molecule and one newly synthesized strand. This was proven by the Meselson-Stahl experiment (1958).

### Q4: Why can't DNA polymerase start synthesis without a primer?
**A:** DNA polymerase can only add nucleotides to a free 3'-OH group. It cannot create the first nucleotide bond de novo. Primase synthesizes a short RNA primer that provides this 3'-OH, allowing DNA polymerase to extend from it.

### Q5: What is the direction of DNA synthesis?
**A:** DNA is **always** synthesized in the 5'→3' direction. This is a universal rule in all organisms. The polymerase reads the template strand 3'→5' while synthesizing the new strand 5'→3'.

### Q6: What are Okazaki fragments?
**A:** Okazaki fragments are short, discontinuously synthesized DNA fragments on the lagging strand. They are named after Reiji and Tuneko Okazaki who discovered them. In E. coli they are 1-2 kb; in humans, 100-200 bp.

### Q7: What is a replication fork?
**A:** A replication fork is the Y-shaped structure formed where the double helix is unwound and new DNA is being synthesized. Two forks form at each origin of replication, moving in opposite directions.

### Q8: What is the difference between leading and lagging strands?
**A:** Both are synthesized 5'→3', but:
- **Leading strand**: Synthesized continuously toward the replication fork
- **lagging strand**: Synthesized discontinuously (as Okazaki fragments) away from the fork

### Q9: Why are there two strands synthesized differently?
**A:** Because DNA is antiparallel (strands run in opposite directions) and DNA polymerase can only synthesize 5'→3', one strand can be made continuously toward the fork, while the other must be made in short pieces away from the fork.

### Q10: What is the error rate of DNA replication?
**A:** After all three layers of error correction (base selection + proofreading + mismatch repair), the error rate is approximately **one mistake per 10⁹–10¹⁰ nucleotides** incorporated.

---

## Conceptual FAQs (11-20)

### Q11: What are the three layers of replication fidelity?
**A:** 
1. **Base selection** by polymerase (error rate ~10⁻⁵)
2. **Proofreading** by 3'→5' exonuclease (improves to ~10⁻⁷)
3. **Mismatch repair** after replication (final ~10⁻⁹–10⁻¹⁰)

### Q12: Why is the 5'→3' directionality important?
**A:** It determines:
- Why the lagging strand is discontinuous
- Why primers are needed
- Why Okazaki fragments exist
- Why replication is asymmetric at the fork
- The mechanism of chain termination (PCR, sequencing)

### Q13: What is the sliding clamp and why is it important?
**A:** The sliding clamp is a ring-shaped protein (β₂ in bacteria, PCNA in eukaryotes) that encircles DNA and tethers the polymerase to the template. It increases processivity from ~20 nt to >50,000 nt, making rapid genome replication possible.

### Q14: What is a topoisomerase and why is it needed?
**A:** Topoisomerases relieve torsional stress (supercoiling) that accumulates ahead of the replication fork as helicase unwinds DNA. Without them, fork progression stops and DNA can break.

### Q15: What is the difference between DNA gyrase and topoisomerase I?
**A:** DNA gyrase (Type II) cuts both strands and introduces negative supercoils (unique to bacteria). Topoisomerase I cuts one strand and allows rotation to relax supercoils. Both are needed for replication.

### Q16: Why do eukaryotes need multiple origins of replication?
**A:** The human genome (3.2 × 10⁹ bp) is ~700× larger than E. coli's. With a single origin, replication would take weeks. Multiple origins (~30,000-50,000) allow the entire genome to be replicated in ~6-8 hours.

### Q17: What is replication licensing?
**A:** Licensing is the mechanism that ensures each origin fires exactly once per cell cycle. It involves assembling a pre-replication complex (pre-RC) in G1 phase when CDK activity is low, then activating origins in S phase when CDK activity rises.

### Q18: Why can't origins fire twice in the same cell cycle?
**A:** High CDK activity in S/G2 phase simultaneously:
- Activates licensed origins
- Prevents new origin licensing (by degrading Cdc6, inhibiting Cdt1 with geminin)
This mutual exclusivity ensures no re-replication.

### Q19: What is the end-replication problem?
**A:** Linear chromosomes cannot be fully replicated at their 5' ends because RNA primers at the very end of the lagging strand are removed but cannot be replaced. This causes progressive chromosome shortening with each cell division.

### Q20: How does telomerase solve the end-replication problem?
**A:** Telomerase is a reverse transcriptase that uses its own RNA template (TERC) to extend the 3' overhang of telomeric DNA. This provides additional template for lagging strand synthesis, preventing critical shortening.

---

## Prokaryotic FAQs (21-30)

### Q21: What is oriC?
**A:** oriC is the single origin of replication in E. coli, located at 84.3 minutes on the genetic map. It is 245 bp long and contains DnaA boxes (9-mer repeats) and AT-rich 13-mer repeats.

### Q22: What is the role of DnaA in replication initiation?
**A:** DnaA is the initiator protein. DnaA-ATP binds cooperatively to DnaA boxes in oriC, inducing melting of the AT-rich region. This creates the initial replication bubble.

### Q23: How does DnaB helicase work?
**A:** DnaB is a hexameric ring helicase that encircles single-stranded DNA and uses ATP hydrolysis to unwind the double helix in the 5'→3' direction on the strand it encircles. Two DnaB hexamers move in opposite directions from oriC.

### Q24: Why is DnaC needed if DnaB is the helicase?
**A:** DnaC is a helicase loader that holds DnaB in an inactive state during loading onto single-stranded DNA at the origin. Once DnaB is loaded, DnaC dissociates (ATP-dependent).

### Q25: What is unique about DNA Pol I?
**A:** Pol I is unique among E. coli polymerases because it has **5'→3' exonuclease activity**. This allows it to simultaneously remove RNA primers ahead of the polymerase and fill the gap with DNA (nick translation).

### Q26: Why does E. coli DNA ligase use NAD⁺ instead of ATP?
**A:** This is a fundamental biochemical difference from eukaryotic ligases. The mechanism is similar (adenylation of ligase), but the adenylate donor is NAD⁺ in bacteria vs. ATP in eukaryotes/viruses.

### Q27: What is the Tus/Ter system?
**A:** Tus binds Ter sequences and creates a polar fork barrier. It blocks fork progression in one direction but not the other. Multiple Ter sites arranged as a trap ensure both forks are caught in the termination region.

### Q28: Why is Dam methylation important for mismatch repair?
**A:** In E. coli, Dam methylase methylates GATC sequences. After replication, the parental strand is methylated but the new strand is temporarily unmethylated (hemimethylated). MutH nicks the unmethylated strand, directing repair to the new strand.

### Q29: What happens when replication forks converge in E. coli?
**A:** Forks converge in the Ter region → replisomes disassemble → daughter chromosomes are catenated (interlinked) → Topoisomerase IV decatenates them → two separate circular chromosomes.

### Q30: How fast does E. coli replicate its genome?
**A:** E. coli replicates its 4.6 × 10⁶ bp genome in ~40 minutes with two bidirectional forks moving at ~1,000 nt/second each.

---

## Eukaryotic FAQs (31-40)

### Q31: What is the ORC complex?
**A:** ORC (Origin Recognition Complex) is a six-subunit (Orc1-6) AAA+ ATPase that binds replication origins and recruits all subsequent initiation factors (Cdc6, Cdt1, MCM2-7).

### Q32: What is the CMG helicase?
**A:** CMG = Cdc45-MCM2-7-GINS. It is the active replicative helicase in eukaryotes. MCM2-7 is loaded inactive at origins; Cdc45 and GINS binding activates it in S phase (requires CDK + DDK phosphorylation).

### Q33: Why do eukaryotes have three different replicative polymerases?
**A:** Different polymerases have specialized roles:
- **Pol α/primase**: Initiates synthesis (makes RNA-DNA primer)
- **Pol ε**: Leading strand synthesis (high processivity)
- **Pol δ**: Lagging strand synthesis and repair

### Q34: What is polymerase switching?
**A:** Polymerase switching is the transition from Pol α/primase (which initiates synthesis) to Pol ε or Pol δ (which perform processive elongation). It occurs after RFC loads PCNA at the primer-template junction.

### Q35: How does eukaryotic mismatch repair differ from E. coli?
**A:** Eukaryotes lack MutH and methylation-based strand discrimination. Instead:
- Strand nicks (Okazaki fragment ends) mark the new strand
- PCNA orientation helps direct repair to the new strand
- MSH2-MSH6 (MutSα) and MLH1-PMS2 (MutLα) are the key complexes

### Q36: What is chromatin remodeling during replication?
**A:** Nucleosomes must be disassembled ahead of the fork and reassembled behind it. FACT complex disassembles nucleosomes; CAF-1 and ASF1 deposit new histones; parental histones are recycled to maintain epigenetic marks.

### Q37: What is the difference between early and late replication?
**A:** Euchromatin (active genes) replicates early in S phase; heterochromatin (silent regions) replicates late. Replication timing correlates with gene expression and epigenetic state.

### Q38: How is CMG helicase disassembled at termination?
**A:** When converging forks meet, CMG is ubiquitylated on MCM7 by SCF, then extracted from DNA by p97/Cdc48 AAA+ ATPase. This is essential to clear the template for other processes.

### Q39: What is the role of PCNA in mismatch repair?
**A:** PCNA helps direct mismatch repair to the new strand. RFC loads PCNA in an oriented manner; MutLα recognizes PCNA orientation to nick the correct (new) strand.

### Q40: How do eukaryotic cells prevent re-replication?
**A:** Through multiple mechanisms:
- CDK phosphorylates Cdc6 → degraded by SCF
- Geminin inhibits Cdt1
- CDK phosphorylates ORC → reduced activity
- High CDK in S/G2 prevents new MCM loading
- Low CDK in G1 allows licensing

---

## Experimental FAQs (41-45)

### Q41: How are replication origins mapped genome-wide?
**A:** Methods include:
- **Repli-seq**: FACS-sort early/late S-phase cells → sequence
- **Okazaki fragment sequencing**: Map origin positions
- **ChIP-seq for ORC/MCM**: Identify licensed origins
- **DNA combing**: Single-molecule fork analysis

### Q42: How does DNA fiber analysis work?
**A:** Cells are pulsed with nucleotide analogs (IdU then CldU). DNA is extracted, stretched on glass coverslips, and immunostained. Track lengths indicate fork speed; patterns indicate origin usage and fork dynamics.

### Q43: What is the difference between in vitro and in vivo replication studies?
**A:** **In vitro** (purified components in test tube): Mechanistic detail, controlled conditions, no cellular context. **In vivo** (in living cells): Physiological relevance, complex regulation, harder to manipulate.

### Q44: How is PCR different from cellular replication?
**A:** PCR uses heat denaturation (no helicase), synthetic DNA primers (no primase), thermostable polymerase (Taq), no sliding clamp, and amplifies specific targets. It lacks the complexity and regulation of cellular replication.

### Q45: How can you measure Okazaki fragment size?
**A:** 
- Label nascent DNA with [α-³²P]dNTPs
- Denature DNA (alkaline conditions)
- Run on denaturing alkaline gel
- Radioactive signal reveals fragment sizes

---

## Troubleshooting FAQs (46-48)

### Q46: My PCR isn't working. What could be wrong?
**A:** Common causes:
1. No template DNA or insufficient template
2. Incorrect primer design (wrong Tm, wrong orientation)
3. Missing reagents (Taq, dNTPs, Mg²⁺)
4. Incorrect cycling parameters (annealing temperature too high/low)
5. Inhibitors in template preparation

### Q47: Why are my DNA fiber tracks asymmetric?
**A:** Asymmetric tracks can indicate:
- One fork stalled or collapsed
- Dormant origin (only one fork active)
- Drug effect on one fork direction
- Measurement artifact (improper stretching)

### Q48: My gel shows a smear instead of bands. What happened?
**A:** Possible causes:
- DNA degradation (nuclease contamination)
- Too much DNA loaded
- Voltage too high
- Gel concentration inappropriate for fragment size
- DNA is RNA-contaminated

---

## Exam FAQs (49-52)

### Q49: What is the most important concept in DNA replication?
**A:** The **directionality rule**: DNA is always synthesized 5'→3'. This single concept explains the lagging strand, Okazaki fragments, primers, and the asymmetry of the replication fork.

### Q50: What are the most commonly tested topics?
**A:** 
1. Semiconservative model (Meselson-Stahl)
2. Leading vs. lagging strand
3. Okazaki fragment processing
4. Telomere biology and the end-replication problem
5. Comparison of prokaryotic and eukaryotic replication
6. Replication fidelity (three layers)
7. Replication licensing and cell-cycle regulation

### Q51: How should I approach a comparison question?
**A:** Use a structured table approach:
- Identify 8-10 features to compare
- Be specific (not "similar" but exactly how)
- Note where comparison is approximate (not exact)
- Give examples where possible
- Address evolution/consequences

### Q52: How do I explain a mechanism in an exam?
**A:** Use the structured format:
1. **What** happens (the process)
2. **Which protein** performs it
3. **Why** it is necessary (biological significance)
4. **What happens if** it fails (mutant/clinical consequence)

---

## Clinical/Application FAQs (53-57)

### Q53: How do antibiotics target bacterial replication?
**A:** Fluoroquinolones (ciprofloxacin) trap DNA gyrase-DNA complexes → lethal DSBs. Rifampicin blocks RNA polymerase → affects replication initiation. Trimethoprim reduces dNTP pools → slows replication.

### Q54: How do cancer cells maintain their telomeres?
**A:** 85-90% reactivate telomerase (often through TERT promoter mutations). 10-15% use ALT (Alternative Lengthening of Telomeres) via homologous recombination between telomeric sequences.

### Q55: What is Lynch syndrome?
**A:** Lynch syndrome (HNPCC) is caused by germline mutations in mismatch repair genes (MLH1, MSH2, MSH6, PMS2). It leads to microsatellite instability and dramatically increased risk of colorectal, endometrial, and other cancers.

### Q56: How do PARP inhibitors work in cancer therapy?
**A:** PARP inhibitors exploit synthetic lethality. In BRCA1/2-mutant cancers (defective homologous recombination), PARP inhibition prevents single-strand break repair → replication fork collapse → DSBs that cannot be repaired → cell death.

### Q57: What is the relationship between replication stress and cancer?
**A:** Oncogene activation causes excessive origin firing, replication-transcription conflicts, and fork stalling → replication stress → genome instability → cancer progression. Replication stress is considered a hallmark of early cancer development.

---

## Advanced FAQs (58-62)

### Q58: What is fork reversal and when does it occur?
**A:** Fork reversal (regression) is when the newly synthesized strands anneal to each other, forming a "chicken foot" structure. It occurs when forks encounter obstacles (damage, transcription complexes). It allows template switching or lesion bypass but risks genome instability if not properly managed.

### Q59: What are R-loops and why are they dangerous?
**A:** R-loops are three-stranded structures where RNA hybridizes to the template DNA, displacing the non-template strand as ssDNA. They form at highly transcribed genes and can block replication forks, cause DNA breaks, and promote genome instability.

### Q60: What is the ATR-CHK1 checkpoint pathway?
**A:** When replication forks stall, ssDNA accumulates → RPA binds → ATRIP recruits ATR kinase → ATR phosphorylates CHK1 → CHK1:
- Stabilizes stalled forks
- Inhibits new origin firing
- Delays S/M transition
- Activates DNA repair

### Q61: How does translesion synthesis differ from template switching?
**A:** **Translesion synthesis**: Specialized low-fidelity polymerases bypass lesions directly → error-prone. **Template switching**: Uses sister chromatid as template to bypass lesion → error-free. Both are activated by PCNA ubiquitylation (mono- vs. poly-ubiquitylation).

### Q62: What are common fragile sites?
**A:** Common fragile sites are large genomic regions prone to breakage under replication stress. They typically contain very large genes (>1 Mb) that are difficult to replicate. They are frequent breakpoints in cancer chromosomes and represent regions where replication and transcription frequently collide.
