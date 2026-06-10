---
publish: true
created: 2023-11-30T10:23:37.000+01:00
modified: 2026-06-10T19:12:40.787+02:00
tags:
  - academia
---

Prev: [[§6 Invertibility; Notion of Spectra]]
Next: [[§8 Spectral Theory of Compact Operators]]

---

_Goal_: Study "large" (in the operator norm) perturbations of operators, but limit their size for "most" directions in the $\infty$ dimensional Operator Space

_Main Idea_: don't study directly injectivity & surjectivity but rather construct an analog to the rank nullity theorem from linear algebra.

> [!info]
> Recall the Rank Nullity Theorem which states for $A \in \mathbb{K}^{n\times n}$ that $\dim\ker A = n - \dim\im A$
>
> In infinite dimensions this theorem is wrong but the difference $\dim\ker A - (n - \dim\im A)$ is remarkably stable under perturbations informally we call this difference the _index_ of an operator and describe it as measuring how much the rank nullity theorem fails.

---

## Definition of the Index

We will first revise concepts from linear algebra:

> [!definition|\*] Quotient Space
> For Vector Space $V$ and $U$ Subspace of $V$ we define
>
> - $[v] = \set{v + u \mid u \in U}$ is the equivalence class of $v \in V$ modulo $U$
> - $V/U = \set{ [v] \mid v \in V}$ is the set of equivalence classes
>    
>   Endowing the set of equivalence classes with the natural addition and scalar multiplication we call $V/U$ a quotient space.

> [!definition|\*] Complement of a Subspace
>  
> Let $W$ be a subspace of $V$. We call $W$ a complement of a subspace $U$ if
> $\forall v \in V \exists ! u\in U, w \in W: v = u + w$

> [!info]
>
> - We have seen this concept before in the Orthogonal Complement in Hilbert Spaces
> - If $W$ is a complement of $U$ then $W \cong V/U$, which we can interpret as the complement parameterizing the equivalence classes of $V/U$

> [!example] Complementary Spaces that aren't Orthogonal
> An example Emphasising the generalisation of the orthogonal complements is $X = \mathbb{R}^3$ and $U = \set{ \begin{pmatrix}x_{1} \\ x_2 \\ 0\end{pmatrix} \in \mathbb{R}^{3}  \mid x_{1}, x_{2} \in \mathbb{R}}$ then take $W = \span(\begin{pmatrix}1 \\ 1 \\ 1\end{pmatrix})$ then we can deconstruct any point $\begin{pmatrix}a \\ b \\ c\end{pmatrix}$ into $\begin{pmatrix}a \\ b \\ c\end{pmatrix} = \begin{pmatrix}a-c \\ b-c \\ 0\end{pmatrix} + c\begin{pmatrix}1 \\ 1 \\ 1\end{pmatrix}$

> [!definition|\*] Kernal and Cokernal
>
> Let $T: X \to Y$ be a linear operator between vector spaces then we define:
>
> - $\ker(T) = \set{x \in X \mid Tx = 0}$ the Kernel of $T$
> - $\coker (T) =  Y/\im(T)$ the Cokernal of $T$

^a4931b

> [!info]
> If $\dim Y < \infty \implies \dim\coker T = \dim Y - \dim \im T$

> [!definition|\*] Fredholm Operators
> For $X, Y$ Banach Spaces and $T \in L(X, Y)$. $T$ is called Fredholm operator if
>
> 1. $\dim\ker T < \infty$
> 2. $\dim\coker T < \infty$
>
> The number $\dim\ker T - \dim\coker T = \ind(T) \in \mathbb{Z}$ is called the Index (or Fredholm Index) of $T$. The set of Fredholm Operators is denoted $\mathcal{F}(X, Y) \subset L(X, Y)$

> [!info]
> The index measures the failure of the rank-nullity theorem; Where $\ind(T) = 0$ if $\dim(X), \dim(Y) <\infty$

We will want to show a nice set of properties of Fredholm Operators and use that theory to speak about the invertibility of an Operator.

---

## Main Theorem

### Prep for Index Theory Proof

To prove the main theorem of Index Theory we will have to show some Lemmas used in the proof of it.

> [!lemma|\*] Norm on Quotient Space
> Let $X$ be Banach Space and $U$ closed subspace. Then
>
> 1. $\norm{[x]} = \inf_{u\in U} \norm{x + u}$ is a norm on $X/U$
> 2. $X/U$ with this norm is Banach

`\begin{proof}`

#### Proof of (1)

- Homogeneity is given by considering $\lambda \in \mathbb{K}, x\in X, \lambda \neq 0$ then $\begin{align*}
  \norm{\lambda [x]} &= \norm{[\lambda x]} = \inf_{u \in U} \norm{\lambda x + u}_X\\
  &= \lambda \norm{x + u}_{X}\\
  &= |\lambda| \norm{[x]}
  \end{align*}$
- Positivity is proven by using the fact that $U$ is closed, meaning we have to show that $\norm{[x]} = 0 \iff [x] = [0]$. Which we will show as follows $\begin{align*}
  0 &= \norm{[x]} = \inf_{u \in U} \norm{x + u} \overset{u = -u'} = \inf_{u' \in U} \norm{x - u}
  \end{align*}$ This is just a different way to express the convergence of a sequence. Meaning there exists $(u')_{n \in \mathbb{N}}$ with $u' \to x$ inside $U$. Since $U$ is closed we know that $x \in U$ which is equivalent to saying $[x] = [0]$
- Proving the Triangle innequality, let $x, y \in X$ then

$$$\begin{align*}
\norm{ [x] + [y]} &= \norm{[x + y]} = \inf_{u \in U} \norm{x + y +u}\\
&= \inf_{u, u'\in U} \norm{u + u + y + u'}\\
&\le \norm{[x]} + \norm{[y]}
\end{align*}$$
#### Proof of (2)
In order to prove that our space is complete we will be wanting to show that every Cauchy Sequence $([x_{i}]) \in X/U$  is convergent. We will not be showing this directly but rather show that every cauchy sequence has a convergent subsequence, which implies that it converges by Analysis 1

Consider for a given Cauchy Sequence $([x_{i}])_{i \in \mathbb{N}}$ a subsecueance $([x_{n_{k}}])_{k \in \mathbb{N}}$ such that $$\begin{align*}
\norm{[x_{n_{k}}] - [x_{n_{k+1}}]} \le \frac{1}{2^{k}} && \forall k \in \mathbb{N}
\end{align*}$$
We now choose $y_{k} \in [x_{n_{k}}]$ such that $$\norm{y_{k+1} - y_{k}} \le 2\norm{[x_{n_{k}}] - [x_{n_{k+1}}]}$$
Which gives us $\norm{y_{k+1} - y_{k}} \le \frac{1}{2^{k-1}}$ which is a cauchy in $X$ meaning it converges to $y \in X$. Since our Projection $x \to [x]$ is obviously continuous we get that $[x_{n_{k}}]= [y_{k}] \to [y]$ 

`\end{proof}`


Some more Facts that we will need in the Proof of the Main Theorem:

> [!corollary|7.1]
> In $L(X, Y)$, with $X = Y = l^2$ there exists an open set of non-invertible operators. In particular the set of invertible operators is not dense in $L(X, Y)$

>[!info]
>This is **NOT** the case in $L(\mathbb{K}^{n}, \mathbb{K}^{n})$ there doesn't exists an open set of non invertible operators, since they lie on the surface of $det(A) = 0$ 

> [!lemma|7.2]
> $X, Y$ Banach and $T \in L(X, Y)$ then $\dim \coker T < \infty \implies \im T$ closed 

> [!lemma|7.3]
> $X$ Banach and $U$ finite-dimensional subspace of $X$ then there exists a closed Subspace $V$ such that $X = U \oplus V$ 

^2a654d


---
### Main Theorem and Proof
> [!theorem|*] Index Theory
> Let $X, Y$ be Banach Spaces then the following holds:
> 1. The Set of Fredholm Operators is an open Set, meaning $\forall T \in \mathcal{F}(X, Y) \exists \delta > 0$: $$T \in \mathcal{F}(X, Y), S\in L(X, Y), \norm{T-S} < \delta \implies S \in \mathcal{F}$$
> 2. The index $\ind: \mathcal{F}(X, Y) \to \mathbb{Z}$ is locally constant, meaning $\forall T \in \mathcal{F}(X, Y) \exists \delta > 0:$ $$\begin{align*}
\ind T = \ind S && \forall S \in L(X, Y) \text{ with } \norm{T-S} < \delta
\end{align*}$$
>3. The index $\ind: (\mathcal{F}(X, X), \circ) \to (\mathbb{Z}, +)$ is a semi-group homomorphism (with the given operation in $\mathcal{F}(X, X)$ being composition). Meaning 
$$\ind T\circ S = \ind T + \ind S$$

^07b243

`\begin{proof}`
The Idea for this proof is to "make $T$ invertible" and use that invertibility which is preserved under small perturbations.
We will also denote $X = U \oplus V$ if $V$ is a complement of $U$.

#### Step 1. Decompose $X$
$\dim \ker T < \infty \implies$ there exists closed subspace $V$ with $X = V \oplus \ker T$ (by [[#^2a654d]])

#### Step 2. Decompose Y
Consider that $\dim \coker T < \infty$. We then know that for $y \in Y$ we can write $[y] \in \coker T$ as $[y] = \sum\limits_{i=1}^{n} \alpha_{i} [y_i]$ with $[y_{i}]$ the basis vectors of $\coker T$ . We can now decompose our $y$ with $$y = \left( y - \sum\limits_{i} \alpha_{i} y_{i} \right) + \sum\limits_{i} \alpha_{i} y_{i}$$
Where $\left( y - \sum\limits_{i} \alpha_{i} y_{i} \right) \in \im T$ since $\left[ y - \sum\limits_{i} \alpha_{i} y_{i} \right] = [y_{i}] - \sum\limits_{i} \alpha_{i} [y_{i}] = 0$ and we define $W = \span \set{y_{1}, y_{2}, ..., y_{n}}$ so $\sum\limits_{i} \alpha_{i} y_{i} \in W$ 
This means we have decomposed $Y$ into $Y = W \oplus \im T$. (The uniqueness is obvious but provable).

#### Step 3. "Manufacture" an invertible operator from $T$
Define $\tilde T: V \times W \to Y$ where $(v, w) \to y = Tv + w$ with $Tv \in \im T$ and $w \in W$. Then this is obviously bijective since:
- Injective: Assume $(v, w) \in V \times W \setminus (0, 0)$ exists with $\tilde T (v, w) = 0$ then $$\tilde T (v, w) = 0 \implies Tv + w = 0 \implies Tv = -w \implies T(-v) = w$$ but this is equivalent to $w \in \im T$ which it can't be by definition
- Surjective: Let $y \in Y$ be arbitrary then by our decompositions we get $$\begin{align*}
y &= a+w && a \in \im T, w \in W\\
\implies a &= Tx && x \in X\\
\implies a &= T(v + b) = Tv + Tb = Tv && v \in V, b \in \ker T\\
\implies y &= Tv + w = \tilde T(v, w)
\end{align*}$$

#### Step 4. Perturbation Argument
Now let $S \in L(X, Y)$ then the auxiliary operator $\tilde S$ as defined above is invertible if $\norm{\tilde S - \tilde T}$ is small enough. This is equivalent to $$\begin{align*}
(\tilde S - \tilde T)(v, w) = (Sv + w) - (Tv + w) &= Sv - Tv = (S-T)v\\
\norm{\tilde S - \tilde T} = \norm{S - T}
\end{align*}$$Thus $\tilde S$ is invertible $\iff$ $\norm{S -T}$ is small.

#### Check (using bijective of $\tilde S$) that $S$ Fredholm & $\ind S = \ind T$
First we will be showing that $S$ is Fredholm given that $\tilde S$ is invertible.
Consider the restriction of $S\mid_{V}$ we can see that$$\begin{align*}
S\mid_{V} &= \tilde S\mid_ {V \times \set{0}}
\end{align*}$$
but this means that $S \mid_{V}$ is injective since $\tilde S$ is. This means that $$\begin{align*}
(\ker S) \cap V &= \set{0}\\
\implies \ker S &\subseteq \ker T &&\text{ since } X = V \oplus \ker T\\
\implies \dim \ker S &\le \dim \ker T
\end{align*}$$
Now we choose a complement Space $Z$ of $\ker S$ in $\ker T$ (which works again by [[#^2a654d]]) which means we get the deconstruction $$X = \ker T \oplus V = \ker S \oplus Z \oplus V$$
We can now also find a decomposition of $Y$ involving the Range of $S$ by considering that $\tilde S$ is surjective meaning $\forall y \in Y \exists (v, w) \in V \times W: \tilde Sv + w =S(v, w) = y$. This gives us $$y = W \oplus \im S\mid_{V}$$
This implies that $\dim \coker S \le \dim \coker T < \infty$ which means that $S$ is Fredholm.


Now to prove the index is constant. We can assume that $S$ is Fredholm so $$\begin{align*}
Y &= W' \oplus \im S\\
&= W' \oplus \im S \mid_{Z \oplus V}\\
&= W' \oplus \im S \mid_{Z} \oplus \im S \mid_{V}
\end{align*}$$
Then we have the following Formula: $$\begin{align*}
\dim \ker T &= \dim \ker S + \dim Z\\
\dim \coker T &= \dim W = \dim W' + \dim \im S\mid_{Z} \\
\implies \dim \ker T - \dim \coker T &= \dim \ker S + \dim Z - \dim \coker S - \dim Z\\
\implies \dim \ker T - \dim \coker T &= \dim \ker S- \dim \coker S\\
\implies \ind T &= \ind S
\end{align*}$$
`\end{proof}`

### Examples of Index Theory
> [!example|1]
> $X = Y = l^2$ with the operator $A_{t}(a_{1}, a_{2}, ...) = (t a_{1}, a_{2}, ...)$ with $t\in \mathbb{R}$ then we can observe
> 1. $t \neq 0$ gives us $A$ being invertible by $A_{\frac{1}{t}}$ then $\dim\ker A_{t} = \dim\coker A_{t} \implies \ind A_{t} = 0 - 0 = 0$
> 2. $t = 0$ gives us a non-invertible $A_{0}$ with $\dim\ker A_{0} = 1$ and $\coker A_{0} = l^{2}/{\im A_{0}}$ since $\im A_{0} = \set{(b_{1}, b_{2}, b_{3}) \in l^{2} \mid b_{1} = 0}$ we know that $\dim\coker A_{0} = 1$ so lastly $$\ind A_{0} = 1 - 1 = 0$$

> [!example|2]
> $X = Y = l^{2}$ and consider the right shift $S^{+}$ then we have
> - $\dim\ker S^{+} = 0$
> - Since $\im S^{+} = \set{b \in l^{2} \mid b_{1} = 0}$ we have $Coker(S^{+}) = l^{2}/\im S^{+}\cong \span(\set{1, 0, ...})$ we get $\dim\coker S^{+} = 1$
> - $\ind S^{+} = -1$
> 
> If we instead take the left shift $S_{-}$ we get in the same manner:
> - $\dim\ker S_{-} = 1$
> - $\dim\im S_{-} = 0$
> - $\ind S_{-} = 1$
> 
> If we now compose the shifts with themselves we get$$\begin{align*}
> \ind (S^{+})^{n} &= \sum\limits_{i=1}^{n} \ind(S^{+}) = -n\\
> \ind (S_{-})^{n} &= \sum\limits_{i=1}^{n} \ind(S_{-}) = n
> \end{align*}$$
Meaning the composition of Shifts can give us any index we like


---

## Compact Perturbations

Some basic definitions that we might already know are
> [!definition|*] Compactness
> Let $X$ be Banach and $A \subset X$ is called <u>compact</u> if
> - every sequence $\set{x_{j}}$ in $A$ has an accumulation point in $A$
> 
> or equivalently
> - every open cover of $A$ has a finite subcover
> $A$ is called <u>relatively compact</u> if $\bar A$ is compact

^255964

> [!definition|*] Compact Linear Operators
> For Banach Spaces $X, Y$ a linear map $T \in L(X, Y)$ is called <u>compact</u> if
> - for every bounded sequence $\set{x_{n}}$ in $X$ there exists a convergent subsequence of $Tx_{n}$ in $Y$
> 
> or equivalently
> - $T$ maps bounded sets to relatively compact sets

---

An interesting connection to our Fredholm Operators is
> [!theorem|7.2] Fredholm and Perturbation
> For $X, Y$ Banach spaces the following hold:
> 1. $T \in \mathcal{F}(X, Y)$, $K \in L(X, Y)$, $K$ compact $\implies$ $T-K \in \mathcal{F}(X, Y)$ and $\ind (T-K) = \ind T$
> 2. In particular $T \in L(X, Y)$ invertible, $K\in L(X, Y)$ compact $\implies$ $T-K \in \mathcal{F}(X, Y)$ and $\ind(T-K) = 0$

^42915f

We effectively loose the condition that only Operators "near" $T \in \mathcal{F}(X, Y)$ can be considered and replace it by any compact map.
Some examples of compact operators might be useful here, to see where this more global perturbation argument can be made.

> [!example|1] Finite Dimensional Case
> $X = \mathbb{K}^{n}, Y = \mathbb{K}^{m}$ and $A \in L(X, Y)$ then $A$ is compact. A Corollary can be seen when $n = m$ then $\ind A = 0$ corresponds to the rank nullity theorem, since $$A = I - (I-K) \implies \ind A = 0$$

> [!example|2] Simple Non-Compact Operator
> $X = Y = l^{2}$ then consider $T = Id$ then $T$ is not compact since $I(B_{1}(0)) = B_{1}(0)$ which isn't relatively compact but bounded. 

> [!example|3] Characterization of Compactness
> $X = Y = l^{2}$ then consider $T(e_{i)}= t_{i}$ with $(t_{i})_{i\in \mathbb{N}}$ a bounded sequence gives us a valid operator in $L(l^{2}, l^{2})$. In this case we have $$T \text{ compact} \iff \lim_{n \to \infty} t_{n} = 0$$
> Which will be proven using a proposition on the next exercise sheet.
$$$
