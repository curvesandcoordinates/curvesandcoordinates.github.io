---
publish: true
created: 2025-05-11T00:19:24.268+02:00
modified: 2026-06-10T19:14:51.676+02:00
tags:
  - thoughts
---

## What is a measurable set?

The idea of a measure is that we want to formalize the idea of measuring some subset of a space: Think measuring the length of a line segment of the real line.

To do this we define firstly in general a set of objects which is measurable and then we use this collection to measure things.

> [!definition|\*] $\sigma$-Algebra
> Let $\Omega \neq \emptyset$ a Set and $\mathcal{A} \subset \mathcal{P}(\Omega)$ then we call $\mathcal{A}$ a $\sigma$-Algebra on $\Omega$ if
>
> 1. $\Omega \in \mathcal{A}$
> 2. $A \in \mathcal{A} \implies A^{c} \in \mathcal{A}$
> 3. Given an infinite Sequence $(A_{j})_{j\in \N}$ with $A_{j} \in \mathcal{A}$ we have $\bigcup_{j=1}^{\infty} A_{j} \in \mathcal{A}$
>    We call elements $A \in \mathcal{A}$ a set which is $\mathcal{A}$-**Measurable** and the pair $(\Omega, \mathcal{A})$ is called a **measure space**.
>    ^sigma-algebra

These are the general properties we would like a system of measurable sets to have. There are formalities in generating them and finding examples. Specifically one should note that something like a topology is related in its definition but a $\sigma$-algebra is wayy more loose.

> [!example|\*] The Borel Sigma Algebra
> The main set of objects we would like to measure is some subset of $A \subset \R^{d}$ to do this we can, via a long construction which amounts to approximating any set with a union of open balls, construct a sigma algebra on $\R^{d}$ which contains all sets that we need. The notation for this sigma Algebra is $\mathcal{B}(\R^{d})$ and it is the smallest $\sigma$-algebra containing all open sets of $\R^{d}$.
> Without going over the construction explicitly we should think that “any set you can write down will be borel measurable”.
> A good use of the term _Borel_ is also that we sometimes for a given topological space $(X, \mathcal{T})$ we call $\mathcal{B}(X)$ the smallest sigma algebra with $\mathcal{B}(X) \subset \mathcal{T}$.
> ^Borel-Sigma-Algebra

The main Idea we should keep in mind is that finding non-measurable sets in the “real world” is increadibly difficult. There is the example of the [vitali set](https://en.wikipedia.org/wiki/Vitali_set) but I never understood the [construction](https://math.stackexchange.com/questions/137949/the-construction-of-a-vitali-set).

## Measuring sets

> [!definition|\*] Measures
> Let $(\Omega, \mathcal{A})$ be a measure space. We then call a map $\mu: \mathcal{A} \to [0, \infty]$ with the properties
>
> 1. $\mu \geq 0$
> 2. For any $n \in \N$ we have $\mu \left( \bigcup_{j= 1}^{n} A_{j} \right) = \sum\limits_{j = 1}^{n} \mu(A_{j})$ for any disjoint collection $(A_{j}) \subset \mathcal{A}$
>    Then we call $\mu$ a _measure on $\Omega$_
>    ^Measure-Definition

Some prime examples of measures are

> [!example|\*] Intersting Measures
>
> 1. On the Borel sigma Algebra of $\R^{d}$ we define the measure $\lambda$ to be the _lebesgue measure_. Its construction is also extensive but it is the crux of lebesgue integration since it has some good properties namely it is the unique translation invariant measure such that $\lambda([0, 1]^{n}) = 1$
> 2. Another very notable example of a measure is the _dirac measure_ defined for a space $(X, \mathcal{P}(X))$ and some $x \in X$ as a measure with $\delta_{x}(S) = \begin{cases}1 \quad  x \in S \\ 0 \quad x \notin S\end{cases}$
>    ^Interesting-measures

> [!lemma] Decomposition of Measures
> This example is so important due to the fact that we can decompose any given measure into a representation using the dirac measure. Given a measure $\nu \in \mathcal{M}(X)$ we can write
> $\nu = \sum\limits_{x \in X} \nu_{x} \delta_x$
> where $\nu_{x} \in [0, \infty]$

`\begin{proof}`
Defining $\nu_{x} = \nu(\set{x})$ we can simply see that for any set $S = \set{x_{1}, \ldots, x_{n}} \subset X$ we get that
$\sum\limits_{x \in X} \nu_{x} \delta_{x}(S) = \sum\limits_{i=1}^{n} \nu_{x_{i}} = \sum\limits_{i = 1} ^{n} \nu(\set{x_{i}}) = \nu(\bigcup_{i=1}^{n} \set{x_{i}}) = \nu(S)$
`\end{proof}`

This decomposition is useful in the case of $X$ being finite since then this decomposition is a finite sum.

---

Some additional properties we might be interested in when talking about measures are

> [!definition] Support and Boundedness of Measures
> Given a measure $\nu \in \mathcal{M}(X)$ we define
>
> 1. The support of $\nu$ to be $\supp(\nu) = \set{x \in X \midline \nu_{x} \neq 0}$
> 2. We call $\nu$ bounded if $\nu(X) < \infty$ which is equivalent to  $0 \leq \nu_{x} < \infty$ for all $x \in X$
> 3. The set of bounded measures is denoted by $\mathcal{M}_{b}(X)$.

This concept can easily be extended to complex measures

> [!remark] Extending to Complex-Valued Measures
> Extending this structure of [[Measures]] to complex values give us a mapping
> $\nu: \mathcal{P}(X) \to \C$
> for which we have that $Re(\nu)$ and  $\Im(\nu)$ are bounded [[Signed Measures|signed measures]]. Which give us the representation
> $\nu = \sum\limits_{x \in X} \nu_{x} \delta_{x}$ with $\nu_{x} \in \C$
>
> Using the same arguments as before this lends to the fact that $M_{b}^{\C}(X)$ denotes the $\C$ the vector space of complex measures. All previously defined concepts can be extended.
