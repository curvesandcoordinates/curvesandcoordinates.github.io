---
publish: true
created: 2026-02-22T17:31:25.874+01:00
modified: 2026-06-10T19:12:42.420+02:00
tags:
  - academia
---

Let $G$ be finite of infinite and denote a $G$-Module $V$ with $\K[V] = \K[x_{1}, \ldots, x_{n}]$ where $n = \dim(V)$.

> [!definition|11.1]
> A subset $S \subset \K[V]^{G}$ is called separating if for all $v, w \in V$ we have that
> $\exists f \in \K[V]^{G}: f(v) \neq f(w) \implies \exists f \in S: f(v) \neq f(w)$

> [!example|\*]
> Let $\zeta \in \K$ be a primitive $k$-th root of unity, $G = \left< \begin{pmatrix} \zeta  & 0 \\ 0  & \zeta\end{pmatrix} \right> \cong \Z_{k}$. From the first exercise we know that $\K[V] = \K[x, y]$ and that
> $f_{i} = x^{i} y^{k -i}$
> for $i = 0, \ldots, k$. We also know that $\K[V]^{G} = \K[f_{0}, \ldots, f_{k}]$ minimally
> We know claim that $S = \set{f_{0}, f_{1}, f_{k}}$ is separating. This is true due to the formula
> $f_{i} = \frac{f_{1}^{i}}{f_{0}^{i-1}}$
> Now let $f_{i}(v) = f_{i}(w)$ for $i = 0, 1, k$. Then we get cases
> 4\. $f_{k}(v) \neq 0 \implies f_{i}(v) = f_{i}(w)$ for $i = 1, \ldots, k-1$
> 5\. $f_{0}(v) = 0 = f_{0}(w) \implies 0 = f_{0}(v) = v_{y}^{k}$ which means that $f_{i}(v) = 0 = f_{i}(w)$ for $i < k$
> We can see a similar thing in Exercise 32.

> [!theorem|11.5]
> There is always a finite separating set $S \subset \K[V]^{G}$ even if $G$ is infinite and $\K[V]^{G}$ not finitely generated.

> [!theorem|11.6]
> There are at most $2n + 1$ separating invariants for $n = \dim(V)$ assume $\K$ to be infinite.

> [!remark|\*] Oddities of Separating Invariants
>
> 1. Given a minimal set of separating invariants it does not need to have minimal size, even when restricting to homogeneous separating invariants.
> 2. Separating Invariants may depend on the ground field $\K$
>    \[!theorem|11.5]
>    There is always a finite separating set $S \subset \K[V]^{G}$ even if $G$ is infinite and $\K[V]^{G}$ not finitely generated.
