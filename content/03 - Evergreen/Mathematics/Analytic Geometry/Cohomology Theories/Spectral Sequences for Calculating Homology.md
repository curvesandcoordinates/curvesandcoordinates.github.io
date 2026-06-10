---
publish: true
created: 2025-11-12T00:20:53.275+01:00
modified: 2026-06-10T19:14:50.596+02:00
tags:
  - thoughts
---

In the general language of [[Homology and Cohomology Theories|Homology]] we can define a very algebraic tool to more easily calculate cohomology groups. This will be quickly defined here for general $R$-Modules.

## A Brief Introduction to Spectral Sequences

> [!definition|\*] Differential Bi-graded Module over a Ring $R$
> A _differential bi-graded module over a Ring $R$_ is a collection of $R$-Modules, $\set{E^{p, q}}$, with $p, q \in \mathbb{Z}$ together with an $R$-linear mapping, $d: E^{\ast, \ast} \to E^{\ast, \ast}$. This mapping is called the differential. It is of bidegree $(s, 1-s)$ for some $s \in \mathbb{N}$ satisfying $d \circ d = 0$.
>
> Where a bidegree $(a, b)$ means $d: E^{p, q} \to E^{p + a, q + b}$

We usually visualise this bi-graded module to be a lattice of points where every vertex is an $R$-Module.

```tikz
\usetikzlibrary{matrix}

\begin{document}

	
	    \begin{tikzpicture}
	        \matrix (m) [matrix of math nodes,
	            nodes in empty cells,nodes={minimum width=4ex,
	            minimum height=4ex,outer sep=-2pt},
	            column sep=1ex,row sep=1ex]{
	                    &   &   &   &   &   &   \\
	                3   &E^{0, 3}   &E^{1, 3}   &E^{2, 3}   &E^{3, 3}   \\
	                2   &E^{0, 2}   &E^{1, 2}   &E^{2, 2}   &E^{3, 2}   \\
	                1   &E^{0, 1}   &E^{1, 1}   &E^{2, 1}   &E^{3, 1}   \\
	                0   &E^{0, 0}   &E^{1, 0}   &E^{2, 0}   &E^{3, 0}   \\
	        \quad\strut &0  &1  &2  &3  &\strut\\
	            };
	        \draw[thick] (m-1-1.east) -- (m-6-1.east);
	        \draw[thick] (m-6-1.north) -- (m-6-6.north);
	    \end{tikzpicture}
	    
	    \begin{tikzpicture}
	        \matrix (m) [matrix of math nodes,
	            nodes in empty cells,nodes={minimum width=4ex,
	            minimum height=4ex,outer sep=-2pt},
	            column sep=1ex,row sep=1ex]{
	                    &   &   &   &   &   &   \\
	                3   &E^{0, 3}   &           &           &       \\
	                2   &           &           &E^{2, 2}   &       \\
	                1   &           &E^{1, 1}   &           &       \\
	                0   &           &           &           &E^{3, 0}   \\
	        \quad\strut &0  &1  &2  &3  &\strut\\
	            };
	        \draw[thick] (m-1-1.east) -- (m-6-1.east);
	        \draw[thick] (m-6-1.north) -- (m-6-6.north);
	
	        \draw[-stealth] (m-2-2) -- (m-3-4);
	        \draw[-stealth] (m-4-3) -- (m-5-5);
	    \end{tikzpicture}
	    
	
\end{document}
```

Note that we can now already talk about the cohomology group of a specific differential bi-graded module over $R$ by defining
$H^{p,q}(E, d) = \frac{\ker[d: E^{p, q} \to E^{p+s, q-s+1}]}{\im[d: E^{p - s, q + s - 1} \to E^{p, q}]}$

> [!definition|\*] First Quadrant Spectral Sequences of Cohomological Type
> A _spectral sequence of cohomological type_ is a collection of differential bi-graded $R$-modules $\set{E_r, d_r}_{r \in \mathbb{N}}$. The differentials $d_r$ are all of bi-degree $(r, 1-r)$ and we have that for all $p, q, r$
> $E_{r+1}^{p,q} \cong H^{p,q}(E_r, d_r)$
> We call the spectral sequence a _first quadrant_ spectral sequence if for all $r$ and $p, q < 0$ we have that $E_r^{p, q} = 0$

These definitions lay the groundwork for this complex tool. To understand what kind of computation spectral sequences simplify, we consider a filtered and graded $R$-Module such that the filtration is bounded below. This means that we consider a Module $H^{\ast}$ such that there exists
$H^{\ast} = F_0 H^{\ast} \supset F_1 H^{\ast} \supset \ldots \supset F_n H^{\ast} \supset \ldots \supset \set{0}$
where every $F_i H^\ast$ is a submodule. Given this filtration, a good approximation for the graded Module $H^{\ast}$ is given by the associated graded module
$gr_F(H^{\ast}) = \bigoplus_{p \in \mathbb{N}_0} gr_F(H^{\ast})^p = \bigoplus_{p \in \mathbb{N}_0} \frac{F_p H^{\ast}}{F_{p+1} H^{\ast}}$
Now to bring spectral sequences into this construction we have to notice that the associated graded module is bi-graded in the following sense. First define
$F_p H^q := F_p H^{\ast} \cap H^q$
Now we can see that a bi-gradation can be imposed on $gr_F(H^{\ast})$ by noting that
$gr_F(H^{\ast})^{p, q} = \frac{F_p H^{p+q}}{F_{p+1} H^{p+q}}$
We can then easily recover our original gradation of $gr_F(H^{\ast})$ by summing in the following way:
$gr_F(H^{\ast})^k = \bigoplus_{p+q = k} \frac{F_p H^{p+q}}{F_{p+1} H^{p+q}}$
With this procedure, we can now explicitly state what we want a spectral sequence converging to something to mean:

> [!definition|\*] Collapse and Convergence of Spectral Sequences
> We say a spectral sequence $\set{E_r, d_r}_{r \in \mathbb{N}}$ converges to a filtered $R$-Module $H^{\ast}$ (denoted by $E_r \implies H^{\ast}$ ) if there exists $N \in \mathbb{N}$ such that $\forall k \geq N: E_k = E_N$ and
> $E_N^{p, q} \cong gr_F(H^{\ast})^{p,q}$
> We will then also say that _the spectral sequence collapses at $N$_ and denote $E_{\infty} = E_N$[^1].

Our goal in calculating spectral sequences can now be viewed as starting with some data defined in a page and the differentials and through computable steps, possibly collapsing these sequences such that we can retrieve the structure of the associated graded module of some graded $R$-Module we are interested in.

### The specilization for De Rahm Cohomology

All this simplifies a lot in our concrete case of calculating [[De Rahm Cohomology|de Rahm cohomology]], since we want to approximate $H_\Omega^{\ast}$, which has a natural gradation $H_\Omega^{\ast} = \bigoplus_{k \in \mathbb{N}} H^k_\Omega$ giving rise to a filtration in the following sense
$F_p H_\Omega^{\ast} = \bigoplus_{k \geq p} H^k_\Omega$
Using a spectral sequence to approximate the cohomology group also becomes more exact in our case, since $H_\Omega^{\ast}$ is a finite dimensional Vector Space and the associated graded vector space $gr(H_\Omega^{\ast})$ has the same dimension as $H_\Omega^{\ast}$, meaning
$H_\Omega^{\ast} \cong gr(H_\Omega^{\ast})$
This all is to say that in the case of calculating de Rahm Cohomology using spectral sequences we can say that if a given sequence $\set{E_r, d_r}_{r \in \mathbb{N}}$ converges to $H_\Omega^{\ast}$ we can explicitly calculate
$H_\Omega^{k} = \bigoplus_{p + q = k} E_\infty^{p,q}$
With this structure, we can define a multitude of sequences, which use data about an object to more easily calculate its homology or cohomology groups.

### Serre Spectral Sequence on De Rahm Cohomology

If we want to use additional structure of a manifold to calculate the de Rahm Cohomology we have to look no further than Serre-Spectral sequences. These use a [[Fibre Bundles|fibre bundle]] structure to calculate the cohomology of a manifold in terms of the fibres and the base spaces.

> [!theorem|\*] Simplified Serre Spectral Sequence
> Given a fibre bundle $\pi: E \to M$ with fibre $F$ over a simply connected[^4] manifold $M$ such that for all $q \in \N: H^q(F)$ is finite dimensional, there is a spectral sequence $\set{E_r, d_r}_{r \in \mathbb{N}}$ with
>
> $$$E_2^{p,
> q} = H^p(M) \otimes H^q(F)$$
> $$$

> [!remark|\*]
> A big part on focusing on a cohomological spectral sequence is given by the natural multiplicative structure on cohomology groups described. This multiplicative structure is defined on spectral sequences specifically in Chapter 5 of \[@hatcher\_spectral\_sequences]. We will simply need the properties that
>
> 1. A product can be constructed on $E_2$ which is induced by the product on the cohomology groups and maps $E_2^{p,q} \times E_2^{s, t} \to E_2^{p + s, q + t}$
> 2. The differential interacts with this product by a Leibniz property, namely: $d_r^{p,q}(\alpha \cdot \beta) = d_r(\alpha) \beta + (-1)^{p+q} \alpha d_r(\beta)$
> 3. This product coincides with the product on $E_\infty$ and also with the product on the cohomology we are converging to.
>
> In this sense, we can use the product structure of [[De Rahm Cohomology|de Rahm cohomology groups]] when analysing differentials in Serre spectral sequences.
