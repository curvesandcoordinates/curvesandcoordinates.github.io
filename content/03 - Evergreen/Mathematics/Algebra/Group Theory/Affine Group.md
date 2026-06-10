---
publish: true
created: 2025-10-13T18:05:38.833+02:00
modified: 2026-06-10T19:14:49.907+02:00
tags:
  - thoughts
---

> [!definition|\*] Inner Semi-Direct Product
> Given a Group $G$ and Subgroups $N, H$ such that $N$ is normal and $H \cap N = \set{e}$ we call the subgroup
> $H \ltimes N = \set{xa \midline x \in H, a \in N}$
> the **inner semi-direct product**

> [!definition|\*] Semi-Direct Product
> Given a Group $G$ with Subgroups $N, H$ such that $N$ is normal and $H \cap N = \set{e}$ and denote $\rho: H \to \mathrm{Aut}(N), \quad \rho(a)(b) = aba^{-1}$ the canonical inner automorphism. Then we define
> $H \ltimes_{\rho} N = (H \times N, \circ)$
> such that $(a, x)\circ (b, y) = (ab, x \rho(a)(y))$ is the operation as the **semi-direct product**.

Using these definitions we can model something akin to affine Transformations by considering the Affine group. Given the Finite Field given by $\mathbb{F} = \mathbb{Z}_{p}$ where $p$ is prime we can consider the the Semi-Direct Product of $\mathbb{F}$ with $\mathbb{F}^{*} = \mathbb{F} \setminus \set{0}$.

> [!definition|\*] Affine Group
> For a given prime $p$  and the map $\rho(a)(x) = ax$ we define the Group
> $\mathrm{Aff}_{\rho}(\mathbb{F}) = \mathbb{F}^{*} \ltimes_{\rho} \mathbb{F}$
> as the Affine Group.

This group contains Affine transformations since we can see that explicitly the operation is defined as
$(a, x) \cdot (b, y) = (ab, ay + x)$
Using this finite non-Abelian group we can define a representation of this group into the unitary operators. We denote the unitary operators as $\mathcal{U}(L^{2}(\mathbb{F})) \subset \mathcal{L}(L^{2}(\mathbb{F}))$ and define
$\pi: \mathrm{Aff}_{\rho}(\mathbb{F}) \to \mathcal{U}(L^{2}(\mathbb{F})), \quad \pi[(a, x)] = T_{x} D_{a}$

Which is a unitary representation of the Affine group that has a connection to the [[Time-Scale Analysis#The Wavelet Transform|Wavelet Transform]] since we have that
$W_{\phi} f(a, x) = \innprod{f}{\pi[(a, x)]g}$
Meaning we can also rethink the Wavelet transform and consider it a map
$W_{\phi}: L^{2}(\mathbb{F}) \to L^{2}(\mathrm{Aff}_{\rho}(\mathbb{F}))$

Using this we can also state that if we define the null-avarage functions on $\mathbb{F}$ meaning the set
$E = \set{f \in L^{2}(\mathbb{F}) \midline \sum\limits_{j=0}^{p-1} f(j) = 0}$
Then we can consider the Wavelet-Transform for $\phi \in E$ as an isometry from $E \to L^{2}(\mathbb{F})$ up to the constant $c_{\phi} = p \norm{\phi}_{2}^{2}$.
