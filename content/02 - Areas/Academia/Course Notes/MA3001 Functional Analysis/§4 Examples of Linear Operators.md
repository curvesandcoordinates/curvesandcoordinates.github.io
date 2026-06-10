---
publish: true
created: 2023-11-25T16:00:55.931+01:00
modified: 2026-06-10T19:12:40.469+02:00
tags:
  - academia
---

Prev: [[§3 Hilbert Spaces]]
Next:[[§5 Open Mapping Theorem]]

---

We want to start talking about maps between infinite-dimensional Vector Spaces, for that a couple definitions

> [!definition|\*] Linear Operators
> A map $A: X \to Y$ between $\mathbb{K}$-Vector spaces then $A$ is called linear if $\forall x, y\in X, \lambda, \mu \in \mathbb{K}$ $A(\lambda x + \mu y) = \lambda A(x) + \mu A(y)$
> These maps are called linear operators and if $Y = \mathbb{K}$, they are usually called linear functionals. We also usually denote the following: $A(x) = Ax$

As opposed to the finite dimensional case where injective and surjective imply each other and linearity gives us continuity we don't really know what happens in our infinite-dimensional Vector Spaces.

> [!example|\*] Left and Right Shift Operators
> An Example of this Failing is the space $X = l^{2}$, then the Rightshift $S^{+}(a_{1}, a_{2}, ...) = (0, a_{1}, a_{2}, ...)$
> is injective but not surjective and the Leftshift $S^{-}(a_{1}, a_{2}, ...) = (a_{2}, a_{3}, ...)$
> is surjective but not injective

On a function space this shift operator if expressable by a [[Translation Operator]]

> [!example|\*] Polynomials and Derivative Operator
> Another familiar example of this phenomenon are the polynomials $X = \mathcal{P}([-1, 1])$ and their derivative as an Operator. This Operator is definitely surjective but not injective.

---

Let us now talk about the nice properties of Linear Operators

> [!definition|\*] Continuity of Maps
> A map $A: X \to Y$ between normed Vector Spaces is called continuous if $x_{n}\to x \implies A(x_{n}) \to A(x)$
> or equivalently $V \subset Y \text{ open} \implies A^{-1}(V) \text{ open}$

This definitely isn't always true. Some quick examples for non-continuous maps.

> [!example|\*] Non-Continuous Operators
>
> 1. $X = d = \{ (a_{n} \mid \text{ finitely terminating sequences} \}$ with $A(a_{1}, a_{2}, ...) = (a_{1}, 2a_{2}, 3a_{3}, ...)$ has the counterexample of $x_{n}= \{ 0, 0, ..., \frac{1}{n}, 0, ... \}= \frac{1}{n}e_{n}$
> 2. $X = C_{\text{per}}^{\infty}(\mathbb{R})$ the $2\pi$-periodic, infinitely differentiable functions with the derivative operator $A = \frac{d}{dx}$. Here the counterexample is $f_{n}(x) = \frac{1}{n}\sin(nx)$

---

Our goal here is that we would like to find criteria for $\text{injectivity} \Leftrightarrow \text{sujectivity}$ and $\text{linear operators are continuous}$

> [!lemma|4.1] Characterisation of Continuity of Linear Operators
> Let $(X, \Vert \cdot \Vert)$, $(Y, \Vert \cdot \Vert_{*})$ be normed Vector Spaces, $A: X \to Y$  linear operator. Then the following are equivalent:
>
> 1. $A$ is continuous
> 2. $\exists M \ge 0$ such that $\forall x \in X$,  $\Vert Ax \Vert_{*} \le M \Vert x \Vert$

^c45be2

`\begin{proof}`
$1 \Rightarrow 2$ :
Assume there exists no $M$ such that $\Vert Ax \Vert_{*} \le M \Vert x \Vert$ then $\forall n \in \mathbb{N} \exists x_{n}\in X \setminus \{ 0 \}$ such that$\Vert Ax_{n} \Vert \ge n \Vert x_n \Vert$
Now we try to construct an element in $X$ that breaks continuity in a similar way to the example in the terminating sequences.

$$$\begin{align*}
x'_{n} &= \frac{1}{n} \frac{x_{n}}{\Vert x_n \Vert}\\
\implies \Vert x_{n}' \Vert &= \frac{1}{n} \to 0 \text{ for } n \to \infty\\
\end{align*}$$
If we apply your linear operator to this though we get the following:
$$\begin{align*}
\Vert A x_{n}' \Vert_{*} &= \left\Vert A\left(\frac{1}{n} \frac{x_{n}}{\Vert x_{n} \Vert}\right) \right\Vert_{*} = \frac{1}{n \Vert x_{n} \Vert} \Vert Ax_{n} \Vert_{*} \ge  \frac{n\Vert x_n \Vert}{n \Vert x_{n} \Vert} = 1
\end{align*}$$
thus $Ax_{n}'$ cant converge to zero, meaning $A$ isn't continuous.

$2 \Rightarrow 1$:
$x_{n} \rightarrow x \Leftrightarrow \Vert x_{n} - x \Vert \rightarrow 0$
Thus $\Vert Ax_{n} - Ax \Vert = \Vert A(x_{n} - x) \Vert \le M \Vert x_{n} - x \Vert \rightarrow 0$

`\end{proof}`

> [!example|*] Derivative Operator as a Continuous Operator
> Now via this characterisation of continuity for linear operators we can finally see an example of a continuous linear operator between two different spaces:
> 
> Let $X = C^{1}([a, b])$ with $\Vert f \Vert_{C^{1}} = \sup_{x\in[a, b]} |f(x)| + \sup_{x\in[a, b]} |f'(x)|$ and let $Y = C([a, b])$ with $\Vert f \Vert_{C} = \sup_{x\in[a, b]} |f(x)|$ with the linear operator $A = \frac{d}{dx}$
> 
> Then $A: X \to Y$ is a continuous map since: $$\Vert Af \Vert_{*} = \Vert Af \Vert_{C} = \sup_{x\in[a, b]} |f'(x)| \le \sup_{x\in[a, b]} |f(x)| + \sup_{x\in[a, b]} |f'(x)| = \Vert f \Vert_{C^{1}}$$
$$$
