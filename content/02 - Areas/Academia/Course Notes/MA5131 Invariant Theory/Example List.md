---
publish: true
created: 2026-02-23T09:45:12.510+01:00
modified: 2026-06-10T19:12:42.260+02:00
tags:
  - academia
---

### Canonical Bad-Behaved Actions

Consider the additive group $\mathbb{G}_{a}$ acting on $\K[x]$ by
$t \cdot f(x) = f(e^{t}x)$
this action is non-locally finite but not algebraic since we arent just working with polynomials.

### Linearly Reductivity using Topological Properties

We know that for $\C$ we can prove $G$ is linearly reductive if we can find a subgroup $H$ such that $\bar{H} = G$ in Zariski Topology and compact in the euclidean topology.

Prime example is $\mathrm{SL}_{n}(\C)$ by picking $H := \mathrm{SU}_{n}(\C)$ which is compact in the euclidean topology and Zariski dense by the singular value decomposition giving us
$\mathrm{SL}_{n}(\C) = H D H$
where $D$ is diagonal matrices with product $1$. Using the fact that $\overline{H \cap D} = D$ gives us $D \subset \bar{H}$ and thus
$G = H D H \subset H \overline{H} \overline{H} \subset \overline{H} \overline{H} \overline{H} = \overline{H} \subset G$

###
