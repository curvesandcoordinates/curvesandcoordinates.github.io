---
publish: true
created: 2024-11-29T09:46:32.000+01:00
modified: 2026-06-10T19:14:50.729+02:00
tags:
  - thoughts
---

The usual path of abstraction for concepts typically associated with analysis is given by first defining our favourite space to work with $\R^{n}$ for this we need to understand the construction of natural numbers from the ground up. The next step is to consider functions from $\R \to \R$. They are the ones we know from school. We define derivatives and everythin else here and find nice intuitions and questions to answer.

## What a derivative really captures?

Typically in Analysis 2 or 3 we start to generalise to maps $f: \R^{n} \to \R^{m}$ and this becomes way more tricky. Specifically when we consider differentiating a function. The special case of differentiation in one dimension lends itsself to intuitions such as curvature and slope. When working in bigger dimensions the idea of a slope or curvature diverges from the derivative.

The most important conceptual Theorem that we prove in a beginner analysis course that tries to capture what I think is the essence we are trying to aim for when talking about a derivative is the following:

> [!theorem] Linear Approximation Characterisation
> Given a function $f: \R \to \R$ and a point $a \in \R$. Then we know that $f \text{ is differentiable at } a \text{ with derivative } m_{a} \iff \exists m_{a} \in \R: \quad \lim_{x \to a} \frac{f(a) - f(x) + m_{a} (x-a)}{x-a} = 0$
> Differentiability is also equivalent to there existing an $r: \R \to \R$ with $r(a) = 0$ and $f(x)=f(a) + m_{a}(x-a) + r(x) (x-a)$

This is the intuition behind the taylor approximation of a function but also give us the reason why the derivative actually just encodes the slope of the linear approximation at a point. Now this idea is generalisable as we see in analysis 2 and 3, since the Jacobian is simply the analogue of the slope of the linear approximation.

## Thinking in Curved Space

The context of working with maps from $\R^{n}$ to $\R^{m}$ is a very elegant theory. We can generalize derivatives and integrals of different forms and build up a theory on analytical properties functions on these well-behaved spaces can have. A way to pronounce the well-behavedness of $\R^{n}$ is by noting that its biggest property is that it is a vector space. In a sense it is linear, where the conotation of linearity beign synonymous with simplicity plays a big role. If we want to work with non-linear spaces (or as I often referr to them “curved” spaces) we will need to extend the theory slightly. Even before doing this though, the question on what a curved surface actually might be or if they even matter in some sense is completely sensible.

When we think of objects in $n$ dimensional space, for example the 2-Sphere defined by
$S^{2} = \set{\begin{pmatrix}x \\ y \\ z\end{pmatrix} \in \R^{3} \midline x^{2} + y^{2} + z^{2} = 1}$
we have a ball in mind. This is a subset of our nice linear space but you can notice that if you ignore all other points outside of the surface of the ball that this isn’t linear at all. This is a good prototype to think of when imagining curved space or curved objects. Now apriori we cant say anything about maps from $S^{2} \to S^{2}$ We could maybe extend them to maps $\R^{3} \to \R^{3}$ and use our existing theory (that this can be done for any general curved object is not trivial and is given by Whitneyy Embedding Theorem. This idea is maybe useful in some sense but doesnt really capture a map on the 2-Sphere all too well. A Vector in $\R^{3}$ can point in 3 directions, but if you imagine a person standing on a sphere he can only really walk in two different directions. Since a derivative is a locally defined property we cant really equate the derivative of a map $\R^{3} \to \R^{3}$ to that of a map $S^{2} \to S^{2}$ whatevery that might mean. This already give us bi problems with analysis in this curved space.
Our saving grace actually comes from the fact that if we restrict ourselves to only local behaviour that we have already observed that our sphere is 2-Dimensional in a sense. Formalizing this amounts to basically stating that any open set $U$ of $S^{2}$ is diffeomorphic (which is a strong form of topological sameness ) to a subset of $\R^{2}$. Doing this to a big partition of the Sphere allows us to consider it a glued collection of essentially $2$-Dimensional objects. In these areas we can apply the known theory and thus “pull it up” to the level of what we will call a manifold. Following this idea of local behaviour defining our object at every point one might assume that all the definition of a manifold will entail are local properties, but we need to set a general framework in order for the tools of manifold theory to work out. Specifically the only properties we will expect of a manifold are those of second-second countability and hausdorffness.

### The Tools of Manifolds

We begin with the most general setting of a “geometrical” object, which is a set $X$ with a Topology $\mathcal{T}$. We want $X$ to locally be a euclidean object in the end so we will require two specific thing namely

> [!definition] Hausdorff and Second-Countability
> Let $(X, \mathcal{T})$ be a topological space. We call $X$
>
> 1. **Hausdorff**: If for any points $x, y \in X$ there exists $U, V \in \mathcal{T}$ such that $x \in U, y \in V$ and $U \cap V = \emptyset$
> 2. **Second-Countable**: If there exists a countable $B \subset \mathcal{T}$ such that for any $A \in \mathcal{T}$ we have $A = \bigcup_{B_{i} \in I \subset B} B_{i}$

These two properties are the underlying structure we need to make our space similar enough to $\R^{n}$ since this also has both of these properties.

> [!info] Generalized Real Manifolds
> One can find definitions of a manifold without these given properties. They are missing important aspects of our manifold theory but might also be interesting. For more information on non-Hausdorff Manifolds, see [this](https://en.wikipedia.org/wiki/Non-Hausdorff_manifold)

To define the manifold we now need to formalize the local diffeomorphism property. Specifically we first define the idea of a Chart. The name should invoke the Idea of a world map that allows us to put “coordinates” on an Area.

> [!definition] Charts and Atlasses
> Given a topological space $(X, \mathcal{T})$ and an open subset $U \in \mathcal{T}$ we can define
>
> - A **Chart** to be a map $\phi: U \to \R^{n}$ such that $\phi(U) \subset \R^{n}$ is open and $\phi$ is a topological homeomorphism. $n$ is then called the dimension of the chart
> - Two charts $\phi: U \to \R^{n}$ and $\psi: V \to \R^{n}$ **compatible** if the transition map $\phi^{-1} \circ \psi: \phi(U \cap V) \to \psi(U \cap V)$is a diffeomorphism (where this term is used in the normal sense of maps in $\R^{n}$).
> - An Atlas $\mathcal{A}$ as a collection of compatible charts such that for every $p \in X$ we have some chart whose domain contains $p$

> [!info] Consistent Dimensionality
> Our Manifolds that we are going to define in a second will inherit their dimension from the dimension of the charts. We have to note that this will be one constant number due to compatability. This is infact connected to and results from a very non-trivial statement from Algebraic Topology, namely the Invariance of Domain which tells us that if we had a transition map $\alpha = \phi^{-1} \circ \psi: U \subset \R^{n} \to V \subset \R^{m}$ and want it to be a homeomorphism that $n = m$. Thus our Atlas is consistent in its definition.

Technicality is required in the definition of an atlas since an atlas is only given to be a set of compatible charts and not the set of all compatible charts. This maximality condition actually defines a **complete Atlas** but it turns out that every Atlas is contained in a complete one, meaning that as soon as we have found a good enough atlas for our purpose we can start working with it and simply assume the existence of some “completion” of our atlas which makes it complete. This will almost never become important in our use case but it might be good to keep in mind.

> [!remark] Maximality clears up any Question about Dimension
> Depending on what Category of maps we are working with we can easily see that there is a unique maximal complete Atlas associated with every given topological space. In this sense we now due to the consistency of dimensionality that our complete Atlases will all have the same dimension. Meaning dimension is not an interpretable constant but rather a universal property of a given topolgoical space.

Finally we can fully state what a manifold is. This concept should always be thought of in terms of the beginning example of the sphere or some other object embedded in $\R^{3}$.

> [!definition] Real Manifold
> A (real) Manifold $M$ is a second-countable hausdorff space $(M, \mathcal{T})$ with a maximal complete Atlas. The dimension of this manifold is given by the Dimension of the maximal complete Atlas of $M$.

#### Derivatives and other Local properties

Now the process of building up the basics of this theory will invlove a lot of definitions that are reminicent of those in flat space. We simply pull these up in a local manor.

When we want to start considering maps to and from manifolds we will need to invoke our local structure in some way. A good way to see how this is done is by considering a map $f: M \to \R$ with $M$ being some manifold. We can pick some chart $\phi: U \to \R^{n}$ and note that there is a well-defined map $f \circ \phi^{-1}: \phi(U) \to \R$ which is a map in linear space. This can be said to be smooth in our usual sense. Now if we want $f$ to be smooth in general we can simply want any coordinate representation (meaning we vary the charts) to be smooth maps and et voila! Let us now generalise this to maps between manifolds.

> [!definition] Coordinate Representation of a Function
> Given a map $F: M \to N$ we call the map $\hat F$ the coordinate representation with respect to two charts $\phi: U \subset M \to \R^{n}$ and $\psi: V \subset N \to \R^{m}$ if $\hat F = \psi \circ F \circ \phi^{-1}$

This coordinate representation should be seen as a “realisation” of the map $F$ but only using the local information the chart allows us to see. We can calculate these explicitly in many cases, see for example the cannonical example of [[Sphere as a Manifold]].

> [!definition] Smooth Maps between Manifolds
> Let $M$ be an $n$ dimensional manifolds and $N$ and $m$ dimensional manifold. We call a map $F: M \to N$ smooth in the point $p \in M$ if for every coordinate representation $\hat F$  with respect to charts around $p$ and $F(p)$ the representation is smooth (meaning infinitely differentiable in the “flat” sense). We naturally call the map $F$ smooth if it is smooth in every point.

![[Tangent Vectors on Manifolds#Tangent Vectors Pulled from $\R^{n}$]]

![[Tangent Vectors on Manifolds#Moving up to Manifolds]]
