---
publish: true
aliases:
  - Convolution Operator
  - convolution operator
created: 2025-06-19T13:34:40.518+02:00
modified: 2026-06-10T19:14:51.386+02:00
tags:
  - thoughts
---

Convoultion is an operation that takes two function and combines them in a specific way. We can generalize this to function spaces on infinite sets, like real functions. This requires some extra care on the support of those functions, but the finite case does not require this.

We can apply this specific form of convolution in [[3. Harmonic Analysis on Finite Abelian Groups|harmonic analysis on finite abelian groups]] and will specifically concern outselves with functions defined on a [[Groups|finite abelian group]] $G$.

> [!definition|\*] Convolution Operator
> Let $X$ be a Group and let $f, g \in L^{1}(X)$ two integrable functions on $X$. We then define a new function, called the **convolution**
> $f * g (x) = \sum\limits_{y\in X}f(y) g(x-y)$

We can also rewrite the convolution operator (as is often done) with the [[Common Linear Operators of Harmonic Analysis#The Translation Operator|translation operator]] in mind
$f*g(x) = \sum\limits_{y\in X} f(y) T_{-y}g(x)$

In the context of a a finite abelian group we ca generally work out the following properties

> [!proposition|\*] Basic Properties of Convolution
> Let $G$ be a finite abelia group and consider $f, g, h \in L^{1}(G)$. The convolution then has the following properties:
>
> 1. Symmetry: $f * g = g * f$
> 2. Associativity: $f * (g * h) = (f * g) * h$
> 3. Distributivity: $f * (g + h) = f * g + f * h$
> 4. Bilinearity: $f * (\lambda g) = (\lambda f) * g = \lambda (f * g)$ for all $\lambda \in \C$
> 5. Neutral Element of Convolution: $f * \delta_{0} = f$
> 6. Submultiplicativity: $\norm{f*g}_{1} \leq \norm{f}_{1} \norm{g}_{1}$

^4955ce

`\begin{proof}`
**1. Symmetry**
This is a direct consequence of the commutativity on $G$. We can simply express that
$(f * g) (x) = \sum\limits_{y\in G} f(y) g(x-y) = \sum\limits_{y \in G} g(x-y) f(y) = \sum\limits_{z \in G} g(z) f(x-z) = (g * f)(x)$

**2. Associativity**
This is a consequence of the group properties
$[f* (g*h)] (x) = \sum\limits_{y \in G} f(y) (g * h)(x - y) = \sum\limits_{y \in G} f(y) \sum\limits_{z \in G} g(z) h(x-y-z) = \sum\limits_{y, z \in G} f(y) g(z) h(x -y -z)$
and
$[(f * g) * h](x) = \sum\limits_{y \in G} (f * g)(y) h(x - y) = \sum\limits_{y \in G} \sum_{z \in G} f(z) g(y - z) h(x - y) = \sum\limits_{y, z \in G} f(y) g(z - y) h(x - z)$
which via swapping variables gives us the same expression.

**3. Distributivity**
Simple calculation yields
$[f * (g + h)] (x) = \sum\limits_{y \in G} f(y) (g + h)(x - y) = \sum\limits_{y \in G} f(y) g(x - y) + \sum\limits_{y \in G} f(y) h(x - y) = (f * g)(x) + (f * h)(x)$

**4. Bilinearity**
$[f * (\lambda g)](x) = \sum\limits_{y \in G} f(y) \lambda g(x - y) = \lambda \sum\limits_{y \in G}f(y) g(x-y) = \lambda (f * g)$
**5. Neutral Element of Convolution**
$(f * \delta_{0})(x) = \sum\limits_{y \in G} f(y) \delta_{0} (x - y) =f(x)$
since
$\delta_{0}(x - y) = 1 \iff x = y$
**6. Submultiplicativity**
$\norm{ f *g }_{1} = \sum\limits_{y \in G} |(f * g)(y)| = \sum\limits_{y \in G} \left| \sum\limits_{z \in G} f(z) g(y - z) \right| \leq \sum\limits_{y \in G} \sum\limits_{z \in G} |f(z)| \cdot |g(y - z)|$
Via the cauchy product we get
$\norm{ f * g }_{1} \leq \left(\sum\limits_{a \in G} f(a)\right) \cdot \left(\sum\limits_{b \in G} g(b)\right)  = \norm{ f }_{1} \cdot\norm{ g }_{1} $
`\end{proof}`

Two central properties of the convolution on finite abelian groups are the last two:
5\. The fact that we have an identity for convolution is a consequence of finite abelian groups and is non-trivial
6\. This relates to “norm-algebra” structure.

### Compared to the real case

Interestingly these things already dont hold on the real numbers. Eventhough you might see some physicist write incorrectly that we define some map $\delta_{0}$ such that
$\int_{\R} f(y) \delta_{0}(x - y) dy = f(x)$
Formally we could maybe even define $\delta_{x}: L^{1}(\R) \to \C, \delta_{x}(f) = f(x)$ but even this _dirac-measure_ doesn’t get us anywhere formally.

### The Convolution Theorem

One of the main properties of convolution is given if we consider it in combination with the [[Discrete Fourier Transform]]. The very abrupt and arbitrary mixing of function values becomes more understandable when considering what happens on a frequency level. This fact is often called the convolution theorem since in many respects it is one of the defining properties of the convolution

> [!theorem|\*] Convolution Theorem
> Given a finite abelian group and $f, g \in \C^G$. Then
> $\widehat{f * g}(\chi) = \widehat{f}(\chi) \cdot \widehat{g}(\chi)$

`\begin{proof}`
This fact is simple calculation since
$\widehat{f * g} (\chi) = \sum\limits_{x \in G} (f * g)(x) \overline{\chi(x)} = \sum\limits_{x \in G} \sum\limits_{y \in G} f(y) g(x - y) \overline{\chi(x)} = \sum\limits_{x,y \in G} f(y) \overline{\chi(y)} g(x -y) \overline{\chi(x -y)}$
using the cauchy product formula we get
$\widehat{f * g}(\chi) = \left(\sum\limits_{x \in G} f(x) \overline{\chi(x)}\right) \cdot \left(\sum\limits_{x \in G} g(x) \overline{\chi(x)}\right) = \widehat{f}(\chi) \cdot \widehat{g}(\chi)$
`\end{proof}`

## Where to go from here?

- We can use convolution to make suitable [[Functions on Finite Sets|finite function spaces]] namely the $L^p(G)$ spaces we can make them into a [[Banach Algebras and C* Algebras#Banach Algebras|banach algebra]] with multiplication being convolution
- We can generate operators via a given function using convolution. Given a function $h$ we can define $C_{h}f = (f * h)$ this leads to the theory of [[Convolution Transformation Algebra|convolution transformation algebras]] which is the fundamental to the ideas of [[Signal Analysis|signal analysis]].
