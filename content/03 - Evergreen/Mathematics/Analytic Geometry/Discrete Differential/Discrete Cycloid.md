---
publish: true
created: 2025-11-05T20:58:20.000+01:00
modified: 2026-06-10T19:14:50.839+02:00
tags:
  - thoughts
---

A general cycloid is always constructed by taking a regular shape such as a circle and picking a point on it and tracking the path that this point takes when rolling the circle on a line.

We can discretize this concept and consider picking a vertex on a regular n-gon of radius $1$. When doing this the image in mind should be the following:

### Construction

We consider an $n$-gon of radius $r$ laying on a plane. When we roll the

…

We can capture this in the following definition

> [!definition|\*] Discrete Cycloid
> We define the curve of the discrete cycloid by the following formula
> $\gamma_{k} = \sum\limits_{l=0}^{k} \left(1 - e^{- \frac{2\pi i}{n} l}\right)$

### Properties

Essentially one big property of this curve is that in the continous case we would want this curve to be non-regular. This is because at the cusps of the shape we have a vanishing velocity. In the discrete case this is also the case since we can easily calculate
$\Delta \gamma_{k} = \gamma_{k+1} - \gamma_{k} = 1 - e^{- \frac{2\pi i}{n} (k + 1)}$
Meaning that for $k = n-1$ we get
$\forall t \in \N: \quad\Delta \gamma_{tn-1} = 0$
This corresponds to the cusps and in fact regularity is not given since then two points, namely
$\gamma_{tn-1}, \gamma_{tn}$
coincide.
