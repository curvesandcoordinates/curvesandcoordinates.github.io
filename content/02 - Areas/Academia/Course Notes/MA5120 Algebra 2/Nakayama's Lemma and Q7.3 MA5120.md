---
publish: true
created: 2023-12-28T01:30:01.710+01:00
modified: 2026-06-10T19:12:42.555+02:00
tags:
  - academia
---

## The Setting

We are considering a finitely generated $R$-Module $M$ for a ring $R$ with a Jacobson Ideal $J$. Since we are in Commutative Ring Theory it helps to use the "Algebra-Geomtry Lexicon" to slightly translate what these things could mean. Ignoring the Module at play we can think of $R$ as a prototype for some polynomial Ring, and then the Jacobson Radical is the set of Polynomials, that are $0$ at every point. Here we can easily see that this is the same as the Nillradical, which is supposed to coincide with the Jacobson Ideal in Jacobson rings.

## Nakayama's Lemma

First introduced as a deep but rather, at first, technical Lemma Nakayama's Lemma states the following:

> [!lemma|\*] Nakayama
> For a Ring $R$ with Jacobson Ideal $J$ and $M$ a finitely generated $R$-Module we have: $J\cdot M = M \implies M = \set{0}$

`\begin{proof}`
Assume $M \neq 0$. since $M = (m_{1}, ..., m_{n})_{R}$ we can assume this generator to be minimal. Then since $J \cdot M = M$ we know that $m_{n}= \sum\limits_{i=1}^{n} a_{i}m_{i}$ with $a_{i} \in J$. We can now equivalently state that $\begin{align*}
m_{n} &= \sum\limits_{i=1}^{n} a_{i}m_{i}\\
m_{n} - a_{n}m_{n} &= \sum\limits_{i=1}^{n-1} a_{i}m_{i}\\
(1-a_{n})m_{n} &= \sum\limits_{i=1}^{n-1} a_{i}m_{i}
\end{align*}$
We can now use a nice characterisation for any elements of Jacobson Ideals, namely that $\begin{align*}
x \in J \iff 1-xy \in R^{\times} && \forall y \in R
\end{align*}$
Meaning $1-a_{n}$ is actually a Unit, so we can consider: $m_{n} = \sum\limits_{i=1}^{n-1} (1-a_{n})^{-1} a_{i} m_{i} = \sum\limits_{i=1}^{n-1} R_{i} m_{i}$ going against our minimality condition from before.
`\end{proof}`

Seeing this we can see that Nakayama's Lemma tells us something about being close enough to $0$ equaling zero, and is actually rather simple to prove.

## Context of Q7.3

We will now put all these objects into a context we can work with more. Consider a Ring $R$ and its Jacobson Ideal $J$. Let $M$ also be finitely generated and consider the factor $R/J$-module $M / JM$ and let $\pi$ be the canonical projection.

Our first question in this situation is why we are looking at the Module $M/JM$. It is meant to resemble the equality $M = JM$ and is mostly applicable when we consider a local ring (which we will do later).
In a Local ring with maximal Ideal $m$ we have the Jacobson Ideal $J = m$ and the Module we are considering is $M/mM$ which is an $R/m$-Module. Since $R/m= K$ is a Field we can now consider $M/mM$ to be similar to a vector space in structure

Let us now state the first Problem

> [!claim|\*] Part A - Covering Enough
> Let $L \subseteq M$ be a Submodule. Then we have that $L = M \iff \pi(L) = \pi(M)$

`\begin{proof}`
The direction $\Rightarrow$ is clear, so we only need to show $\Leftarrow$
Given the assumption that $\pi(L) = \pi(M)$ we will want to use Nakayama's Lemma to show that $M/L=0$ and thus $M = L$. To use Nakayama though we need to show $J \cdot M/L = M/L$
Our assuption gives us that for any $m \in M \exists l \in L: \pi(m) = \pi(l)$  thus $0=\pi(m)-\pi(l) = \pi(m-l)$
so $m-l \in JM$ meaning
$m-l = \sum\limits_{i=1}^{n}\lambda_{i} m_{i}$
Since we are mainly interested in $M/L$ we will take the above equation modulo $L$
$M/L \ni m + L = (m-l) +L = \left( \sum\limits_{i=1}^{n}\lambda_{i} m_{i} \right) + L = \sum\limits_{i=1}^{n}\lambda_{i} (m_{i} + L) \in J\cdot M/L$
This means our assumption is enough to give us $J \cdot M/L = M/L$ thus $M/L = 0$ and $M = L$
`\end{proof}`

This result morally expresses the idea that $L$ embedded into our Quotient Module $M/JM$ covers it enough to give us equality of $L$ and $M$.

---

The Next Problem s now concering the finite generation of our Modules

> [!claim|\*] Part B - "Basis Transfer"
> Let $m_{1}, ..., m_{n} \in M$ then $M = (m_{1}, ..., m_{n})_{R} \iff M/JM = (\pi(m_{1}), ..., \pi(m_{n}))_{R/J}$

`\begin{proof}`
This is a nice application / corollary from the last statement. Just set $L = (m_{1}, ..., m_{n})_{R}$ and then by homomorphism properties we get that $\pi(L) = (\pi(m_{1}), ..., \pi(m_{n}))_{R/J}$ thus the claim follows exactly from Part A
`\end{proof}`

---

We now move the previous insights into the special case for $R$ being a local ring. Meaning we are now mainly working with $J = m$ and $M/JM = M/mM$ is a Vector Space.

> [!claim|\*] Part C - "Basis" Property for Modules over Local Rings
> For $R$ local with maximal Ideal $m$ and $K = R/m$ let $\set{m_{1}, ..., m_{n}}$ be a minimal set of Generators of M, then$n = \dim_K(M/mM)$

`\begin{proof}`
From Part B we know that $\set{m_{1}, ..., m_{n}}$ generates $M$ if and only if $\set{\pi(m_{1}), ..., \pi(m_{n})}$ generates the $K$-Vector Space $\pi(M)$. This means that $\set{m_{1}, ..., m_{n}}$ generates $M$ minimally if and only if $\set{\pi(m_{1}), ..., \pi(m_{n})}$ minimally generates $\pi(M)$ meaning $\set{\pi(m_{1}), ..., \pi(m_{n})}$ is a Basis of the Vector Space.
`\end{proof}`

> [!info]
> This result gives us for free, that for any finitely generated module over a local Ring cardinality of any minimally generating Set is equal

an Example where the Previous Claim does not work out is when we consider simply $M = R = \mathbb{Z}$ since here we can have minimal generating systems of different sizes, like $\set{1}$ and $\set{2, 3}$
