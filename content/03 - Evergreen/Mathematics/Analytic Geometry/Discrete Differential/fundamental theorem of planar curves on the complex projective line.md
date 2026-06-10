---
publish: true
created: 2026-02-09T19:13:55.482+01:00
modified: 2026-06-10T19:14:51.297+02:00
tags:
  - thoughts
---

Using the fact that fixing two points $a, b \in \mathbb{CP}^{1}$ and fixing some value $\mu$ we can define a [[Möbius Transformations]] by the relationship that
$\mathrm{cr}(a, b, M(d), d) = \mu$
We get the following property that to us uniquely describes a curve on the [[Complex Projective Line|complex projective line]]

> [!theorem|\*] Fundamental Theorem
> Given a curve $\gamma: I \to \mathbb{CP}^{1}$ the quantity
> $Q_{k} = \mathrm{cr}(\gamma_{k-1}, \gamma_{k}, \gamma_{k+2}, \gamma_{k+1})$
> determines the discrete curve $\gamma$ uniquely up to Möbius transformations.

`\begin{proof}`
Simply note that given the points $\gamma_{0}, \gamma_{1}, \gamma_{2}$ and $Q_{k}$ we can define the recurrence relation by generating the möbius transformation satisfying
$Q_{k} = \mathrm{cr}(\gamma_{k-1}, \gamma_{k}, M(\gamma_{k+1}), \gamma_{k+1})$
and then define $\gamma_{k+2} = M(\gamma_{k+1})$

This curve is Möbius invariant since the [[Cross-Ratio|cross-ratio]] is.
`\end{proof}`
