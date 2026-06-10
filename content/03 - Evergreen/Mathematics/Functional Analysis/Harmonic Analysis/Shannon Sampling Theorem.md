---
publish: true
created: 2025-08-13T10:40:00.000+02:00
modified: 2026-06-10T19:14:51.575+02:00
tags:
  - thoughts
---

Signal reconstruction is the general concept of reconstructing a signal given a set of discrete data points. This is central to signal analysis since in real world application data might be lost and we want to decrease the loss while not making it redundant.

In the following we will only consider the base case of $G = \Z_{n}$ since by the [[Structure Theorem for Finite Abelian Groups|classification]] any finite abelian group consists of groups like this.

We now consider a set of discrete times
$\mathcal{C} = \set{t_{1}, \ldots, t_{M}} \subset \Z_{N}$
from this we can define a samplin operator

> [!definition|\*] Sampling Operator
> Given a set of discrete times $\mathcal{C}$ we define the **sampling operator** to be
> $\mathcal{S_{C}}: \C^G \to \C^M, \quad f \mapsto \begin{pmatrix}f(t_{1}) \\ \vdots \\ f(t_{M})\end{pmatrix}$

In this sense the reconstruction problem becomes a question of finding the inverse of this sampling operator. Note that this task is only non-trivial in a very specific case.

We can see that by construction the operator $\mathcal{S_{C}}$ is always surjective. Thus the only thing stopping us from inverting it is injectivity. In the case where $M \geq N$ we would be sampling at least as many points as our function is defined on and thus already have retrieved the function trivially. This means that the only case we need to care about is injectivity of $\mathcal{S_{C}}$ in the case that $M < N$.

In this case we need to take note though that injectivity is very unreasonable at first. Since $N > M$ we are mapping from a high-dimensional space to a lower dimensional one and thus can’t expect any injectivity. The only way to remedy this is to consider a subspace of functions $\Pi_{L} \subset \C^G$ with
$\dim \Pi_{L} = L \leq M$
then Injectivity becomes possible again. Choosing this subspace is now our first point of order.

> [!definition|\*] Band-Limited Functions
> We define a subset of $\C^{\Z_{N}}$ called the **Band-Limited Functions**
> $\Pi_{L} = \span \set{e^{ il \frac{2 \pi}{N}} \midline 0 \leq l \leq L}$
> We also often denote $e^{i l \frac{2\pi}{N}} = \omega_{N}^l$ where $\omega_{N} = e^{2 \pi i \frac{1}{N}}$
> Any function $P \in \Pi_{L}$ can be seen using the inversion Formula as
> $P(j) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \widehat{P}(k) \omega_{N}^{jk}$
> where $\widehat{P}(k) = 0$ for $k > L$

Now the space of Band-Limited Functions should be thought of as functions containing course enough pure signals, so that these can actually be seen in our sampled values.

> [!remark|\*] Why Band Limited Functions make sense
> If we consider $G = \Z_{10}$ and we sample values $\mathcal{C} = \set{0, 2, 4, 6, 8}$ then we can see that our sampling operator is a map from $10$ dimensional space to $5$ dimensional space, meaning injectivity wont be possible. If we now consider
> $\Pi_{5} = \span \set{1, e^{2 \pi i \frac{2}{N}}, \ldots, e^{2 \pi i \frac{8}{N}}}$
> then we can see that these are the only pure frequencies that could be contained in our Data set. We can not talk about less coarse frequencies because our data would not allow us to discern them.

We can now reformulate the problem of reconstruction if we limit our operator to the space $\Pi_{L}$. Every function we could now get from the inverse sampling operator is of the form
$P(j) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \widehat{P}(k) \omega_{N}^{jk} = \frac{1}{N} \sum\limits_{k=0}^{N-1} \sum\limits_{l=0}^{N-1} P(l) \omega_{N}^{-kl} \omega_{N}^{jk} = \sum\limits_{l=0}^{N-1} P(l) \left(\frac{1}{N} \sum\limits_{k=0}^{N-1} \omega_{N}^{k(j-l)}\right)$
Sometimes people define the function put in brackets as the **Dirichlet Kernel**
$D_{N}(j) = \frac{1}{N} \sum\limits_{k=0}^{N-1} \omega_{N}^{kj}$
Using this notation we can see that actually $P$ can be expressed as a convolution.
$P = P * D_{N}$
Using this we know that convolution with the Dirichlet Kernel reprocuces our wanted function.

We can now begin seeing what condition we could need in order to use this to reconstruct a function. Given only the data
$\mathcal{S_{C}}P = \begin{pmatrix}P(t_{1}) \\ \vdots \\ P(t_{M})\end{pmatrix}$
If we were to have the condition that
$\widehat{P}(k) = \sum\limits_{m=1}^{M} P(t_{m}) \omega_{N}^{k t_{m}}$
then we would have a simple reconstruction property given by
$P(j) =\sum\limits_{m = 1}^{M} P(t_{m}) D_{N} (j-t_{m})$

> [!remark|\*] Interpreting the Condition
> The condition is reminicent of something we know from numerics. Namely a quadrature.
> $\int f = \sum\limits_{m=1}^{M} f(t_{m})$

If we want to work on finding situations in which this ideal situation is achieved we have to introduce some metric on $G = \Z_{N}$ which can be done by considering it as a graph and taking the Graph-Metric.

## Our Ideal Situation

This case is a little bit to general for us. We will work on developing a sampling theorem for the case where our samples are on a regular grid. Thus assume that we can decompose $N = n \cdot m$ with $n \geq 2$ and consider a sampling set
$\mathcal{C} = \set{l \cdot n \midline l = 0, \ldots, m-1}$

which means we want to go in regular spaced intervals. Consider
$\Pi_{m-1} = \span \set{\omega_{N}^l \midline 0 \leq l \leq m-1}$

We can then consider the same object as the dirichlet kernel which turns out to be in our space
$\sigma_{m} (j) = \frac{1}{\sqrt{Nm}} \sum\limits_{k=0}^{m-1} \omega_{N}^{jk}$
which is simply a frequency of pure functions. It is band limited in the sense that the fourier transform is especially simple
$\widehat{\sigma}_{m} (k) = \frac{1}{m} \cdot \mathbb{1}_{[0, m-1]}(k)$

> [!proposition|\*] The Dirichlet Kernel is an Orthonormal Basis
> The system $\set{T_{ln} \sigma_{m} \midline l = 0, 1, \ldots, m-1}$ is an orthonormal basis of $\Pi_{m-1}$.

`\begin{proof}`
The proof is simple calculation. Consider some $l$ and $l'$ then we calculate
$\innprod{T_{ln} \sigma_{m}}{T_{l'n} \sigma_{m}} = \cdots = \frac{1}{m} \sum\limits_{k=0}^{m-1} \omega_{m}^{k(l - l')} = \begin{cases}1 \quad l = l' \\ 0 \quad l \neq l'\end{cases}$
`\end{proof}`

Now using this we move towards the sampling theorem.

> [!proposition|4.10] Shannon Sampling Theorem
> Let $N = n \cdot m$ and $f \in \Pi_{m-1}$ then
> $f(j) = \sum\limits_{l=0}^{m-1} f(ln) \sigma_{m}(j-ln)$

`\begin{proof}`
Let $f \in \Pi_{m-1}$ then we can write

$f(j) = \sum\limits_{l=0}^{N-1} \innprod{f}{T_{ln} \sigma_{m}} T_{ln} \sigma_{m}(j)$
after some computation we get that
$\innprod{f}{T_{ln} \sigma_{m}} = \ldots = f(ln)$
which is a finite situation of the shannon sampling theorem
`\end{proof}`

> [!remark]
> In the continous case we replace our kernel $\sigma_{m}$ by the $\mathrm{sinc}$ function.
