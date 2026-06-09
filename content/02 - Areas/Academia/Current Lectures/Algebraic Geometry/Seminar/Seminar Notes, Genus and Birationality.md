---
publish: true
created: 2026-05-14T09:50:50.604+02:00
modified: 2026-06-06T15:29:31.934+02:00
tags:
  - garden
---

- Main Goal: Consider in what way we can consider two curves to be equivalent via birational morphisms as specific types of morphisms.

### Motivation Behind Rational Maps

Morphisms are a very rigid concept as we can prove that if two morphisms agree on an open set that they must agree everywhere.

> [!lemma|\*] Morphism Identity Theorem
> For two reduced and irreducible Varieties $X, Y$ and $\phi, \psi: X \to Y$ with some $U \subset X$ open such that $\at{\phi}{U} = \at{\psi}{U}$ then
> $\phi = \psi$

- This structure mirror complex analysis, namely the identity theorem which says the same thing about connected domains and holomorphic functions.
- There we get to the realisation that due to the identity theorem it might be interesting to consider meromorphic, meaning maps not defined on the entire space

### Rational Maps and Birational Equiavalence

- A similar thought can be done in the case of Morphisms and we can consider tuples $(\phi_{U}, U)$ where $U$ is a closed set in $X$ and $\phi_{U}: U \to Y$. We know that if two tuples are defined on a common set (meaning their sets intersect) and they agree there than we should consider them to be the same map which leads to an equivalence relation and our first central definition

> [!definition|\*] Rational Maps
> Given two varieties $X, Y$ a rational map $\phi: X \dashrightarrow Y$ is an equivalence class of pairs $(U, \phi_{U})$ where $U$ is a non-empty open subset of $X$ and $\phi_U: U \to Y$ is a morphism. The equivalence is given by
> $(U, \phi_{U}) \sim (V, \phi_{V}) \iff \exists W \subset U \cap V: \at{\phi_{U}}{W} = \at{\phi_{V}}{W}$
> Additionally we call a rational map dominant if for some representative $(U, \phi_U)$ we have that $\overline{\phi_U (U)} = Y$

- We should keep in mind here that the rational maps are not maps of sets but rather a family of equivalence classes. Also all morphisms that we know so far are also Rational maps.
- A good example is a maps some students see in a Commutative Algebra Course, namely the morphism $f: \mathbb{A}^1 \setminus \set{0} \to \mathcal{V}(xy -1), \quad t \mapsto \frac{1}{t}$
  - This melds both the motivation and intuition we have so far since also in the complex plane this is one of the first interesting maps we would consider as a meromorphic function. Here it serves the purpose of almost mapping all of $\mathbb{A}^1$ to the hyperbola.
  - Interesting properties of this specific example are that it is surjective, meaning more importantly that it is a dominant rational map. Another property is that we can find a rational map, in fact even a morphism that goes in the other direction, but isnt surjective, namely $f^{-1}: a \mapsto \frac{1}{a}$

> [!definition|\*] Birationally Equivalent
> A birational map $\phi: X \dashrightarrow Y$ is a rational map which admits an inverse rational map. If between two varieties there exists a birational map we call these birationally equivalent. This is denoted by $X \sim_{\mathrm{bir}} Y$

- This should really be though of (and we will see this formally later) as two varities being the same up to closed subsets. In fact we can state that this will be equivalent to them having isomorphic open subsets.

> [!example|\*] Birationall Equivalences
>
> - We already have seen that $\mathbb{A}^1 \sim_{\mathrm{bir}}\mathcal{V}(xy -1)$
> - Gaining some inspiration from another well-known map that only leaves out a point we can consider the sphere and stereographic projection. Here we consider explicitly $\mathcal{V}(x^2+y^2-1)$ and note that a natural morphism is given by $f: \mathbb{A}^{1} \setminus \set{0} \to \mathcal{V}(x^2+y^2-1), \quad t \mapsto \left( \frac{1-t^2}{1 + t^2}, \frac{2t}{1 + t^2}\right)$ In the end this also has a natural inverse as seen by the construction or the explicit map $\phi(x,y) = \frac{y}{x +1}$

Having been introduced to this concept it might be useful to mention that even though the idea of equivalence can be seen geometrically the reason to follow this path has not yet been truly justified. As part of classical algebraic geometry many people have

### The Algebraic Viewpoint

As we have seen, finding Rational maps between given varieties can be difficult. Also if we aim to find the entire class of birationally equivalent varieties in a systematic way it seems futile to simply consider the geometric point of view. We can, with a central theorem translate the property of birational equivalence to a purely algebraic question, which simplifies matters.

> [!theorem|\*] Correspondence of Rational Maps and Algebra Embeddings
> Given two irreducible varieties $X, Y$ and $k(X), k(Y)$ their field of rational functions there exists a bijection
> $\left\{ \underset{\text{ dominant rational maps}}{f:X \dashrightarrow Y} \right\} \longleftrightarrow \left\{ \underset{\text{ k-algebra embedding}}{\phi: k(Y) \hookrightarrow k(X)}\right\}$

`\begin{proof}`
Let $\phi: X \dashrightarrow Y$ be a dominant rational map, represented by $(U, \phi_{U})$. Let $f \in k(Y)$ be a rational function, represented by $(V, f)$ where $V$ is an open set in $Y$, and $f$ is a regulöar function on $V$. Since $\phi_{U}(U)$ is dense in $Y$ we know that $V \cap \phi_{U}(U)$ is a non-empty open set and thus $\phi_{U}^{-1}(V)$ is open in $X$. Now define
$f^*: \phi_{U}^{-1}(V) \to k, \quad f^* = f \circ \phi_{U}$
\==This operation is well-defined since for another representant $(V', g)$ we know that $V' \cap V$ is open and thus also intersects $\phi_{U}(U)$ and by the same logic we get that
$[(\phi_{U}^{-1}(V), f^*)] = [(\phi_{U}^{-1}(V'), g^*)]$
thus giving us a $k$-algebra embedding. The injectivity of this map is given by considering $f \in k(Y)$ such that $k(X) \ni f^* = 0$. Then on some open subset $U \subset X$ we have that
$f \circ \phi_{U} = 0$
Since $\phi_{U}(U)$ is dense it would mean that $f = 0$ on a dense open subset of $Y$. This can only be if $f = 0$.==

For the other direction let $\theta: k(Y) \to k(X)$ be a homomorphism of $k$-algebras. Since $Y$ is covered by affine varieties we may assume that $Y$ is affine. Let $k[Y]$ be the affine coordinate ring and let $y_{1}, \ldots, y_{n}$ be generators for $k[Y]$ as a $k$-Algebra. Then we know that $\theta(y_{i})$ are rational functions on $X$ and we can find a $U \subset X$ they are all regular functions on $U$. Restricting to this gives us that
$\theta: k[Y] \to k[U]$
is an injective homomorphism, meaning we get an induced dominant morphism
$\phi_{U}: U \to Y$
which is one representant for the rational map $\phi: X \dashrightarrow Y$
`\end{proof}`

From this we can see that a simple corollary leads us to a useful characterization of birational equivalence

> [!corollary|\*] Birational Equivalence is the Equivalence of Rational Functions
> For any two varieties $X, Y$ the following is equivalent
>
> - $X \sim_{\mathrm{bir}} Y$
> - There are open subsets $U \subset X$ and $V \subset Y$ with $U \cong V$
> - $k(X) \cong k(Y)$ as $k$-Algebras

This already reveals a way in which studying birational equivalence classes might be possible, since they correspond to isomorphism classes of $k$-Algebras and are thus now in the world of field theory.

Now we introduce some simple vocabulary to describe objects in the simplest birational equivalence class

> [!definition|\*] Rational Varieties
> We call a variety $X$ of dimension $n$ rational if
> $X \sim_{\mathrm{bir}} \mathbb{P}^n$

### Birational Embedding Theorem

A first step in understanding the birational equivalence classes of general varieties is given by recalling facts from field theory.

> [!proposition|\*]
> Any variety $X$ of dimension $r$ is birational to a hypersurface $Y$ in $\mathbb{P}^{r+1}$

`\begin{proof}`
A rough sketch of the proof is given

- The function field $K = k(X)$ is a finitely generated extension field of $k$
- Via Field Theory we can find a transcendence base $x_{1}, \ldots, x_{r} \in K$ such that $K$ is finite separable extension of $k(x_{1}, \ldots, x_{r})$
- By the **Theorem of the Primitive Element** we can find $y \in K$ such that $K = k(x_{1}, \ldots, x_{r}, y)$
- Since $y$ is algebraic over $k(x_{1},\ldots, x_{r})$ it satisfies some polynomial equation with coefficients which are rational functions in $x_{1}, \ldots, x_{r}$
- Clearing denominators we get an irreducible polynomial, which defines a hypersurface in $\mathbb{A}^{r+1}$ with function field $K$, meaning that it is birational to $X$
  `\end{proof}`

## Genus as a Tool for Identifying Birational Classes

We now want to go to one of the first truly useful invariants of the birational classificaiton problem. To this end I will introduce two related birational invariants one of which has geometric information and the other of which is computationally more applicable. The connection between is then emphasized in the nice case of smooth projective curves.

### The Geometric Picture

For compact orientable surfaces we can consider a number called the genus. It counts the number of handles:

- Sphere: Genus 0
- Torus: Genus 1
- Double Torus: Genus 2

In differential geometry, this information is encoded cohomologically by
$g = \frac{1}{2} \dim H_{dR}^{1}(M)$
Smooth projective curve over $\C$ behave analogously to compact orientable surfaces. Algbraic geometry replaces smooth differential forms by algebraic differential forms and defines the geometric genus by
$p_{g}(X) = \dim H^{0}(X, \omega_{X})$

The important fact for us is that these differential forms are preserved under birational equivalence, giving:
$X \sim_{bir} Y \implies p_{g}(X) = p_{g}(Y)$

### Algebraic Genus

We now consider a different object which will in an even more deep way be a birational invariant and in a special case will be the same as the geometric genus, but in general will be a little more computable. For this we go back to the theory of graded rings.

> [!definition|\*] Reminder: Hilbert Polynomial and Function
> Given a projective variety $X$ with homogeneous coordinate ring $k[X]$ we define the function given by the dimensions of the graded components of the coordinate ring as the Hilbert function
> $\phi_X(l) = \dim_k k[X]_l$
> By a theorem of Hilbert and Serre we know that this function may differ from a polynomial for small values, meaning there exists a polynomial $P_X$ of degree $\dim X$ such that for some value $s \gg 0$ we have
> $P_X(l) = \phi_X(l) \quad \forall l > s$

- The intuition behind this is that the hilbert function measures how fast a the different gradations of the coordinate ring grow.
- This growth happens in line with the dimension of the variety $X$ (Meaning a curve has linear growth for example).
- The reason we rely on the polynomial is because depending on the embedding of our variety we might have a general low-dimensional discrepency from the eventual expected asymptotic behaviour.

> [!definition|\*] Arithmetic Genus
> Given a projective variety $Y$ of dimension $r$ in $\mathbb{P}^{n}$ with hilbert polynomial $P_{Y}$ we define the **arithmetic genus** of $Y$ to be
> $p_{a}(Y) = (-1)^{r}\left(P_{Y}(0) -1\right)$

Let us now before getting into the properties of the Arithmetic Genus consider some simple example calculations that will come in handy.

> [!example|\*] Genus of Projective Space
> Consider $X = \mathbb{P}^{n}$ and note that we can easilysee that since $k[X] = \K[x_{0}, \ldots, x_{n}]$ and then use the stars-and-bars method to count the graded components to be
> $\dim_{k} k[X]_{l} = \binom{l + n}{n} = \frac{(l+n)!}{l! \cdot n!}$
> which is a polynomial in $l$. Since the hilbert function $\phi_{X}$ is a polynomial and must agree for high values with a polynomial we know that the hilbert polynomial is also given by the same. This means we get
> $P_{X}(l) = \frac{(l+n)!}{l! \cdot n!} \implies P_{X}(0) = 1$
> This gives us that $p_{a}(X) = (-1)^{n}(1 - 1) = 0$

> [!example|\*] Cubic Curves: Elliptic Curves
> Let us a more complex example that will also be instructive later. We consider the cubic homogeneous polynomial given by
> $f = y^{2}z - x^{3}+ xz^{2} + z^{3} \in \K[x, y, z]$
> Now consider the coordinate ring $k[X]$ given by
> $k[X] = \faktor{\K[x, y, z]}{(f)}$
> and note that we can argue about the dimension of the graded components via linear maps. We know that
> $\dim k[X]_{l} = \dim \faktor{\K[x, y, z]_{l}}{f \cdot \K[x, y, z]_{l-3}} = \dim \K[x, y, z]_{l} - \dim (f \cdot \K[x, y, z]_{l-3})$
> and now note that by the fact that $f \neq 0$ we get that multiplication by it is injective and thus we see that
> $\phi_{X}(l) = \dim \K[x, y, z]_{l} - \dim \cdot \K[x, y, z]_{l-3}$
> By the same counting as the previous example we note that we know this is
> $\phi_{X}(l) = \binom{l + 2}{2} - \binom{l - 1}{2} = \frac{(l+2) (l+1) - (l-1)(l-2)}{2} = P_{X}(l)$
> Giving us finally the genus
> $p_{a}(X) = (-1)^{1} (P_{X}(0) -1) = 1$

- The second example is actually essential since it sheds light on the definition of elliptic curves in this context.
- We can also see how the Hilbert Function and Hilbert Polynomial dont agree for the first couple values of $l$ since the degree of $f$ hinders us from properly evautating the hilbert function.

#### Birational Invariance of the Algebraic Genus

Via constructions from so-called Hodge Theory it is a deep result that the algebraic genus is a birational invariant. This is suprising since it seems that from its construction it should be very dependent on the embedding of our projective variety.

> [!theorem|\*] Algebraic Genus is a birational invariant
> Let $X$ and $X'$ be two birationally equivalent non-singular projective varieties over $k$. Then $p_{a}(X) = p_{a}(X')$

### Connection Between the Algebraic and Geometric Genus

Getting to the central point that needs to be considered next: How similar are the two described invariants?

In general we need to know that the algebraic and geometric genus do not need to coincide. This is due to them representing different things in higher dimensions. The nicest case we can consider though has been studied a lot namely the case of projective curves we have an equality.

> [!proposition|\*] Algebraic Genus = Geometric Genus
> For a smooth projective curve $C$ we have that
> $p_{g}(C) = p_{a}(C) := g(C)$

In the case of smooth curves we can thus just talk about the genus $g(C)$ of a curve and dont have to worry about the exact type of genus we are considering

This language of the genus is also used when defining and discussing curves in projective space. For example we define elliptic curves as smooth projective curves of genus $1$

### Using the Genus Invariants as Tools for Classification

Considering the original aim of finding birational equivalence classes we can now wield the invariants in such a way that we gain more information about rational and non-rational curves and varieties.

> [!lemma|\*] Smooth Variety is not rational
> Let $Y$ be a non-singular projective variety then
> $p_{g}(Y) \neq 0 \implies Y \text{not rational}$
> $p_{a}(Y) \neq 0 \implies Y \text{not rational}$

Via another theorem in the theory of projective curves and the geometric genus we also get the sharper classification

> [!theorem|\*] Genus Determines the Birational Class
> Let $C$ be a smooth projective curve, then by Riemann-Roch Theorem we ge that
> $p_{a}(C) = p_{g}(C) = g(C) = 0 \iff C \text{ is rational}$

### Genus of Lower Dimensional Curves

In light of this theory we can now see that it is fruitful to consider birational equivalence classes and the genus in the case of projective curves the most. We will do this and find some nice explicit formulae that help us in the aim of identifying and classifying objects

#### Curves in $\mathbb{P}^2$

> [!theorem|\*] Genus Formula for Planar Curves
> Given a smooth projective Curve $C \subset \mathbb{P}^{2}$ of degree $d$ we can calculate the arithmetic genus directly by
> $p_{a}(C) = \frac{(d-1)(d-2)}{2}$

`\begin{proof}`
Let $C \subset \mathbb{P}^{2}$ be a curve of degree $d$, then it is given by a polynomial $f \in \K[x_{0}, x_{1}, x_{2}]_{d}$
$\mathcal{V}(f) = C$
We then know that the homogeneous elements of the coordinate rings are in
$\K[C]_{l} = \faktor{\K[x_{0}, x_{1}, x_{2}]_{l}}{f \cdot \K[x_{0}, x_{1}, x_{2}]_{l-d}}$
thus the hilbert function is given by
$\phi_{C}(l) = \dim_{k} \K[C]_{l} = \dim_{k} \K[x_{0}, x_{1}, x_{2}]_{l} - \dim_{k}(f \cdot\K[x_{0}, x_{1}, x_{2}]_{l-d})$
Due to $f$ being chosen non-zero we can equate the second dimension to the one of simple the degree $l-d$ polynomials. Thus note that by counting the Hilbert function is the following polynomial
$\phi_{C}(l) = \binom{l + 2}{2} - \binom{l-d + 2}{2} = \frac{(l+2) (l+1)}{2} - \frac{(l-d-2)(l-d-1)}{2} = P_{C}(l)$
Now from this we can calculate the arithmetic genus and obtain the result.
`\end{proof}`

> [!cor|\*] Genus 2 Curves
> There can not be a smooth curve $C \subset \mathbb{P}^{2}$ of genus $2$ since
> $4 = (d-1)(d-2)$
> has no solution

> [!corollary|\*] Higher Degree Curves are not Rational
> A smooth curve $C \subset \mathbb{P}^{2}$ of degree $d$ we have that
> $d \geq 3 \implies C \text{ is not rational}$
> due to the genus formula

> [!remark|\*] Generalisation for Hypersurfaces of Degree d
> We can generalise the Genus formula to smooth hypersurfaces $H$ of degree $d$ in $\mathbb{P}^{n}$ by
> $p_{a}(H) = \binom{d-1}{n}$
> meaning that also we have
> $d \geq n+1 \implies H \text{ is not rational}$

#### Curves in $\mathbb{P}^3$ and Higher

It seems that smooth curves in $\mathbb{P}^{2}$ are limited in their freedom allowing us describe the genus formula explicitly. What we can consider though is the curves in higher dimensions.

A central result in the classification of curves states that

> [!theorem|\*] Embedding theorem for Projective Curves
> Let $X$ be a projective variety of dimension $d$ then we can embedd this into $\mathbb{P}^{2d + 1}$

> [!corollary|\*] Embedding Theorem for Curves
> Any smooth curve $C \subset \mathbb{P}^{n}$ can be embedded into $\mathbb{P}^{3}$

This result allows us to limit our view to only the curves $\mathbb{P}^{3}$ and know that this already classifies all possible curves. Adding more dimensions doesn’t add more freedoms to the intrinsic geometry, from the view of birational classificiation.

#### Elliptic Curves as an Example

From here the classfication involves mainly considering curves of different genus in $\mathbb{P}^{3}$. A famous example by name are elliptic curves, which are exactly the smooth curves of genus 1. For these we can define more specific invariants, a group structure and more general theory.
