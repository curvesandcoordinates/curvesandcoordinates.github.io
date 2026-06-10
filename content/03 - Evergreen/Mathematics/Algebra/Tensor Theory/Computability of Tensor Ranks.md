---
publish: true
created: 2026-02-12T19:18:50.733+01:00
modified: 2026-06-10T19:14:50.228+02:00
tags:
  - thoughts
---

For tensors of order $d > 2$ meaning objects in $M \in (R^{n})^{\otimes d}$ for some nice ring $R$ there are no efficient algorithms for computing the tensor rank. The complexity of the problem can be informally summarized by the following statements

> [!theorem|\*] Shitov 2016
> Let $R$ be an intergal domain in which there is a polynomial-time algorithm for multiplication and addition. The complexity of computing tensor ranks (for arbitrary degree) is polynomial time equivalent to the complexity of the existential theory of that domain.

> [!corollary|\*] Computing Efficiency
> The tensor rank problem…
>
> - for $R = \Z$ is undecidable
> - for $R$ any finite field and any fixed $d \geq 3$ is NP-Complete
> - for $R \in \set{\R, \C}$ is NP-Hard for any fixed $d \geq 3$.
> - for $R = \Q$ is not know to be decidable
