---
publish: true
created: 2024-04-17T17:20:31.000+02:00
modified: 2026-06-10T19:12:41.986+02:00
tags:
  - academia
---

Inspired by \[this]\(Topologies for Homeomorphism Groups - Arens.pdf#page=16) and \[this]\(Topological Transformation Groups - Deane Montgomery, Leo Zippin.pdf)

> [!definition] Definition of Orbit and Stabiliser
> Given a topological group $G$ and $X$ a manifold with a corresponding group action $G \times X \to X \quad (g, x) \to gx$ then we define the following for an element $x \in X$
>
> - Orbit: $Orb(x) = \set{y \in X \mid g \in G, gx = y}$
>    
> - Stabiliser: $Stab(x) = \set{g \in G \mid gx = x}$

==We can notice that a Stabiliser is a normal subgroup, how?==

Let $G$ be a topological group and $X$ a manifold with a corresponding group action $G \times X \to X \quad (g, x) \to gx$
which is given to be continuous and proper.

`\begin{proof}`
Consider the map $\alpha: \faktor{G}{S} \to O, \quad [g] \to \tau(g, x)$ then this is a bijection since\
`\end{proof}`

A work through of this theorem is given in simple terms in [this documents](https://www.mathi.uni-heidelberg.de/~lee/MenelaosSS16.pdf)
Maybe find a book using the names here, since ARENS does it in an ok manner but very technically loaded language
