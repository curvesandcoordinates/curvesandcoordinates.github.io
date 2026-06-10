---
publish: true
created: 2024-01-09T14:03:58.000+01:00
modified: 2026-06-10T19:12:40.784+02:00
tags:
  - academia
---

Prev: [[§8 Spectral Theory of Compact Operators]]
Next: [[§10 Duality]]

---

> [!info]
> Recall that for any $X$ that is a normed Vector Space over $\mathbb{K}$ we can define the Dual Space $X^{*} = L(X, \mathbb{K})$ as the space of all Linear and Continuous maps from $X$ to $\mathbb{K}$

> [!example|\*]
> For an Hilbert Space $X$ we can consider an Element $l \in X^{*}$ like
> $l(x) = \innprod{x}{\eta}$ for some $\eta \in X$
> This is special for Hilbert Spaces, since these here any element of $X^*$ can be represented in this way.

> [!theorem|9.1] Riesz Representation
> Let $X$ be Hilbert and $l \in X^*$. Then $\exists ! \eta \in X$ such that $\begin{align*}
> l(x) = \innprod{x}{\eta} && \forall x\in X
> \end{align*}$

^37f94b

`\begin{proof}`
Consider the non-linear function $F: X \to \mathbb{R}$ defined by $F(x) := \frac{1}{2} \norm{x}^{2} - \Re(l(x))$
Let us now minimise the function $F$ and set $\eta := \min\limits_{x \in X} F(x)$. The existence of this is topic of class and analogous to the projection theorem.

Now pick $x' \in X$ then consider $f(\epsilon) := F(\eta + \epsilon x')$. Then since $\eta$ minimizes $F$ we have$0 = f'(0) = \frac{d}{d \epsilon} \biggr\rvert_{\epsilon=0} F(\eta + \epsilon x')$
Explicitly computed we have

$$
\begin{align*}
F(\eta + \epsilon x') &= \frac{1}{2} \norm{\eta + \epsilon x'}^{2} - \Re(l(\eta + \epsilon x'))\\
&= \frac{1}{2} \innprod{\eta + \epsilon x'}{\eta + \epsilon x'} - \Re(l(\eta)) - \epsilon\Re(l(x'))\\
&= \frac{1}{2} \left( \norm{\eta}^{2} + 2 \epsilon \Re(\innprod{x'}{\eta}) + \epsilon^{2} \norm{x'}^{2} \right) - \Re(l(\eta)) - \epsilon\Re(l(x'))\\
\end{align*}
$$

Now taking the derivative gives us

$$$\begin{align*}
0 = \frac{d}{d \epsilon} \biggr\rvert_{\epsilon=0} F(\eta + \epsilon x') &= \Re(\innprod{x'}{\eta}) + \epsilon \norm{x'}^{2} - \Re(l(x')) \biggr\rvert_{\epsilon = 0}\\
&= \Re(\innprod{x'}{\eta} - l(x'))
\end{align*}$$
Now use $\frac{1}{i} x'$ instead of $x'$ then since $$\Re\left(\frac{1}{i} (a+ib)\right)= \Im(a+ib)$$we get from the same logic above that $$0 = \Im( \innprod{x'}{\eta} - l(x'))$$
meaning $\innprod{x'}{\eta} = l(x')$

This equality is also unique trivially, meaning we have found that our general $l(x)$ can be calculated via $l(x) = \innprod{x}{\eta}$ 
`\end{proof}`

>[!info] Canonical Isomorphism - Alternate version of Riesz
>The Abstract interpretation here being that we can construct a canonical isomorphism between $X$ and $X^*$ via: $$\begin{align*}
\phi:X^{*} \to X, && \innprod{x}{\eta} \to \eta
\end{align*}$$
This sadly isnt simply the case for Banach Spaces (See Chapter 10)

## Application
Consider the notion of an Adjoint Operator

> [!definition|*]
> Let $X$ be Hilbert Space, $A \in L(X, X)$. Then we define $l$ such that $\forall y \in X$ $$l_{y}(x) = \innprod{Ax}{y}$$
By the Riesz Representation Theorem we get a unique element $A^*(y)$ such that: $$\innprod{Ax}{y} = \innprod{x}{A^{*}(y)}$$
The map $A^{*}: X \to X$ is called the adjoint Operator of $A$

> [!proposition|9.1]
> The operator $A^{*}: X \to X$ is a linear, continuous Operator

`\begin{proof}`
For the linearity consider $\lambda, \lambda' \in \mathbb{K}, y, y' \in X$ then 
$$\begin{align*}
A^{*}(\lambda y + \lambda' y') &\implies \innprod{x}{A^{*}(\lambda y + \lambda' y')} = \innprod{Ax}{\lambda y + \lambda' y'}\\
A^{*}(y), A^{*}(y') &\implies \innprod{Ax}{y} = \innprod{x}{A^{*}(y)}, \innprod{Ax}{y'} = \innprod{x}{A^{*}(y')} 
\end{align*}$$
Then from this we get
$\innprod{x}{A^{*}(\lambda y + \lambda' y')} = \lambda \innprod{Ax}{y} + \lambda' \innprod{Ax}{y'} = \lambda \innprod{x}{A^{*}y} + \lambda' \innprod{x}{A^{*}y'} = \innprod{x}{\lambda A^{*}(y) + \lambda' A^{*}(y')}$
Which implies $A^{*}(\lambda y + \lambda' y') = \lambda A^{*}(y) + \lambda' A^{*}(y')$

`\end{proof}`


Now lets get to some Examples of Adjoints:
> [!example|*] Real Adjoint Matricies
> $X = \mathbb{R}^{n}$ and let us consider a Linear Map given by the Matrix $$A = \begin{pmatrix} A_{11} & ... & A_{1n}\\ \vdots & & \vdots \\ A_{n1} & ... & A_{nn}\end{pmatrix}$$
> Then we get the adjoint of this opeator via the Transpose $A^{T}$ with $$(A^{T})_{i,j} = A_{j,i}$$
> since then $$\begin{align*}
> \innprod{Ax}{y} = \sum\limits_{i} (Ax)_{i} y_{i} = \sum\limits_{i,j} A_{i,j} x_{j} y_{i} = \sum\limits_{i,j} x_{j} (A^{T})_{j,i} y_{i} = \sum\limits_{j} x_{j} (A^{T}y)_{j} = \innprod{x}{A^{T}y}
> \end{align*}$$

> [!example|*] Complex Adjoint Matrices
> $X = \mathbb{C}^{n}$ with $\innprod{x}{y} = \sum\limits_{i} x_{i} \overline{y_{i}}$ and consider $A \in \mathbb{C}^{n \times n}$ then in a similar way the adjoint is defined as $A^{*} = \overline{A^{T}}$ 

> [!example|*] Left and Right Shift are Adjoint
>  $X = l^{2}$ and consider $A = S^{+}$ the rightshift, then $$\begin{align*}
> \innprod{S^{+}(x)}{y} &= \innprod{(0, x_{1}, x_{2}, ...)}{(y_{1}, y_{2}, ...)}\\
> &= x_{1} y_{2} + x_{2} y_{3} + ...\\
> &= \innprod{(x_{1}, x_{2}, ...)}{(y_{2}, y_{3}, ...)}\\
> &= \innprod{x}{S_{-}(y)}
> \end{align*}$$
> Meaning the Left Shift and Right Shift are Adjoint.

---

Our main Motivation for introducing adjoint operators was that we can use them to determine the solubility of linear Equations:

> [!theorem|9.2]
> Let $X$ be a Hilbert Space and $A \in L(X, X), b \in X$. Then
> 1. $\im A \subset (\ker A^{*})^{\bot}$ 
> 2. $\overline{\im A} = (\ker A^{*})^{\bot}$
> 
> 
In particular if our Image is closed we have $\im A = (\ker A^{*})^{\bot}$ 

^a4aa2f

`\begin{proof}`
#### For (1)
Let $b \in \im A, y \in \ker A^{*}$ Now we calculate the following $$\innprod{b}{y} = \innprod{Ax}{y} = \innprod{x}{A^{*} y} = \innprod{x}{0} = 0$$
#### For (2)
See Class
`\end{proof}`


> [!example|1]
> Consider the Equation $S^{+}x = b$ then $$\begin{align*}
> \im S^{+} &= \set{(0, b_{2}, b_{3}, ...) \mid b_{i} \in \mathbb{K}, \sum\limits_{i} |b_{i}|^{2} < \infty}\\
> \ker (S^{+})^{*} &= \ker S_{-} = \set{(b_{1}, 0, 0, ...) \mid b_{1} \in \mathbb{K}}
> \end{align*}$$
> so by inspection we get that $\im S^{+} = (\ker (S^{+})^{*})^{\bot}$ 

> [!example|2]
> Consider $X = L^{2}([0, T])$ with $(Kf)(x) = \int_{0}^{x} f(s) ds$ then the operator defines the solution to the differential equation 
> $$\begin{align*}
> u' &= f \text{  in }[0,T]\\
> u(0) &= 0
> \end{align*}$$
> The Question here would be what a possible adjoint operator could be. Consider $f, g \in C([0,T])$ and 
> $$
> \begin{align*}
> u &:= Kf \text{ antiderivative of $f$ with $u(0)=0$}\\
> v &:= \tilde K g \text{ antiderivative of $g$ with $v(T)=0$}
> \end{align*}
> $$
> then we have 
> $$ \begin{align*}
> \innprod{Kf}{g} &= \innprod{u}{v'} = \int_{0}^{T} u v' = u(T)v(T) - u(0)v(0) - \int_{0}^{T} u'v\\
> &= - \innprod{u'}{v} = - \innprod{f}{\tilde K g} = \innprod{f}{-\tilde Kg}
> \end{align*} $$
> 
> Moreover since $C([0,T]) \subset L^{2}$ is dense, so the above works for all $f, g \in L^{2}$. Meaning $$K^{*} = -\tilde K = \text{ solutions of the differential equations } \begin{cases} -u' = f \\ u(T) = 0 \end{cases}$$
> What is $\ker K^{*}$?
> Suppose $K^{*} f = 0$ then $-u' = f = 0$ so $u = const$ thus $u = 0$ so lastly $\ker K^{*} = \set{0}$
> so by our previous theorem $$\im K \subset (\ker K^{*})^{\bot} = L^2([0,T])$$

---
Let us now work specifically more with Adjoints, and prove some basic properties:

> [!proposition|9.2] Basic Properties of Adjoints
> Let $X$ be a Hilbert space over $\mathbb{K}$, and $A, B \in L(X,X)$, $\lambda \in \mathbb{K}$
> 1. $(A^{*})^{*} = A$
> 2. $(A + B)^{*} = A^{*}  + B^{*}$
> 3. $(\lambda A)^{*} = \overline{\lambda} A^{*}$
> 4. $(AB)^{*} = B^{*} A^{*}$
>5. $\norm{A^{*}} = \norm{A}$

`\begin{proof}`
See Class Exercise 44.
`\end{proof}`

The Notion of adjoints leads to interesting subsets in Hilbert Spaces.
> [!definition|*] Self-Adjoint, Skew-symmetric, Unitary and Normal Operators
> Let $X$ be a Hilbert Space and $A \in L(X, X)$ then $A$ is called:
> - self-adjoint (or Hermitian or Symmetric) if $A^{*} = A$
> - skew-symmetric if $A^{*} = -A$
> - unitary if $A^{*} A = I = A A^{*}$
>- normal if $A^{*} A = A A^{*}$


> [!proposition|9.3]
> Let $X$ be Hilbert and $A \in L(X, X)$ then
> $$\begin{align*}
> A &\text{ self-adjoint } &\implies \spec A \subset \mathbb{R} \\
> A &\text{ skew-symmetric } &\implies \spec A \subset i\mathbb{R}\\
> A &\text{ unitary } &\implies \spec A \subset S^{1} = \set{\lambda \in \mathbb{C} \mid |\lambda| = 1}
> \end{align*}$$

`\begin{proof}`
See Class
`\end{proof}`
$$$
