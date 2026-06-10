---
publish: true
created: 2024-07-22T18:57:13.236+02:00
modified: 2026-06-10T19:12:37.563+02:00
tags:
  - academia
---

# Lefschetz Fixed Point Theorem

This is a big fixed Point theorem that deals with general compact oriented manifolds. We begin the story at considering a specific way to think of fixed points.

## Graph and Diagonal Spaces and their Dual

Given $f: M \to M$ we can consider the spaces

$$$
\begin{align*}
\Gamma_{f} &= \set{(x, f(x) \in M \times M)}\\
\Delta &= \set{(x, x) \in M \times M}
\end{align*}$$
We can see that all fixed points can be seen as points in the intersection $\Gamma_{f}\cap \Delta$. When considering [[Poincare Duality CIT413033]] we would like to make use of this and define the Poincare Dual of $\Gamma_f$ and $\Delta$. They turn out to be given by:
$$$

\begin{align\*}
\[\phi\_{\Delta}] &=  \sum\limits\_{i,k} (-1)^{j} \[(\pi\_{1}^{\ast} \omega\_{k}^{j}) \wedge (\pi\_{2}^{\ast} \nu\_{k}^{n-j})]\\
\[\phi\_{\Gamma\_f}] &=  \sum\limits\_{i,k} (-1)^{j} \[(\pi\_{1}^{\ast} f^\ast\omega\_{k}^{j}) \wedge (\pi\_{2}^{\ast} \nu\_{k}^{n-j})]
\end{align\*}

$$$
where we define $H^{i}(M) = \span \set{[\omega_{i}^{j}]}$ and $H_C^{n-i}(M) = \span \set{[\nu_{i}^{j}]}$ the dual basis such that
$$\int_{M} \omega_{i}^{j} \wedge \nu_{j}^{n-j} = \delta_{ij}$$
## Lefschetz Number
Since we are concerned with fixed points of a map $f: M \to M$ a quantity to count them will be very useful. We will not simply be able to count them in general though, but the intuition is given via the [[Lefschetz Number CIT413033]] of a “well-behaved” map which is
$$$

L(f) = \sum\limits\_{p=f(p)} \sgn(\det(I - d\_{p}f))

$$

^07bc81

This counts, for every fixed point how locally we are deforming when applying the fixed point. The well-behavedness is that we assume $f$ has the property that for all these points $\det(I - d_{p}f) \neq 0$ since this would imply that our fixed point is unstable. We would be able to permute/perturb by a little and locally there is no Eigenvector that stays the same after transformation.

Under the more general conditions of $f:M \to M$ being a smooth map and $M$ a compact orientable smooth manifold, then it is provable that 
$$

\int\_{\Delta} \phi\_{\Gamma\_f}= L(f)

$$
The proof of this is based on the fact that we can express the Lefschetz number as 
$$

L(f) = \sum\limits\_{k=0}^{n} (-1)^{k} tr\left\[ f^{\ast}: H\_{\Omega}^{i} (M)\to H\_{\Omega}^i(M) \right]

$$
and given $i: \Delta \to M \times M$ and $\alpha: M \to \Delta, x \mapsto (x, x)$ and now we have
$$

\int\_{\Delta}\phi\_{\Gamma\_{f}}= \int\_{M}\alpha^{\ast}i^{\ast} \phi\_{\Gamma\_f}

$$
Since $\pi_{i}\circ i \circ \alpha = Id$ then we have that 
$$

\int\_{\Delta}\phi\_{\Gamma\_{f}}= \int\_{M}\alpha^{\ast}i^{\ast} \phi\_{\Gamma\_{f}}= \sum\limits\_{ijk} (-1)^{j} F\_{ik}^{j} \int\_{M} \omega\_{i}^{j} \wedge \nu\_{k}^{n-j} = \sum\limits\_{j} (-1)^{j} tr\[F^{j}] = L(f)

$$$
## Lefschetz Fixed Point Theorem
Using the [[Poincare Duality CIT413033#^7233b5|Localization Principle]] of Poincare Duality we can use this expression of $L(f)$ to prove the Lefshetz fixed Point Theorem.

> [!theorem|*] Lefschetz Fixed Point Theorem
> Let $M$ be a compact oriented Manifold and $f: M \to M$ a smooth map. Then
> $$L(f) = 0 \implies \exists p \in M: \quad p = f(p)$$

`\begin{proof}`
Assume we have no fixed points. Then we know that $\Gamma_{f}\cap \Delta = \emptyset$ thus we can find an open Neighborhood $U$ of $\Gamma_f$ such that $U \subset M \times M \setminus \Delta$. Now given the [[Poincare Duality CIT413033#^7233b5| localization principle]] we can find a compactly supported $\omega \in \Omega_{C}^{n}M$ with $[\omega] = [\phi_{\Gamma_{f}}]$  and $supp(\omega) \subset U$. This means that $\omega$ is the compact Poincaré dual of $\Gamma_f$ and $\omega_{\mid_{\Delta}} = 0$
$$$

L(f) = \int\_{\Delta} \omega = 0

$$
Via the contraposition we get our statement.
`\end{proof}`

## Consequences of this Theorem
Since the Lefschetz number is always calculable and invariant under homotopy, we can get many general results as a consequence of this fixed point theorem

> [!theorem|*] Brower’s Fixed Point Theorem
> Given a contractible compact smooth Manifold with boundary every map continous $f: M \to M$ has a fixed point

This is consequence of some simple calculations of $L(f) = 1$ under these assumptions. See [[Lefschetz Number CIT413033]] for more. 
$$
