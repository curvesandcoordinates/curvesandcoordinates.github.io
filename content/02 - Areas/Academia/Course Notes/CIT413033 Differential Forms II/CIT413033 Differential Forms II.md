---
publish: true
created: 2025-05-28T00:18:30.615+02:00
modified: 2026-06-10T19:12:37.465+02:00
tags:
  - academia
---

This is a Summary of the Differential Forms II course with Prof. Michael Marc Wolf. I will not note down all the Proof of statements, but will attempt to create a general Narrative that coincides with the notes he has given out during the lectures.

## Cohomology from the general Perspective

Summarising Differential Forms 1 we can see that a big focus was to define the de Rahm cohomology groups and apply these to analyse the topological properties of smooth manifolds. This procedure is a special case of a specific cohomology theory. In general we can construct cohomologies and homologies when considering the [[Homology and Cohomology Theories|basic definitions of homological algebra]]. These allow us to talk about exact sequences and construct tools that allow us to prove tools like the Meyer-Vietoris sequence. We also delve into defining [[Cech Cohomology]] as an example of a different cohomology theory, which turns out to be equivalent to de Rahm Cohomology but is more combinatorial to calculate.

## Poincare Duality and the compactly supported De Rahm Cohomology

When defining de Rahm cohomology and considering closed forms, something we have to apply often is that we want, when integrating forms, to have either the manifold or the form have compact support. This makes integration possible and notes how important compactness is for some of the properties we have calculated last semester. Generalising this we can consider the de Rahm cohomology on only the compactly supported differential forms. This behaves very different to normal de Rahm cohomology but allows us to construct a very specific [[Poincare pairing CIT413033]] which is non-degenerate and leads to a more general statement of [[Poincare Duality CIT413033]] which now extends to more than just dimension but can also assign Duals to Submanifolds.

## Intersection Theory and Fixed Point Theorems

When we consider Poincare Duals and compactly supported Poincare Duals of specific Spaces, namely the graph of a map $f: M \to M$ and the diagonal subspace $\Delta$ of $M \times M$ we are mainly talking about the intersection between two submanifolds. The important thing here is that the points of intersection of these two Manifolds are essentially fixed Points of $f$. This motivates the need to build up theory to understand general intersections and these maps specifically, building up to the [[Lefshetz Fixed Point Theorem CIT413033]]. In the realm of [[Intersection Theory CIT413033|general intersection theory]] it is useful to consider what a transversal intersection is and how to define the intersection number of transversally intersecting maps.

## Degree Theory and Vector Fields on Manifolds

When Calculating the Lefshetz number of a Map it is important to look at the induced map on the cohomology groups. When closely observing how the induced map on Cohomology acts on $H^n(M)$ for a connected manifold, we can see that this is akin to multiplying a a constant. This constant is called the [[Degree of Continuous Functions on Manifolds CIT413033|degree of a map]] and can be described in a general setting. It losely describes how much we can wrap a manifold around another manifold. This connection to Fixed Point theorems is also given when we consider the setting of Vector Fields on Manifolds. Here we are concerend with nowhere Vanishing Vector Fields. These turn out to be determined by [[Poincare-Hopf Theorem CIT413033]] the Lefshetz number of the identity, which is the Euler Characteristic. This gives a nice overview of the uses of the Euler Charactersitic, given by Poincare-Hopf and Gaus-Bonnet in Differential Geometry.

# List of Theorems and Definitions in Order

- **Homological Algebra**
  - Definition: Homology of a Chain of Modules
  - Definition: Exact Sequences
  - Lemma: Dimension Lemma
  - Lemma: Zig Zag Lemma
- **Meyer Vietoris and Good Cover**
  - Definition: Meyer Vietoris Sequence for De Rahm Cohomology
    - Pullback of inclusion maps
  - Definition: Good Covers
  - Lemma: Finite Good Covers give finite-dimensional Cohomology
- **Künneth Formula**
  - Fact: Projection maps induce an isomorphism between $\Omega^{k}M \times \Omega^{l}M \approx \Omega^{k+l}M$
  - Künneth formula for Betti Numbers: $\beta_{m}(M\times N) = \sum\limits_{k+l=m} \beta_{k}(M) \beta_{l}(N)$
  - Corollary: Multiplicativity of the Euler-Characteristic $\chi(M \times N) = \chi(M) \cdot \chi(N)$
- **Cech Cohomology**
  - Definition: Cech Cohomology
    - $\mathcal{J}_{k}$ Cech $k$-Simplex
    - $C^{k}(\mathcal{U}, \R)$ the Cech $k$-Cochains
    - $H^{k}(\mathcal{U}, \R)$ the Cech Cohomology
    - The Differential is defined as $\delta: C^{k} \to C^{k+1} \quad \delta(c)(i_{1}, \cdots, i_{k+1}) = \sum\limits_{r = 0}^{k+1} (-1)^{r} c(i_{1}, \cdots , i_{r-1}, i_{r+1}, \cdots, i_{k+1})$
  - Lemma: Given a smooth partition of $M$ $\set{\phi_{i}}$ we can define a cochain map $C^{k}(M, \R) \to \Omega^{k}M$ with $\omega_{c} = \sum\limits_{i} c(i) \phi_{i_{0}} d\phi_{i_{1}} \wedge \phi_{i_{k}}$
  - Theorem: Given a Manifold with a Good Cover $\mathcal{U}$ we get $H^{k}(\mathcal{U}, \R) \cong H^{k}_{\Omega}(M)$
  - Definition: Nerve Representation, Given a good cover we convert $\mathcal{J}_{k}$ to $k$-Dimensional elements of a Simplex.
- **Compact De Rahm Cohomology**
  - Definition: Define de Rahm cohomology with only Forms with compact support
  - Lemma: In order to define a Pullback we requeire properness of the map
  - Theorem: Meyer-Vietoris Sequence for Compact De Rahm Cohomology is the other way around
- **Poincare Duality**
  - Definition: We define a Poincare Pairing given by $H^{k}(M) \times H^{n-k}_{C}(M) \to \R$ and the integral
  - Lemma: Poincare Pairing is non-degenerate, meaning we have an isomorphism $H^{k}(M) \cong (H^{n-k}_{C}(M))^{\ast}$
  - Definition: Poincare Dual of a $k$-Dimensional Sub-manifold is given by $[\omega_{S}] \in H_{C}^{n-k}(M)$ with $\int_{S}\eta = \int_{S} i^{\ast}\eta = \int_{M} \eta \wedge \omega_{S}$
- **Intersection Theory**
  - Definition: Transversal intersection of two Submanifolds is given if $T_{p}K + T_{p}L = T_{p}M$ for all $p \in K \cap L$
    - Property: $\codim(K \cap L) = \codim(K)+\codim(L)$
    - Meaning: There is a special case if $\dim(K)+ \dim(L) = \dim(M)$ since then the intersection is of dimension 0
  - Lemma: Any two Submanifolds of $\R^{n}$ can be deformed slightly to intersect transversally
  - Definition: Intersection number of two Transversally intersecting Manifolds $K$ and $L$ with $\dim(K)+ \dim(L) = \dim(M)$ and $M$ compact we consider the combined oriented Basis of $T_{p}K$ and $T_{p}L$ denoted as $(A, B)$ and define the intersection number of a specific intersection to be the orientation of $(A, B)$. The intersectino number of $K$ and $L$ is then given by$I(K, L) = \sum\limits_{p \in K\cap L} \epsilon(p)$
  - Theorem: Given a compact, oriented Manifold with Transversal Submanifolds the Poincare Duals Satisfy $\omega_{K\cap L} = \omega_{K} \wedge \omega_{L}$
  - Theorem: $I(K, L) = \int_{M} \omega_{K} \wedge \omega_{L}$
- **Fixed Point Theorem - Lefschetz**
  - Definition: The Lefschetz number of a map $f: M \to M$ with $M$ compact, orientable Manifold is given by $L(f) = \sum\limits_{r} (-1)^{r} tr[f^{\ast}: H^{r}(M) \to H^{r}(M)]$
  - Theorem: $\int_{\Delta} \phi_{\Gamma_{f}} = L(f)$
  - Definition: A Given fixed Point $p \in M$ is non-degenerate if for $f: M \to M$ we have that $d_{p}f$ has no Eigenvalue 1,  meaning that $\det(d_{p}f - I) \neq 0$
  - Theorem: $f: M \to M$ has only non-degenerate fixed points if $\Delta$ and $\Gamma_f$ intersect transversally and in this case $I(\Delta, \Gamma_{f})= \sum\limits_{p=f(p)} \sgn(\det(d_{p}f - I))$
  - Theorem: For so called Lefschetz Maps (having no degenerate fixed points) we then get that $L(f) = \int_{\Delta} \phi_{\Gamma_{f}}= \int_{M\times M} \phi_{\Gamma_{f}} \wedge \phi_{\Delta} = I(\Gamma_{f}, \Delta) = \sum\limits_{p=f(p)} \sgn(\det(I - d_{p}f)) \in \mathbb{Z}$
  - Big Theorem: Given a compact, orientable manifold $M$ and a smooth map $f: M \to M$ we weg that $L(f) \neq 0 \implies \exists \text{ fixed point of }f$
    - Proof idea starts with a definition: Define the Compact Poincare Dual of a compact Submanifold in the same way as we defined the normal Poincare Dual
    - Theorem: Consider that for any compact submanifold and $[\omega_S]$ the compact Poincare Dual we get that for any neighboughrhood $U$ around $S$ there exists a representant of the Poincare Dual, such that $\supp \omega_{S}\subset U$
    - Prove the contraposition of the fixed point theorem by considering an open neighbourhood around $\Gamma_{f}$
  1. The Lefschetz Fixed Point Theorem can be generalised to just compact manifolds
  - Lefschetz-Hopf Fixed Point Theorem: Any map on a compact manifold boundary is homotopic to a Lefschetz map
  - Corollary: Given a map that is Homotopic to the identity we get that $L(f) = \chi(M)$
  - Crollary: Brouwers Fixed Point Theorem, given a compact, connected, contractible smooth manifold any map $f: M \to M$ has a fixed point.
    - Uses the fact that for connected manifolds the induced map acts constant on the 0th Cohomology groups
- **Degree Theory**
  - Definition: Let $M$ and $N$ be two $n$-Dimensional oriented manifolds such that $N$ is connected and a map $f: M \to N$ is proper. We then define the degree of this map to be $\int_{M} i^{\ast} \omega = \deg(f) \int_{N} \omega$
  - Proposition: Properties of the Degree
    - For two homotopic maps $f$ and $g$ we get $\deg(f) = \deg(g)$
    - $\deg(f \circ g) = \deg(f) \cdot \deg(g)$
    - The degree of a diffeomorphism $f$ is given as 1 if it is orientation preserving and -1 if it is orientation reversing.
    - Given a regular Value $y \in N$ we can calculate the degree as $\deg(f) = \sum\limits_{p\in f^{-1}(y)} \sgn(\det(d_{p}f))$
      - The construction is given by considering that under all assumptions the preimage has to be a discrete set of Points and we can find disjoint neighbourhoods $U_i$ with one point inside each. Then f restricted to $U_i$ is a diffeomorphism and thus has either degree 1 or -1 depending on the local orientation.
  - Proposition: Given a non-surjective map we have $\deg(f) = 0$
  - Theorem(Generalization of the fundamental theorem of Algebra): Given a proper map between two non-compact oriented manifolds $M, N$ with $N$ connected we can state that if the map $f: M \to N$ is orientation preserving outside a compact set $C$ that $f$ is surjective.
    - The idea here is given by the contrapositive of the proposition before. We calculate the degree of the given map by first constructing a point outside $C$ and noting that it is a regular value. Calculating the degree uses that is orientation preserving everywhere except for $C$ giving us a positive degree of at least 1
  - Corollary: Given a non-constant polynomial $f: \C \to \C$ it is proper
  - Proposition: On a compact, connected, oriented manifolds $M, N$ with $\dim M = \dim N -1$ and $\partial N \neq \emptyset$ we can only extend a map $f: \partial N \to M$ to $F: N \to M$ only if $\deg(f) = 0$
  - Theorem (Hopf Degree Theorem): Two maps $f, g: M \to S^{n}$ have the same degree if and only if they are homotopic.
  - Definition: Given two submanifolds of $\R^{n+1}$ $M$, and $N$ we define the linking number of both of them as $L(M, N) = deg(F)$ with $F: M\times N\to S^{m+n} \quad F(x, y) = \frac{x-y}{\norm{x-y}}$
- **Vectorfields and Flows**
  - Definition: We define Vectorfields on Manifolds in the usual way.
  - Definition: We can define a Flow given by a Vectorfield to be a map on a neighbourhoof of $U \subset \set{0} \times M$ with $\phi: U \to M \quad \phi(0, x) = x \quad \phi_{t} = \phi(t, \cdot) \text{ is diffeomorhpism}$
  - Big Theorem: Poincare Hopf I - Given a compact smooth Manifold then there exists a nowhere vanishing vectorfield on $M$ if and only if $\chi(M) = 0$
    - $\implies$ is given by considering that for the flow of the vector field there exists a diffeomorphism that has no fixedpoints and thus $\chi(M) = L(\phi_{\epsilon}) = 0$
  - Corollary: Hairy Ball Theorem
  - Definition: We define the index of a vectorfield with a isolated zero $p \in M$ to be the $Ind(X, p) = \deg(\phi)$.
    ![[04 - Resources/Assets/Pasted image 20240723165920.png]]
  - Poincare-Hopf II: Given a Vectorfield with only isolated zeros we get that $\chi(M)= \sum\limits_{X_{p} = 0} Ind(X, p)$
  - Definition: The Gauss map is given for an $n+1$-Dimensional submanifold of $\R^{n+1}$ then the map $\nu: \partial M \to S^{n}$ with $\nu(p)$ being the normalized outward pointing vector. The Gauss curvature at a point $p \in \partial M$ is given by $\kappa(p) = \det(d_{p}\nu)$
  - Property: Given the volume form of $M$ we can see that $\kappa \cdot vol_{\partial M} = \nu^{\ast}(vol_{S^{n}})$
  - Gauss Bonnet Formula: Given a compact smooth Submanifold of $\R^{n+1}$ with boundary $\partial M$ we get that $\int_{\partial M} \kappa \cdot vol_{\partial M} = \frac{1}{2} Vol(S^{n}) \chi(\partial M)$
    - Here the general defnition of $Vol(S^{n}) = \frac{2^{n-1} m!}{n!}\pi^{m}$ with $2n = m$

### Hidden Waypoint

- [[Degree of Continuous Functions on Manifolds CIT413033]]
- [[Flow CIT413033]]
- [[Intersection Theory CIT413033]]
- [[Lefschetz Number CIT413033]]
- [[Lefshetz Fixed Point Theorem CIT413033]]
- [[Poincare Duality CIT413033]]
- [[Poincare pairing CIT413033]]
- [[Poincare-Hopf Theorem CIT413033]]
