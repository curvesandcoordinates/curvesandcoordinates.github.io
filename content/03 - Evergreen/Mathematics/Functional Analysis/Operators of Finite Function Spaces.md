---
publish: true
created: 2025-06-14T14:35:06.000+02:00
modified: 2026-06-10T19:14:51.638+02:00
tags:
  - thoughts
---

In the context of [[Functions on Finite Sets|functions from finite sets]] we can define a simple version of operator theory. This derades into simple statements from linear algebra so we wont go into it too much. This simplification occurs due to the fact that
$\C^{X} = \set{f: X \to \C}$
where $X$ is finite makes a $\C$-Module. This module has dimension $|X|$ with a simple canonical basis given by the so called [[Measures#^Interesting-measures|dirac delta]] which basically acts as a indicator function would. In the following we will assume that $X$ is a finite set and not mention this fact repetedly.

> [!definition|\*] Operators
> For two finite sets $X, Y \neq \emptyset$ we call a linear mapping $A: \C^{X} \to \C^{X}$ a linear operator. The space of all linear operators from $X$ to $Y$ is defined as
> $\mathcal{L}(\C^{X}, \C^{Y}) = \set{A: \C^{X} \to \C^{Y} \midline A \text{ linear}}$

> [!remark|\*] Notation for Operators
> We will always write $Af$ instead of $A(f)$ since writing $Af(x)$ is easier than $A(f)(x)$

An important decomposition which is possible on finite sets is the following lemma

> [!lemma|\*] Action on a Basis Determines Operators
> Given two finite sets $X, Y \neq \emptyset$  a given Operator $A \in \mathcal{L}(\C^{X}, \C^{Y})$ is uniquely determined by the following decomposition
> $Af(y) = \sum\limits_{x \in X} A\delta_{x}(y) f(x)$
> for $f \in \C^{X}$

`\begin{proof}`
This simply holds by linearity of $A$ since we know that any map $f \in \C^{X}$ is given by the decomposition
$f = \sum\limits_{x \in X} f(x) \delta_{x}$
`\end{proof}`

By linearity $A \in \mathcal{L}(\C^{X}, \C^{X})$ is uniquely determined by its action on $\set{\delta_{x}}$. Then
$A \delta_{y}(x) = a(x, y)$

> [!definition|\*] Kernel of Operator
> For $f \in \C^{X}$ and $A \in \mathcal{L}(\C^{X}, \C^{X})$ we have
> $Af(x) = \sum\limits_{y\in X} a(x, y) f(y)$
> The function $a: X \times X \to \C$ is called the kernel of $A$

Think of this kernel as a more abstract matrix representing the endomorphism of the $\C$-Vector spaces $\C^{X}$ for some finite $X$. Since then any function $f \in \C^{X}$ can be seen as a vector $f = \begin{pmatrix}f(x_{1}) & f(x_{2}) & \ldots & f(x_{N})\end{pmatrix}^{T}$ with $X = \set{x_{1}, x_{2}, \ldots, x_{N}}$. The basis we are working with respect to here is the canonical basis of delta function $B = \set{\delta_{x_{1}}, \delta_{x_{1}}, \ldots, \delta_{x_{1}}}$. In this basis the Kernel is simply a matrix representation of what happens to the basis vectors, like in the normal linear algebra case.

Let $Z \neq \emptyset$ finite set and $A \in \mathcal{L}(\C^{X}, \C^{Y})$ and $B \in \mathcal{L}(\C^{Y}, \C^{Z})$ then $C = A \circ B$ is in $\mathcal{L}(\C^{X}, \C^{Z})$also we have that
$c(z, x) = \sum\limits_{y \in Y} a(z, y) b (y, x)$
If $A \in \mathcal{L}(L^{p}(\nu), L^{p'}(\nu'))$then we can define
$\norm{A}_{L^{p} \to L^{p'}(\nu')} = \sup_{\norm{f}_{L^{p}(\nu)}} \norm{A f}_{L^{p'}(\nu')}$
is a norm on $\mathcal{L}(L^{p}(\nu), L^{p'}(\nu'))$.

Another property a given operator can have is to have a sort of “isotropy” in its domain. This is defined by invariance

> [!definition|\*] Translation Invariant Operators
> We call an operator $A \in End(\C^{G})$ translation invariant (or also $G$ invariant) if
> $T_{x} A = A T_{x} \quad \forall x \in G$

We can characterise translation invariant operators via the kernel using the following proposition

> [!proposition|\*] Characterising Translation Invariance using the Kernel
> Given an operator $A \in End(\C^{G})$ for some finite group $G$ and its kernel $a \in \C^{G \times G}$ then we have that
> $A \text{ is translation invariant} \iff a(x-z, y-z) = a(x, y) \quad x, y, z \in G$

`\begin{proof}`
Consider a map $f \in \C^{G}$ with the definition $\tilde{f} (x) := T_{z} f(x) = f(x + z)$ we can explicitly spell out translation invariance
$T_{z} A f(x) = A T_{z}f (x) = A \tilde{f}(x)$
working out each side gives us
$T_{z} A f(x) = \sum\limits_{y \in G} a(x + z, y) f(y)$
and
$A \tilde{f}(x) = \sum_{y \in G} a(x, y) \tilde{f} (x) = \sum_{y \in G} a(x, y) f(x + z) = \sum\limits_{\alpha \in G} a(x, \alpha - z) f(\alpha)$
This gives us that we have
$0 = T_{z} Af(x) - A \tilde{f}(x) = \sum\limits_{y \in G} \left(a(x + z, y) - a(x, y - z)\right) f(y) \iff a(x + z, y) = a(x, y - z)$
From this we get the property we defined
$a(x - z, y - z) = a(x, y - z + z) = a(x, y)$
`\end{proof}`

### Scalar Product on Operators

On a space of operators we can define a scalar product on operators. The simplest definition for this is to consider $\C^G$ and its canonical basis $\set{\delta_{g} \midline g \in G}$. We have already shown that the action of an operator in $\mathcal{L}(\C^G)$ is determined by its action on the canonical basis. We can then compare how the operator acts on the canonical basis by using the scalar product defined in the Hilbert-Space $\C^G$

> [!definition|\*] Hilbert-Schmidt Product
> Given Operators $A, B \in \mathcal{L}(\C^G, \C^G)$ for some finite abelian group $G$ we can define a scalar product given by
> $\innprod{A}{B}_{HS} = \sum\limits_{n = 0}^{N-1} \innprod{A \delta_{n}}{B \delta_{n}} = \sum\limits_{n=0}^{N-1} \sum\limits_{g \in G} A \delta_{n}(g) \overline{B \delta_{n} (g)}$

^f98065
