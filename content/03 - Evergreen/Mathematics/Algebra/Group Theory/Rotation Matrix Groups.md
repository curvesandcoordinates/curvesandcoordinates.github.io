---
publish: true
aliases:
  - Unitary Matrix Groups
  - Unitary Matrices
  - Unitary Matrix
created: 2025-07-16T22:58:45.838+02:00
modified: 2026-06-10T19:14:49.981+02:00
tags:
  - thoughts
---

The concept of an inner product space is ubiquitous across many disciplines in mathematics. Inner products measure the relation between different vectors in a complex or real vector space. This relation is often introduced and visualised as an angle, since when considering the more familiar spaces $\R^2$ and $\R^3$ as a Euclidean vector space, we find that the inner product expresses some angle between vectors. When considering other vector spaces, say for example spaces of probability distributions, the inner product can be generalised to the correlation between probability distributions. In the context of inner product spaces, it is natural to ask about maps which in some sense leave this inner product invariant. The set of linear maps between vectors spaces which leave the inner product invariant are called orthogonal or unitary (for $\R$ or $\C$ vector spaces, respectively) transformations. Using that for a hermitian inner product on a finite-dimensional complex vector space we have the identity: $\innprod{Mx}{y} = \innprod{x}{M^Hy}$ where $M$ is some linear transformation, and $M^H = \overline{M}^{\top}$ we can express the described inner product invariance as:
$\innprod{x}{y} = \innprod{Mx}{My} = \innprod{x}{M M^Hy} \implies M M^H = I$
this gives rise to the definitions for orthogonal and unitary [[Groups|groups]]:

> [!definition|\*] Orthogonal and Unitary Transformations
> For $n \in \N$ we define $\begin{aligned}
> O(n) &= \set{M \in GL(n, \R) \midline M M^{\top} = I} \\
> U(n) &= \set{M \in GL(n, \C) \midline M M^{H} = I}\end{aligned}$

> [!remark|\*] Alternative Orthogonality
> Keep in mind that the restriction $M M^H = I$ is satisfied if and only if all column or row vectors are orthogonal to one another, in the sense that the hermitian inner product of two different vectors is zero. This is also the origin of calling the matrices orthogonal.

Note that the given identity $M M^H = I$ gives us the property that $1 = \det(M M^H) = \det(M)^2$ meaning $|\det(M)| = 1$. This motivates the following connected definition of special orthogonal or unitary groups

> [!definition|\*] Special Orthogonal and Special Unitary Transformations
> For $n \in \N$ we define $\begin{aligned}
> SO(n) &= \set{M \in O(n)) \midline \det M = 1}\\
> SU(n) &= \set{M \in U(n) \midline \det M = 1}
> \end{aligned}$

## Explicit Elements of $O(2)$

Since orthogonal or unitary maps are characterised by leaving the respective inner product invariant, and we intuitively understand that in a Euclidean space inner products measure "angles between vectors" we can easily understand how elements of $O(2)$ act on the plane $\R^2$. An algebraic analysis leads us to the insight that

> [!proposition|\*] Explicit Parametrization for $O(2)$
> Any element $M = \begin{bmatrix}a & b \\ c & d\end{bmatrix} \in O(2)$ can be expressed with $\begin{bmatrix}\cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta)\end{bmatrix}$
> or $\begin{bmatrix}\cos(\theta) & \sin(\theta) \\ \sin(\theta) & -\cos(\theta)\end{bmatrix}$with $\theta \in [0, 2\pi)$

`\begin{proof}`
For a general element $M = \begin{bmatrix}a & b \\ c & d\end{bmatrix} \in O(2)$ we have the defining equation $I = M M^\top$
Applying the determinant to this gives us
$1 = \det(I) = \det(M M^\top) = \det(M)^2 \implies \det(M) = \pm 1$
Now, in general, we know that the restriction on our matrix amounts to stating $M^{-1} = M^\top$. Using simple linear algebra, this results in
$\frac{1}{\det(M)}\begin{bmatrix}d & -b \\ -c & a\end{bmatrix} = M^{-1} = M^\top = \begin{bmatrix}a & c \\ b & d\end{bmatrix}$
Working through the cases we can state that

1. For $\det(M) = 1$ we have $d = a$ and $b = -c$ meaning $M = \begin{bmatrix}a & -c \\ c & a\end{bmatrix}$

2. For $\det(M) = -1$ we have $d = -a$ and $b = c$ meaning $M = \begin{bmatrix}a & c \\ c & -a\end{bmatrix}$
   In each of these cases we get that
   $I = M M^\top = \begin{bmatrix}a^2 + c^2 & 0 \\ 0 & a^2 + c^2\end{bmatrix}$
   which implies that $a^2 + c^2 = 1$
   considering that this translates to the vector $\vecd{a}{c}$ being a unit vector, we can express it in polar coordinates making $\vecd{\cos(\theta)}{\sin(\theta)}$ for some $\theta \in [0, 2\pi)$ thus proving our claim.
   `\end{proof}`

Succinctly this proves that it is possible to show that all orthogonal transformations of $\R^2$ are simply rotations or rotations multiplied by a reflection $\begin{bmatrix} 1 & 0 \\ 0 & -1\end{bmatrix}$, since
$\begin{bmatrix}a & -c \\ c & a\end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & -1\end{bmatrix} \begin{bmatrix}a & c \\ c & -a\end{bmatrix}$
Via the multiplicativity of the determinant it is clear that $SO(2)$ represents the rotations without reflection.

### Circular Structure of $SO(2)$

This statement gives us a lot more information than we might at first realise. We have not only characterised a general element of $O(2)$ or $SO(2)$ but have also shown that these elements depend wholly on 1 parameter. We can also see that this parameter "loops" in the sense that if we construct a canonical map
$\gamma: \R \to SO(2), t \mapsto \begin{bmatrix}\cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta)\end{bmatrix}$
that $\gamma(\theta) = \gamma(\theta + 2\pi)$ due to the periodicity of $\sin$ and $\cos$. The periodicity of this map tells us that it can actually be defined on a quotient subspace of $\R$ given by
$\faktor{\R}{\sim} \cong [0, 2\pi)$
via the equivalence relation $a \sim b \iff \exists k \in \N: a = 2\pi k + b$
Another way to express this quotient space is actually given by the circle. In this sense we can say that
$SO(2) \cong S^{1}$

All this gives a geometric understanding that $SO(2)$ "looks like $S^1$", where we generally define $S^n := \set{\begin{pmatrix} x_1 \\ \ldots \\ x_{n+1} \end{pmatrix} \midline x_1 + \ldots + x_{n+1} = 1}$ This informal notion of similarity can be formalised by defining a topology on $SO(2)$ via the subspace topology and constructing a homeomorphism from $S^1$ to $SO(2)$.

---

# Topological Properties

For general $SO(n)$ or even, $SU(n)$ it is more difficult to find a space they are homeomorphic to, so finding properties like the "looping" property from above seems impossible at first. Abstracting the structure from this property results in a concept of de Rahm cohomology and Betti numbers, which in a sense "count holes of a space". We will see ways of calculating these cohomologies for $SU(n)$ without needing an explicit homeomorphism.

When generalising this idea to $U(n)$ or $SU(n)$ we lose a lot of information and intuition. The hermitian inner product doesn't just measure a visual "angle" but rather something more complex and algebraic. Nonetheless, unitary transformations of vector spaces play enormous roles in modern mathematical physics and quantum mechanics (See \[@fano\_2017] and \[@luc\_2020]). Understanding the structure of $U(n)$ or $SU(n)$ can then help to understand how different unitary transformations relate to one another and shed light on the structure they have.

## Unitary Matrix Groups

Focusing specifically on the matrix groups $U(n)$ and $SU(n)$ it is first useful to consider some easy examples. We can find homeomorphisms, just like we did for $SO(2)$ for both $U(1)$ and $SU(2)$.

> [!example|\*] $U(1) \cong S^{1}$
> Let us consider $U(1)$. We want to show that elements $z \in U(1)$ are made up of all rotations of the complex plane.
> For a general element, $z \in U(1)$ we have that $1 = z z^H = z \overline{z} = \norm{z}$
> which implies that $z = e^{i\theta}$ for $\theta \in [0, 2\pi)$
> Considering the hierarchy of inclusions of $U(1)$ we can see that $U(1) \subset GL(1, \C) \subset Mat(1, 1, \C) \cong \C$
> Through these inclusions we can naturally endow $U(1)$ with the subspace topology in $\C$ and see that our expression above gives us that $U(1) \cong S^1$
> since restricting the homeomorphism  $\phi: \C \to \R^2, z = a + ib \mapsto \vecd{a}{b}$ to $U(1)$ gives us that $\phi(U(1)) = \set{\vecd{a}{b} \midline 1 = a^2 + b^2} = S^1$

> [!example|\*] $SU(2) \cong S^{3}$
> We can also consider the group $SU(2)$ and show that it is homeomorphic to $S^3$. Here it becomes slightly more algebraic to prove a homeomorphism, since we don't have an intuition for unitary transformations of $\C^2$ and since $S^3 \subset \R^4$.
> Nonetheless, consider an element $M = \begin{bmatrix}a & b \\ c & d\end{bmatrix} \in SU(2)$ with $a, b, c ,d \in \C$. We can at first use a similar argument to that of $O(2)$ and note that
> $\begin{bmatrix}\overline{a} & \overline{c} \\ \overline{b} & \overline{d}\end{bmatrix} = M^H = M^{-1} = \begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$
> This gives us the equations $d = \overline{a}$ and $b = -\overline{c}$ meaning our matrix has the form
> $M = \begin{bmatrix}a & -\overline{c} \\ c & \overline{a}\end{bmatrix}$
> with $1 = \det(M) = a \overline{a} + c \overline{c} = \norm{a}^2 + \norm{c}^2$.
> Considering $SU(2) \subset Mat(2, \C) \cong \C^{4}$ and endowing $SU(2)$ with the subspace topology, we can express the above calculations in terms of a homeomorphism
> $SU(2) \cong \set{ \vecd{a}{b} \in \C^2 \midline \norm{a}^2 + \norm{b}^2 = 1} \subset \C^2$
> Via the intuitive homeomorphism $\phi: \R^4 \to \C^2, \begin{pmatrix} a \\ b \\ c \\ d \end{pmatrix} \mapsto \vecd{a + ib}{c + i}$ we can see that $SU(2) \cong \phi(S^3) \cong S^3$

In these observations we have seen what structure is inherent in the groups $U(1)$ and $SU(2)$ when considering their subspace topology under $Mat(n, \C)$. This means that we see these groups as both groups and topological spaces.

> [!remark|\*]
> Since we are always considering subspaces of, $Mat(n, \C) \cong \C^{n^2} \cong \R^{2 n^2}$ we can even say that $U(n)$ and $SU(n)$ are submanifolds of $\R^{2n^2}$. As submanifolds, they have dimensions
>
> $$$\begin{aligned}
>         \dim(U(n)) &= n^2 \\
>         \dim(SU(n)) &= n^{2} - 1
> \end{aligned}$$
> given by the Equivariant Rank Theorem. For more information, consider Examples 7.29 and 7.30 in [@lee_2012]. For our purposes, we only need to note their dimension and consider that this manifold structure gives us local homeomorphisms from an open set $U \subset U(n)$ or $V \subset SU(n)$ such that $$\begin{align} U \cong \R^{n^2} && V \cong \R^{n^{2-1}}\end{align}$$
> $$$

### $U(n)$ and $SU(n)$ as connected compact Lie groups

Using [[Lie Groups - Manifolds + Groups#^eb2744| Cartan’s Theorem]] we can easily show that $U(n)$ and $SU(n)$ are [[Lie Groups - Manifolds + Groups|Lie groups]]. This means that they have a natural topology we can impose on them and see them not only as groups but also as topological groups in general like we have seen in the previous examples

> [!corollary|\*] Unitary Groups are Lie Groups
> The matrix [[Groups|groups]] $U(n)$ and $SU(n)$ are [[Lie Groups - Manifolds + Groups|Lie Groups]]

Given that they live in a geometric / topologic setting now we can start stating topological properties of them. Most importantly we we should consider the spaces $U(n)$ and $SU(n)$ as submanifolds of $\C^{n^{2}}$ which means properties like compactness are easier to talk about since we have access to bolzano-weierstraß

> [!theorem|\*] Unitary Groups are compact
> $U(n), SU(n)$ are compact [[Lie Groups - Manifolds + Groups|Lie Groups]]

`\begin{proof}`
Since $U(n) \subset \C^{n \times n} \cong \C^{n^2}$ we know that $U(n)$ is compact if and only if it is closed and bounded. Due to $SU(n) \subset U(n)$ we know that
$U(n) \text{ bounded} \implies SU(n) \text{ bounded}$
So all that we need to show is that $U(n)$ is bounded. Let us denote
$\innprod{\cdot}{\cdot}:\C^{n} \times \C^{n}\to \C$
the Hermitian inner product on $\C^{n}$ and $\norm{ z } = \sqrt{\innprod{z}{z}}$ its induced norm. Now first observe that for general $M \in U(n)$ and $z \in \C^{n}$
$\norm{Mz}^{2} = \innprod{Mz}{Mz} = \innprod{z}{M^{H}Mz} = \innprod{z}{z} = \norm{z}^2$
now considering the operator norm on, $U(n)$ we can see that
$\forall M \in U(n): \norm{M} = \sup\limits_{\norm{x} = 1} \norm{Mx} = \sup\limits_{\norm{x} = 1} \norm{x} = 1$
We have thus found a norm such that $U(n)$ is bounded and, since for finite dimensions all norms are equivalent, have proven our claim.
`\end{proof}`

Now that we have established that $U(n)$ is a compact Lie group, we can look into a more geometric property.

> [!theorem|\*] The Space of Unitary Matrices is path-connected
> $U(n)$ is path-connected.

`\begin{proof}`
Consider that for any $M \in U(n)$ we can find $S \in GL(n, \C)$ such that:
$M = S \begin{bmatrix} e^{i \theta_{1}} & & \\ & \ddots & \\ & & e^{i \theta_{n}} \end{bmatrix} S^{-1}$
due to the Spectral Theorem. Then we can consider the path
$\gamma: [0, 1] \to GL(n, \C) \quad t \mapsto S \begin{bmatrix} e^{i t\theta_{1}} & & \\ & \ddots & \\ & & e^{i t\theta_{n}} \end{bmatrix} S^{-1}$
which describes a path from $Id_{n}$ to $M \in U(n)$. Given that for all $t\in [0,1]$ we have

$$$\begin{aligned}
    \gamma(t) \gamma(t)^H = S \begin{bmatrix} e^{i t\theta_{1}} & & \\ & \ddots & \\ & & e^{i t\theta_{n}}\end{bmatrix} S^{-1} \left(S^{-1} \right)^H \begin{bmatrix} \overline{e^{i t\theta_{1}}} & & \\ & \ddots & \\ & & \overline{e^{i t\theta_{n}}} \end{bmatrix} S^{H}= I
\end{aligned}$$
we know that $\gamma([0,1]) \subset U(n)$ and thus $U(n)$ is path-connected 
`\end{proof}`

> [!corollary|*] The Space of Special Unitary Matrices is path-connected
> $SU(n)$ is path-connected.

`\begin{proof}`
Using the same arguments as we did for $U(n)$ we merely have to note, that for $M \in SU(n)$ and $S \in GL(n, \C)$ such that:
$$M = S \begin{bmatrix} e^{i \theta_{1}} & & \\ & \ddots & \\ & & e^{i \theta_{n}} \end{bmatrix} S^{-1}$$
we gain the property that $1 = \det(M) = e^{i \theta_{1}} \cdot \ldots e^{i \theta_{n}} = e^{i (\theta_1 + \ldots + \theta_{n}}$. Using this we can see that the defined path $\gamma: [0, 1] \to GL(n, \C)$ has the property that for all $t \in [0,1]$
$$\det \left(\gamma(t)\right) = e^{it \theta_{1}} \cdot \ldots \cdot e^{it \theta_{n}} = e^{it (\theta_1 + \ldots + \theta_{n}} = \left(e^{i (\theta_1 + \ldots + \theta_{n})}\right)^t = 1^t = 1$$
`\end{proof}`

## Decomposing $U(n)$
When discussing the topological properties of $U(n)$ we can actually limit ourselfs to talking about $SU(n)$ due to a special decomposition that we will talk about now. Intuitively this is simlar to how we can describe $O(n)$ as a rotation from $SO(n)$ and a “reflection” from $O(1)$. In the complex case the words for this explanation need to change since multiplying by complex numbers allows for more than just a reflection but the point still stands in general. 

> [!theorem|2.2.1]
> For $n \in \N$ we have the following homeomorphism
> $$U(n) \cong SU(n) \times U(1)$$

`\begin{proof}`
Consider the map $F: SU(n) \times U(1) \to U(n)$ which maps
$$(A, z) \mapsto A \cdot \begin{bmatrix} z &&&\\&1 &&\\&&\ddots &\\&&& 1 \end{bmatrix}$$
We can then explicitly find an inverse map $G: U(n) \to SU(n) \times U(1)$
$$U \mapsto \left( A \cdot \begin{bmatrix} \frac{1}{\det(A)} &&&\\&1 &&\\&&\ddots &\\&&& 1 \end{bmatrix}, \det(A) \right)$$
This is well-defined since $\det(A) = e^{i \theta} \in U(1)$ and $\det \left(A \cdot \begin{bmatrix} \frac{1}{\det(A)} &&&\\&1 &&\\&&\ddots &\\&&& 1 \end{bmatrix} \right) = \det(A) \frac{1}{\det(A)} = 1$

It is clear that $F \circ G = Id_{U(n)}$ and $G \circ F = Id_{SU(n) \times U(1)}$ and that both maps are continuous by the continuity of matrix multiplication.
`\end{proof}`

This topological decomposition into a product is intuitively similar to the polar decomposition of $\C$, but one must keep in mind that the homeomorphism given above is not a group isomorphism. Since the topology of product spaces is only determined by its factors, and we have already calculated $U(1) \cong S^1$, we can see that the topology of $U(n)$ depends solely on that of $SU(n)$


## $SU(n)$ as a Fibre Bundle

An interesting and later useful question to ask about $SU(n)$ is what connection the members of this Family have between each other, meaning what is the connection between $SU(n-1)$ and $SU(n)$.

We can smoothly embed $SU(n-1)$ into $SU(n)$ via the following map
$$i: SU(n-1) \to SU(n), \quad M \mapsto \begin{bmatrix} 1 & 0 \\ 0 & M \end{bmatrix}$$
Due to this we will be vague with the notation and just consider $SU(n-1) \subset SU(n)$ by silently replacing it with its image under $i$.

To study this embedded subgroup of $SU(n)$ more, we want to observe how matrices in $SU(n)$ act on certain objects. Formally this is given by the concept of a Homogeneous Spacen ($G$-Space) of a [[Group Actions|group action]]. We aim to consider some $SU(n)$-Spaces, meaning we want to find a manifold such that matrix multiplication by any $M \in SU(n)$ is transitive. Towards this aim, we define the complex $n$-Sphere.

> [!definition|*] The Complex $n$-Sphere
> We call the space $\mathbb{S}^{n} = \set{z \in \C^{n+1} \,\middle|\, \norm{z} = 1 }$ the *complex $n$-Sphere*.

In the light of the intuition that the Matrices of $SU(n)$ apply some sort of complex rotation, we can consider how it acts on the complex $n$-Sphere.

> [!proposition|*] $SU(n)$ acts transively on $\mathbb{S}^{n-1}$
> $\mathbb{S}^{n-1}$ is a $SU(n)$-Space via a continuous action $\tau$ defined in the following way
> $$\tau: SU(n) \times \mathbb{S}^{n-1} \to \mathbb{S}^{n-1}, \quad (M, v) \mapsto Mv$$

`\begin{proof}`
The defined action is continuous since we can view it as a restriction of the usual matrix multiplication
$$\theta: GL(n, \C) \times \C \to \C$$
We give a general construction of two useful matrices $A$ and $B$ in the following way:

Given a vector $v \in \C^n$ we can construct an orthonormal Basis
$$B_x = \set{v, b_{x, 2}, b_{x, 3}, \ldots, b_{x, n}}$$
using the Gram Schmidt Procedure. We then consider the matrix $\tilde{M} = \begin{bmatrix}\vert & \vert & & \vert \\ v & b_{x, 2} & \ldots & b_{x, n}\\\vert & \vert & & \vert \end{bmatrix} \in U(n)$ and can now construct
$$M_v = \begin{bmatrix}\vert & \vert & & \vert \\ v & b_{x, 2} & \ldots & \frac{1}{\det(\tilde{M})}b_{x, n}\\ \vert & \vert & & \vert \end{bmatrix} \in SU(n)$$
which has the property that $M_v e_1 = v$ and $M_v \in SU(n)$

Let $x, y \in \mathbb{S}^{n-1}$ and we define $A := M_y$ and $B := (M_x)^{-1}$. Now we know $M = AB$ has the property that
$$M x = AB x = M_y(M_x)^{-1} x = M_y e_1 = y$$
and thus the action is transitive.
`\end{proof}`

Since the action we are interested in is transitive, we can easily see that $\forall x \in \mathbb{S}^{n-1}: G_{\mathbb{S}^{n-1}}(x) = \mathbb{S}^{n-1}$. The stabiliser of a point is a more interesting set by the following proposition.

> [!proposition|*] Stabiliser of our Action
> Let $\tau$ be the above defined action of $SU(n)$ onto $\mathbb{S}^{n-1}$ and $x \in \mathbb{S}^{n-1}$. Then
> $$\stab(x) \cong SU(n-1)$$

`\begin{proof}`
First it is useful to note that we can construct an explicit isomorphism from a Subgroup $G \subset SU(n)$ to its multiple by a constant Matrix $M \in SU(n)$ via 
$$\begin{aligned}
        \phi: G \to \set{gM \,\middle|\, g \in G}, \quad g \mapsto gM \\
        \phi^{-1}: \set{gM \,\middle|\, g \in G} \to G, \quad g \mapsto g M^{-1}
    
\end{aligned}$$
The same can be done for left multiplication
$$\begin{aligned}
        \rho: G \to \set{Mg \,\middle|\, g \in G}, \quad g \mapsto Mg \\
        \rho^{-1}: \set{Mg \,\middle|\, g \in G} \to G, \quad g \mapsto M^{-1} g
    
\end{aligned}$$
The continuity of matrix multiplication implies that these maps are homeomorphisms.

We can use this to analyse the set $\stab(x)$ for a given $x \in SU(n)$. Given the construction of the previous proof, we can construct a matrix $M_x \in SU(n)$ with $M_x e_1 = x$ for the canonical basis in $\C^n$. We can now see that 
$$\begin{aligned}
        \stab(x) &= \set{g \in SU(n) \,\middle|\, g \cdot x = x} \\
        &\cong \set{M_x^{-1} g M_x \in SU(n) \,\middle|\, g \cdot x = x} \\
        &\cong \set{M \in SU(n) \,\middle|\, Me_1 = e_1} \\
        &\cong \stab(e_1)
    
\end{aligned}$$ 
by the homeomorphisms above.

Now, having reduced the stabiliser of any point to the stabiliser of $e_1$, we use the properties of our matrix to express an element explicitly. Since the columns of $M \in \stab(e_1)$ have to be orthonormal, we know that for $n >i, j > 1$ any entries $M_{1, j} = 0$ and $M_{i, 1} = 0$ meaning
$$M = \begin{bmatrix} 1 & 0 \\ 0 & \tilde{M} \end{bmatrix}$$
with $\tilde{M}$ having orthonormal columns and
$$1 = \det(M) = 1 \cdot \det(\tilde{M}) = \det(\tilde{M}) \implies \tilde{M} \in SU(n-1)$$
which results in a nice equality using our embedding $i: SU(n-1) \to SU(n)$ of the form
$$\stab(x) \cong \stab(e_1) = \set{M \in SU(n) \,\middle|\, M = \begin{bmatrix} 1 & 0 \\ 0 & \tilde{M} \end{bmatrix}, \tilde{M} \in SU(n-1)} = i(SU(n-1)) \cong SU(n-1)$$
`\end{proof}`

We can now characterise $SU(n)$ in terms of its action on the complex $n$-Sphere using the following theorem out of the theory of homogeneous spaces found in Lee [@lee_2012]. The [[Group Actions#^414357|homogeneous space characterisation theorem]] states that for some $G$-space we can consider for any point $p \in M$ the stabiliser of this point and describe $\faktor{G}{\mathrm{Stab}(p)}$. This gives us the following nice corollary:
> [!corollary|2.3.7]
> For all points $x \in \mathbb{S}^{n-1}$ we have
> $$\faktor{SU(n)}{SU(n-1)} \cong \mathbb{S}^{n-1}$$

`\begin{proof}`
Given previous statements, we know that
$$\faktor{SU(n)}{SU(n-1)} \cong \faktor{SU(n)}{\stab(x)} \cong G_{\mathbb{S}^{n-1}}(x) = \mathbb{S}^{n-1}$$
`\end{proof}`

> [!remark|*]
> In the following uses of this result we will replace $\mathbb{S}^{n-1}$ with $S^{2n-1}$ the regular $(2n - 1)$-Sphere in $\R^{2n}$ since these are homeomorphic by restricting the map
> $$\phi: \C^n \to \R^{2n}, \quad \begin{pmatrix} z_1 \\ \vdots \\ z_n \end{pmatrix} \mapsto \begin{pmatrix} \RE(z_1) \\ \IM(z_1) \\ \vdots \\ \RE(z_n) \\ \IM(z_n)\end{pmatrix}$$

This will later turn out to be a useful result, allowing us to connect the geometry of $SU(n)$ with $SU(n-1)$. The structure can be formalised a little more by considering the definition of a [[Fibre Bundles|Fibre bundle]]. This can be shown using a well-known result for homogeneous [[Lie Groups - Manifolds + Groups|lie groups]], called the [[Lie Groups - Manifolds + Groups#^e13634]] (found in Proposition 13.8 of [@hall_2015]).

> [!corollary|*] $SU(n)$ is a $S^{2n -1}$ [[Fibre Bundles|Fibre bundle]]with $SU(n-1)$ as Fibers
> For any $x \in S^{2n-1}$ we have that $SU(n)$ is a [[Fibre Bundles|fibre bundle]] with Base $S^{2n-1}$ and fibre $F \cong SU(n-1)$ with projection map
> $$\pi: SU(n) \to \mathbb{S}^{n-1}, \quad A \mapsto Ax$$

`\begin{proof}`
This is a simple application of definitions and previous theorems. We know that the given map $\pi$ corresponds to the projection map, since for 
$$\begin{aligned}
        \alpha: &SU(n) \to \faktor{SU(U)}{SU(n-1)}\\
        \beta: &\faktor{SU(U)}{SU(n-1)} \to S^{2n-1}
    
\end{aligned}$$
we can see that $\pi = \beta \circ \alpha$ which is the projection of a quotient structure composed with a homeomorphism. This implies that $\pi$ is a fibre bundle projection.
`\end{proof}`

The conceptual use of this fibre bundle structure is the following. We know that the local triviality condition of a fibre bundle allows us to pick an open set $U \subset S^{2n-1}$ and gives us the condition that $p^{-1}(U) \cong U \times SU(n-1)$. Extending this, for the sake of approximation, to the entire space we get that locally
$$SU(n) \approx S^{2n-1} \times SU(n-1)$$
Continuing this rough sketch inductively we get that
$$SU(n) \approx S^{2n-1} \times SU(n-1) \approx S^{2n-1} \times S^{2n-2} \times SU(n-2) \approx S^{2n-1} \times \ldots S^5 \times S^3$$
meaning that informally we get a certain local similarity between $SU(n)$ and the product of odd-dimensional Spheres. This is formalised in the [[4. Spectral Sequences#^888ac9|language of cohomology]] and the fibre bundle structure shown here is the key player in that result.
$$$
