# DNA Replication — Quick Reference Cheat Sheet

**Course: Molecular Biology of DNA Replication**

---

## Essential Terminology

| Term | Definition |
|------|-----------|
| **Semiconservative** | Each daughter molecule = 1 old strand + 1 new strand |
| **Origin (ori)** | DNA sequence where replication initiates |
| **Replication fork** | Y-shaped structure where DNA is unwound and synthesized |
| **Leading strand** | Synthesized continuously toward the fork (5'→3') |
| **Lagging strand** | Synthesized discontinuously away from the fork (5'→3') |
| **Okazaki fragments** | Short DNA fragments on the lagging strand |
| **Processivity** | Nucleotides added before polymerase dissociates |
| **Primer** | Short RNA/DNA that provides free 3'-OH for polymerase |
| **Replisome** | Complete replication machinery at the fork |
| **Telomere** | Protective structure at chromosome ends |
| **Licensing** | Assembly of pre-RC to allow origin firing |

---

## Replication Proteins — Quick Function Table

### E. coli (Prokaryotic)

| Protein | Gene | Function |
|---------|------|----------|
| **DnaA** | dnaA | Initiator; binds oriC |
| **DnaB** | dnaB | Helicase (unwinds DNA) |
| **DnaC** | dnaC | Helicase loader |
| **DnaG** | dnaG | Primase (makes RNA primer) |
| **Pol III** | dnaE/Q/X | Main replicative polymerase |
| **ε subunit** | dnaQ | Proofreading (3'→5' exonuclease) |
| **β clamp** | dnaN | Processivity factor (dimer) |
| **γ complex** | dnaX | Clamp loader |
| **SSB** | ssb | Single-strand binding protein |
| **Gyrase** | gyrA/B | Type II topoisomerase (introduces negative supercoils) |
| **Topo I** | topA | Type I topoisomerase |
| **Topo IV** | parC/E | Decatenation |
| **Pol I** | polA | Primer removal + gap filling |
| **Ligase** | ligA | Seals nicks (NAD⁺-dependent) |
| **MutS/MutL/MutH** | mutS/L/H | Mismatch repair |

### Human (Eukaryotic)

| Protein | Function |
|---------|----------|
| **ORC (Orc1-6)** | Origin recognition complex |
| **Cdc6** | Recruits MCM; ATPase |
| **Cdt1** | Loads MCM2-7 |
| **MCM2-7** | Replicative helicase (inactive until activated) |
| **Cdc45** | CMG helicase component |
| **GINS** | CMG helicase component |
| **RPA** | Single-strand binding protein |
| **Pol α/primase** | Initiates synthesis; makes RNA-DNA primer |
| **Pol ε** | Leading strand synthesis |
| **Pol δ** | Lagging strand synthesis + repair |
| **PCNA** | Sliding clamp (homotrimer) |
| **RFC** | Clamp loader |
| **RNase H2** | Removes RNA primers |
| **FEN1** | Flap endonuclease; primer processing |
| **DNA Ligase I** | Seals nicks (ATP-dependent) |
| **Topo I** | Relaxes positive supercoils |
| **Topo IIα** | Relieves supercoiling + decatenation |
| **MSH2-6/MLH1-PMS2** | Mismatch repair |
| **ATR/CHK1** | Replication checkpoint |
| **TERT/TERC** | Telomerase (telomere maintenance) |
| **Shelterin** | Telomere protection complex |
| **Geminin** | Inhibits Cdt1 (prevents re-replication) |

---

## Replication Sequence — Prokaryotic (E. coli)

```
1. DnaA-ATP binds oriC → AT-rich region melts
2. DnaC loads DnaB helicase (2 hexamers)
3. DnaG primase synthesizes RNA primers
4. Clamp loader loads β sliding clamp
5. Pol III synthesizes DNA:
   • Leading strand: continuous, one primer
   • Lagging strand: Okazaki fragments (1-2 kb), multiple primers
6. Proofreading: ε subunit (3'→5' exonuclease)
7. Pol I: removes RNA primers, fills gaps
8. DNA ligase: seals nicks
9. Gyrase: relieves supercoiling ahead of fork
10. Tus/Ter: termination at Ter region
11. Topo IV: decatenates daughter chromosomes
```

## Replication Sequence — Eukaryotic (Human)

```
G1 PHASE (LICENSING):
1. ORC binds origins
2. Cdc6 + Cdt1 recruited
3. MCM2-7 double hexamers loaded → Origin licensed

S PHASE (ACTIVATION):
4. CDK + DDK phosphorylate MCM
5. Cdc45 + GINS loaded → CMG helicase active
6. CMG unwinds DNA
7. RPA binds ssDNA
8. Pol α/primase makes RNA-DNA primer
9. RFC loads PCNA
10. Polymerase switching: Pol α → Pol ε (leading) or Pol δ (lagging)
11. Leading: Pol ε continuous; Lagging: Pol δ, Okazaki fragments (100-200 nt)

PROCESSING:
12. RNase H2 removes RNA primers
13. FEN1 removes flaps
14. Pol δ fills gaps
15. DNA Ligase I seals nicks
16. CAF-1 reassembles nucleosomes

TERMINATION:
17. Forks converge → CMG disassembled (p97/Cdc48)
18. Gaps filled → ligation

TELOMERES:
19. Telomerase extends 3' overhang (TERT + TERC)
20. Complementary strand filled by Pol α/Pol δ
```

---

## Leading vs. Lagging Strand

| Feature | Leading Strand | Lagging Strand |
|---------|---------------|----------------|
| Direction | 5'→3' toward fork | 5'→3' away from fork |
| Synthesis | Continuous | Discontinuous |
| Primers | One | Multiple (per Okazaki fragment) |
| Okazaki fragments | No | Yes |
| Speed | Equal to fork speed | Equal to fork speed (overall) |
| E. coli polymerase | Pol III | Pol III (with Pol I for processing) |
| Human polymerase | Pol ε | Pol δ (with Pol α for priming) |

---

## Okazaki Fragment Processing

| Step | E. coli | Eukaryotes |
|------|---------|------------|
| Fragment size | 1,000–2,000 nt | 100–200 nt |
| Primer removal | Pol I (5'→3' exo) | RNase H2 + FEN1 |
| Gap filling | Pol I | Pol δ |
| Ligation | Ligase (NAD⁺) | Ligase I (ATP) |

---

## Major Differences: Prokaryotes vs. Eukaryotes

| Feature | Prokaryotes | Eukaryotes |
|---------|-------------|------------|
| Genome | Circular, 4.6 Mb | Linear, 3.2 Gb |
| Origins | 1 (oriC) | 30,000-50,000 |
| Helicase | DnaB (3'→5') | CMG (5'→3') |
| Sliding clamp | β₂ (dimer) | PCNA (trimer) |
| Leading Pol | Pol III | Pol ε |
| Lagging Pol | Pol III | Pol δ |
| Primase | DnaG | Pol α/primase |
| Okazaki size | 1-2 kb | 100-200 bp |
| Fork speed | 1,000 nt/s | 50 nt/s |
| Telomeres | No | Yes |
| Chromatin | No (nucleoid) | Yes (nucleosomes) |
| Licensing | No | Pre-RC (ORC/Cdc6/Cdt1/MCM) |
| MMR strand discrimination | Dam methylation | Strand nicks/PCNA |
| Termination | Tus/Ter | Fork convergence |

---

## Important Polymerases

| Polymerase | Direction | Proofreading | Function |
|-----------|-----------|-------------|----------|
| E. coli Pol I | 5'→3' | Yes (3'→5') | Primer removal, repair |
| E. coli Pol III | 5'→3' | Yes (ε subunit) | Main replication |
| Human Pol α | 5'→3' | **No** | Primer synthesis |
| Human Pol δ | 5'→3' | Yes | Lagging strand, repair |
| Human Pol ε | 5'→3' | Yes | Leading strand |
| Human Pol γ | 5'→3' | Yes | Mitochondrial DNA |

---

## Telomere Quick Facts

- **Sequence**: TTAGGG (human), repeated 2,000-3,000 times
- **Length**: 5-15 kb at birth; shortens ~50-200 bp/division
- **Enzyme**: Telomerase = TERT (protein) + TERC (RNA template)
- **Template in TERC**: 3'-CAAUCCCAAUC-5'
- **Shelterin**: TRF1, TRF2, POT1, TIN2, TPP1, RAP1
- **Cancer**: 85-90% reactivate telomerase; 10-15% use ALT
- **Aging**: Short telomeres → senescence (Hayflick limit ~50-60 divisions)

---

## Checkpoints

| Checkpoint | Sensor | Effector | Trigger |
|-----------|--------|----------|---------|
| **ATR-CHK1** | ATRIP | CHK1 | ssDNA at stalled forks |
| **ATM-CHK2** | MRN | CHK2 | DSBs |
| **Intra-S** | ATR | CHK1 | Replication stress |
| **G2/M** | ATM/ATR | CHK1/CHK2 | Unreplicated DNA, damage |
| **Spindle** | Mad2 | — | Unattached kinetochores |

---

## Important Exam Facts

1. DNA is **always** synthesized 5'→3' (NO exceptions)
2. **Both** strands are synthesized 5'→3' (lagging strand = Okazaki fragments)
3. DNA polymerase **cannot** start synthesis without a primer
4. E. coli ligase uses **NAD⁺**; eukaryotic ligase uses **ATP**
5. The sliding clamp increases processivity from ~20 to >50,000 nt
6. E. coli has **one origin** (oriC); humans have **~30,000-50,000**
7. Human Okazaki fragments: **100-200 nt**; E. coli: **1-2 kb**
8. Telomerase is a **reverse transcriptase** (uses RNA template)
9. **Fluoroquinolones** target DNA gyrase (bacteria-specific)
10. **Lynch syndrome** = defective mismatch repair → MSI
11. Proofreading improves fidelity **100-fold** (10⁻⁵ → 10⁻⁷)
12. MMR improves fidelity another **100-1000-fold** (10⁻⁷ → 10⁻⁹–10⁻¹⁰)
13. **Licensing** (G1) and **firing** (S) are mutually exclusive (CDK)
14. **PCNA** is a **trimer**; **β clamp** is a **dimer**
15. Fork speed: E. coli ~1,000 nt/s; Human ~50 nt/s

---

## Common Mistakes to Avoid

| Mistake | Correction |
|---------|-----------|
| "Lagging strand is synthesized 3'→5'" | Both strands are 5'→3' |
| "DNA polymerase starts from scratch" | Needs a primer (3'-OH) |
| "Okazaki fragments are the same size in all organisms" | E. coli: 1-2 kb; Human: 100-200 bp |
| "Proofreading is the main fidelity mechanism" | All three layers contribute equally important |
| "Telomerase is active in all cells" | Inactive in most somatic cells |
| "Both strands need the same number of primers" | Leading: 1 primer; Lagging: many |
| "Replication and transcription use the same polymerase" | Completely different polymerases |
| "PCR is the same as cellular replication" | PCR uses heat denaturation, not helicase |
