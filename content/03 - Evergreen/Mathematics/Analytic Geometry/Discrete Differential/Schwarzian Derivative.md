---
publish: true
created: 2026-02-08T17:41:58.405+01:00
modified: 2026-06-10T19:14:51.196+02:00
tags:
  - thoughts
---

In the Differential Geometry of Planar Curves we consider for a continous curve $\gamma: \R \to \C^{n}$ with curvature given by $\kappa = \frac{\gamma''}{i \gamma'}$ as the function

> [!definition|\*] Schwarzian Derivative (Continous Case)
> $S(\gamma) = \frac{\gamma'''}{\gamma'} - \frac{3}{2}\left(\frac{\gamma''}{\gamma'}\right)^{2}$
> rewriting this in terms of curvature we get
> $S(\gamma) = i \kappa'  + \frac{1}{2} \kappa^{2}$

This morally measures how far our fuction is from being a Möbius transformation since $S(M) = 0$ if $M$ is a Möbius transformation and $S(M(f)) = S(f)$

## Discrete Case

In the discrete we let ourselves be inspired by the calculation of
$\mathrm{cr}(\gamma_{\bar{1}}, \gamma, \gamma_{11}, \gamma_{1}) = \frac{1}{16}\left(2 i (\kappa_{1} - \kappa) + \kappa \kappa_{1} + 4\right)$
giving us

> [!definition|\*] Schwarzian Derivative (Discrete Case)
> The discrete Schwarzian derivative of a discrete curve $\gamma: \Z \to \mathbb{CP}^{1}$ is defined to be
> $S(\gamma) =\mathrm{cr}(\gamma_{\bar{1}}, \gamma, \gamma_{11}, \gamma_{1}) - \frac{1}{4}$

by the above formula this gives us for $\gamma$ arc length parametrized the term
$S(\gamma) = \frac{1}{8}\left(i \Delta\kappa + \frac{1}{2} \kappa \kappa_{1}\right)$
