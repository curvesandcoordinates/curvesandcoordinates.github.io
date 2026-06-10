---
publish: true
created: 2024-12-05T23:45:22.557+01:00
modified: 2026-06-10T19:14:50.761+02:00
tags:
  - thoughts
---

## Tangent Vectors Pulled from $\R^{n}$

Normally when we define a condition for smoothness in analysis we would immeadiately see a way to calculate the “derivative”. This as we have seen before actually is best seen as a linear approximation of a map at a point. The reason we cant simply define the derivative for manifold maps is that we first need to speak about the idea of linear approximations on the level of manifolds in order to even have the language to convey what a derivative will do.

The simplest manifold is just the flat space $\R^{n}$ that we have a lot of experience with. For a general map $g: U\subset \R^{m} \to V \subset \R^{n}$ we know that the total differential at a point $q \in \R^{m}$ is simply given by the linear map

$$
D_{q}g: \R^{m}\to \R^{n}, \quad v \mapsto \sum\limits_{i} v_{i} \at{\frac{\del g}{\del x_{i}}}{q} = J_{q}(g)v
$$

Note that some important things are happening when we define this map. We somehow dont care about the domain and co-domain of $g$ when defining $D_{q}g$ since its a linear map it has a totally seperate “mapping space”. The way to consolidate this is to think of this differential as actually inhabiting a different space than the map $g$. Now using this inclination let us say we define a new space, namely the \[tangent space]\(1. Basic Notions#Tangent Space) at the point $q \in \R^{m}$ as the following

> [!definition|\*] Tangent Vectors on $\R^{n}$
> Given a point $v \in \R^{n}$ we define the Tangent space at the Point $v$
> $T_{v}\R^{n} := \set{(x, v) \in \R^{n}\times \R \midline x \in \R^{n}} = \set{(x_{v} \midline x \in \R^{n}}$

Using this definition we can actually simply say that $D_{q}g$ is a map$D_{q} g: T_{q} \R^{n} \to T_{g(q)} \R^{n}$
This underlying structure was not visible to us since canonically $T_{v} \R^{n} \cong \R^{n}$.

This shift in perspective while seemingly small allows us to generalise to different spaces. While defining the rest of these concepts and moving this Idea up to the level of manifolds we need to always have the image in ming of a tangent vector being an arrow that is anchored at a specific point $q$.

## Moving up to Manifolds

### Geometric View

Given what we have done so far, we need to define the tangent vectors on the level of manifolds in order to describe the differential of a map between manifolds. In wanting to do this we have two different approaches each with their own usefulness. They basically will describe the same object. Geometrically speaking we might look at tangent vector of embedded submanifolds of $\R^{3}$ like for example $S^{2}$ and note that on such a familiar manifold we can express the tangent planes at a point $p \in S^{2}$ explicitly as $T_{p} := \set{v \in \R^{3} \midline \innprod{x}{p} = 0}$
This picture obviously doesnt generalise easily to manifolds since on that level we dont have any abient space. So to generalise let us find a more intrinsic way to view the tangent plane.
When standing on the sphere at the point $p \in S^{2}$ we can think of the tangent plane as all the directions one could walk. So when walking my path on the sphere $\gamma: (-\epsilon, \epsilon) \to S^{2}$ with $\gamma(0) = p$ we can think of the tangent vectors as simply all the different velocities I could be traversing the point $p$ with. so in this sense we get to the following definition

> [!definition|\*] Geometric Tangent Space
> Given a smooth manifold $M$ and a chart ${} \phi: U \to \R^{n} {}$ around $p \in M$. On the set of curves $K_{p}M := \set{\gamma \in C^{\infty}(-1, 1), M) \midline \gamma(0) = p}$
> we define the equivalence relation $\gamma_{1} \sim \gamma_{2} \iff (\phi \circ \gamma_{1})'(0) =(\phi \circ \gamma_{2})'(0)$
> The geometric tangent space of $M$ at $p$ is then $T_{p}M^{\text{geom}} := \faktor{K_{p}M}{\sim} = \set{[\gamma] \midline \gamma \in K_{p}M}$

### Algebraic Tangent Space

Algebraically speaking we would like to define the tangent space and its vectors in terms of how we apply them to different objects. Applying a vector is something that we usually don’t do, but with tangent vectors (measuring velocity) we implicitly want to use them to check the velocity of a map in a given direction. With this in mind we want a tangent vector at a point $p \in M$ to be something like a directional derivative. Formalising this is done by considering the objects we want to act on, namely maps $f \in C^{\infty}(M)$ and the defining property of the directional derivative, the leibniz rule, meaning we want
$v_{p}(fg) = f(p) v_{p}(g) + v_p (f) g(p)$
This suprisingly is enough to define the algebraic tangent space.

> [!definition|\*] Algebraic Tangent space
> Let $M$ be a manifold and $p \in M$ a point. We then denote the set of Derivations at the point $p$ as $T_{p}M^{\mathrm{alg}}$ the _tangent space at $p$_. Concretely this means that for any $f \in C^{\infty}(M, \mathbb{R})$ we consider $v_{p} \in T_{p}M$ to act as a map
> $v_{p}: C^{\infty}(M, \mathbb{R}) \to \mathbb{R} \quad f \to v_{p}(f)$
> with the property that for $f, g \in C^{\infty}(M, \mathbb{R})$
> $v_{p}(fg) = f(p) v_{p}(g) + v_{p}(f)g(p)$

Note that importantly this object has some nice properties that we would expect:

- $T_{p}M^{\mathrm{alg}}$ is a vector space
- For the constant function $f:M \to \R$ we can see that any derivation gives us $v_{p}(f) = v_{p}(f \cdot 1) = v_{p}(1) f(p) + v_{p}(f) \implies v(1)=0$
  The question now becomes what objects are contained in this algebraic tangent space, since it does feel slightly obscure. The following proposition tells us this

> [!proposition|\*] Diretional Derivatives as a Local Basis for Tangent Vectors
> Given a point $p \in M$ and a chart around a neighborhood $(U, h)$ with $h(q) = (x_{1}(q), \ldots, x_{n}(q))$ we then denote
> $\at{\frac{\del}{\del x_{i}}}{p}: C^{\infty}(M) \to \R, \quad f \mapsto \at{\del_{i}(f \circ h^{-1})}{h(p)}$
> in fact the set $\set{\at{\frac{\del}{\del x_{1}}}{p}, \ldots, \at{\frac{\del}{\del x_{n}}}{p}}$
> form a basis of $T_{p}M^{\mathrm{alg}}$

`\begin{proof}`
Simply note that we can see that the coordinate functions $x_{i}: U \to \R$ are in a sense dual to the partials, by computing
$\at{\frac{\del}{\del x_{i}}}{p}(x_{j}) = \at{\del_{i}(x_{j} \circ h^{-1})}{h(p)} = \frac{\del x_{j}}{\del x_{i}} = \delta_{ij}$
`\end{proof}`

You can extend these to the entire manifold and always locally choose the right chart for the job. This works out but isnt proven here due to time constaints

### Equivalence of Different Tangent Space Definitions

Given these two views on tangent vectors we have on the one hand, tangent vectors as a functional that checks a property of a function (like a directional derivative) on the other hand we have the definition of actual local directions we can move in which are all local curves at a point. These notions are the same, eventhough for the sake of differential geometry we often take the algebraic space and only use the isomorphism between the objects as a way to calculate or visualise the tangent vectors.

> [!theorem|\*] Equivalence of Tangent Vector Definitions
> The map $\psi: T_{p}M^{\mathrm{geom}} \to T_{p}M^{\mathrm{alg}}$ defined by
> $\psi([\gamma])(f) = (f \circ \gamma)'(0)$
> is a vector space isomorphism such that for every curve $\gamma \in K_{p}M$ with $(h \circ \gamma)'(0) = e_{i}$ with respect to a chart $(h, U)$ is mapped to $\at{\frac{\del}{\del x_{i}}}{p}$.

`\begin{proof}`
Well-definedness of the map has to be proven explicitly. But as soon as we show that the map is a well-defined linear map whose image are actually derivations we get from the fact that
$\dim T_{p}M^{\mathrm{geom}} = \dim T_{p}M^{\mathrm{alg}}$
`\end{proof}`

We use the theorem when calculating local tangent spaces, since considering explicit curves allows for computation.

> [!example|\*] Tangent Space of $GL_n(\R)$
> Consider the well-known manifold $M = GL_{n}(\R)$. We can consider curves on this
> $\gamma_{A}: (-\epsilon, \epsilon) \to GL_{n}(R), t \mapsto Id + tA$
> for $A \in \R^{n \times n}$. We can then see that since all tangent vectors correspont to $\gamma'(0)$ we can find out what kind of object this has to be. Here we can see explicitly that since $\det(Id) = 1$ that for small enough $\epsilon$ we always get an invertible matrix around $0$. Thus $A$ is already in the right space
> $T_{\mathrm{id}}GL_{n}(\R) \cong \R^{n \times n}$

An example where we compute a lot more is considering something like the following

> [!example|\*] Tangent Space of $O(n)$
> Consider the orthogonal matrices $M = O(n) = \set{A \in GL_{n}(\R) \midline A^{T} A = Id}$. When wanting to find the tangent space around the identity of this manifold we again consider the curves passing through the identity.
> $\gamma_{A}: (-\epsilon, \epsilon) \to M, t \mapsto \mathrm{Id} + t A$
> for some general matrix $A \in \R^{n \times n}$. We again want to find our what restriction we might have on $A$ that could reveal the structure of the tangent space. We first use that fact that $\epsilon$ is chosen such that the curve is inside $O(n)$ and thus
> $\mathrm{Id} = \gamma_{A}^{T}(t) \gamma_{A}(t) = (\mathrm{Id} + t A)^{T} (\mathrm{Id} + t A) = \mathrm{Id} + t A + t A^{T} + t^{2} A^{T}A$
> Taking the time derivartive on both sides and evaluating at $t = 0$ gives us
> $0 = A + A^{T} \implies A = - A^{T}$
> We thus know that the tangent vectors at the identity must be all anti-symmetric matrices and thus
> $T_{p}O(n) \cong \mathrm{AntiSym}(n) = \set{A \in \R^{n \times n} \midline A^{T} = -A}$

We can see that computation is made possible by considering these curves around the identity. This gives us a description of the tangent space at a point and this isomorphism also holds for the algebraic tangent space.
