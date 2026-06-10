---
publish: true
created: 2025-11-11T16:01:47.251+01:00
modified: 2026-06-10T19:14:50.589+02:00
tags:
  - thoughts
---

We take the definitions of [[Sheaves and Presheaves|sheaf]] as a given fact and define from [[12. Sheaves and Sheaf Cohomology| complex analysis 2 lecture]]

Let $U \subset \C$ be an open set. We will derive a sufficient condition for the existence of primitives for all $f \in \mathcal{O}(U)$. We will want an open cover of $U$ so define for some index set $I$ the open covering $\mathcal{U} = \set{U_{i}}_{i \in I}$, we will also need to know about their intersections so we define $J \subset I \times I$ such that for $(i, j) \in J$ we have $U_{i} \cap U_{j} \neq \emptyset$.
Now we denote the $\underline \C$ as the sheaf of locally constant functions. For an open $V \subset \C$ we denote $\underline \C(V)$ as the set of complex valued function on $V$ which are locally constant.
From this setup we can define a couple of useful objects which turn out to be dual to the forms defined in earlier chapters:

1. Let $C^{1}( \mathcal{U}, \underline \C) = \prod_{(i, j) \in J} \underline \C (U_{i}\cap U_{j})$. We call elements of this set $1$-cochains of the covering $\mathcal{U}$ with values in $\underline \C$.
2. Let $Z^{1}( \mathcal{U}, \underline \C)$ be the subset of $C^{1}( \mathcal{U}, \underline \C)$ given as $Z^{1}( \mathcal{U}, \underline \C) := \set{(c_{ij})_{(i,j) \in J} \in C^{1}( \mathcal{U}, \underline \C) \midline c_{ij} + c_{jk} + c_{ki} = 0 \text{ on } U_{i} \cap U_{j} \cap U_{k} \text{ whenever } U_{i} \cap U_{j} \cap U_{k}\neq \emptyset}$
   An element of $Z^{1}( \mathcal{U}, \underline \C)$ is called a $1$-cocycle of $\mathcal{U}$ with calues in $\underline \C$.
3. Let $C^{0}(\mathcal{U}, \underline \C) := \prod_{i\in I} \underline \C(U_{i})$. Elements of this set are called $0$-cochains of $\mathcal{U}$ with values in $\underline \C$.

In this setup we now can also define a dual object to the boundary operator that we had before:
$\delta: C^{0}(\mathcal{U}, \underline \C) \to Z^{1}(\mathcal{U}, \underline \C)$
such that
$(c_{i})_{i\in I} \in C^{0}(\mathcal{U}, \underline \C) \implies (\delta c)_{ij} = \at{c_{i}}{U_{i} \cap U_{j}} - \at{c_{j}}{U_{i} \cap U_{j}}$ where $c_{i} \in \C(U_{i})$ and $(i,j) \in J$.
From this definition it is easy to see that $\delta c \in Z^{1}(\mathcal{U}, \underline \C)$.

We will now also (why will become clearer in the general theory) define a set $B^{1}(\mathcal{U}, \underline \C) = \im \delta \subset Z^{1}(\mathcal{U}, \underline \C)$. Now its important to see that $Z^{1}$ and $B^{1}$ are both abelian groups and even $\C$-vector spaces. Since we also have thtat the mapping $\delta$ is a $\C$-Linear Map we can take the quotient group which we will define as

> [!definition] Cohomology
> The quotient vector space (quotient group)
> $H^{1}(\mathcal{U}, \underline \C) := \faktor{Z^{1}(\mathcal{U}, \underline \C)}{B^{1}(\mathcal{U}, \underline \C)}$
> is called the first cohomology group of $\mathcal{U}$ with values in $\underline \C$.

> [!theorem]
> Let $U \subset \C$ be an open subset and $\mathcal{U}$ be an open covering of $U$ by disks. Assume that $H^{1}(\mathcal{U}, \underline \C) = 0$ the trivial group. Then every $f \in \mathcal{O}(U)$ has a primitive in $U$.

`\begin{proof}`
As each $U_{i}$ is a disk, $f$ has a primitive $F_{i}$ on $U_{i}$. Now given $(i, j) \in J$ we can define $c_{ij}= F_{i} - F_{j}$ on $U_{i}\cap U_{j}$. Since $U_{i} \cap U_{j}$ is connected we know that $c_{ij}$ is a constant (show this!!).
If $i,j,k \in I$ are such that $U_{i} \cap U_{j} \cap U_{k} \neq \emptyset$ one has that
$c_{ij} + c_{jk} + c_{ki} = (F_{i} - F_{j}) + (F_{j} - F_{k}) + (F_{k} - F_{i}) = 0$
Hence the family
$\xi = \set{ \left( c_{ij} \right)_{(i, j) \in J}} \in Z^{1}(\mathcal{U}, \underline \C)$
As $H^{1}(\mathcal{U}, \underline \C) = 0$ there must exists a cochain $c = (c_{i})_{i \in I} \in C^{0}$ such that $\delta c = \xi$. Meaning there exists a family $(c_{i})_{i \in I} \in \prod_{i \in I} \underline \C (U_{i})$ with
$F_{i} - F_{j} = c_{i} - c_{j}  \text{ on } U_{i}\cap U_{j}, \forall(i,j)\in J$
We know define $F$ on $U$ as a map such that
$\at{F}{U_{i}} = F_{i} - c_{i} $
As we know have that on $U_{i} \cap U_{j}$ that $F_{i} - c_{i} = F_{j} - c_{j}$
we have a well-defined $F$. Since for all $i \in I$ $c_{i}$ is a constant and $F_{i}$ is a primitive of $f$ on $U_{i}$, we have that for any $i$
$F' = F_{i}' = f \text{ on } U_{i}$
Hence $F$ is a primitive of $f$
`\end{proof}`

---

## Higher Order Cohomology on General Sheafs

We can now abstract this to higher $k$-Chains and also generalise the Sheaf we are using. We will let $(X, \tau)$ be a topological space and $\mathcal{F}$ a pre-sheaf of abelian groups on $X$. Also we will consider $\mathcal{U}$ to be an open covering of $X$.

> [!definition] General $q$-Cochains
> Let $q \in \N_{0}$ then we define
> $C^{q}(\mathcal{U}, \mathcal{F}) := \prod_{ (i_{0}, i_{1}, \ldots, i_{q}) \in I^{q+1}} \mathcal{F} \left( U_{i_{0}} \cap U_{i_{1}} \cap \ldots \cap U_{i_{q}} \right)$
> An element $f \in C^{q}(\mathcal{U}, \mathcal{F})$ written as
> $f = (f_{i_{0}, \ldots i_{q}})$
> is called a $q$-cochain of $\mathcal{U}$ with values in $\mathcal{F}$.
> If $U_{i_{0}} \cap U_{i_{1}} \cap \ldots \cap U_{i_{q}} = \emptyset$ then $f_{i_{0}, \ldots i_{q}} = 0$.
> Under componentwise addition $C^{q}(\mathcal{U}, \mathcal{F})$ becomes an abelian group, called the group of $q$-cochains.
>
> Generalising the boundary operator also works in the following way
>
> - Let $q = 1$ then $\delta^{0}: C^{0}(\mathcal{U}, \mathcal{F}) \to C^{1}(\mathcal{U}, \mathcal{F})$ is defined as $(f_{i})_{i \in I} \mapsto \delta^{0} (f_{i})_{i \in I} = (g_{ij})_{(i,j) \in I^{2}}$such that $g_{ij} := \at{f_{i}}{U_{i} \cap U_{j}} - \at{f_{j}}{U_{i} \cap U_{j}}$
> - Let $q = 2$ then we define similarly $\delta^{1}: C^{1}(\mathcal{U}, \mathcal{F}) \to C^{2}(\mathcal{U}, \mathcal{F})$ such that $(f_{ij})_{i,j \in I} \mapsto \delta^{1} (f_{ij})_{i,j \in I} = (g_{ijk})_{(i,j,k) \in I^{3}}$ with the definition of $g_{ijk} = f_{ij} + f_{jk}+ f_{ki}$
>   daksdnoasndoaknsd
> - For general $q$ we get that $\delta^{q}: C^{q-1}(\mathcal{U}, \mathcal{F}) \to C^{q}(\mathcal{U}, \mathcal{F})$ is defined such that
>   $(f_{i_{0}, i_{1}, \ldots, i_{q+1}})_{i \in I} \mapsto \delta^{0} (f)_{({i_{0}, i_{1}, \ldots, i_{q+1}})} = \sum\limits_{n=0}^{q+1} (-1)^{n} \at{f_{i_{0}, \ldots, \hat i_{n}, \ldots, i_{q+1}}}{U_{i_{0}} \cap \ldots \cap U_{i_{q+1}}}$

> [!definition]
> For all $q \in \N_{0}$ we have that $\delta^{q+1} \circ \delta^{q} = 0$

$$$\begin{CD}
C^{0} @>\delta^{0}>> C^{1} @>\delta^{1}>> C^{2} @>\delta^{2}>> \cdots @>\delta^{q-1}>> C^{q} @>\delta^{q}>>
\end{CD}$$
is called a complex $(C^{\dot}, \delta^{\dot})$ 


Now assume that $\mathcal{F}$ is a sheaf.

> [!definition]
> We define the set $$Z^{1}(\mathcal{U}, \mathcal{F}) := \ker [ \delta^{1}: C^{1} \to C^{2}]$$
>to be the set of $1$-cocycles.
>We also call the set $$B^{1}(\mathcal{U}, \mathcal{F}) = \im[\delta^{0}: C^{0} \to C^{1}]$$
>is called the $1$-coboundaries.

Given the second property of sheaves is that there must exist some $f \in \mathcal{F}(X)$ with $$f_{\mid U_{i}} = f_{i}$$
then we can see that we have a mapping 
$$\mathcal{F}(X) \to Z^{0} \quad f \mapsto (f_{\mid U_{i}})_{i \in I}$$
is an isomorphism. Hence we can see that $H^{0}(\mathcal{U}, \mathcal{F}) = \mathcal{F}(X)$ which is independent of $\mathcal{U}$.


> [!theorem]
> Let $U \subset \C$ be an open and let $\epsilon$ be the sheaf of $C^{\infty}$-functions on $U$. Then $H^{1}(\mathcal{U}, \epsilon) = 0$

`\begin{proof}`
We need to show that every $1$-cocycle $(f_{ij}) \in Z^{1}$ is a $1$-coboudnary. 
Let $\set{\psi_{i}}$ be aa partition of unity relative to $\mathcal{U}$ on $X$. Then we have that $\psi_{j} f_{ij}$ is defined on $U_{i} \cap U_{j}$ and it can be extended to $U_{i}$ preserving $C^{\infty}$ thus making $\psi_{j} f_{ij}$ an element of $\epsilon(U_{i})$.
Let $g_{i} = \sum\limits_{j \in I} \psi_{j} f_{ij}$ which makes sense since this sum is finite due to the paracompactness of $\C$. We also have that $g_{i} \in \epsilon(U_{i})$.
Now given $i,j \in I$ on $U_{i} \cap U_{j}$ we get
$$g_{i} - g_{j} = \sum\limits_{k \in I} \psi_{j} f_{ik} - \sum\limits_{k \in I} \psi_{k} f_{jk} = \sum\limits_{k \in I} \psi_{k} \left( f_{ik} - f_{jk} \right) = \sum\limits_{k \in I} \psi_{k} f_{ij} = f_{ij}$$
thus giving us $f_{ij} \in B^{1}$
`\end{proof}`


> [!theorem] Cohomology of Holomorphic Functions 
>Let $\mathcal{U}$ be a cover of $\C$ then $H^{1}(\mathcal{U}, \mathcal{O}) = 0$

`\begin{proof}`
Let $(f_{ij}) \in Z^{1}(\mathcal{U}, \mathcal{O})$. As $Z^{1}(\mathcal{U}, \mathcal{O}) \subset Z^{1}(\mathcal{U}, \epsilon)$ and since we have just shown that $H^{1}(\mathcal{U}, \epsilon) = 0$ there exists a $0$-cochain $(g_{i}) \in C^{0}(\mathcal{U}, \epsilon)$ such that 
$$f_{ij} = g_{i} - g_{j}$$
on $U_{i} \cap U_{j}$.
As $\del_{\overline z} f_{ij} = 0$ we get that $\del_{\overline z} g_{i} = \del_{\overline z}g_{j}$ on $U_{i} \cap U_{j}$. There must now exists some $h \in \epsilon(\C)$ such that $\at{h}{U_{i}} = \del_{\overline z} g_{i}$.

Here we apply the following assumed lemma
> [!lemma] Dolbeault
> For any $h \in \epsilon(\C)$ we get that there exists $g \in \epsilon(\C)$ such that $h = \del_{\overline z} g$.

Using this we define $g$ to be such that $h = \del_{\overline z} g$. Define 
$$f_{i} := g_{i} - g$$
As $\del_{\overline z} f_{i} = \del_{\overline z}  g_{i} - \del_{\overline z} g = 0$ meaning $f_{i} \in \mathcal{O}(U_{i})$
Also $(f_{i}) \in C^{0}(\mathcal{U}, \mathcal{O})$
Moreover
$$f_{i} - f_{j} = g_{i} - g - g_{j} + g = g_{i} - g_{i} = f_{ij}$$
`\end{proof}`
$$$
