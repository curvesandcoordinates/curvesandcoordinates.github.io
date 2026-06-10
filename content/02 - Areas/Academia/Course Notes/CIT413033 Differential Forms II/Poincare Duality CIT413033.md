---
publish: true
created: 2024-07-22T17:01:18.794+02:00
modified: 2026-06-10T19:12:37.570+02:00
tags:
  - academia
---

# Poincare Duality

The original Statement of Poincare Duality is given in the context of the Hodge operator on de Rahm Cohomology and states that given a compact orientable manifold we have
$H^{n}_{\Omega}(M) \cong H^{n-k}_{\Omega}(M)$
This relies a lot on the fact though that the [[Poincare pairing CIT413033]] on compact manifolds is very simple. The general case relates

$$
H^{k(M)}\cong H^{n-k}_{C}(M)^\ast \cong H^{n-k}_{C}(M)
$$

This relation allows us to define what the Poincare Dual of as Sub-manifold $S$ of $M$ is.

> [!definition|\*]
> Given a $k$-dimensional Sub-manifold $S$ of $M$ we can define the linear functional on $H_{C}^{k}(M)$ by defining the map
>
> $$
> \tau: H_{C}^{k}(M) \to \R, \quad \eta \mapsto \int_{S}\eta := \int_{S} i^{\ast}\eta
> $$
>
> with $i: S \to M$ the inclusion map.
> Through the Poincare Pairing this corresponds to a form $[\omega] \in H^{n-k}_{\Omega}(M)$ such that
>
> $$
> \int_{S}\eta := \int_{S} i^{\ast}\eta = \int_{M}\eta \wedge \omega
> $$
>
> We call this form the Poincare Dual of $S$, denoted as $\omega_S$

## The Compact version

We can define the compact Poincare Dual of a space $S$ in the same way. This works by adding the assumption that $M$ is compact and the same logic from above follows.

Interestingly we can add a little bit of motivation for what this compact Poincare Dual of $S$ does, since we can look at its support and apply something called the localization principle

> [!theorem|\*] Localization Principle
> Let $M$ be a compact oriented $n$-simensional Manifold and $S$ a $k$-dimensional submanifold and $[\omega_{S}]\in H_{C}^{n-k}(M)$ the comapact Poincare Dual. Then for any open neighboughrhood of $U$ of $S$ we can find $\eta \in \Omega_C^{n-k}M$ with $[\eta] = [\omega_S]$ and $\supp(\eta) \subset U$

^7233b5

This allows us to think of the compact Poincare Dual as a differential form that is only defined “close” to $S$ which gives the intuition for the [[Lefshetz Fixed Point Theorem CIT413033]].
