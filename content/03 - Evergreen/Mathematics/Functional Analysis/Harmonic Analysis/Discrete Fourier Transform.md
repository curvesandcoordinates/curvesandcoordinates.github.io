---
publish: true
aliases:
  - DFT
created: 2025-06-17T14:48:31.308+02:00
modified: 2026-06-10T19:14:51.427+02:00
tags:
  - thoughts
---

Having built up the general theory by defining for general [[Groups|finite abelian groups]] [[The Group Algebra|the group algebra]] and [[The Group Algebra#Gelfand Representations|gelfand representations]] we can start working on applying the transformation and finding its properties. The intuition we should always keep in mind that for a given group $G$ we consider the possible frequency modes on $G$ to be elements in $\widehat G$. In the finite abelian case $G \cong \widehat{G}$ thus we understand this group fully. Now given a function $f \in L^1(G)$ we can ask how much a frequency mode appears in it by using the gelfand representation and defining the map
$\hat f: \hat G \to \C, \quad \hat f(\chi) = \sum\limits_{x \in G} f(x) \overline{\chi(x)}$

> [!remark|\*] Intuition using the Scalar Product
> We can naturally define a scalar product on $\C^{G}$ by defining
> $\innprod{f}{g} = \sum\limits_{x \in G} f(x) \overline{g(x)}$
> then we can see that
> $\widehat{f}(\chi) = \sum\limits_{x \in G} f(x) \overline{\chi(x)} = \innprod{f}{\chi}$
> Which per the usual intuition behind the scalar product checks how much $f$ and $\chi$ are pointing into a “similar direction” which in terms of frequency basically checks how much the frequency of $\chi$ is contained in $f$

> [!theorem|\*] Uniqueness
> The fourier transform of $f \in L^{1}(G)$ is unique

`\begin{proof}`
The gelfand representation is injective as was proven [[The Group Algebra#^657129|here]]
`\end{proof}`

> [!theorem|\*] Inversion Formula
> For $f \in L^{1}(G)$ we have that
> $f(x) = \frac{1}{|G|}\sum\limits_{\chi \in \hat G} \hat f(\chi) \cdot \chi(x)$

`\begin{proof}`
simply plug the definition of $\hat f$ into this and calculate out using the orthogonality of the characters.

$\frac{1}{|G|}\sum\limits_{\chi \in \hat G} \hat f(\chi) \cdot \chi(x) = \frac{1}{|G|}\sum\limits_{\chi \in \hat G} \sum\limits_{y \in G} f(y) \overline{\chi(y)}\chi(x) = \frac{1}{|G|} \sum\limits_{y \in G} f(y) \sum\limits_{\chi \in \hat G} \overline{\chi(y)}\chi(x)$
since $\chi(x) \in \mathbb{T}$ we have that
$\sum\limits_{\chi \in \hat G} \overline{\chi(y)}\chi(x) = \sum\limits_{\chi \in \hat G} \chi(-y)\chi(x) = \sum\limits_{\chi \in \hat G}\chi(x-y)$
for any $z \in G$ we have that $\sum\limits_{\chi \in \widehat{G}} \chi(z) = \begin{cases}|\widehat{G}|, \quad z = e \\ 0, \quad z \neq e\end{cases}$ which means that
$\frac{1}{|G|}\sum\limits_{\chi \in \hat G} \hat f(\chi) \cdot \chi(x) = \frac{1}{|G|}\sum\limits_{x \in G} f(x) |\widehat{G}|  \delta_{x=y} = f(x)$
`\end{proof}`

Some useful identities for fourier transformation are given by the following

> [!theorem|3.7] Parseval & Plancherel Identities
> For $f, g \in L^{2}(G)$ we have that
> $\text{(Parseval Identity)} \quad\innprod{\hat f}{\hat g} = |G| \innprod{f}{g}$
> and also
> $\text{(Plancherel Identity)} \quad \norm{\hat f}_{2} = \sqrt{|G|} \norm{f}_{2} $

`\begin{proof}`
This is simple calculation since

$$$\innprod{\hat f}{\hat g} = \sum\limits_{\chi \in \widehat{G}} \hat f(\chi) \overline{\hat g(\chi)} = 
\sum\limits_{\chi \in \widehat{G}} \left( \sum\limits_{x \in G} f(x) \overline{\chi(x)}  \right) \overline{\left( \sum\limits_{y \in G} g(y) \overline{\chi(y)} \right)} = 
\sum\limits_{\chi \in \widehat{G}} \sum\limits_{x,y \in G} f(x) \overline{g(x)} \overline{\chi(x)} \chi(y) = 
\sum\limits_{x, y \in G} f(x) g(y) \sum\limits_{\chi \in \hat G} \overline{\chi(x)} \chi(y)$$
Using homomorphism, inverse and orthogonality of characters we simplify the last sum to
$$\sum\limits_{\chi \in \hat G} \overline{\chi(x)} \chi(y) = \sum\limits \chi(x^{-1}) \chi(y) = \sum\limits \chi(x^{-1} y) = |G| \delta_{x= y}$$
which gives us that
$$\innprod{\hat f}{\hat g} = \sum\limits_{x, y \in G} f(x) \overline{g(y)} |G| \delta_{x = y} = |G| \sum\limits_{z \in G} f(z)\overline{g(z)} = |G| \innprod{f}{g}$$
For the second identity we calculate simply
$$\norm{\hat f}_{2}^{2} = \innprod{\hat f}{\hat f} = |G| \innprod{f}{f} = |G| \norm{f}_{2}^{2}$$
`\end{proof}`

Often we will consider a specific scaling of the fourier transform which make the operator unitary and symmetric in its inversion. This is then formally called the [[Common Linear Operators of Harmonic Analysis#Discrete Fourier Transform|discrete fourier transform]]. The properties discussed sofar extend to this transform aswell.

Often we apply a scaling and use this instead. All properties from the fourier Transform extend to this aswell.


> [!remark|*] Discrete Fourier Transform approximates the Continuous One
> Given a sufficiently nice $f \in L^{1}(\R) \cap C^{5}(\R)$ then the inverse fourier transform gives
> $$f(t) = \int_{\R}\hat f(\omega) e^{-2 \pi i \omega t} d \omega$$
> Then this gives us a nice graph that we can evaluate at $N$ equidistant points and obtain an approximation
> $$\tilde f (t) \approx \frac{1}{N} \sum\limits_{n=0}^{N-1}\hat f\left(\frac{n}{N}\right)e^{-2 \pi i t \frac{\omega}{N}}$$
> 
> And inverting this gives us the discrete fourier transform 
> $$\tilde f(k) = \frac{1}{N} \sum\limits_{n=0}^{N-1} f(n) e^{-2 \pi i k \frac{n}{N}}$$
> which is how our transform looks.
> 
> The ideal situation here is partly given by the equidistant points, this is an ideal situation which breaks our model slightly. We have to generate a non-equispaced discrete fourier transform and complicates things. 

## 3.4 Poission Summation Formula
We now want to draw even more parallels from the continuous theory to the discrete one by proving another formula often used for fourier transformations. It mainly states that in a certain sense the avarage of a function and the avarage of its fourier transform are equal.

To formalize this we need to first define a way to divide up a given group into layers. We formally call this a stratification

> [!definition|*] Stratification of a Group
> Let $G$ be an abelian group and $H \triangleleft G$. A subset $S \subset G$ generates a so-called **stratification** of $\faktor{G}{H}$ if we have
> 1. For a given $s, s' \in S$ with $s \neq s'$  $$s + H \neq s' + H$$
> 2. We can decompose the faktor group in a way that $$\faktor{G}{H} = \bigcup_{s\in S} s + H$$

Specifically this formalises the idea of finding a representative for each coset in a consistent manner. We do this naturally when we think of the coset group.

Now the statement of the Poission Summation Formula can be given. It consists of two properties that we prove which boil down to describing how the avarage over a subset is related to the avarage of “frequencies” of the Factor group.
> [!theorem|*] Poission Summation Formula
> Let $G$ be a finite abelian group and let $H \triangleleft G$. Suppose $S$ generates a stratification of $\faktor{G}{H}$. Then for $f \in \C^{G}$
> 1. Avareging property  $$\frac{1}{|H|} \sum\limits_{u \in H} f(u) = \frac{1}{|G|} \sum\limits_{\tilde \gamma \in \hat{\faktor{G}{H}}} \hat f (\gamma)$$
> 2. Parseval-Type Identity over Stratification$$\sum\limits_{s \in S} \left| \sum\limits_{u \in H} f(s + u) \right|^{2} = \frac{|H|^{3}}{|G|} \sum\limits_{\tilde\gamma \in \hat{\faktor{G}{H}}} | \hat f (\gamma)|^2$$

`\begin{proof}`
For the avaraging property we will consider a specially defined function. Given some $f \in \C^{G}$ we can define 
$$f^{*}: G \to \C, \quad x \mapsto \sum\limits_{u \in H} f(x+u)$$
which is a function that is constant on all $H$-Cosets. This means we can also consider this map as a map on the quotient group
$$f^{*}: \faktor{G}{H} \to \C, \quad [x] \mapsto \sum\limits_{u \in H} f(x + u)$$

Now given some character $\chi \in \widehat{G}$ we can calculate
$$\begin{align*}
\widehat{f^{*}}(\chi) &= \sum\limits_{x \in G} f^{*}(\chi) \overline{\chi(x)} = \sum\limits_{x \in G} \sum\limits_{u \in H} f(x+u) \overline{\chi(x)} \\
&= \sum\limits_{u \in H} \sum\limits_{x \in G} f(x+u) \overline{\chi(x)} = \sum\limits_{u \in H} \sum\limits_{z \in G} f(z) \overline{\chi(z-u)}
\end{align*}$$
using the fact that $\overline{\chi(z-u)} = \overline{\chi(z)} \overline{\chi(-z)} = \overline{\chi(z)} \chi(u)$ thus

$$\begin{align*}
\widehat{f^{*}}(\chi) &= \sum\limits_{u \in H} \sum\limits_{z \in G} f(z) \overline{\chi(z)} \chi(u) \\ &= \sum\limits_{u \in H} \chi(u) \sum\limits_{z \in G} f(z) \overline{\chi(z)} \\
&= \widehat{f}(\chi) \sum\limits_{u \in H} \chi(u)
\end{align*}$$
using the fact that 
$$\sum\limits_{u \in H} \chi(u) = \begin{cases}
|H|, \quad \at{\chi}{H} = 1 \\
0, \quad \text{otherwise} 
\end{cases}$$

This means that moving to the level of $\widehat{\faktor{G}{H}}$ we can consider that for some $\tilde \chi \in  \widehat{\faktor{G}{H}}$ we can uniquely determine $\chi = \tilde \chi \circ p$ with the property that $\at{\chi}{H} = 1$ where $p: G \to \faktor{G}{H}$ is the canonical projection. This gives us that
$$\widehat{f^{*}}(\tilde \chi) = \widehat{f^{*}}(\chi) = \widehat{f}(\chi) |H|$$

Now we can rexpress the function $f^{*}$ by the inversion formula
$$f^{*}(x) =\frac{1}{|G|} \sum\limits_{\chi \in \widehat{G}} \widehat{f^{*}}(\chi) \chi(x) = \frac{|H|}{|G|} \sum\limits_{\chi \in \widehat{G}, \at{\chi}{H} = 1} \widehat{f}(\chi)\chi(x) = \frac{|H|}{|G|} \sum\limits_{\tilde \chi \in \widehat{\faktor{G}{H}}} \widehat{f}(\tilde \chi \circ p)(\tilde \chi \circ p)(x) $$
Since we have a one to one map from
$$\rho: \set{\chi \in \widehat{G} \midline \at{\chi}{H} = 1} \to \widehat{\faktor{G}{H}}$$
which means we can write for $\tilde \chi \in \widehat{\faktor{G}{H}}$ 
$$\widehat{f}(\tilde \chi) = \widehat{f}(\rho^{-1}(\tilde \chi))$$ and rewrite
$$f^{*}(x) = \frac{|H|}{|G|} \sum\limits_{\tilde \chi \in \widehat{\faktor{G}{H}}} \widehat{f}(\tilde \chi) \tilde \chi(x)$$
this is equivalent to 
$$\frac{1}{|H|} \sum\limits_{u \in H} f(u) = \frac{1}{|G|} \sum\limits_{\tilde \gamma \in \hat{\faktor{G}{H}}} \hat f (\gamma)$$
This is the first statement proven.

For the second let us consider the plancerel identity on the group $\faktor{G}{H}$ and note that for $f^{*}$ on $\faktor{G}{H}$ we have
$$\norm{f^{*}}_{2}^{2} = \frac{1}{|\faktor{G}{H}|} \norm{\widehat{f^{*}}}_{2}^{2} = \frac{|H|}{|G|} \norm{\widehat{f^{*}}}_{2}^{2}$$
which implies
$$\sum\limits_{[g] \in \faktor{G}{H}} |f^{*}([g])|^{2} = \frac{|H|}{|G|} \sum\limits_{\tilde \chi \in \widehat{\faktor{G}{H}}} |\widehat{f^{*}}(\tilde \chi)|^{2}$$
using the fact that our stratification gives us a canonical set of unique representants of $\faktor{G}{H}$ and filling in the rest of the things we know we get

$$\sum\limits_{s \in S} \left|  \sum\limits_{u \in H} f(s + u)\right|^{2} 
= \sum\limits_{s \in S} |f^{*}(s)|^{2} 
= \frac{|H|}{|G|} \sum\limits_{\tilde \chi \in \widehat{\faktor{G}{H}}} |H|^{2} |\widehat{f}(\tilde \chi)|^{2}
=\frac{|H|^{3}}{|G|} \sum\limits_{\tilde \chi \in \widehat{\faktor{G}{H}}}|\widehat{f}(\tilde \chi)|^{2}$$

`\end{proof}`

> [!remark|*] Connecting Fourier Analysis on $\R$ to that of $\Z$ using the Poission Formula
> The poission summation formula is usually formulated for $G = \R$ and $H = \Z$. The quotient is $\faktor{G}{H} \cong \mathbb{T}$
> The dual of $\mathbb{T}$ is $\hat{\mathbb{T}} = \set{e^{2 \pi i k \cdot} \midline k \in \Z}$. Now for a function $f: \R \to \C$ define formally 
> $$F(t) = \sum\limits_{k \in \Z} f(t + k)$$
> $F$ is $1$-periodic . Compute the so called Fourier coefficients $\hat F(k) = \int_{0}^{1} F(t) e^{- 2 \pi k t} dt$ and define
> $$P(t) = \sum\limits_{k \in \Z} \hat F(k) e^{2 \pi i k t}$$
> If it all works out fine (under what conditions this hold is not said) then we get
> $$\hat F(k) = \int_{0}^{1} \sum\limits_{n \in \Z} f(t + n) e^{- 2 \pi k t} dt$$
> Assuming we can interchange the integral with the summation (being of course very optimistic)
> $$\hat F (k)= \sum\limits_{n \in \Z} \int_{n}^{n+1} f(t) e^{- 2 \pi k t} dt = \int_{\R}f(t) e^{- 2 \pi k t} dt = \hat f(k)$$
> Where we also use the assumption that we can simplify the sum of integrals in such a way. Under all these nice conditions and $P(t) = F(t)$ we get a nice formula for the Poission Summation Formuls (PSF) in the real case which we might have seen before
> $$\sum\limits_{k \in \Z} \hat f(k) e^{2 \pi i k t} = \sum\limits_{k \in \Z} f(t + k)$$
> which gives
> $$\sum\limits_{k \in \Z} \hat f(k) = \sum\limits_{k \in \Z} f(k)$$

$$$
