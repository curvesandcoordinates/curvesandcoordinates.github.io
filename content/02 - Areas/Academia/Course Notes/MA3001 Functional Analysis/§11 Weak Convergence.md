---
publish: true
created: 2024-02-20T23:10:28.000+01:00
modified: 2026-06-10T19:12:40.490+02:00
tags:
  - academia
---

Prev: [[§10 Duality]]

---

Our motivation for this last chapter is that we jump off the point that in finite Dimensions a very cool property is given by Bolzano-Weierstraß Theorem. In $\mathbb{R}^{n}$ we state it as, every bounded sequences have convergent subsequences.

In Finite dimensions this is obviously not true, just consider $e_{i} \in l^{2}$ then this cant have a convergent subsequence since $\norm{e_{i} - e_{j}} = \sqrt{2}$  for $i \neq j$.

We will have to weaken the notion of convergence to get this property back.

> [!definition|11.1] Weak and Weak\* Convergence
> Let $X$ be a Banach space and $X^{\ast}$ its dual space:
>
> 1. A sequence $\set{x_{j}}_{j \in \mathbb{N}}$ converges weakly to $x \in X$, if $L(x_{j}) \to L(x)$ for all $L \in X^{*}$ written as $x_{j} \tow x$
> 2. A sequence $\set{L_{j}}_{j \in \mathbb{N}}$ in $X^{*}$ converges weak\* to $L \in X^{*}$ if $L_{j}(x) \to L(x)$ for all $x \in X$ written as $L_{j} \tows L$

> [!info]
>
> - In $\mathbb{R}^{n}$ we have that weak convergence is equivalent to normal convergence
> - In general, weak\* convergence is pointwise convergence of (linear) functionals $L: X \to \mathbb{K}$

The justification for the name is given by the following proposition

> [!proposition|11.1] Justification for the name
> For a Banach space $X$ then
>
> 1. $x_{j} \to x$ (meaning $\norm{x_{j} - x} \to 0$) $\implies x_{j} \to x$
> 2. $L_{j} \to L$ (meaning $\norm{L_{j}-L}_{X^{\ast}}$) $\implies L_{j} \tows L$

`\begin{proof}`

#### For 1.

$x_{j}\to x$ implies that (since all $L \in X^{*}$ are continuous) $L(x_{j}) \to L(x)$ meaning $x_{j}\tow x$

#### For 2.

Assuming $L_{j}\to L$ then we get that since $\frac{|L_{j}x - Lx|}{\norm{x}} \le \norm{L_{j} - L} \to 0$ we get that $L_{j}\tows L$
`\end{proof}`

> [!info] The convex isn't True
> Consider the example from before in $l^{2}$. We use this as the prime example of weak convergence, since the basis sequences $e_{i} \in l^{2}$ applied to an $L_{k} \in (l^{2})^{*}$ with $L_{k}(e_{j}) = \innprod{e_{k}}{e_{j}} = \delta_{kj}$
> So the sequence of $e_{i}$ converges weakly but not normally.
> w
> We prove this convergence using Riesz representation theorem, since we need to show the above for all elements $L \in X^{*}$. Since $L$ can be represented by $L(y) = \innprod{y}{a}$ for some $a \in l^{2}$. We get $L(e_{j}) = \innprod{e_{j}}{a} = a_{j}$
> Now notice that $\norm{a}^{2} = \sum\limits_{j=1}^{\infty} |a_{j}|^{2} < \infty$ which means that the sequence $\set{a_j}_{j \in \mathbb{N}}$ is a null-sequence. Thus $L(e_{j}) = a_{j} \to 0$

We also want to show some properties of weak convergence.

> [!proposition|11.2] Properties of Weak Convergence
> Let $X$ be a Banach space and $x_{j} \in X$, and $x, x' \in X$. Then we have
>
> 1. If $x_{j} \tow x$ and $x_{j} \tow x'$ then $x = x'$
> 2. If $x_{j} \tow x$ then $\set{x_{j}}_{j \in \mathbb{N}}$ is bounded
> 3. If $x_{j} \tow x$ then $\norm{x} \le \liminf\limits_{j\to \infty} \norm{x_{j}}$ (which we call the "weak lower semicontinuity of the norm 
> 4. If $x_{j} \tow x$ and $x_{j} \in U$ with $U \subset X$ a closed subspace, then $x \in U$

`\begin{proof}`
Left in the Slides for times sake
`\end{proof}`
Some nice example of these properties are for one

> [!example|\*] Weak lower Semicontinuity in $l^2$
> Let $X = l^{2}$ then we know that the sequence $e_{j} \tow 0$ and we can see that $0 = \norm{0} < \norm{e_{j}} = 1$

and for another

Let $X = l^{2}$ and $U = \set{x \in l^{2} \mid \norm{x} = 1}$, then we can see that the term "closed subspace" can't be replaced by "closed set" since $e_{j} \in U$ but $0 \notin U$.

---

Our Next goal with this theory will be to restore some weak form of Bolzano Weierstrass using our newfound convergence ideas.

For this we first define some properties of Banach spaces that make it easy to even talk about all of this:

> [!definition|\*] Reflexivity of Banach space
> A Banach space $X$ is called reflexive if for all $f \in X^{**}$ we have
> $f(L) = L(x)$for some $x \in X$. Informally we would call this $X \cong X^{**}$

With this seemingly simple property in mind we can state our version of Bolzano Weierstraß

> [!theorem|11.1] Replacement of Bolzano-Weierstraß
> Let $X$ be a Banach Space. Then
> $X \text{ reflexive} \implies \text{every bounded seq. has a weakly convergent subsequence}$

Interestingly this can be stated for the dual of a Banach space aswell and it gives us a new persepctive on the relationship between reflexivity and separability.

> [!theorem|11.2] Banach Alaoglu Theorem
> Let $X^{*}$ be the dual of a Banach Space. Then
> $$X \text{ separable} \implies \text{ every bounded seq. in $X^{*}$ has a weak* convergent subsequence}$$

> [!info] Application to familiar spaces
> Please note that the obvious example here for 11.1 are all Hilbert spaces, and for 11.2 are $L^{2}$ and $l^{2}$
