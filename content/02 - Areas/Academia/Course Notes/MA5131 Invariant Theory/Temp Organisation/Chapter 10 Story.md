---
publish: true
created: 2026-02-22T17:28:05.994+01:00
modified: 2026-06-10T19:12:42.414+02:00
tags:
  - academia
---

> [!definition|10.1] Hilbert Series
> Let $R$ be a noetherian graded $\K$-Algebra and $M$ a graded noetherian $R$-Module (for example $M = R$). Then
> $H(M, t) = \sum\limits_{d \in \Z} \dim_{\K}(M_{d}) t^{d} \in \Z[[t]][t^{-1}]$
> is a formal laurant series called the \*\*hilbert series

> [!proposition|10.2] Hilbert Series of Polynomial Ring
> Let $R = \K[f_{1}, \ldots, f_{l}]$ with $f_{i}$ homogeneous of degree $d_{i}$ and algebraically independent, then
> $H(R, t) = \frac{1}{(1 - t^{d_{1}})\cdot \ldots \cdot (1 - t^{d_{l}})}$

> [!corollary|10.3]
> Let $\K[V]^{G}$ be Cohen Macaulay and let $f_{1}, \ldots, f_{n}$ be primary invariants of degrees $d_{1}, \ldots, d_{n}$ and let $g_{1}, \ldots, g_{m}$ be minimal secondary invariants of degrees $e_{1}, \ldots, e_{m}$. Then:
> $H(\K[V]^{G}, t) = \frac{{t^{e_{1}} + \ldots + t^{e_{m}}}}{(1 - t^{d_{1}}) \cdot \ldots \cdot (1 - t^{d_{n}})}$

> [!theorem|10.5] Molien’s Formula
> $H(\K[V]^{G}, t) = \frac{1}{|G|} \sum\limits_{\sigma \in G} \frac{1}{\det(1 - t \sigma)}$
