---
publish: true
created: 2023-11-25T19:11:48.681+01:00
modified: 2026-06-10T19:12:40.555+02:00
tags:
  - academia
---

Prev: [[§4 Examples of Linear Operators]]
Next: [[§6 Invertibility; Notion of Spectra]]

---

## Motivation

Our Motivations here are basically by being given a Linear Function that is bijective we want to find a way to say that the inverse is also Linear.

In general let us define some things

> [!definition|\*] Inverse Linear Map
> Let $A: X \to Y$ be a linear map between normed vector spaces. If $A$ is bijective, the map $\begin{align*}
> A^{-1}:Y \to X && b \rightarrow \text{Solutions of }Ax =b
> \end{align*}$
> is called the inverse of $A$

> [!remark|\*] Linearity of Inverse
> $A^{-1}$ is still linear since
>
> $$$\begin{align*}
> A^{-1}(\lambda b_{1} + \mu b_{2}) &= A^{-1}(\lambda Ax_{1} + \mu Ax_{2})\\
> &= A^{-1}(A(\lambda x_{1} + \mu x_{2}))\\
> &= \lambda x_{1} + \mu x_{2} = \lambda A^{-1}b_{1} + \mu A^{-1}b_{2}
> \end{align*}$$
> $$$

A natural next Question is when continuity is preserved to this $A^{-1}$

---

## Theorem

Our questions will all be answered in the next theorems

> [!theorem|5.1]
> Let $X, Y$ be banach spaces and $T: X \to Y$ linear, invertible and continuous, then $T^{-1}$ is linear and continuous.

^cd9bbb

> [!example|\*] Counter-Example
> Let $d$ be the set of finite sequences and consider $L: d \to d$ given by $L(a_{1}, a_{2}, a_{3}, ...) = (a_{1}, \frac{a_{2}}{2}, \frac{a_{3}}{3}, ...)$
> Then an inverse is given by $L^{-1}(a_{1}, a_{2}, a_{3}, ...) = (a_{1}, 2a_{2}, 3a_{3}, ...)$

> [!info]
> This example doesn't preserve continuity because the space is not Banach. This in and of itsself is pretty crazy since the assumtion making our inverse continouus is one that has nothing to do with our function

We will generalise this theorem and prove a more general form of it. Prior to that we need to express a property of complete metric spaces that will be used in the big theorem of the chapter:

First some Definitions

> [!definition|\*] Nowhere Dense Sets
> Let $X$ be a metric space. $A \subset X$ is called nowhere dense if $\overline A$ does not contain an open set, meaning $\text{int}(\overline A) = \emptyset$

Examples for this weird type of set are

1. $A = \mathbb{Z}$ and $X = \mathbb{R}$
2. $A = \text{any 2D subspace}$  and $X = \mathbb{R}^3$
3. $A = \mathbb{Q}$ and $X = \mathbb{R}$

> [!info]
> Nowhere Dense Sets are used to define the Size of a metric Space $X$ in the following way:
>
> - $X$ is of first category if it is the countable union of nowhere dense sets
> - $X$ is of second category if it is not the union of nowhere dense sets
>
> In this case spaces of first category are in a way smaller then those of second category

Now the actual Lemma expressing the property we need

> [!lemma|5.1] Baire Category Theorem
> A complete metric space is not a countable union of nowhere dense sets

`\begin{proof}`
Suppose X is a complete metric space and $X = \bigcup_{n=1}^{\infty} A_{n}$ with $A_{n}$ nowhere dense. We will be aiming to construct an $x \in X$ that isn't in $\bigcup_{n=1}^{\infty} A_{n}$.
Consider $M_{n} = \overline A_{n}$ closed, nowhere dense and $X = \bigcup_{n=1}^{\infty} A_{n}$. We will now show that $X \setminus M_{1}$ is open and dense:

- $X \setminus M_{1}$ is open since $M_{1}$ is closed
- Assume $X \setminus M_{1}$ is not dense, then $\exists x\in X$ such that $dist(x, X\setminus M_{1}) > 0$ and $\exists \epsilon > 0: B_\epsilon(x) \cap (X\setminus M_{1})=\emptyset
   \implies B_{\epsilon}(x) \subset M
  $Which cant be since $M_{1}$ is nowhere dense

Since $X \setminus M_{1}$ is open and non-empty we can construct a closed ball $S_{1} \subset X \setminus M_{1}$
`\end{proof}`

> [!remark|\*] Alternative Reading of Baire Category Theorem
> We can alternatively say that the theorem simply states that complete metric spaces are all of second category, so "big" in an intuitive sense

The following theorem is a big deal in the world of functional analysis and has a highly non-trivial proof and consequences.

> [!theorem|5.2] Open Mapping Theorem
> Let $T:X \to Y$ continuous, linear, surjective between Banach spaces. Then $T$ is an open map.

^f57832

`\begin{proof}`

#### An Outline of the Proof

Given:

- $T: X \to Y$ surjective
- $T: X \to Y$ continuous
  We will show the following Claims:

1. $T:X \to Y$ surjective $\implies$ $\exists U \subset \overline{T(B_{\epsilon}(0))}$ open (Here we use the completeness of $Y$) ==!!Everything after this step is not very relevant for the Exam!!==
2. $U \subset T(B_{\epsilon}(0))$ open $\implies$ $\exists \delta > 0: B_{\delta}(0) \subset \overline{T(B_{2 \epsilon}(0))}$
3. $B_{\delta}(0) \subset \overline{T(B_{2 \epsilon}(0))} \implies \exists \tau > 0: B_{\tau}(0) \subset T(B_{2\epsilon}(0))$
4. $\forall \Omega$ open, $T(\Omega)$ is open

#### Step 1

Let $\epsilon > 0$ then note that $X = \bigcup_{n \in \mathbb{N}} n B_{\epsilon}(0)$ since $nB_{\epsilon}(0) = B_{n\epsilon}(0)$. Thus we have $Y = T(X) = T(\bigcup_{n \in \mathbb{N}} n B_{\epsilon}(0)) = \bigcup_{n \in \mathbb{N}} T(n B_{\epsilon}(0))$
Using the completeness of $Y$ and the Baire Category Theorem we get that not all $T(nB_{\epsilon}(0))$ are nowhere dense, meaning$\exists n \in \mathbb{N}: \tilde V_{0} \subset \overline{T(nB_{\epsilon}(0))}$
with $\tilde V_{0}$ open. Then we have$V_{0}  = \frac{1}{n} \tilde V_{0}\subset\overline{T(B_{\epsilon}(0))}$

#### Step 2 - Using a Translation Argument

Pick a $y_{0} \in V_{0}\cap T(B_{\epsilon}(0))$ and $x_{0} \in B_{\epsilon}(0)$ such that $T(x_{0}) = y_{0}$ then the following holds $\overline{T(B_{2\epsilon}(0))} \supseteq \overline{T(B_{\epsilon}(0) - x_{0})} = \overline{T(B_{\epsilon}(0))}-T(x_{0}) \supseteq V_{0} - y_{0} \supseteq B_{\delta}(y_{0}) - y_{0} = B_{\delta}(0)$

#### Step 3 - Cauchy Sequence Argument

We will notate in the following way:

- $B_{\epsilon}$ Ball around $0$ in $X$ of radius $\epsilon$
- $B_{\eta}'$ Ball around $0$ in $X$ of radius $\eta$
- $B_{2\epsilon_{0}}$ arbitrary ball around $0$ in $X$ and $B_{\epsilon_{i}}$ with $\epsilon_{i} = 2^{-i} \epsilon_0$

From Step 2 we know that $\forall \epsilon_{i}; \exists \eta_{i} > 0, \eta_{i} \to 0$ such that $\overline{T(B_{\epsilon_{i}})} \supseteq B_{\eta_{i}}'$
Now let $y \in B_{\eta_{0}}'$ and we will aim to show that $\exists x \in B_{2\epsilon_{0}}: Tx = y$ by approximating solutions.

For $y \in \overline{T(B_{\epsilon_{0}})}$ we know that there exists $x_{0} \in B_{\epsilon_{0}}$ such that $\Vert y - Tx_{0} \Vert < \eta_{1} \implies y -Tx_{0} \in B_{\eta_{1}}'$
We can refine this iteratively by considering $y - Tx_{0} \in \overline{T(B_{\epsilon_{1}})} \implies \exists x_{1} \in B_{\epsilon_{1}}: \Vert y - (Tx_{0} + Tx_{1}) \Vert = \Vert y - T(x_{0} + x_{1}) \Vert < \eta_{2}$
and iterate. Now consider $\tilde x_{n} = \sum\limits_{i=0}^{n} x_{i}$
We can then see that $\{ \tilde x_{n} \}$ is Cauchy since for $n > m$ $\left\Vert \sum\limits_{i=0}^{n} x_{i} - \sum\limits_{i=0}^{m} x_{i} \right\Vert = \left\Vert \sum\limits_{i=m + 1}^{n} x_{i} \right\Vert \le \sum\limits_{i=m+1}^{n} \Vert x_{i} \Vert \le \epsilon_{0} 2^{-m} \to 0$
Now we use the properties of our space in the following ways

- $X$ complete $\implies$ $\exists x = \lim_{n \to \infty} \tilde x_{n}$
- $T$ continuous $\implies$ $Tx = \lim_{n \to \infty} T \tilde x_{n}$
  and the $x$ is where we want it since
  $\Vert x \Vert \le \sum\limits_{i=0}^{\infty} \Vert x_{i} \Vert \le \sum\limits_{i=0}^{\infty} \epsilon_{0} 2^{-i} = 2 \epsilon_{0} \implies x \in B_{2\epsilon}(0)$

#### Step 4 - Translation Argument

Let $y = Tx$ be an arbitrary point in $T(\Omega)$ then $T(\Omega) \supseteq T(B_{\epsilon}(x)) = T(B_{\epsilon}(0) + x) = T(B_{\epsilon}(0)) + Tx \supseteq B_{\delta}'(0) + Tx = B'_{\delta}(Tx)$
`\end{proof}`

> [!info]
> The open mapping theorem is a generalisation of Theorem 5.1 since a given $T$ that is bijective then $T \text{ is open map} \Leftrightarrow T^{-1} \text{ is continuous}$

## Applications

There are many applications of the open mapping theorem, theoretical and practical.

> [!example|\*] Sensitivity Analysis with respect to data
> If we consider a general Linear Equation $Ax = b$ which we want to solve. We can theoretically solve this by calculating $A^{-1}b$ provided $A$ is invertible. The data given in $b$ can be imprecise though, meaning our solution will not necessarily be exact. The question now arises how far our perturbed imprecise data is from the exact data we would want, which we can mathematically express as: $x - x' = A^{-1}(b - b')$
> The Open Mapping Theorem here provides us with the continuity of $A^{-1}$ meaning we can make the following useful estimate: $\Vert x - x' \Vert = \Vert A^{-1}(b-b') \Vert \le M \Vert b-b' \Vert$
> Which means we can control the sensitivity of our Equation to peturbations of our Data

---

We will now be looking at more theoretical implications of this theory of linear operators that give us an overview of different operators and their properties.

First let us define some interesting and useful concepts

> [!definition|\*] Operator Norm
> Given two normed Vector Spaces $X,Y$ we define $L(X, Y)$ as the set of linear continuous maps from $X$ to $Y$ and endow it with a norm called the operator norm defined as: $\Vert A \Vert_{L(X,Y)} = \sup_{x=0} \frac{\Vert Ax \Vert_Y}{\Vert x \Vert_X}$
> Where we can connect the Operator Norm to the Open Mapping theorem by noting that $\Vert A \Vert_{L(X, Y)}$ is the smallest constant $M \geq 0$ such that $\Vert Ax \Vert_{Y}  \leq M \Vert x \Vert_{X}$

> [!definition|\*] Bounded Linear Operators
> For $X, Y$ normed vector spaces and $I$ index set and $T_{i} \in L(X, Y)$ for all $i \in I$. Then we call $T_{i}$:
> a) point-wise bounded if $\forall x \in X: \sup_{i \in I} \Vert T_{i}x \Vert_{Y} \le \infty$
>
> b) uniformly bounded if $\sup_{i \in I} \sup_{x \neq 0} \frac{\Vert T_{i}x \Vert_{Y}}{\Vert x \Vert_{X}} = \Vert T_{i} \Vert_{L(X, Y)} < \infty$

An example of a linear operator that we can analyse for boundedness is the following

> [!example|\*] Boundedness of a specific linear operator
> Let $X = Y = d$ with the norm $\Vert \cdot \Vert_{\infty}$ Then consider for $I = \mathbb{N}$ the set of maps $T_{i}x=i x_{i} e_{i}$ where $e_{i}= (0, 0, ..., 1, 0, ...)$
>
> - $T_{i}$ is point-wise bounded since $\forall x \in d \exists N \in \mathbb{N}: x_{j} = 0$ for all $j > N$ meaning $T_{i}x = 0$ for all $i >N$ and thus $\sup_{i\in I}\Vert T_{i}x \Vert = \max \{ |ix_{i}| \mid i\in [1, N] \} = N |x_{i}| <\infty$
> - $T_{i}$ is not uniformly bounded in $L(d, d)$ since $\Vert T_{i} \Vert_{L(d,d)} = \sup_{x \neq 0} \frac{\Vert T_{i}x \Vert}{\Vert x \Vert} = i \implies \sup_{i \in I}\Vert T_{i} \Vert_{L(d, d)} = \infty$

A useful implication that loosely mirrors phenomena from Analysis is the implications of different types of boundedness:

> [!theorem|5.3] Banach-Steinhaus Theorem / Principle of Uniform Boundedness
> Let $X$ be Banach and $Y$ be normed Vector Space, $I$ index set and $T_{i} \in L(X, Y)$. Then $T_{i} \text{ point-wise bounded} \Leftrightarrow T_{i} \text{uniformly bounded}$

---

Another direction we can take the theory is to look at continuity as a topological property and thus focus on other topological properties:

> [!definition|\*] Closed Operators
> Let $A:X \to Y$ a linear operator between normed vector spaces, then $A$ is called closed if its graph $\text{graph } A = \{ (x, y) \in X \times Y \mid y = Ax \}$
> is a closed set.
> Equivalently if $x_{j} \to x \text{ and } Ax_{j} \to y \implies Ax = y$

Let us see some examples of these Operators and what properties they have:

> [!example|1] Continuity implies Closedness
> $A$ continuous $\implies$ $A$ closed
>
> `\begin{proof}`
> $x_{j} \to x \implies Ax_{j}\to Ax \implies Ax_{j} \to y \implies Ax = y$
> `\end{proof}`

> [!example|2] A non-closed Operator
> Let $X = Y = d$ and consider the Operator $A$ such that $Ae_{j} = j e_{1}$ then consider
>
> $$$\begin{align*}
> x^{(i)}&= \frac{1}{i}e_{i} \to 0\\
> Ax^{(i)}&= i \frac{1}{i} e_{1} = e_{1} \to e_{1}\\
> \end{align*}$$
> but $A0 \neq e_{1}$
> $$$

The implication from example 1 is simple but the reverse might also be interesting. Is a closed linear operator always continuous?

> [!theorem|5.4] Closed Graph Theorem
> Let $X, Y$ be Banach, and $A:X \to Y$ be closed linear operator, then $A$ continuous

^075c63

`\begin{proof}`
Proof is given in the exercises
`\end{proof}`

Now consider a already familiar operator:

> [!example|3] The Differential Operator
> Let $X = C^{\infty}([0, 1])$ with $Af = f'$ where $A: X \to X$
> Note that no matter what norm we choose on $C^{\infty}$, $A$ will not be continuous (Shown in Exercies)
>
> Take for example the $\Vert f \Vert = \sup_{x \in [0,1]} |f(x)|$ then we will show that A is closed
>
> `\begin{proof}`
> This proof uses a classical fact from analysis which is $\begin{cases}
> f^{(n)} \to f \text{ uniformly} \\
> (f^{(n)})' \to g \text{ uniformly}
> \end{cases} \implies f' = g$
> which is our equivalent statement to our operator being closed
> `\end{proof}`

---

The last example specifically gives us two ways to think of differentiation as an operator in the functional-analytic context:

- Differentiation is continuous if we consider it as a map between two different Banach spaces
- Differentiation is a closed operator from a normed Vector Space to its-self (which is useful for spectral theory)
