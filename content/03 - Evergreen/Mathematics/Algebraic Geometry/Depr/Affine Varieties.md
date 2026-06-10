---
publish: true
aliases:
  - affine variety
  - affine varieties
  - Affine Variety
created: 2025-11-14T16:31:03.107+01:00
modified: 2026-06-10T19:14:50.442+02:00
tags:
  - thoughts
---

A central topic in algebraic geometry is the analysis of polynomial equations, more specifically the zero-sets of polynomials. Such objects are called affine varieties and the general definitions of them come right out of [[Rings|ring theory]].

> [!definition|\*] Affine Varieties
> Let $\K$ be a field and $\K[x_{1}, \ldots, x_{n}]$ be a polynomial ring.
>
> - For a given set $S \subset \K[x_{1}, \ldots, x_{n}]$ the **affine variety** given by $S$ is defined as the set
>   $\mathcal{V}(S) = \set{(\xi_{1}, \ldots, \xi_{n}) \in \K^{n} \midline \forall f \in S: f(\xi_{1}, \ldots, \xi_{n}) = 0}$
> - A subset $X \subset \K^{n}$ is called an affine $\K$-Variety if $X$ is the affine variety given by a set $S \subset \K[x_{1}, \ldots, x_{n}]$.

This centers the object of study to be algebraic curves determines by the zeroes of some $f \in \K[x_{i}]$. This theory is one of duality though, since we can also define the corresponding object as an ideal given in the polynomial ring.

> [!definition|\*] Vanishing Ideals
> Given a set $X \subset \K^{n}$ we call the following set the vanishing ideal
> $\mathcal{I}(X) = \set{f \in \K[x_{1}, \ldots, x_{n}] \midline \forall (\xi_{1}, \ldots, \xi_{n}) \in X: f(\xi_{1}, \ldots, \xi_{n}) = 0}$

These two worlds, one being algebraic and calculable and the other being geometric subsets, are connected via a “Lexicon”. The idea is to translate from the geometry to algebraic world and identify properties that we care about algebraically, by finding them in ring theory.

This is enshrined in [[Hilbert’s Nullstellensatz]] which gives us in essence an equivalence between radical [[Ideals|ideals]] and affine varieties. It also allows us to define a [[Coordinate Ring]] for a given variety which whill actually be the algebraic object containing all the information.

## Finite Generation of the Vanishing Ideal

Hilbert also considered an important question in the definition of the vanishing ideal. We can see that easily as a zero set, the vanishing ideal of some $X \subset \K^{n}$ given by $\mathcal{I}(X)$ is an ideal in $\K[x_{1}, \ldots, x_{n}]$ since
$\forall f \in \mathcal{I}(X), g \in \K[x_{1}, \ldots, x_{n}]: \quad f g \in \mathcal{I}(X)$
and $\mathcal{I}(X)$ is trivially a subring.
What makes ideals simple objects is if there are generators $\alpha_{1}, \ldots, \alpha_{n} \in \K[x_{1}, \ldots, x_{n}]$ that we can find, such that for
$(\alpha_{1}, \ldots, \alpha_{n}) = \set{\sum\limits_{i=1}^{n} f_{i} \alpha_{i}\midline f_{i} \in \K[x_{1}, \ldots, x_{n}]} = \mathcal{I}(X)$
We can see that if we begin with simply an equation like $x^{2} + y^{2} - 1 = 0$ we can actually see that the ideal $I = (x^{2} + y^{2} - 1)$ describes the affine variety completely. In this case we have a simple generator.

The question poses itself, whether the vanishing ideal of any affine variety is finitely generated in some way. Hilbert solved this by considering the theory of [[Noetherian Rings]] and [[Artinian Rings]] which lead to the statement of Hilbert’s Basis Theorem

## Generalising to other Objects

When we notice that the geometry of an affine variety is in the object $\spec(\faktor{\K[x, y, \ldots]}{I})$ we can begin to generalise and simply consider the space $\spec(R)$ for any commutative ring $R$ and endow it with the [[Zariski Topology]]. This then goes into the generalization of Schemes.

We could also consider a similar development to the definition of a manifold and define an object that locally looks like an affine variety. This is then just called a [[Varieties|variety]].
