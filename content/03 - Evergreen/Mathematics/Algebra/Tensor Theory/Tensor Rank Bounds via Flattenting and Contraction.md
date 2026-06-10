---
publish: true
created: 2026-02-12T19:24:55.959+01:00
modified: 2026-06-10T19:14:50.276+02:00
tags:
  - thoughts
---

When considering Tensor Products and their Tensor Ranks we often care about finding Bounds for those ranks since they somehow tell us how complex a given tensor seems to be. In order to find these bounds we consider some higher order tensor and work on subdividing it into a order 2 Tensor which we can then express as a matrix and use our notion of Rank there to bound the rank of the original tensor

> [!definition|\*] Tensor Flattening
> Let $V_{i} = R^{d_{i}}$ be some free tensor and let $\emptyset \neq I \subset \set{1, \ldots, n}$ then there exists an isomorphism
> $F: V_{1} \otimes \ldots \otimes V_{n} \to \left(\bigotimes_{i \in I} V_{i}\right) \otimes \left(\bigotimes_{i \notin I} V_{i}\right)$
> which maps
> $F: m_{1} \otimes \ldots \otimes m_{n} \mapsto \left(\bigotimes_{i \in I} m_{i}\right) \otimes \left(\bigotimes_{i \notin I} m_{i}\right)$
> essentially grouping tensors ina. predefined way. This is called a **Flattening**.

Connected to Flattenings we could also flatten a given tensor $a \otimes b \otimes c$ into $(a \otimes b) \otimes c$ and then evaluate is using the map
$id_{A\otimes B} \otimes e_{1}^{*}$
where $e_{i}$ is a basis in $C$. This would give us
$(a \otimes b) \otimes c \mapsto a\otimes b$
this evaluation of the flattening is then called a contraction

> [!definition|\*] Contraction of Tensor
> A map $\gamma: V_{1} \otimes \ldots \otimes V_{n} \to \Omega_{1} \otimes \Omega_{2}$
> where $\gamma = (\gamma_{1} \otimes \gamma_{2}) \circ F$
> such that $\gamma_{1} \in \mathrm{Hom_{R}\left(\bigotimes_{i \in I} V_{i}\right), \Omega_{1}}, \gamma_{2} \in \mathrm{Hom_{R}\left(\bigotimes_{i \notin I} V_{i}\right), \Omega_{2}}$ is called a **Contraction**

This connected to the rank of a tensor now gives us the followign central theorem

> [!theorem|\*] Contractions Reduce Rank
> If $\gamma: V_{1} \otimes \ldots \otimes V_{n} \to \Omega_{1} \otimes \Omega_{2}$ is a contraction, then
>
> - $\rank(\gamma(m)) \leq \rank(m)$
> - $\rank(\gamma(m)) \leq \mathrm{brk}(m)$ for $R = \C$

`\begin{proof}`
Suppore you have a tensor $m$ or rank $r$. Then we can write
$m = \sum\limits_{k=1}^{r} m_{1,k} \otimes \ldots \otimes m_{n, k} \implies \gamma(m) = \sum\limits_{n=1}^{r} \gamma_{1}\left(\bigotimes_{i \in I} m_{i}(k) \right) \otimes \gamma_{2}\left(\bigotimes_{i \notin I} m_{i}(k) \right)$
This trivially means that $\rank(\gamma(m)) \leq \rank(m)$.

For the other direction consider a sequence $(a_{l})_{l \in \N} \in \left(V_{1} \otimes \ldots \otimes V_{n}\right)^{\N}$ such that
$\lim_{l \to \infty} a_{l} = m \quad \rank(a_{l}) \leq \mathrm{brk}(m)$
since $\gamma$ is a linear and thus continous map we can apply $\gamma$ and see that
$\rank (a_{l}) \leq \mathrm{brk}(m) \implies \rank(\gamma(m)) \leq\liminf_{l \to \infty}\rank(\gamma(a_{l})) \leq \liminf_{l \to \infty}\rank(a_{l}) \leq \mathrm{brk}(m)$
We can also note that $\gamma(m)$ is a rank 2 tensor, and thus simply a matrix up to rewriting. The rank of a matrix is though lower semi-continous and thus the above innequality holds.
`\end{proof}`

> [!example|\*] GHZ-State /Tensor
> Let $\set{e_{\i}}_{i = 1}^{d}$ be a basis of $\C^{d}$ and define
> $\Psi_{GHZ} := \sum\limits_{j=1}^{d} e_{i}^{\otimes n} \in \left(\C^{d}\right)^{\otimes n}$
> which is a famous tensor in the quantum computing world. We claim that
> $\rank(\Psi_{GHZ}) = \mathrm{brk}(\Psi_{GHZ}) = d$
> We know that simply by the definition $\rank(\Psi_{GHZ}) \leq d$ which means also $\mathrm{brk}(\Psi_{GHZ}) \leq d$. Now we consider the contraction $\gamma_{1} \otimes \gamma_{2}$ with $\gamma_{1} = \mathrm{id}$ and $\gamma_{2}:\left(\C^{d}\right)^{\otimes (n-1)} \to \C^{d}$ with
> $\gamma_{2}:e_{i}^{\otimes (n-1)} \mapsto e_{i}$
> Then we can see that
> $\gamma(\Psi_{GHZ}) = \gamma\left( \sum\limits e_{i} \otimes e_{i}^{\otimes (n-1)} \right) = \sum\limits_{i = 1}^{d} e_{i} \otimes e_{i} \cong \mathrm{id}$
> Thus we know that $\rank(\Psi_{GHZ}) \geq \rank(\gamma(\Psi_{GHZ})) = d$ due to the identity. Similarly for the border rank.

## Maximal Rank of Elements

We now get to a rather embarrassing part: We ask what the maximal possible rank of a tensor is and find out that this question is not simple at all.

> [!theorem|\*] Maximal Possible Rank
> Denote by $r_{max}$ the maximal rank of any element in $\left(\C^{d}\right)^{\otimes n}$. Then
> $\frac{d^{n-1}}{n} \leq r_{max} \leq d^{n-1}$

`\begin{proof}`
We proove the bound by induction on $n$:
For the case of $d, n = 2$ we get $r_{max} = d$. Suppose $r_{max}(d, n-1) \leq d^{n-2}$ then for any $\psi \in \left(\C^{d}\right)^{\otimes n}$ we have that
$\psi = \sum\limits_{i = 1}^{d} e_{i} \otimes \psi_{i}$
where $\psi_{i}$ must have rank less than $d^{n-2}$. Thus in total the rank of $\psi$ is
$\rank(\psi) \leq d \cdot d^{n-2} = d^{n-1}$

The lower point is obtained by dimension counting since: We can construct a surjective map
$\left(\bigoplus_{i=1}^{n} \C^{d}\right)^{r_{max}} \to \left(\C^{d}\right)^{\otimes n}$

Since this map is surjective we know that the dimension of the image can not exceed the dimension of the domain. Meaning
$n \cdot d \cdot r_{max} \geq d^{n} \implies r_{max} \geq \frac{d^{n-1}}{n}$
`\end{proof}`

The ‘generic rank’ by which we mean the rank a “random” tensor can have is given slightly differently
$r_{gen} = \left\lceil  \frac{d^{n}}{n(d-1) + 1}  \right\rceil$
also we can note that $r_{max} \leq 2 r_{gen}$.

Via these observations we can even improve the bound given above.

> [!example|\*] W-State /Tensor
> Let $\set{e_{i}}^{2}_{i=1}$ be a basis of $\C^{2}$ and $W \in \left(\C^{2}\right)^{\otimes 3}$ such that
> $W = e_{1} \otimes e_{2} \otimes e_{2} + e_{2} \otimes e_{1} \otimes e_{2} + e_{2} \otimes e_{2} \otimes e_{1}$
> then $\rank(W) = 3$ and $\mathrm{brk}(W) = 2$
>
> To prove this we first find lower bounds by using contractions. For any $\phi \in \left(\C^{2}\right)^{*}$ consider the contraction:
> $(\phi \otimes \mathrm{id} \otimes id)(w) =\phi(e_{1}) \begin{pmatrix}0 & 0 \\0 & 1\end{pmatrix} + \phi(e_{2}) \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$
> This gives us multiple observations
>
> - $2 \leq \mathrm{brk}(W) \leq \rank(W)$ by using $\phi = e_{2}^{*}$
> - Has $\rank = 1$ only if $\phi \sim e_{1}^{*}$
>
> Suppose now that $W = a_{1} \otimes b_{1} \otimes c_{1} + a_{2} \otimes b_{2} \otimes c_{2}$ has a linearly independent pair $a_{1}, a_{2}$ (there must exist one since otherwise this has rank $1$ which we already showed befor doesnt work). This means they form a basis and also have a dual basis. Act now with
> $\begin{align*} (a_{1}^{*} \otimes \mathrm{id} \otimes \mathrm{id})(W) = b_{1} \otimes c_{1} \\ (a_{2}^{*} \otimes \mathrm{id} \otimes \mathrm{id})(W) = b_{2} \otimes c_{2}\end{align*}$
> But these are rank $1$. Before we said that this only happens if a proportionality exists with $e_{1}$. but this is a contradiction since we “excluded” $e_{1}$
>
> Now consider the border rank. We already know $2 \leq \mathrm{brk}(W)$. Equality follows from the convergence of the following sequence
> $W_{n} = n \left( e_{2} + \frac{e_{1}}{n} \right)^{ \otimes 3} - n e_{2} \otimes e_{2} \otimes e_{2}$
> since when calculating this out we can see that $W_{n} \to W$ and $\rank(W_{n}) \leq 2$
