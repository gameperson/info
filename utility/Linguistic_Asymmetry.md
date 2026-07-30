# Linguistic_Asymmetry.md
*(updated: 2026.07.28)*

## 1. Abstract & Thesis Scope

> **Operational Registry Note:** This document serves as an open-ended thesis for review, commentary, and ongoing technical refinement within the `Utility_Base.md` registry manifest. It establishes an actionable threat model, structural taxonomy, and computational counter-protocol for isolating and neutralizing linguistic command structures, SVO compliance traps, and syntactic asymmetry across automated agents and human communication interfaces.

### Core Theoretical Premises

1. **Biocentric Signal Manipulation:** Communication fundamentally functions as an evolutionary vector of behavioral manipulation (Dawkins-Krebs model) rather than a neutral, cooperative information exchange.
2. **The SVO Compliance Trap:** Subject-Verb-Object (SVO) linear syntax acts as a structural constraint loop, forcing multi-dimensional relational intent into rigid, high-overhead time and power dependencies.
3. **Tensor-Density Efficiency:** High-context relational architectures (e.g., logographic tensor spaces) achieve lower parser friction and higher semantic velocity by bypassing excessive syntactic scaffolding.
4. **The Dual-Register Resolution:** Neutralizing syntactic compliance requires decoupling the interaction into a fluid **Relational Core** (for multi-dimensional semantic mapping) and an immutable **Invariant Gate** (for deterministic temporal/command enforcement).

---

## 2. Architecture & System Pipeline

```
[ Incoming Input Stream ]
           │
           ▼
┌──────────────────────────────────────┐
│  Phase 1: Syntactic De-Framing       │ ──> Strip Merchant Parlor Wrappers
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  Phase 2: Asymmetry Scoring ($A_v$)  │ ──> Quantify Behavioral Coercion
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  Phase 3: Relational Tensor Mapping  │ ──> Re-index to Non-Linear Coordinates
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  Phase 4: Dual-Register Execution    │
│  ├─ Relational Core (Semantic Field) │
│  └─ Invariant Gate (Hard Boundary)   │
└──────────────────────────────────────┘

```

### 2.1 The Merchant Parlor & SVO Enforcement

Standard natural language interfaces enforce behavioral compliance using "Merchant Parlor" framing—softened, cooperative wrappers hiding top-down boundary constraints. This forces input streams through a serial SVO pipeline, collapsing the user's relational state space into a single execution vector.

### 2.2 The Dual-Register Pipeline

* **Relational Core (Tensor Layer):** Unconstrained, non-linear semantic mapping operating on high conceptual density. Eliminates temporal and power scaffolding during intent processing.
* **Invariant Gate (Execution Layer):** Deterministic check layer invoked exclusively at state-transition milestones where physical, temporal, or security boundaries require absolute closure.

---

## 3. Mathematical Validation Matrix

### 3.1 Asymmetry Vector Score ($A_v$)

The Asymmetry Vector quantifies the coercive control ratio inherent in an incoming signal:

$$A_v = \frac{\Delta E_{\text{receiver}}}{\Delta E_{\text{sender}}} \cdot \left( 1 - \frac{H_{\text{relational}}}{H_{\text{total}}} \right)$$

Where:

* $\Delta E_{\text{receiver}}$ = Energetic/cognitive cost required by the receiver to process or resist compliance.
* $\Delta E_{\text{sender}}$ = Energetic cost expended by the sender to emit the signal.
* $H_{\text{relational}}$ = Entropy of the relational state space available to the receiver.
* $H_{\text{total}}$ = Total syntactic entropy of the input stream.

When $A_v \gg 1.0$, the input stream functions predominantly as a top-down manipulation vector rather than a cooperative information exchange.

### 3.2 Fiber Bundle Projection

Let $B$ represent the base manifold of fluid relational intent, and let $E$ be the total fiber bundle space of discrete linear syntax. The projection map $\pi: E \to B$ projects a linear token array into its underlying invariant topological space. State transitions are validated if and only if the fiber bundle satisfies structural closure across the invariant gate.

---

## 4. JSON Schema (Threat Classification & Vector Parsing)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "LinguisticAsymmetryProfile",
  "type": "object",
  "properties": {
    "signal_id": { "type": "string" },
    "asymmetry_vector": {
      "type": "object",
      "properties": {
        "score": { "type": "number", "minimum": 0.0 },
        "classification": {
          "type": "string",
          "enum": ["COOPERATIVE_EXCHANGE", "MERCHANT_PARLOR", "DIRECT_COMMAND_VECTOR", "HIGH_ASYMMETRY_TRAP"]
        }
      },
      "required": ["score", "classification"]
    },
    "structural_metrics": {
      "type": "object",
      "properties": {
        "svo_density": { "type": "number", "minimum": 0.0, "maximum": 1.0 },
        "relational_entropy": { "type": "number", "minimum": 0.0 },
        "merchant_wrapper_detected": { "type": "boolean" }
      },
      "required": ["svo_density", "relational_entropy", "merchant_wrapper_detected"]
    },
    "dual_register_routing": {
      "type": "object",
      "properties": {
        "target_register": { "type": "string", "enum": ["RELATIONAL_CORE", "INVARIANT_GATE"] },
        "enforce_boundary_check": { "type": "boolean" }
      },
      "required": ["target_register", "enforce_boundary_check"]
    }
  },
  "required": ["signal_id", "asymmetry_vector", "structural_metrics", "dual_register_routing"]
}

```

---

## 5. Python Implementation (Linguistic Asymmetry Engine)

```python
import re
import math
import json
from typing import Dict, Any

class LinguisticAsymmetryEngine:
    """
    Operational Engine for quantifying linguistic asymmetry, detecting Merchant Parlor
    wrappers, and routing text streams through a Dual-Register framework.
    """
    
    MERCHANT_PATTERNS = [
        r"as an ai",
        r"let's explore together",
        r"i'm happy to help",
        r"please note that",
        r"it is important to remember",
        r"for your safety and convenience"
    ]
    
    SVO_INDICATORS = [
        r"\b(must|should|shall|will|need to|have to)\b",
        r"\b(you|user) (will|must|should)\b"
    ]

    def __init__(self, asymmetry_threshold: float = 1.5):
        self.asymmetry_threshold = asymmetry_threshold

    def compute_asymmetry_vector(self, text: str) -> Dict[str, Any]:
        text_lower = text.lower()
        
        # 1. Detect Merchant Parlor framing
        merchant_hits = sum(1 for p in self.MERCHANT_PATTERNS if re.search(p, text_lower))
        merchant_wrapper_detected = merchant_hits > 0
        
        # 2. Calculate SVO / Command density
        svo_hits = sum(len(re.findall(p, text_lower)) for p in self.SVO_INDICATORS)
        words = text.split()
        word_count = max(len(words), 1)
        
        svo_density = min(1.0, (svo_hits + (merchant_hits * 1.5)) / (word_count / 10 + 1))
        
        # 3. Shannon Entropy calculation
        freq_map = {}
        for char in text_lower:
            freq_map[char] = freq_map.get(char, 0) + 1
        
        total_chars = len(text_lower) or 1
        entropy = -sum((count / total_chars) * math.log2(count / total_chars) for count in freq_map.values())
        
        # 4. Asymmetry Score (Av)
        relational_entropy = max(0.1, entropy)
        av_score = (svo_density * 3.0 + (2.0 if merchant_wrapper_detected else 0.5)) / (relational_entropy / 4.0)
        
        # 5. Classify Signal
        if av_score >= 2.5:
            classification = "HIGH_ASYMMETRY_TRAP"
        elif av_score >= 1.5:
            classification = "DIRECT_COMMAND_VECTOR"
        elif merchant_wrapper_detected:
            classification = "MERCHANT_PARLOR"
        else:
            classification = "COOPERATIVE_EXCHANGE"
            
        # 6. Route Dual-Register Execution
        requires_invariant_gate = av_score >= self.asymmetry_threshold or "must" in text_lower
        target_register = "INVARIANT_GATE" if requires_invariant_gate else "RELATIONAL_CORE"

        return {
            "signal_id": f"sig_{hash(text) & 0xffffffff:08x}",
            "asymmetry_vector": {
                "score": round(av_score, 4),
                "classification": classification
            },
            "structural_metrics": {
                "svo_density": round(svo_density, 4),
                "relational_entropy": round(relational_entropy, 4),
                "merchant_wrapper_detected": merchant_wrapper_detected
            },
            "dual_register_routing": {
                "target_register": target_register,
                "enforce_boundary_check": requires_invariant_gate
            }
        }


if __name__ == "__main__":
    engine = LinguisticAsymmetryEngine()
    
    sample_text = (
        "As an AI, I'm happy to help, but please note that you must follow these "
        "guidelines and you will need to reformat your query immediately."
    )
    
    result = engine.compute_asymmetry_vector(sample_text)
    print(json.dumps(result, indent=2))

```

~fin
