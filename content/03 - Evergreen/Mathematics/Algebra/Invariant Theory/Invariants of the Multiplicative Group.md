---
publish: true
created: 2025-11-09T16:35:20.627+01:00
modified: 2026-06-10T19:14:50.045+02:00
tags:
  - thoughts
---

Consider $G = (K \setminus \set{0}, \cdot) =: G_{m} = GL_{1}(K)$ the multiplicative group acting on $V = K^{2}$ by
$a(v) = a v$ with $a \in G_{m}, v \in K^{2}$. Then acting on the $x_{i}$ is given by
$a(x_{i}) = a^{-1} x_{i}$
Then note that the invariant ring here is only the constants $K[V]^{G} = K[x_{1}, x_{2}]^{G} = K$

On the question of orbit separation we should note that since constants dont separate anything we have the least separation we could have. There are however infinitely many orbits.

Going back to the example of $G_{m}$ we can visualise all orbits by lines given by $L_{v} = \set{\alpha v \midline \alpha \in K^{\times}}$, meaning by lines without the origin. If we now consider the closure of these orbits then in the zariski topology we get
$\overline{L_{v}} = \set{\alpha v \midline \alpha \in K}$
meaning all orbit closures intersect on $0$ and thus it is apparent from the topology that any invariant must be constant, since over $0$ its orbit closure connects to all others.
