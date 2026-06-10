---
publish: true
created: 2025-06-24T14:04:49.422+02:00
modified: 2026-06-10T19:14:51.580+02:00
tags:
  - thoughts
---

When formalizing the idea of a signal in the mathematical context we want to consider a signal as simply a function
$f: G \to \C$
Where $G$ is a finite abelian group.

Interestingly we should consider the elements of $G$ as finite data points that make up our signal. The periodicity of our signal is then given by the structure of $G$. The usual premise is to consider $G = \Z_{N}$ which gives us a simple signal of “resolution” $N$ and also “periodicity” $N$.

To analyse the structure of possible signals we now will consider some constructions and operators on $\C^{G}$ since this is now the set of “signals with structure $G$”.

## Useful Operators in Signal Analysis

### Convolution Operator

To better understand a signal we will want to use the [[Convolution on Finite Function Spaces|Convolution Operator]]. We will view convolving by a map $h \in \C^{G}$ as an operator and make these operators into an algebra, namely the [[Convolution Transformation Algebra|convolution transformation algebra]], which can structurally be considered isomorphic to [[The Group Algebra|the group algebra]]. The structure of this algebra is also determined by the $G$-Invariant endomorphism.

### Cross-Correlation Operator

In practical applications of Signal analysis we often want to analyse a type of correlation of two operators. Normally this is done by the concept of scalar products, but since we are considering the space of $G$-shaped signals as function spaces we can define this concept as an operator called the [[Cross-Correlation Operator|cross-correlation operator]]. This relates via its definition the idea of correlating two maps and taking their convolution product.

## Explicit Examples of Analysing Signals

We now want to apply the concepts considered and work on specific types of signals explicitly and see what structures the cross crelation operator and convolution algebra gives us.

> [!example|\*] Filtering Signals
> A central concept in signal analysis comes from the realm of Audio Engineering. Given a signal we would maybe want to consider that the medium introduces high or low frequency noise into our signal. We might want to filter this out in some way. To do this we can use the DFT and the theory we have introduced so far.
>
> Consider a simple signal with circular periodicity, meaning
> $G = \Z_{N} \quad f \in \C^G$
> By the inversion formula we get that
> $f(n) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \widehat{f}(k) e^{2 \pi i k \frac{n}{N}}$
> This should again be seen as $\widehat{f}(k)$ describing the weight of the $k$-th frequency. We can then consider the filtered function to modify these weights with some $\widehat{p}: \Z \to \C$.
> $f_{p} (n) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \widehat{f}(k) \widehat{p}(k) e^{2 \pi i k \frac{n}{N}}$
>
> We call the function $p \in \C^G$ a dampening function. It can be used to “clean up” Noise in $f$ in some pre-specified way. Note that we can also write
> $p(n) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \widehat{p}(k) e^{2 \pi i k \frac{n}{N}}$
> then we can express the filtered function simply as a convolution:
> $f_{p} = f * p = C_{p} f$
> In this context we call the operator $C_{p}$ a linear filter for $f$. It is exactly part of the [[Convolution Transformation Algebra]] which is why we spoke about it.
>
> Also borrowed from Audio analysis we can describe the filter to be a low or high pass filter depending on if the support of $\widehat{p}$ is concentrated on high values or low values.
>
> $$$\begin{align*}
> \text{Low Pass Filter}:& \quad \supp \widehat{p} = [L, N-1] \\
> \text{High Pass Filter}:& \quad \supp \widehat{p} = [0, L] \\
> \text{Band Pass Filter}:& \quad \supp \widehat{p} = [M, L]
> \end{align*}$$
> $$$

> [!example|\*] Circulant Matrices
> We can characterise convolution operators more explicitly by considering so-called circulant matrices. Consider a vector
> $a = \begin{pmatrix}a_{0} \\ \vdots \\ a_{N-1}\end{pmatrix} \in \C^N$
> then constructing a matrix out of all possible shuffles of this vectors results in a circulant matrix
> $M = \begin{pmatrix}a_{0} & a_{1} & \cdots & a_{N-1} \\ a_{N-1} & a_0 & \cdots & a_{N-2} \\ \vdots & \vdots & & \vdots \\ a_{1} & a_2 & \cdots & a_0\end{pmatrix}$
> Note that all rows are moving over the vector by one to the left while keeping circular symmetry.
>
> We can also define a commutative subalgebra using matrix multiplication and the set of all circulant matrices
> $circ_{N} = \set{A \in \C^{N \times N} \midline A \text{ is circulant}}$
> The crux of this construction now is that we state that for any $T : \C^{\Z_{N}} \to \C^{\Z_{N}}$ we have that
> $T \text{ is a convolution} \iff T \text{ can be expressed as a circulant matrix w.r.t the canonical basis}$
> this in turn can be more sussicntly expressed as
> $\mathcal{C}_{G} \cong circ_{N}$
> Meaning the [[Convolution Transformation Algebra#^f98ed9| algebra of convolution transformations]] in the case of $G = \Z_{N}$ is isomorphic to the circulant matrices of size $N$

> [!example|\*] Markov Chains
> In the area of Probability Theory we can
>
> A kernel $p \in \C^{X \times X}$ is called stochastic if
>
> 1. $p(x, y) \in [0,1]$
> 2. $\sum\limits_{y\in X} p(x, y) = 1$
>
> A markov chain with state space $X$ initial distribution $\nu \in M^{1}(X)$ and stochastic kerne $p \in \C^{X \times X}$ is a finite sequence of random variables
> $\xi_{0}, \ldots, \xi_{n}: Y \to X$ such that
>
> $$$\begin{align*}
> \mu(\xi_{0} = x) = \nu(x) \\ 
> \mu(\xi_{n} = x_{n}\mid \xi_{0} = x_{0}, \ldots, \xi_{n-1}=x_{n-1}) &= p(x_{n}, x_{n-1})\end{align*}$$
> The central theorem in this setting now is that we have a markov chaing iff we can write 
> $$\mu(\xi_{0} = x_{0}, \ldots, \xi_{n} = x_{n}) = \nu(x_{0}) p(x_{0}, x_{1}) p(x_{1}, x_{2}) \cdots p(x_{n-1}, x_{n})$$
> In particular we have $$\mu(\xi_{k} = x_{k}) = \sum\limits_{x_{0}, \ldots, x_{k-1} \in X} \nu(x_{0})p(x_{0}, x_{1}) p(x_{k-1}, x) = p^{k}(\nu(x)) = \sum\limits_{y \in Y} = \nu(y) p^{k}(x, y)$$
> with $P \nu(x) = \sum\limits_{y \in Y} \nu(y) p(x, y)$
> It is unexpected to see a convolution here since we don’t even have a group involved. We cant translate without a group. Now let $X = \Z_{n}$. A Markov chain on $\Z_{n}$ is invariant if
> $$p(x-z, y-z = p(x, y)$$
> Define $\mu(x) = p(0, x)$ which gives us that
> $$\mu(y-x) = p(0, y - x) = p(x, y)$$
> Hence in this setting we can write easier 
> $$p^{k}(x, y) = \mu^{*k} (y-x) = \mu * \mu * \ldots *\mu(y-x)$$
>
> WORK ON THIS MORE
> $$$

## The Sampling Theorem

A big question in analysing signals is how we can recreate a signal given a discrete set of data points. We will define the conditions under which the so-called [[Shannon Sampling Theorem]] applies which allows us to determine the function given a “good sampling” space.
