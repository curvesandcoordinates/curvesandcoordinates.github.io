---
publish: true
created: 2026-02-12T19:24:52.147+01:00
modified: 2026-06-10T19:14:50.194+02:00
tags:
  - thoughts
---

Suppose $R$ is even a field then we can define an addditional notion of rank, namely the border-rank:
$\mathrm{brk}(M) := \min \set{k \in \N \midline M \in \overline{\set{A \in R^{n \times m}, \mathrm{rank}(A) \leq k}}}$
Where the closure is the Zariski Closure.

Note that our case we have a nice simplification since the rank is (by the determinental rank) given as zeros of polynomials and thus $\overline{\set{A \in R^{n \times m}, \mathrm{rank}(A) \leq k}}$ is an algebraic variety and closed. Thus
$\mathrm{brk}(M) = \mathrm{rank}(M)$
This simplification doesnt happen in [[Tensor Products|tensor products]] with mutliple faktors:

We will often state Rank results in terms of tensors on vector spaces, since this case is simpler and also more practical Our definitions will first nonetheless be over general modules

> [!definition|\*] Border Rank for Tensors
> For $m \in R^{d_{1}} \otimes \ldots \otimes R^{d_{n}} =: V$ we define the border rank as
> $\mathrm{brk}(m):= \min \set{r \midline m \in \overline{\set{a \in V \midline \mathrm{rank}(a) \leq r}}}$

From the deifnition we can immeadiately see that
$\mathrm{brk}(m) \leq \mathrm{rank}(m)$

> [!remark|\*]
> The [[Topology as a Language]] chosen here normally is the [[Zariski Topology]] if $R = \K$. Also for $R = \C$ the Zariski closure of this set equals the norm closure.
