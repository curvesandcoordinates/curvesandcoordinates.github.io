---
publish: true
created: 2026-02-08T17:30:45.159+01:00
modified: 2026-06-10T19:14:50.873+02:00
tags:
  - thoughts
---

We would like to characterize what properties stay invariant under these [[Möbius Transformations]]. For some vectors $\begin{pmatrix}\alpha \\ \beta\end{pmatrix}$ and $\begin{pmatrix}\gamma \\ \delta\end{pmatrix}$ consider the determinant as a map on columns
$\det\left(\begin{pmatrix}\alpha \\ \beta\end{pmatrix}, \begin{pmatrix}\gamma \\ \delta\end{pmatrix} \right) = \det \begin{pmatrix}\alpha & \gamma \\ \beta  & \delta\end{pmatrix} = \det\left(M \begin{pmatrix}\alpha \\ \beta\end{pmatrix}, M\begin{pmatrix}\gamma \\ \delta\end{pmatrix} \right)$
where $M \in SL_{2}(\C)$. This is in essence fine, but since we are working with scalar multiples, the invariance expressed here is not adequate. There is in fact no invariance for two or three points for given Moebius transformations. There is one for four points, namely the cross-section:

> [!definition|\*] Cross Ratio
> The cross-ratio of four vectors $v_{1}, \ldots, v_{4} \in \C^{2} \setminus \set{0} \cong \C P^{1}$ is given by
> $\mathrm{cr}(v_{1}, v_{2}, v_{3}, v_{4}) := \frac{\det(v_{1}, v_{2}) \det (v_{3}, v_{4})}{\det(v_{2}, v_{3}) \det(v_{4}, v_{1})}$

Since $\det \left(\begin{pmatrix}a \\1\end{pmatrix}, \begin{pmatrix}b \\ 1\end{pmatrix}\right) = a - b$ we find for four finite points $a, b, c, d \in \C$ we can write
$\mathrm{cr}(a, b, c, d) = \frac{(a-b)(c-d)}{(b-c)(d-a)}$

this cross ratio is invariant under Möbius transformations. We can thus use it in the context of curves to determine an invariant of our curve that stays invariant under Möbius tranformation, which are the natural transforms in our space.
