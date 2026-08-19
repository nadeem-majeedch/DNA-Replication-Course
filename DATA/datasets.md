# DNA Replication Course — Supplementary Datasets

---

## Dataset 1: E. coli oriC Sequence

```
E. coli oriC (245 bp, MG1655 reference):

Position 1-80:
ATCTGGTAAAATTTATTCAGCGAAATTTATCAACTATCGTTAACTATCGTTAACGATTTGAAATGATCG
TCAAAACGATCGTTACATCAACTATCGTTAAT

Position 81-160:
TGATCGTTAACTATCGTTAACGATCCGATCAACGATCATCGAACGATCAACGATCAATTCGATCATCA
ACGATCATCAACGATCGTAACAATCGTCGAA

Position 161-245:
TCAACGATCGTTCAGTTAACTATCGTTAACTATCGTTAACGATTCGATCATCATGCGATCGATCGATCG
ATCGATCGATCGATCGATCGATCG
```

---

## Dataset 2: Human Telomeric Repeats

```
Human telomere sequence (5 repeats of TTAGGG):

5'-TTAGGGTTAGGGTTAGGGTTAGGGTTAGGG-3'
3'-AATCCCAATCCCAATCCCAATCCCAATCCC-5'

Extended telomere (20 repeats):
5'-TTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGG-3'
```

---

## Dataset 3: DnaA Box Consensus Sequence

```
DnaA box consensus: GATCTNTTNTTNCAG

Known DnaA boxes in E. coli oriC:

R1: TTATCCACA     (position 56-64)
R2: TTATCCACA     (position 100-108)  
R3: TTATCCACA     (position 144-152) [lower affinity]
R4: TTATCCACA     (position 188-196)
R5: TTATCCACA     (position 232-240)

Note: R3 has lower affinity for DnaA; 
overcome by cooperative binding to R1, R2, R4, R5
```

---

## Dataset 4: Replication Protein Database

```
Protein: DnaA (E. coli)
Gene: dnaA
Function: Initiator protein; binds oriC
Molecular weight: 52 kDa
Domains: N-terminal (DnaA-N): ATP binding
         C-terminal (DnaA-C): DNA binding (HTH motif)
Conservation: Highly conserved in bacteria

Protein: DnaB (E. coli)
Gene: dnaB  
Function: Replicative helicase (5'→3')
Molecular weight: 300 kDa (hexamer)
Structure: Hexameric ring
ATP requirement: Yes
Processivity: Very high

Protein: Pol III α subunit (E. coli)
Gene: dnaE
Function: DNA polymerase (5'→3' synthesis)
Molecular weight: 130 kDa
Exonuclease: No (uses ε subunit for proofreading)
Processivity: Low alone; >50,000 with β clamp
```

---

## Dataset 5: Simulated Fiber Analysis Data

```
Experiment: DNA fiber analysis, 20 min IdU pulse, 20 min CldU pulse

Wild-type cells:
Fiber  | IdU (μm) | CldU (μm)
1      | 11.2     | 11.5
2      | 10.8     | 11.0
3      | 12.5     | 12.8
4      | 10.5     | 10.8
5      | 11.8     | 12.0
6      | 10.2     | 10.5
7      | 11.5     | 11.8
8      | 12.0     | 12.2
9      | 10.8     | 11.0
10     | 11.0     | 11.2

Drug-treated cells:
Fiber  | IdU (μm) | CldU (μm)
1      | 11.0     | 4.5
2      | 10.5     | 3.8
3      | 11.2     | 4.2
4      | 10.8     | 3.5
5      | 11.5     | 4.0
6      | 10.2     | 3.2
7      | 11.0     | 3.8
8      | 10.8     | 4.1
9      | 11.2     | 3.5
10     | 10.5     | 3.9
```

---

## Dataset 6: Repli-seq Data (Simulated)

```
Chromosome 1 (simulated data):

Position (Mb) | Early-S signal | Late-S signal | Gene density
1.0           | High           | Low           | High
2.0           | High           | Low           | High
3.0           | Low            | High          | Low
4.0           | Low            | High          | Low
5.0           | High           | Low           | High
6.0           | Medium         | Medium        | Medium
7.0           | Low            | High          | Low
8.0           | High           | Low           | High
9.0           | Low            | High          | Low
10.0          | High           | Low           | High
```

---

## Dataset 7: Telomere Length Data

```
Sample data for TRF analysis:

Sample         | Description            | TRF length (kb) | Status
Control-1      | Healthy 20yo           | 12.5            | Normal
Control-2      | Healthy 40yo           | 10.2            | Normal
Control-3      | Healthy 60yo           | 7.8             | Normal
Control-4      | Healthy 80yo           | 5.5             | Normal
Patient-1      | Dyskeratosis congenita | 2.8             | Pathological
Patient-2      | Aplastic anemia        | 4.2             | Low
Cancer-line-1  | HeLa (telomerase+)     | 8.5             | Maintained
Cancer-line-2  | U2OS (ALT+)            | 3-25 (varies)   | Heterogeneous
```

---

## Dataset 8: Okazaki Fragment Size Distribution

```
Cell line data (alkaline gel analysis):

Cell Line A (Normal):
Fragment size (nt) | % of total
50-100            | 8
100-150           | 42
150-200           | 40
200-300           | 8
>300              | 2
Average: 155 nt

Cell Line B (FEN1 mutant):
Fragment size (nt) | % of total
50-100            | 5
100-150           | 12
150-200           | 18
200-300           | 35
>300              | 30
Average: 265 nt

Cell Line C (RNase H mutant):
Fragment size (nt) | % of total
50-100            | 3
100-150           | 15
150-200           | 28
200-300           | 38
>300              | 16
Average: 230 nt
```

---

## Dataset 9: Mismatch Repair Gene Mutations

```
Lynch syndrome mutation database (selected):

Gene    | Mutation        | Type           | Frequency
MLH1    | c.676C>T        | Nonsense       | Common
MLH1    | c.1A>G          | Splice site    | Common
MSH2    | c.942+3A>T      | Splice site    | Common
MSH2    | c.2371C>T       | Missense       | Rare
MSH6    | c.3984_3986del  | Frameshift     | Moderate
PMS2    | c.2186C>G       | Missense       | Rare
```

---

## Dataset 10: DNA Polymerase Comparison

```
Feature comparison table (for bioinformatics analysis):

| Polymerase | Organism | Catalytic activity | Exonuclease | Processivity (alone) | Processivity (with clamp) |
|-----------|---------|-------------------|------------|---------------------|--------------------------|
| Pol III α  | E. coli | 5'→3' pol         | None       | ~10 nt              | >50,000 nt               |
| Pol III ε  | E. coli | 5'→3' pol         | 3'→5' exo  | ~10 nt              | >50,000 nt               |
| Pol I      | E. coli | 5'→3' pol         | 3'→5' exo  | ~15 nt              | ~200 nt                  |
| Pol α      | Human   | 5'→3' pol         | None       | ~10 nt              | ~100 nt                  |
| Pol δ      | Human   | 5'→3' pol         | 3'→5' exo  | ~5 nt               | >5,000 nt                |
| Pol ε      | Human   | 5'→3' pol         | 3'→5' exo  | ~5 nt               | >5,000 nt                |
| Pol γ      | Human   | 5'→3' pol         | 3'→5' exo  | ~200 nt             | ~200 nt                  |
```
