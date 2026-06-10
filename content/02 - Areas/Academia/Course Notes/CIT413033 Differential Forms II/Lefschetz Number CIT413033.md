---
publish: true
created: 2024-07-22T23:50:55.175+02:00
modified: 2026-06-10T19:12:37.512+02:00
tags:
  - academia
---

# Lefschetz Number

Given a map from a Manifold to itsself we would like to calculate the Lefschetz number of this map. This intuitively counts the number of fixed points weighted by how stable these points are.

We capture this idea of a stable fixed point by noting that we can call a fixed Point $p$ of $f$ degenerate if $d_{p}f$ has eigenvalue $1$. Meaning if

$$
\det(d_{p}f - I) \neq 0
$$

The basic definition we will fall back to a lot is given for so called “Lefschetz Maps”.

> [!definition|\*] Lefschetz Maps
> Let $f:M \to M$ be a map with no degenerate fixed points, then we call $f$ Lefschetz.

In this situation we define the Lefschetz number of $f$ to be

$$
L(f) = \sum\limits_{p = f(p)} \sgn(\det(I - d_{p}f))
$$

This concept of a Lefschetz number is universal since, the Lefschetz number is homotopy invariant and it can be proven that any smooth map is homotopic to a Lefschetz map.

## Intersections

Finding non-degenerate fixed points can be equated to finding [[Intersection Theory CIT413033|transversal intersections]] of the spaces

$$$
\begin{align*}
\Gamma_{f} &= \set{(x, f(x) \in M \times M)}\\
\Delta &= \set{(x, x) \in M \times M}
\end{align*}$$
We can show that a map $f$ only has non-degenerate fixed points iff $\Delta \pitchfork \Gamma_f$ and in this case
$$$

I(\Delta, \Gamma\_{f}) = \sum\limits\_{p = f(p)} \sgn(\det(d\_{p}f - I))

$$$
Now considering non-degeneracy of the fixed points gives us a Lefschetz map, we can prove the above formula for the Lefschetz number by considering the formula given [[Lefshetz Fixed Point Theorem CIT413033#^07bc81|here]]. Note that
$$L(f) = \int_{\Delta} \phi_{\Gamma_{f}}= \int_{M\times M} \phi_{\Gamma_{f}} \wedge \phi_{\Delta} = I(\Gamma_{f}, \Delta) = \sum\limits_{p = f(p)} \sgn(\det(I - d_{p}f))$$

## Cohomology Formulation
We can calculate a Lefschetz number in a more general setting. Given a compact orientable smooth Manifold $M$ and $f: M \to M$ we can calculate the Lefschetz number by
$$$

L(f) = \sum\limits\_{r=0}^{n} (-1)^{r} tr\left\[f^{\ast}: H^{r}_{\Omega}(M) \to H^{r}_{\Omega}(M) \right]

$$$
This is based on the induced map on the level of cohomology.

> [!proposition|*]
> If $M$ is connected we can easily calculate, that $f^{\ast}: H^{0}_{\Omega}(M) \to H^{0}_{\Omega}(M)$ that $f^{\ast} \cong I_{H^{0}_{\Omega}(M)}$ and thus 
> $$
> tr[f^{\ast}: H^{0}_{\Omega}(M) \to H^{0}_{\Omega}(M)] = 1
> $$



Given this definition we also get a simple connection between the Lefschetz number and the Euler Characteristic, since:
$$L(Id) = \chi(M)$$
$$$
