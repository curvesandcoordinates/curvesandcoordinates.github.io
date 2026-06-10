---
publish: true
aliases:
  - Lie Groups
  - lie groups
  - topological groups
  - Topological Groups
created: 2025-07-15T23:12:55.374+02:00
modified: 2026-06-10T19:14:50.648+02:00
tags:
  - thoughts
---

The theory of [[Groups|groups]] describe the concept of symmetry. In the mathematical world we tend to have objects though that have even more structure than just symmetry. Namely they have an infinite amount of symmetries. These are of course decribed by infinite groups.

A great example of an infinite group is simply $(\R, +)$ since this is in a sense infinite and “non-discrete”. An important observation in this group now comes from a totally different area of mathematics: [[Topology as a Language]]. [[Topology as a Language]] describes via defining open sets how close different points are. One can think of topological information as decribing the loose geometric structure of an object (To have this be made explicit consider [[Graph Topology as Geometric Intuition]]).

From the are of Topology we know that a prime example of a simple and intuitive topological space is $\R$ with the usual topologicy $\mathcal{T}$. Interestingly we can now connect the image of $\R$ as a topological space on one hand and a group on the other  by noting that addition seems to be continuous (topologically speaking) given the topology $\mathcal{T}$. This marrige of two perspectives and their compatability with each other is caputre in the idea of a topological group. If we bring manifold theory into the picture (which we can see as an extension of topology) we can describe lie groups.

## Toplogical Groups

We first describe the structure given in the Introduction explicitly in the following definition:

> [!definition|\*] Topological Group
> We call a group $(G, \circ)$ a _topological group_ if it can be endowed with a topology, making the maps
> $\circ : G \times G \to G, \quad (g, h) \mapsto g \circ h$
> and
> $i: G \to G, \quad g \mapsto g^{-1}$
> continuous.

^b247a6

This concept is already rich in its nature since many groups we already know will turn out to be topological groups. Especially the infinite groups will all seem like their natural form is as something stronger than a topological group. Namely a Lie group.

The main concept captured here is that continous transformation groups like $SO(n)$ for instance have a group structure (given by matrix multiplication) but also a geometry in and of themselves (given by the topology). Describing them as a topological group allows us to marry these two aspects and construct theorems that respect all properties.

Next we would like to notice that most topological groups we tend to talk about have a richer structure than just a topology. Namely they not only have continuity but also allow for smoothness of maps. This comes from a manifold structure imposed on them naturally. Thus we extend topological groups to the stronger notion of a Lie Group:

> [!definition|\*] Lie Group
> We call a group $(G, \circ)$ a _Lie group_ if it is a manifold and the maps $\circ : G \times G \to G, \quad (g, h) \mapsto g \circ h$
> and
> $i: G \to G, \quad g \mapsto g^{-1}$
> are smooth.

^679715

Before we tackle the big examples of Lie groups we need to state a very rich and useful theorem that is only provable via understanding Lie groups much further and exploring their lie algebra. This theorem simply is stated as

> [!theorem|\*] Cartan's Theorem
> Let $(G, \circ)$ be a Lie group and $H \subset G$ a toplogically closed Subgroup, then $(H, \circ)$ is a Lie group.

^eb2744

Cartan simply tells us that as long as a subgroup is topologically closed we can always know that its a sub-lie group. This allows us to define a sufficiently large lie group and find many small ones as subgroups - which is exactly what we will do.

This allows us to talk about the prime example for lie groups:

> [!example|\*] Main Example for Lie Groups - Matrices
> The primary example for Lie groups in research tends to be the different subgroups of
> $GL(n, \mathbb{K}) = \set{M \in \mathbb{K}^{n \times n} \mid M  \text{ invertible}}$
> Proving that this group is a lie group amounts to first proving that its a manifold. This can be done in many ways but lets simply consider the determinant map, which is continuous
> $det: \mathbb{K}^{n \times n} \to \mathbb{K}$
> then we can note that $det M = 0 \iff M \text{ not invertible}$ thus we can take the preimage of the open set
> $U = \mathbb{K} \setminus \set{0}$
> this mus also be open giving us that
> $det^{-1}(U) = GL(n, \mathbb{K})$
> is an open subanifold of $\mathbb{K}^{n \times n} \cong \mathbb{K}^{n^{2}}$
> Showing that the operations are smooth amounts to proving matrix multiplcation is a smooth map which it trivially is as it can be expressed by algorithms consisting of multiplication and addition.
>
> Via Cartans Theorem we can now express many different subgroups of $GL(n, \mathbb{K})$ as lie groups, as most their definitions implicitly are given as the preimage of a closed set. To summarise consider
>
> - For $O(n) = \set{M \in GL(n, \R) \midline M M^{T} = Id_{n}} = f^{-1}(Id_{n})$  for a map $f: GL(n, \R) \to GL(n , \R), \quad M \mapsto M M^{T}$
> - For $SO(n) = \set{M \in O(n) \midline \det(M) = 1} = \det^{-1}(1)$
>
> And in the complex case we have the so-called [[Rotation Matrix Groups]]
>
> - For $U(n) = \set{M \in GL(n, \C) \midline M M^{H} = Id_{n}} = f^{-1}(Id_{n})$  for a map $f: GL(n, \C) \to GL(n , \C), \quad M \mapsto M M^{H}$
> - For $SU(n) = \set{M \in U(n) \midline \det(M) = 1} = \det^{-1}(1)$

## Fibre Bundle Structure

An important theorem that describes how the interplay between the topological structure of lie groups is controlled and determined by the group structure. Namely the inution is that any closed subgroup (not necessarily normal) can be used to construct a quotient space. This quotient space has a very destinct structure namely that of a [[Fibre Bundles|fibre bundle]].

> [!theorem|\*] Principal Bundle Structure of a Lie Group Quotient
> Suppose $G$ is a matrix Lie group and $H$ is a closed subgroup of $G$. Then $G$ has the structure of a fibre bundle with base $G/H$ and fibre $H$, where the projection map $p: G \to G / H$ is given by $p(x) = [x]$, with $[x]$ denoting the coset $xH \in G/H$.

^e13634
