---
publish: true
aliases:
  - Bessel System
  - Analysis Operator
  - Synthesis Operator
created: 2025-10-01T14:02:05.933+02:00
modified: 2026-06-10T19:14:51.679+02:00
tags:
  - thoughts
---

When considering a finite dimensional hilbert space $(H, \innprod{\cdot}{\cdot})$ we can consider a system of vectors and what a specific system can tell us about a space. A prime example of a system is given by [[Finite Frame Theory#^e4560e|finite frames]] since any frame is simple a finite collection of vectors satisfying the frame innequality. The most specific and used system of vectors is the Basis of a vector space.

In this light we first define a system

> [!definition|\*] System of Vectors
> Given a finite dimensional hilbert space $(H, \innprod{\cdot}{\cdot})$ we call a set $\set{v_{m}}_{m=0}^{M}$ with $M \in \mathbb{N}$ a system of vectors.

^fe935d

Now this is very loose and doesnt lend much structure. We can still try and analyse our vector space by checking how much a given vector points into each direction. This analysis is captured in an operator.

> [!proposition|\*] Analysis Operator
> Given a finite dimensional Hilbert space $(H, \innprod{\cdot}{\cdot})$ and a system of vectors $\set{v_{m}}_{m=0}^{M}$ for some $M \in \N$. Then we call the corresponding analysis operator
> $T: H \to \C^{M}, \quad x \mapsto \begin{pmatrix}\innprod{x}{v_{1}} \\ \innprod{x}{v_{2}} \\ \vdots \\ \innprod{x}{v_{M}} \end{pmatrix}$

This is a linear operator, that projects our the different directions seen, allows us to see what information is encoded by the system. If this is an isometry than we know that our system has to be a basis.

> [!remark|\*] For Finite Sets continuity is not given
> In the case of an infinite system and an infinite dimensional hilbert space we need to define the analysis operator a little differently. Namely it is the consider as a map
> $T: H \to l^{2}(I)$
> where $I$ is the indexing set of our system. Here continuity is now not simple since in an infinite dimensional setting we need boundedness of the operator.
> Boundedness will then be given by considering a special type of system that satisfies the right innequality of the [[Finite Frame Theory#^e4560e|frame innequality]]. We call systems that satisfy for some $B > 0$ **Bessel Systems** if we have
> $\sum\limits_{i \in I} |\innprod{x}{v_{i}}|^{2} \leq B \norm{x}^{2}$

We can also learn very well from the specific case of the system being a basis. If it is a basis then the operator is invertible. This means that the projection of $H \to \C^{M}$ splits our vector space into different sections using our defined system. When we have a basis we can also reconstruct the vector using this split data and construct an inverse operator
$T^{-1}: \C^{N} \to H, \quad \begin{pmatrix}a_{1} \\ \vdots \\ a_{N}\end{pmatrix} \to \sum\limits_{i = 1}^{N} a_{i} v_{i}$

Our system being a basis is very limiting though. If it isnt we cant construct the inverse explicitly since then our operator is necessarily not injective or surjective. We can note though that in the basis case we have
$T^{*} = T^{-1}$
Which means that our operator is orthogonal. The adjoint operator is defined in the non-basis case though. We can explicitly calculate it by considering the defining property for the finite system $\set{\phi}_{m=1}^{M}$:

$$$\begin{align*}
\innprod{T^{*}x}{y} &= \innprod{x}{Ty}\\
 &= \sum\limits_{m=1}^{M} x_{m} \overline{(Ty)_{m}}\\
 &= \sum\limits_{m=1}^{M} x_{m} \overline{\innprod{y}{\phi_{m}}} \\
 &= \sum\limits_{m=1}^{M} \innprod{x_{m}\phi_{m}}{y} = \innprod{\sum\limits_{m=1}^{M} x_{m} \phi_{m}}{y}
\end{align*}$$

This allows us to define a new operator
> [!definition|*] Synthesis Operator
> Given a finite dimensional Hilbert space $(H, \innprod{\cdot}{\cdot})$ and a system of vectors $\set{v_{m}}_{m=0}^{M}$ for some $M \in \N$. Then we call the corresponding adjoint of the analysis opertor the synthesis operator:
> $$T^{*}: \C^{M} \to H, \quad \begin{pmatrix}a_{1} \\ \vdots \\ a_{M}\end{pmatrix} \to \sum\limits_{i = 1}^{M} a_{i} v_{i}$$

This can be seen as a way to go back from our broken up space $\C^{M}$ to our original vector space. These operators are used extensively in [[Finite Frame Theory]].
$$$
