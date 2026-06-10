---
publish: true
created: 2026-02-12T09:29:16.047+01:00
modified: 2026-06-10T19:14:51.829+02:00
tags:
  - thoughts
---

In the theory of [[Ring Modules]] we want to generalise vector spaces to take coefficients from any ring and see what breaks and what structure is so intrinsic that is stays. A big part of linear algebra is the consideration of linear maps and their overdetermination via a basis. We can construct many of these things for general rings as well

> [!definition|\*] $R$-Module Homorphisms
> A function $f:M \to N$ between $R$-modules is called $R$-linear (or sometimes just linear) if for all $x, y \in R$ and $\alpha \in R$ we have that
> $f(x + y) = f(x) + f(y)$
> and
> $f(\alpha x ) = \alpha f(x)$
>
> - The space of $R$-Module Homomorphisms is called $\mathrm{Hom}_{R}(M, N)$
> - $M$ and $N$ are called isomorphic if for some $f \in \mathrm{Hom}_{R}(M, N)$ there exists an inverse $g \in \mathrm{Hom}_{R}(N, M)$
> - We denote the dual module $M^{*} := \mathrm{Hom}_{R}(M, R)$

Many other properties of free modules are the same as those of vector spaces, we wont go through all of them.

> [!theorem|\*] Noether's First Isomorphism Theorem
> For any $f \in \mathrm{Hom}_{R}(M, N)$ we have that
> $\faktor{M}{\ker f} \cong \im f$
> more precisely,
> $\tilde{f}: \faktor{M}{\ker f} \to \im f, \quad \tilde{f}(m + \ker f) = f(m)$
> is an isomorphism.

`\begin{proof}`
We simply need to check injectivity and surjectivity of the map. Note that
$0 = \tilde{f}(m + \ker f) = f(m) \implies m \in \ker f \implies m + \ker f = 0 \in \faktor{M}{\ker f}$
thus $\tilde{f}$ is injective.

Also consider some $n \in \im f$ then $n = f(m) = \tilde{f}(m + \ker f)$
which gives us surjectivity.

Lienarity of the map is trivial.
`\end{proof}`
