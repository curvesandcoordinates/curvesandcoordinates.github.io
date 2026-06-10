---
publish: true
created: 2024-01-23T14:46:14.000+01:00
modified: 2026-06-10T19:12:40.551+02:00
tags:
  - academia
---

Prev: [[§9 Duality in Hilbert Space]]
Next: [[§11 Weak Convergence]]

---

Dual Spaces are important in many problems for example they are needed for "weak convergence" (See §11 later)

First Recall the following

> [!info]
> The Dual Space $X^{*}$ of a Banach Space $X$ over $\mathbb{K}$ is the space $L(X, \mathbb{K})$, endowed with the operator Norm $\norm{L}_{X^{*}}:= \sup\limits_{x\in X \setminus \set{0}} \frac{\norm{Lx}_\mathbb{K}}{\norm{x}_X}$
> By Lemma 6.1 we also have that $(X^{*}, \norm{\cdot}_{X^{*}})$ is again Banach. The elements of $X^{*}$ are called linear functionals.

A Typical example is integration. If we take for example $X = C([a, b])$ with $Lf = \int_{a}^{b}f(s) ds$ which is continuous since $\left| \int_{a}^{b}f(s)ds \right| \le (b-a) \norm{f}_{\infty} = (b-a) \norm{f}_{X}$
so $\norm{L}_{X^{*}} \le b-a$

Our first goal in Dual Spaces is to determine (up to isomorphism or isometry) the dual Space of important Banach spaces. For that let us first define isometry and isomorphic spaces

> [!theorem|10.1] Dual Space of a Hilbert Space
> Let $(X, \norm{\cdot}_{X})$ and $(Y, \norm{\cdot}_{Y})$ be Banach Spaces are called
>
> 1. Isomorphic ($X \cong Y$) if there exists a continuous isomorphism $T: X \to Y$
> 2. Isometric if they are isomorphic and $\norm{a}_{X} = \norm{Ta}_{Y}$ for all $a \in X$.
>
> Let $X$ be a Hilbert Space, then $X \cong X^{*}$ and the map
>
> $$$\begin{align*}
> T: X \to X^{*}, && y \to \innprod{\cdot}{y}
> \end{align*}$$
> is an isometric isomorphism.
> $$$

`\begin{proof}`
To prove this we first need to show that $T$ is bijective:

- Surjectivity: This is given via Riesz representation theorem
- Injectivity: Let $y \in X$ with $\begin{align*}
  X^{*} \ni 0 = T(y) &= \innprod{\cdot}{y}\\
  \iff 0 &= \innprod{x}{y}, \forall x \in X\\
  \implies 0 &= \innprod{y}{y} \implies y = 0
  \end{align*}$
  This bijective and trivially continuous, so we have an isomorphism. Let us now show that it is isometric

$$$\begin{align*}
\norm{T(y)}_{X^{*}} = \norm{\innprod{\cdot}{y}}_{X^{*}} &= \sup\limits_{x\in X\setminus \set{0}} \frac{|\innprod{x}{y}|}{\norm{x}_{X}}\\
&= \sup\limits_{x\in X\setminus \set{0}} \left| \innprod{\frac{x}{\norm{x}}}{y} \right|\\
&= \left| \innprod{\frac{\pm y}{\norm{y}}}{y}\right| = \frac{\norm{y}_{X}^{2}}{\norm{y}_{X}}=\norm{y}_{X} 
\end{align*}$$
Where the last line is given by some work done in Classes.
`\end{proof}`

An interesting case of this is given in the case of $l^{p}$ or $L^{p}$ cases
> [!theorem|10.2]
> Let $1 \le p < \infty, \frac{1}{p} + \frac{1}{q} = 1$ and $\mathbb{K} = \mathbb{R}$ then
> 1. $(l^{p})^{*} \cong l^{q}$
> 2. $(L^{p}(\Omega))^{*} \cong L^{q}(\Omega)$ 
> Moreover
> 1. The Map $T: l^{q} \to (l^{p})^{*}$ given by $$y \to T(y) = \sum\limits_{j=1}^{\infty}(\cdot)_{j} y_{j}$$ is an isometric isomorphism
> 2. The map $T: L^{q}(\Omega) \to (L^{p}(\Omega))^{*}$ given by $$g \to T(g) = \int_{\Omega} (\cdot)(x) g(x) dx$$ is an isometric isomorphism

^27dee1

>[!info]
>Note that the following are true aswell:
>- When $p = 1$ and $q = \infty$ the theorem also holds
>- When $p = \infty$ and $q = 1$, the theorem weirdly fails (we will see why later)
>- The case of $p = q = 2$ is special since that tells us that $(l^{2})^{*} \cong l^{2}$ and $(L^{2}(\Omega))^{*} = L^{2}(\Omega)$

`\begin{proof}`
#### For (1)
Here we have to show that the defined Map is indeed a continuous isometric isomorphism.

Continuity is given through Hölder's innequality. Let $x = (x_{j})_{j\in \mathbb{N}} \in l^{p}, y = (y_{i})_{i\in \mathbb{N}} \in l^{q}$ then.
$$\begin{align*}
	|T(y)x| &= \sum\limits_{i} x_{i} y_{i} \le \norm{x}_{p} \norm{y}_{q}\\
\implies \frac{|T(y)x|}{\norm{x}_{p}} &\le \norm{y}_{q}\\
\implies \sup\limits_{x \in l^{p} \setminus \set{0}}\frac{|T(y)x|}{\norm{x}_{p}} &\le \norm{y}_{q}\\
\norm{T(y)}_{(l^{p})^{*}} &\le \norm{y}_{q}\\
\implies T(y) \in (l^{p})^{*}
\end{align*}$$

This map is also injective given that $$\begin{align*}
0 = T(y) \iff 0 &= T(y)x = \sum\limits_{j} x_{j} y_{j} &&\forall x \in l^{p}\\
\implies 0 &= T(y)e_{n} = \sum\limits_{j} (e_n)_{j} y_{j} = y_{n}\\
\implies 0 &= y 
\end{align*}$$
It is also surjective given that for any $L \in (l^{p})^{*}$ we need some $y \in l^{q}$ such that $Lx = \sum\limits_{i} x_{i}y_{i}$. Again for this consider the Basis Vectors $e_{n}$ and set our $y$ to be:
$$\begin{align*}
y_{n} &= Le_{n}
\end{align*}$$
We now have to show that $(y_{n})_{n\in \mathbb{N}}$ is in $l^{q}$. To this end consider a helper sequence $$\tilde y_{n} = |y_{n}|^{q-1} \cdot sgn(y_{n}) \forall y_{n} \neq 0$$
Then we get that 
$$\begin{align*}
\norm{\tilde y}_{p}^{p} = \sum\limits |\tilde y_{n}|^{p} = \sum\limits | y_{n} | ^{p(q-1)} = \sum\limits |y_n|^{q} = \norm{y}_{q}^{q}
\end{align*}$$
At the same time we have
$$\begin{align*}
\sum\limits_{n=1}^{m} |y_{n}|^{q} &= \sum\limits_{i=1}^{n}\tilde y_{n} y_{n} = \sum\limits_{n=1}^{m} \tilde y_{n} Le_{n} = L\left( \sum\limits_{n=1}^{m} \tilde y_{n} e_{n} \right) =  L(\tilde y_{1}, \tilde y_{2}, ..., \tilde y_{n})\\
&\leq \norm{L}_{(l^{p})^{*}} \cdot \norm{(\tilde y_{1}, \tilde y_{2}, ..., \tilde y_{n})}_{p}\\
&\leq \norm{L}_{(l^{p})^{*}} \cdot \left( \sum\limits_{n=1}^{m} |y_{n}|^{q} \right)^\frac{1}{q}
\end{align*}$$
The second component of this product can be simplified in the following way:
$$\begin{align*}
\left( \sum\limits_{n=1}^{m} |y_{n}|^{q} \right)^{\frac{1}{q}}&= \left( \sum\limits_{n=1}^{m} |y_{n}|^{q} \right)^{1- \frac{1}{p}} \leq \norm{L}_{(l^{p})^{*}}
\end{align*}$$
Thus letting $m \to \infty$ we get
$$ \norm{y}_{q} \le \norm{L}_{(l^{p})^{*}} < \infty$$


#### We will no prove this for $L^{p}$ and $L^{q}$
Consider that $L: L^{p} \to \mathbb{R}$ is linear and continuous if and only if $L: f \to \int_{\Omega} fg$ for some $g \in L^{q}$. COMPLETE THIS PROOF

`\end{proof}`

---
We will now try to generalise a fact we know about Hilbert Spaces. We have seen that the dual of Hilbert Spaces is non-empty. For general Banach Spaces we are in no way sure that there exists non-zero elements in its Dual Space.

> [!theorem|10.3] Hahn-Banach Theorem
> Let $X$ be a real or complex vector Space and $U \subset X$ a subspace and $$p:X \to \mathbb{R} \text{ a sublinear map}$$
> and $$l: U \to \mathbb{R} \text{ linear}$$
> and suppose that $l \le p$ on $U$.
> Then there exists $L: X \to \mathbb{R}$ which is linear such that $L_{\mid U} = l$ , $L \leq p$ on X 

^f4ad39

`\begin{proof}`
The Idea here is that we use that the Codimension of $U$ to our advantage.

#### Step 1
Let $codim U = \dim X/U = 1$ and choose $x_{0} \in X \setminus U$. Then we get that for all $x \in X$ we can decompose it into: $$x = u + \lambda x_{0}$$
with $u \in U$ and $\lambda \in \mathbb{R}$. 
We want to show the mere existence of such a $L$ so let us use the Ansatz that $L(x) = l(x) + r \lambda$ where $r \in \mathbb{R}$ is free to choose. We would then have to find $r \in \mathbb{R}$ such that $L \le p$ on all of $X$

We can see that the following holds
$$\begin{align*}
L \le p &\iff l(u) + r \lambda \le p(u+\lambda x_{0})\\
&\iff r \lambda \le p(u+\lambda x_0) - l(u)\\
&\iff r \le p\left(\frac{u}{\lambda} + x_{0}\right) - l\left(\frac{u}{\lambda}\right)\\
&\iff r \le \inf\limits_{v \in U} \left[ p\left(\frac{v}{\lambda} + x_{0}\right) - l\left(\frac{v}{\lambda}\right) \right]\\

\end{align*}$$
NON-Complete PROOFO

`\end{proof}`

Now while this theorem seems very abstract it can be specialised in our topics cases in the following way:

> [!corollary|10.1] Hahn-Banach Theorem for norms
> Let $X$ be a normed $\mathbb{K}$-Vector Space and $U \subset X$ a subspace and $l: U \to \mathbb{K}$ a continuous and linear functional. Then there exists a continuous linear functional $L: X \to \mathbb{K}$ with
> $$\begin{align*}
> L_{\mid U} = l && \norm{L} = \norm{l}
> \end{align*}$$

`\begin{proof}`
The Ideal for the proof of the statement is to apply Theorem 10.3 with $p(x) = \norm{l} \norm{x}$. On $U$ we know that $$\norm{l} = \sup\limits_{x \in U \setminus \set{0}} \frac{|l(x)|}{\norm{x}} \implies |l(x)| \le \norm{l} \norm{x} = p(x)$$ thus all the properties of Hahn-Banach are satisfied and there exists the wanted linear functional.
`\end{proof}`
>[!info] Essence
>The Idea here is that any linear functional on a Subspace can be extend (via some norm) to a continuous linear function on the whole space

> [!example|*]
> Let $X = l^{\infty}$ and $U$ be the set of convergent sequences, with the map $$l(a_{1}, a_{2},...) = \lim\limits_{j \to \infty} a_{j}$$ Now here $l$ is continuous since $|l(a_{1}, a_{2}, ...)| = |\lim\limits_{j \to \infty} a_{j}| \le \sup |a_{j|}= \norm{(a_{1}, a_{2}, ...)}_{\infty}$ and by the statement we know that there exists a map $$L:l^{\infty} \to \mathbb{R}$$ such that $L(\text{convergent Sequences}) = \text{ limit}$ and $|L(\text{sequences})| \leq \norm{\text{sequence}}_{\infty}$ 

Another useful corollary of Hahn-Banach is that:

> [!corollary|10.2]
> Let $X$ be a normed VS. Then firstly we have that $\forall x \in X \setminus \set{0} \exists L \in X^{*}$ such that $$\begin{align*}
> \norm{L} = 1 && L(x) = \norm{x}\\
> \end{align*}$$
> In particular $\forall x_{1} \neq x_{2} \exists L \in X^{*}: L(x_{1}) \neq L(x_{2})$

`\begin{proof}`
#### 1) $X$ is Hilbert
Then we can simply define $L(y) = \innprod{y}{\frac{x}{\norm{x}}}$ then $Ly \le \norm{y}$ and $$Lx \le \frac{\norm{x}^{2}}{\norm{x}} = \norm{x}$$
#### 2) $X$ is normed VS
Then consider $l: \span{x} \to \mathbb{K}$ with $l(\lambda x) = \lambda \norm{x}$ then we have $l(x) = \norm{x}$ and $\norm{l} = 1$. We can then extend $l$ to $L$ on $X$
In particular we have $L(x_{1} - x_{2}) = \norm{x_{1} - x_{2}}$
`\end{proof}`
As a consequence of Hah-Banach we get the dual Statement to the Operator norm

> [!corollary|10.3]
> 
Let $X$ be a normed VS. Then 
$$\norm{x} = \sup\limits_{L \in X^{*} \setminus \set{0}} \frac{|Lx|}{\norm{L}}$$

And we also get the separation of not just Points but of points from other Subspaces as well

> [!corollary|10.4]
> Let $X$ be a Banach Space and $U \subset X$ a closed subspace. Then for any $x_{0}\in X \setminus U$ there exists $L \in X^{*}$ such that 
> $$\begin{align*}
> L_{\mid U} &= 0 && L(x_{0}) \neq 0
\end{align*}$$

`\begin{proof}`
#### 1) For $X$ Hilbert Space
By the projection theorem we get that we can deconstruct $x_{0} = u + x_{0}^{\perp}$ and take $L(y) = \innprod{y}{x_{0}^{\perp}}$ . Then we have that $L_{\mid U} = 0$ and $L(x_{0}) = L(u + x_{0}^{\perp}) = \norm{x_{0}^{\perp}}^{2}$ 

#### 2) $X$ normed VS:
First Consider the quotient map $$q : X \to X /U, x\to[x]$$
then we can see that $q(u) = [0]$ and $q(x_{0}) \neq [0]$
Choose some map $l: \span \set{q(x_{0})} \to \mathbb{K}$ then $l(q(x_{0})) \neq 0$. By Hahn-Banach we know that this can be extended to $\tilde L$ into a map from $X/U$.
Define $L(x) = \tilde L(q(x))$. Then we get $L(x_{0}) \neq 0$ and $L(u) = 0$ thus it is the function.
`\end{proof}`

We can now also prove something that we have seen in Index theory before, which was that we can alsways find a closed complement of any finite-dim. subspace $U$

> [!corollary|10.5] Existence of closed complements
> Let $X$ be a Banach space, $U$ finite-dim. subspace then there exists a closed complement $V$ of $U$. In particular we can write $X = U \oplus V$ and we know $U \cap V = \set{0}$ 

`\begin{proof}`
See Online
`\end{proof}`

>[!info] "Finite Dim." is not "closed"
>A counter example that proves we cant just use closed instead of finite dim. is $X = l^{\infty}$ and $U = c_{0}$
$$$
