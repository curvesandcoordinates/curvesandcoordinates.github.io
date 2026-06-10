---
publish: true
created: 2025-11-09T00:45:09.000+01:00
modified: 2026-06-10T19:14:50.067+02:00
tags:
  - thoughts
---

Let $G \subset GL(V)$ or more generally
$G \subset AGL(V) := \set{f: V \to V \midline f(v) = \phi + v_{0}, \phi \in GL(V), v_{0} \in V}$
Let $L \subset V$ be an affine subspace, meaning $L = v' + U$ with fixed $v' \in V$ and subspace $U$ or a regular subspace, then we form
$\mathcal{N}_{G}(L) = \set{\sigma \in G \midline \sigma(L) \subset L} \subset G$
the normaliser of $L$ and
$\mathcal{C}_{G}(L) := \set{\sigma \in G \midline \forall v \in L, \quad \sigma(v) = v}$
the centraliser of $L$
(Check: $\mathcal{C}_{G}(L) \triangleleft \mathcal{N}_{G}(L)$)

Then we can construct
$\mathcal{W}_{G}(L) = \faktor{\mathcal{N}_{G}(L)}{\mathcal{C}_{G}(L)}$
which is sometimes called the Weyl group. It acts on $L$ naturally by
$(\sigma \cdot\mathcal{C}_{G}(L))(v) = \sigma(v)$

Now take a restriction map $\rho: K[V] \to \set{f: L \to K}, \quad f \mapsto \at{f}{L}$ then we define
$K[L] := \im \rho$
(In fact we can check that $K[L] \cong K[U]$ where $L = v + U$)

The Weyl group $\mathcal{W}_{G}(L)$ now also acts on $K[L]$ by
$\sigma \cdot \mathcal{C}_{G}(L) (\sigma(x)) = \at{f \circ \sigma^{-1}}{L}$

> [!theorem|2.1] Normal Form Principle
> In the above situation let $f_{1}, \ldots, f_{m} \in K[V]^{G}$ such that
>
> 1. $\exists H \leq \mathcal{W}_{G}(L): K[L]^{H} = K[\rho(f_{1}) \ldots, \rho(f_{m})]$
> 2. $G(L) = \set{\sigma(v) \midline \sigma \in G, v \in L}$ is Zariski Dense (meaning almost every $G$ orbit passes through $L$)
>
> Then $K[V]^{G} = K[f_{1}, \ldots, f_{m}]$

`\begin{proof}`

> [!claim|1]
> $\rho(K[V]^{G}) \subset K[L]^{H}$

Let $f \in K[V]^{G}$ and let $\overline{\sigma} = \sigma \mathcal{C}_{G}(L) \in H$ then we can simply calculate that
$\overline{\sigma}(\rho(f)) = \at{\sigma(f)}{L} = \at{f}{L} = \rho(f)$

> [!claim|\*]
> $\widehat{\rho} := \at{\rho}{K[V]^{G}}$ is injective

Let $f \in \ker(\widehat{\rho})$ then we know that $\at{f}{L} = 0$ thus since $f$ is constant on orbits we knoe that $\at{f}{G(L)} = 0$ meaning that $f = 0$
Having proven these two properties we can now get to the actual proof. Consider some $f \in K[V]^{G}$, then by claim 1 we know that $\rho(f) \in K[L]^{H}$ which by the first hypothesis is given by $K[\rho(f_{1}), \ldots, \rho(f_{m})]$. We can even replace $\rho$ with $\widehat{\rho}$ since we are applying it to invariants. Now since $\widehat{\rho}(f)$ is a polynomial in $m$ variables we can write it like thi
$\widehat{\rho}(f) = F(\widehat{\rho}(f_{1}), \ldots, \widehat{\rho}(f_{m}))$
with some polynomial of degree $m$ $F$. Now we can note that restrictions commute with addition and multiplication nicely giving us the possibility to pull $\widehat{\rho}$ outside of the $F$.
Now note that by claim to
$\widehat{\rho}(F(f_{1}, \ldots, f_{m})) \implies f = F(f_{1}, \ldots, f_{m})$
which is what we wanted to prove.
`\end{proof}`

A main application of this theorem is seen in the calculation the [[Invariants of Square Matrices under Conjugation]] and in a simpler form the [[Invariants of Special Linear Matrices]].
