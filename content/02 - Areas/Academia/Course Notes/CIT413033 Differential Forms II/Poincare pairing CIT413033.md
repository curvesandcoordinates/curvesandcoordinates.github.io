---
publish: true
created: 2024-07-22T16:18:59.760+02:00
modified: 2026-06-10T19:12:37.600+02:00
tags:
  - academia
---

# Poincare Pairing

Given the consideration that we can define $\Omega_C^k(M)$ for a smooth manifold $M$ to be the set of compactly supported differential forms, with

$$
\supp(\omega) = \overline{\set{p \in M \midline \omega_{p} \neq 0}}
$$

and that the exterior derivative is a differential on the complex $\Omega_C^\ast(M)$ we can define compactly support de Rahm Cohomology as expected. Using this though we can now easily integrate on non-compact manifolds, since our forms are compactly supported. We even have that for any $\omega \in \Omega^k(M)$ and $\eta \in \Omega^{n-k}(M)$ the integral
$\int_{M} \omega \wedge \eta$
is defined, since the compactness of $\eta$ follows through. This allows us to define a bilinear pairing, called the Poincare Pairing

> [!definition|\*] Poincare Pairing
> Let $M$ be an oriented n-dimensional Manifold, then we can define a Pairing
>
> $$
> H^{k}(M)\times H^{n-k}_{C}(M) \ni\innprod{\omega}{\eta} \mapsto \int_{M} \omega \wedge \eta \in \R
> $$
>
> which is non-degenerate given a finite good cover of $M$

## Consequences of the non-degeneracy of Poincare Pairing

- We can now explicitly calculate the compact de Rahm cohomology groups, since the non-degeneracy gives us an isomorphism $H^{k(M)}\cong H^{n-k}_{C}(M)^\ast \cong H^{n-k}_{C}(M)$
- We can define the [[Poincare Duality CIT413033| Poincare Dual]] of a Sub manifold and use this to calculate intersection Properties.
