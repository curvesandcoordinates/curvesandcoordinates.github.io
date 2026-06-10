---
publish: true
created: 2026-02-21T22:43:16.000+01:00
modified: 2026-06-10T19:12:42.333+02:00
tags:
  - academia
---

## Well-Behaved Class of Groups: Linearly Reductive

> [!definition|4.1] Representation Language
> Let $G$ be an affine algebraic group and $V$ a $G$-Module.
>
> 1. A submodule is a subspace $W \subset V$ such that $G(W) \subset W$. Then we know that $W$ and $\faktor{V}{W}$ is a $G$-Module itsself.
> 2. $V$ is called _irreducible_ (or simple) if $\set{0}$ and $V$ are the only submodules.
> 3. $V$ is called _indecomposable_ if $V$ is not the direct sum two non-zero submodules
> 4. $V$ is called _fully reducible_ (or semi-simple) if it is a direct sum of irreducible submodules.
> 5. $G$ is called _linearly reductive_ if for every $G$-Module $V$ and a Submodule $W \subset V$ there exists $U \subset V$ such that $W \bigoplus U = V$
> 6. For two $G$-Modules $V, W$ a $G$-Homomorphism is a map $\phi: V \to W$ which is linear and satisfies $\forall \sigma \in G: \phi \circ \sigma = \sigma \circ \phi$

> [!theorem|4.2] Equivalent Formulations of Linear Reductivity
> For an affine algebraic group $G$ the following are equivalent:
>
> 1. $G$ is linearly reductive
> 2. Every $G$-Module $V$ is fully reducible
> 3. For every $G$-Module $V$ there is a $G$-homomorphism $R: V \to V^{G}$ such that $\at{R}{V^G} = id$
> 4. For a $G$-Module $V$ and a $G$-homomorphism $0 \neq \Pi: V \to \K$ (where $\K$ is given by the trivial action) then there is a $G$-Homomorphism $\phi: K \to V$ with $\Pi \circ \phi = \mathrm{id}_{K}$
> 5. For every surjective $G$-Homomorphism $\phi: V \to W$ we have $\phi(V^{G}) = W^{G}$

> [!proposition|4.3] Reynolds Operator on Varieties
> Let $G$ be linearly reductive and $V$ a $G$-Module then
>
> 1. $R: V \to V^{G}$ be a $G$-Hom with $\at{R}{V^{G}} = \mathrm{id}$ is uniquely determined. Write $R_{V}$ and call it the **“Reynolds Operator”**
> 2. For a submodule $U \subset V$ we have $R_{U} = \at{R_{V}}{U}$

> [!corollary|4.4] Reynolds Operator on Coordinate Rings
> Let $G$ be linearly reductive and $X$ a $G$-Variety. Then there is a $G$-Homomorphism
> $R: K[X] \to K[X]^{G}$
> meaning we have that $R \circ \sigma = \sigma \circ R = R$ but $R$ is not an algebra homomorphism (not multiplicative). It also has the property that
> $\at{R}{K[X]^{G}} = \mathrm{id}$
> In this context $R$ is again called the \*\*Reynolds Operator

---

## Intrinsic Definitions of Linear Reductivity and Tools for More Examples

We can note that $G$ can act on itself by left and right translation. For any $\sigma \in G$ let
$L_{\sigma}: G \to G , \tau \mapsto \sigma \tau$
and
$R_{\sigma}: G \to G, \tau \mapsto \tau \sigma^{-1}$

> [!theorem|\*] Intrinsic Characterisation using Invariant Integral
> For an affine algebraic group $G$ the following are equivalent
>
> 1. $G$ is linearly reductive
> 2. There exists a linear map $I: \K[G] \to \K$ such that $I(1) = 1$ and $\forall \sigma \in G, g \in \K[G]$: $I(g \circ L_{\sigma}) = I(g) = I(g \circ R_{\sigma}) \iff \forall \sigma \in G: I \circ L_{\sigma}^{*} = I = I \circ R_{\sigma}^{*}$
>    We call the map $I$ a (translation-)invariant integral.

> [!example|\*] Multiplicative Group and its Families are linearly reductive
> The group $\mathbb{G}_{m}$ is linearly reductive. Also the algebraic Torus defined by
> $T_{n} = \mathbb{G}_{m} \times \ldots \times \mathbb{G}_{m} \cong \set{ \mathrm{diag}(a_{1}, \ldots, a_{n}) \midline a_{i} in \mathbb{G}_{m}}$
> is also linearly reductive.

> [!corollary|4.6]
> Let $|G| < \infty$ then
> $G \text{ is linearly reductive} \iff \mathrm{char}(K) \nmid |G|$

> [!theorem|4.7] Linear Reductivity Trick for Complex Numbers
> Let $K = \C$ and let $G$ be an affine algebraic group such that $G$ has a subgroup $H \leq G$ which is Zariski dense, meaning $\bar{H} = G$ and compact in the euclidean topology. Then $G$ is linearly reductive.

> [!example|\*]
> Let $G = \mathbb{G}_{m} = \C^{\times}$ and let $H = S^{1} \subset \C$ is a prime example for this theorem. We can extend this to $n$-dimensional torus $\prod_{i=1}^{n} H$ inside $G = \prod_{i = 1}^{n} \mathbb{G}_{m}$

> [!theorem|\*]
> $GL_{n}(\C)$
> is linearly reductive
