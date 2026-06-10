---
publish: true
aliases:
  - Algebra
  - Exterior Algebra
  - Ring Algebra
  - subalgebra
  - $R$-Algebra
  - $\K$-Algebra
  - k-Algebra
created: 2025-11-11T16:20:17.424+01:00
modified: 2026-06-10T19:14:50.393+02:00
tags:
  - thoughts
---

In our aim to generalise structures found a beginning course in mathematics we went from [[Groups|groups]] to [[Rings|rings]] and from [[Rings|rings]] we generalise to [[Ring Modules|R-Module]]. Now the next generalisation is to consider the object $R[x]$ for some ring $R$. This is the set of polynomials with coefficient from $R$ of the form
$f(x)= \sum\limits_{i =0}^{n} r_{i} x^{i}$
We notice that this object while having a $R$-module structure, also have a canonical multiplication of elements. This is given by usual polynomial multiplication. We should think of this as the canonical example for an algebra.

## Formal Definition

Let $R$ be a commutative ring with $1 \neq 0$ we then define

> [!definition|\*] $R$-Algebra
> An $R$-Algebra is a ring $A$ together with a ring homomorphism
> $\alpha: R \to A$
> Equivalently $A$ is an $R$-Algebra if it is a ring and a $R$-Module such that multiplication by $R$ is $R$-Bilinear
> $r(ab) = (ra)b = a (rb)$
> for all $r \in R, a,b \in A$

The map $\alpha$ can be thought of as a type of embedding (even though it doesnt need to be injective). It tells us where in $A$ we can find our coefficients $R$ and it being a ring homomorphism makes multiplcation by $\alpha(r)$ behave how we want it to.

> [!example|\*] Polynomial Rings are Algebras
> Going back to the canonical example of from the introduction we see that we can consider $R[x]$ an $R$-algebra by noting that $R[x]$ is a ring, and we also have a homomorphism:
> $r \mapsto p_{r}$
> where $p_{r}(x) = r$ is the constant polynomial.

> [!example|\*] Other Small Example
> We can also construct an intrinsic algebra by describing $\C$ as an $\R$ algebra since we also have a nice homomorphism given by
> $\alpha: x \mapsto x + 0 \cdot i$

An important property for a general ring is that we want some sort of finiteness condition. Namely for something like the polynomial ring we would like to say that the objects of this are expressible in a sensible “finite” way since we only have generator $x$ and for more general rings we have generators $x_{i}$. To get to this lets consider how we would generate subalgebras

> [!definition|\*] Generating Subalgebras
> Let $A$ be an $R$-Algebra and $a_{1}, \ldots, a_{n} \in A$ some elements. We can then construct the smallest Algebra containing these elements by considering the following map
> $\phi: R[x_{1}, \ldots, x_{n}] \to A, \quad \sum\limits_{i}r_{i}x_{i} \mapsto \sum\limits_{i} r_{i}a_{i}$
> The image of $\phi$ is denoted $R[a_{1}, \ldots, a_{n}]$ and is the smallest subalgebra containing the elements $\set{a_{i}}$.

Now that we have an idea of generation we can define a finitely generated algebra

> [!definition|\*] Finitely Generated Algebra
> We call an $R$-Algebra $A$ finitely generated if we can find elements $a_{1}, \ldots, a_{n} \in A$ such that
> $A = R[a_{1}, \ldots, a_{n}]$

A nice little proposition we get from this is

> [!proposition|\*] Finitely Generated means Quotient of Polynomial Algebra
> If an $R$-Algebra $A$ is finitely generated we have an isomorphism
> $A \cong \faktor{R[x_{1}, \ldots, x_{n}]}{I}$
> for some ideal $I \subset R[x_{1}, \ldots, x_{n}]$.

`\begin{proof}`
This is a simple consequence of the isomorphism theorems telling us that the map
$\phi: R[x_{1}, \ldots, x_{n}] \to A, \quad \sum\limits_{i}r_{i}x_{i} \mapsto \sum\limits_{i} r_{i}a_{i}$
giving us that
$A \cong \im \phi \cong \faktor{R[x_{1}, \ldots, x_{n}]}{\ker \Phi}$
`\end{proof}`

> [!example|\*]
>
> - Every [[Rings|ring]] is an associative $\Z$-Algebra with respect to ring multiplication
> - For a given [[Ring Modules|Module]] $M$ the endomorphism ring $\mathrm{End_{R}}(M)$ is an associative, unital $R$-algebra w.r.t composition of maps
> - $R[x]$ is an associative, commutative, unital $R$-Algebra
> - Any $R$-Algebra $M$ remains an $R$-algebra if multiplication is replaced with $(a, b) \mapsto ab + ba \quad \text{ or } \quad (a, b) \mapsto ab - ba$

### Specilization to $\K$-Algebras

Algebras are the natural language to fomulate the theoretic side of affine varieties. In this case we specialize ourselves to $R = \K$ some field and mostly consider $\K$ algebras.

We call a $\K$-Algebra that is finitely generated **affine**, since via [[Hilbert’s Nullstellensatz]] we can associate this with an affine variety of some properties.

## Exotic Algebras: Exterior Algebra

The multiplication in our Algebras is very freely defined. We can specify it a little more by forcing it to be anti-commutative in a certain sense. We will specialise this to constructing $\R$-Vector spaces since that is the way we use it when considering the wedge product of [[Differential Forms on Manifolds|differential forms]] but this can all be generalised.

> [!definition|\*] Exterior Algebra over $\alpha_1, \ldots, \alpha_n$
> We construct a free $\R$-Vector Space with Basis
> $B = \set{\alpha_{i_1} \cdot \ldots \cdot \alpha_{i_k} \,\middle|\, i_1 < \ldots < i_k, k \in \set{1, 2, \ldots, n}}$
> for some $n \in \mathbb{N}$. We denote this space as
> $\Lambda[\alpha_1, \ldots, \alpha_n] := \Span_\R(B)$
> This space will be considered an Algebra, given the definition of an associative and distributive multiplication satisfying
>
> $$$\begin{aligned}
>         \alpha_i \cdot \alpha_j &= - \alpha_j \cdot \alpha_i \\
>         \alpha_i^2 &= 0    
> \end{aligned}$$
> We call this space the *exterior algebra* over $\alpha_1, \ldots, \alpha_n$. The *k-homogeneous elements* of this algebra $\Lambda^k[\alpha_1, \ldots, \alpha_n] := \Span_\R(C)$ where
> $$C = \set{b \in B \,\middle|\, \deg(b) = k}$$
> Specifically we define the *degree* of a basis element as $\deg(\alpha_{i_1} \cdot \ldots \cdot \alpha_{i_k}) = \deg(\alpha_{i_1})\ldots \deg(\alpha_{i_k})$
> $$$

We get many freedoms in this definition. The most important one is that the degree of every generating element is not predetermined. This means we can construct spaces, like $\Lambda[x_2, x_3]$ with $\deg(x_2) = 2$ and $\deg(x_3) = 3$ and get a space whose Basis is given by $B = \set{x_2, x_3, x_2 \cdot x_3}$ where the homogeneous elements are given by

$$$\begin{aligned}
    \Lambda^2[x_2, x_3] &= \Span_\R (x_2) \\
    \Lambda^3[x_2, x_3] &= \Span_\R (x_3) \\
    \Lambda^6[x_2, x_3] &= \Span_\R (x_2 \cdot x_3)
\end{aligned}$$
> [!remark|*]
> In this example, we have used the notation that every generator $x_i$ is of degree $i$. We will keep using this convention as a shorthand, but it should be noted that this is not necessary.
$$$
