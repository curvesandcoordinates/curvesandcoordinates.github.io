---
publish: true
created: 2026-02-12T20:41:01.340+01:00
modified: 2026-06-10T19:14:50.257+02:00
tags:
  - thoughts
---

Tensor algebras use the multiplcation used in [[Tensor Products|tensor products]] to define and [[Algebras|Algebra]] structure. Now since we know that any $R$-algebra has more structure that a simple module or a ring, but are still modules and ring we can extend our tensor definition to this:

> [!definition|\*] Tensor Algebra
> The **tensor algebra** of an $R$-module $M$ is the $R$-module
> $T(M) = \bigoplus_{n \in \mathbb{N}_{0}} M^{\otimes n} = R \oplus M \oplus ( M \otimes M) \oplus \ldots$
> together with the multiplication given by
> $T(M) \times T(M) \to T(M), \quad \left(\bigoplus_{k} a_{k}, \bigoplus_{l} b_{l}\right) \mapsto \bigoplus_{n} \sum\limits_{k + l = n} a_{k} \otimes b_{l}$

This resembles polynomials where the order of the tensor product is the order of the monomial.

> [!remark|\*]
>
> - We can regard elements of $T(M)$ as sequences $(a_{k})$ with finitely many non-zero entries $a_{k} \in M^{\otimes k}$
> - For any $k \in \N_{0}$ there is a canonical injection $\iota_{k} \in \mathrm{Hom}_{R}(M^{\otimes k}, T(M))$. This is sometimes ommited in notation, meaning for some $x \in M^{\otimes k}$ the expression $x \in T(M)$ is understood w.r.t this embedding.
> - $T(M)$ is an associative algebra (due to associativity of $\otimes$ when using the canonical isomorphism $M^{\otimes k} \otimes M^{\otimes l} \cong M^{\otimes(k+l)}$) with identity (which is $1 \in R = M^{\otimes 0} \subset T(M)$)
> - Note that $1$ and $M$ generate the algebra $T(M)$ by algebra operations.
> - With slight abuse of notation one writes $\otimes$ for the algebra multiplcation in the tensor algebra
> - $T(M)$ is a graded algebra, which means that $T = \sum\limits_{k} T^{k}$ is a sum of submodules $T^{k}$ (in this case $T^{k} \cong M^{\otimes k}$) and $T^{k} \cdot T^{l} \subset T^{k+l}$ by algebra multiplcation. Any $t \in T^{k}$ is called homogeneous.
> - If $M = \mathrm{span}_{R}(v_{1}, \ldots, v_{n})$ is free with dimension $n$ we regard $T(M)$ as the space $R[v_{1}, \ldots, v_{n}]$ of non-commutative polynomials in $n$ variables
> - $T(M)$ is also called the free associative unital algebra on $M$

This algebra is an interesting concept since it generalises the intuition behind polynomials but using tensor multiplication as what we care about.

> [!proposition|\*] Universal Propety of the Tensor Algebra
> For any associative unital $R$-Algebra $A$ and any $\phi \in \mathrm{Hom}_{R}(M, A)$ there is a unique $R$-Algebra homomorphism $\psi: T(M) \to A$ such that
> $\phi = \psi \circ \iota_{1} $

`\begin{proof}`
For $k \in \N$ consider the multilinear map $\phi_{k}: M^{k} \to A$ mapping
$\phi_{k}(m_{1}, \ldots, m_{k}) = \phi(m_{1}) \cdot \ldots \cdot \phi(m_{k})$
by the universal property of the tensor product there exists a unique $\psi_{k} \in \mathrm{Hom}_{R}(M^{\otimes k}, A)$ such that
$\phi_{k} = \psi_{k} \circ \tau_{k}$
where $\tau_{k}: M^{k} \to M^{\otimes k}$ is the natural map.
We can now define
$\psi: T(M) \to A, \quad \bigoplus_{k \geq 0} t_{k} \mapsto \sum\limits_{k \geq 0} \psi_{k}(t_{k})$
This map is the one we are looking for since it satisfies that for any $m \in M$

$$$\begin{align*}
\psi(\iota_{1}(m)) = \psi_{1}(m) = \phi(m) \\
\psi(\iota_{0}(1)) = \psi_{0}(1) = \mathbb{1}_{A} 
\end{align*}$$

Moreover for $a = \bigotimes_{i=1}^{k} a_{i} \in M^{\otimes k}, b = \bigotimes_{j=1}^{l} b_{j} \in M^{\otimes l}$ we get, by ommiting injections that
$$\psi(a \otimes b) = \psi_{k+l}( a \otimes b) =  \phi(a_{1}) \cdot \ldots \cdot \phi(a_{k}) \cdot \phi(b_{1}) \cdot \ldots \cdot \phi(b_{l}) = \psi_{k}(a) \cdot \psi_{l}(b) = \psi(a) \psi(b)$$
which means that $\psi$ is an algebra homomorphism.
To show uniqueness either it follows from the uniqueness of $\psi_{k}$ or we can assume there exists $\tilde{\psi}: T(M) \to A$ such that $\phi = \tilde{\psi} \circ \iota_{1}$. As $\tilde{\psi}$ is an algebra homomorphism, the property implies that
$$\tilde{\psi}(m_{1} \otimes \ldots \otimes m_{k}) = \tilde{\psi}(m_{1}) \cdot \ldots \cdot \tilde{\psi}(m_{k}) = \phi(m_{1}) \cdot \ldots \cdot \phi(m_{k}) = \psi(m_{1} \otimes \ldots \otimes m_{k})$$
Since these elements together with the unit span $T(M)$ by linearity this gives us $\psi = \tilde{\psi}$
`\end{proof}`

> [!corollary|*]
> For every $\phi \in \mathrm{Hom}_{R}(M, N)$ there exists a unique $R$-Algebra homomorphism
> $$T(\phi): T(M) \to T(N)$$
> with $\at{T(\phi)}{M} = \phi$

`\begin{proof}`
Since $1$ and $M$ generate $T(M)$ there can be at most one algebra hom of this form. Existence follows from the universal property applied to $\iota_{1} \circ \phi: M \to T(N)$
`\end{proof}`

> [!remark|*] Nice properties of the induced algebra homomorphism
> This map has other nice properties namely:
> - It respects the grading
> - It has functoriality: $T(\psi \circ \phi) = T(\psi) \circ T(\phi)$
> - Specifically we can express $T(\phi)(\iota_{k}(m_{1} \otimes \ldots \otimes m_{k})) = \iota_{k}(\phi(m_{1}) \otimes \ldots \otimes \phi(m_{k}))$
> 
> In the language of category theory we call this a covariant functor from $R$-Modules and $R$-linear maps to graded $R$-Algebras and Algebra Homomorphisms

## Children of the Tensor Algebra
We can see that this structure is very ripe to generate interesting algebras with content. Using identification we can develop a theory of [[Symmetric Tensor Algebras]] and also a mirror theory of [[Exterior Tensor Algebras]].
$$$
