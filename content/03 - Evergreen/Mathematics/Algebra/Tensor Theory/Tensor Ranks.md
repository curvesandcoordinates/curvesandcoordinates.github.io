---
publish: true
created: 2026-02-12T14:26:04.352+01:00
modified: 2026-06-10T19:14:50.336+02:00
tags:
  - thoughts
---

In order to understand what the rank of tensor is we will look back at linear algebra and the different notions of a rank defined there. Note that we also keep in mind that [[Tensor Products as Linear Maps|Tensors act as Linear Maps]] meaning we can think of $2$-Tensors as being this Matrix defined for which the concept of rank must match our concept for tensors.

> [!theorem|\*] Different Equivalent Rank Definitions
> Let $M \in R^{n \times m}$ be a matrix in $R$ supposing that $R$ is an [[Rings#^3f93e1|integral domain]]. Then the following are equivalent
>
> - Determinental Rank: maximal $k \in \N$ such that there is a non-vanishing $k \times k$ minor
> - Row Rank: maximal number of linearly independent rows
> - Coloumn Rank: maximal number of linearly intependent coloumns
>
> If $R$ is additionally [[Ideals|Principal Ideal Domain]] a then in addition the following coincide:
>
> - Image Rank: $\dim_{R}(M R^{m})$
> - Inner Rank: minimal $k$ such that $M = XY$ and $X \in R^{n \times k}, Y \in R^{k \times m}$ or similarly the minimal $k$ such that $M = \sum\limits_{i=1}^{k} x_{i} y_{i}^{T}$

These are in general not equal ideas of ranks. Specifically we can consider properties like

> [!remark|\*] Smith Normal Form for PIDs
> Over PIDs every matrix $M \in R^{n \times m}$ can be brought into ‘Smith Normal Form’ $M = SDT$ where $S \in R^{n \times n}$ and $T \in R^{m \times m}$ are invertible and $D$ is a diagonal $n \times m$ matrix with $r = \rank(M)$ non-zero entries. This is efficiently computable.

This leads to a general definition of rank that we can use for the singular tensors.

> [!definition|\*]
> Let $M_{1}, \ldots, M_{n}$ be $R$-Modules. The **tensor rank** of $m \in M_{1} \otimes_{R} \ldots \otimes_{R} M_{n}$ is deifined as
> $\mathrm{rank}(m) := \min \set{r \in \N \midline m = \sum\limits_{i=1}^{r} a_{1i} \otimes \ldots \otimes a_{ni}}, a_{ij} \in M_{ij}$

## Tensor Rank can be Matrix Rank

It is now of interest to calculate this rank. As the formula is quite opaque we will use the related notion of Matrix Rank by considering when the rank of an element is equal to the rank of some from it generated matrix.

> [!corollary|\*] In PID Matrix Rank is Tensor Rank
> Let $R$ be a PID and $A, B$ each be a free and finitely generated $R$-Module. For any $m \in A \otimes B$, where
> $m = \sum\limits_{ij} M_{ij} a_{i} \otimes b_{j}$
> we have that the tensor rank is equal to the matrix rank for $M = (M_{ij})_{ij \in I}$
> $\mathrm{rank}(m) = \mathrm{rank}(M)$

`\begin{proof}`
proof idea: Use the isomorphism from befor $a^* \otimes b \mapsto b a^{*}$ and calculate  using the canonical matrix.
`\end{proof}`

In higher dimensional the same thing holds

> [!theorem|\*] Matrix rank = Tensor Rank
> Let $A$ be a finitely generated free $R$-Module and $m \in A^{\otimes d}$ such that with respect to any basis $A$ we have
> $m = \sum\limits_{i_{1}, \ldots, i_{d}} M_{i_{1}, \ldots, i_{d}} a_{i_{1}} \otimes \ldots \otimes a_{i_{d}}$
> then $\rank(m) = \rank(M)$
> Where we view $M \in \R^{n \times \ldots \times n} = (R^{n})^{\otimes d}$

Due to this statement we will mostly be considering statements for tensors of order $d$ meaning exactly objects like the $M$ above. There is something to be said about the [[Computability of Tensor Ranks|computation complexity]] for $d \geq 2$.

We can now go on to develop the theory of [[Border Ranks of Tensors]] and also consider [[Tensor Rank Bounds via Flattenting and Contraction]]

## Multiplicativity of Rank

We will now consider different operations beween Tensors, that make bigger ones out of smaller ones. We will also consider the ranks of the resulting tensors. This generalises the construction of larger matrices $A \otimes B$ and $A \oplus B$ from $A, B$. Note that in this case we know that

$$$\begin{align*}
\mathrm{rank}( A \otimes B) = \mathrm{rank}(A) \cdot \mathrm{rank}(B) \\
\mathrm{rank} (A \oplus B) = \mathrm{rank}(A) + \mathrm{rank}(B)
\end{align*}$$

> [!definition|*]
> Let $V_{i}, U_{i}$ be $\K$-Vector Spaces. Define
> $$\begin{align*}
> \boxtimes: (V_{1} \otimes \ldots \otimes V_{n}) \times (U_{1} \otimes \ldots \otimes U_{n}) \to (V_{1} \otimes U_{1}) \otimes \ldots \otimes (V_{n} \otimes U_{n}), \quad \left( \left(\otimes_{i=1}^{n} v_{i}\right), \left(\otimes_{i=1}^{n} v_{i}\right)\right) \mapsto \bigotimes_{i=1}^{n} (v_{i} \otimes u_{i}) \\
> \boxplus: (V_{1} \otimes \ldots \otimes V_{n}) \times (U_{1} \otimes \ldots \otimes U_{n}) \to (V_{1} \oplus U_{1}) \otimes \ldots \otimes (V_{n} \oplus U_{n}), \quad \Psi \boxplus \Phi\mapsto I^{-1}(\Psi \oplus \ldots \oplus \Phi)
> \end{align*}$$
> where $I: (V_{1} \oplus U_{1}) \otimes \ldots \otimes (V_{n} \oplus U_{n}) \to (V_{1} \otimes \ldots \otimes V_{n}) \oplus \ldots \oplus (U_{1} \otimes \ldots \otimes U_{n})$ is the natural isomorphism

These prodcuts are relatively intuitive if we consider tensors as multidimensional matrices. They have the following properties

> [!corollary|*] Properties of Kroneker Products and Sums
> For $\psi \in V_{1} \otimes \ldots \otimes V_{n}$ and $\phi \in U_{1} \otimes \ldots \otimes U_{n}$ on $\K$-Vector Spaces we have
> 1. $\rank(\psi \boxtimes \phi) \leq \rank(\psi \otimes \psi) \leq \rank(\psi) \cdot \rank(\phi)$
> 2. $\rank(\psi \boxplus \phi) \leq \rank(\psi) + \rank(\phi)$

These results are cool but what about the normal tensor product
> [!proposition|*] Tensor Rank is not Multiplicative
> $$\rank(W \otimes W) \leq 8 < 9 = \rank(W)^{2}$$
> for $W = e_{1} \otimes e_{2} \otimes e_{3} + e_{2} \otimes e_{1} \otimes e_{2} + e_{2} \otimes e_{2} \otimes e_{1}$


We can use the tensor rank theory to express [[Matrix Multiplication Efficieny Via Tensor Ranks]]

## Segre Embedding

We can think of this rank problem as a rather geometric defenition using the following terms

> [!definition|*] Segre Embedding and Variety
> Let $V_{i}$ be $\C$-Vector Spaces and $\mathbb{P}V_{i}$ the corresponding projective space, where we see it as the equivalence classes given by
> $$x \sim y \iff x = \lambda y, \lambda \in \C \setminus \set{0}$$
> then we call the following map the **Segre Embedding**
> $$\mathbb{P}V_{1} \times \ldots \times\mathbb{P}V_{n} \to \mathbb{P}(V_{1} \otimes \ldots \otimes V_{n}), \quad ([x_{1}], \ldots , [x_{n}]) \mapsto [x_{1} \otimes \ldots \otimes x_{n}]$$
> The image of this embedding is called the **Segre Variety** of elementary tensors.


In general we want to consider a variety associated to the Segre variety by constructing the intuitive definition of secants
> [!definition|*] Secant Variety
> For any projective variety $X \subset \mathbb{P}V$ we define the $r$-th secant variety as
> $$\sigma_{r}(X) = \overline{\bigcup_{x_{1}, \ldots, x_{r}} \mathbb{P}_{x_{1}, \ldots x_{r}}}$$
> where $\mathbb{P}_{x_{1}, \ldots, x_{r}} \subset \mathbb{P}V$ denotes the linear space spanned by $x_{1}, \ldots, x_{r}$ in $\mathbb{P}V$. The border $X$ rank (or essential $X$-Rank) of $p \in \mathbb{P}V$ is the smallest $r$ such that $p \in \sigma_{r}(X)$. The $X$-Rank of $p$ is the smallest $r$ such that $p \in \mathbb{P}_{x_{1}, \ldots , x_{r}}$.
$$$
