---
publish: true
aliases:
  - Dyadic Product of Vectors
created: 2025-07-15T23:21:16.851+02:00
modified: 2026-06-10T19:14:51.826+02:00
tags:
  - thoughts
---

Inspired by the thought of analysing [[Matrizen mit nur einem EW| matrices with only one eigenvalue]] we can consider the outer product of two vectors. Formally this is the “opposite” to taking the scar product which reduces two vectors down to a number.

> [!definition|\*] The Outer Product
> Given a finite dimensional vectorspace $V \cong \mathbb{K}^{n}$ we can define a map
> $\otimes: V \times V \to \mathbb{K}^{n \times n}, \quad (v, w) \mapsto v w^{T}$

The resulting matrix has some interesting properties.

> [!proposition|\*] Properties of the Outer Product
> Given two vectors $v, w \in V$ and their outer product $M = v \otimes w = v w^{T}$ we have the following properties
>
> 1. For some $\lambda \in \mathbb{K}^{n}$ we have a bilinearity given by $v \otimes \lambda w = \lambda v \otimes w = \lambda M$
> 2. The outer product always has rank $1$
> 3. The one canonical Eigenvalue that the outer product has is $\lambda = \innprod{v}{w}$

`\begin{proof}`
**For 1)**
Simple calculation

**For 2)**
Let $x \in \mathbb{K}^{n}$ then we can easily see that
$Mx = vw^{T}x = v \innprod{w}{x} = \innprod{w}{x} v$
Thus $\mathrm{Im} M = \span \set{v}$ thus giving us that the rank of $A$ is $1$.

**For 3)**
Consider the vector $v$ and get
$Mv = v w^{T} v = \innprod{w}{v} v$
`\end{proof}`
