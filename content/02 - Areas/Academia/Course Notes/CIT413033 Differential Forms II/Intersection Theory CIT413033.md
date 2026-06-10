---
publish: true
created: 2024-07-22T23:08:04.196+02:00
modified: 2026-06-10T19:12:37.605+02:00
tags:
  - academia
---

# Intersection Theory

When considering Manifolds, specifically for us Sub-manifolds of a manifold $M$ we are interested in how these Sub-manifolds intersect.

## Transversality

When considering two sub-manifolds $K$ and $L$ of $M$ we would like to describe them intersecting in the most general case, which is that they don't tangentially touch in some way.
We define two sub-manifolds to intersect transversally (denoted as $K \pitchfork L$) if we have that for all $p \in K\cap L$ we have

$$
T_{p}K + T_{p}L = T_{p}M
$$

The image for this is given by
![[04 - Resources/Assets/Pasted image 20240722231923.png]]

## Properties of Transversal Intersection

If two sub-manifolds intersect transversally we can consider the intersection to be a sub-manifold with co-dimension given by
$\codim(K \cap L) = \codim(K) + \codim(L)$
giving us that

$$
\dim(K) + \dim(L) = \dim(M) \implies \dim(K\cap L) = 0
$$

so $M$ being compact gives us $K\cap L$ is finite.

We can always permute to sub-manifolds of $\R^{n}$ to intersect Transversally.

## Intersection Number

We can categorize the intersection by considering the ordered Basis of Tangent spaces.

Given a compact Manifold $M$ and two transversally intersecting submanifolds with $\dim(K) + \dim(L) = \dim(M)$ we can define a map $\epsilon: K \cap L \to \set{1, -1}$
with $\epsilon(p) = 1$ if the Ordered Basis $(A, B)$ is positively oriented with $A$ ordered Basis of $T_{p}K$ and $B$ ordered Basis for $T_{p}L$ and $-1$ otherwise. We define the intersection number of $K$ and $L$ to be

$$
I(K, L) = \sum\limits_{p \in K\cap L} \epsilon(p)
$$

## Poincare Dual

We can transfer some properties of these transversal intersection to properties of the Poincare Duals of our sub-manifolds $K$ and $L$.

Given a compac, oriented Manifold with transversally intersecting manifolds $K$ and $L$ we can see that the Poincare Duals satisfy:

$$
\omega_{K\cap L} = \omega_{K} \wedge \omega_L
$$

We can also formulate the intersection number via this dual property. Giving us that if $\dim(K) + \dim(L) = \dim(M)$
$I(K, L) = \int_{M}\omega_{K \cap L} = \int_{M} \omega_{K} \wedge \omega_L$
