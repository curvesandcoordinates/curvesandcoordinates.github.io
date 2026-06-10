---
publish: true
aliases:
  - variety
  - prevariety
created: 2025-11-14T16:29:38.945+01:00
modified: 2026-06-10T19:14:50.512+02:00
tags:
  - thoughts
---

When considering [[Affine Varieties]] as basic nice behaving spaces that are given by the zero set of some polynomial over a field $\K$ we can generalize this to varieties by gluing them together. This is in its perfect version stated in the language of schemes, but we will take the route of avoiding this a little and using an intermediary definition.

> [!definition|\*] Prevariety
> Let $\K$ be an algebraically closed field. A prevariety over $\K$ is a ringed space $(X, \mathcal{F}_{X})$ such that
> $X = U_{1} \cup \ldots \cup U_{n}$
> for some $U_{i} \subset X$ and $(U_{i}, F_{U_{i}})$ is isomorphic an affine varieties over $\K$.

This means that in this definition we are stating that a prevariety is simply an object that locally looks like an affine variety.

Now importantly this object is not necessarily a variety. We dont give it this high praise because it is missing an important property. It would be nice if in a sense this object would be hausdorff, meaning that we can seperate any two points in our prevatiey.

It turns out that the condition of being Hausdorff is too strong for the Zariski Topology and thus we must resort to a “weaker” but in the usual case, equivalent definition.

For this consider the following

> [!proposition|\*] Existence of the Diagonal Map
> Let $X$ be a prevartiety over $\K$. There exists a unique map called the **Diagonal**
> $\Delta_{X}: X \to X \times X$
> such that $\pi_{1} \circ \Delta_{X} = \mathrm{id}, \quad \pi_{2} \circ \Delta_{X} = \mathrm{id}$
> for $\pi_{i} (x_{1}, x_{2}) \mapsto x_{i}$

`\begin{proof}`
This fact is given by the universal property of products in the category of prevarieties. We know that we can construct the product with its two projections

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
                                                                               & X \\
X \times X \arrow[ru, "\pi_1", bend left] \arrow[rd, "\pi_2"', bend right]   &   \\
                                                                               & X
\end{tikzcd}
\end{document}
```

By the universal property we can construct a map into each $X$ namely $id: X \to X$ which means there must exist a map
$\Delta_{X}: X \to X \times X$
such that it commutes
`\end{proof}`

If this Diagonal map is applied to a topological space which is $T_{1}$ there is a well known equivalence that says that if $\Delta_{X}(X)$ is closed that our topological space is hausdorff. Since we want something akin to Hausdorff in our Zariski Topology, but can’t use this equivalence since it isnt even $T_{1}$ we can still just use this property as a placeholder for Hausdorff.

> [!definition|\*] Varieties
> A prevariety $X$ is called a variety if
> $\Delta_{X}(X) \subset X \times X$
> is a closed subset.

## Subvarieties

In order to define subvarieties we need the idea of a locally closed set. Formally this just means that

> [!definition|\*] Locally Closed Subsets
> Given a topological space $X$ we call a subset $Y \subset X$ locally closed if it
> $Y = O \cap C \subset X$
> of some open subset $O$ and closed subset $C$.
> Equivalently we call $Y$ locally closed if $Y \subset \overline{Y}$ is open

We use this to define the subvarieties

> [!definition|\*] Subvarieties
> Let $X$ be a variety over an algebraically closed field $\K$. A subvariety of $X$ is a locally closed subset $Y \subset X$

Without proof we will state some nice properties of subvarieties that one could prove in a course onf algebraic geometry

> [!proposition|\*] Some simple Properties
> Let $X$ be a variety. Then the following statements hold
>
> 1. For $Y \subset X$ is a subvariety, then $Y$ is a variety
> 2. If $Y \subset X$ is open we get that $\mathcal{O}_{Y} = \at{\mathcal{O}_{X}}{Y}$
> 3. If $X$ is affine and $Y \subset X$ is closed then $Y$ is affine. (In fact $\K[Y] \cong \faktor{\K[X]}{\mathcal{I}(Y)}$)
> 4. If $Y$ is a principal open set in the Zariski topology, so $Y = \mathcal{D}(f) = \set{x \in X \midline f(x) \neq 0}$ then $Y$ is affine
