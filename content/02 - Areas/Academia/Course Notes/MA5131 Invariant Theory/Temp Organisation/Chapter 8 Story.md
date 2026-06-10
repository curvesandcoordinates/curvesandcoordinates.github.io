---
publish: true
created: 2026-02-22T16:31:09.986+01:00
modified: 2026-06-10T19:12:42.535+02:00
tags:
  - academia
---

Let $G$ be a finite group and $V$ a $G$ module. We will alwas write $n = \dim(V)$. Assume that $\K = \bar{\K}$ for convenience sake.

> [!definition|8.1] Codimension
> For $S \subset \K[V]$ we write $\mathcal{V}(S) \subset V$ the affine variety in $V$. We write
> $\mathrm{cd}(S) = n - \dim(\mathcal{V}(S))$
> where the definition of dimension is imported from AG but is intuitive enough. This value is called the co-dimension of the variety induced by $S$.
> Homogeneous polynomials $f_{1}, \ldots, f_{k} \in \K[V]_{+}$ are called a partial homogeneous system of parameters _(phsop)_ if
> $\mathrm{cd(\set{f_{1}, \ldots, f_{k}})} = k$
> From commutative algebra we can import that $k$ is the maximal possible $\mathrm{cd}$. A phsop is called a hsop if $k = n$.

> [!lemma|8.2] PHSOP
> Let $I \subset \K[V]^{G}$ a homogeneous ideal (strict) and write $k = \mathrm{cd}(I)$. Then there is a phsop $f_{1}, \ldots, f_{k} \in I$.

> [!theorem|8.3] Condition for Homogeneous System of Parameters
>
> 1. For homogeneous $f_{1}, \ldots, f_{n} \in \K[V]_{+}^{G}$ we have the equivalence $f_{1}, \ldots, f_{n} \text{ hsop} \iff \mathcal{V}(f_{1}, \ldots, f_{n}) = \set{0}$
> 2. An hsop exists.

> [!theorem|8.4] Primary and Secondary Invariants
> Let $f_{1}, \ldots, f_{n} \in \K[V]^{G}$ is an hsop. Then there exists $g_{1}, \ldots g_{m} \in \K[V]^{G}$ homogeneous such that
> $\K[V]^{G} = \sum\limits_{i = 1}^{m} A \cdot g_{i}$
> with $A = \K[f_{1}, \ldots, f_{n}]$. Also $f_{1}, \ldots, f_{n}$ are algebraically independent, since the Krull-Dimension $\dim(A) = \dim(\K[V]) = n$.
> The $f_{i}$ in this context are called **primary invariants** and the $g_{i}$ are called **secondary invariants**. Also note that the primary and secondary invariants together generate the invariant ring as an algebra meaning
> $\K[V]^{G} = \K[f_{1}, \ldots, f_{n}, g_{1}, \ldots, g_{m}]$

> [!theorem|8.5]
> Let $f_{1}, \ldots, f_{n} \in \K[V]^{G}$ hsop. Then there are secondary invariants $g_{1}, \ldots, g_{m}$ such that
> $\deg(g_{i}) \leq \sum\limits_{i = 1}^{n} (\deg(f_{i}) - 1)$

## Cohen Macaulay

> [!definition|8.6]
> $\K[V]^{G}$ is called Cohen-Macaulay (CM) if there exists an hsop $f_{1}, \ldots, f_{n}$ such that $\K[V]^{G}$ is free as an $A$-Module, $A = \K[f_{1}, \ldots, f_{n}]$

> [!theorem|8.7] Characterising Cohen-Macaulay
> If $\K[V]^{G}$ is Cohen Macaulay then for **every** hsop $f_{1}, \ldots, f_{n}$ we have that $\K[V]^{G}$ is free over $A = \K[f_{1}, \ldots, f_{n}]$

> [!example|\*]
> Consider $G = \set{id}$ and $f_{i} = x_{i}$, then $A = \K[V]$ and we can write $\K[V] = A \cdot 1$ free meaning $\K[V]$ is Cohen Macaulay

> [!theorem|8.8] Hochster-Egens
> In the non-modular case (meaning $\mathrm{char}(\K) \not\mid |G|$) then $\K[V]^{G}$ is Cohen Macaulay.

> [!theorem|8.9] Hochster-Roberts
> If $G$ is a linearly reductive group, then $\K[V]^{G}$ is Cohen-Macaulay.
