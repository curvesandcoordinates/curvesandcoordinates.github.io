---
publish: true
created: 2026-05-28T16:31:43.770+02:00
modified: 2026-06-10T18:25:32.435+02:00
tags:
  - math
  - visulization
---

In the context of schemes and subschemes we come to the ideal of a locally closed subscheme. This is meant to express a scheme that is “almost closed” in the sense that with a little adjustment is can become so. We can track this as a purely topological property

## Euclidean Topology

We first define the following

> [!definition|\*] Locally Closed Set
> Given a Topological Space $(X, \mathcal{T})$ we call a subset $U \subset X$ locally closed if there exists some open $O \subset X$ with $U \subset O$ such that in the Subset-Topology $U$ is closed in $O$.

This definition makes sense given the name, since the locally closed set is only closed if we restrict to a neighbourhood. Written out explicitly we can see that

> [!proposition|\*]
> $U \subset X \text{ is locally closed} \iff \exists O \subset X \text{ open}, C \subset X \text{ closed}: C \cap O = U$

Geometrically we can always keep the following image in mind
![[Locally Closed Sets - Visuals and Connection to Zariski Topology 2026-05-28 16.50.01.excalidraw]]

which shows that locally closed sets can be seen as sets that have at least one closed “side” in the general sense. This is very specific for the euclidean topology though

## Zariski Topology

In the zariski topology we know that closed sets are generated via zero loci $D(f)$ for some polynomial $f \in R[x_{1}, \ldots, x_{n}]$. The open sets are thus the entire space with finitely many unions of zero loci cut out.
