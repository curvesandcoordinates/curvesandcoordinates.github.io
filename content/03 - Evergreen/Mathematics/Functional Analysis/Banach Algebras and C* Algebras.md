---
publish: true
created: 2025-06-15T00:05:21.873+02:00
modified: 2026-06-10T19:14:51.635+02:00
tags:
  - thoughts
---

## Banach Algebras

A Banach Algebra is a general Algebraic Structure that allows addition, multiplication and scalar multiplication for elements. Its an extension of a vector space, thus we can also define a norm on it.

> [!definition|\*] Algebra
> Let $\mathcal{A}$ be a vector space over $\mathbb{F}$ and let
>
> $\cdot : \mathcal{A} \times \mathcal{A} \to \mathcal{A}, \quad (a, b) \mapsto a\cdot b$
> with the compatibility conditions that for any $a, b, c \in \mathcal{A}$
>
> 1. $a(bc) = (ab)c$
> 2. $a(b+c) = ab + ac$
> 3. $\lambda(ab) = (\lambda a) b = a (\lambda b)$ for all $\lambda \in \C$
>
> We then call the tuple $(\mathcal{A}, \cdot)$ is called an algebra.

It is called unital if there is $e \in \mathcal{A}$ with $e a = a e = a$. It is called commutative if $a b = b a$

> [!definition|\*] Normed Algebra
> Let $\left( \mathcal{A}, \cdot \right)$ be an algebra over a field $\mathbb{F}$. If we can define a norm
> $\norm{\cdot}: \mathcal{A} \to \mathbb{F}$
> such that $\left( \mathcal{A}, \norm{\cdot} \right)$ is a normed $\mathbb{F}$-Vector Space and we have compatibility with the multiplication meaning
> $\forall a, b \in \mathcal{A}: \quad \norm{a\cdot b} \leq \norm{a} \cdot \norm{b}$
> We then call the tuple $\left( \mathcal{A}, \norm{\cdot}, \cdot \right)$ a normed algebra over $\mathbb{F}$.

> [!definition|\*] Banach Algebra
> Let $\left( \mathcal{A}, \norm{\cdot}, \cdot \right)$ be a normed algebra over $\mathbb{F}$. If this is a complete space with respect to the norm we call the tuple a banach algebra.

> [!example|\*] Examples of Normed and Banach Algebras
>
> - $\mathbb{C}$: Complex numbers with absolute value. Unital, commutative Banach algebra.
> - $C([0,1])$: Continuous complex-valued functions on $[0,1]$ with pointwise multiplication and supremum norm. Unital, commutative Banach algebra.
> - $\ell^1(\mathbb{N})$: Absolutely summable complex sequences with convolution. Commutative Banach algebra without unit.
> - $B(H)$: Bounded linear operators on a Hilbert space $H$, with operator norm and composition. Unital, non-commutative Banach algebra.
> - $\mathbb{C}[x]$: Complex polynomials with norm $\|f\| = \sup_{|x|\leq 1} |f(x)|$. Normed algebra, not complete.
> - $L^1(\mathbb{R})$: Integrable functions with convolution. Commutative Banach algebra without unit.
> - $M_n(\mathbb{C})$: Complex $n \times n$ matrices with a matrix norm. Unital, non-commutative Banach algebra.
> - $C_c(\mathbb{R})$: Continuous functions with compact support, normed by $\|f\|_\infty = \sup |f(x)|$. Normed algebra, not complete.

> [!remark|\*] Central Role in Discrete Harmonic Analysis ´
> In the context of [[Discrete Fourier Transform|discrete fourier transformation]] we often use the function space (which is a precoursor to the [[The Group Algebra|group algebra]])
> $L^{1}(G) = \set{f: G \to \C \midline \norm{f} < \infty}$
> together with the norm $\norm{f} = \sum\limits_{g \in G} |f(g)|$ which can make a Banach Algebra if we add to this normed $\C$-Vector Space the product of [[Convolution on Finite Function Spaces|convolution]] meaning
> $fg (x)  = (f * g)(x) = \sum\limits_{y \in G} f(x) g(x-y)$

## C\*-Algebras

We can also add another operation to this algebra, akin to complex conjugation. We call this operation an involution, since it has to be by definition involutive (meaning it is its own inverse).

> [!definition|\*] $\ast$-Algebras and $C^{\ast}$-Algebras
> A mapping $^{*}: \mathcal{A} \to \mathcal{A}$ is called an involution if
>
> 1. $(a+b)^{*} = a^{*} + b^{*}$
> 2. $(\lambda a) = \lambda^{*} a^{*}$ on $\C$
> 3. $a^{{*}^{*}} = a$
>
> An Algebra $(\mathcal{A}, \cdot)$ with an involution is called a $*$-algebra if $(ab)^{*} = b^{*} a^{*}$
>
> If our Algebra is a $*$-Algebra satisfying
> $\norm{a a^{*}} = \norm{a}^{2}$
> is called a $C^{*}$-Algebra

> [!example|_] Number Fields as C_-Algebra
> Consider a number field $\mathbb{F}$ which usually will be some extension of usual fields (think of the rational complex numbers $\mathbb{Q}[i]$) then we trivially have a $1$-Dimensional $\mathbb{F}$-Algebra using multiplication. We can introduce a trivial norm namely $\norm{a} = |a|$ and thus get a natural banach algebra $\mathbb{F}$. If we now introduce the natural form of conjugation by some extension element (so in the case of $\mathbb{Q}[i]$ we mean complex conjugation) we can make this number field into a $*$-Algebra.
>
> The question now is if this very natural $*$-Algebra is even a $C^{*}$-Algebra. This can be easily shown by computing
> $|a \overline{a}| = |a| \cdot |\overline{a^{*}}| = |a|^{2}$
> meaning we do have a natural $C^{*}$-Algebra in the sense defined. This example is merely to show that our concept is not void but doesn’t convey the point of the definition very well.

> [!example|\*] $\C^G$ as a $C^*$-Algebra
> Consider the set of complex valued maps on a finite abelian group $G$ called $\C^{G}$. This set has a natural multiplication and addition namely pointwise multiplication and addition in $\C$ defined as
>
> $$$\begin{align*}
> (f + g)(x) &= f(x) + g(x) \\
> (fg)(x) &= f(x) \cdot g(x)
> \end{align*}$$
> for any $x \in G$. We can naturally impose a norm on this, namely the supremums-norm given by
> $$\norm{f}_{\infty} = \max\limits_{g \in G} |f(g)|$$
> This makes $(\C^{G}, \norm{\cdot}_{\infty})$  into a banach algebra (with some small work left to be done).
> A natural next step is to contrive some involution and add it to this. Since we are working over complex numbers it already makes sense that our involution will have something to do with complex conjugation.
> A good candidate is given by
> $$f^{*}(x) = \overline{f(-x)}$$
> The linearity of complex conjugation gives us all the properties of an involution and thus $(\C^{G}, \norm{\cdot}_{\infty}, \ast )$ are a good example of a ${*}$- Algebra.
> The last step is to note that the supremums norm has the property that
> $$\norm{f g}_{\infty} = \norm{f}_{\infty} \cdot \norm{g}_{\infty}$$
> and also due to the isometry of complex conjugation we get
> $$\norm{f^{*}} = \norm{f}$$
> these two properties give us trivially the defining $C^{*}$-Property
> $$\norm{ff^{*}}_{\infty} = \norm{f}_{\infty}\cdot \norm{f^{*}}_{\infty}= \norm{f}_{\infty}^{2}$$
> thus our tuple is even a $C^{*}$-Algebra.
> $$$

> [!example|\*] $L^1 (G)$ as a $*$-Algebra
> Another example used in [[MA5911 Discrete Harmonic Analysis|discrete harmonic analysis]] is [[The Group Algebra|the group algebra]] of a [[Groups|finite abelian group]] $G$ which takes our previously defined $(L^{1}(G), \norm{\cdot})$ and adds to it the involution used in the previous example. This in general is only a $*$-Algebra since
> $(f g)^{*} (x) = \overline{(f \cdot g (-x))} = \overline{\sum\limits_{y \in G} f(-x) g(y-x)} = \sum\limits_{y \in G} \overline{f(-x) g(y-x)} = \sum\limits_{y \in G} g^{*}(x) f^{*}(x-y) = g^{*} \cdot f^{*}(x)$
> Turning this into a $C^{*}$ algebra is not possible with this norm. We would need to create an analogue to the $L^{2}$ norm and use that.

^19cc48
