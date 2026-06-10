---
publish: true
created: 2025-06-05T12:14:32.000+02:00
modified: 2026-06-10T19:14:51.645+02:00
tags:
  - thoughts
---

When integrating we often overlook the formality of negative [[Measures|measures]]. In general we will quickly just define tha formalisms of signed measures and their connection to the usual measures we have defined.

> [!definition] Signed Measures
> A mapping $\nu: \mathcal{P}(X) \to \R$ with the property that either
>
> 1. $\nu(\mathcal{P}(X)) \subset [- \infty, \infty [$
> 2. $\nu(\mathcal{P}(X)) \subset ] -\infty, \infty]$
>    With the usual property that $\nu \left( \bigcup_{j= 1}^{n} A_{j} \right) = \sum\limits_{j = 1}^{n} \nu(A_{j})$ for any disjoint collection $(A_{j})$ is called a **signed measure**

Interestingly this definition of a measure allows us to intuitively decompose a signed measure into a positive and negative part.

> [!lemma] Decomposition of Signed Measures
> A signed measure $\nu$ gives rise to a decomposition of $X$ into
>
> $$$\begin{align*}
> P &= \set{x \in X \midline \nu(\set{x}) \geq 0} \\
> N &= \set{x \in X \midline \nu(\set{x}) \leq 0}
> \end{align*}$$
> Which in turn gives rise to the decomposition of $\nu$ into its positive and negative variations which are given by
> $$\begin{align*}
> \nu^{+}: \mathcal{P}(X) \to [0, \infty], && \nu^{+}(A) = \nu(A \cap P) \\
> \nu^{-}: \mathcal{P}(X) \to [- \infty, 0], && \nu^{-}(A) = \nu(A \cap N)
> \end{align*}$$
> From this resulting we get that $$\nu = \nu^{+} + \nu^{-}$$
> $$$

Using this decomposition we can create a sense of a total area which is defined by the variation

> [!definition] Total Variation of a Signed Measure
> Given a Signed Measure $\nu$ we can define the total variation of $\nu$ to be the measure given by
> $|\nu|: \mathcal{P}(X) \to [0, \infty] \quad |\nu|(A) = \nu^{+}(A) - \nu^{-}(A)$

Given that we can still decompose the signed measure $\nu$ we get that
$\nu = \sum\limits_{x \in X} \nu_{x} \delta_{x} \implies |\nu| = \sum\limits_{x\in X} |\nu_{x}| \delta_{x}$
We can also see that a signed measure $\nu$ is bounded if $\nu^{+}(X) < \infty$ and $\nu^{-}(X) < \infty$ or equivalently if $|\nu|(X) < \infty$.

Lastly we also want to define the space in which these [[Measures|measures]] live:

> [!definition] The Sapce of Bounded Signed Measures
> The set of bounded signed measures denoted  by $M_{b}^{\R}(X)$ is an $\R$-Vector Space with basis $\set{\delta_{x} \midline x \in X}$. Thus it is of dimension $\dim M_{b}^{\R}(X) = |X|$.
> Using the norm $\norm{\nu} = |\nu | (X)$
> We obtain that this $\R$-Vector Space is normed.
