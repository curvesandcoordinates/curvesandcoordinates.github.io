---
publish: true
created: 2025-11-22T15:30:13.468+01:00
modified: 2026-06-10T19:14:51.842+02:00
tags:
  - thoughts
---

Topology is an area of mathematics concerning a specialized object, namely: a Topological Space. The Intuitive idea behind a topology is that we define a certain collection of sets that give us the proximity of any point of a set to another. Abstractly this is done by defining open-sets, but can be realized in terms of so-called neighbourhoods which hone in on the image that I have of topologies. A set with proximity relations between points amounts to an embeddable object, which is why topologies should also be thought of as very general geometric objects.

A later aspect of topology is that from the general definitions of open sets we want to find properties of the mathematical object that we see in nicely behaved space. This leads to the deinition of many properties a topology could have, like seperation axioms, connectedness and even more advanced properties. Notably we can also on a relatively general space define aspects of [[Homology and Cohomology Theories|homology]] which shows how intrinsic these properties are. Specifically for this consider the construction of [[Singular Simplicial Homology]]

## Abstract Definitions

As stated in the introduction, a topology is in its most abstract definition simply a specification of how the open subsets of a given set look. They of-course need to satisfy some intuitive properties

> [!definition|\*] Topology
> A topology on a set $X$ is a collection $\mathcal{T} \subset \mathcal{P}(X)$. Where every set $U \in \mathcal{T}$ is called open. The collection $\mathcal{T}$ satisfies the following properties:
>
> 1. $\emptyset, X \in \mathcal{T}$
> 2. For $U, V \in \mathcal{T} \implies U \cap V \in \mathcal{T}$ (which is to say finite intersections)
> 3. For $S  \subset \mathcal{T} \implies \bigcup_{U \in S} U \in \mathcal{T}$
>    a
>    The pait $(X, \mathcal{T})$ is called a topological space.

This definition is equivalent to defining the “closed” sets of a space. We consider a set closed if it is the complement of an open set.

The image one should have in mind for these open sets is intuitively an open ball in $\R^{n}$ which means a ball not containing its boundary and thus having a sort of “soft-edge”.

> [!example|\*] Metric Spaces have an induced Topology
> Any metric space, meaning a space $X$ with a metric $d_{X}: X \times X \to [0, \infty)$. In this set up we can define open balls of radius $\epsilon > 0$ to be
> $B_{\epsilon}(x) = \set{y \in X \midline d_{X}(x, y) < \epsilon}$
> for any given $x \in X$. We then characterise the open sets as follows
> $U \text{ is open} \iff \forall x \in U \exists \epsilon > 0: B_{\epsilon}(x) \subset U$
> Thus an open set is one such that every point as a small enough open ball around it.
> This induces a topology on our set $X$ which is said to be compatible with $d_{X}$. Topologies obtained this way are equivalent if two metrix are equivalent in the sen that they are induced by equivalent norms. The reverse question of getting a metric from a topology is more complicated and known und the property of a space being metrizable.

We gain a large number of examples this way, meaning many “geometric” spaces like $\R^{n}$ or $\C^{n}$ are topological spaces.

The concept of topology is meant to model the previous case, but due to its simplicity we gain many more “abstract” or weird spaces when we only want to get something that counts as a topology but might not be a usual space. For this let us consider some extermal examples

> [!example|\*] Discrete and Coarse Topology
> Given a set $X$ we can immediately define two canonical topologies on this space that contain little to no information
>
> - The **discrete topology** is given by $\mathcal{T} = \mathcal{P}(X)$. It satisfies all the topological axioms but simply declares any point of $X$ to be open and closed. It is the largest possible choice for a topology.
> - The **coarse toplogy** is the smalles choice for a topology and is given by $\mathcal{T} = \set{\emptyset, X}$

### The Philosophy of it All

Topolgists are known to construct weird and mind baffling counterexamples. This can be seen as the first argumentative step in topology. We define what ought to define a space, the sense of proximity of points. Two points containted in one open set are closer than two points cointained in none. This connectedness can be seen in the discrete setting for $X$ since there $(X, \mathcal{T})$ can be visualized as a graph, for more on this see [[Graph Topology as Geometric Intuition]]. In any case we would want the nearness of points to define the geometry. Topologists found out though that this doesn’t suffice and allows for “degenerate” spaces known as counterexamples. For a list of counterexamples consider [[Counterexamples from Topology]].

### Definitions via Neighborhood

Another starting point from which we can define topologies is by considering the concept of a neighborhood, and how defining them actually suffices to define a total topology.

> [!definition|\*] Neighborhoods
> Given a topological space $X$ we calla subset $V \subset X$ a **neighborhood** of $x \in X$ if there exists open $U \subset V$ with $x \in U$. We call a colletion of neigborhoods a **neighborhood system** denoted by $\mathcal{N}_{x}$

this definitions defines neighborhood systems in terms of a given topology, we could also consider the opposite direction

> [!definition|\*] Neigbourhood Systems, Axiomatically
> For a given set $X$ and some $x \in X$ we call $\mathcal{N}_{x} \subset \mathcal{P}(X)$ a neighborhood system if it has the following properties
>
> 1. $X \in \mathcal{N}_{x}$
> 2. $V \in \mathcal{N}_{x} \implies x \in V$
> 3. $V \in \mathcal{N}_{x}, V \subset W \implies W \in \mathcal{N}_{x}$
> 4. $V, W \in \mathcal{N}_{x} \implies V \cap W \in \mathcal{N}_{x}$
> 5. For every $V \in \mathcal{N}_{x}$ there exists $U \in \mathcal{N}_{x}$ with $V \in \mathcal{N}_{y}$ for all $y \in U$

from this we get a uniquely defined topology that corresponds to this.

> [!theorem|\*] Axiomatic Neighborhood Systems Corresponds to Topologies
> Given a family of axiomatically defined neighborhood systems $(\mathcal{N}_{x})_{x \in X}$ we get a unique corresponding topology

`\begin{proof}`
This is given by an important characterisation of open sets, namely that a set $U \subset X$ is open if it is a neigborhood of all its points. We can thus define the topology to be
$\mathcal{T} = \set{U \subset X \midline \forall x \in U: U \in \mathcal{N}_{x}}$
`\end{proof}`

## Properties of Topological Spaces

As stated before we give topolgoical spaces interesting properties depending on what we care about or what we are trying to model
