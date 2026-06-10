---
publish: true
created: 2023-11-28T14:04:39.000+01:00
modified: 2026-06-10T19:12:40.471+02:00
tags:
  - academia
---

Prev: [[§5 Open Mapping Theorem]]
Next: [[§7 More about invertibility - Index Theory]]

---

Questions to answer:

- How can I check whether a given operator is invertible ( equivalently we are looking for the unique solvability of $Ax = b$)?
- What is the right notion in $\infty$ dimensions of Eigenvalues?

Answers:

- Regarding 1 there are multiple different approaches:
  - Perturbation Theory (Expressed in this Chapter)
  - Index Theory (Relevant in later chapters)
  - Duality Theory (Relevant in later chapters)

> [!info]
> Recall that $L(X, Y)$ is the set of linear continuous maps from $X \to Y$ and that the Operator Norm is a norm on this space given by $\Vert A \Vert_{L(X, Y)} = \sup_{x \neq 0} \frac{\Vert Ax \Vert_Y}{\Vert x \Vert_X}$

---

## Invertibility

The main result of Perturbation Theory discussed in this chapter can be summarised by saying that "near" a given invertible operator (with the metric given by the operator norm) other operators are invertible, or equivalently that around any invertible operator there exists an open ball of other invertible operators.

To get to this result we will first have to discuss some properties of $L(X, Y)$

> [!lemma|6.1] Banach Space property of L(X, Y)
>  
> Let $X, Y$ be normed vector spaces with additionally $Y$ Banach. Then $L(X, Y)$ with the operator norm $\Vert A \Vert_{L(X, Y)}$ is again Banach

`\begin{proof}`
_See Exercises_
`\end{proof}`

An important result that we will also need, connects the concept of an operator being "near" something to invertibility. Especially here we are talking about operators near the identity.

> [!lemma|6.2] Neumann Series
> Let $X$ be Banach and $A \in L(X, X)$ and $\Vert I - A \Vert_{L(X, X)} < 1$ (where $I$ is the identity). Then $A$ is invertible and $A^{-1} = \lim_{n \to \infty} (I + \tilde A + \tilde A^{2} + ... + \tilde A^{n})$
>  
> with $\tilde A = I - A$

^abc468

> [!info]
> This is a generalisation of the geometric series. Which can be seen for $X = \mathbb{R}$, since then $\tilde A = 1 - A \in \mathbb{R}$. Then this Lemma tells us that $\frac{1}{A} = \frac{1}{1 - (1 - A)} = \frac{1}{1- \tilde A} = \sum\limits_{n=0} \tilde A^n$
> So the Neumann Series is a form of a geometric series for operators, with the difference being that when we take the exponent the product becomes a composition

To prove our Lemma on Neumann Series we will need a basic property of the operator norm given as follows:

> [!lemma|6.3] Submultiplicativity of the Operator Norm
>  
> Let $X, Y, Z$ be normed Vector spaces and $B \in L(X, Y)$ and $A \in L(Y, Z)$ then
> $\Vert AB \Vert \le \Vert A \Vert \Vert B \Vert$

`\begin{proof}`

$$$\begin{align*}
\Vert AB \Vert = \sup_{x \neq 0} \frac{\Vert ABx \Vert}{\Vert x \Vert} = \sup_{x \neq 0} \frac{\Vert ABx \Vert}{\Vert Bx \Vert} \frac{\Vert Bx \Vert}{\Vert Bx \Vert} \le \sup_{y \neq 0} \frac{\Vert Ay \Vert}{\Vert y \Vert} \sup_{x \neq 0} \frac{\Vert Bx \Vert}{\Vert x \Vert}
\end{align*}$$
`\end{proof}`


Now we can use this to prove the lemma of the Neumann Series:

`\begin{proof}`
Consider $S_{n}= I + \tilde A + \tilde A^{2} + ... + \tilde A^{n}$.
We will first show that $S_{n}$ is Cauchy in $L(X, X)$:
	Let $m > n$ and observe that: $$S_{m} - S_{n} = \sum\limits_{k=n+1}^{m} \tilde A^{k}$$
	Now take the norm as follows: $$\Vert S_{m} - S_{n} \Vert \le \sum\limits_{k=n+1}^{n} \Vert \tilde A^k \Vert \le \sum\limits_{k=n+1}^{n} \Vert \tilde A \Vert^k$$
	Which is now just a sum of numbers so we can proceed just like we would for the geometric series: $$\sum\limits_{k=n+1}^{n} \Vert \tilde A \Vert^{k}= \Vert \tilde A \Vert^{n} \sum\limits_{k=0}^{m-n} \Vert \tilde A \Vert^{k} \le \Vert \tilde A \Vert^{n} \sum\limits_{k=0}^{\infty} \Vert \tilde A \Vert^{k}= \Vert \tilde A \Vert^{n} \frac{1}{1- \Vert \tilde A \Vert} \to 0$$
	Which goes to $0$ as $n \to \infty$ since $\Vert \tilde A \Vert < 1$

Now we use Lemma 6.1 and see that since $L(X, X)$ is Banach the limit $S = \lim_{n \to \infty} S_{n}$ exists

Now all we want to show is that our found limit is actually the inverse, meaning we want to show $S(I - \tilde A) = I$ (note for this that $I - \tilde A = A$) which is shown via telescoping sums:
$$\begin{align*}
S_n(I-\tilde A) &= (I + \tilde A + \tilde A^{2}+ ... + \tilde A^{n})(I - \tilde A)\\
&= (I + \tilde A + \tilde A^{2}+ ... + \tilde A^{n})-(\tilde A + \tilde A^{2} + ... + \tilde A^{n+1})\\
&= I - \tilde A^{n+1}
\end{align*}$$
Meaning for $n \to \infty$ we have $S(I - \tilde A) = I - 0 = I$

Formally we also have to show that $(I - \tilde A) S = I$ but this is analogous to the previous step.
Thus $S$ is an inverse of $A = I - \tilde A$
`\end{proof}`

---

Now we use the previous insights about our space $L(X,X)$ and prove our main theorem of perturbation theory

> [!theorem|6.1] Perturbation Theory
> Let $X, Y$ be Banach Spaces and $T, S \in L(X, Y)$ then $$T \text{ invertible and } \Vert T - S \Vert_{L(X, Y)} < \frac{1}{\Vert T^{-1} \Vert} \implies \text{S is Invertible}$$
> 

^fb4e4c

`\begin{proof}`
We prove this by reduction to the Situation in Lemma 6.2 in the following way.

Let $S = T - (T-S) = T(I - T^{-1}(T-S))$ then we know $T$ is invertible by assumption and given $\Vert T^{-1}(T-S) \Vert < 1$ we know that $I - T^{-1}(T - S)$ is invertible by Neumann Series.

All we have to show is that $\Vert T^{-1}(T-S) \Vert < 1$ which is given via $$\Vert T^{-1}(T-S) \Vert \le \Vert T^{-1} \Vert \Vert T-S \Vert < 1 \Vert \Leftrightarrow \Vert T-S \Vert < \frac{1}{\Vert T^{-1} \Vert}$$
`\end{proof}`

> [!corollary|*]
> $T$ invertible $\implies$ there exists $\delta > 0$ such that $S$ invertible $\forall S \in L(X, Y)$ with $\Vert T - S \Vert < \delta$. That is that the set of invertible operators is *open*


> [!remark|*] Explicit Calculation of the Inverse
> We can now calculate the inverse explicitly via Lemma 6.2$$\begin{align*}
> S^{-1}&= (T(I - T^{-1}(T-S)))^{-1} = (I - T^{-1}(T-S))^{-1}T^{-1}\\
> &= (I + T^{-1}(T-S) + (T^{-1}(T-S))^{2} + ...)T^{-1}\\
> &= T^{-1} + T^{-1}(T-S)T^{-1} + T^{-1}(T-S)T^{-1}(T-S)T^{-1} + ...
> \end{align*}$$

^e28e7a


---

## Eigenvalues in Infinite Dimensions
We now want to consider what the analoge of Eigenvalues should be in infinite dimensions

> [!remark|*] Recap Linear Algebra
> Let us first recall the definitions from Linear Algebra. We only consider $A \in L(\mathbb{K}^{n}, \mathbb{K}^{n}) \cong \mathbb{K}^{n \times n}$. Then we define Eigenvalues $\lambda \in \mathbb{C}$ as the values such that $$\exists x\in \mathbb{K}^{n} \setminus \{ 0 \}: Ax = \lambda x$$
> In Linear Algebra we have shown a lot of equivalent statements for $\lambda \in \mathbb{C}$ being an Eigenvalue $$\begin{align*}
\lambda \in \mathbb{C} \text{ eigenvalue of } A &\iff A- \lambda I \text{ not injective}\\
&\iff A- \lambda I \text{ is not surjective}\\
&\iff A-\lambda I \text{ is not bijective}\\
&\iff det(A - \lambda I) = 0
\end{align*}$$ 

Since we don't have nice linear algebra in FA and no equalities between invertibility, injectivity and surjectivity we need to choose the right analog.

> [!theorem|*] Operator Spectrum
> Let $X$ be a Banach Space and $A \in L(X, X)$ then we define the following Terms
>  - **Spectrum of $A$ **:  $$\spec{A} = \{ \lambda \in \mathbb{C} \mid A- \lambda I \text{ not invertible} \}$$
> - **Resolvent Set of $A$ ** :  $$\rho(A) = \mathbb{C}\setminus \spec{A}$$
> 	- for $\lambda \in \rho(A)$ we call $(A-\lambda I)^{-1}$ the **resolvent of $A$ at the point $\lambda$**
> - **Point Spectrum of $A$ **:  $$\ptspec{A} = \{ \lambda \in \mathbb{C} \mid A-\lambda I \text{ not injective} \}$$
> 	- The Point spectrum is alternatively called the set of Eigenvalues
> - **Eigenvectors** are solutions to $Ax = \lambda x$ for $x \in X \setminus \set{0}, \lambda \in \ptspec$
> 

1. Consider $X = l^{2}$, $A = S_{-}$ the left shift $S_{-}(x_{1}, x_{2}, ...) = (x_{2}, x_{3}, ...)$. Then we have an eigenvalue of $\lambda = \frac{1}{2}$ since $$S_{-} \left({1, \frac{1}{2}, \frac{1}{2}^{2}, \frac{1}{2}^{3}, ...}\right) = \left(\frac{1}{2}, \frac{1}{2}^{2}, \frac{1}{2}^{3}, ...\right) = \frac{1}{2} \left(1, \frac{1}{2}, \frac{1}{2}^{2}, \frac{1}{2}^{3}, ...\right)$$
2. The first example also doesn't have an Eigenvalue $\lambda = 2$ since $2I - S_{-} = 2(I- \frac{1}{2}S_{-})$ is invertible by Lemma 6.2 since $\Vert \frac{1}{2} S_{-} \Vert = \frac{1}{2} \Vert S_{-} \Vert = \frac{1}{2} < 1$. By a similar argument $$|\lambda| > 1 \implies \lambda \notin \spec{S_{-}} \implies \spec{S_{-}} \subseteq \overline{B_1(0)}$$
3. $X = l^{2}$, $A = S^{+}$ the right shift, then $\lambda = 0$ is in $spec(S^{+})$ but $0$ is not an Eigenvalue since $$S^{+}x = 0 x \implies S^{+}x = 0 \implies x = 0$$ We also have $S^{+} - 0 I$ is not surjective because $(1, 0, 0, ...) \notin Im(S^{+})$
$$$
