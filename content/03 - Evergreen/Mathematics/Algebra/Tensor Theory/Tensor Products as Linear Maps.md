---
publish: true
created: 2026-02-12T12:57:57.591+01:00
modified: 2026-06-10T19:14:50.308+02:00
tags:
  - thoughts
---

A useful application for tensors is that the space of tensors naturally has as much information as a linear map. In this way we can think of $A^{*} \otimes B \in \phi \otimes b$
as defining a map on $A$ by simply saying that evaluating $\phi$ at a point of $A$ gives us a [[Rings|Ring]] element and we can use this to scale $b$ giving us a vector. Thus we get
$f: A \to B, f(a) = \phi(a) b$
Informationally speaking this is useful, as the tensors seem to encode everything in a compact representation.

> [!theorem|\*] Hom sets of Modules Correspond
> Let $A, B, C$ be $R$-modules. Then
>
> $$\begin{align*}
> $$

\mathrm{BiLin}_{R}(A \times B, C) &\cong  \mathrm{Hom}_{R}(B, \mathrm{Hom}_{R}(A, C)) \\
&\cong\mathrm{Hom}_{R}(A, \mathrm{Hom}_{R}(B, C)) \\
&\cong \mathrm{Hom}_{R}(A \otimes\_{R} B, C)
\end{align\*}\$\$

> as an $R$-Module (both naturally have the $R$-Module structure)

`\begin{proof}`
Let us first construct the first isomorphism explicitly. For any $f: A \times B \to C$ bilinear and $b \in B$ then define
$f_{b}: A \to C, \quad f_{b}(a) = f(a, b)$
and then a general
$F: B \to \mathrm{Hom}_{R}(A, C), \quad b \mapsto f_{b}$
which must be a linear map by construction.
Conversely consider for any $F \in \mathrm{Hom}_{R}(B, \mathrm{Hom}_{R}(A, C))$ define
$f: (a, b) \mapsto F(b)(a)$
which is also a lienar map. We can simply see that these two assignments are mutually inverse.

The second isomorphism is simply done by interchanging $A$ and $B$ in the argument which can always be done.

The third isomorphism is essentially the universal property of the tensor product explicitly. Given some bilinear $f: A \times B \to C$ gives a unique linear map $F: A \otimes_{R} B \to C$. This means this is an injective map due to uniqueness. Surjectivity is given by the fact that for any linear map $F$ we can define a bilinear map$f$ by
$f(a, b) = F(a \otimes b)$`\end{proof}`

> [!corollary|\*] Interpretation for the Dual of the Tensor Product
> $\mathrm{Hom}_{R}(A, B^{*}) \cong (A \otimes_{R} B)^{*} \cong \mathrm{Hom}_{R}(B, A^{*})$

`\begin{proof}`
simply use $C = R$ in the previous theorem
`\end{proof}`

## Generalisation to Higher Order Tensors

When considering Higher Order tensors with this we quickly into concatenated objects which are homomorphisms of duals or double duals. We want to use a fact from the linear case, namely that the double dual is in the nicest case of a finitely generated free module very much isomorphic to the space itsself. Dualizing is in this world is simply another perspective. We can think of any vector or element of a module as either being an intrinsic object or as a place where we evaluate a dual map, depending on what is more useful in the given situation.

> [!lemma|\*] Evaluation Map and Double Dual
> If $A$ is a finitely generated free $R$-Modules, then $A^{*} \cong A \cong A^{**}$ and the **evaluation map** given by
> $\eta: A \to A^{**}, \quad \eta(a)(\phi) = \phi(a)$
> is an isomorphism

> [!remark|\*]
>
> - If $V$ is an infinite dim. vector space then $\dim(V^{*})> \dim(V)$.
> - If the evaluation map is an isomorphism we in general call the module reflexive.
> - This relates to Riesz representation.

`\begin{proof}`
Let $a_{1}, \ldots, a_{n}$ be a basis of $A$, define
$a_{i}^{*}\left( \sum\limits_{i} x_{i} a_{i} \right) = x_{i}$
then this $a_{i}^{*} \in A^{*}$ is one of the dual basis vectors since for any $f \in A^{*}$ we have
$f(x) = \sum\limits_{j} x_{j} f(a_{j}) = \sum\limits_{j} a_{j}^{*}(x) f(a_{j})$
and they are linearly independent since
$\sum\limits_{j} \lambda_{j} a_{j}^{*} = 0 \implies \lambda_{i} = \lambda_{i} a_{i}^{*}(a_{i}) = \sum\limits_{j} \lambda_{j} a_{i}^{*}(a_{j}) = 0$
We can thus state that $a_{i}^{*}$ are the natural dual basis of $A^{*}$ with the property that
$a_{i}^{*}(a_{j}) = \delta_{ij}$

Now consider the evaluation map and set
$\eta(a_{i})(a_{j}^{*}) = a_{j}^{*}(a_{i}) = \delta_{ij}$
meaning that $\set{\eta(a_{i})}$ is a dual basis of $\set{a_{i}^{*}}$ and is a basis of $A^{**}$ which gives us an isomorphism
`\end{proof}`

Using this we now consider the Trace as a more general object which is a map
$\mathrm{End}_{R}(A) \to A$
which will allow us to calculate duals of Homomorphisms.

> [!definition|\*] Trace
> For any $\Gamma \in \mathrm{End}_{R}(A)$ on a free finite-dim $R$-module $A$ the **trace** is
> $\tr(\Gamma) := \sum\limits_{i} a_{i}^{*}(\Gamma(a_{i}))$
> which is independent of the choice of the basis.

`\begin{proof}`
Let $a_{i}$ be a basis with its dual and $b_{i}$ be another basis with its dual basis. We can the express
$a_{i} = \sum\limits_{j} b_{j}^{*}(a_{i}) b_{j}$
and for the dual basis aswell
$a_{i}^{*} = \sum\limits_{j} a_{i}^{*}(b_{j}) b_{j}^{*}$
then the trace formula reads
$\tr(\Gamma) = \sum\limits_{ijk} a_{i}^{*}(b_{k}) b_{k}^{*} \circ \Gamma( b_{j} b_{j}^{*}(a_{i})) = \sum\limits_{jk} \sum\limits_{i} b_{j}^{*}(a_{i}) a_{i}^{*}(b_{k}) b_{k}^{*}(T(b_{j}))$
then we can see that $\sum\limits_{i}b_{j}^{*}(a_{i}) a_{i}^{*} = b_{j}^{*}$ and thus
$\tr(\Gamma) = \sum\limits_{jk} b_{j}^{*}(b_{k}) b^{*}_{k}(T(b_{j})) = b^{*}_{k}(T(b_{j}))$`\end{proof}`

> [!remark|\*]
> With the same independence arguments we can also consider the object
> $\sum\limits_{i} a_{i}^{*} \otimes a_{i} \in A^{*} \otimes_{R} A$
> is also independent of the choice of $a_{i}^{*}(a_{j}) = \delta_{ij}$.

> [!corollary|\*] Dual of Linear Maps
> Let $A, B$ be finitely generated, free $R$-Modules, then
> $\mathrm{Hom}_{R}(A, B)^{*} \cong \mathrm{Hom}_{R}(B, A)$
> with the isomorphism
> $\mathrm{Hom_{R}}(B, A) \ni \phi \mapsto \left(\mathrm{Hom}_{R}(A, B) \ni f \mapsto \tr(\phi \circ f)\right)$

`\begin{proof}`
Proof idea - by assumption of finiteness we can represent the linear maps in term of the basis in a Matrix. In this context this statement is easy though since its a statment of matrices where the dual corresponds to transposing.
`\end{proof}`

## Correspondence of Linear Maps to Tensors

> [!theorem|\*] Tensor Products Correspond to Linear Maps
> Consider the map
> $A^{*} \otimes_{R} B \to \mathrm{Hom}_{R}(A, B), \quad \phi \otimes b \mapsto f_{\phi, b}$
> with
> $f_{\phi, b}(a) = \phi(a) b $
> This is a isomorphism if $A, B$ are free and finitely-dimensional.

`\begin{proof}`
We first specifiy a basis. We can see that for a finite bases of $A^{*}$ and $B$ namely $\set{a_{i}^{*}}$ and $\set{b_{i}}$ we get a basis of the tensor product
$\set{a_{i}^{*} \otimes b_{j}}$
We can then map
$a_{i}^{*} \otimes b_{j} \mapsto a_{i}^{*} b_{j}$
which is a bijection of basis and thus the map is an isomorphism
`\end{proof}`

> [!remark|\*] Thinking of Elementary Tensors as Maps
> The above theorem gives us an interesting view on general Tensors. Given two $R$-Modules $M, N$ we can think of an elementary tensor
> $m \otimes n$
> as corresponding to a map on $M^{*}$ giving us elements on $n$ by defining
> $\phi: M^{*} \to N, \quad t \mapsto t(m) n$
> This means when we talk about a tensor this is alwas something you can also evaluate in a sense.
> When doing this for general tensors we get
> $\omega = \sum\limits_{k=1}^{n} a_{i} \otimes b_{i} \in M \otimes_{R} N$
> corresponds to
> $\phi_{\omega}:M^{*} \to N, \quad t \mapsto \sum\limits_{k = 1}^{n} t(a_{i}) b_{i}$
> which means that $\im \phi_{\omega} \subset \span \set{b_{1}, \ldots, b_{n}}$ which will be useful when considering [[Tensor Ranks]] later on.

> [!remark|\*] Endomorphisms as Tensors
> For endomorphisms on a finitely generated free $R$-Module $A$, we have an isomorphism
> $\Omega: A^{*} \otimes_{R} A \to \mathrm{End}_{R}(A), \quad \Omega(\phi \otimes a)(a') = a \phi(a')$
> Its inverse if given by
> $\Omega^{-1}(T) = \sum\limits_{i} a_{i}^{*} \otimes T(a_{i})$
> independent of the dual basis pair $a_{i}^{*}(a_{j}) = \delta_{ij}$

## Tensor Products of Hom Sets - Canonical Tensored Functions

Given that Hom-Sets are also Modules naturally we can ask the question of what their tensor product looks like. This would tens to give us a new map that combines the inputs of the two original maps and maps into a combined output.

> [!theorem|\*] Tensor Products of Hom Sets
> $\mathrm{Hom}_{R}(A_{1}, B_{1}) \otimes \mathrm{Hom}_{R}(A_{2}, B_{2}) \to \mathrm{Hom}_{R}(A_{1} \otimes A_{2}, B_{1} \otimes B_{2})$
> with
> $f \otimes g \mapsto \left( a_{1} \otimes a_{2} \mapsto f(a_{1}) \otimes g(a_{2})\right)$
> is an isomorphism if the modules are free and finite dimensional. This gives rise to the now unambigous notation
> $(f \otimes g)(a, b) = f(a) \otimes g(b)$

`\begin{proof}`
The map defines a unique $R$-Module homomorphism. Consider the Basis  $a_{ij} \in A_{i}$ and $b_{ij \in B_{i}}$ then we can find a bijection of bases using this map

$$$
`\end{proof}`

> [!remark|*] Warning about injectivity
> We can easily show that if the originating maps are both surjective that the result is also surjective. This is not in general true for injectivity, for this see the example:
> 
> Let $R = \Z, B_{2} = \Z_{p^{2}}$ and $A_{1} = A_{2} = B_{1} = \Z_{p}$  then
> $$\begin{CD} A_{1}  @>id>> B_{1}\\ \\  A_{2} @> \phi: x \mapsto px>> B_{2}\end{CD}$$
> then $(id \otimes \phi): a \otimes b \mapsto a \otimes pb = pa \otimes b = 0$
> Thus the injectivity of the two maps from our theorem doesnt guarantee injectivity of the tensor products of maps. 

---
The tensor product of linear maps has a functorial property, given in the next property

> [!theorem|*]
> Given $R$-Linear maps on free, finite dimensional Modules
> $$\begin{CD} A_{1}  @>\phi_{1}>> B_{1} @>\psi_{1}>> C_{1}\\ \\  A_{1}  @>\phi_{2}>> B_{1} @>\psi_{2}>> C_{1}\end{CD}$$
> then 
> $$(\psi_{1} \otimes \psi_{2}) \circ (\phi_{1} \otimes \phi_{2}) = (\psi_{1} \circ \phi_{1}) \otimes (\psi_{2} \circ \phi_{2})$$

`\begin{proof}`
Simply check on elementary tensors

$$(\psi_{1} \otimes \psi_{2}) \circ (\phi_{1} \otimes \phi_{2})(a \otimes a') = (\psi_{1} \otimes \psi_{2})(\phi_{1}(a) \otimes \phi_{2}(a')) = \psi_{1}(\phi_{1}(a)) \otimes \psi_{2}(\phi_{2}(a'))$$

`\end{proof}`

We now want to work towards applications of all of this theory by considering the spectral properties of tensor products.

> [!corollary|*]
> Let $M, N$ be free $R$-Modules with $\dim_{R}(M) =: m, \dim_{R}(N) =: n$ and $\phi \in \mathrm{End}_{R}(M)$ and $\psi \in \mathrm{End}_{R}(N)$ then 
> 1. $\det(\phi \otimes \psi) = \det(\phi)^{n} \det(\psi)^{m}$
> 2. If we assume $R = \K$ a field then for eigenvalues $\mu, \lambda \in \K$ of $\phi$ and $\psi$ resp. we have that $\mu \otimes \lambda$ is an eigenvalue of $\phi \otimes \psi$ and $\mu + \lambda$ is eigenvalue of $\phi \otimes \mathrm{id}_{N} + \mathrm{id}_{M} \otimes \psi$ the kronecker sum

`\begin{proof}`
We can first rewrite
$$\phi \otimes \psi = (\phi \otimes \mathrm{id}_{N}) \circ (\mathrm{id}_{M} \otimes \psi)$$
then the determinant is multiplicative, so
$$\det( \phi \circ \psi) = \det(\phi \otimes \mathrm{id}_{N}) \cdot \det(\mathrm{id}_{M} \otimes \psi)$$
Where we know that the representing matrix is in every case simply a block matrix with only diagonal blocks consisting of the rep. matrix of the map $\phi$ or $\psi$. Thus the statement is obvious.


For the second statement consider that we have
$$\phi v = \lambda v \quad \psi w = \mu w$$
Then we can simply calculate
$$(\phi \otimes \psi) (v \otimes w) ...$$
`\end{proof}`


## Solving Equations Using These Isomorphism

We can now use these correspondences to also simplify equations which involve linear operators. For this let $M$ be an $R$-Module and $m_{i}$ be a basis with a corresponding dual basis. Then we know that $m_{i}^{*} \otimes m_{j}$ is a basis of $M^{*} \otimes M$ and the 



> [!theorem|*] Sylvester Equations
> There is an isomorphism $\mathrm{End}_{R}(\mathrm{End}_{R}(M)) \to \mathrm{End}_{R}(M^{*} \otimes_{R} M)$ given by 
> $$\Omega^{-1} \circ \left(x \mapsto AxB\right) \Omega = B^{*} \otimes A$$
> where $A, x, B \in\mathrm{End}_{R}(M)$ and $B^{*} \in \mathrm{End}_{R}(M^{*}), B^{*}(\phi) = \phi \circ B$. 

`\begin{proof}`
…
`\end{proof}`

Now consider specific types of equations, namely $T(X) = C$ or better yet $T(C) = \sum\limits_{i=1}^{n} A_{i} \circ X \circ B$ then by the previous theorem solving these equations amounts to solving 
$$\left(\sum\limits_{i} (B_{i}^{*} \otimes A_{i})\right) x = \Omega^{-1}(C)$$
A specific type of equation known for this is the Sylvester equation

> [!corollary|*]
> For $A, B, C \in \mathrm{End}_{R}(M)$ and $R = \K$ a field, the equation $$AX - XB = C$$
> is called the sylvester equation and has a solution $X \in \mathrm{End}_{\K}(M)$ if $A$ and $B$ do not share yn eigenvalues.

`\begin{proof}`
We know from linear algebra that
$$(\mathbb{1} \otimes A - B^{T} \otimes \mathbb{1}) x = c$$
only has solutions if the matrix has full rank. This is the case if $\spec (A) \cap \spec(B) = \emptyset$
`\end{proof}`
$$$
