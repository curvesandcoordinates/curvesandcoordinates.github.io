---
publish: true
created: 2025-06-14T12:10:33.000+02:00
modified: 2026-06-10T19:14:51.331+02:00
tags:
  - thoughts
---

We want to characterise functions on finite Sets. These are way more simple than one might think since we can

The set of all functions on $X$ will be denoted by $\C^{X}$

> [!proposition] Basic Properties of Functions on Finite Sets
>
> 1. Every function on $X$ is continuous
> 2. $\C^{X}$ is a finite dimensional $\C$ vector space with dimension $|X|$

`\begin{proof}`
Trivially these things hold. Continuity is given by the very big topology and finite dimensionality is also trivially given.

> > ”This proof is so simple. You can do it while you are eating”

`\end{proof}`

> [!definition] Integration using Measures on Finite Sets
> Now let $\nu \in M(X)$ with $\nu = \sum\limits_{x \in X} \nu_{x} \delta_{x}$ then we write
> $\nu(f) = \int_{X} f d \nu = \sum\limits_{x \in X} \nu_{x} \delta_{x}(f) = \sum\limits_{x \in X} \nu_{x}f(x)$

> [!definition] Definition of Lp Space on Finite Sets
> Introducing a more restricted norm for a given $p \in [1, \infty]$
>
> $$$\norm{f}_{\nu,p} = \begin{cases}
> \int_{X} |f|^{p} d \nu \quad& 1 \leq p < \infty \\
> \max_{x\in X} |f(x)| \quad& p = \infty
> \end{cases}$$
> allows us to define $L^{p}$ spaces using this norm on finite sets
> $$L^{p}(\nu) = \set{f \in \C^{X} \midline \norm{f}_{\nu, p} < \infty}$$
> $$$

> [!remark] Notational Specialty
> We will often write for the tuple $(\C^{X}, \norm{\cdot}_{\infty})$ just $C(X)$ to differentiate the space of all functions, with the space of all functions with additional $L^{\infty}$ structure.
> Note additionally that
> $(\C^{X}, \norm{}_{\infty})= (L^{\infty}(\nu), \norm{}_\infty)$

> [!remark] L2 Space
> For $p = 2$ we now can define a simple inner product for $f, g \in L^{2}(\nu)$ given by
> $\innprod{f}{g}_{L^{2}(\nu)} = \int_{X} f \cdot \overline{g} d \nu = \sum\limits_{x\in X} \nu_{x} \cdot f(x) \cdot \overline{g(x)}$

> [!proposition] The $L^{p}$ Spaces are Normed Vector Spaces
> Let $\nu = \sum\limits_{x \in X} \nu_{x} \delta_{x}$ with $\nu_{x} > 0$ then
>
> 1. $\norm{}_{\nu, p}$ is a norm on $L^{p}(\nu)$
> 2. $\innprod{\cdot}{\cdot}_{L^{2}(\nu)}$ is an inner product with $\norm{f}_{\nu, 2} = \sqrt{\innprod{f}{f}_{L^{2}(\nu)}}$
> 3. For $x \in X$ let $e_{x}(y) = \begin{cases}\nu_{x}^{-\frac{1}{2}}, \quad x = y \\ 0, \quad x \neq y\end{cases}$ then $\set{e_{x}}$ is an ONB of $L^{2}(\nu)$

`\begin{proof}`
The first and second statements are trivial. The third is easily proven by calculating
$\innprod{e_{x}}{e_{y}} = \sum\limits_{z \in X} \nu_{z} \cdot e_{x}(z)\cdot e_{y}(z) = \begin{cases} 1 \quad& x = y \\ 0 \quad& x \neq y\end{cases}$
`\end{proof}`

> [!remark]
> So far we have not introduced any enumeration for the elemtns in $X$. If an enumeration is introduced they imply an enumeration $e_{n} := e_{X_{n}}$. Also every $f \in \C^{X}$ is just given by $f = (f_{1}, \ldots, f_{N})$ with $f_{n} = f(X_{n})$
