---
publish: true
aliases:
  - commutative Ring
  - unital Ring
  - ring
  - subring
  - Ring
created: 2025-11-14T12:45:22.000+01:00
modified: 2026-06-10T19:14:50.344+02:00
tags:
  - thoughts
---

A Ring is the generalization of a group. We consider as a prototype the object $(\Z, +, \cdot)$, meaning the integers with addition and multiplication. From this we see that $(\Z, +)$ is an [[Groups|abelian group]] and the multiplication interacts nicely with the operations of this group.

> [!definition|\*] Rings and Commutative Rings
> A set $R$ togehter with two maps
> $\begin{align*} +: R \times R \to R \\ \cdot: R \times R \to R\end{align*}$
> such that
>
> - $(R, +)$ is a abelian group
> - $(R, \cdot)$ is a monoid, meaning the operation is associative and has a neutral element.
>   is called a **Ring**. The ring is **commutative** if the multiplication monoid is abelian.

> [!remark|\*] Definitions may Vary
> The properties a ring should have can sometimes vary. We consider the multiplactive structure of the ring a monoid, but some see this as a sepcilization and call the ring **Unital** if it contains a multiplicative unit.
>
> An assumption we will use a lot aswell is the degenerate case when $1 = 0$ which means to say that the multiplcative neutral element is equal to the additive multiplicative element.

This definition while allowing for a lot will mostly be used in a specific context. A big part of mathematics uses commutative Rings as a structure since they lead to a nice theory of [[Polynomial Rings]] which prototypes structures around polynomials with varying coefficients.

> [!example|\*] Central Examples of Rings
>
> - $\Z, +, \cdot$ is the canonical example of a Ring
> - For a given ring $R$ consider the [[Polynomial Rings|polynomial ring]] in $n$ variables $R[x_{1}, \ldots, x_{n}]$ with polynomial addition and multiplication
> - $\Z_{n}, +, \cdot$ where multiplication and addition is given modulo $n$

## Obstacles to Being Nice - Units and Zero Divisors

A big obstacle in having a nice ring is always in finding multiplicative inverses. The definition does not require us to have any, but sometimes we would enjoy dividing by equations when working over a ring. To this end we define the set of elements with a multiplicative inverse

> [!definition|\*] Units of a Ring and Skewfields
> Let $R$ be a ring, then the **Units of the ring** are denoted by the set
> $R^{\times} = \set{a \in R\midline \exists b \in R: ab = 1}$
> where $1$ is the multiplicative neutral element.
> We call a Ring with maximal Units, meaning $R^{\times} = R \setminus \set{0}$ a **Skew-Field**

We can then note that for any ring $(R^{\times}, \cdot)$ is necessarily a group, called the multiplicative group of our ring.

Considering rings in which the multiplcative group is in every sense maximal leads to defining the nicest object in this class [[Fields]] like $\Q, \R$ and $\C$.

Another obstacle can be seen in the example $\Z_{4}$ we have that the sets of units is obviously not maximal, since $\Z_{4}^{\times} = \set{a \midline \exists b \in \Z_{4}: a b = 1 \cong 5} = \set{1}$ as $5$ is a prime number. But also we have the not nicely behaved property that
$2 \cdot 2 = 4  \cong 0$
This is called a zero-divisor, since we normally would like that like in $\Z$ the equation holds that
$a \cdot b = 0 \implies a = 0 \text{ or } b = 0$
which isnt true in $\Z_{4}$.

This leads us to the following definition

> [!definition|\*] Zero-Divisors and Integral Domains
> We call an element $a \in R$ of a ring $R$ a **zero divisor** if we can find $b \in R$ such that
> $ab = 0$
> We call a ring where $R$ an **integral domain** if it contains no zero-divisors

^3f93e1

Ultimatively we would love our field to be a skew-field, and integral domain and commutative. All this comes into defining [[Fields]]. In general though we tend to not have the skew-field or integral fomain property but still are able to say a lot about results.

### Connected Subconcepts

- [[Ideals]]
- [[Localization of Rings]]
- [[Divisibility of Rings]]
- [[Chinese Remainder Theorem]]
-
