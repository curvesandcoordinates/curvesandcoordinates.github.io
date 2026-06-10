---
publish: true
created: 2025-11-04T15:12:19.000+01:00
modified: 2026-06-10T19:14:51.019+02:00
tags:
  - thoughts
---

We aim to generalize the notions of planar curves when considering them defined on a discrete interval. Mainly we want to mirror the analysis of Planar curves from differential geometry and see what kinds of changes need to be made in order to analyse these more discrete and less structured objects.

We begin by simply defining our objects of interest

> [!definition|\*] Discrete Curves
> Let $I \subset \Z$ be a discrete interval and a map $\gamma: I \to \R^2 \cong \C$. We then call this map a discrete curve. This curve is called periodic (or closed) if $I = \Z$ and there exists an $P \in \Z \setminus \set{0}$ such that
> $\gamma(k + p) = \gamma(k)$

Note that we will often switch between considering the curve as a curve in $\C$ or in $\R^{2}$ mainly when considering the multiplication of two vectors we will have the complex image in mind.

> [!remark|\*] Notation simplifications
> When discussing the discrete objects we often will want to talk about left and right neighbours, especially during local theory. To avoid messing around with too many indices we will adopt a streamlined approach to notation and denote
> $\gamma := \gamma_{k} := \gamma(k)$
> To denote neighbours we will denote with no index, as shown above, the “current vertex” and then with subscripts denote the shift we are determining. This means we have an equivalence in the two following statements
> $\forall k \in I: \gamma_{k} = \gamma_{k + 1} - \gamma_{k-1} \iff \gamma = \gamma_{1} - \gamma_{\bar{1}}$
> where the $\bar{1}$ denotes a shift back from our “current vertex”.

### A multitude of Tangents

In the discrete case of dirreential geometry many different multiple definitions for tangent vectors are useful. These tend to slightly fall together in the discrete case but here we discuss them explicitly. For more information see: [[Tangent Vectors of Discrete Planar Curves]]

From this very intuitive definition of a tangent vector we also obtain some nice concepts like length and parametrization.

## Basic Properties of Curves

### Arc-Length

> [!definition|\*] Discrete Arc Length
> The arc-length of a discrete curve $\gamma: I \to \R^{n}$ is defined as
> $L(\gamma) = \sum\limits_{k \in I} \norm{\Delta\gamma_{k}}$

This matches with what we would expect when drawing, since we are essentially adding up the different legs of our discrete line drawing.

We can now also consider the fact that since in our discrete we are missing a type of differentiation that our Edge-Tangent-Vector takes the role of the derivative in many equations. A central property of a planar curve with a continous interval is how fast one traverses the curve. A sufficiently nice type of curve is then one that is traversed with speed $1$. We do similarly here

### Arc-Length Prametrization

> [!definition|\*] Arc-Length Parametrization
> A discrete curve $\gamma: I \to \R^{n}$ is called Arc-length parametrized if $\norm{\Delta \gamma_{k}} = 1$ for all $k \in I$

==Importantly Note== that we can not in general reparametrize the curve to be arc-length parametrized. We either are or we are not. Sometimes one loosens the definition to define that having a constant edge-tangent-vector suffices to be called Arc-Lenth Parametrized. We won’t use that notation since we are trying to stay as parallel to the continous case as possible.

### General Reparametrizations

A problem that we now run into is that if we have such a thing as Arc Length parametrization we would like to consider general reparametrizations. Since our curve is just a series of points it either is or isn’t arc-length parametrised, this doesn’t seem to allow for a more general concept of parametrization. We can though always keep in mind what general continous shape we are sampling which allows us to use a different perspective:

If we consider the underlying continous planar curve and the sampled points on top of it, a natural way to transform between parametrizations is to consider the effect of some [[Tangential Flow|tangential flow]] on our sampled points. This would move them “along” the prototype curve and give us a new “representation” of the curve which we can consider a different parametrization. In the discrete case we have to consider the [[Tangential Flow on Discrete Curves]]

### Regularity

In the continous case we care about a curve that is well-behaved in the sense that when drawing it we never stop the pencil completely. The points at which the derivative is zero tend to resemble irregularities or peaks and ruin the continous theory a lot. In the discrete case we want to identify a similar issue and for that we define a regular curve as follows

> [!definition|\*] Regularity of Discrete Curves
> A discrete curver $\gamma: I \to \R^{n}$ is called regular if any three successive points are pairwise disjoined.

This definition ensures that we don’t have cusps like
$\gamma_{4} = v, \quad\gamma_{5} = w \neq v, \quad\gamma_{6} = v$

## Examples of Discrete Planar Curves

We will gather some simple illustrative examples of discrete planar curves that will allow us to look at many aspects of them:

- [[Discrete Logarithmic Spiral]]
- [[N-gon inscribed in circle]]
- [[Discrete Cycloid]]
