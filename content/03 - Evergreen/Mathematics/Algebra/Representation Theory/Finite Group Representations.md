---
publish: true
created: 2025-10-19T00:42:34.000+02:00
modified: 2026-06-10T19:14:50.077+02:00
tags:
  - thoughts
---

When talking about [[Groups|groups]] the beginning intuition is always given as some symmetry groups of an object like a rubics cube or a triangle. This intuition is quickly abandonded though in order to quickly get to the formalism.

We can stick to this image though by considering that any group can act on a vector space if we define the group action in a consitent way. The most general way to state this is given by representations, which aim to show properties of groups using images of these groups are automorphisms of a vector space.

## Basics Definitions

Let $G$ be a group and $V$ a Vector Space over $\K$. We then deonte the automorphism group of $V$ as
$\mathrm{GL}(V) = \mathrm{Aut}(V) := \set{F: V \to V \midline F \text{ linear and invertible}}$
We then define

> [!definition|\*] Representation
> A representation of $G$ on $V$ is a group homomorphism
> $\pi:G \to \mathrm{GL}(V)$
> The Vector-Space $V$ is called the representation space of $\pi$. $d_{\pi} = \dim V$ is called the dimension of the representation and we often denote representations as a tuple $(\pi, V)$.

As the definition requires a group homomorphism we immediately know that for a given representation $(\pi, V)$ we have some basic properties

$$$\begin{align*}
\pi(g g') &= \pi(g)\pi(g') \\
\pi(g^{-1})&= \pi(g)^{-1} \\
\pi(e) &= id_{V}
\end{align*}$$

> [!example|*] Simple Example
> For a simple example of a representation consder for some $n \in \N$ the complex numer $\omega_{n} = e^{\frac{2\pi i}{n}}$ then we can consider 
> $$G = \langle \omega \rangle \subset \C^{\times}$$
> then we can consider the representation given by $\pi: G \to \mathrm{GL}(\C)$ where
> $$\pi(\omega^{k})z = \omega^{k} z$$
> We sometimes call $G = \mathbb{T}_{n}$ the finite torus group and can interpret it acting on $\C$ by multiplication. This can be seen as rotating by the $\mathrm{Arg}$ of each group element.
> d
> You can also pull this representation back to another group by simply considering $\tilde{\pi}: \Z_{n} \to \mathrm{GL}(\C)$ with
> $$\tilde{\pi}(k) = \pi(\omega^{k}) = \omega^{k} z$$
> which is also trivially a representation.

In general we can now define some simple properties of representations that qualify what special case we are talking about

> [!definition|*] Invariant Subspace and Subrepresentation
> Given a representation $(\pi, V)$ of $G$ we call a subspace $W \subset V$ invariant with respect to $(\pi, V)$ if
> $$\forall g \in G: \pi(g) W \subset W$$
> Also note that if $W \subset V$ is an invariant subspace with respect to $(\pi, V)$ then we have
> $$\pi^{W}: W \to GL(V), \quad g \mapsto \pi(g)$$
> is a representation on $G$. Specifically we call such a representation a subrepresentation of $\pi$ and denote it $$\pi^{W} \preceq \pi$$

We can think of this 
$$$
