---
publish: true
created: 2025-10-14T09:40:56.230+02:00
modified: 2026-06-10T19:14:49.915+02:00
tags:
  - thoughts
---

Consider for $\mathbb{F} = \Z_{p}$ for a prime $p$. We can then define a product on $\mathbb{F} \times (\mathbb{F} \times \mathbb{F})$ by
$(x, y, z) \cdot (x', y', z') = (x + x'. y + y', z + z' + xy)$
This can be seen as a semi-direct product using the inner automorphism
$\rho: \mathbb{F} \to \mathrm{Aut}(\mathbb{F} \times \mathbb{F}), \quad \rho_{x}(u, v) = \begin{pmatrix}u & v\end{pmatrix} \begin{pmatrix}1 & 1 \\ 0 & 1\end{pmatrix}^{x}$
then using this we have that we deine the non-Abelian group called the **Finite Heisenberg Group** as
$\mathbb{H}_{p} = \set{\begin{pmatrix}1 & x & z \\ 0 & 1 & y \\ 0 & 0 & 1\end{pmatrix} \midline x, y, z \in \mathbb{F}} \cong \mathbb{F} \ltimes_{\rho} (\mathbb{F} \times \mathbb{F})$
Where we can define a mapping to the upper triange matrices
$M: (x, y, z) \to \begin{pmatrix}1 & x & z \\ 0 & 1 & y \\ 0 & 0 & 1\end{pmatrix} $

We can now also consider the socalled **Schrödinger Representation** of the Heisenberg Group which is a map
$\pi: \mathbb{H}_{p} \to \mathcal{U}(L^{2}(\mathbb{F})), \quad \pi(x, y, z) = e^{\frac{2\pi i}{p} z} T_{y} M_{x}$
This is a unitary representation with the special connection to the [[Time-Frequency Analysis#^d241a0|Gaber Transform]] by noting that
$V_{g} f(y, x) = e^{\frac{2\pi i}{p} z} e^{-\frac{2\pi i}{p} xy} \innprod{f}{\pi[M(x, y, z)]g}$
