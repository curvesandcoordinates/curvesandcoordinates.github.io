---
publish: true
created: 2025-11-09T15:23:29.704+01:00
modified: 2026-06-10T19:14:50.043+02:00
tags:
  - thoughts
---

Consider $G = SL_{n} (\K)$ acting on $V = \K^{n \times n}$ by
$\sigma(A) = \sigma A$
Gathering invariants that come to mind we can again consider $f := \det$. We can ask if this might generate the invariant ring, by choosing a set $L$. Consider for $L$ the affine subspace
$L = \set{\mathrm{diag}(a, 1, \ldots, 1) \midline a \in \K}$
For $A \in V$ with $a = \det(A) \neq 0$ we can consider with $D_{a} = \mathrm{diag}(a, 1, \ldots, 1)$ that
$A D_{a}^{-1} \in SL_{n}(\K)$
and that $A D_{a}^{-1} D_{a} = A$ which means we have written the object $A$ in terms of being in the orbit of $G(L)$. So we trivially get that $\overline{G(L)} = V$.

We can also explicitly consider the normaliser and calculate
$\mathcal{N}_{G}(L) = \set{\mathrm{Id}_{n}}$
and we also get that $K[L] = K[x]$. To now apply our normal form principle we only need to look at the restriction of the candidate we had, but note that
$f(D_{a}) = \det(D_{a}) = a \implies \at{f}{L} = x$
Thus we know that
$\K[V]^{G} = \K[f] = \K[\det]$
