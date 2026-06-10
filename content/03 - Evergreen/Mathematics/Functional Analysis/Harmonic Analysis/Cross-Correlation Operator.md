---
publish: true
created: 2025-08-01T13:30:26.000+02:00
modified: 2026-06-10T19:14:51.610+02:00
tags:
  - thoughts
---

Given some signal $f, g \in \C^G$ we want to also consider how correlated two functions are. This is usually done via a scalar product which condenses the similarity of two functions into one number, namely
$\innprod{f}{g} = \sum\limits_{x \in G} f(x) \overline{g(x)}$
This scalar product captures how much the signals $f$ and $g$ correlate. Since we are working with periodic functions though we could have two signals that are very similar but shifted relative two each other. This exposes a new variable we have to determin when trying to correlate two signals.

## Cross-Correlation

Thus in this context the scalar product doesn’t capture all of the similarity between signals but rather we need to consider all scalar products with shifted $g$-s.

This measure of correlation is called the **Cross-Correlation**

> [!definition|\*] Cross-Correlation
> Given a finite abelian group $G$ we describe the _Cross-Correlation Operator_
> $\mathcal{R}: \C^G \times \C^G \to \C^G, \quad \mathcal{R}(f, g)(x) =\sum\limits_{y \in G} f(y) \overline{g(y -x)}$

Most importantly we can reformulate this cross correlation operator using our harmonic analysis language in the following way

> [!lemma|\*] Alternative Formulations of Cross-Correlation
> Given the finite abelian group $G$ we have the following equality for $f, g \in \C^G$
> $\mathcal{R}(f, g)(x) = \innprod{f}{T_{-x}g} = (f * g^*)(x)$
> where $T_{a}$ is the [[Common Linear Operators of Harmonic Analysis#The Translation Operator| translation operator]] and $g^*(x) = \overline{g(-x)}$

We can of course consider how the cross-correlation modifies or measures the frequency contents. To do this we consider the [[Discrete Fourier Transform|discrete fourier transform]] of the cross-correlation

> [!proposition|\*] Fourier Transform of Cross-Correlation
> Given a finite abelian group $G$ we have the following property for $f, g \in \C^G$. Using the notation for $\widehat{f} = \mathcal{F}$ we have
> $\widehat{\mathcal{R}(f, g)}(\chi) = \sqrt{|G|} \cdot \widehat{f}(\chi) \cdot\overline{\widehat{g}(\chi)}$

`\begin{proof}`
This is simple calculation since
$\widehat{\mathcal{R}(f, g)}(\chi) = \widehat{f * g^*}(\chi) = \sqrt{|G|} \cdot\widehat{f}(\chi) \cdot \widehat{g^*}(\chi)$

It is now also easy to see
$\widehat{g^*}(\chi) = \sum\limits_{x \in G} g^*(x) \overline{\chi(x)} =  \sum\limits_{x \in G} \overline{g(-x)} \overline{\chi(x)} = \sum\limits_{y \in G} \overline{g(y)} \chi(y) = \overline{\sum\limits_{y \in G} g(y) \overline \chi(y)} = \overline{\widehat{g}(\chi)}$
which proves our statement
`\end{proof}`

This result tells us that for a given “frequency” $\chi$ the fourier transform of the cross corelation measures how much the functions agree on that frequency aswell.

Let us now consider an explicit example for this

> [!example|\*] Example of Cross-Correlation Explicitly in $G = \Z_N$
> Let $G = \Z_{N}$ and $f \in \C^{G}$ be a signal. We can, for simplicities sake consider the Basis $\set{\delta_{g} \midline g \in G}$ for $\C^{G}$ and denote $f$ as a vector
> $f \cong \begin{pmatrix}f(0) \\ f(1) \\ \vdots \\ f(N-1) \end{pmatrix}$
>
> We can then explicitly express $\mathcal{R}(f, \delta_{a})$ as a vector aswell using the fact that $\innprod{f}{T_{x}\delta_{a}} = \innprod{f}{\delta_{a - x}} = f(a-x)$
> $\mathcal{R}(f, \delta_{a}) \cong \begin{pmatrix}\mathcal{R}(f, \delta_{a})(0) \\ \mathcal{R}(f, \delta_{a})(1) \\ \vdots \\ \mathcal{R}(f, \delta_{a})(N-1)\end{pmatrix} = \begin{pmatrix}f(a) \\ f(a + 1) \\ \vdots \\ f(a + N -1)\end{pmatrix}$
>
> This allows us to consider the general cross-correlation by considering $g = \sum\limits_{n = 0}^{N-1} g(n) \delta_{n}$ then we get firstly
> $\innprod{f}{T_{-x} g} = \sum\limits_{n = 0}^{N-1} g(n) \innprod{f}{T_{-x} \delta_{n}} = \sum\limits_{n=0}^{N-1} f(n + x) g(n)$
> which gives us
>
> $\mathcal{R}(f, g) \cong \begin{pmatrix}\sum\limits_{n=0}^{N-1} f(n) g(n) \\ \vdots \\ \sum\limits_{n=0}^{N-1} f(n + N-1) g(n)\end{pmatrix} = \sum\limits_{n = 0}^{N-1} \begin{pmatrix}f(n) g(n) \\ \vdots \\ f(n+N-1) g(n)\end{pmatrix}$
> alternatively we can express this as
> $\mathcal{R}(f, g)(x) = \sum\limits_{n=0}^{N-1} f(n + x) g(n)$

## Auto-Correlation

An imporant part of [[Signal Analysis|signal analysis]] is identifying properties of just one signal. The cross-correlation can be used for this aswell since we can ask, how does the function correlate with shifted versions of itsself. If we can find some then that tells us about some internal periodicity in a signal, which can be interesting especially if we dont know much about the signal or it is corrupted.

This concept is simply captures in the idea of an **Auto-Correlation** operator.

> [!definition|\*] Auto-Correlation
> Given a finite abelian group $G$ we describe the _Auto-Correlation Operator_
> $\mathcal{R}: \C^G \to \C^G, \quad \mathcal{R}f = \mathcal{R}(f, f)$

Let us first consider some properties of this auto-correlation as an operator.

> [!proposition|\*] Properties of Auto-Correlation
>
> 1. Expression as Convolution $\mathcal{R}f(x) = (f * f^{*})(x)$
> 2. Maximum at Zero $|\mathcal{R} f(x)| \leq \mathcal{R}f(0)$
> 3. Fourier Transform of Auto-Correlation $(\mathcal{F}\circ\mathcal{R})f = \sqrt{|G|} |\mathcal{F}f|^{2}$

`\begin{proof}`
**1. Expression as Convolution**
This is simply a consequence of expression the Cross-Correlation as a convolution

**2. Maximum at Zero**
We can calculate that using $g_{x}(y) = \overline{f(y-x)}$

$|\mathcal{R}f(x)| = \left| \sum\limits_{y \in G} f(y)\overline{f(y-x)}\right| = |\innprod{f}{g_{x}}| \leq \sqrt{\norm{ f }_{2} } \cdot \sqrt{\norm{ g_{x} }_{2} }$
now we can see that

$\norm{ f } _{2}^{2} = \sum\limits_{y \in G} |f(y)|^{2} = \sum\limits_{y \in G} f(y) \overline{f(y)} = \mathcal{R}(f) (0)$
$\norm{ g_{x} }_{2}^{2} = \sum\limits_{y \in G} |g_{x}(y)|^{2} =  \sum\limits_{y \in G} |\overline{f(y - x)}|^{2} = \sum\limits_{z \in G} |\overline{f(z)}|^{2} = \sum\limits_{z \in G} \overline{f(z)} f(z) = \norm{ f } _{2}^{2} = \mathcal{R}(f)(0)$
which gives us our claim.

**3. Fourier Transform of Auto Correlation**
Using the properties of cross-correlation
$(\mathcal{F} \circ \mathcal{R})f (\chi) = \mathcal{F}(\mathcal{R}(f, f))(\chi) = \sqrt{|G|} \widehat{f}(\chi) \overline{\widehat{f}(\chi)} = \sqrt{|G|} \left|\widehat{f}(\chi)\right|^{2}$
which is our statement.
`\end{proof}`

### Conditions for Orthonormal Basis of $L^2(G)$

We can now determine that using auto-correlation that we can define an ON Basis using translated functions since
$\mathcal{R}(\phi)(p) = \innprod{\phi}{T_{-p} \phi}$
thus we should be able to connect this to some sort of orthogonality condition.

> [!proposition|\*] Orthogonality Condition for Translated Functions being an $L^2$ Basis
> Given a finite abelian Group $G$ and a function $\phi \in \C^G$ we then have
> $\set{T_{-p} \phi \midline p \in G} \text{ an ON Basis for } L^2(G) \iff \mathcal{R}(\phi) = \delta_{0}$

`\begin{proof}`
To prove this we simply compute that
$\innprod{T_{-p}\phi}{T_{-q} \phi} = \sum\limits_{g \in G} T_{-p}\phi(g) T_{-q}\phi(g) = \sum\limits_{g \in G} \phi(g-p) \phi(g-q) = \sum\limits_{h \in G} \phi(h) \phi(h + p -q) = \innprod{\phi}{T_{-(q - p)} \phi}$
using this we know that
$\innprod{\phi}{T_{-q} \phi} = \mathcal{R}(\phi)(q)$
which means that
$\innprod{T_{-p} \phi}{T_{-q} \phi} = \mathcal{R}(\phi)(q - p)$
meaning our defined set is only an ON basis if and only
$\mathcal{R}(\phi)(q - p) = \delta_{qp} \iff \mathcal{R}(\phi) = \delta_{0}$
`\end{proof}`

Now we can use the previous properties of the Auto-correlation to express this in a different way.

> [!corollary|\*] Extended Orthogonality Condition
> Given a finite abelian Group $G$ and a function $\phi \in \C^G$ we then have
> $\set{T_{-p} \phi \midline p \in G} \text{ an ON Basis for } L^2(G) \iff \forall \chi \in \widehat{G}: \quad |\mathcal{F}\phi(\chi)| = \frac{1}{\sqrt{|G|}}$

`\begin{proof}`
Using the previous properties we see that
$\mathcal{R} (\phi) = \delta_{0} \iff \mathcal{F \circ R}(\phi) = \frac{1}{\sqrt{|G|}} \iff \sqrt{|G|} |\mathcal{F} (\phi)|^2 = \frac{1}{\sqrt{|G|}} \iff |\mathcal{F}(\phi)| = \frac{1}{\sqrt{|G|}}$
`\end{proof}`
