---
publish: true
aliases:
  - group action
created: 2025-10-19T10:26:55.000+02:00
modified: 2026-06-10T19:14:49.959+02:00
tags:
  - thoughts
---

We can consider

---

## Scrap from other Notes

> [!definition|2.3.1] Homogeneous Spaces
> Given a Lie Group $G$ and a smooth manifold $M$ we can define an _action of $G$ onto $M$_ via a Map
> $\theta: G \times M \to M, (g, x) \mapsto g \cdot x$ We call $\theta$ _transitive_ if
> $\forall x, y \in M \exists g \in G: \quad g \cdot x = y$ If $\theta$ is a continuous transitive action of $G$ onto $M$ we call $M$ a _$G$-Space or Homogeneous Space_.

he two concepts which closely characterize [[Group Actions|group actions]] are the orbit of a point and the stabiliser of a point. They ask natural questions, namely: _What points of a manifold can I get to, starting from a specific point $x \in M$?_ and \*What group elements leave my point $x \in M$ fixed under the action?

> [!definition|2.3.4] Stabiliser and Orbit
> Given a group $G$ acting on a set $M$ and let $x$ be an element of $M$
> we define
>
> 1. The _orbit_ of $x$: $G_M(x) := \set{y \in M \,\middle|\, \exists g \in G: g \cdot x = y}$
>
> 2. The _stabilizer_ or _isotropy group_ of $x$: $\stab(x) := \set{g \in G \,\middle|\, g \cdot x = x}$

> [!theorem|2.3.6] Homogeneous Space Characterisation Theorem
> Let $G$ be a Lie group, let $M$ be a homogeneous $G$-space, and let $p$ be any point of $M$ . The isotropy group $\stab(p)$ is a closed subgroup of $G$, and the map $F: \faktor{G}{\stab(p)} \to G_{M}(x)$ defined by $F(g + \stab(p)) = g\cdot p$ is an equivariant diffeomorphism.

^414357
