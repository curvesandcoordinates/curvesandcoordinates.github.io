---
publish: true
aliases:
  - Fibre bundle
  - bundle
created: 2025-11-09T23:08:42.834+01:00
modified: 2026-06-10T19:14:49.898+02:00
tags:
  - thoughts
---

> [!definition|\*] Fibre Bundles
> Let $B$ and $F$ be topological Hausdorff spaces. A fibre bundle with base $B$ and fibre $F$ is a hausdorff space $X$ together with a continuous map $p: X \to B$ called a projection map with the following properties:
>
> 1. For each $b \in B$ the preimage $p^{-1}(b)$, called the fibre of $b$, is homeomorphic to $F$
> 2. For every $b \in B$, there is a neighbourhood $U$ of $b$ such that there exists a homeomorphism $\phi: p^{-1}(U) \to U \times F$ such that $p = \pi_1 \circ \phi$ with $\pi_1: U \times F \to U$

The concept of a fibre bundle is a natural extension of a product structure. Especially the second condition of the definition is often called the _local triviality condition_, alluding to the fact that a simple product of the form, $M = B \times F$ is called a trivial fibre bundle. Trivial fibre bundles already give us many examples, where we can explicitly identify all the components of the fibre bundle.
Take for example $M = S^1 \times [0,1]$ the cylinder. Here we immediately know that it is a Fibre bundle with Base $S^1$ and fibres $\set{p} \times [0,1] \cong [0,1]$. Visually, it is useful to think of strands of the unit interval extending from every point of the circle upwards, since this naturally makes the projection of any point on the cylinder just following the strand down to $S^1$.

![[04 - Resources/Assets/Trivial Sphere Fibrebundle MA6012.png| center | 200]]

A more complex example which already shows the versatility of the fibre bundle structure is that of the Möbius strip. It can be defined as the space
$M = \faktor{[0, 1] \times [0, 1]}{\sim}$
where $\sim$ is an equivalence relation such that $\forall x \in [0, 1]: (0, x) \sim (1, 1-x)$. This relation gives the space a "twist" which makes it inexpressible as a product of two spaces. It is still a fibre bundle though, with the projection mapping to the embedded Circle
$X = \faktor{\set{(x, 0.5) \,\middle|\, x \in [0, 1]}}{\sim} \cong S^1$

![[04 - Resources/Assets/Non-Trivial Fibre Bundle Mobius MA6012.png| center | 400]]
