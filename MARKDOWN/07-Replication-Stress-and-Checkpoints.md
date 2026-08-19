# Module 07: Replication Stress and Checkpoints

**← [Previous: Telomeres and Telomerase](06-Telomeres-and-Telomerase.md) | [Next: Comparison →](08-Prokaryote-vs-Eukaryote.md)**

---

## Learning Objectives

1. Define replication stress and identify its causes
2. Explain replication fork stalling and recovery mechanisms
3. Describe the ATR-CHK1 checkpoint pathway
4. Explain fork reversal and restart
5. Describe the relationship between replication stress and genome instability

---

## 1. What is Replication Stress?

### Concept

**Replication stress** (also called replication fork stress) is any condition that slows or blocks replication fork progression, leading to accumulation of stalled forks and abnormal DNA structures.

### Why It Matters

Replication stress is a major cause of:
- **Genome instability** — the hallmark of cancer
- **Chromosome rearrangements** — translocations, deletions, amplifications
- **Common fragile sites** — regions prone to breakage during replication
- **Cancer development** — oncogene-induced replication stress drives tumorigenesis

### Causes of Replication Stress

| Cause | Mechanism | Example |
|-------|-----------|---------|
| **DNA damage** | Lesions block polymerase progression | UV photoproducts, oxidative lesions |
| **Nucleotide depletion** | Insufficient dNTPs | Hydroxyurea treatment, RNR deficiency |
| **Replication-transcription conflicts** | RNA polymerase blocks fork progression | Highly transcribed genes |
| **R-loop accumulation** | RNA:DNA hybrids stall forks | Transcription-replication conflicts |
| **Secondary structures** | G-quadruplexes, triplex DNA | GC-rich regions |
| **Common fragile sites** | Difficult-to-replicate regions | Large early-replicating genes |
| **Topological stress** | Excessive supercoiling | Topoisomerase inhibition |
| **Oncogene activation** | Aberrant origin firing, dNTP imbalance | Ras, Myc overexpression |

### Replication Fork Stalling

```
REPLICATION FORK STALLING
═════════════════════════

Normal fork progression:
    → Fork moves smoothly at 50 nt/s
    
Stalled fork:
    → Fork encounters obstacle (damage, structure, conflict)
    → Fork stops
    → ssDNA accumulates (exposed template)
    → RPA coats ssDNA
    → ATR checkpoint activated
    
If not resolved:
    → Fork collapse
    → Double-strand break
    → Chromosome rearrangement
    → Cell death or mutagenesis
```

---

## 2. Fork Reversal and Restart

### Concept

When a replication fork stalls, it can undergo **fork reversal** (also called fork regression) — the newly synthesized strands anneal to each other, forming a "chicken foot" structure.

### Fork Reversal Mechanism

```
FORK REVERSAL
═════════════

Normal stalled fork:
    3'═══════════→5' (lagging template)
    ←═══════════════ (new lagging strand)
    
    5'═══════════→3' (leading template)  
    ←═════════════════ (new leading strand, stopped at lesion)
    
                ✗ (blocked)
    
Fork reversal (chicken foot):
    3'═════════════→5' (lagging template)
    ←═══════════════ (new lagging strand)
                    ╲
                     ╲ (new strands anneal)
                      ╲
    5'═════════════════→3' (leading template)
    ←══════════════════ (new leading strand)
    
    → Creates a structure resembling a 4-way junction
    → Allows template switching or lesion bypass
```

### Fork Restart Pathways

| Pathway | Mechanism | When Used |
|---------|-----------|-----------|
| **Template switching** | New strand uses intact sister chromatid as template | Lesion on template strand |
| **Homologous recombination** | RAD51/BRCA2-mediated strand invasion | DSB at collapsed fork |
| **Repriming** | Primase-Pol α re-primes downstream of lesion | Lesions that block polymerase |
| **Translesion synthesis** | Specialized polymerase bypasses lesion | Small lesions |

---

## 3. The ATR-CHK1 Checkpoint

### Concept

The ATR-CHK1 checkpoint is the primary S-phase checkpoint that responds to replication stress. It stabilizes stalled forks, inhibits new origin firing, and delays mitotic entry.

### Pathway

```
ATR-CHK1 CHECKPOINT PATHWAY
═══════════════════════════

1. STALLING EVENT
   Fork stops → ssDNA exposed → RPA binds

2. SENSOR
   ATRIP binds RPA-coated ssDNA
   → Recruits ATR kinase to stalled fork

3. ACTIVATION
   TopBP1 (from 9-1-1 complex) activates ATR
   → ATR phosphorylates hundreds of substrates

4. SIGNALING
   ATR phosphorylates CHK1
   → CHK1 is the effector kinase

5. EFFECTOR RESPONSES
   ├→ Stabilize stalled forks (prevent collapse)
   ├→ Suppress new origin firing (within same S phase)
   ├→ Delay S/M transition (prevent premature mitosis)
   ├→ Activate DNA repair pathways
   └→ Slow cell-cycle progression

6. RESOLUTION
   When stress resolved:
   → ATR/CHK1 deactivated
   → Forks restart or are repaired
   → Normal S-phase resumes
```

### ATR vs. ATM

| Feature | ATR | ATM |
|---------|-----|-----|
| Primary trigger | ssDNA (replication stress) | DSBs |
| Checkpoint | S-phase | G1/S, G2/M |
| Key substrate | CHK1 | CHK2 |
| Partner | ATRIP | — |
| Yeast homolog | Mec1 | Rad53/Ddc2 |

---

## 4. Common Fragile Sites

### Concept

**Common fragile sites (CFSs)** are specific genomic regions that are particularly susceptible to forming gaps or breaks under replication stress. They are large, early-replicating regions that are difficult to replicate.

### Why They Matter

- CFSs are breakpoints in cancer chromosomes
- Associated with large genes that take long to replicate
- Give insight into genome instability mechanisms
- May explain recurrent chromosomal rearrangements in cancer

### Characteristics

| Feature | Details |
|---------|---------|
| Number | ~89 identified in human genome |
| Gene content | Often very large genes (>1 Mb) |
| Replication timing | Late-replicating (despite early origins) |
| Expression | Many are transcribed → conflict with replication |
| Instability | Gaps/breaks under mild replication stress |
| Cancer relevance | Frequent breakpoints in tumors |

---

## 5. Oncogene-Induced Replication Stress

### Concept

**Oncogene-induced replication stress (OIRS)** is a major driver of genome instability in early cancer development. Oncogene activation creates replication stress through multiple mechanisms.

### Mechanisms

```
ONCOGENE-INDUCED REPLICATION STRESS
═══════════════════════════════════

Oncogene activation (e.g., Ras, Myc, Cyclin E):
    
1. ABERRANT ORIGIN FIRING
   → Excessive CDK activity
   → Fired origins that should be dormant
   → Fork collisions
   → Overwhelmed repair capacity

2. dNTP POOL IMBALANCE
   → Oncogenes upregulate RNR
   → Imbalanced dNTP pools
   → Increased misincorporation
   → Replication fork stalling

3. REPLICATION-TRANSCRIPTION CONFLICTS
   → Oncogene-driven transcription
   → Collisions between forks and RNA polymerases
   → R-loop formation
   → Fork breakage

4. INCOMPLETE LICENSING
   → Rapid S-phase entry
   → Not all origins licensed
   → Forks must travel further
   → More stalling events

Result: Genome instability → Cancer progression
```

### Cancer Evolution

```
CANCER PROGRESSION AND REPLICATION STRESS
════════════════════════════════════════

Normal cell → Oncogene activation → Replication stress
    ↓
Early cancer: Low-level stress, checkpoint response intact
    → Cell death or senescence (tumor suppression)
    ↓
Checkpoint adaptation/bypass:
    → Cells survive despite stress
    → Accumulate mutations
    → genome instability increases
    ↓
Advanced cancer:
    → High replication stress
    → Extensive genome instability
    → Chromosomal rearrangements
    → Drug resistance
    → Metastasis
```

---

## 6. Replication and DNA Damage Response Integration

### Concept

Replication and DNA repair are tightly coupled. Damaged DNA is preferentially repaired during S phase when sister chromatids are available for homologous recombination.

### Key Integration Points

| Pathway | Replication Connection |
|---------|----------------------|
| **Homologous recombination** | Uses sister chromatid as template (only available after replication) |
| **Translesion synthesis** | Specialized polymerases bypass lesions at stalled forks |
| **Template switching** | Uses intact sister chromatid to bypass lesions |
| **Fanconi anemia pathway** | Repairs interstrand crosslinks during replication |

### Fanconi Anemia Pathway

- Repairs interstrand crosslinks (ICLs) that block both replication forks
- Requires coordination of nucleotide excision repair, translesion synthesis, and homologous recombination
- Mutations cause Fanconi anemia (bone marrow failure, cancer predisposition)
- Key proteins: FANCA, FANCB, BRCA2 (FANCD1), RAD51 (FANCR)

---

## 7. Replication Stress as Cancer Biomarker

### Clinical Applications

| Biomarker | Measurement | Clinical Use |
|-----------|-------------|--------------|
| **γH2AX foci** | Immunofluorescence | Marks DSBs from fork collapse |
| **pRPA foci** | Immunofluorescence | Marks ssDNA at stalled forks |
| **53BP1 bodies** | Immunofluorescence | Marks unrepaired DSBs |
| **CIN (chromosomal instability)** | Karyotyping, FISH | Genomic instability marker |
| **CFSE** | CFS expression | Fragile site expression |

### Therapeutic Implications

| Strategy | Mechanism | Examples |
|----------|-----------|---------|
| **Chemosensitization** | Inhibit fork protection | ATR inhibitors (ceralasertib) |
| **Synthetic lethality** | Target checkpoint in deficient cells | ATR inhibitors in BRCA-mutant cancers |
| **Replication stress induction** | Increase stress beyond tolerance | Chk1 inhibitors (prexasertib) |
| **PARP inhibitors** | Block repair at stalled forks | Olaparib in BRCA-mutant cancers |

---

## Quick Check

1. List three causes of replication stress and explain how each causes fork stalling.
2. Describe the fork reversal mechanism and explain why it can be both protective and dangerous.
3. How does the ATR-CHK1 checkpoint prevent genome instability?
4. Explain how oncogene activation leads to replication stress.
5. Why are common fragile sites preferentially expressed in cancer cells?

---

**← [Previous: Telomeres and Telomerase](06-Telomeres-and-Telomerase.md) | [Next: Comparison →](08-Prokaryote-vs-Eukaryote.md)**

*Related Assessment: [MCQs](../ASSESSMENT/MCQs.md) | [Case Studies](../ASSESSMENT/Case-Studies.md)*
*See also: [FAQ](../FAQ/DNA-Replication-FAQs.md) | [Cheat Sheet](../CHEAT-SHEET/DNA-Replication-Cheat-Sheet.md)*
