---
publish: true
created: 2026-02-21T23:59:40.000+01:00
modified: 2026-06-10T19:12:42.516+02:00
tags:
  - academia
---

## Quotients

In general let $I$ be the kernel of
$\K[T_{1}, \ldots, T_{n}] \mapsto \K[X]^{G}, \quad T_{i} \mapsto f_{i}$
which represents a relation between the generating invariants $f_{i}$. This gives us a so-called presentation of the [[Invariant Ring|invariant ring]]
$\K[X]^{G} \cong \faktor{\K[T_{1}, \ldots, T_{n}]}{I}$
where $I$ is the relation ideal in $\K[T_{1}, \ldots, T_{n}]$.  Set $Y := \mathcal{V}(I)$ an [[Affine Varieties|affine variety]] in $\K^{n}$, and we will obtain a morphism
$\pi: X \to Y, \quad x \mapsto (f_{1}(x), \ldots, f_{n}(x))$
which is constant on orbits. Sometimes this setup is called a “quotient”

> [!theorem|6.1] Linearly Reductive Groups have surjective Quotients
> If $G$ is linearly reductive then $\pi$ is a surjective morphism.

> [!remark|\*]
> A ring inclusion $A \subset B$ induces a morphism $\spec(B) \to \spec(A)$ which is always dominant, i.e, its image is dense. This  tells us that $\pi$ is always dominant, meaning always close to surjectivity. In the linear reductive case we get full surjectivity.

### Orbits in the Quotient Construction

> [!lemma|6.2] Technical Lemma
> Let $G$ be linearly reductive and let $X_{1}, X_{2} \subset X$ be closed and $G$-Stable, then
> $\overline{\pi(X_{1} \cap X_{2})} = \overline{\pi(X_{1})} \cap \overline{\pi(X_{2})}$

> [!theorem|6.3] Characterisation of Orbit Closures in Linearly Reductive Groups
> Let $G$ be linearly reductive and $X$ a $G$-Variety and let $x, y \in X$. Then
> $\pi(x) = \pi(y) \iff \overline{G(x)} \cap \overline{G(y)} \neq \emptyset$

Note that $\pi(x) = \pi(y)$ means that all invariants agree on these two points

> [!lemma|6.4]
> Situation as in the previous theorem. Let $X_{1} \subset X$ be closed $G$-Stable, then
> $\pi(X_{1}) \subset Y$
> is closed

> [!corollary|6.5]
> The topology on $Y$ is the quotient topology given by $\pi$. This means that
> $Z \subset Y \text{ is closed} \iff \pi^{-1}(Z) \subset X \text{ closed}$

## Categorical Quotients

> [!definition|6.6] Categorical Quotient
> Let $G$ be an algebraic group acting on a variety by a morphism $G \times X \to X$. A **categorical quotient (c.q.)** is a variety $Y$ togehter with a morphism $\pi: X \to Y$
> such that
>
> 1. $\pi$ is constant on orbits, meaning you have commutation of the action composed with $\pi$ and the projection of the product composed with $\pi$
> 2. For a variety $Z$ with a morphism $\phi: X \to Z$ that is consant on orbits  there exists exists a unique morphism $\psi: Y \to Z$ such that $\psi \circ \pi = \phi$

Going back to what we were doing before let us consider $G$ a reductive group acting on an (affine) $G$-Variety. Mumford showed that with $Y$ ($=\spec(\K[X]^{G})$) and $\pi$ as above that our construction so far is just a categorical quotient
$Y = \dfaktor{X}{G}$

> [!example|\*] Non Reductive Group Doesnt Have a Categorical Quotient
> Consider the matrix group given by
> $G = \set{\begin{pmatrix}a  & b \\ 0 & d\end{pmatrix} \midline a, b, d \in \K, ad \neq 0}$
> and an action on $X = \mathrm{GL}_{2}$ by left translation (left-multiplication). What are the orbits? Since we are acting on $X$ by a subgroup we know that the orbits must be the right-cosets and they are all closed and isomorphic.
> When we want to construct a quotient we will find as an exercise that $\K[X]^{G} = \K$ meaning that the “quotient”
> $X \to Y = \spec(\K[X]^{G}) = \set{*}$
> and thus this is constant on all orbits, but can’t seperate any orbits.
> The question now is if we can maybe do any better than this. We can infact ifwe consider projective space and $\mathrm{GL}_{2}$ acting on $\mathbb{P}^{1} = \set{[\eta: \xi] = \K(\eta, \xi) \midline \xi, \eta \in \K \text{ both non-zero}}$ by
> $\sigma[\xi:\eta] = \K \cdot ((\xi, \eta) \cdot \sigma^{-1})$
> For $\begin{pmatrix}a  & b  \\ c  &  d\end{pmatrix} \in \mathrm{GL}_{2}$ acting on the vector $[0: 1]$ is  $c = 0$ and thus the fixed group of that vector is our original group $G$. So for t $\sigma, \tau \in \mathrm{GL}_{2}$ we get that
> $(0: 1) \sigma = (0:1)\tau \iff (0:1) \sigma \tau^{-1} = (0:1) \iff \sigma \tau^{-1} \in G \iff G \sigma = G \tau$
> meaning that the cosets match in structure. Now consider a map
> $\pi: X = \mathrm{GL}_{2} \to \mathbb{P}^{1}, \quad \begin{pmatrix}a  & b  \\ c  &  d\end{pmatrix} \mapsto (0:1) \begin{pmatrix}a  & b  \\ c  &  d\end{pmatrix}$
> So the fibres of $\pi$ are the $G$-Orbits. It turns out that $\mathbb{P}^{1} = \dfaktor{X}{G}$ (which is a theorem of linear algebraic groups). Showing us that the categorical quotient of a non reductive group is actually projective

> [!example|\*] There doesnt have to exist a Categorical Quotient
> $\mathbb{G}_{a}$ acts on $V = \mathbb{K}^{2 \times 2}$ by
> $a(A) = \begin{pmatrix}1 & a \\ 0 & 1\end{pmatrix}A$
> From Exercise 28 we get the fact that $\K[V]^{G} = \K[x_{21}, x_{22}, \det]$ where $x_{ij}$ represents entries in our matrix. We obtain a map $\pi: V \to Y = \K^{3}, \quad A \mapsto(A_{21}, A_{22}, \det(A))$
> In exercise 29 we will show that $\pi$ is not a categorical qutotient since it fails to be surjective.
> One can also show that given this action there exists no categorical quotient in the category of varieties. But to show this we require a big gun, namely “Zariskis Main Theorem”.

> [!example|\*] Action on a non-Affine Variety
> Let $G = \mathbb{G}_{m}$  acts on $X = \K^{2} \setminus \set{\begin{pmatrix}0\\0\end{pmatrix}}$ which is a simple quasi-affine variety by
> $a \begin{pmatrix}\xi \\ \eta\end{pmatrix} = \begin{pmatrix}a \xi \\ a^{-1} \eta\end{pmatrix}$
> From Exercise 4 we got that $\K[V]^{G} = \K[xy]$ with $V = \K^{2}$. Now we have to trust that
> $\K[X] = \K[V] \implies \K[X]^{G}= \K[xy]$
> Now consider the projection
> $\pi: X \to \K, \begin{pmatrix}\xi \\ \eta\end{pmatrix} \mapsto\xi \cdot\eta$
> The orbits are $\xi \eta = a \neq 0$ and $x = 0, y \neq 0$ and $y = 0, x \neq 0$. They are all closed and $1$-dimensional, so we would expect to get good orbit seperation. We dont though since
> $\pi^{-1}(0) = \set{(x, y) \midline y = 0, x \neq 0} \cap \set{(x, y) \midline x = 0, y \neq 0}$
> Now consider $X_{1} = \set{(x, y) \in \K^{2}, y \neq0} \subset X$. Then this makes it affine since
> $X_{1} \cong \set{\begin{pmatrix}\xi\\\eta\\ \beta\end{pmatrix} \in \K^{3} \midline \eta \beta - 1 = 0}$
> This gives us that $\K[X_{1}] = \K[K, y, y^{-1}]$, calculating out we get
> $\K[X_{1}]^{G} = \K[xy]$
> Mumfords Theorem now tells us that here we do have a categorical quotient given by the same map as before
> $\pi_{1}: X_{1} \to \K, \begin{pmatrix}\xi \\ \eta\end{pmatrix} \mapsto\xi \cdot\eta$
> With the analog construction for $X_{2} = \set{(x, y) \in \K^{2}, x \neq0}$ we also get a categorical quotient $\pi_{2}$ and interestingly $X = X_{1} \cup X_{2}$
> Viewing this in the Scheme theoretic setting we can see that our two maps can be glued together
> $\pi_{i} : X_{i} \to \mathbb{A}^{1}$
> Since $\pi_{1}(X_{1} \cap X_{2}) = \pi_{2}(X_{1} \cap X_{2})$ they agree on their intersection we can glue them togehter via the scheme structure. Note that $\im \at{\pi}{X_{1} \cap X_{2}} = \mathbb{A}^{1} \setminus \set{0}$.
> Glueing we can glue $\mathbb{A}^{1}$ to $\mathbb{A}^{1}$ along $\mathbb{A}^{1} \setminus \set{0}$ (using the identity). From the obtain the line with double zero $\tilde{Y}$
> Now our projection is given by
> $\tilde{\pi}:X \to \tilde{Y}$
> This gives a categorical quotient in the category of schemes

### Geometric Quotients in General

> [!definition|6.8] Geometric Quotient
> Let $G$ be an algebraic group acting morphically on a variety $X$. A varitey $Y$ togehter with a morphism $\pi: X \to Y$ is called a geometric quotient if
>
> 1. The fibers of $\pi$ are $G$-Orbits (this is equivalent to stating that fibres Orbits and that it is constant on orbits)
> 2. $\pi$ is surjective and an open map
> 3. For every open subset $U \subset Y$ the map $\pi_{U}^{*}: \K[U] \to \K[\pi^{-1}(U)]$ has the image $\K[\pi^{-1}(U)]^{G}$

> [!proposition|6.9] Simplicity of Third Condition of Geometric Quotients
> Let $G$ be an algebraic group and $X$ be irreducible (affine) $G$-Variety and $\K[X]^{G} = \K[f_{1}, \ldots, f_{m}]$. Set $Y = \mathcal{V}(I) \subset \K^{m}$ with $I$ the relation ideal. Then
> $\pi: X \to Y$
> defined in the begginning of the chapter satisfies the third condition of the previous definition

> [!corollary|6.10]
> Let $G$ be a reductive group and $X$ an irreducible $G$-Variety. Then $\pi: X \to \dfaktor{X}{G}$ is a geometric quotient if and only if all orbits are closed.

> [!example|\*]
> Consider the trivial group $G = \set{id}$ and $X = \A^{1}$ and $Y = \A^{1}$. We can then define
> $\pi: \A^{1} \to \A^{1}, \quad \xi \mapsto \xi^{p}$
> where $p = \mathrm{char}(\K) \neq 0$ then we can see that $\pi$ is a open and closed bijective map whose fibers are orbits. This gives us that the first and second condition are satisfied.
> If we want to understand the third condition in this case consider $U = X$ which is open, then
> $\pi^{*}: \K[x] \to \K[x], \quad x \mapsto x^{p}$
> as $\K[U] = \K[X] = \K[Y] \cong \K[x]$.
> We can see though that $\im(\pi^{*}) = \K[x^{p}] \neq \K[x] = \K[X]^{G}$ and thus $3.$ does not hold.
> The finite characteristic assumtion is not necessary here as we can construct a very similar example in infinite characteristic.

> [!theorem|6.12] Mumford
> A geometric quotient is a categorical quotient.
