---
publish: true
created: 2026-02-09T23:14:17.289+01:00
modified: 2026-06-10T19:14:50.785+02:00
tags:
  - thoughts
---

A special class of edge-constraint nets are circular nets: nets such that all elementary quadrilaterals are inscribed in circles (they therefore have real cross-ratio). In this case there is a way to construct a matching Gauss map $n$ such that the pair is edge-constraint. Start with one normal $n \in S^{2}$. generate its neighbours $n_{1}$ by reflecting $n$ on the plane that bisects the edge $f_{i} - f$ orthogonally. This way the edge-constraint condition is trivially satisfied. However, one has to check that evolving this construction around a face of f is consistent. But this is easy to see: the reflection planes bisect the edges of the quadrilateral. since the quadrilateral is circular, the planes all intersect in the axis of the circle. Thus, the four iterated reflections mount to a 360 degrees rotation around said axis. giving that we get back to our starting normal. So, this construction can be consistently extended over the whole net f, funishig an edge- constraint Gauss map for f. The minimal surfaces we constructed above are, in fact, of this type. But now we can look at more examples of surfaces of constant curvature:

Circular Nets are a special class of [[Edge-Constraint Nets]] which have connections for [[Discrete Minimal Surfaces]] in the sense that their Minimality is characterized by the following property.

> [!theorem|\*] Non Minimal Circular Nets
> The Circular net $f$ with normal $n$ has constant mean curvature $H \neq 0$ if and only if there exists a dual surface in constant distance
> $f^{*} = f + dn$
> with $f^{*}$ with normal $n$ has mean curvature $-H$ and the surface $f + \frac{d}{2} n$ has constant Gauss curvature $K = 4 H^{2}$

`\begin{proof}`
We finde that
$A(f, n) = H A(f) \iff \frac{1}{H} A(f, n) = A(f, f) \iff A\left( f, f - \frac{1}{H} n \right) = 0$
So $d = -\frac{1}{H}$ and $f + dn$ needs to be dual. Since $f = f^{*} - dn$ it follows that $f^{*}$ has mean curvature $-H$. Finally
$K\left( f + \frac{d}{2} n \right) = \frac{A(n)}{A\left( f + \frac{d}{2} n \right)} = \frac{A(n)}{A(f) + d A(f, n) + \frac{d^{2}}{4} A(n)} = 4 H^{2}$
`\end{proof}`

This notion of discrete cmc surfaces coincides with the one introduced in an algebraic way by Bobenko and Pinkall.
