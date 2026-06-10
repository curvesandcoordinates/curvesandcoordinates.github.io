---
publish: true
created: 2025-03-05T09:46:33.302+01:00
modified: 2026-06-10T19:12:41.448+02:00
tags:
  - academia
---

Some basic baground knowledge needed for the course on complex analysis

> [!definition] Regions
> A non-empty connected subset $G \subset \C$ is called a **region**

> [!theorem|1.1] Region Characterisation
> An non-empty open set $G \subset \C$ is a region iff there exists a polygonal line connecting any two points in $G$

---

> [!definition|1.2] Holomorphy (Cauchy)
> Let $z_{0} \in G$. A function $f: G \to \C$ is called holomorphic in $G$ if $f$ is at every $z_{0} \in G$ complex differentiable. $f$ is holomorphic at a point $z_{0} \in G$ if $f$ is holomorphic on an open neighbourhood of $z_{0}$

> [!definition|1.3] Analiticit (Weierstraß)
> A function $f: G \to \C$ is called analytic on $G$ if it can be expanded into a powerseries with positive radius of convergence at every point in $z_{0} \in G$
> Meaning:
> $\forall z_{0} \in G \exists U \text{ open nbhd of } z_{0}: \quad f(z) = \sum\limits_{k=0}^{\infty} a_{k} (z-z_{0})^{k}$

---

> [!theorem|1.2] Goursat
> Let $\Delta \subset G$ be a triangle in $G$. Suppose $f$ is holomorphic on $G$, then
> $\int_{\del \Delta}f(z) dz = 0$

> [!theorem|1.3] Morera
> Suppose $f: G \to \C$ is continous. If $\forall \Delta \subset G: \int_{\del \Delta} f(z) dz = 0$ then it is holomorphic.

> [!theorem|1.4]
> Let $z_{0} \in G$. Every power series of the form $\sum\limits_{k=0}^{\infty} a_{k} (z-z_{0})^{k}$ is a holomorphic function on the interior of its disk of convergence.

> [!theorem|1.5]
> Let $z_{0} \in G$ and let $f: G \to \C$ be holomorphic on $G$. Then $f$ can be represented by a power series around $z_{0}$. This power series converges in the largest disk around $z_{0}$ contained in $G$ i.e.
> $\exists r > 0, K_{r}(z_{0})=\set{z \in \C \midline |z - z_{0}| < r} \subset G$ such that $f(z)= \sum\limits_{k=0}^{\infty} a_{k} (z-z_{0})^{k}$ where $a_{k}= \frac{1}{2\pi i} \int_{\del K_r(z_{0})}\frac{f(\zeta)}{(\zeta - z_{0})^{k+1}} d \zeta$

> [!theorem|1.6] Cauchy - Goursat - Morera - Weierstraß
> Let $f: G \to \C$ be continuous. The following statements are equivalent
>
> 1. $f: G \to \C$ is complex differentiable at every $z_{0} \in G$
> 2. $\forall \Delta \subset G: \quad \int_{\del \Delta} f(z) dz = 0$
> 3. $f:G \to \C$ can be represented at every $z_{0} \in G$ by a power series of the form $\sum\limits_{k=0}^{\infty} a_{k} (z-z_{0})^{k}$ with positive radius of convergence.

> [!definition|1.6] Set of Holomorphic Functions
> Let $U \subset \C$ be open and non-empty. The collection of all holomorphic functions $f: U \to \C$ is denoted by $\mathcal{O}(U)$.

---

> [!theorem|1.7] Existence of Primitive and Anti-Derivatives
> Let $U \subset \C$ be open. Then the following holds $U \text{ is simply-connected} \iff \frac{d}{dz}: \mathcal{O}(U) \to \mathcal{O}(U) \text{ is surjective}$

> [!proposition|1.7] Principle of analytic continuation
> Let $f: G \to \C$ be holomorphic. If there exists a non-empty open $U \subset G$ such that $\at{f}{U} = 0$ then $\at{f}{G} = 0$

> [!proposition|1.8]
> The tripple $(\mathcal{O}(G), +, \cdot)$ is a commutative ring with 1 = 0 and no zero-divisors.

---

> [!definition|1.9] Meromorphic Functions
> Let $U \subset G$ open. A function $f: U \to \C$ is called meromorphic on $U$ if there exists $O \subset U$ open:
>
> 1. $f$ is holomorphic on $O$
> 2. $U \setminus O$ is discrete
> 3. $\forall p \in U \setminus O: \quad \lim_{z \to p} |f(z)| = \infty$
>    The points $p \in U \setminus O$ are called the poles of $f$

> [!definition|1.10]
> Let $U \subset G$ be open. The collection of all meromorphic functions on $U$ is denoted by $\mathcal{M}(U)$

---

> [!proposition|1.11]
> Let $f \in \mathcal{O}(G)$ with $f \neq 0$. Let $Z := \set{z \in \C \midline f(z) = 0}$. Then the function $g: G \to \C, \quad z \mapsto \frac{1}{f(z)}$ is a meromorphic function with sets of poles $Z$

`\begin{proof}`
Given that $f \in \mathcal{O}(G)$ we know that $f$ is continuous. Thus $f^{-1}(0) = Z$ is a closed set and as $f \neq 0$ it is also discrete. Also note that $g$ is holomorphic on $G \setminus Z$.
Now let $p \in Z$ and choose $r > 0$ such that $K_{r}(p) \subset G$ and $K_{r}(p) \cap Z = \set{p}$ then $g$ is holomorphic on $K_{r}(p) \setminus \set{p}$ and $\lim_{z \to p} |g(z)| = \lim_{z \to p} \frac{1}{f(z)} = \infty$
Thus $p$ is a pole.
`\end{proof}`

> [!proposition|1.12]
> If $G$ is a region in $\C$ then $(\mathcal{M}(G), +, \cdot)$ is a $\C$-Algebra. More specifically a Field.

---

We want to know compactify the complex plane, while at the same time connecting it to the 3-Sphere $S^{2}$

We define two objects of interest
$S^{2} := \set{(x, y, z) \in \R^{3} \midline x^{2} + y^{2} + z^{2} = 1}$
and
$E = \set{v \in \R^{3} \midline v_{3} = 0} \cong \R^{2} \cong \C$
A standard projection between these two objects is given by the sterographic projection from the north pole. We will denote this as $\pi_{0}$, meaning we have a map

$$
\pi_{0}: S^{2}\setminus \set{(0, 0,1)} \to \C, \quad (a, c, d) \mapsto \frac{a}{1-c} + i \frac{b}{1-c}
$$

This is a continuous map and if we reverse it we get an easily calculable smooth inverse

$$
\pi_{0}^{-1}(x + i y) = \left(\frac{2x}{{1+x^{2}+y^{2}}}, \frac{2y}{{1+x^{2}+y^{2}}}, \frac{x^{2}+y^{2} - 1}{{1+x^{2}+y^{2}}} \right)
$$

meaning in total we have a homeomorphism between
$\C \cong S^{2}\setminus \set{(0, 0, 1)}$

It would seem natural to want to include the entire sphere. The problem here being that the complex plane is not compact while $S^3$ is. This leads to the concept of adding an “extra point” to the complex plane and give it a topology that is compact. This is done in general by a one-point compactification.

We denote the one-point compactification of $\C$ as
$\hat{\C} = \C \, \cup \set{\infty}$
where $\infty$ simply denotes and extra point with a symbol. We will see later why this suggestive name makes sense.

To get the topology we first extend the map $\pi_{0}$ to a map from $S^{2}$ by simply setting $\pi(p) = \begin{cases}\pi_{0}(p) \quad p \in S^{2} \setminus \set{(0,0,1)} \\ \infty\end{cases}$
This is a bijection. We will now simply induce a topology on $\hat{\C}$ by this map $\pi$. Meaning we simply generate a topology with the images of open sets of $S^{3}$, making $\pi$ again a homeomorphism. Due to this we will call the object $\hat{\C}$ the “Riemann Sphere”.

The geometric nature of this construction lends itsself to defining things like metrics. If we consider $S^{2}$ as an embedding of $\R^{3}$ we can define a metric on the sphere $d: S^{2} \times S^{2} \to \R$ such that
$d(x, y) = \norm{x - y}_{2}$
This also projects down to the complex plane by simply defining$\chi_{0}: \C \to \C, \quad (z_{1}, z_{2}) \mapsto \frac{2 |z_{1} - z_{2}|}{\sqrt{1+|z_{1}|^{2}} \sqrt{1+|z_{2}|^{2}}}$
where this expression is simply derived from $\chi_{0}(z_{1}, z_{2}) = d(\pi_{0}^{-1}(z_{1}), \pi_{0}^{-1}(z_{2})$. Continuing this concept we can extend this to the compactification of the complex plane by defining

$$$\chi(z_{1}, z_{2}) = \begin{cases}
\chi_{0}(z_{1}, z_{2}) & z_{1}, z_{2} \C\\
\frac{2}{\sqrt{1+|z_{1}|^{2}}} & z_{1} \in \C, z_{2} = \infty\\
\frac{2}{\sqrt{1+|z_{2}|^{2}}} & z_{1} = \infty, z_{2} \in \C\\
0 & z_{1} = \infty, z_{2} = \infty
\end{cases}$$
This metric we wil call the compact metric. It makes the pair $(\hat{\C}, \chi)$ a metric space.

---
## Extending Holomorphic and Meromorphic Functions to $\hat{\C}$
To describe the behaviour of a function ${} f(z) {}$ at the value of $\infty$ we can consider the behavior of $f(\frac{1}{z})$ at $0$. To formalise this we define the following bijection.
$$J: \hat{\C} \to \hat{\C} \quad z \mapsto \begin{cases}
\frac{1}{z} &z \in \C \setminus \set{0} \\
0 &z=\infty \\
\infty &z=0
\end{cases}$$
Ist a bijection with the property that $J \circ J = Id_{\hat{\C}}$

Since we have the visual object of the Riemann Sphere we can actually use the homeomorphism
$$\hat{\C} \overset{\pi}{\cong}S^{2}$$
Considering the map $\pi^{-1} \circ J \circ \pi$ we can simply calculate that this amounts to
$$\pi^{-1} \circ J \circ \pi: \begin{pmatrix}a \\ b \\ c\end{pmatrix} \mapsto \begin{pmatrix}1 & 0 & 0  \\ 0 & 1 & 0 \\ 0 & 0 & -1\end{pmatrix} \begin{pmatrix}a \\ b \\ c\end{pmatrix}$$
meaning that our map $J$ is equivalent to the reflection of the $z$-coordinate on the riemann sphere. We can then see that.

Now we can say that for any a continous map and a nbhd $U$ of $\infty \in \hat{\C}$
$$f: U(\infty) \setminus \set{\infty} \to \C$$
then we simply can say that
$$f(\infty) = \lim_{z \to \infty} f(z) = \lim_{z \to 0} f \circ J(z)$$
We can then simply define
> [!definition] Holomorphic and Meromorphic Functions on $\hat{\C}$
> A map $f: \hat{\C} \to \C$ is called
> - Holomorphic at $\infty$ if and only if $f \circ J$ is holomorphic at $z = 0$
> - Meromorphic at $\infty$ if and only if $f \circ J$ is meromorphic at $z = 0$

We can now consider a couple examples of holomorphic and meromorphic functions on the Riemann sphere.

1. $f: \hat{\C} \to \C \quad z \mapsto \frac{1}{1+z^{2}} \implies f \circ J(z) =\frac{1}{1+\left(\frac{1}{z}\right)^{2}} = \frac{z^{2}}{1+z^{2}}$
	1. We can see that for any $z \in \C$ that $f$ is holomorphic and non-zero at $z = 0$
	2. We can also see that $f \circ J$ is holomorphic at $z=0$ with a zero of order $2$. Thus $f$ is holomorphic at $\infty$ and has a zero of order $2$ at $\infty$.
2. $f: \hat{\C} \to \C \quad z \mapsto z^{2} \implies f \circ J(z) = \left(\frac{1}{z^{2}}\right)$
	1. For any $z \in \C$ we can see that $f$ is holomorphic.
	2. Since $f \circ J$ is meromorphic at $z = 0$ with a pole of order $2$. Thus we can see that $f$ is meromorphic at $\infty$ with a pole of order $2$
3. $f: \hat{\C} \to \C \quad z \mapsto \sin(z) \implies f \circ J(z) = \sin(\frac{1}{z})$
	1. For any $z \in \C$ we already know that $f$ is holomorphic.
	2. At $z = \infty$ we can see that $f \circ J$ has an essential singularity and thus 


> [!theorem] Identity Theorem on the Riemann Sphere
> Let $G \subset \hat{\C}$ be a region and $f$ holomorphic on $G$. Let$\set{z_{k}}$ be a non-constant sequence converging to $z \in G$ if $f(z_{k}) = 0$ for all $k$ then
> $$f = 0 \text{ on } G$$

`\begin{proof}`
1. Let us first consider the case that $z \neq \infty$. Then $\exists N \in \N$ such that $\forall m \geq N, z_{n}\in \hat{\C} \setminus \set{\infty} \subset \hat{\C}$. Let $G_{0} := G \setminus \set{\infty}$. $G_{0}$ is a region in $\C$ and $f \in \mathcal{O}(G_{0})$ and $f(z_{k}) = 0$ thus by the normal identity theorem we get $f = 0$ on $G_{0}$
	1. Now we know that if $\infty \notin G_{0}$ we have $G_{0} = G$ and thus everything works out.
	2. In the case that $\infty \in G$ we have thtat since $f \in \mathcal{O}(G)$, f vanishes in a punctured nbhd of $\infty$. As $f$ is continuous on $G$, $f$ also vanishes at $\infty$ thus $f = 0$ on $G$
2. Now the case where $z = \infty$. Then there exists $M \in \N$ such that for all $m \geq M$ $z_{m} \neq 0$. Since $f$ is holomorphic on $G \setminus \set{0}$ and $f \circ J$ is holomorphic on $G_{1} := \set{z^{-1} \midline z \in G \setminus \set{0}}$. Note that $f \circ J (\frac{1}{ z_{m}})= 0$ for all $m \geq M$ and $\set{z_m^{-1} }_{m \geq M}$ converges to $\frac{1}{z} = 0$ in $G_1$.
	1. Now we again treat the case where $0 \notin G_{1}$ then we are done. 
	2. In the case where $0 \in G_{1}$, then by the continuity of $f$ we get $$f(0) = 0$$ and thus $f = 0$ on $G$

`\end{proof}`

---

We now want to extend maps from $\C \to \C$ to not only maps $\hat{\C} \to \C$ but also to $\hat{\C} \to \hat{\C}$.

> [!definition|2.3] Maps between Riemann Spheres
> Let $f: \hat{\C} \to \hat{\C}$. A point $z_{0} \in \hat{\C}$ is called a pole of order $k \in \N$ and $f$ is called meromorphic at $z_{0}$ if one of the following holds:
> 1. $(z- z_{0})^{k} f(z)$ is holomorphic at $z_{0} \in \C$
> 2. $J \circ f \circ J$ has a zero of order $k$ at $z_{0} \in \hat{\C}$
> 
> A function $f: \hat{\C} \to \hat{\C}$ is meromorphic on $\hat{\C}$ if it is meromorphic at all $z \in \hat{\C}$
>
>The set of Meromorphic functions on $\hat{\C}$ is denoted by $\mathcal{M}(\hat{\C})$

Namely the set of meromorphic functions has some nice properties:
1. $f \in \mathcal{M}(\hat{\C}) \implies f \in C(\hat{\C})$
2. Constant functions are meromorphic except for maps mapping $z \mapsto \infty$ 
3. The tripple $(\mathcal{M}(\hat{\C}), +, \cdot)$ is a field

---
Let $z_{0}\in \hat{\C}$ and $f: \hat{\C} \to \hat{\C}$, not constant. Let $\zeta := f(z_{0}) \in \hat{\C}$. We now get two cases
1. Consider $z_{0} \in \C$ then we have either
	1. Let $f$ be holomorphic at $z_{0}$. $f$ not constant implies then that $\exists l \N: f^{(l)}(z_{0}) \neq 0$. We can now choose $k$ to be the smallest such number. Then we can write $$f(z) = \zeta + \sum\limits_{\nu=k}^{\infty} \frac{f^{\nu}(z_{0})}{\nu!} (z-z_{0})^\nu$$ in a nbhd of $z_{0}$.
	2. Let $f$ be meromorphic at $z_{0}$ with a pole of order $k$, then we can write $$f(z) = \sum\limits_{\nu=-k}^{\infty} a_{\nu} (z-z_{0})^{\nu}$$orally we say that “$f(z_{0}) = \infty$ has a solution of order $k$”. 

> [!definition|2.4]
> We call $\sum\limits_{\nu=-k}^{-1} a_{\nu} (z-z_{0})^{\nu}$ the principle part of $f$ at $z_{0}$

2. Now consider $z_{0} = \infty$ then we have again two situations
	1. $z_{0} = \infty$ is a solution of $f(\infty) = \zeta$ of multiplicity $k \in \N$ if $0$ is a solution of $f \circ J (0) = \zeta$ with multiplicity $k$
	2. $f$ has a pole of order $k$ at $z_{0}= \infty$ if $J\circ f \circ J$ has a zero of order $k$ at $0$. In this situation we know that $f \circ J (0) = \infty$, as a pole of order $k$. Meaning we can write a laurent series for this as $$f\circ J (z) = \sum\limits_{\nu=-k}^{\infty} a_{\nu} z^{\nu}$$ by change of variables we get $$f(z) = \sum\limits_{\nu=-\infty}^{k} a_{-\nu} z^{\nu}$$ in a nbhd of $\infty$

> [!definition|2.5]
> In this situation we can now effectively call the sum $\sum\limits_{\nu=1}^{k} a_{-\nu} z^{\nu}$ the principal part of $f$ at $\infty$


> [!definition|2.6]
> A point $z_{0}\in \hat{\C}$ is called a simple point, resp. a multiple point if $k = 1$, resp, $k > 1$


> [!example|2.7]
> Suppose $f: \hat{\C} \to \hat{\C}$ with $$z \mapsto \frac{z}{1+z^{3}}$$
> The Zeros are given by:
> 1. For any $z \in \C$ we know that the equation $f(z)= 0$ is solved by $z = 0$
> 2. The solutions of $f(\infty) = 0$ are found by looking at $f \circ J (0) = \at{\frac{z^{2}}{1+z^{3}}}{0} = 0$ meaning $z = 0$ is a zero of order 2 of $f \circ J$ thus $z = \infty$ is a zero of order $2$ of $f$ 
> The Poles are given by:
> 1. $f(z) = \infty$ is solved by the solutions of $1 + z^{3} = 0 \iff z \in \set{-1, e^{i \frac{\pi}{3}}, e^{-i \frac{\pi}{3}}}$.
> 2. $f(\infty) = \infty$ is solved by the solutions of $J \circ f \circ J (0)$ but this is never 0 so nvm.


> [!theorem|2.8]
> Let $f \in \mathcal{M}(\hat{\C}) \setminus \C$. The equation $$f(z) = \zeta$$ with $\zeta \in \hat{\C}$ has only finitely many solutions

`\begin{proof}`
We first let $z_{0} \in \hat{\C}$ and let $\zeta := f(z_{0})$.

> [!claim]
> There exists a nbhd of $z_{0}$, called $U(z_{0})$ such that $f(z) \neq \zeta$ for all $z \in U(z_{0}) \setminus \set{z_{0}}$ 

`\begin{proof}`
Let us consider the case where $\zeta = \infty$. Then the poles of $f$ correspond to the zeros of $J \circ f$. The the theorem 2.2 the zeros are isolated, thus the poles are isolated.

Considering the case where $\zeta \neq \infty$ we can say that the zeros of $f- \zeta$ are isolated
`\end{proof}`

Now given this claim we know that $\hat{\C} = \bigcup_{z \in \hat{\C}} U(z)$. Since $\hat{\C}$ is compact we know that this covering is finite thus there exists $k \in \N$ such that $$\hat{\C} = \bigcup_{\nu = 1}^k U(z_{\nu})$$
Hence $f^{-1}(\zeta)$ with $\zeta \in \hat{\C}$ has at most $k$ many preimages. Given this we know that for $f \in \mathcal{M}(\hat{\C})\setminus \C$ we have that every solution of $f(z) = \zeta$ has at most finite multiplicity. Thus, $f$ takes the value $\zeta$ only finitely many times counting multiplicities

`\end{proof}`


> [!theorem|2.9]
> Let $f, g \in \mathcal{M}(\hat{\C})$ have poles at the same points and further suppose that they also have the same principle parts. Then there exists a $c \in \C$ such that
> $$f - g = c$$

`\begin{proof}`
Let $f,g \in \mathcal{M}(\hat{\C})$. Let $h:= f - g$. Then $h$ is a continous function. Since the riemann sphere is compact we know that $h(\hat{\C})$ is compact. As the principle parts cancel out we know that $h(\hat{\C}) \subset \C$ .
Since now $h(\hat{\C})$ is compact in $\C$ we know that is is bounded meaning $h$ is a holomorphic bounded function on $\C$. By Liouville we get that $h$ is constant on $\C$. By continuity $h = c$ on $\hat{\C}$.
 `\end{proof}`
> [!theorem|2.10]
> Let $f, g \in \mathcal{M}(\hat{\C})$. Suppose that $f$ and $g$ have zeros and poles of the same order at the same points of $\C$ then there exists a number $c \in \C$ such that
> $$\frac{f}{g} = c$$

`\begin{proof}`
EXERCIRESEEESESES
`\end{proof}`


In this chapter we will look at extending real-valued function to the complex plane in a holomorphic way.

The first problem is the definition of the idea of a holomorphic extension
> [!definition|3.1] Holomorphic Extensions
> Let $f: (a, b) \subset \R \to \R$ and let $F: G \to \C$ be holomorphic on $G$ where $(a, b) \subset G$. Further assume that $F(x) = f(x)$ for all $x \in (a, b)$. Then $F$ is a called the holomorphic extension of $F$

A quick observation we have by the identity theorem for holomorphic functions that any holomorphic extension is unique.[^1]

This raises the question under what conditions this holomorphic extension exists.
> [!theorem|3.2]
> Let $f: (a, b) \subset \R \to \R$ has a holomorphic extension if and only if for all $x_{0} \in (a, b)$ there exists $r(x_{0}) > 0$ such that $$f(x) = \sum\limits_{\nu = 0}^{\infty} a_{\nu} (x-x_{0})^{\nu}$$ for $a_{\nu} \in \R$ and for all $x \in B_{r(x_{0})}(x-x_{0})$ 
> 

`\begin{proof}`
First assume our $f$ has a holomorphic extension $F$. Then we know that for any $z$ in the disk of radius $r(x_{0})$ around $x_{0}$ is representable by
$$F(z) = \sum\limits_{\nu = 0}^{\infty} a_{\nu} (z-x_{0})^{\nu}$$As $F$ is the holomorphic extension of $f$, $f$ has the same powerseries expansion as $F$. Hence all we need to show is that all $a_{\nu}$ are real numbers.

We are given 
$$$

\begin{align\*}
a\_{\nu} &= \frac{1}{\nu!}\at{\frac{d^{\nu}}{dz^{\nu}} F(z)}{z = x\_{0}}\\
&= \frac{1}{\nu!}\at{\frac{d^{\nu}}{dz^{\nu}} F(x + iy)}{x = x\_{0}, y = 0}\\
&= \frac{1}{\nu!}\at{\frac{d^{\nu}}{dx^{\nu}} F(x)}{x\_{0}}\\
&= \frac{1}{\nu!}\at{\frac{d^{\nu}}{dx^{\nu}} f(x)}{x\_{0}} \in \R
\end{align\*}\$\$
Thus the first direction is proven.

Now assume that $f(x) = \sum\limits_{\nu = 0}^{\infty} a_{\nu} (x-x_{0})^{\nu} = \sum\limits_{\nu = 0}^{\infty} a_{\nu} (z-x_{0})^{\nu} =: F(z)$For a real $z$ in the interval of convergence $B_{r(x_{0})}(x_{0})$
Then $\sum\limits_{\nu = 0}^{\infty} a_{\nu} (z-x_{0})^{\nu}$ converges in the disk for complex $z$ thus the holomorphic extension exists in this disk.

The image to have in mind here is that we extend a small extension and make it bigger and bigger until all of $(a, b)$ is contained:

![[04 - Resources/Assets/Pasted image 20241105124641.png]]

The identity Theorem implies that two holomorphic extensions agree on the intersection of two disks, then they agree on their union. In this way, $F$ can be extended to include $(a, b)$
`\end{proof}`

Now we look at some common and probably already known holomorphic extensions:

> [!definition|3.3] Common Holomorphic Extensions
>
> - $\exp: \C \to \C^{\times}= \C \setminus \set{0}, \quad z \mapsto \sum\limits_{\nu = 0}^{\infty} \frac{z^{\nu}}{\nu!}$
> - $\cos(z) := \sum\limits_{\nu = 0}^{\infty} (-1)^{\nu}\frac{z^{2\nu}}{(2\nu)!}$
> - $\sin(z) := \sum\limits_{\nu = 0}^{\infty} (-1)^{\nu} \frac{z^{2\nu + 1}}{(2\nu + 1)!}$

> [!proposition|3.4] Eulers Formula
> $\forall z \in \C: \exp(iz) = \cos(z) + i \sin(z)$

`\begin{proof}`
Straightforward calculation
`\end{proof}`

Similarly we can define the hyperbolic functions (we won’t go into these at all)

> [!definition|3.5] Hyperbolic Functions
>
> - $\cosh(z) = \frac{1}{2} \left( \exp(z) + \exp(-z) \right)$
> - $\sinh(z) = \frac{1}{2} \left( \exp(z) - \exp(-z) \right)$

> [!remark|\*]
>
> - $\cosh(z) = \cos(iz)$
> - $\sinh(z) = -i \sin(iz)$

The question that now arises is that we would like the properties of exponential functions and trigonometric functions to transfer from the real line to the complex case.

> [!proposition|3.6] Additive Formula for Exponentials
> $\forall z_{1}, z_{2} \in \C: \quad \exp(z_{1} + z_{2}) = \exp({z_{1}}) \exp({z_{2}})$

`\begin{proof}`
We will write as a short hand $e^{z} := \exp(z)$.[^2] What we then want to show is that the function $f(z_{1}, z_{2}) = e^{z_{1}+z_{2}} - e^{z_{1}}e^{z_{2}}$ is equal to zero. let $z_{2} := x_{2} \in \R$ be a given real number. Fixing this number in our function $f$ we get two properties:

1. $\forall z \in \C$ we have that $z \mapsto f(z, x_{2})$ is holomorphic
2. $\forall z \in \R$ we have that $z \mapsto f(z, x_{2}) = 0$.

By the identity theorem we now get that this mapping is equal to the zero map. Meaning the map
$f: \C \to \C, \quad z \mapsto e^{z_{1}+x_{2}} - e^{z_{1}}e^{x_{2}}$
is identically zero.

Now doing the same thing for fixing the first parameter, we get that for all $z_{1}, z_{2} \in \C$ that$f(z_{1}, z_{2}) = 0$
`\end{proof}`

This strategy works for identities in general that are defined for maps on $\R$ but want to be extended to the complex plane.

Let us now consider Eulers Identity again
$e^{z} = e^{x+iy} = e^{x} (\cos y + i \sin y)$
We also know that $\norm{e^{z}} = e^{x} = e^{\Re(z)}$ and that $\arg e^{z} = y = \Im(z)$, keeping in mind that the argument of a complex number is a multi-valued function. We also know that $\overline{e^{z}} = e^{\overline{z}}$ and that $e^{z} \neq 0$ for all $z \in \C$.

> [!definition|3.7] Periodic Maps
> Let $a \in \C^{\times}$. A function $f: \C \to \C$ which contains $z$ and $z+a$ in its domain of definition and satisfies $f(a +z ) = f(z)$ is called periodic with period $a$.
> Note that if $a$ a is a period of $f$ then $n \cdot a$ with $n \in \mathbb{Z}$ is also a period of $f$. If all periods of $f$ have the form $n \cdot a$ then we call $a$ the primitive period and $f$ simply periodic.

> [!proposition|3.8] Periodicity of Sine and Cosine
> The functions $\sin$ and $\cos$ are simply periodic with primitive period $2 \pi$.
> The function $\exp$ is simply periodic with primitive period $2 \pi i$.

`\begin{proof}`
This should have been proven before in Complex Ana 1.
`\end{proof}`

> [!example]
> Let us now consider an instructive example. Consider the equality $e^{z_{1}} = e^{z_{2}}$
> Then this implies that the magnitudes and arguments agree, meaning
> $e^{\Re{z_{1}}} = e^{\Re{z_{2}}} \quad \wedge \quad \arg z_{1} = \arg z_{2}$
> meaning we can also write this as
> $\Re(z_{1}) = \Re(z_{2}) \quad \wedge \quad \Im(z_{1}) = \Im(z_{2}) + 2\pi k $
> for some $k \in \mathbb{Z}$.

If we want to get at the inverse function of the exponential we can use the informatio from above to restrict the domains of definitions making the function injective[^3]

[^1]: This if given by the fact that we have equality on a open interval
[^2]: This is also a real fact, one can prove that using exponentiation in the complex sense
[^3]: Just as we did in the real case with sine and cosine

## The Complex Logarithm - Definition

We would now like to essentially solve the quation $z = e^{w}$
This can be expressed as
$\norm{z} e^{i \arg z} = z = e^{w} = e^{u+iv} = e^{u}e^{iv}$
Comparing these we get $e^{u} = \norm{z} \quad \wedge \quad v = \arg z$. We now restrict the argument by setting $\arg z = \Arg z + 2 \pi k$ where $-\pi < \Arg z \leq \pi$ and we call $\Arg$ the principal argument.

Therefore,
$e^{u} = \norm{z} \quad u = \Arg \norm{z} + 2 \pi k$
and we can see that the logarithm is a “set-valued function” in the sense that
$\log z = \set{log\norm{z} + i \Arg z + 2 \pi i k \midline k \in \mathbb{Z}}$
Setting $k := 0$ yields a unique inverse function to $\exp$. This inverse is denoted by $\Log$.

But every fixed value of $k$ yields a unique inverse function to $\exp$.

> [!definition|\*]
> We tend to write $\log z = \log |z| + i \Arg z + 2 \pi i k$ is called the k-th brach of $\log$.
> If $k:= 0$ then this is the principal / main branch of $\log$

> [!proposition|4.1]
> Every branch of $\log$ is a holomorphic function on $\C^{\times}$.

`\begin{proof}`
To show is that $\frac{\del}{\del \overline{z}} \log z = 0$. First let $z = x + i y$ then $\Arg z = \tan^{-1}\left(\frac{y}{x}\right)= \tan^{-1}\left(i \frac{\overline{z} - z}{\overline{z} + z}\right)$ where we set $\tan^{-1}(\infty) := \frac{\pi}{2}$.
A calculation shows that $\frac{\del}{\del \overline{z}} \log z = 0$
`\end{proof}`

---

## Periodic Strips of $z = e^{w}$

We will now look at periodic strips of $z = e^{w}$ for $w = u + iv$. These are defined to be the sets $\mathcal{S}_{k} = \set{w \in \C \midline -\pi + 2\pi k < v \leq \pi + 2 \pi k}$
for any $k \in \mathbb{Z}$. They then have the property $exp(\mathcal{S_{k}}) = \C^{\times}$

We want to nicely glue these strips together. So we let $k \in \mathbb{Z}$, and $L_{k}(z):= \Log |z| + i \arg z$
then $L_{k}(1)= 2\pi i k$

Now we define $K^{+} := \set{z \mid \Im (z) > 0}$ and $K^{-} := \set{z \mid \Im (z) < 0}$
![[04 - Resources/Assets/Pasted image 20241112123535.png]]

We know that for
$z \in K^{+}: \Log(z) = L_{k}(z) \quad \quad z \in K^{-}: \Log(z) = L_{l}(z)$
for $k, l \in \mathbb{Z}$

Looking at the limits explicitly we can see that:
$z \in K^{+}: \quad \lim_{z \searrow z_{0}} L_{k}(z) = \Log|z| + i \pi + 2 \pi i k$
$z \in K^{-}: \quad \lim_{z \nearrow z_{0}} L_{l}(z) = \Log|z| - i \pi + 2 \pi i l$
For Continuity we thus require that $l = k + 1$. To do this we need to define topological “gluing” formally defined in quotient topologies.

> [!remark] Quotient Topology (Identification in Topology)
> Using the example of a circle we can see that to transform $X = [0, 1]$ into the circle we can define an equivalence relation with:
>
> - $\forall x \in (0, 1): \quad x \sim x$
> - $0 \sim 1$
>
> Considering now the quotient space, meaning the space of equivalence classes, say $Y = \set{[x] \midline x \in X}$ we can define a natural projection$\pi: X \to Y, x \mapsto [x]$
> The topology we would like on $Y$ would be one that makes at least the projection continous. We thus define a set $U \subset Y$ to be open in $Y$ if and only if $\pi^{-1}(U) \subset X$ is open. This is the quotient topology.

To now define the Domain that makes the complex logarithm continuous. We first note that each of the strips $\mathcal{S}_{k}$ corresponsds to a copy of $\C^{\times}$. We then define $l_{k} := \R^{-} \times \set{k}$ and $E_{k} := \C^{\times} \times {k} \setminus l_{k}$
Since we know that $\C = \bigcup_{k\in \Z } \mathcal{S}_{k}$ we can glue the upper edge of $E_{k}$ to the lower edge of $E_{k + 1}$ along $l_{k}$.

Doing this defines the corresponding Riemann surface for $\log z$ as $X := \bigsqcup_{k \in \Z} E_{k} \cup \bigcup_{k \in Z} l_{k}$
where we call $l_{k}$ the branch cuts and $z = 0$ is the branch point.

# Riemann Surface for $w^{q} = z, q \in \N, q > 1$

We now consider the equation $w = f(z) = z^{\frac{1}{q}}= e^{\frac{1}{q} \log(z)}$
where $\log z = \log |z| + i \arg z$.

Via a little algebra we get that

$$$\begin{align*}
w &=  f(z) \\
&= e^{\frac{1}{q} \left( \log |z| + i \arg z \right)}\\
&= e^{\frac{1}{q} \log |z|} e^{\frac{i}{q}\arg z} = |z|^{\frac{1}{q}} \cdot e^{\frac{i}{q} \left( \Arg z + 2 \pi k \right)}\\
&=  |z|^{\frac{1}{q}}\exp\left(\frac{i}{q} \Arg z + \frac{2 \pi i k}{q}\right)
\end{align*}$$
If we let $L_{k}(z) = \log|z| + i \arg z$ with $L_{k}(1) = 2\pi i k$ then we can define $$f_{k}(z) = \exp\left(\frac{1}{q} L_{k}(z) \right)$$ with $f_{k}(1) = \exp \left(\frac{2 \pi i k}{q}\right)$
Now note that $$f_{k} = f_{l} \iff k = l \mod q$$
Thus we need to glue $q$ copies of $\C$ along the negative real axis.

Let $$E:= \C \setminus \R_{0}^{-}$$
The we know that $E$ is simply connected and the domain of the branches $f_{k}$ of $z^{\frac{1}{q}}$. We then define $$E_{k}: E \times \set{k}$$
for $k \in \set{0, 1, \cdots, q-1}$. Carrying out the identification as before for the logarithm along the lines $l_{k} := \R_{0}^{-}$ we get a Riemann surface
$$X = \bigcup_{k = 0}^{q-1} E_{k} \cup \bigcup_{k=0}^{q-1}l_{k}$$
### Historical Approach By Riemann
Another way to think about this is looking at the graph of the function, say for $q = 2$. We then can look at the graph of this function, meaning the set $$\mathcal{S} = \set{(z, w) \in \C^{2} \midline w^{2} = z}$$
Note that the projection $\pi: (z, w) \mapsto w$ defines a homeomorphism $\mathcal{S} \to \C$.
**Riemann’s Idea:** Study ${} w = \sqrt{z} {}$ as a function on $\mathcal{S}$ rather than as a multivalued function of $z$


Consider the case of $q = 2$. Riemanns idea didnt directly involve gluing but rather looking at the graph of $f(z) = \sqrt{w}$ 
If we now consider the polar representation of $z$ with $z = r e^{i \theta}$ with $r = |z|$ and $\theta = \Arg z \in (-\pi, \pi]$ We can then define the square root by setting $$\sqrt{z} = \begin{cases}
r e^{i \frac{\theta}{2}} =: g_{1}(z)\\
-r e^{i \frac{\theta}{2}} =: g_{2}(z)
\end{cases}$$
then by omitting $z = 0$ and setting $\mathcal{S}^{\times} := \set{(z, w) \in \C^{\times} \times \C^{\times} \midline w^{2} = z}$ and $\pi: S^{\times} \to \C^{\times}$ with $$\pi(z, w) = w$$yields $\pi^{-1}(w) = \set{g_{1}(w), g_{2}(w)}$


# Homology

## 6.1 1 - Chains and 1 - Cycles

Let $X$ be an arbitrary non-empty set with elements $x, y, z, \cdots$ also let $$\mathcal{F} = \set{f: X \to \Z \midline f(x) \neq 0 \text{ for only finitely many } x \in X}$$
Let $+: \mathcal{F} \times \mathcal{F} \to \mathcal{F} \quad (f, g) \mapsto f+g$ where $$(f+g)(x) := f(x) + g(x)$$
Then we see that $\left( \mathcal{F}, + \right)$ is an abelian group.
Define $f_{x} \in \mathcal{F}$ by $$f_{x}(y) =\begin{cases}
1  & y = x \\
0 & y \neq x
\end{cases}$$
Then $\set{f_{x} \midline x \in X}$ is a basis for the group $(\mathcal{F}, +)$ meaning that every $f \in \mathcal{F}$ can be written as
$$f = \sum\limits_{i} \alpha_{i} f_{x_{i}} \quad \text{where } \alpha_{i} := f(x_{i}) \in \Z$$
As $x \mapsto f_{x}$ is bijective and $|X| = | \set{f_{x} \midline x \in X}|$. Therefore, it is customary to write $x$ instead of $f_{x}$
$$\sum\limits_{i} \alpha_{i} f_{x_{i}} \iff \sum\limits_{i} \alpha_{i} x_{i}$$
This identification generates an abelian group containing $X$ and being isomorphic to ${} \left( \mathcal{F}, + \right)$. This group is called the **free abelian group generated by $X$** and is written as $\mathcal{F}(X)$.

Suppose $X := \set{\gamma: [0,1] \to \C \midline \gamma \text{ path}}$. We then call the free abelian group generated by $X$ the **group of 1-chains** and is denoted by $C_{1}$.
Any element $\gamma \in C_{1}$ can be written as $\gamma = \sum\limits_{i} \alpha_{i} \gamma_{i}$ with $\alpha_{i}\in \Z$ and we call the $\alpha_{i}$ the multiplicity and the $\gamma_{i}$ the components of $\gamma$.
Similarly by setting $X = \C$ as a point set we call the free abelian group generated by $X$ the **group of 0-chains** and is denoted by $C_{0}$.

> [!definition] Boundary Operator
> Let $\gamma \in C_{1}$ with $\gamma = \sum\limits_{i} \alpha_{i} \gamma_{i}$ and let $a_{\gamma_{i}} = \gamma_{i}(0)$ and $b_{\gamma_{i}} = \gamma_{i}(1)$ be the initial and terminal points of $\gamma$. The mapping $$\del: C_{1} \to C_{0} \quad \del \gamma := \sum\limits_{i} \alpha_{i} \left( b_{\gamma_{i}} - a_{\gamma_{i}} \right)$$is called the **boundary operator**.
> It is also notable that $\del$ is a group homomorphism.


> [!definition] 1-Cycles
> The subgroup $$Z_{1} := \ker \left( \del: C_{1} \to C_{0} \right)$$is called the **group of 1-cycles**.


## 6.2 Differential Forms

Let $U \subset \C \cong \R^{2}$ and let $f: U \to \C$ be a $C^{\infty}$-function in $x$ and $y$. Denote by $\mathcal{E}(U)$ the $\C$-Algebra of all such function and note that for $z = x + iy$ that the standard Wirtinger derivatives give us that
$$\begin{align*}
\frac{\del}{\del z} &= \frac{1}{z} \left( \frac{\del}{\del x} - i \frac{\del}{\del y} \right)\\
\frac{\del}{\del \overline{z}} &= \frac{1}{z} \left( \frac{\del}{\del x} - i \frac{\del}{\del y} \right)
\end{align*}$$
We can then see that the Cauchy-Riemann equations imply that $\mathcal{O}(U) = \ker \left( \frac{\del}{\del \overline{z}}: \mathcal{E}(U) \to \mathcal{E}(U) \right)$

From now on we write $\del_{x} = \frac{\del}{\del x}$ as a short form.

> [!definition] Components of the Cotangent Space
> Let $U \subset \C$ be open and let $a \in U$. We then define
> $$\begin{align*}
 \mathbb{m}_{a} :&= \set{f \in \mathcal{E}(U) \midline f(a) = 0}\\
 \mathbb{m}_{a}^{2} :&= \set{f \in \mathbb{m}_{a} \midline \del_{x}f(a) = 0 = \del_{y}f(a)}
\end{align*}$$
Then we have the vector space inclusions $$\mathbb{m}_{a}^{2} \subset \mathbb{m}_{a}\subset \mathcal{E}(U)$$

> [!definition] Cotangent Space and Differential
> The quotient vectorspace $$T_{a}^{*}(U) = T_{a}^{*} := \mathbb{m}_{a} / \mathbb{m}_{a}^{2}$$ is called the **cotangent space of $U$ at the point $a$**. Let $f \in \mathcal{E}(U)$. The differential $d_{a}f \in T_{a}^{*}$ of $f$ at $a \in U$ is defined by $$d_{a}f := (f - f(a)) \mod{\mathbb{m}_{a}^{2}}$$

>[!info] Recall
>Recall that a Linear approximation of $f \in \mathcal{E}(U)$ at $a \in U$ is denoted by $$f - f(a) = \innprod{\nabla f(a)}{h} + O(h^{2})$$

> [!theorem] Basis of the Cotangent Space
> Let $U \subset \C$ be open and $a \in U$. Let $z = x +iy$. Then $\set{d_{a}x, d_{a}y}$ is a basis of $T_{a}^{*}$. For $f \in C_{1}(U)$ we have that$$d_{a}f = \del_{x} f(a) d_{a}x + \del_{y} f(a) d_{a}y$$Similarly $\set{d_{a}z, d_{a}\overline{z}}$ is a basis of $T_{a}^{*}$ and $$d_{a}f = \del_{z}f(a) d_{a}z + \del_{\overline{z}} f(a) d_{a} \overline{z}$$
> where we have simply denoted $x, y, z, \overline{z}$ for the functions$$\begin{align*}
x: \C \to \R && x(z) = \RE(z)\\
y: \C \to \R && y(z) = \IM (z)\\\\
z: \C \to \C && z(z) = z\\
\overline{z}: \C \to \C && \overline{z}(z) = \overline{z}\\
\end{align*}$$

^876a59

`\begin{proof}`
1. First we show that $\set{d_{a}x, d_{a}y}$ is a generating set for $T_{a}^{*}$. Let $t \in T_{a}^{*}$ and $\phi \in \mathbb{m}_{a}$ a representative. A Taylor expansion of $\phi$ around $a = u + i v$ yields $$\begin{align*}
\phi &=  \del_{x}\phi(a) (x - u) + \del_{y}\phi(a) (y-v) + \psi\\
	&= c_{1}(x-a ) + c_{2}(y-v) + \psi
	\end{align*}$$where $c_{1}, c_{2} \in \C$ and$\psi \in \mathbb{m}_{a}^{2}$. Going over to cosets yields that $$t = c_{1} d_{a}x + c_{2} d_{a}y$$
1. The set  $\set{d_{a}x, d_{a}y}$ is linearly independent:
   $$\begin{align*}
c_{1}d_{a}x + c_{2}d_{a}y &= 0\\
\implies c_{1}(x-u) + c_{2}(y-v) &\in \mathbb{m}_{a}^{2}
\end{align*}$$
therefore we get $$\begin{align*}
\del_{x}\left( c_{1}(x-u) + c_{2}(y-v) \right)(a) &= 0\\
\del_{y}\left( c_{1}(x-u) + c_{2}(y-v) \right)(a) &= 0
\end{align*}$$which implies $c_{1} = c_{2} = 0$

1. For any $f \in C^{1}(U)$ we have that $$f-f(a) = \del_{x} f(a)(x-u) + \del_{y}f(a) (y-v) + \psi$$
   where $\psi \in \mathbb{m}_{a}^{2}$
   Going over to cosets we get that$$d_{a}f = \del_{x}f(a) d_{a}x + \del_{y}f(a) d_{a}y$$
4. Similarly one shows that $\set{d_{a}z, d_{a}\overline{z}}$ is a basis for $T_{a}^{*}$
`\end{proof}`

The **cotangent bundle $T^{*}U$** is defined by $$T^{*}U = \bigsqcup_{a\in U} T^{*} U = \bigcup_{a \in U} \set{a} \times T_{a}^{*}U$$
and the projection $\pi: T^{*}U \to U, (a, t) \mapsto a$ is continuous.

In general a continuous mapping $\sigma: U \to T^{*}U$ is called a **crosssection of $T^{*}U$ over $U$** if ${} \sigma$ is a right inverse to $\pi$, meaning $$\pi \circ \sigma = id_{U}$$
> [!definition] Differential Forms of the first Order
> let $U \subset \C$ be open. A Cross section $\omega$ of the cotangent bundle $T^{*}U$ is called a **differential form of first order** meaning $$w: U \to T^{*}U$$
> with $\omega(a) \in T_{a}^{*}U$ or $\omega_{a} \in T_{a}^{*}$


> [!example] General Examples for Differential Forms of the first Order
> In general we let $U \subset \C$ and $f \in \mathcal{E}(U)$
> 1. $dx: U \to T^{*}U \quad dx(a) = d_{a}x$ and $dy: U \to T^{*}U \quad dy(a) = d_{a}y$
> 2. $df: U \to T^{*}U \quad df(a) := d_{a}f$
> 3. [[#^876a59]] gives us for two function $f, g \in \mathcal{E}(U)$ that $$w = f dz + g d\overline{z} = \phi dx + \psi dy$$with $\phi, \psi \in \mathcal{E}(U)$ are $C^{\infty}$ idfferential forms of order $1$

Let $V$ be a $\C$-Vector Space with basis $\set{e_{1}, \cdots, e_{n}}$ denote by $\Lambda^{2}V$ the $\C$-Vector Space whose elements are linear combinations of elements of the form $$e_{i} \wedge e_{j}$$ for $i, j \in \set{1, \cdots, n}$. Here the exterior product ${} \wedge: V \times V \to V$ is defined as follows:
1. $e_{i} \wedge e_{j} = - e_{j} \wedge e_{i}$
2. $\left( \lambda e_{i} \right) \wedge e_{j} = e_{i} \wedge \left( \lambda e_{j} \right) = \lambda \cdots (e_{i} \wedge e_{j})$
3. $(e_{i} + e_{j}) \wedge e_{k} = e_{i} \wedge e_{k} + e_{j} \wedge e_{k}$
with $e_{i}, e_{j}, e_{k} \in V$ and $\lambda \in \C$

Now we can set $$\Lambda^{2} V = \span_{\C}\set{v_{1} \wedge v_{2} \midline v_{1}, v_{2} \in V}$$
It is now not difficult to see that $\Lambda^{2}V$ has a basis given by $$\set{e_{i} \wedge e_{j} \midline i < j, i,j = 1, \ldots, n}$$
meaning that $\dim \Lambda^{2}V = \begin{pmatrix}n \\ 2\end{pmatrix}$.

> [!remark]
> $\Lambda^{2}V$ is in general called the Grassmann algebra of a vector space $V$ and we call the “Operator” $\Lambda^{k}$ the exterior power. This construction is equivalent to the tensor product $$V \otimes V / \span\set{v \otimes v \midline v \in V}$$


The $C^{\infty}$-differential forms of order $1$ form a $\C$-Vector space by defining $$\phi + \omega = \left( f dz + g d\overline{z} \right) + \left( h dz + k d \overline{z} \right) = (f + h) dz + (g + k) d \overline{z}$$ and $\lambda \omega = \lambda f dz + \lambda g d \overline{z}$

> [!definition] Differential 2-Forms
> Let $U \subset \C$ be open. A $C^{\infty}$- differential form of order $2$ on $U$ is a mapping $$\omega: U \to \bigsqcup_{a \in U} \Lambda^{2}(T^{*}_{a}U)$$where $\omega(a) \in \Lambda^{2}(T^{*}_{a}U)$.
> Usually $\omega$ is written in the form $$\omega = f(z) dz \wedge d \overline{z} = h(x, y) dx \wedge dy$$ for $f, h \in \mathcal{E}(U)$. Note that the notation is sloppy since the z in f only gets inputted when evaluation $\omega$ at a point.
> 

> [!definition]
> A differential form of order $0$ is a $C^{\infty}$- function  $f: U \to \C$. The $\C$-vector space of all $C^{\infty}$-differential forms of order $k = 0, 1 , 2$ are denoted by $\mathcal{E}^{k}(U)$.

> [!definition]
> Let $U \subset \C$ open and $\omega = f dz + g d \overline{z} \in \mathcal{E}^{1}(U)$. Then the mapping $$d: \mathcal{E}^{1}(U) \to \mathcal{E}^{2}(U) \quad d \omega := df \wedge dz + dg \wedge d \overline{z}$$
> is called the (exterior) derivative of $\omega$.
> As ${} df = \del_{z} f dz + \del_{\overline{z}} f d \overline{z} {}$ and $dg = \del_{z} g dz + \del_{\overline{z}} g d \overline{z}$ we can simplify using the properties of the wedge product we get $$d \omega = \left(\del_{z}g - \del_{\overline{z}}f \right) dz \wedge d \overline{z}$$

> [!example]
> Let $f \in \mathcal{O}(U)$ with $U \subset \C$ open. Then $$\omega = f(z) dz$$ is called a holomorphic differential form of order $1$ on $U$. Now note that we can calculate $$d \omega = - \del_{\overline{z}}f dz \wedge d \overline{z} = 0$$


> [!definition] Closed Forms
> A differential form $\omega \in \mathcal{E}^{1}(U)$ is called closed if $d \omega = 0$

> [!proposition]
> Let $U \subset \C$ be open. Every holomorphic differential form is closed and every closed differential form $\omega = f dz$ is holomorphic.

`\begin{proof}`
Let $f \in \mathcal{E}(U)$ and $\omega = f dz$ then $$d \omega = - \del_{\overline{z}}f dz \wedge d \overline{z}$$ then 
1. $f \in \mathcal{O}(U) \implies \del_{\overline{z}}f = 0 \implies d \omega = 0$
2. For $\omega$ closed: $d \omega = 0 \implies - \del_{\overline{z}}f dz \wedge d \overline{z} = 0 \implies - \del_{\overline{z}}f = 0 \implies f \in \mathcal{O}(U)$
`\end{proof}`


> [!theorem] Cauchy Integral Formula
> Let $U \subset \C$ be open and simply connected (or star-shaped). Let $\omega$ be a holomorphic differential form on $U$ and $\gamma$ a closed curve in $U$ Then, $$\int_{\gamma} f(z) dz = \int_{\gamma}\omega = 0$$where for $f \in \mathcal{E}^1(U)$ with $\omega = \phi dx + \psi dy$ and $$\int_{\gamma} \omega = \int_{0}^{1} \left( \phi \circ \gamma(t) \frac{dx}{dt} + \psi \circ \gamma(t) \frac{dy}{dt} \right)dt$$


We can similarly define the integral over 1-Chains in $U \subset \C$. If $\gamma$ is a 1-Chain in $U$ we simply set
$$\int_{\gamma} \omega = \sum\limits_{i} \alpha_{i} \int_{\gamma_{i}} \omega_{i}$$ where $\omega \in \mathcal{E}^{1}(U)$ and $\gamma = \sum\limits_{i} \alpha_{i} \gamma_{i}$


> [!definition] Homologous Paths
> Let $\gamma$ and $\gamma' \in Z_{1}$ where $\gamma, \gamma' \subset U$. Then $\gamma$ and $\gamma'$ are called homologous relative to $U$, written as $\gamma \sim \gamma'$ if $$\int_{\gamma} \omega = \int_{\gamma'} \omega$$ for all closed $\omega \in \mathcal{E}^{1}(U)$
> 

> [!remark]
> $\sim$ is an equivalence relation on the space of Cycles $Z_{1}$. The Collection of all equivalence classes mod $\sim$ forms the first homology group $H_{1}(U)$ of $U$

A differential form $\omega \in \mathcal{E}^{1}(U)$ is called null homologous if $$\int_{\gamma} \omega = 0$$ for all $\gamma \in Z_{1}$

> [!theorem] Modern Version of Cauchy
> Let $U \subset \C$ open and simply connected / starshaped. Then every holomorphic differential form on $U$ is null homologous.



# Infinite products

Let $\set{c_\nu}_{\nu \in \N} \subset \C$ be a sequence and let $p_{n} := \prod_{\nu = 1}^{n}(1 + c_\nu)$ with $n \in \N$. Then the sequence of $\set{p_{n}}_{n \in \N}$ is called an infinite product  and denoted by $$\prod_{\nu = 1}^{\infty} (1 + c_\nu)$$
> [!definition]
> If $p := \lim_{n \to \infty} p_{n}$ exists and $p \notin \set{0, \infty}$ then $\prod_{\nu = 1}^{\infty} (1 + c_\nu)$ is called convergent. If $p_{n} \to 0$ but no factor is $0$ or $\infty$ then $\prod_{\nu = 1}^{\infty} (1 + c_\nu)$ is called divergent. 
> 

> [!remark]
> If a **fininte** number of factors ia equal to $0$ and if the removal of these factors yields a convergent infinite product we call the product convergent to $0$. This means that a convergent infinite prodcut is $0$ if at least one factor is $0$

As $p_{n+1} = p_{n} (1 + c_{n + 1}) = p_{n} + p_{n} c_{n+1}$ a necessary condition for convergence is that $$\lim_{n\to0} c_{n} = 0$$

> [!theorem]
> We have that: $$\prod_{\nu = 1}^{\infty} (1 + c_{\nu})\text{ converges} \iff  \sum\limits_{\nu=1}^{\infty} \log(1 + c_\nu)$$ 

`\begin{proof}`
Assume wlog. that $1 + c_{\nu} \neq 0$ for all $n \in \N$.
**Sufficiency: (RTL)** Let $S_{n} := \sum\limits_{\nu=1}^{n} \log(1 + c_{\nu})$ then $$\exp(S_{n}) = \prod_{\nu = 1}^{n} (1 + c_{\nu})$$
and as $\exp$ is continous we know that as $S_{n} \to S$ we have that $\exp(S_{n}) \to \exp(S)$ where $S$ is the infinite sum.

**Necessity: (LTR)** Assume $\prod_{\nu = 1}^{\infty} (1+ c_{\nu})$ converges to some value $A$. Then $\forall 0 < \epsilon < 1, \exists n_{0} \in \N$ such that for all $n \geq n_{0}$ we have that for all $m \in \N$ we have that
$$| (1+ c_{n+1}) \cdots (1 + c_{n+m}) - 1| < \epsilon $$
Note that for $|z| < 1$ we have $$log(1 + z) = \sum\limits_{k=1}^{\infty} (-1)^{k+1} \frac{z^{k}}{k}$$
if $|z| < \frac{1}{2}$, then
$$|log(1 + z)| \leq \sum\limits_{k=1}^{\infty} \frac{|z|^{k}}{k} \leq \sum\limits_{k=1}^{\infty} |z|^{k} = \frac{|z|}{1-|z|} < 2 |z|$$
For $|z| < \frac{\epsilon}{2} < \frac{1}{2}$
$$|\log(1+z)| < \epsilon$$
Now set $z := (1+ c_{n+1}) \cdots (1 + c_{n+m}) - 1$ then $$|\log(1 + c_{n+1}) \cdots (1 + c_{n+m})| < \epsilon$$
For $n \geq n_{0}$ and $m \geq 1$.
By the multivaluedness of $\log$ we get that$$\log \left( \prod_{\nu = n + 1}^{n+m} (1 + c_\nu) \right) \neq \prod_{\nu = n + 1}^{n+m}\log \left( 1 + c_\nu \right) $$
But in general we can write 
$$\left| \log \left( \prod_{\nu = n + 1}^{n+m} (1 + c_{\nu}) \right) \right| = \left| \sum\limits_{\nu=n+1}^{n+m} \log(1 + c_{\nu}) + 2\pi i q_{m} \right| < \epsilon$$
where $q_{m} \in \Z$. Now for $n \geq n_{0}$ and $m = 1$
$$| \log( 1+ c_{n+1}) + 2 \pi i q_{1} | < \epsilon$$
As $|\log(1 + c_{\nu})| < \epsilon$ we get that $q_{1} = 0$.
By inductively iterating over these $q_{m}$ we can find out that all the $q_{m} = 0$
`\end{proof}`

> [!definition]
> The product $\prod_{\nu = 1}^{\infty} (1 + c_{\nu})$ is called absolutely convergent if and only if $\sum\limits_{\nu=1}^{\infty} \log(1 + c_\nu)$ is absolutely convergent.

> [!theorem]
> $$\prod_{\nu = 1}^{\infty} (1 + c_{\nu}) \text{ is absolutely convergent} \iff \sum\limits_{\nu = 1}^{\infty} c_{\nu}\text{is absolutely convergent}$$

`\begin{proof}`
A necessary condition for the convergence of $\prod_{\nu = 1}^{\infty} (1 + c_{\nu})$ or $\sum\limits_{\nu=1}^{\infty} \log(1 + c_{\nu})$ is $\lim_{n\to \infty} c_{n} = 0$.
Hence there exists $n_{0} \in \N$ such that for all $n \geq n_{0}$ we have $|c_{n}| < \frac{1}{2}$. Assume that $c_{n} \neq 0$ for all $n \in \N$ then
$$\left| 1 - \frac{\log(1 + c_{n})}{c_{n}} \right| = \left| \sum\limits_{k = 1}^{\infty} (-1)^{k + 1} \frac{c_{n}^{k}}{k+1} \right| \leq \frac{1}{2} \sum\limits_{k=1}^{\infty} |c_{n}|^{k} = \frac{1}{2} \frac{|c_{n}|}{1+|c_{n}|} < \frac{1}{2}$$
Thus 
$$\frac{1}{2} |c_{n}| \leq |\log(1 + c_{n})| \leq \frac{3}{2}|c_{n}|$$
Note that this also holds for $c_{n} = 0$. Therefore by the sandwich theorem the sum $\sum\limits_{\nu=1}^{\infty} \log(1 + c_\nu)$ converges absolutely if and only if $\sum\limits_{\nu=1}^{\infty} |c_{\nu}|$ converges.
`\end{proof}`


> [!remark]
> 1. The given innequality also holds for $c_{n}$ replaced by $|c_{n}|$ meaning that $$\prod_{\nu = 1}^{\infty} (1 + |c_{\nu}|) \text{ converges}\implies \prod_{\nu = 1}^{\infty} (1 + c_{\nu}) \text{ converges absolutely}$$
> 2. $\prod_{\nu = 1}^{\infty} (1 + c_{\nu})$ can converge without $\sum\limits_{\nu=1}^{\infty} c_{\nu}$ converging, like in the example $c_{2\nu-1} := \nu^{-\frac{1}{2}}$ and $c_{2\nu} = -\nu^{-\frac{1}{2}} + v^{-1}$ then we have that $$\sum\limits_{\nu = 1}^{\infty} c_{\nu} = \sum\limits_{\nu=1}^{\infty} \frac{1}{\nu}$$ diverges. But we have that $$(1+ c_{2\nu-1}) (1 + c_{2\nu}) = 1 + \nu^{-\frac{3}{2}}$$ hence, $\prod_{\nu = 1}^{\infty} (1 + c_{\nu}) = \prod_{\nu = 1}^{\infty} (1 + \nu^{- \frac{3}{2}})$ converges because $\sum\limits_{\nu=1}^{\infty} \nu^{- \frac{3}{2}}$ converges






Every rational fucntion ${} R: \C \to \C$ can be written as $$R(z) = \sum\limits_{\nu=0}^{r} \sum\limits_{\mu=1}^{k_{r}} \frac{a_{\nu \mu}}{(z-z_{\nu})^{\mu}} + \sum\limits_{t=0}^{\gamma} b_{t} z^{t}$$namely in its partial fraction decomposition.

Some justified questions about this fact are:
1. Can every $f \in \mathcal{M}(\C)$ be represented as a sum of principle parts?
2. Given a countably infinite number of points in $\C$, does there exists an $f \in \mathcal{M}(\C)$ which has these points as its poles (and is holomorphic everywhere else)?

Let us first consider the case where I have a finite set of points. Let $Z = \set{z_{\nu} \midline \nu = 1, \ldots, r} \subset \C$ and let $$h_{\nu(z)}:= \sum\limits_{\mu=1}^{k_{\nu}} \frac{a_{\nu \mu}}{(z-z_{\nu})^{\mu}}$$ be a finite principal part relative to $Z$. Then
$$f(z) = \sum\limits_{\nu = 1}^{r} h_{\nu}(z) + g(z) \quad g \in \mathcal{O(\C)}$$
is such a meromorphic function. Convergence becomes a question in the situation where we have infinitely many elements in $Z$.

> [!theorem] Mittag-Leffler
> Let $\set{z_{\nu} \midline \nu \in \N} \subset \C$ with $0 \leq |z_{0}| < |z_{1}| < \cdots < |z_{n}| \to \infty$. Assume that to each $z_\nu$ there corresponds a finite principle part $h_{\nu}$. Then there exists an $f \in \mathcal{M}(\C)$ whose poles are $\set{z_\nu}$ and whose principle parts are $h_{\nu}$. Moreover $f$ is holomorphic on $\C \setminus \set{z_{\nu}}$. If $f_{1}$ and $f_{2}$ are two such function then $f_{1} - f_{2}$ is an entire function.

`\begin{proof}`
If $z_{0} = 0$, discard it (for the moment.) Let $\epsilon_{\nu} > 0$ for $\nu \in \N_{0}$, such that $$\sum\limits_{\nu=0}^{\infty}\epsilon_{\nu} < \infty$$
Choose a sequence $r_\nu$ with 
1. $0 < r_{1} < \ddots < r_{n} \to \infty$ for $n \to \infty$
2. $r_{\nu} < |z_\nu|$
For some $\nu \in \N$ let 
$$h_{\nu} (z) = \sum\limits_{\mu=1}^{k_{\nu}} \frac{a_\nu\mu}{(z-z_\nu)^\mu}$$
denote the principal parts.
All $h_{\nu}$ are holomorphic in a neighbourhood of $z = 0$ and
$$h_{\nu}(z) = \sum\limits_{n=0}^{\infty} b_{\nu n} z^{n}$$
Furthermore all these series converge uniformly in the disks $K_{0}(r_{\nu)}$

Now choose an $m_{\nu}$ large neough such that 
$$g_{\nu}(z) = \sum\limits_{n=0}^{m_{\nu}} b_{\nu n} z^{n}$$
satisfies that
$$|h_{\nu}(z) - g_{\nu}(z)| < \epsilon_\nu$$
As all $g_{\nu}$ are polynomials, $g_{\nu} \in \mathcal{O}(\C)$. Set $$g_{\nu} (z_{0}) = 0$$

> [!claim]
> We now claim that $$f := \sum\limits_{\nu=0}^{\infty}(h_{\nu} - g_{\nu})$$
> converges on $\C \setminus \set{z_{nu}}$
> 

It suffices to show that $f$ converges on any disk $K_{0}(r)$ for $r > 0$. Choose an $r_{N}$ such that $r \leq r_{N}{}$, then $$R_{2} := \sum\limits_{\nu=N}^{\infty} h_{\nu} - g_{\nu}$$
converges on $K_{0}(r)$ and the functions $h_{\nu}, - g_{\nu}$ are holomorphic there. Thus $R_{2} \in \mathcal{O}(K_{0}(r))$.

The remaining series $$R_{1} := \sum\limits_{\nu=0}^{N-1} (h_{\nu}- g_\nu)$$ is holomorphic on $K_{0}(r) \setminus \set{z_{\nu}\midline \nu < N}$ . If $z_{k} \in K_{0}(r)$ then $k < N$ and $R_{1} - h_{k}$ is holomorphic in $z_{k}$.

Hence $f := R_{1} + R_{2}$ has the required properties in $K_{0}(r)$. This holds for all $r > 0$ and proves the claim. The second statement is clear.
`\end{proof}`

> [!idea]
> The intuition here is that there are a <u>**fuck load**</u> of meromorphic functions


# Weierstrass Factorization Theorem


> [!definition]
> Let $G \subset \C$ and $f: G \to G$. The collection of all non-vanishing, meaning nowhere zero, holomorphic functions on $G$ is denoted by $\mathcal{O}^{*}(G)$

> [!proposition]
> $(\mathcal{O}^{*}, \cdot)$ is an abelian group

`\begin{proof}`
Exercise
`\end{proof}`

> [!lemma]
> Let $f \in \mathcal{O}^{*}(\C)$. Then $\exists g \in \mathcal{O}(\C)$ such that $$f = \exp \circ g$$
> 

`\begin{proof}`
Given that $f \in \mathcal{O}^{*}(\C)$ we know that $\frac{f'}{f} \in \mathcal{O}(\C)$ meaning that 
$$\frac{f'}{f}(z) = \sum\limits_{\nu=0}^{\infty} a_{v} z^{\nu} \quad a_{\nu}\in \C, z \in \C$$
Now let $g(z) = g(0) + \sum\limits_{\nu=0}^{\infty} \frac{a_{\nu}}{\nu+1} z^{\nu+1}$ where $g(0)$ is determined later.
Now since $g \in \mathcal{O}(\C)$ and $g' = \frac{f'}{f}$ we can show that 
$$\left( \frac{\exp \circ g}{f} \right)' = \left( \frac{\exp \circ g}{f^{2}} \right) \left[ \frac{f'}{f} f - f'  \right] = 0$$
thus $\frac{\exp \circ g}{f} = c$ with $c \in \C$. 
Now choose $g(0) = \ln \circ f(0)$, then we have
$$\frac{\exp \circ g(0)}{f(0)} = \frac{f(0)}{f(0)} = 1$$
finally implying that
$$f = \exp \circ g$$
`\end{proof}`

> [!definition]
> Let $p \in \N_{0}$. The weierstrass primary factor is defined by
> $$E_{p}(z) = E(p, z) = \begin{cases}1-z &\quad p = 0 \\ (1-z) \exp \left( z + \frac{z^{2}}{2} + \ldots + \frac{z^{p}}{p} \right) &\quad p \geq 1 \end{cases}$$

> [!theorem] Weierstraß Factorization Theorem
> Let $\set{a_{n}}$ be a sequence in $\C$ with $|a_{n}| \to \infty$ (keep in mind that $a_{n}$ dont have to be distinct but can be repeated finitely many times). Then there exists $f \in \mathcal{O}(\C)$ with $f(a_{n}) = 0, \forall n \in \N$. 
> 
> If $f(0) = 0$ (with a zero of order $m$) then $f$ is given directly by
> $$
> \begin{align*}
f(z) &= z^{m} e^{g(z)} \prod\limits_{n=1}^{\infty} E_{p_{n}} \left( \frac{z}{a_{n}} \right) \\
 &= z^{m} e^{g(z)} \prod\limits_{n=1}^{\infty} (1- \frac{z}{a_{n}}) \exp \left[ \frac{z}{a_{n}} + \ldots + \frac{1}{p_{n}} \left( \frac{z}{a_{n}} \right)^{p_{n}}\right]
\end{align*}
> $$
> where $g \in \mathcal{O}(\C)$ and $\set{p_{n}}$ is a sequence of non-negative integers with
> $$\sum\limits_{n=1}^{\infty} \left( \frac{r}{|a_{n}|} \right)^{p_{n} + 1} < \infty$$
> for each $r > 0$ 



To prove this we require the following Lemma first:
> [!lemma]
> Let $p \in \N_{0}$ Then
> 1. $|E_{p}(z) -1| \leq |z|^{p+1}$ if $|z| \leq 1$
> 2. $| \log E_{p}(z)| < \frac{k}{k-l} |z|^{p+1}$ if $|z| < \frac{1}{k}$ and $k > 1$
> 3. $|E_{p}(z)-1| < 6 |z|^{p+1}$ if $|z| < \frac{1}{2}$

`\begin{proof}`
1. Expand $E_{p}$ into a power series: 
$$E_{p}(z) = 1 + \sum\limits_{k=1}^{\infty}a_{k} z^{k}$$
where $a_{k} \in \R$. Then 
$$E'_{p}(z) = \sum\limits_{k=1}^{\infty}k a_{k}z^{k-1}$$
Using the definition of $E_{p}$ we can also explicitly calculate that 
$$E'_{p}(z) = \left[ (1-z) (1 + z + \ldots + z^{p-1}) - 1) \right]\exp \left( z + \frac{z^{2}}{2} + \ldots + \frac{z^{p}}{p} \right) = \left[(1-z^{p}) -1 \right] exp \left( z + \frac{z^{2}}{2} + \ldots + \frac{z^{p}}{p} \right)$$
Comparing coefficients of (1) and (2):
$$a_{1} = \ldots = a_{p} = 0 \quad a_{k} \leq 0 \quad \forall k \geq p + 1$$
Thus for $|z| < 1$
$$|E_{p}(z)- 1| = \left| \sum\limits_{k=p+1 }^{\infty} a_{k}z^{k} \right| = |z|^{p+1} \left|\sum\limits_{k=0}^{\infty} a_{p+1+k} z^{k} \right| \leq |z|^{p+1} \sum\limits_{k=0}^{\infty} |a_{p+1+k}| = - |z|^{p+1} \sum\limits_{k=0}^{\infty} |a_{p+1+k}| = |z|^{p+1}$$
because $$0 = E_{p}(1) = 1 + \sum\limits_{k=p+1}^{\infty} a_{k}$$ and so $\sum\limits_{k} |a_{k}| = -\sum\limits_{k} a_{k} = 1$ 

1. ${} \log E_{p}(z)| = | \log (1 - z) + z + \ldots + \frac{z^{p}}{p} | = {}$
`\end{proof}`



# Modern Versions of Weierstrass and Mittag-Leffler
> [!definition] Divisor
> Let $G \subset \C$. A Mapping $D: G \to \Z$ is called a **divisor on $G$** if the set $\set{z \midline D(z) \neq 0}$ is discrete and closed

Note that this definition gives us a nice equivalence for being a divisor since $D: G \to \Z$ is a divisor if and only if for all compact $K \subset G$ there exist only finitely many $z \in K$ with $D(z) \neq 0$

Our Primary example is a well-known function
> [!example] Order at a Point
> Let $G \subset \C$, $f \in \mathcal{M}(G) \setminus \set{0}$. For $z \in G$ we define
> $$ord_{z}f := \begin{cases}0,& \text{if } f \text{ is holomorphic at } z, f(z) \neq 0\\ k,& \text{if } f \text{ has a zero of order } k \text{ at }z\\-k,& \text{if } f \text{ has a pole of order } k \text{ at }z\end{cases}$$
> The mapping $D_{f}: G \to \Z, D_{f}(z) := ord_{z}f$ is a divisor on $G$. It is called the divisor of $f$ and is denoted by $div(f)$ or $(f)$

> [!definition] Principle Divisor
> A divisor $D$ is called a **principal divisor** is there exists a $f \in \mathcal{M}(G) \setminus \set{0}$ such that $$D = (f)$$

> [!proposition]
> The set of divisors on $G$ forms an abelian group under the pointwise addition of functions. This group is denoted by $Div(G)$

Note that under some nice conditions on $G$, namely compactness we can show that $Div(G)$ is simply the free abelian group generated by the points of $G$.

This informs some notation in general by writing
$$D = \sum\limits_{z \in G} D(z) \cdot z$$
where the multiplication dot is simply notation that only makes sense in the compact case but can always be written.

> [!example]
> Principal Divisor on $G$:
> $$D = (f) = \sum\limits_{z\in G} ord_{z}f \cdot z$$

> [!example]
> Let $$f(z) = \frac{\prod_{\mu=1}^{\tau} (z-z_\mu)^{m_{\mu}}}{\prod_{\nu=1}^{s} (z-\zeta_\nu)^{n_{\nu}}}$$
> for $z_{\mu}\neq \zeta_\nu$ and $m_{\mu}, n_{\nu} \in \N$. For this we can consider the principal divisor
> $$(f) = \sum\limits_{\mu} m_{\mu} \cdot z_{\mu} - \sum\limits_{\nu} n_{\nu} \zeta_{\nu}$$

> [!definition] Positivity of Divisors
> A divisor $D$ on $G$ is called positive if $$D(z) \geq 0$$ for all $z \in G$

> [!proposition]
> The principal divisors form a subgroup of $Div(G)$. This subgroup is denoted by $HDiv(G)$

`\begin{proof}`
Exercise!
`\end{proof}`

> [!definition] Class Groups
> The factor group 
> $$\faktor{Div(G)}{HDiv(G)}$$
> is called the **divisor class group**

We can now finally state the modern version of Weierstraß

> [!theorem] Modern Version of the Weierstrass Factorization Theorem
> On $G = \C$ every divisor is a principal divisor. Namely the divisor class group of $\C$ is trivial.


---
Working towards stating Mittag-Leffler we also need to start with a small definition

> [!definition]
> The set of all polynomials with complex coefficients is denoted by $\C[z]$

We can now express our principal parts in the following way.
Let $h^{*} \in \C[z]$ with $h^{*}(0) = 0$. For $z_{\nu}\in \C$ we define $$h_{\nu}(z) = h^{*} \left(\frac{1}{z-z_{\nu}} \right)$$

> [!definition]
> Let $G \subset \C$ and let $\set{z_{\nu} \midline \nu \in \N} \subset \C$ be discrete. Let $h_{\nu}$ be defined as above. Then
> $$\mathcal{H} = \set{(z_{\nu}, h_{\nu)}\midline \nu \in \N}$$
> is called a **principal part distribution**

Note that every $f \in \mathcal{M}(G) \setminus \set{0}$ defines a principal part distribution $\mathcal{H}(f)$.

Now the modern version of Mittag-Leffler is stated as

> [!theorem] Modern Version of Mittag-Leffler
> For every principal part distribution $\mathcal{H}$ on $\C$ there exists a $f \in \mathcal{M(\C) \setminus \set{0}}$ such that $\mathcal{H} = \mathcal{H}(f)$


# The Riemann Mapping Theorem

> [!definition] Conformal Mapping
> Let $U \subset \C$ open and $f: U \to \C$ a function. $f$ is called conformal or a conformal mapping if 
> $$f \in \mathcal{O}(U) \text{ and } f' \neq 0$$

The concept of confromal mapping is geometry a set of maps that preserve angles. This can be computed and will result in the same properties as the above version of conformality.

> [!definition] Exauhstion by Compact Subsets
> Let $\set{K_{\nu} \midline \nu \in \N}$ be a sequence of non-empty compact subsets of open $U \subset \C$. $\set{K_\nu}$ is called an exauhstion of $U$ by compact subsets if
> 1. $K_{\nu} \subset K_{\nu + 1}$
> 2. $U = \bigcap_{\nu\in \N} K_{\nu}$

> [!example]
> Let $U:= \set{ z \in \C \midline |z| < 1}$ and $K_{\nu} := \set{z \midline |z| \leq 1 - \frac{1}{\nu}}$ then $\set{K_\nu}$ is an exhaustion of $U$.

> [!proposition]
> For every open subset $U$ of $\C$, there exists an exhaustion.

`\begin{proof}`
Let $$\mathcal{R} := \set{R \subset U \midline  R = [a, b] + i[c, d], a < b, c <d, a, b, c, d \in \mathbb{Q}}$$
Then $\mathcal{R}$ is countable, so we can enumerate $\mathcal{R} = \set{ R_{\nu} \midline \nu \in \N}$
The sequence $K_{\nu}$ is defined inductively as follows:
Let $K_{1} = R_{1}$, suppose $K_{\nu-1}$ has been chosen. Select a $x \geq \nu$ with 
$$K_{\nu-1} \subset \bigcup_{\alpha=1}^{x} R_\alpha$$
This is possible since $K_{\nu-1}$ is compact and $R_\alpha$ is an open cover of $K_{\nu-1}$.
Then Set $K_{\nu}$ = $\bigcup_{\alpha=1}^{x} R_\alpha$

Then $\set{K_{\nu}}$ is an exhaustion.
`\end{proof}`


> [!definition] Compact Norm
> Let $U \subset \C$ be open and $f \in \mathcal{O}(U)$. For every compact $K \subset U$ define
> $$p_{K}: \mathcal{O}(U) \to \R, \quad p_{K} (f) = sup_{z\in K} |f(t)|$$

> [!proposition]
> $p_{K}$ is a semi-norm on $\mathcal{O}(U)$, meaning we have
> 1. $p_{K}(f) \geq 0$
> 2. $p_{K}(\lambda f) = |\lambda| p_{K}(f)$ for $\lambda \in \C$
> 3. $p_{K}(f + g) \leq p_{K}(f) + p_{K}(g)$

`\begin{proof}`
Straight Forward.
`\end{proof}`

> [!definition]
> A subset $V \subset \mathcal{O}(U)$ and $U \subset \C$ open is called a neighbourhood of $f \in \mathcal{O}(U)$ if and only if there exists a compact $K \subset U$ and an $\epsilon > 0$ such that 
> $$V_{K, \epsilon} = \set{ g \in \mathcal{O}(U) \midline p_{K}(f-g) < \epsilon} \subset V$$
> $V \subset \mathcal{O}(U)$ is called open if and only if $V$ is a neighbourhood of for every $f \in V$.


> [!proposition]
> Every $f \in \mathcal{O}(U)$ has a countable collection of neighbourhoods $\set{V_{\nu} \midline \nu \in \N}$ with the property that every neighbourhood of $f$ contains at least one $V_{\nu}$ every $f \in \mathcal{O}(U)$ has a countable fundamental system of neighbourhoods.

^4683cc

`\begin{proof}`
Exercise.
`\end{proof}`

> [!definition] Compact Convergence
> A sequence $\set{f_{\nu}} \subset \mathcal{O}(U)$ is called compactly convergent if for all compact $K \subset U$ we have 
> $$\lim_{\nu \to \infty} p_{k}(f - f_{\nu}) = 0$$ 


> [!definition] Topology of $\mathcal{O}(U)$
> The system of all open subsets of $\mathcal{O}(U)$ defines the topology of compact convergence on $\mathcal{O}(U)$. Moreover the operations
> $$+: \mathcal{O}(U) \times \mathcal{O}(U) \to \mathcal{O}(U) \quad (f, g) \mapsto f + g$$
> $$\cdot : \C \times \mathcal{O}(U) \to \mathcal{O}(U) \quad (\lambda, g) \mapsto \lambda \cdot g$$
> are continuous mappings, $(\mathcal{O}(U), +, \cdot)$ becomes a topological vector space.

We can also see that $\mathcal{O}(U)$ is metrizable by the metric
$$d(f, g) := \sum\limits_{\nu=1}^{\infty} \frac{1}{2^{\nu}} \frac{p_{K_{\nu}}(f-g)}{1 + p_{K_{\nu}}(f - g)}$$



Note that we can also define a cauchy sequence in $\mathcal{O}(U)$. A sequence $\set{f_{\nu}} \subset \mathcal{O}(U)$ is called a Cauchy sequence if and only if for all $\epsilon > 0$ and all compact $K \subset U$ there exists $n_{0} \in \N$ such that
$$\forall \nu, \mu \geq n_{0} \quad  p_{K}(f_{\nu} - f_{\mu}) < \epsilon$$

Using this we can see that $\mathcal{O}(U)$ is complete (See Problem Set 6)

> [!definition]
> - A subset $A \subset \mathcal{O}(U)$ is called closed if $\mathcal{O}(U) \setminus A$ is open
> - $A$ is called bounded if for all compact $K \subset U$ the set $p_{K}(A) = \set{p_{K}(f) \midline f \in A}$ is bounded in $\R$ meaning $$A \subset \mathcal{O}(U) \text{ is bounded} \iff \forall \text{ compact } K \subset U \exists c \in \R: \forall f \in A, z \in K |f(z)| \leq c$$


> [!theorem] Montell
> $A \subset \mathcal{O}(U)$ compact if and only if $A$ is closed and bounded.

`\begin{proof}`
“$\Rightarrow$”:
Let $A$ be compact. Then $p_{K}: \mathcal{O}(U) \to \R$ is continuous (SHOW THIS) thus $p_K(A)$ is compact and thus bounded and closed.

“$\Leftarrow$”:
Let $A$ be closed and bounded. By [[#^4683cc]] it suffices to show that: $A$ is sequentially compact.
Let $\set{f_{\nu}} \subset A$ and choose a dense set $\set{z_{\nu}} \subset U$ (i.e. using an enumeration of $\left( \mathbb{Q} + i \mathbb{Q} \cap U \right)$ 

As $\set{f_{\nu}(z_{1})}$ is bounded in $\C$ there exists a subsequence $\set{f_{\nu_{1}}}$ of $\set{f_{\nu}}$ such that $\set{f_{\nu_{1}}(z_{1})}$ converges in $\C$. In general there exists for each $k \in \N$ a subsequence $\set{f_{\nu_{k}}}$ of $\set{f_{\nu_{k-1}}}$ such that ${} \set{f_{\nu_{k}}(z_{k})} {}$ converges in $\C$.
Now let $g_{\nu} = f_{\nu_{\nu}}$. Then $\set{g_{\nu}}\subset \set{f_{\nu}}$ and $\lim_{\nu \to \infty} g_{\nu}(z_{\mu})$ exists in $\C$ for all $\mu \in \N$.

> [!lemma]
> Let $A \subset \mathcal{O}(U)$ be bounded and $K \subset U$ compact. Then  there exists $c, r > 0$ such that
> $$|z-w| < r \implies |f(z) - f(w)| \leq c |z-w|$$

`\begin{proof}`
There exists a compact $K^{*} \subset U$ and $r > 0$ such that for all $w \in K$
$$\set{z \in \C \midline |z-w| < 2r} \subset K^{*}$$
Let $c := \frac{1}{r} \sup p_{K^{*}}(A)$.Let $z, w \in K$ with $|z-w| \leq r$ then

$$f(z)- f(w) = \int_{0}^{1} f'(w + t(z-w))dt \quad (z-w)$$
Then we have for $v = w + t(z-w)$ and $0 \leq t \leq 1$ then $B_{r} := \set{\lambda \in \C \midline |\lambda - v| \leq r} \subset K^{*}$

Applying the Cauchy Integral Formula for $f'$ implies $|f'(v)| \leq c$ (SHOW THIS). Thus 
$$\left| \int_{0}^{1} f'(w + t (z-w))dt \right| \leq c$$
`\end{proof}`

Now choose $r$ and $c$ as in the Lemma. Let $\eta = \min \set{r, \frac{\epsilon}{3c}}$. Then by the density of $\set{z_{\nu}}$ and the compactness of $K$ there exists $k_{0} \in \N$ such that for all $z \in K$ we can find $k \leq k_{0}$ with $$|z - z_{k}| < \eta$$
For this $k$ there exists $n_{0} \in \N$ such that $$|g_{n}(z_{k})  - g_{m}(z_{k})| < \frac{\epsilon}{2}$$ for all $m, n \geq n_{0}, k \leq k_{0}$.

For an arbitrary $z \in K$, $|z-z_{k}| < \eta$ for $k \leq k_{0}$, there holds
$$|g_{n(z)}- g_{m}(z)| \leq |g_{n}(z) - g_{n}(z_{n})| + |g_{n}(z_{k}) - g_{m}(z_{k})| + |g_{m}(z) - g_{m}(z_{k})| < \epsilon$$
thus $p_{K}(g_{n} - g_{m}) < \epsilon$ for any $m, n \geq n_{0}$.
Thus $\set{g_{n}}$ is a cauchy sequence in $\mathcal{O}(U)$ and $\lim_{n \to \infty} g_{n} = g \in \mathcal{O}(U)$. $A$ closed implies that $g \in A$.
`\end{proof}`

> [!definition] Biholomorphical Equivalency
> ${} G, G^{*} \subset \C {}$ be regions. $G$ and $G^{*}$ are call **biholomorphically equivalent** if there exists biholomorphic $f: G \to G^{*}$

> [!definition] Univalency
> Let $G \subset \C$ and $f \in \mathcal{O}(G)$. $f$ is called **univalent** or **schlicht** whenever $f$ is injective.

> [!remark]
> The open mapping theorem implies that if $G$ is a region and $f: G \to \C$ univalent , then $f(G)$ is also a region. Moreover, the mapping $G \to f(G)$ is biholomorphic. 

> [!theorem] Hurwitz Mapping Theorem
> Let $G \subset \C$ and $\set{f_\nu}$ a sequnce of univalent functions on $G$. If $\set{f_\nu}$ converges compactly to an $f \in \mathcal{O}(G) \setminus \C$ then $f$ is univalent.

`\begin{proof}`
Asssume that the limit $f$ is not univalent, meaning there exist $u, v \in G$ such that $u \neq v$ but $f(u) = f(v)$. Without loss of generality we may assume $f(u) = f(v) = 0$. Choose $r > 0$ small enough such that the punctured disk $K_{r}(0) \subset G$ has no other zeroes in it except for $u$ (this can be done since zeroes are isolated). Then,

$$$

\frac{1}{2 \pi i} \int\_{\del K} \frac{f'(\zeta)}{f(\zeta)} d \zeta \in \N

$$$
equals the order of the zero at $u$.

As $\set{f_\nu}$ converges uniformly to $f$, $\set{f'_{\nu}}$ converges to $f'$. This means there exists a $\nu_{0} \in \N$ such that for all $\nu > \nu_{0}$ we have
1. $f_\nu$ has no zero on $\del K$
2. $\int_{\del K} \frac{f_\nu'(\zeta)}{f_\nu(\zeta)} d \zeta \neq 0$

By the Cauchy Integral Formula this implies that $\forall \nu > \nu_{0}$, $f_\nu$ has at least one zero on $int(K)$. Similartly there exists $\nu_{1} \in \N$ and a nbhd $V \subset G \setminus K$ of $v$ such that $f_{\nu}$, $\nu \geq \nu_{1}$ has a zero in $V$. This is a contradiction fo $f_\nu$ being univalent.
`\end{proof}`


> [!lemma] Lemma of Schwarz
> Let $D = \set{z \in \C \midline |z| < 1}$. let $f: D \to D$ be holomorphic with $f(0) = 0$. Then,
> 1. $|f(z)| \leq |z|$ for all $z \in D$
> 2. $|f'(0)| \leq 1$
> If $|f(z)| = |z|$ for one $z \in D$ and $z \neq 0$ or if $|f'(0)| = 1$ we have that there exists $\lambda \in \C$ with $|\lambda| = 1$ and $f(z) = \lambda z$ for all $z \in D$

`\begin{proof}`
Let $$g: D \setminus \set{0} \to D, \quad z \mapsto \frac{f(z)}{z}$$ then we have firstly that $g \in \mathcal{O}(D \setminus \set{0})$ and $\lim\limits_{z \to 0} g(z) = f'(0)$ (by L’hopital). By Riemann’s Removable Singularity Theorem if 
$$g(0):= f'(0) \implies  g \in \mathcal{O}(D)$$
Let $0 < r < 1$, the maximum modulus thereom implies that 
$$|g(z)| = \left| \frac{f(z)}{z} \right| \leq g(\zeta) = \left| \frac{f(\zeta)}{\zeta} \right| \leq \frac{1}{r}$$ for all $z \in K_{r}$ and $\zeta \in \del K_{r}$ 

For $r \to 1$ we get $|g(z)| \leq 1$ for all $z \in D$. If there exists $z \in D \setminus \set{0}$ such that $|f(z)| = |z|$, then $|g(z)| \leq 1$ on $D$, the maximum modulus principle implies that there exists $\lambda \in \C$ with $|\lambda| = 1$ such that $g(z) = \lambda$.

If $|f'(0)| = 1$ then $|g(0)| = 1$ and as above there exists a $\lambda \in \C$ with $|\lambda| = 1$ such that $g(z) = \lambda$
`\end{proof}`

KNOW THIS THEOREM
> [!theorem] Riemann Mapping Theorem
> Every simply connected region $G \subset \C$ (proper subset) is biholomorphic to the unit disk $D$

`\begin{proof}`
We first consider the special case that $0 \in G \subset D$. In this case we let $$A= \set{f \in \mathcal{O}(G) \midline f(G) \subset D, f \text{ is univalent}, f(0) = 0, |f'(0)| \geq 1}$$
The first claim can be shown using montel ans show that $A$ is compact in $\mathcal{O}(G)$. This holds since we have boundedness since $f(G) \subset D$, so all that we have to show is sequential closedness.
Let $\set{f_{\nu}} \subset A$ with $f := \lim\limits_{\nu \to \infty} f_{\nu}\in \mathcal{O}(G)$ (meaning the compact limit), then we can also see that $f(0) = 0$ and $|f'(0)| = \lim\limits_{\nu \to \infty} |f_{\nu}'(0)| \geq 1$.
As $f$ is not constant, $f(G) \subset \overline{D}$ is open and thus $f(G) \subset D$. By Hurwitz, $f$ is univalent and thus $f \in A$, so montel is shown.

The mapping $f \mapsto |f'(0)|$ is continuous and by the compactness of $A$ we know that it must have a maximum, so there exists a $g \in A$ such that $$|g'(0)| = \sup_{f \in A} |f'(0)| \geq 1$$
We want this $g$ to be our candidate for a function, so we now want to show that $g(G) = D$ i.e $g$ is biholomorphic (namely that it is surjective).
First note that for $a \in D$ the mapping $$\phi: D \to D, \quad \phi(z) = \frac{z-a}{\overline{a}z - 1}$$
is biholomorphic with $\phi(a) = 0$ and $\phi^{-1} = \phi$.
We can allso see that assuming $a \in D \setminus g(G)$ then $a \neq 0$ and there exists a $b \neq 0$ with $a = b^{2}$

Now we define $\phi, \psi, p \in \mathcal{O}(D)$ and $q \in \mathcal{O}(G)$ by
$$$

\begin{align\*}
\phi(z) &= \frac{z-a}{\overline{a}z -1} & p(z) &= \phi \left( \psi(z)^{2} \right) \\
\psi(z) &= \frac{z-b}{\overline{b}z -1} & q(z) &= \phi(g(z))
\end{align\*}

$$$
Then we have that
$$p(0) = \phi \left( \psi(0)^{2} \right) = \phi(b^{2}) = \phi(a) = 0$$
and $p(D) \subset D$ and, since $p$ is not univalent and $|p'(0)| < 1$ by schwarz.

We also get that
$$q(0) = \phi \left( g(0) \right) = \phi(0) = a$$
$q$ is univalent as a composition of univalent maps thus $q(G) \subset \C \setminus \set{0}$ as ${} a \notin g(G) {}$ and $q(G)$ is simply connected. Therefore there exists a holomorphic function $h$ on $q(G)$ with $h^{2} = q$ and $h(0) = b$ i.e $h(G) \subset D$ and $h$ is univalent as $q$ is. Hence,
$$f:= \psi \circ h \in \mathcal{O}(G)$$
is univalent, $f(G) \subset D, f(0) = \psi(h(0)) = \psi(b) = 0$.
Using $$\phi \circ \psi = \psi \circ \psi = id_{D}$$
one has
$$\begin{align*}
p(f(z))&= \psi
\end{align*}$$

`\end{proof}`



# Sheaves

> [!definition] Pre-Sheaves
> Given a Topological space $(X, \tau)$ a pre-sheaf of abelian groups on $X$ is a pair $(\mathcal{F}, \rho)$ consisting of
> 1. Family of abelian groups $$\mathcal{F} := \set{\mathcal{F}(U) \midline U \in \tau}$$
> 2. A family of group homomorphisms $\mathcal{F}(U) \to \mathcal{F}(V)$ $$\rho := \set{\rho^{U}_{V} \midline U, V \in \tau, V \subset U}$$ such that 
> 	- $\rho^{U}_{U} = id_{\mathcal{F}(U)}$
> 	- $\rho^{U}_{W} = \rho^{V}_{W} \circ \rho^{U}_{V}$ for all ${} U, V, W \in \tau$
> and we call the maps $\rho$ restrictions on $\mathcal{F}$

If I have $U \subset V$ open in $X$ and $S \in \mathcal{F}(V)$ one usually writes $S \mid_{U}$ instead of $\rho^{V}_{U}(S)$. Elements of $\mathcal{F}(V)$ are called sections of $\mathcal{F}$ over $V$. The notation for these sections is $\Gamma(V, \mathcal{F})$

- Instead of $(\mathcal{F}, \rho)$ one writes $\mathcal{F}$.
- Given $f \in \mathcal{F}(U)$, instead of writing $\rho^{U}_{V}(f)$ we write $f \mid_{V}$ (already hinting at our use of sheaves as the sheaves of holomorphic functions on open sets)
- $\rho^{U}_{U}(f) = id_{\mathcal{F}(U)}$ is the same as $f \mid_{U} = f$
- The composition of restriction also works as we expect.

> [!example] Examples of Pre-Sheaves
> 1. Let $U \in \tau$ be arbitrary and let $\mathcal{C}(U) := \set{f: U \to \R \midline f \text{ is continuous}}$. Then for any $V \subset U$ we can define $\rho^{U}_{V}$ be the ordinary restriction of functions. Then $(\mathcal{C}, \rho)$ is a pre-sheaf.
> 2. Let $G$ be a fixed abelian group. Define $$\mathcal{F}(U) := \begin{cases} G, \quad U \neq \emptyset \\ \set{e}, \quad U = \emptyset\end{cases}$$
>	where $e$ is the identity element of $G$.
>	A restriction is then defined to be $$\rho^{U}_{V} = \begin{cases}id_{G}, \quad V \neq \emptyset \\ e, \quad V = \emptyset \end{cases}$$
>	Then $(\mathcal{F}, \rho)$ is a pre-sheaf of abelian groups.
> 3. Let $X := \C$ and define for any open $U \subset \C$ $$\mathcal{F}(U) = \mathcal{O}(U)$$
>	Given our natural restriction of functions we get that $\mathcal{F}$ or similarly $\mathcal{O}$ is a pre-sheaf of on $\C$

Motivated by a Yoneda Lemma thought we can characterise the properties of pre-sheaves by considering maps from and into them. For this we define a morphism of pre-sheaves

> [!definition] Morhpism of Pre-Sheaves
> Given two pre-sheaves $\mathcal{F}_{1}, \mathcal{F}_{2}$ over $X$ then we call $\phi: \mathcal{F}_{1} \to \mathcal{F}_{2}$ a morphism of pre-sheaves if there exists a family of maps
> $$\phi_{U}: \mathcal{F}_{1}(U) \to \mathcal{F}_{2}(U)$$ for every $U \in \tau$ such that for all pairs $U, V$ with $U \subset V$ our maps comute with restriction (can be written in a commuting diagram)
> $$\rho^{U}_{V} \circ \phi_{U} = \phi_{V} \circ \rho^{U}_{V}$$
>Two morphisms $\phi, \psi$ can be composed by simply defining $$\left( \phi \circ \psi \right)\mid_{U} := \phi_{U} \circ \psi_{U}$$


Generlising this to sheaves works as follows
> [!definition] Sheaves
> A pre-sheaf $\mathcal{F}$ over $(X \tau)$ is called a sheaf, if for all $U \in \tau$ and every family of subsets $\set{U_{i} \in \tau}$ with $U = \bigcup U_{i}$ if the following hold:
> 1. $f, g \in \mathcal{F}(U)$ with $f \mid_{U_{i}} = g \mid_{U_{i}} \implies f = g$ 
> 2. Suppose $f_{i} \in \mathcal{F}(U_{i})$ satsfies $$f_{i} \mid_{U_{i} \cap U_{j}} = f_{j} \mid_{U_{i} \cap U_{j}} \implies \exists f \in \mathcal{F}(U) \text{ with } f \mid_{U_{i}} = f_{i}$$

Note that combining these properties gives us uniqueness of the continuation.

> [!example] Examples of Sheaves
> 1. $\mathcal{C}$ : sheaf of continous functions.
> 2. $\mathcal{F}$: is in general not a sheaf.
> 3. $\mathcal{O}$: sheaf of holomorphic functions.

Let $(X, \tau)$ be a topological space and $\mathcal{F}$ a pre-sheaf of sets and $x \in X$ be any element. For any $U \in \tau$ we define an equivalence relation on
$$|\mathcal{F}| := \bigcup_{x \in U} \mathcal{F}(U)$$
by stating that for any $f \in \mathcal{F}(U)$ and $g \in \mathcal{F}(V)$ we have that
$$f \sim g \iff \exists W \in \tau: x \in W \subset (V \cap U) : f\mid_{W} = g\mid_{W}$$
Now let $\mathcal{F}_{x} = \faktor{|\mathcal{F}|}{\sim}$ we then give these sets special names:

> [!definition] Stalks
> We call $\mathcal{F}_x$ the stalk of $\mathcal{F}$ at the point $x$ 

Note that $\mathcal{F}_{x} = \lim_{x \in U} \mathcal{F}(U)$. We also have that $\mathcal{F}_{x} = \bigcup_{x \in U} \left( \faktor{\mathcal{F}(U)}{\sim_{x}}\right)$

We also have that $\mathcal{F}_{x}$ has the same algebraic structure as $\mathcal{F}(U)$

> [!definition] Germs
> Let $x \in U \in \tau$ and $$\rho_{x}: \mathcal{F}(U) \to \mathcal{F}_{x}, f \to [f]_{x} =: f_{x}$$
> $f_{x}$ is called the germ of $f$ at $x$.
> 

> [!example] Equivalence Conditions for Germs on Complex Polynomials
> Let $X \subset \C$ be a region and $\mathcal{O}$ be the sheaf of holomorphic functions on $X$ then for any $x \in X$ the stalk $\mathcal{O}_{x}$ is the collection of all holomorphic functions which agree on a nbhd $U$ of $x$ i.e. whose taylor series
> $$\sum\limits_{\nu=0}^{\infty} a_{\nu} (z-x)^{\nu}$$
> agree on $U$. In other words two holomorphic functions $f, g$ defined on a nbhd $U$ of $X$ determine the same germ if and only if they have the same taylor series.
> This means that here $$\mathcal{O}_{x} \cong \C[z-x]$$ where $\C[z-x]$ is the ring of convergent power series in $(z-x)$ at $x$ with coefficients in $\C$.

---

> [!remark]
> - Similarly, one defines $\mathcal{M}_{x}$ as the stalk of meromorphic functions at $x \in U$ open. The germs of meromorphic functions are represented by convergent Laurent series on a punctured neighbourhood of $x$. We then also get $$\mathcal{M_{x}} \cong \C (z-x)$$
 where the ring is the ring of convergent laurent series with finite principal part $(z-x)$ at $x$
>- For $f_{x} \in \mathcal{O_{x}}$ we have that $f_{x} = f(x)$ is well-defined


Let $U \subset \C$ be an open set. We will derive a sufficient condition for the existence of primitives for all $f \in \mathcal{O}(U)$. We will want an open cover of $U$ so define for some index set $I$ the open covering $\mathcal{U} = \set{U_{i}}_{i \in I}$, we will also need to know about their intersections so we define $J \subset I \times I$ such that for $(i, j) \in J$ we have $U_{i} \cap U_{j} \neq \emptyset$.
Now we denote the $\underline \C$ as the sheaf of locally constant functions. For an open $V \subset \C$ we denote $\underline \C(V)$ as the set of complex valued function on $V$ which are locally constant.
From this setup we can define a couple of useful objects which turn out to be dual to the forms defined in earlier chapters:
1. Let $C^{1}( \mathcal{U}, \underline \C) = \prod_{(i, j) \in J} \underline \C (U_{i}\cap U_{j})$. We call elements of this set $1$-cochains of the covering $\mathcal{U}$ with values in $\underline \C$.
2. Let $Z^{1}( \mathcal{U}, \underline \C)$ be the subset of $C^{1}( \mathcal{U}, \underline \C)$ given as $$Z^{1}( \mathcal{U}, \underline \C) := \set{(c_{ij})_{(i,j) \in J} \in C^{1}( \mathcal{U}, \underline \C) \midline c_{ij} + c_{jk} + c_{ki} = 0 \text{ on } U_{i} \cap U_{j} \cap U_{k} \text{ whenever } U_{i} \cap U_{j} \cap U_{k}\neq \emptyset}$$
	An element of $Z^{1}( \mathcal{U}, \underline \C)$ is called a $1$-cocycle of $\mathcal{U}$ with calues in $\underline \C$.
3. Let $C^{0}(\mathcal{U}, \underline \C) := \prod_{i\in I} \underline \C(U_{i})$. Elements of this set are called $0$-cochains of $\mathcal{U}$ with values in $\underline \C$.

In this setup we now can also define a dual object to the boundary operator that we had before:
$$\delta: C^{0}(\mathcal{U}, \underline \C) \to Z^{1}(\mathcal{U}, \underline \C)$$
such that 
$$(c_{i})_{i\in I} \in C^{0}(\mathcal{U}, \underline \C) \implies (\delta c)_{ij} = \at{c_{i}}{U_{i} \cap U_{j}} - \at{c_{j}}{U_{i} \cap U_{j}}$$ where $c_{i} \in \C(U_{i})$ and $(i,j) \in J$.
From this definition it is easy to see that $\delta c \in Z^{1}(\mathcal{U}, \underline \C)$.


We will now also (why will become clearer in the general theory) define a set $B^{1}(\mathcal{U}, \underline \C) = \im \delta \subset Z^{1}(\mathcal{U}, \underline \C)$. Now its important to see that $Z^{1}$ and $B^{1}$ are both abelian groups and even $\C$-vector spaces. Since we also have thtat the mapping $\delta$ is a $\C$-Linear Map we can take the quotient group which we will define as

> [!definition] Cohomology
> The quotient vector space (quotient group) 
> $$H^{1}(\mathcal{U}, \underline \C) := \faktor{Z^{1}(\mathcal{U}, \underline \C)}{B^{1}(\mathcal{U}, \underline \C)}$$
> is called the first cohomology group of $\mathcal{U}$ with values in $\underline \C$.

> [!theorem]
> Let $U \subset \C$ be an open subset and $\mathcal{U}$ be an open covering of $U$ by disks. Assume that $$H^{1}(\mathcal{U}, \underline \C) = 0$$ the trivial group. Then every $f \in \mathcal{O}(U)$ has a primitive in $U$.

`\begin{proof}`
As each $U_{i}$ is a disk, $f$ has a primitive $F_{i}$ on $U_{i}$. Now given $(i, j) \in J$ we can define $c_{ij}= F_{i} - F_{j}$ on $U_{i}\cap U_{j}$. Since $U_{i} \cap U_{j}$ is connected we know that $c_{ij}$ is a constant (show this!!).
If $i,j,k \in I$ are such that $U_{i} \cap U_{j} \cap U_{k} \neq \emptyset$ one has that 
$$c_{ij} + c_{jk} + c_{ki} = (F_{i} - F_{j}) + (F_{j} - F_{k}) + (F_{k} - F_{i}) = 0$$
Hence the family 
$$\xi = \set{ \left( c_{ij} \right)_{(i, j) \in J}} \in Z^{1}(\mathcal{U}, \underline \C)$$
As $H^{1}(\mathcal{U}, \underline \C) = 0$ there must exists a cochain $c = (c_{i})_{i \in I} \in C^{0}$ such that $\delta c = \xi$. Meaning there exists a family $(c_{i})_{i \in I} \in \prod_{i \in I} \underline \C (U_{i})$ with 
$$F_{i} - F_{j} = c_{i} - c_{j}  \text{ on } U_{i}\cap U_{j}, \forall(i,j)\in J$$
We know define $F$ on $U$ as a map such that
$$\at{F}{U_{i}} = F_{i} - c_{i} $$
As we know have that on $U_{i} \cap U_{j}$ that $$F_{i} - c_{i} = F_{j} - c_{j}$$
we have a well-defined $F$. Since for all $i \in I$ $c_{i}$ is a constant and $F_{i}$ is a primitive of $f$ on $U_{i}$, we have that for any $i$ 
$$F' = F_{i}' = f \text{ on } U_{i}$$
Hence $F$ is a primitive of $f$
`\end{proof}`

---
## Higher Order Cohomology on General Sheafs

We can now abstract this to higher $k$-Chains and also generalise the Sheaf we are using. We will let $(X, \tau)$ be a topological space and $\mathcal{F}$ a pre-sheaf of abelian groups on $X$. Also we will consider $\mathcal{U}$ to be an open covering of $X$.

> [!definition] General $q$-Cochains
> Let $q \in \N_{0}$ then we define 
> $$C^{q}(\mathcal{U}, \mathcal{F}) := \prod_{ (i_{0}, i_{1}, \ldots, i_{q}) \in I^{q+1}} \mathcal{F} \left( U_{i_{0}} \cap U_{i_{1}} \cap \ldots \cap U_{i_{q}} \right)$$
> An element $f \in C^{q}(\mathcal{U}, \mathcal{F})$ written as
> $$f = (f_{i_{0}, \ldots i_{q}})$$
>is called a $q$-cochain of $\mathcal{U}$ with values in $\mathcal{F}$.
>If $U_{i_{0}} \cap U_{i_{1}} \cap \ldots \cap U_{i_{q}} = \emptyset$ then $f_{i_{0}, \ldots i_{q}} = 0$.
>Under componentwise addition $C^{q}(\mathcal{U}, \mathcal{F})$ becomes an abelian group, called the group of $q$-cochains.
>
>Generalising the boundary operator also works in the following way
>- Let $q = 1$ then $\delta^{0}: C^{0}(\mathcal{U}, \mathcal{F}) \to C^{1}(\mathcal{U}, \mathcal{F})$ is defined as $$(f_{i})_{i \in I} \mapsto \delta^{0} (f_{i})_{i \in I} = (g_{ij})_{(i,j) \in I^{2}}$$such that $g_{ij} := \at{f_{i}}{U_{i} \cap U_{j}} - \at{f_{j}}{U_{i} \cap U_{j}}$
>- Let $q = 2$ then we define similarly $\delta^{1}: C^{1}(\mathcal{U}, \mathcal{F}) \to C^{2}(\mathcal{U}, \mathcal{F})$ such that $$(f_{ij})_{i,j \in I} \mapsto \delta^{1} (f_{ij})_{i,j \in I} = (g_{ijk})_{(i,j,k) \in I^{3}}$$ with the definition of $g_{ijk} = f_{ij} + f_{jk}+ f_{ki}$
>daksdnoasndoaknsd
>- For general $q$ we get that $\delta^{q}: C^{q-1}(\mathcal{U}, \mathcal{F}) \to C^{q}(\mathcal{U}, \mathcal{F})$ is defined such that 
>$$(f_{i_{0}, i_{1}, \ldots, i_{q+1}})_{i \in I} \mapsto \delta^{0} (f)_{({i_{0}, i_{1}, \ldots, i_{q+1}})} = \sum\limits_{n=0}^{q+1} (-1)^{n} \at{f_{i_{0}, \ldots, \hat i_{n}, \ldots, i_{q+1}}}{U_{i_{0}} \cap \ldots \cap U_{i_{q+1}}}$$



> [!definition]
> For all $q \in \N_{0}$ we have that $\delta^{q+1} \circ \delta^{q} = 0$

$$\begin{CD}
C^{0} @>\delta^{0}>> C^{1} @>\delta^{1}>> C^{2} @>\delta^{2}>> \cdots @>\delta^{q-1}>> C^{q} @>\delta^{q}>>
\end{CD}$$
is called a complex $(C^{\dot}, \delta^{\dot})$ 


Now assume that $\mathcal{F}$ is a sheaf.

> [!definition]
> We define the set $$Z^{1}(\mathcal{U}, \mathcal{F}) := \ker [ \delta^{1}: C^{1} \to C^{2}]$$
>to be the set of $1$-cocycles.
>We also call the set $$B^{1}(\mathcal{U}, \mathcal{F}) = \im[\delta^{0}: C^{0} \to C^{1}]$$
>is called the $1$-coboundaries.

Given the second property of sheaves is that there must exist some $f \in \mathcal{F}(X)$ with $$f_{\mid U_{i}} = f_{i}$$
then we can see that we have a mapping 
$$\mathcal{F}(X) \to Z^{0} \quad f \mapsto (f_{\mid U_{i}})_{i \in I}$$
is an isomorphism. Hence we can see that $H^{0}(\mathcal{U}, \mathcal{F}) = \mathcal{F}(X)$ which is independent of $\mathcal{U}$.


> [!theorem]
> Let $U \subset \C$ be an open and let $\epsilon$ be the sheaf of $C^{\infty}$-functions on $U$. Then $H^{1}(\mathcal{U}, \epsilon) = 0$

`\begin{proof}`
We need to show that every $1$-cocycle $(f_{ij}) \in Z^{1}$ is a $1$-coboudnary. 
Let $\set{\psi_{i}}$ be aa partition of unity relative to $\mathcal{U}$ on $X$. Then we have that $\psi_{j} f_{ij}$ is defined on $U_{i} \cap U_{j}$ and it can be extended to $U_{i}$ preserving $C^{\infty}$ thus making $\psi_{j} f_{ij}$ an element of $\epsilon(U_{i})$.
Let $g_{i} = \sum\limits_{j \in I} \psi_{j} f_{ij}$ which makes sense since this sum is finite due to the paracompactness of $\C$. We also have that $g_{i} \in \epsilon(U_{i})$.
Now given $i,j \in I$ on $U_{i} \cap U_{j}$ we get
$$g_{i} - g_{j} = \sum\limits_{k \in I} \psi_{j} f_{ik} - \sum\limits_{k \in I} \psi_{k} f_{jk} = \sum\limits_{k \in I} \psi_{k} \left( f_{ik} - f_{jk} \right) = \sum\limits_{k \in I} \psi_{k} f_{ij} = f_{ij}$$
thus giving us $f_{ij} \in B^{1}$
`\end{proof}`


> [!theorem] Cohomology of Holomorphic Functions 
>Let $\mathcal{U}$ be a cover of $\C$ then $H^{1}(\mathcal{U}, \mathcal{O}) = 0$

`\begin{proof}`
Let $(f_{ij}) \in Z^{1}(\mathcal{U}, \mathcal{O})$. As $Z^{1}(\mathcal{U}, \mathcal{O}) \subset Z^{1}(\mathcal{U}, \epsilon)$ and since we have just shown that $H^{1}(\mathcal{U}, \epsilon) = 0$ there exists a $0$-cochain $(g_{i}) \in C^{0}(\mathcal{U}, \epsilon)$ such that 
$$f_{ij} = g_{i} - g_{j}$$
on $U_{i} \cap U_{j}$.
As $\del_{\overline z} f_{ij} = 0$ we get that $\del_{\overline z} g_{i} = \del_{\overline z}g_{j}$ on $U_{i} \cap U_{j}$. There must now exists some $h \in \epsilon(\C)$ such that $\at{h}{U_{i}} = \del_{\overline z} g_{i}$.

Here we apply the following assumed lemma
> [!lemma] Dolbeault
> For any $h \in \epsilon(\C)$ we get that there exists $g \in \epsilon(\C)$ such that $h = \del_{\overline z} g$.

Using this we define $g$ to be such that $h = \del_{\overline z} g$. Define 
$$f_{i} := g_{i} - g$$
As $\del_{\overline z} f_{i} = \del_{\overline z}  g_{i} - \del_{\overline z} g = 0$ meaning $f_{i} \in \mathcal{O}(U_{i})$
Also $(f_{i}) \in C^{0}(\mathcal{U}, \mathcal{O})$
Moreover
$$f_{i} - f_{j} = g_{i} - g - g_{j} + g = g_{i} - g_{i} = f_{ij}$$
`\end{proof}`



A cochain $v = (f_{i}) \in C^{0 }(\mathcal{U}, \mathcal{M})$ is called a Mittag-Leffler distribution if $f_{i} - f_{j} \in \mathcal{O}(U_{i} \cap U_{j})$ i.e. $\delta v \in Z^{1}(\mathcal{U}, \mathcal{O})$.
A solution of the Mittag-Leffler distribution $v$ is any (global) meromorphic function $f$ such that 
$$\at{f}{U_{i}} - f_{i} \in \mathcal{O}(U_{i})$$
for any $i \in I$.
Let $[\delta v] \in H^{1}(\mathcal{U}, \mathcal{M})$ be the cohomology class of $\delta v \in Z^{1}(\mathcal{U}, \mathcal{M})$.

> [!theorem]
> The Mittag -Leffler distribution $v$ has a solution if and only if $[\delta v] = 0$

`\begin{proof}`
First suppose I have a solution $f \in \mathcal{M}(X)$ of $v = (f_{i})$ and let $g_{i} = f_{i} - f \in \mathcal{O}(U_{i})$. Then
$$g_{i} - g_{j} = f_{i} - f_{j}$$
on $U_{i} \cap U_{j}$. Which is the same as $\delta v = f_{i} - f_{j} \in B^{1}$ and thus $[\delta v] = 0$

Now suppose that $[\delta v] = 0$ meaning that $\delta v \in B^{1}$ then there must exist a $(g_{i}) \in C^{0}( \mathcal{U}, \mathcal{O})$ such that $\delta v = f_{i} - f_{j} = g_{i} - g_{j}$ on $U_{i} \cap U_{j}$
Thus $$f_{i}- g_{i} = f_{j} - g_{j}$$ on $U_{i} \cap U_{j}$
By the second sheaf property we find that there exists $f \in \mathcal{M}(X)$ such that this property holds locally. Therefore
$$\at{f}{U_{i}} - f_{i} = f_{i} - g_{i} - f_{i} = -g_{i} \in \mathcal{O}(U_{i})$$
meaning $f$ is a solution for $v$
`\end{proof}`

> [!corollary]
> In $\C$ we know that $H^{1}(\mathcal{U}, \mathcal{O}) = 0$, every Mittag Leffler distribution has a solution.

`\begin{proof}`

`\end{proof}`



















$$$
