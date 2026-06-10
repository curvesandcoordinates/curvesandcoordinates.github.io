---
publish: true
aliases:
  - sheaf
  - Sheaves
  - sheaves
  - presheaf
  - presheaves
created: 2025-10-22T15:09:47.000+02:00
modified: 2026-06-10T19:14:50.554+02:00
tags:
  - thoughts
---

A big principle in Mathematics is nicely summarised in the name “Local-Global-Principle”. It describes that a type of fact we enjoy in mathematics is to prove something locally and from this local infromation infer some global property of an object. This is first encountered when describing how the local properties of something like the derivative affect the general global shape and behaviour of a given function.

This concept is studied more specifically in the theory of sheaves. Here we take some topological space and consider that for any open set we can find a [[Rings|ring]] of objects. This is the modern language of talking about objects locally by considering their local sheaf.

---

# Presheaves

We begin by defining a presheaf of abelian [[Groups|groups]].

> [!definition|\*] Pre-Sheaves
> Given a Topological space $(X, \tau)$ a pre-sheaf of [[Groups|abelian groups]] or rings on $X$ is a pair $(\mathcal{F}, \rho)$ consisting of
>
> 1. Family of abelian groups $\mathcal{F} := \set{\mathcal{F}(U) \midline U \in \tau}$
> 2. A family of group homomorphisms $\mathcal{F}(U) \to \mathcal{F}(V)$ $\rho := \set{\rho^{U}_{V} \midline U, V \in \tau, V \subset U}$ such that
>
> - $\rho^{U}_{U} = id_{\mathcal{F}(U)}$
> - $\rho^{U}_{W} = \rho^{V}_{W} \circ \rho^{U}_{V}$ for all ${} U, V, W \in \tau$
>   and we call the maps $\rho$ restrictions on $\mathcal{F}$

We have some notational remarks that will simplify things for us

- We call $\mathcal{F}(V) \in \mathcal{F}$ a section of $\mathcal{F}$ over $V$, denoted $\Gamma(V, \mathcal{F})$ similar to the definitions of [[Vector Bundles]]
- Usually we can denote the restrictions via the usual restriction notation: $S \in \mathcal{F}(V)$ with $U \subset V$ we get $\rho^{V}_{U}(S) = \at{S}{U}$

> [!example|\*] Presheaf of Continous Functions
> The canonical example one should think of when thinking of sheaves is to consider the construction of continous real functions. We can consider the topological space $(\R, \mathcal{B})$ and the family
> $\mathcal{C}(U) = \set{f: U \to \R \midline f \text{ is continous}}$
> gives us a presheaf of rings. The restriction is just the usual function restriction making the tuple a presheaf.

This example is so important because as we will see later this is even a sheaf which is why it has a those nice local-globa properties we have mentioned before. Compare this to the following example which should feel subtely different

> [!example|\*] Presheaf of Bounded Continous Functions
> Let us consider the topological space $(\R, \mathcal{B})$ and the presheaf of locally bounded continous functions, i.e.
> $\mathcal{C}_{b} (U) = \set{f:U \to \R \midline f \text{ is continous and bounded}}$
> for any $U \subset \R$ open. This is a presheaf but as we will note in the next chapter its missing a subtle property compared to the last which will differentiate this into not being a presheaf.

> [!example|\*] Trivial Example: Locally constant Presheaf
> Let $G$ be a fixed [[Groups|abelian group]] or Ring, then we can define $\mathcal{F}(U) := \begin{cases} G, \quad U \neq \emptyset \\ \set{e}, \quad U = \emptyset\end{cases}$
> where $e$ is the identity element of $G$.
> A restriction is then defined to be $\rho^{U}_{V} = \begin{cases}id_{G}, \quad V \neq \emptyset \\ e, \quad V = \emptyset \end{cases}$
> Then $(\mathcal{F}, \rho)$ is a pre-sheaf of [[Groups|abelian groups]].

We in fact can consider the category of presheafs and ask outselves what a map between presheaves should satisfy.

> [!definition|\*] Morphisms of Presheaves
> Let $\mathcal{F}_{1}, \mathcal{F}_{2}$ two presheaves over a topological space $X$ and consider a family of maps
> $\phi = \set{\phi_{U}: \mathcal{F}_{1}(U) \to \mathcal{F}_{2} (U) \midline U \subset X \text{ open}}$
> a morphism of presheaves if for any two open sets $U \subset V \subset V$ the following diagram commutes
>
> $ \begin{CD} \mathcal{F}_{1}(U) @>\phi_{U}>> \mathcal{F}_{2}(U)\\ @V\rho^{U}_{V}VV @VV\rho^{U}_{V}V \\ \mathcal{F}_{1}(V) @>>\phi_{V}> \mathcal{F}_{2}(V)\end{CD}$
> we often denote the morphism of sheaves as a single function
> $\phi: \mathcal{F}_{1} \to \mathcal{F}_{2}$

# Sheaves

The whole point of this application of presheaves is to consider local structures in a topological space $X$. In order to be able to state a local-global statement we need some way to move from the locally defined presheaves to some more globally defined presheaves. The restriction goes from bigger open sets to smaller ones, but we would like to find a way to go from smaller to bigger sets.

An instructive example is from before the presheaf of locally bounded continous functions. We can consider a function $f_{n}: [n-2, n+2] \to \R, \quad t \mapsto t$
then we know that for all $n \in \N$ we have
$\max f = \max \set{|n-2|, |n+2|} < \infty$
thus $f_{n} \in \mathcal{C}_{b}([n-2, n+2])$. This means we have a collection of locally defined functions that are all bounded and continous on a small piece of the real line. Also note that each of the Domains overlap slightly which would intuitively mean that we can consolidate the functions
$f_{0}, f_{1}, f_{2}$
into one function $[-2, 4] \to \R, \quad t \mapsto t$
the problem in this example is that this gives us a global function
$F: \R \to \R, \quad t \mapsto t$
and $\rho^{\R}_{[n-2, n+2]} F = f_{n}$
which isnt bounded globally.

This is an interesting example since we like to glue local functions together in our sheaf but cant always do that. We would like this though which is why this gluing property is characterising for a presheaf becoming a sheaf.

> [!definition|\*] Sheaves
> A pre-sheaf $\mathcal{F}$ over $(X, \tau)$ is called a sheaf, if for all $U \in \tau$ and every family of subsets $\set{U_{i} \in \tau}$ with $U = \bigcup U_{i}$ if the following hold:
>
> 1. $f, g \in \mathcal{F}(U)$ with $f \mid_{U_{i}} = g \mid_{U_{i}} \implies f = g$
> 2. Suppose $f_{i} \in \mathcal{F}(U_{i})$ satsfies the gluing condition $f_{i} \mid_{U_{i} \cap U_{j}} = f_{j} \mid_{U_{i} \cap U_{j}} \implies \exists f \in \mathcal{F}(U) \text{ with } f \mid_{U_{i}} = f_{i}$
