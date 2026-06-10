---
publish: true
created: 2025-06-19T13:44:13.788+02:00
modified: 2026-06-10T19:14:51.393+02:00
tags:
  - thoughts
---

Here we will gather some common linear operators from functional analysis, their intuitions and some basic properties.

## The Translation Operator

The simplest general linear operator of function spaces is to simply translate the input given.

> [!definition|\*] Translation Operator
> Consider some general group $(G, +)$ and consider the space of functions $H^{G} = \set{f: G \to H}$ where $H$ is some other group. We can then define the **Translation Operator** for some $y \in G$ by
> $T_{y}: H^{G} \to H^{G}, \quad f \mapsto T_{y}f$
> where $T_{y}f(x) = f(x - y)$
> Œ
> This operator plays a big role in [[MA5911 Discrete Harmonic Analysis|harmonic analysis ]] as my professor has said
> [!quote] Frank Dieter-Filbir
> “Harmonic Analysis is nothing but the study of the translation operator”

Some simple properties for the translation operator is

> [!proposition|\*] Additivity of Translation Operator
> Given a finite abelian group $G$ we have for $q, p \in G$ that
>
> - The Translation Operator is additive $T_{p + q} = T_{p} T_{q}$
> - For a cyclic group $G \cong \Z_{N}$ we have $T_{p} = T_{1}^{p} \quad T_{N} = id_{\C^{G}}$

`\begin{proof}`
**On the Additivity**
Consider for $p, q \in G$ that
$T_{p+q} f(x) = f(x + p + q) = T_{p} f(x + q) = T_{p} T_{q} f(x)$

**Decomposition in the case of $G \cong \Z_{N}$**
For $G = \Z_{N}$ we have that
$T_{p} = T_{1} \circ \ldots \circ T_{1} = T_{1}^{p}$
and also since $N \cong 0$ we have
$T_{N} = T_{0} = id_{\C^{G}}$
`\end{proof}`

## The Modulation Operator

[[MA5911 Discrete Harmonic Analysis|Harmonic analysis]] requires operators on functions that allow us to modify the frequencies contained in a function. We call this operation modulation and define the modulation operator as follows

> [!definition|\*] Modulation Operator
> Let $G$ be a finite abelian group then define an operator
> $M_{\chi}: \C^{G} \to \C^{G}, \quad M_{\chi}f(x) = \chi(x) f(x)$
> we call this the **modulation operator**

This modifies the fourier transform of a given function $f \in \C^{G}$  in the following way

> [!proposition|\*] Fourier Transform of Modulation Operator
> Let $f \in \C^{G}$ and let $G$ be a finite abelian group. Then we have for some $\chi \in \widehat{G}$
> $\widehat{M_{\overline{\chi}}f}(\eta) = \widehat{f}(\chi \cdot \eta)$

`\begin{proof}`
Simply calculate
$\widehat{M_{\overline{\chi}} f}(\eta) = \sum\limits_{x \in G} M_{\overline{\chi}}f(x) \overline{\eta(x)} = \sum\limits_{x \in G} \overline{\chi(x)} f(x) \overline{\eta(x)} = \widehat{f}(\chi \cdot \eta)$
`\end{proof}`
We can also develop some simple properties:

> [!proposition|\*] Simple Properties of Modulation
> Given a group $G$ and $M_{\chi}$ the modulation operator we have the following properties for some given $\chi, \eta \in \widehat{G}$.
>
> 1. Additivity $M_{\chi \eta} = M_{\chi} M_{\eta}$
> 2. For a cyclic group $G \cong \Z_{N}$ we have $M_{q} = M_{1}^{q}$ and $M_{N} = id_{\C^{G}}$

`\begin{proof}`
**On the Additivity**
Note that for a general character $\chi, \eta \in \widehat{G}$ we have
$M_{\chi \eta} f(x) =  \chi(x) \eta(x) f(x) = M_{\chi} \eta(x) f(x) = M_{\chi} M_{\eta} f(x)$

**Decomposition in the case of $G \cong \Z_{N}$**
In a cyclic group we have that $\widehat{G} \cong \mathbb{T}_{N}$ and thus
$M_{1} f(x) = e^{2 \pi i \frac{x}{N}} f(x) \implies M_{q} f(x) = e^{2 \pi i \frac{xq}{N}} f(x) = e^{2 \pi i \frac{x}{N}} \cdot \ldots \cdot e^{2 \pi i \frac{x}{N}} f(x) = M_{1}^{q} f(x)$
and also since $N = 0$ we have that
$M_{N} = id_{\C^{G}}$
`\end{proof}`

An important property characterising the modulation is given by the fourier transform property

> [!proposition|\*] Modulating is Translating the Fourier Transform
> Given a finite abelian group $G \cong \Z_{N}$ and some $q \in \Z_{N}$ we have
>
> - Fourier Transform of Modulation is Translation of Fourier Transform$\mathcal{F} M_{q} = T_{-q} \mathcal{F}$
> - The Fourier Transform of Translation is Modulation$\mathcal{F} T_{-q} = M_{q}^{*} \mathcal{F}$

`\begin{proof}`
**Fourier Transform of Modulation**
This amounts to simple calculation since we have that

$$$\begin{align*}
(\mathcal{F} \circ M_{q})f(k) &= \frac{1}{\sqrt{N}} \sum\limits_{x = 0}^{N-1} M_{q} f(x) e^{-2 \pi i \frac{xk}{N}}\\ &=  \frac{1}{\sqrt{N}} \sum\limits_{x = 0}^{N-1} e^{2 \pi i \frac{xq}{N}} f(x) e^{-2 \pi i \frac{xk}{N}} \\
&= \frac{1}{\sqrt{N}} \sum\limits_{x = 0}^{N-1} f(x) e^{-2 \pi i \frac{x}{N} (k - q)} \\
&= \mathcal{F}f(k - q) = (T_{-q} \circ \mathcal{F}) f(k)
\end{align*}$$

**Fourier Transform of Translation**
This also is simple calculation since
$$\begin{align*}
(\mathcal{F} \circ M_{q})(f)(k) &= \frac{1}{\sqrt{N}} \sum\limits_{j=0}^{N-1} T_{-q}f(j) e^{-2 \pi i \frac{k}{N} j} \\
&= \frac{1}{\sqrt{N}} \sum\limits_{j=0}^{N-1} f(j - q) e^{-2 \pi i \frac{k}{N} j} \\
&= \frac{1}{\sqrt{N}} \sum\limits_{z=0}^{N-1} f(z) e^{-2 \pi i \frac{k}{N} (z + q)} \\
&= e^{-2 \pi i \frac{k}{N}q} \cdot \frac{1}{\sqrt{N}} \sum\limits_{z=0}^{N-1} f(z) e^{-2 \pi i \frac{k}{N} z} \\
&= e^{-2 \pi i \frac{k}{N}q} \cdot \mathcal{F}f(k) = (M_{q}^{*} \circ \mathcal{F})(f)(k)
\end{align*}$$

`\end{proof}`

## The Dilation Operator
In the spirit of taking natural operations on function and packing them into an operator we can consider dilating a function and define the Dilation Operator:
> [!definition|*] Dilation Operator
> Given a finite commutative field $(\mathbb{F}, +, \cdot)$ we can define the Dilation Operator to be a map for some $a \in \mathbb{F}^{*}$
> $$D_{a}: \C^{\mathbb{F}} \to \C^{\mathbb{F}}\quad D_{a}f(x) = f(a^{-1} x) a \in \mathbb{F}^{*} $$

^1963f7

Now we can again note some simple properties
> [!proposition|*] Properties of the Dilation Operator
> Let $a \in \mathbb{F}^{*}$ Then
> 1. $D_{a}$ is unitary on $L^{2}(\mathbb{F})$
> 2. $D_{a}^{*} = D_{a}^{-1} = D_{a^{-1}}$ and the commutator relation $D_{a} T_{x} = T_{ax}D_{a}$ for $x \in \mathbb{F}$
> 3. For any $f \in \C^{\mathbb{F}}$ we have $\widehat{D_{a}f} = D_{a^{-1}} \hat f$
> 4. $D_{a}$ is a $\ast$-homomorphism

`\begin{proof}`
Simple Calculation
`\end{proof}`

## The Time-Frequency Shift
In [[MA5911 Discrete Harmonic Analysis|harmonic analysis]] we want to analysis the [[Time-Frequency Analysis|time-frequency]] space and thus we define a composition of translation and modulation which changes the positional data and frequency data in a given function.

> [!definition|*] Time-Frequency Shift
> Given a finite abelian group $G$ we can for a given $g \in G$ and $\chi \in \widehat{G}$ 
> $$\pi(g, \chi): \C^{G} \to \C^{G}, \quad \pi(g, \chi) f(x) = M_{\chi}T_{g}f (x) = \chi(x) f(x-g)$$
> 

^9acdd8

An important intuition to have in the time frequency shift is that translation and modulation commute. Meaning Time-Shifting is similar enough to Shifting in Frequency and then Translating.

> [!proposition|*] Time-Shifting Commutes
> Let $G \cong \Z_{n}$ be a finite abelian cyclic group. Then for some $p \in G$ and $q \in \widehat{G}$ we have
> $$T_{p} M_{q} = e^{-2 \pi i \frac{q}{N}} M_{q} T_{p}$$

`\begin{proof}`
This is a simple computation aswell since for some $f \in \C^{G}$:
$$(T_{p} M_{q})(f)(k)= M_{q}f(k + p) = e^{2 \pi i \frac{q(k+p)}{N}} f(k + p) $$
`\end{proof}`


## The Wavelet-Transform
Similar to the Gabor Transform we can consider the Time-Dilation operator, which we call the Wavelet Transform.

> [!definition|*] Wavelet Transform
> Given a function $0 \neq \phi \in \C^{\mathbb{F}}$ we can define an operator
> $$W_{\phi}: \C^{\mathbb{F}} \to \C^{\mathbb{F}^{*} \times \mathbb{F}}, \quad W_{\phi} f(a, x) = \sum\limits_{u \in \mathbb{F}} f(n) \overline{\phi(a^{-1}(u - x))} = \innprod{f}{T_{x} D_{a} \phi}$$

^e73cb9

This again is a way to prove our function $f$ at a time and scale and ask how similar it is to $\phi$. Some simple properties of this wavelet transform are given

> [!proposition|*] Properties of the Wavelet-Transform
> Let $0 \neq \phi \in \C^\mathbb{F}$ and $(x, a) \in \mathbb{F} \times \mathbb{F}^{\times}$ then
> 1. $W_{\phi} f (x, a) = \innprod{f}{T_{x}D_{a} \phi}$
> 2. $W_{\phi} f(x, a) = f \ast D_{a} \tilde \phi(x)$ where $\tilde \phi(x) = \phi(-x)$
> 3. $W_{\phi} f(x, a) = \sqrt{|F|} \mathcal{F} ^{-1} \left( f \mathcal{F} D_{a} \phi \right)(-x)$
> 4. $\norm{W_{\phi} f}_{2}^{2} = |F|( |\mathbb{F}| - 1) |\mathcal{F}f(1)|^{2} |\mathcal{F}\phi(1)|^{2} + |F| \left( \sum\limits_{1 \neq \chi \in \widehat{\mathbb{F}}} |\mathcal{F} f (\chi)|^{2} \right) \cdot \left( \sum\limits_{1 \neq \chi} |\mathcal{F} \phi (\chi)|^{2} \right)$

^8b853f

`\begin{proof}`
1 and 2 are clear

The third is simply a calculation using plancherel
$$\begin{align*}
W_{\phi} f (x, a) &= \innprod{f}{T_{x}D_{a}\phi} \\
&= \innprod{\mathcal{F} f}{M_{x}\mathcal{F}D_{a} \phi} \\
&= \sum\limits_{\chi\in \hat{\mathbb{F}}} \mathcal{F} f(\chi) \overline{\chi(x) \mathcal{F(D_{a} \phi)(x)}} \\
&= \sqrt{|F|} \mathcal{F}^{-1} \left( \mathcal{F}f \mathcal{F}(D_{a}\phi) \right)(-x)
\end{align*}$$

`\end{proof}`
## Discrete Fourier Transform

The general concept of shifting a given [[Functions on Finite Sets|function on a finite group]] to its frequecy space given by the [[Group Characters|dual group]] is generalized in the ideal of a [[The Group Algebra#Gelfand Representations|gelfand transform]]. Formalized with some good choice of coefficients we get the [[Discrete Fourier Transform|discrete fourier transform]]

> [!definition|*] Discrete Fourier Transform
> Given a finite abelian group $G$ and a map $f \in L^{1}(G)$ the discrete fourier transform (DFT) is an operator
> $$\mathcal{F}: L^{1}(G) \to L^{1}(\widehat{G}), \quad \left( \mathcal{F}f \right)(\chi) = \frac{1}{\sqrt{|G|}} \sum\limits_{x \in G} f(x) \overline{\chi(x)}$$
> The inverse is then symmetrically given by
> $$\mathcal{F}^{-1}: L^{1}(\widehat{G}) \to L^{1}(G),  \quad \left( \mathcal{F}^{-1}\hat f \right)(x) = \frac{1}{\sqrt{|G|}} \sum\limits_{\chi \in \widehat G} \hat f(\chi) \chi(x)$$

Some notable properties of this operator are given by

> [!proposition|*] Properties of the DFT
> For a given finite abelian group $G$ we have the following properties:
> 1. $\mathcal{F}^{-1} \mathcal{F} = \mathcal{F} \mathcal{F}^{-1} = id$
> 2. $\mathcal{F}$ and $\mathcal{F}^{-1}$ are unitary operators
> 3. $\mathcal{F}^{2} f = \tilde f$ with $\tilde f(x) = f(-x)$
> 
> If we limit ourselves to explicitly $G = \Z_{N}$ we get
> 4. $\mathcal{F}\chi_{m} = \sqrt{N} \delta_{m}, \quad \forall m \in \Z_{N}$
> 5. $\mathcal{F} \delta_{m} = \frac{1}{\sqrt{N}} \chi_{-m} = \frac{1}{\sqrt{N}} \chi_{N-m}$

^a0addf

`\begin{proof}`
**For 1**
Simply apply this to a function $f \in L^{1}(G)$
$$\mathcal{F}^{-1} \mathcal{F} f(g) = \frac{1}{\sqrt{|G|}} \sum\limits_{\chi \in \widehat{G}} \mathcal{F}f(\chi) \chi(g) = \frac{1}{|G|} \sum\limits_{\chi \in \widehat{G}} \sum\limits_{x \in G} f(x) \overline{\chi(x)} \chi(g) = \frac{1}{|G|} \sum\limits_{x \in G} f(x) \sum\limits_{\chi \in \widehat{G}} \chi(g) \chi(-x) = \frac{|G|}{|G|} f(g) = f(g)$$
the other order is done similarly

**For 2**
$$\innprod{\mathcal{F}f}{\mathcal{F} g} = \sum\limits_{\chi \in \widehat{G}} \mathcal{F}f(\chi) \overline{\mathcal{F}g(\chi)} = \frac{1}{|G|}\sum\limits_{\chi \in \widehat{G}} \sum\limits_{x \in G, y \in G} f(x) \overline{g(y)} \chi(y) \overline{\chi(x)} = \frac{1}{|G|} \sum\limits_{x \in G, y \in G} f(x) \overline{g(y)} \sum\limits_{\chi\in \widehat{G}} \chi(y-x) = \frac{|G|}{|G|} \sum\limits_{x \in G} f(x) \overline{g(x)} = \innprod{f}{g}$$
similarly for $\mathcal{F}^{-1}$

**For 3**
Note that $\widehat{\widehat{G}} \cong G$ gives us that $L^{1}(\widehat{\widehat{G}}) \cong L^{1}(G)$ thus we can denote $\alpha_{x}(\chi) = \chi(x)$
$$\mathcal{F}^{2} f(x) 
= \mathcal{F}^{2} f(\alpha_{x}) 
= \frac{1}{\sqrt{|G|}}\sum\limits_{\eta \in \widehat{G}} \mathcal{F}f(\eta) \overline{\alpha_{x}(\eta)} 
= \frac{1}{|G|}\sum\limits_{\eta \in \widehat{G}} \sum\limits_{y \in G} f(x) \overline{\eta(y)} \overline{\eta(x)} 
= \frac{1}{|G|}\sum\limits_{y \in G} f(x) \sum\limits_{\eta \in \widehat{G}} \eta(-y-x) = f(-x)$$

**For 4**
For $G = \Z_{N}$ we know that $\chi_{m}(t) = e^{2 \pi i \frac{tm}{N}}$. Thus we simply need to calculate
$$\mathcal{F} \chi_{m} (\eta_{n}) = \frac{1}{\sqrt{|N|}}\sum\limits_{x \in \Z_{N}} \chi_{m}(x) \overline{\eta_{n}(x)} = \frac{1}{\sqrt{N}} \innprod{\chi_{m}}{\eta_{n}} = \frac{N}{\sqrt{N}} \delta_{m} = \sqrt{N} \delta_{m} $$
**For 5**
Similarly here the specilization to $G = \Z_{N}$ allows us to explicitly calulcate
$$\mathcal{F} \delta_{m}(\eta_{n}) = $$


`\end{proof}`
$$$
