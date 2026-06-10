---
publish: true
aliases:
  - abelian group
created: 2025-06-14T15:00:31.000+02:00
modified: 2026-06-10T19:14:49.913+02:00
tags:
  - linker-include
---

A group captures the most basic idea of a set in which we can “make the elements interact”. They most readily model group symmetries but the most common example is the groups of numbers like $(\mathbb{Z}, +)$

> [!definition|\*] Group
> A group $(G, \cdot)$ is a set $G \neq \emptyset$ with an operation $\cdot: G \times G \to G, \quad (g, h) \mapsto g \cdot h$
> such that:
>
> - The operation is **Associative:** $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
> - We have an **identity element:** $\exists e \in G: e \cdot a = a \cdot e = a$
> - We have **inverse elements:** $\forall a \in G \exists b \in G: a \cdot b = e$which we denote as $b = a^{-1}$

We can now impose a lot additional properties to these groups to model different concepts. An example for this is commutativity.

> [!definition|\*] Abelian Groups and their Notation
> G is called commutative or abelian if $x \cdot y =y  \cdot x$ for abelian groups we will tend to denote the operator as $+$ instead of $\cdot$

Some more notation is that for a given group $G$ the number $|G|$ is called its order. If $|G| < \infty$ then we call it a finite group

## Subgroups

> [!definition|\*] Subgroups
> A subset $H \neq \emptyset$ with $H \subset G$ is called a subgroup of $G$ if with the same operation $H$ becomes a group.

> [!remark|\*] Notation for Subgroups
> We write $H \leq G$  for $H$ being a subgroup of $G$ similarly $H < G$ is a proper subgroup.

Every group has a specific simple subgroup namely the trivial group. Since $e \in G$ we always see that
$\set{e} \leq G$

Some other properties are:

- Some $H < G$ is **minimal** if $H \neq \set{e}$ and contains no proper subgroups
- Some $H < G$ is **maximal** if $H \neq G$ and is contained in no other propert subgroups
- We call a subgroup $H < G$ **normal** (or a normal subgroup) if $\forall x \in G: \quad xH = Hx$. We then write $H \triangleleft G$

> [!proposition|\*] Characterisation of Normal Subgroups
> A subgroup $H$ is normal if $x^{-1} H x \subset H$ for all $x \in G$

`\begin{proof}`
This boils down to proving that
$x^{-1} H x \subset H \iff \forall x \in G: xH = Hx$

Proving left to right means that we assume that $x^{-1} H x \subset H$ then for any $h \in H$ we get
$Hx \ni hx = x x^{-1}h x = x (x ^{-1} h x) \in x(x^{-1}H x) \subset xH$
and similarly in the other direction. Via this avenue we can easily prove the statement
`\end{proof}`

### Special Subgroups

> [!definition|\*] Simple Groups
> A group $G$ is called simple if $G \neq \set{e}$ and $\set{e} \trianglelefteq G$ is the only normal subgroup.

> [!definition|\*] Center of Group
> A group $G$ has a subgroup called the center
> $Z(G) = \set{x \in G \midline xy = yx \quad \forall y \in G}$
> which is the biggest abelian subgroup.

## Cosets and Quotient Groups

> [!definition|\*] Cosets and Quotient Sets
> Let $H < G$ and $x \in G$ then
> $xH = \set{xg \midline g \in H}$
> is the left coset and
> $Hx = \set{gx \midline g \in H}$
> with these we can build the quotient groups
> $G / H = \set{x H \midline x \in G}$
> $H \ G = \set{Hx \midline x \in G}$
> And we also define the center of the group

> [!proposition|\*] Groupstructure of Quotient Groups
> Let $H$ be a normal subgroup of $G$ then $G/H$ with $(xH) \cdot (yH) = (xy)H$ is a group

`\begin{proof}`

The group axioms are trivially true if we can show that our operation is well defined. By this we mean that the choice of the representant doesn’t change the result. This result depends on the normality of $H$.

Let $xH, x'H, yH, y'H \in \faktor{G}{H}$ with the property that $xH = x'H$ and $yH = y'H$ then we want to show that
$(xy)H = (x'y')H$
We have to note that for some $n_{1}, n_{2} \in H$

$$$\begin{align*}
xH = x'H &\implies x' = x n_{1} \\
yH = y'H &\implies y' = y n_{2}
\end{align*}$$
This now gives us that
$$x'y' = x n_{1} y n_{2} =x y y^{-1} n_{1}y n_{2} = x n_{1} y n_{2} =x y (y^{-1} n_{1}y) n_{2}$$
then the normality of $H$ gives us that $y^{-1} n_{1} y \in H$, giving us that $H \ni h_{y} = y^{-1}n_{1}y n_{2}$ thus
$$x' y' = xy h_{y} \implies x'y' H = xy H$$
`\end{proof}`

> [!example|*] Simpe Examples for Groups 
> Consider some examples of groups
> 1. $\Z, \mathbb{Q}, \R, \C$  are abelian groups
> 2. Let $N \in \N$ and let $$N \Z = \set{Nk \midline k \in \Z}$$ then $N \Z$ is normal subgroup of $\Z$. We consider the group $\Z / N \Z =: \Z_{N}$ which then is an abelian group. Let $\tilde n := n + N \Z = \set{ n + kN \midline k \in \Z}$. Since $$\tilde n = \tilde m \iff n, m \text{ have the same remainder}$$ The set of remainders for division by $N$ is $$\set{0, 1, \ldots , N-1}$$meaning that $|\Z_{N}| = N$ and thus we might write $$\Z_N  = \set{\tilde 0, \tilde 1, \ldots , \tilde{N-1}}$$ 
> 3. Let $N \in \N$ and define $\omega_{N} = e^{ \frac{2\pi i}{N}}$ as the $N$th root of unity. Now consider $$\mathbb{T}_N  = \set{\omega_N^n \midline n \in \N}$$Then $\mathbb{T}_{N}$ is a finite group wrt to multiplication called the finite torus group. We then also call the group $$\mathbb{T} = \set{z \in \C \midline |z|=1 }$$ simply the Torus group.
> 4. Let $\mathbb{F}$ be a field and $$Mat(n, \mathbb{F}) = \set{A = \left( a_{ij} \right)_{i,j=1}^{n} \midline a_{ij} \in \mathbb{F}}$$ This is a $\mathbb{F}$ vectorspace (with addition). Its also an associative algebra with matrix multiplication. Consider $$GL(n, \mathbb{F}) \subset Mat(n , \mathbb{F})$$ containing all invertible Matrices. This is also a group.

^47768b

$$$
