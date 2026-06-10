---
publish: true
created: 2026-02-12T09:33:34.297+01:00
modified: 2026-06-10T19:14:50.080+02:00
tags:
  - thoughts
---

A quite central property to linear algebra is that all properties in a vector space are given by finding a basis. The main power in all of the theory lies in this. For a general $R$-[[Ring Modules|Module]] we can also consider similar objects, and note that Modules in which this basis property is still alive are called Free. Because of the complexities given by $R$ we can note though that there might be modules that cant admit a basis-like object.

> [!definition|\*] Dependence and Generation
> Let $M$ be some $R$-Module and $S \subset M$:
>
> - $S$ is called **linearly independent** if for all finite $N \subset S$: $\sum\limits_{s_{i} \in N} r_{i} s_{i} = 0 \implies r_{i} = 0$
> - S **generates** a submodule $<S> := \set{\sum\limits_{i = 1}^n r_{i} s_{i} \midline n \in \N, r_{i} \in R, s_{i} S}$
> - We then call $S$ a basis of $M$ if it is linearly independent and $<S> = M$
> - Any Module that admits a basis is called a free module

Let us now consider some examples to see where this definition might work or not work.

> [!example|\*] Free and Non-free modules
>
> - $\Z^{k}$ is a free $\Z$-module
> - $\Z_{k}$ is not free as a $\Z$-module
> - Smooth Sections of a manifold $\Gamma(TM)$ as a $\C^{\infty}(M)$-module is free if and only if $M$ is parallelisable (meaning that $TM \cong M \times \R^{\dim M}$ as a vector bundle)
>   - For example $M = S^{2}$ we know by the Hairy-Ball theorem that every smooth section has one zero point, which means we couldnt use these vector fields as a basis.
>   - Only $S_{1}, S_{3}$ and $S_{7}$ give rise to free modules in their vector fields

> [!remark|\*]
>
> - Consider $\Z$ as a $\Z$-Module. Then the set $\set{2, 3}$ is lineadrly independent, but we dont get a basic property that we can not express any element of this set as a linear combination of the rest. This is a common characterization of lin. Independence that is not equivalent to ours here.
> - We also can not guarantee that submodules of free modules are themselves free. Consider for this the example that we already know that $\Gamma(TS^{2})$ is not free eventhough $\Gamma(TS^{2}) \leq \Gamma(T \R^{3})$ which is free since $\R^{3}$ is trivially parallelizable.
> - Even if our submodule of a free module is free it is not even given tha we can extend the basis of the submodule to the basis of our entire module. Consider $2 \Z \leq \Z$ both free $\Z$-Modules. Then we have a basis given by $\set{2}$ which is not a basis of $\Z$ and cant be extended to one.

A nice property of Free modules is that they have the property that their dimension is a unique invariant, just like we know from Vector Spaces

> [!theorem|\*] Rank of the Module
> If $A, B$ are bases of a free $R$-Module $M$ then they have the same cardinality. We call this cardinality the dimension or rank of $M$ denoted by
> $\dim_{R}(M) := |A| = |B|$

`\begin{proof}`
The proof is slightly convoluted since we are not assuming that $0 = 1$ in $R$. We thus have to consider two cases:

Assume $0 = 1$ in $R$ then we know that $R = \set{0}$, this implies $M = \set{0}$. Depending on your definition you get hat this module is either not free or $0$ or $1$ dimensional. In any case we know that the statement is trivial.

Now assume $0 \neq 1$ then let $A = \set{a_{1}, \ldots, a_{n}}$ and $B = \set{b_{1}, \ldots, b_{m}}$ be two bases generating $M$. Then we can write a Basis change as a linear map acting
$b_{i} = \sum\limits_{j = 1}^{n} B_{ji} a_{j} \quad a_{i} = \sum\limits_{j = 1}^{m} A_{ji} b_{j}$
for $B \in R^{n \times m}$ and $A \in R^{m \times n}$. Composing these gives us that
$b_{i} = \sum\limits_{j = 1}^{n} B_{ji} a_{j} = b_{i} = \sum\limits_{j = 1}^{n} B_{ji} \sum\limits_{k=1} A_{kj} b_{k} = \sum\limits_{l = 1}^{m} (AB)_{li} b_{j} \implies AB = \mathbb{1}_{m}$
and similarly the other way around $BA = \mathbb{1}_{n}$.
If we now assume $m > n$ we know that the matrices must have block form then
$1 = \det(AB) = \det(BA) = 0$
which is a contradiction to $0 = 1$
`\end{proof}`

### Generating Free Modules

It is interesting to consider how we can generate free Modules. Since they are simply given by defining a basis we can actually generate them from a set in a formal way:

> [!definition|\*] Free Module over a Set
> For any set $X$ we define a free $R$-module
> $F(X) = \set{f: X \to R \midline |\supp f| < \infty}$
> with the canonical scalar multiplication and pointwise addition.
> This is a free module with basis
> $\set{\delta_{x}}_{x \in X}$
> with $\delta_{x}: x \mapsto\begin{cases}1, \quad y = x \\ 0\end{cases}$

Using the construction of the direct sum from before we can write the free modules as $\bigoplus_{x \in X} R$. Often in the literature we denote the elements of $F(X)$ as formal linear combinations which is fine when $X$ does not have any additional properties, but as soon as this has a linear structure aswell we might be confused, which is why its easier to consider the basis $\delta_{x}$.

## Universal Property of Free Modules

Another central concept in Module theory is defining objects via universal properties. We see this a lot when talking about [[Tensor Products]] but this can more fundamentally already be done on free modules.

> [!theorem|\*] Universal Property of Free Modules
> For any set $X$ and some $\phi: X \to M$ into an $R$-Module $M$ there is a unique $\Phi \in \mathrm{Hom}_{R}(F(X), M)$ such that the following commutes
>
> $ \begin{CD} X @>i: x \mapsto \delta_{x}>> F(x)\\ @V\phi VV @VV\exists! \Phi V \\  M @> id>> M\end{CD}$

`\begin{proof}`
Considering some $f \in F(x)$ written as
$f = \sum\limits f(x) \delta_{x}$
then applying
$\Phi(f) = \sum\limits f(x) \Phi \circ i (x)$
and we know that $\Phi \circ i = \phi$, meaning that $\Phi$ is uniquely specified by the action of $\phi$ on the basis.
`\end{proof}`

This statement should be though of as saying that the free module over a set is the maximal object in the category of modules that contains this set. This is because whatever map I pick that maps my set into an $R$ module I can complete it to a linear map from the free generated module into $M$, which leaves the image of $\phi$ alone.

A nice consequence of this is that if we have a module it can either be maximally free (meaning it is freely generated by some set) or it is “smaller” meaning we have done some identifications.

> [!corollary|\*]
> Every $R$-Module $M$ is the quotient of a free $R$-Module.

`\begin{proof}`
Consider the universal property using the module $X = M$. Then we know that
$M = \im \Phi \cong \faktor{F(M)}{\ker \phi}$
using the isomorphism theorem on the map $\Phi: F(M) \to M$.
`\end{proof}`
