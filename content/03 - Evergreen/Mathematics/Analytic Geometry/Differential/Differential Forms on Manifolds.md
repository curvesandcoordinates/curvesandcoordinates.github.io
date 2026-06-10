---
publish: true
aliases:
  - differential forms
  - k-forms
created: 2025-11-09T23:50:23.126+01:00
modified: 2026-06-10T19:14:50.627+02:00
tags:
  - thoughts
---

The language of differential forms allow for computational control over a general smooth manifold. It also is used extensively in [[De Rahm Cohomology]] to be the most computable form of [[Homology and Cohomology Theories|cohomology]]. We also see the language used in concepts like Poincare Duality and intersection theory.

Since we are working on general smooth manifolds we need to be familiar with the concepts of [[Tangent Vectors on Manifolds]] and the [[Formal Construction of Real Manifolds]].

In their essence differential forms encode all the intuition that we usually have for dual vector spaces. Namely given a local description of tangent vectop at a point, by which I mean for a given point $p \in M$ with a local chart $(U, h)$ with $h(q) = (x_{1}(q), \ldots, x_{n}(q))$ we can define any vector $v_{p} \in T_{p} M$ to be a linear combination
$v_{p} = \sum\limits_{i=1}^{n} \lambda_{i} \at{\frac{\del}{\del x_{i}}}{p}$
For an object like this we can simply check how much its pointing in a given tangential direction via the dual basis of
$\set{\at{\frac{\del}{\del x_{1}}}{p}, \ldots, \at{\frac{\del}{\del x_{n}}}{p}}$

> [!definition|3.1.3] Canonical differential 1-Forms
> A map $\omega$ which assigns $M \ni p \mapsto \omega_p \in (T_pM)^\ast$ smoothly is called a differential 1-Form. We call the forms
> $dx_i: M \ni p \mapsto (dx_i)_p$
> such that $(dx_i)_p (\left. \frac{\partial}{\partial x_j} \right|_p) = \begin{cases} 1 \quad i = j \\ 0 \quad i \neq j \end{cases}$ the canonical 1-Forms on $M$.\ A general differential 1-Form $\omega$ is given as a linear combination of $dx_i$ as follows $\omega_p = \sum\limits_{k} f(p) (dx_k)_p$
> for a map $f \in C^{\infty}(M, \mathbb{R})$

One way to visualise a 1-Form is to think of a continuous tangent vector field on a two-dimensional manifold like $S^2$. This can then at every point compare a given tangent vector to the vector of the field and give a number on how much they point in similar directions.

A $k$-Form, on a manifold, will be able to take in $k$ different tangent vectors at a point and check how much a "combination" spanned by them points into a specified direction. This is geometrically quite vague, but becomes more apparent if we look at the construction of 2-Forms.

> [!definition|3.1.4] Differential 2-Forms on a Manifolds
> Given a $n$-dimensional manifold $M$ with $n \geq 2$ and a point $p$ we can define the wedge product of $dx_i$ and $dx_j$ denoted as $dx_i \wedge dx_j$ to be a map
> $dx_i \wedge dx_j: M \ni p \mapsto (dx_i \wedge dx_j)_p$
> where
> $(dx_i \wedge dx_j)_p: T_pM \times T_pM \to \R, \quad (v, w) \mapsto \det \begin{bmatrix} (dx_i)_p(v) & (dx_j)_p(v) \\ (dx_i)_p(w)&(dx_j)_p(w) \end{bmatrix}$
>
> A general differential $2$-Form on $M$ say $\omega$ is given by a linear combination of the form
> $\omega_p = \sum\limits_{i < j} f(p) (dx_i \wedge dx_j)_p$
> for $f \in C^{\infty}(M, \mathbb{R})$.

This definition tells us that a canonical 2-Form takes in 2 tangent vectors at $p$ and gives us the signed area of the parallelogram constructed by these vectors.By doing this at every point, it is now not only checking if a tangent vector is pointing in a predetermined direction, but rather checking if the "local signed parallelogram" is pointing into the direction of a predetermined "local signed parallelogram".

It is apparent that we can generalise this definition to $k$-forms in the following way

> [!definition|3.1.5] Differential $k$-Forms on a Manifold
> Given a manifold a $n$-dimensional $M$ and a point $p$ we can define the wedge product of $dx_{i_1}, \ldots, dx_{i_k}$ denoted as $dx_{i_1} \wedge \ldots \wedge dx_{i_k}$ for $1 \leq i_1 < \ldots < i_k \leq n$ to be a map
> $dx_{i_1} \wedge \ldots \wedge dx_{i_k}: M \ni p \mapsto (dx_{i_1} \wedge \ldots \wedge dx_{i_k})_p$
> where
> $(dx_{i_1} \wedge \ldots \wedge dx_{i_k})_p: \left( T_pM \right)^k \to \R, \quad (v_1, \ldots, v_k) \mapsto \det \begin{bmatrix} (dx_{i_1})_p(v_1) &\ldots& (dx_{i_k})_p(v_1) \\ \vdots & & \vdots \\ (dx_{i_1})_p(v_k) & \ldots & (dx_{i_k})_p(v_k) \end{bmatrix}$
>
> A general differential $k$-Form on $M$, say, $\omega$ is given by a linear combination of the form
> $\omega_p = \sum\limits_{1 \leq i_1 < \ldots < i_k \leq n} f(p) (dx_{i_1} \wedge \ldots \wedge dx_{i_k})_p$
> for $f \in C^{\infty}(M, \mathbb{R})$.
>
> We denote the space of $k$-forms on $M$ as $\Omega^k M = \Span_{C^{\infty}(M)} \set{dx_{i_1} \wedge \ldots \wedge dx_{i_k} \midline 1 \leq i_1 < \ldots < i_k \leq n}$ and the is denoted as $\Omega^\ast M = \bigoplus_{k=0} \Omega^k M$
> with the definition that $\Omega^0 M = C^\infty(M, \R)$ and for $k > n: \quad \Omega^k M = \set{0}$

### Algebra Structure of $\Omega^{*}M$

Its important to note that part of the inherent structure in these definitions is given by the wedge product. We used it to denote $k$-Forms and their basis but in general we can define the wedge product of two forms to be a map

> [!definition|\*] Wedge Product of Differential Forms
> Given two forms $\omega \in \Omega^{k}M$ and $\eta \in \Omega^{l}M$ we define the wedge product $\omega \wedge \eta \in \Omega^{k+l} M$ to be a form such that
> $(\omega \wedge \eta)_{p}(v_{1}, \ldots, v_{k+l}) = \frac{1}{k! \cdot l!} \sum\limits_{\pi \in S_{k+l}} \sgn(\pi) \omega(v_{\pi(1)}, \ldots, v_{\pi(k)}) \eta(v_{\pi(k+l)}, \ldots, v_{\pi(k+l)})$

This product has a very special structure since it allows to multiply two differential forms, whislt respecting the paralleograms they are measuring for. This causes the following properties which are easy to prove

> [!proposition|\*] Properties of the Wedge Product
> Given $\omega, \mu \in \Omega^{k}M, \eta \in \Omega^{l}M, \nu \in \Omega^{m}M$ we have the following statements hold:
>
> - Distributivity: $(\omega + \mu) \wedge \eta$
> - Anti-Commutativity: $\omega \wedge \eta = (-1)^{kl} \eta \wedge \omega$
> - Associativity: $(\omega \wedge \eta) \wedge \nu = \omega \wedge (\eta \wedge \nu)$

We call an object with these properties an [[Algebras|exterior algebra]]. This structure is transfered to any other usecase of differential forms which add for example to the calculability of [[De Rahm Cohomology]].

## Differentials

With all this structure, we can also define a nice way to map from $\Omega^k M \to \Omega^{k+1}$ by using the change in $f \in C^\infty(M, \R)$.

> [!definition|3.1.6] Differential of $k$-Forms
> Given a manifold $M$ and a differential $0$-form $f \in \Omega^0 M = C^\infty(M, \R)$ we define the differential of $f$ as $df \in \Omega^1 M$
> $df_p = \sum\limits_k  \frac{\partial f}{\partial x_k} (p) (dx_k)_p$
> We can, in general, define $d: \Omega^\ast M \to \Omega^\ast M$ with
> $d\left( \sum\limits_{1 \leq i_1 < \ldots < i_k \leq n} f(p) (dx_{i_1} \wedge \ldots \wedge dx_{i_k})_p \right)_p = \sum\limits_{1 \leq i_1 < \ldots < i_k \leq n} df_p \wedge (dx_{i_1} \wedge \ldots \wedge dx_{i_k})_p$

Reading this, one should think of our $1$-form $\omega$ on $S^2$, which is visualised as a vector field. The differential of this $1$-form, denoted $d\omega$, can intuitively be understood as follows: At any point on the manifold, $d\omega$ takes two tangent vectors as inputs and compares the parallelogram spanned by these to the parallelogram spanned by the predetermined direction of $\omega$ and its direction of change.
