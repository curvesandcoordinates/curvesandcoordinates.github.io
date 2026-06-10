---
publish: true
created: 2025-11-09T00:44:53.000+01:00
modified: 2026-06-10T19:14:50.038+02:00
tags:
  - thoughts
---

When considering in general a geometric object we know that a central concept of the 21st Century is to study the invariants of this space. By this we mean for some geometric object $G$ over some completed field $\K$ we want to find maps
$f: G \to \K$
that are invariants under some geometric transformations.

This vagueness can get realized in many different ways, but one avenue is to consider [[Group Varieties]] for a given [[affine algebraic group]] $G$. These are [[Affine Varieties|affine varieties]] which have been endowed with an action
$G \times X \to X$
which is morphism of affine varieties.

The maps we will try to find invariances under then naturally are polynomial maps defined on $X$. Namely we can use the [[ring of regular functions]] of $X$ and extend the action into the regular functions via

> [!definition|\*] Action on Regular Functions
> Let $G$ be an affine algebraic group and $X$ be a $G$-Variety over $\K$. Then we extend the action of $G$ onto $X$ to an action
> $G \times \K[X] \to \K[X], \quad \sigma f \mapsto f \circ \sigma^{-1}$

This then allows us to consider the invariant [[Rings|ring]] in this context:

> [!definition|\*] Invariant Ring of a Group Variety
> For a given an affine algebraic group $G$ let $X$ be a $G$-Variety over $\K$. Then the invariant ring is defined as the subalgebra of $\K[X]$
> $\K[X]^{G} = \set{f \in \K[X]\mid \forall \sigma \in G: \sigma f = f}$

==Add statements about Orbits of our Action==

## Classical Case of Invariant Theory

If we want to consider the historic origins of invariant theory we need to take a few steps back from the variety definition and simplify it. Simply consider a [[G-Module]] which is in its essence a finite dimensional $\K$-vector space $V$ and some group $G$. We ignore the affine variety structure and simply remember that in this case
$\K[V] \cong \K[x_{1}, \ldots, x_{n}]$
where $\dim_{\K} (V) = n$.

In this simple case we can already build up a lot of theory (see [[1. Classical Invariant Theory|Lecture Notes]] for an overview). One simple example which captures the intuition of invariants is

> [!example|\*] Euclidean Norm is an Invariant
> This intuition gives us an intuitive example for orbits, since on $V = \C$ and $K = \C$ we can consider the function
> $f(a + ib) = \sqrt{a^2 + b^2} = \norm{a+ib}$
> and the subgroup $O(1) \subset GL(\C)$ then we can see that the orbits of our action are given by circles and thus
>  
> $f \in \C[V]^G$

Some more complicated examples include the analysis of the [[Invariants of the Symmteric Group]] and also using a technique called the [[Normal-Form Principle]] we can consider the instructive example of [[Invariants of Square Matrices under Conjugation]], [[Invariants of the Multiplicative Group]], [[Invariants of Special Linear Matrices]]

## Characterisation of Invariance by Coaction

When we consider the general case of the invariant ring in our setting we can use the affine variety properties of $G$ and $X$ to express the induced map on coordinate rings explicitly.

Let us first express the action of $G$ by the map
$\mu: G \times X \to X$
we then know by the theory of [[Varieties]] that this induces a map on algebras
$\mu^{*}: \K[X] \to \K[G] \otimes \K[X], \quad \tilde{\mu}(f)(g \otimes x) = f(\mu(g, x)) = f(g \cdot x)$
this leads us to the following definition

> [!definition|\*] Coaction on G-Varieties
> Given a $G$-Variety $X$ with the action $\mu: G \times X \to X$ we define the coaction onto the Variety by the map
> $\mu^{*}: \K[X] \to \K[G] \otimes \K[X], \quad \mu^{*}(f)(g \otimes x) = f(\mu(g, x)) = f(g \cdot x)$
> The action on a regular function can be expressed by this coaction in the following way
> $\sigma^{-1} f (x) = f(\sigma(x)) = \mu^{*}(f)(g \otimes x)$
> for $f \in \K[X], x \in X, \sigma \in G$

Sometimes for the sake of computation we assume that we can express an element
$\mu^{*}(f) = \sum\limits_{i=0}^{n} g_{i} \otimes f_{i}$
for $g_{i} \in K[G]$ and $f_{i} \in \K[X]$.

This allows us to express invariance of $f$ in terms of the coaction

> [!proposition|\*] Characterisation of Invariance by Coaction
> In the above situation we have that
> $K[X]^{G} = \set{f \in \K[X] \midline \mu^{*}(f) = 1 \otimes f}$

`\begin{proof}`
Let $f \in \set{f \in \K[X] \midline \mu^{*}(f) = 1 \otimes f}$  meaning $\mu^{*}(f) = 1 \otimes f$ then for some $\sigma \in G, x \in X$ we have
$\sigma^{-1} f(x) =\mu^{*}(f)(\sigma, x) = (1 \otimes f) (\sigma, x) = 1 (\sigma) f(x) = f(x)$
proving the reverse inclu
Now for the inclusion consider that we choose a basis $B$ of $K[G]$ with $1 \in B$. Now let $f \in K[X]^{G}$ then we can write
$\mu^{*}(f) = \sum\limits_{g \in B} g \otimes f_{g}$
with $f_{g} \neq 0$ only finitely often. Then for $\sigma \in G$ and $x \in X$ we get
$f(x) = f(\sigma(x)) = \sum\limits_{y \in B} g(\sigma)f_{g}(x)$
meaning for all $x \in X$
$f (x) = \sum\limits_{g \in B} g \cdot f_{g}(x)$
since these are two representations of the same function we can use the fact that $B$ is a basis to see that
$f_{1}(x) = f(x), \quad f_{i}(x) = 0, i \neq 0$
`\end{proof}`
