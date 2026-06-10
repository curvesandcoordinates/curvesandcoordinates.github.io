---
publish: true
created: 2024-07-23T10:51:14.835+02:00
modified: 2026-06-10T19:12:37.510+02:00
tags:
  - academia
---

# Degree of Continuous Functions on Manifolds

Given two manifolds $M$ and $N$ with $N$ a connected orientable manifolds and both of dimension $n$ we can in a sense count how often a proper map $f: M \to N$ wraps around $N$ (we can remove properness if we assume compactness of the manifolds). This is described to be the degree, and is at first defined to be a value such that

$$
\forall \omega \in \Omega^{n}N: \quad \int_{M} f^{\ast}\omega = \deg(f) \int_{N} \omega
$$

This value is very direct and somewhat easily calculable. The degree has the following properties

- Homotopy invariance: $f \cong g \implies \deg(f) = \deg(g)$
- Multiplicativity: $\deg(f \circ g) = \deg(f) \cdot \deg(g)$
- Regular Value Calculation: Given a regular value of $f$ say $y \in N$ we can calculate $\deg(f) = \sum\limits_{p \in f^{-1}(y)} \sgn(\det(d_{p}f))$
- Given a non-surjective map it must have $\deg(f) = 0$
  - From this we get a generalisation for the fundamental theorem of algebra between tro oriented, non-compact, $n$-dimensional manifolds with finite good cover and $N$ connected. We get that if a proper $f$ is orientation preserving outside of a compact set $C$ then $f$ is surjective.
- Hopf-Degree Theorem: Givena compact, connected, oriented $n$-dimensional smooth manifold and $f, g: M \to S^{n}$ smooth we have that: $f \cong g \iff \deg(f) = \deg(g)$

The degree plays into our calculation of the [[Lefschetz Number CIT413033]], since we can express the induced map on the $n$ Cohomology by the degree

$$
f^{\ast}: H^{n}_{\Omega}(M) \to H^{n}_{\Omega}(M) \quad f^{\ast}\omega \mapsto \deg(f)\omega
$$

for a compact, oriented $n$-Dimensional Manifold $M$
