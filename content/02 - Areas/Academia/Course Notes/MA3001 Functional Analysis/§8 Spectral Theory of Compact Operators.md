---
publish: true
created: 2023-12-12T14:08:01.000+01:00
modified: 2026-06-10T19:12:40.722+02:00
tags:
  - academia
---

Prev: [[§7 More about invertibility - Index Theory]]
Next: [[§9 Duality in Hilbert Space]]

---

The general Setting here will be that $X$ is a Banach space and our Operator $T \in L(X, X)$

Lets start with some motivic examples

> [!example|8.1] The Right Shift has no Eigenvalues
> Let $X = l^{2}$ and $T= S^{+}$ is the right shift operator. Then $T$ has no Eigenvalues since $\begin{align*}
> (0, v_{1}, v_{2}, ...) &=Tv = \lambda v = (\lambda v_{1}, \lambda v_{2}, ...)\\
> \implies 0 &= \lambda v_{1} \implies v_{1} = 0\\
> \implies v_{1}&= \lambda v_{2} \implies v_{2} = 0
> \end{align*}$

> [!example|8.2] Eigenvalues of the Derivative Operator
> Let $X = C^{\infty}(\mathbb{R}; \mathbb{C}) = \set{f: \mathbb{R} \to \mathbb{C} \mid f \text{ is smooth}}$ and $T = \frac{d}{dx}$ the derivative operator. Then $\begin{align*}
> Tf &= \lambda f\\
> \implies f' &= \lambda f\\
> \implies f &= Ae^{\lambda x} && A \in \mathbb{C}
> \\
> \end{align*}$
>  
> Meaning here every complex number is an Eigenvalue but not every function is an Eigenvector

These examples show us multiple extremes of the spectrum and motivate us to find a subclass of linear operators for which the examples remain less extreme

## Compact Operators

> [!theorem|8.1] Spectra of Compact Operators
> Let $X$ be Banach and $K \in L(X, X)$ be a compact operator, where $\mathbb{K} = \mathbb{C}$ then
>
> 1. Exactly one of the following alternatives hold:
>
> - $\spec(K)$ is non-empty and finite meaning $\spec(K) = \set{\lambda_{1}, ... \lambda_{k}}$
> - $\spec(K)$ is non-empty and countable, more precisely $\spec(K) = \set{\lambda_{j}}_{j=1}^{\infty} \cup \set{0}$ for distinct $\lambda_{j} \in \mathbb{C}$ with $\lambda_{j} \to 0$
>
> 2. $\dim X = \infty \implies 0 \in \spec(K)$
> 3. $\lambda \in \spec(K) \setminus \set{0} \implies \lambda$ is eigenvalue of $K$

^78eb81

`\begin{proof}`
Given the previous lectures (2) and (3) are easier to prove. We will prove (1) later

#### Proof of (2)

Suppose $0 \notin \spec K$ then $\begin{align*}
K-0I = K &\text{ invertible}\\
\implies \overline{B_1(0)} &= K^{-1}(K(\overline{B_{1}(0)})
\end{align*}$
Since continuous functions map compact sets to compact sets, and since $K^{-1}$ is continuous we can see that the unit Ball is compact. But we have shown before in Theorem 2.2 that this only happens in finite dimensions, so $0 \notin \spec K \implies dim X < \infty$

This generalises to the statement that compact operators on $\infty$ dimensional Banach spaces are never invertible

#### Proof of (3)

This follows directly from index theory. Suppose $\lambda \in \spec K \setminus \set{0}$ then we know $\begin{align*}
\lambda I - K \text{ not invertible} \overset{\text{by Thrm 7.2}}\implies \ind(\lambda I - K) = 0\\
\end{align*}$
So $\lambda$ is an eigenvalue since $\lambda I - K$ is not injective
`\end{proof}`

> [!info]
> The Spectrum here is "Quantized" in a way, meaning we make it into a discrete Set (used in Energy levels from Quantum Physics which are also discrete)
>
> At the same time there seems to be a special role for $\lambda = 0$ which can only be understood using index theory. In the finite dimensional case $\lambda = 0$ is the only case where $K - \lambda I$ is not Fredholm

## Examples of Compact Operators and their Spectra

The example of Compact Operators is given in "[[Differential Operator and Fourier Series Representation]]"
In the course of the example we will be using the following Lemma

> [!lemma|8.1]
> The Set $A = \set{u \in C^{1}([a, b]) \mid \norm{u}_{\infty} + \norm{u'}_{\infty} \in \mathbb{R}}$
> is relatively compact in $C([a, b])$

^3677fd

> [!info]
> This Lemma is a special case of the well known Arzela-Ascoli Theorem and follows the principle that bounds on higher derivatives yield compact sets in function spaces

---

Let us now go towards proving the first statement from Theorem 8.1

> [!lemma|8.2]
> Let $X$ be a Vector Space and $T: X \to X$ a linear operator and $v_{1}, ..., v_{r}$ eigenvectors with different eigenvalues $\lambda_{1}, ..., \lambda_{r}$. Then $v_{1}, ..., v_{r}$ linearly independent.

^ccf0aa

`\begin{proof}`
The proof is by induction. The Case for $r = 1$ is clear.
$r-1 \to r$
Suppose $v_{1}, ..., v_{r}$ linearly dependent i.e. $\exists a_{i} \in \mathbb{K}$ not all $0$ such that $\begin{align*}
a_{1} v_{1} + ... + a_{r} v_{r} &= 0 && \mid T(\cdot)\\
\implies a_{1} \lambda_{1} v_{1} + ... + a_{r} \lambda_{r} v_{r} &= 0 && \mid \lambda_{r}(1) - (2)\\
\implies (\lambda_{r} - \lambda_{1})a_{1} v_{1} + ... + (\lambda_{r} - \lambda_{r-1})a_{r-1}v_{r-1} &= 0\\
\implies (\lambda_{r} - \lambda_{i}) \text{ is never zero since they are distinct} \implies a_{1}, ..., a_{r-1} &= 0\\
a_{r}v_{r}&= 0\\
\implies a_{r} &= 0
\end{align*}$
Thus leading to a contradiction since $a_{i} \neq 0$ for all $i \in \set{1, ..., r}$
`\end{proof}`

> [!lemma|8.3]
> $X$ be a Banach Space, $T = I - K$ with $K \in L(X, X)$ and $M, L$ closed subspaces with $M\subset L$ and $T(L) \subseteq M$
>
> Then $\exists a \in L \setminus M$ such that $\norm{a} = 1$ and $\norm{Ka - Kx} \geq \frac{1}{2}$ for all $x \in M$

`\begin{proof}`
By the theorem of the almost orthogonal element there already exists $a \in L \setminus M$, $\norm{a} = 1$, $dist(a, M) \geq \frac{1}{2}$

Since the existence is trivially given we can now check the property that $\forall x \in M: \norm{Ka - Kx} \geq \frac{1}{2}$
To this end consider $\begin{align*}
Ta &= a - Ka = \tilde x \in M && \text{ since } T(L) \subseteq M\\
\implies Ka &= a- \tilde x\\
\implies Ka - Kx &= a- \tilde x - Kx\\
\text{since } \tilde x \in M &\text{ and } K(M) \subseteq M\\
\implies \norm{Ka - Kx} \geq dist(a, M) \geq \frac{1}{2}
\end{align*}$
`\end{proof}`

Now let us consider one last proposition before the important proof:

> [!proposition|8.1]
>  Let $X$ be a Banach Space and $K \in L(X, X)$ a compact operator then $\spec K$ has no accumulation point not equal to $0$

`\begin{proof}`
The Idea here is to combine the Distance estimate from Lemma 8.3 and the linear independence Lemma from Lemma 8.2

Suppose $\spec K$ has an accumulation Point $\lambda_{*} \neq 0$. Let $\epsilon > 0$ and choose a sequence of distinct eigenvalues $\set{\lambda_{i}} \subset \spec K \setminus \set{0}$ such that $\lambda_{j} \to \lambda_{*}$ with $\left| \frac{1}{\lambda_{j}}- \frac{1}{ \lambda_{*}} \right| < \epsilon$
for all $j \in \mathbb{N}$. Using the third property of our spectral theory we know that all $\lambda_{j}$ are eigenvalues. Let $v_{j}$ be the corresponding eigenvectors then by Lemma 8.2 $\set{v_{j}}_{j=1}^{\infty}$ is a sequence of linear independent eigenvectors.
Let $U_{n} = \span \set{v_{1}, ..., v_{n}}$ then the linear independence gives us that $U_{1} \subset U_{2} \subset U_{3} \subset ...$ Note that $(K - \lambda_{n} I) U_{n} \subseteq U_{n-1}$ and $U_{n}$ is finite dimensional and thus closed.
By Lemma 8.3 we get that a $x_{n} \in U_{n} \setminus U_{n-1}$ with $\norm{x_{n}} = 1$ such that for $\frac{1}{\lambda_{n}}K - I$ and $\norm{\frac{1}{\lambda_{n}}K x_{n} - \frac{1}{\lambda_{n}}Kx} \geq \frac{1}{2}$
Let $x = x_{m}$ with $m < n$ then $\begin{align*}
\frac{1}{2} &\leq \norm{\frac{1}{\lambda_{n}}K x_{n} - \frac{1}{\lambda_{n}}Kx}\\
&\leq \norm{\frac{1}{\lambda_{\ast}}K x_{n} - \frac{1}{\lambda_{\ast}}Kx} + \norm{(\frac{1}{\lambda_{\ast}} - \frac{1}{\lambda_{n}})Kx_{n}} + \norm{(\frac{1}{\lambda_{\ast}} - \frac{1}{\lambda_{m}})Kx_{m}}
\end{align*}$
Since $\begin{align*}
\norm{\frac{1}{\lambda_{\ast}}K x_{n} - \frac{1}{\lambda_{\ast}}Kx} &\leq \frac{1}{|\lambda_{\ast}|}\norm{Kx_{n}- Kx_{m}}\\
\norm{(\frac{1}{\lambda_{\ast}} - \frac{1}{\lambda_{n}})Kx_{n}} &\leq \epsilon \norm{K} \\
\norm{(\frac{1}{\lambda_{\ast}} - \frac{1}{\lambda_{m}})Kx_{m}} &\leq \epsilon \norm{K}
\end{align*}$
we get $\frac{1}{2} - 2 \epsilon \norm{K} \leq \frac{1}{|\lambda_{\ast}|}\norm{Kx_{n} - Kx_{m}}$
for any $m < n$. Meaning that even though $\set{x_n}$ is bounded the image $\set{Kx_n}$ which stands in contradiction to the boundedness of our Operator
`\end{proof}`

> [!lemma|8.4]
> Let $X$ be a Banach Space and $T \in L(X, X)$ then $\spec T \subseteq \set{\lambda \in \mathbb{C} \mid |\lambda| \leq \norm{T}}=\overline{B_{\norm{T}}(0)}$
> meaning implicitly that $\spec T$ is bounded

^09844b

`\begin{proof}`
Using Neumann Series we can see that supposing $|\lambda| > \norm{T}$ implies $\lambda I - T$ is invertible since $\frac{1}{\norm{\frac{1}{\lambda}I}} = \frac{1}{\norm{(\lambda I)^{-1}}}$
STILLL UNCLEARRRRRR
`\end{proof}`

We can now finally proof Theorem 8.1 (1) meaning we have to show

> [!claim|\*]
> Exactly one of the following alternatives hold:
>
> - $\spec(K)$ is non-empty or finite meaning $\spec(K) = \set{\lambda_{1}, ... \lambda_{k}}$
> - $\spec(K)$ is non-emtpy and countable, more precicely $\spec(K) = \set{\lambda_{j}}_{j=1}^{\infty} \cup \set{0}$ for distinct $\lambda_{j} \in \mathbb{C}$ with $\lambda_{j} \to 0$

`\begin{proof}`
We know from Lemma 8.4 that $\spec K \subset \overline{B_{R}(0)}$ with $R = \norm{K}$. This means we need to prove that if $\spec K$ is infinite it is countable with the only accumulation point being $0$

The Idea here is to consider $\overline{B_{R}(0)}$ and create layers $A_{i}$ like an Onion in the following way:

$$$\begin{align*}
A_{1} &= \set{\lambda \in \mathbb{C} \mid |\lambda| \geq 1}\\
A_{2} &= \set{\lambda \in \mathbb{C} \mid 1 > |\lambda| \geq \frac{1}{2}}\\
A_{i} &= \set{\lambda \in \mathbb{C} \mid \frac{1}{i-1} > |\lambda| \geq \frac{1}{i}}\\
\end{align*}$$

Then all $A_{i}$ contain finitely many $\lambda_{j} \in \spec K$ since otherwise we have an infinite sequence in a bounded Set, meaning by Bolzano-Weierstraß there exists an accumulation point , which isn't zero which contradicts Proposition 8.1.

This means that we can consider $$\mathbb{C} \setminus \set{0} = \bigcup A_i$$
and every eigenvalue lies somewhere in one of the finite $A_{i}$ thus $$\spec K \setminus \set{0} = \set{\lambda_{j}}_{j=1}^\infty$$
and by Theorem 8.1 (2) we can write$$\spec K = \set{\lambda_{j}}_{j=1}^{\infty} \cup \set{0}$$
and by construction (since we only have finitely many Values in every $A_{i}$ and $A_{i} \to 0$ ) we get the property that $\lambda_{i} \to 0$ for $i \to \infty$
`\end{proof}`

Now let us work on some examples:
Let $X = l^2$ and recall the Right-Shift Operator. We know that this Operator has no eigenvalues but also isn't compact. Consider the modified Right-Shift operator $K: X \to X$ with $$K(a_{0}, a_{1}, a_{2}, ...) = \left( 0, \frac{a_{0}}{1}, \frac{a_{1}}{2}, \frac{a_{2}}{3}, ... \right)$$
Since $K = S_{+} \circ T$ with $T(a_{0}, a_{1}, a_{2}, ...) = (1, \frac{1}{2}, \frac{1}{3}, ...)$ we can see that it is a compact operator by the following small property:
>[!info] Compactness of Compositions of Compact and Continuous Operators
>For any Banach Space $X$ and two Operators $S, T \in L(X, X)$ with $T$ being compact we can show that $S \circ T$ and $T \circ S$ are both compact.
>
>To show this simply consider a sequence $\set{x_{n}}_{n\in \mathbb{N}}$ then by compactness $\set{T(x_n)}$ has a convergent subsequence $\set{T(x_{n_{k}})}$. By continuity we get that $\set{S \circ T(x_{n_{k}})}$ is a convergent subsequence in $\set{S \circ T(x_{n})}$ 
>
>The other operation is obvious since we can set $y_{n}= S(x_{n})$ and just get another sequence in $X$ thus by compactness of $T$ we get $\set{T \circ S(x_n)}$ has a convergent subsequence.

We can now explicitly show that $K$ has no eigenvalues since, if $$K(a_{0}, a_{1}, ...) = \left(0, a_{0}, \frac{a_{1}}{2}, ...\right)=(\lambda a_{0}, \lambda a_{1}, ...)$$
Then $$\lambda = 0 \implies (a_{0}, a_{1}, ...) = 0$$
$$\lambda \neq 0 \implies (a_{0}, a_{1}, ...) = 0$$



## Important Class of Compact Operators - Self Adjoint Operators

> [!definition|*] Self-Adjoint Operators
> Let $X$ be a Hilbert Space. An Operator $T \in L(X, X)$ is called a Self-adjoint (or symmetric or hermitean) if $$\innprod{Tx}{y} = \innprod{x}{Ty}$$
> for all $x, y \in X$

^68c2fa

An example for this is
> [!example|*] Self-Adjoint in $\mathbb{R}^3$
> For $X = \mathbb{R}^{n}$ we can consider the standard scalar product $$\innprod{x}{y} = \sum\limits_{i} x_{i}y_{i} $$ and our Operator an n by n Matrix $$T = \begin{pmatrix} T_{i,j}\end{pmatrix}_{i,j \in [n]}$$ 
> In this situation we can see what being self Adjoint means, by considering the actions of $T$ on Unit Basis-Vectors.
> $$\begin{align*}
> \innprod{T e_{i}}{e_{j}} = \innprod{\begin{pmatrix} T_{1i} \\ \vdots \\ T_{ni} \end{pmatrix}}{e_{j}} = T_{ji}\\
> \innprod{T e_{i}}{e_{j}} = \innprod{e_{i}}{T e_{j}} = T_{ij} 
> \end{align*}$$
> So here Self-Adjoint Operators are exactly the symmetric operators and in infinite dimension we can see these same operators as generalisations of this


The Spectral theory for these self-adjoint operators is very nice and easy in the following way:
> [!theorem|8.2] Spectral Theory for Compact Self-Adjoint Operators
> Let $X$ be a Hilbert Space and $T \in L(X, X)$ be compact and self-adjoint, then
> 1. There exists finitely or countably many Eigenvalues $\lambda_{i} \in \mathbb{R} \setminus \set{0}$ and corresponding normalised eigenvectors $e_{i}$ such that:
> 	1. $X = \ker T \oplus \overline{\span \set{e_{1}, e_{2}, ...}}$
> 	2. $Tx = \sum\limits_{j \geq 1} \lambda_{j} \innprod{x}{e_j}e_{j}$
> 2. If $X$ is separable there exists an ON Basis of $X$ consisting of Eigenvectors of $T$

^aacb21

To Prove this we need the following
> [!proposition|8.2] Basic Properties of EV of Self-Adjoints
> Let $X$ be Hilbert and $T \in L(X, X)$ self-adjoint, then
> 1. All Eigenvalues of $T$ are Real
> 
>2. Eigenvectors corresponding to different Eigenvalues are Orthogonal

`\begin{proof}`
#### For (1)
Let $Tx = \lambda x$ with $\norm{x} = 1$ then $$\lambda = \lambda \innprod{x}{x} = \innprod{\lambda x}{x} = \innprod{Tx}{x} = \innprod{x}{Tx} = \innprod{x}{\lambda x} = \overline{\lambda} \innprod{x}{x} = \overline{\lambda}$$

#### For (2)
Consider two Eigenvectors $x, y$ such that $$\begin{align*}
Tx &= \lambda x\\
Ty &= \mu y\\
\lambda &\neq \mu
\end{align*}$$
Then $$(\lambda - \mu) \innprod{x}{y} = (\lambda - \overline{\mu}) \innprod{x}{y} = \innprod{\lambda x}{y} - \innprod{x}{\mu y} = \innprod{Tx}{y} - \innprod{x}{Ty} = 0$$
`\end{proof}`
A Key Lemma we will need the following statement about invariance of orthogonal Subsets. Specifically it is useful for Eigenspaces, since these are Invariant.
> [!lemma|8.5] Invariant Subspaces
Let $X$ be Hilbert Space and $A \in L(X, X)$ self-adjoint and $U \subset X$ an $A$-Invariant Subspace (meaning $AU \subset U$). Then $U^{\bot}$ is also $A$-Invariant.

`\begin{proof}`
Let $y \in U^{\bot}$, then we need to show that $Ay \in U^{\bot}$. For any $u \in U$ we have $$\innprod{Ay}{u} = \innprod{y}{Au} = 0$$
since $Au \in U$ thus $Ay \in U^{\bot}$

An Important example of this is $X = \mathbb{R}^2$ with the standard euclidean inner product. We can consider the Map $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ which has an Eigenvector $v = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and invariant Eigenspace $$V = \span {\begin{pmatrix} 1 \\ 0 \end{pmatrix}}$$ In this case we can see though that $V^{\bot} = \span {\begin{pmatrix} 0 \\ 1 \end{pmatrix}}$ is not invariant under $A$ since $$AV^{\bot}\ni A\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \notin V^{\bot}$$
`\end{proof}`

> [!theorem|8.3] Rayleigh-Ritz Variational Principle
> Let $X$ be a Hilbert space and $A \in L(X, X)$ a Self-Adjoint compact operator. Then both $\sup\limits_{\norm{x}=1} \innprod{Ax}{x}$ and $\inf\limits_{\norm{x}=1} \innprod{Ax}{x}$ are attained if they are non-zero and then they are both Eigenvalues of $A$

To Prove this we will Need a couple of smaller statements

> [!lemma|8.6] Characterization of Operator Norm Via Inner Product
> 
Let $X$ be a Hilbert Space and $A \in L(X, X)$ self-adjoint, then 
$$\norm{A} = \sup\limits_{\norm{x}=1} |\innprod{Ax}{x}|$$

^ced176

`\begin{proof}`
$$\begin{align*}
\norm{A} &= \sup\limits_{\norm{x}=1} \norm{Ax} = \sup\limits_{\norm{x}=1} \innprod{Ax}{\frac{Ax}{\norm{Ax}}}\\
&= \sup\limits_{\norm{x}, \norm{y}=1} \innprod{Ax}{y}\\
&= \sup\limits_{\norm{x}, \norm{y}=1} \frac{1}{4} \left(\innprod{A(x+y)}{x+y} - \innprod{A(x-y)}{x-y}\right)\\\\
&\leq \frac{1}{4} \sup\limits_{\norm{z} = 1} |\innprod{Az}{z}| \cdot \left(\norm{x+y}^{2} + \norm{x-y}^{2}\right) \\
&\leq \sup\limits_{\norm{z} = 1} |\innprod{Az}{z}|\\
&\leq \sup\limits_{\norm{z} = 1} \left( \norm{Az} \cdot \norm{z} \right)\\
&= \norm{A}
\end{align*}$$
`\end{proof}`

And we also need
> [!lemma|8.7]
> Let $X$ be a Hilbert Space, $B \in L(X, X)$ be self-adjoint, $B \geq 0$ ( $\innprod{Bx}{x} \geq 0$ ). Then 
$$\norm{Bx}^{2} \leq \norm{B} \cdot \innprod{Bx}{x}$$
>which implicitly tells us that $\innprod{Bx}{x} = 0 \implies Bx = 0$

which is given without Proof


#### Rayleigh - Ritz Proof
`\begin{proof}`
Let $\lambda = \sup\limits_{\norm{x}=1} \innprod{Ax}{x}$ which we can assume is $> 0$. Then $\lambda I - A \geq 0$, since $$\innprod{x}{(\lambda I - A)x} = \lambda \innprod{x}{x} - \innprod{Ax}{x} \geq 0$$
By Lemma 8.7 we get that  for $\norm{x} = 1$  $$\norm{(A- \lambda I)}^{2} \leq \norm{A - \lambda I} \cdot (\lambda - \innprod{Ax}{x})$$
Now let us choose a maximising sequence for $\innprod{Ax}{x}$ on $\delta \overline{B_1(0)}$ which will converge to $\lambda$. Then our above formula tells us that $$(A-\lambda I) x_{n} \to 0$$ and by the compactness of $A$ we also get that $Ax_{n}\to y \in X$ 


We now first show that $y \neq 0$.
Assume it were, then $$|\innprod{Ax_{n}}{x_{n}}| \leq \norm{Ax_{n}} \norm{x_{n}} \to 0$$ but since $|\innprod{Ax_{n}}{x_{n}}| \to \lambda$ we would get $\lambda = 0$ which cant be by  Theorem 8.1

We lastly also show that $y$ is some eigenvector of $A$.
Since $(A-\lambda I)x_{n} \to 0$ and $Ax_{n} \to y$ we get $$Ax_{n} - \lambda x_{n} \to 0$$
meaning $\lambda x_{n} \to y$. Applying our Operator to this we get
$$A \lambda x_{n} \to Ay \iff \lambda y = Ay$$
meaning $y$ is an eigenvector to the eigenvalue $\lambda$

The same holds if we pick $\lambda = \inf\limits_{\norm{x}=1} \innprod{Ax}{x}$
`\end{proof}`


We will now lastly proove Theorem 8.2 
`\begin{proof}`
We will assume without loss of generality that $T \neq 0$ since otherwise the whole theorem is trivial. Now let us define $X = \ker T \oplus (\ker T)^{\bot}$. By Lemma 8.5 we know that $(\ker T)^{\bot}$ is invariant under T, so we can consider the restriction $$T_{\mid (\ker T)^{\bot}}: (\ker T)^{\bot} \to (\ker T)^{\bot}$$
This is compact and self-adjoint.
By theorem 8.1 and the compactness of this restriction we know that there exists at most countable non-zero Eigenvalues. Via the Rayleigh - Ritz principle and the fact that $\norm{T} = \sup\limits_{\norm{x}=1} |\innprod{Tx}{x}| \implies \exists$ at least one non-zero Eigenvalue.

For every Eigenvalue $\lambda \neq 0$ we define the space $E_{\lambda} = \set{x \in X \mid Tx = \lambda x}$ which is finite dimensional. From these Eigenspaces we can construct a basis $\set{e_{1}, e_{2}, ...}$ via the union of all ON bases of all $E_\lambda$. If there are infinitely many Eigenvalues we know that they converge to 0.

Lastly we consider $V = \overline{\span \set{e_{1}, e_{2}, ....}}$ which is an invariant subspace of $T$ and $W = (V \cap \ker T) ^{\top}$. If $W \neq 0$ we get that $T_{\mid W} \neq 0$ since its orthogonal to the $\ker T$.
Via Rayleigh - Ritz we know that $T_{\mid W}$ contains a non-zero Eigenvalue, which is a contradiciton to $W$ being orthogonal to $V$. Meaning $W = 0$
`\end{proof}`

### The Best Application - Fourier Series Representation of Functions
In detail check: "[[Differential Operator and Fourier Series Representation]]"
To Summarise we have shown via the spectral theorem of self-adjoint operators using the operator $(\frac{1}{i} \frac{d}{dx})^{-1}$ which has eigenvectors $e_{k}(x) = \frac{1}{\sqrt{2\pi}}e^{ikx}$ that these Eigenvectors form an Orthonormal Basis of $L^{2}$, laying the proof for Fourier Series Representations. We dont even have to explicitly show that the $e_{k}(x) = \frac{1}{\sqrt{2\pi}}e^{ikx}$ are orthogonal, but rather we can just believe in Proposition 8.2 which tells us that the Eigenvectors of Self-Adjoint Compact operators are Orthogonal, given that they are different. 


In this example we define the following set to prove the compactness of our integral Operator.
> [!definition|*] Hölder Continuous Functions
> Let $\alpha \in (0, 1], A \subset \mathbb{R}^{n}$ compact subset, then the set of Hölder-Continuous Functions is $$C^{\alpha}(A) = \set{u \in C(A) \mid \sup\limits_{x, y \in A, x \neq y} \frac{|u(x) - u(y)|}{|x-y|^{\alpha}}< \infty}$$
> 
with the Norm 
$$\norm{u}_{\alpha} = \norm{u}_{\infty} + \sup\limits_{x, y \in A, x \neq y} \frac{|u(x) - u(y)|}{|x-y|^{\alpha}} $$

>[!info]
>A couple useful facts are that:
>- $|u(x) - u(y)| \leq \norm{u}_{\alpha} |x-y|^\alpha$
>- For $\alpha = 1$ we get the lipschitz continuous functions

A nice theorem we also need is that 
> [!theorem|8.5]
> For $\alpha \in (0,1], A \subset \mathbb{R}$ compact subspace. Bounded compact sets in $C^{\alpha}(A)$ are relatively compact subsets of $C(A)$
> 

`\begin{proof}`
Let $B$ be a bounded set in $C^{\alpha}(A)$, so $\sup_{f\in B} \norm{f}_{\alpha} = C < \infty$ we will then prove that a sequence in $B$ has uniformly convergent subsequence (where uniform convergence is just convergence in $C(A)$):

To do this we will want to first consider what values this sequence has on a dense subset of $A$. Let $D \subset A$. Then we will consider a general way to find the "Rational Points" in $A$. For $r$ bi enough we can have $A \subset [-r, r]^{n}$ and consider the dense subset $\tilde D = [-r, r]^{n} \cap \mathbb{Q}$. We can now set $D = \set{q_{1}, q_{2}, ...}$ where $q_{i}$ is the closest point to $\tilde q_{i} \in \tilde D$ in $A$ then $D$ is a countable dense subset in $A$.

For a bounded sequence $\set{f^{(v)}}_{v\in \mathbb{N}}$ in $C^{\alpha}(A)$ we can fix $q_{1} \in D$ then $\set{f^{(v)}(q_{1})}_{v\in \mathbb{N}} \subset \mathbb{K}$ is also bounded thus there exists a subsequence $\set{f^{v_{1}^{(i)}}}_{i\in \mathbb{N}}$ such that $f^{v_{1}^{(i)}}(q_{1}) \to f^{*}(q_{1})$ 
which we can now iterate with $q_{2}$.

Thus by construction our sequence $\set{f^{v_{i}^{(i)}}}_{i\in \mathbb{N}}$ has the property that $$\forall q \in D: f^{v_{i}^{(i)}}(q) \to f^{*}(q)$$

We will now show that this constructed $f^{*}: D \to \mathbb{K}$ is actually continuous. Well we have $$| f^{v_{n}^{(n)}}(x) - f^{v_{n}^{(n)}}(y) | \le C |x-y|^{\alpha}$$
with $C = \sup\limits_{f\in B} \norm{f}_{\alpha}$. Then for $n \to \infty$ we get: $$|f^{*}(x) - f^{*}(y) | \le C |x-y|^{\alpha}$$ Meaning that $f^{*}$ is Hölder Cts which means it is continuous.

This meant we can uniquely extend $f^{*}$ to a map from $\overline{D} = A$


We will now show that $\norm{f^{v_{i}^{(i)}} - f^{*}}_{\infty} = \sup\limits_{x\in A} |f^{v_{i}^{(i)}}(x) - f^{*}(x)| \to 0$ via an $\frac{\epsilon}{3}$ argument. Let $\epsilon > 0$ and choose $\delta > 0: \delta^{\alpha}C \le \frac{\epsilon}{3}$. Choose $L$ so large that $$\forall x \in A: dist(\set{q_{1}, ..., q_{L}}, x) \le \frac{\epsilon}{3}$$
and also choose $N$ so large that $$\forall i \in [L], n \ge N: |f^{v_{i}^{(i)}}(x) - f^{*}(x)| \le \frac{\epsilon}{3}$$Now for a given $x \in A$, choose $q \in \set{q_{1}, ..., q_{l}}: |q-x| \le \delta$ then
$$\begin{align*}
|f^{v_{n}^{(n)}}(x) - f^{*}(x)| &\le |f^{v_{n}^{(n)}}(x) - f^{v_{n}^{(n)}}(q)|+ |f^{v_{n}^{(n)}}(q) - f^{*}(q)| + | f^{*}(q) - f^{*}(x)|\\
&\le \frac{\epsilon}{3} + \frac{\epsilon}{3} +\frac{\epsilon}{3} = \epsilon
\end{align*}$$
`\end{proof}`
>[!info] Arzela-Ascoli Theorem:
>Let $A \subset \mathbb{R}^{n}$ be compact. Then 
>$$\begin{align*}
B \subset C(A) \text{rel. compact} &\iff B \text{ bounded subset of } C(A)\\
&\iff \text{Elements of } B \text{are "equicontinuous"}
\end{align*}$$

$$$
