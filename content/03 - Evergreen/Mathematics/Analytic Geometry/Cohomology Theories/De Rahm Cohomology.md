---
publish: true
aliases:
  - de Rahm cohomology group
  - de Rahm cohomology groups
created: 2025-11-09T23:52:44.058+01:00
modified: 2026-06-10T19:14:50.558+02:00
tags:
  - thoughts
---

In our context of [[Differential Forms on Manifolds|differential forms]], it should be noted that we nearly have everything to define a differential complex. Namely, we have the graded $\R$-vector space $\Omega^\ast M$ and a differential $d_k: \Omega^k M \to \Omega^{k+1} M$. The property that $d_k \circ d_{k-1} = 0$ is not proven but easily calculable. This allows us to define the so-called de Rahm cohomology $H^\ast_\Omega(M)$.

> [!remark|\*]
> Some useful terminology often used is that $\omega \in \ker(d_k)$ is called a closed $k$-form and $\omega \in \im(d_{k-1})$ is called an exact $k$-form.

> [!definition|3.2.2]
> For a smooth manifold $M$ we define the de Rahm cohomology Group $H_{\Omega}^{\ast}(M)$ as a graded $\R$-Vector Space $H_{\Omega}^{*}(M) = \bigoplus_{k \in \N} H_{\Omega}^{k}$ with
> $H_{\Omega}^{k} := \faktor{\ker(d:\Omega^{k}M \to \Omega^{k+1}M)}{\im(d:\Omega^{k-1}M \to \Omega^{k}M)} = \frac{\text{Closed k-Forms}}{\text{Exact k-Forms}}$
> called the $k$-th de Rahm cohomology group. The dimension of $H^k_\Omega (M)$ is called the $k$-th Betti number of $M$
> $\beta_k (M) = \dim(H_{\Omega}^{k}(M) )$
>
> We will often suppress $\Omega$ and simply denote $H_{\Omega}^{\ast}(M) = H^{\ast}(M)$.

> [!remark|\*]
> We can extend the definition so that $k \in \mathbb{Z}$, but we will define $H^k (M) := \set{0}, \quad k < 0$
> and it is simple to see that for $k > \dim(M)$ that $\Omega^k M = \set{0}$ implies that
> $H^k(M) = \set{0}, \quad k > \dim (M)$

These definitions now allow us to determine de Rahm cohomology groups for various spaces. These are significant in the fields of differential geometry and algebraic topology, since they are invariants of a smooth manifold under homeomorphisms.

### Intuition Behind De Rahm Cohomology Dimension

De Rahm cohomology specifically is largely determined by its dimension as a real vector space, which is why we will focus on Betti numbers. They encode geometrical information, which can only on certain levels be visualized.
Consider for example the $0$-th Betti number for some manifold $M$. It describes the dimension of $H^0(M)$ which is simply

$$$\begin{aligned}
    H^0 (M) &= \faktor{\ker(d:\Omega^{0}M \to \Omega^{1}M)}{\im(d:\Omega^{-1}M \to \Omega^{0}M)} \\ 
    &= \faktor{\ker(d:C^{\infty}(M) \to \Omega^{1}M)}{0} \\
    &= \set{f \in C^{\infty}(M) \,\middle|\, df = 0}
\end{aligned}$$
meaning the set of locally constant functions. We can see that when expressing $M$ as a union of $n$ connected components, $M = \bigcup\limits_{i = 1}^n U_i$ gives us $H^0 (U_i) \cong \R$ and thus
$$H^0 (M) = \set{f \in C^{\infty}(M) \,\middle|\, df = 0} \cong \R^{n}$$
meaning $\beta_0$ is the number of connected components.

In this sense, Betti Numbers are a generalization of connectedness. The higher Betti numbers don't always have such a nice picture, but in the theory of de Rahm cohomology it can be shown that $\beta_1$ counts colloquially speaking the number of \"holes\" in a manifold and $\beta_2$ counts the number of inflatable compartments. We will later see a result that supports this image, but one must keep in mind that this is merely an approximation of what information the de Rahm cohomology groups contain.

## Algebraic Strucure of de Rahm Cohomology
We need to keep in mind that [[Differential Forms on Manifolds|differential forms]] come with the structure of an [[Algebras|exterior algebra]]. This extends to the level of de Rahm cohomology groups by the following statement

> [!proposition|*] Wedge Product on De Rahm Cohomology
> We can extend the wedge product $\wedge: \Omega^{k}M \times \Omega^{l}M \to \Omega^{k+l}M$ to the level of cohomology by applying it to representants
> $$H^{k}_{\Omega}(M) \times H^{l}_{\Omega}(M) \to H^{k+l}_{\Omega}(M), \quad[\omega] \wedge [\eta] \mapsto [\omega \wedge \eta]$$

`\begin{proof}`
Let us consider closed forms  $\omega + d\gamma_1 \in \Omega^k M$ and $\eta +d\gamma_2 \in \Omega^l M$ we have that 
$$\begin{aligned}
    (\omega + d\gamma_1) \wedge (\eta +d\gamma_2) &= \omega \wedge (\eta +d\gamma_2) + d\gamma_1 (\eta +d\gamma_2) \\
    &= \omega \wedge \eta + \omega \wedge d\gamma_2 + d\gamma_1 \wedge \eta + d\gamma_1 \wedge d\gamma_2\\
    &= \omega \wedge \eta + d\left( \gamma_1 \wedge \eta + (-1)^k \omega \wedge \gamma_2 + \gamma_1 \wedge d\gamma_2 \right)
\end{aligned}$$
which tells us that when taking the quotient by exact forms our wedge product respects this. Giving us an anti-commutative product on cohomology $[\omega] \wedge [\eta] := [\omega \wedge \eta]$ with $[\omega], [\eta] \in H^\ast(M)$.
`\end{proof}`

This gives us more compact ways of defining cohomology, since we have an algebra isomorphism between the entire cohomology and another object. See for example that
$$H^\ast(S^n) \cong \Lambda[x_n]$$
We will see later that this view on de Rahm cohomology has its uses, but also obfuscates the Betti numbers by making it harder for us to calculate the specific homogeneous elements for more generators.

## Tools for Computation of Cohomology Groups
The explicit calculation of de Rahm cohomology is an increasingly difficult task that requires multiple different tools and can even use other cohomology theories like [[Čech Cohomology]] to compute the de Rahm cohomology. 

A tool which halves the number of cohomology groups we have to compute is called Poincaré duality. It simply states that our Betti numbers are set up symmetrically. It mostly hinges on the compactness and orientability of a manifold. The concept of orientability can be simplified to finding a non-vanishing $n$-Form on our $n$-dimensional manifold. Visually, this non-vanishing Form is represented by imagining $n$-dimensional parallelepipeds in the tangent space of every point of $M$, which all have the same orientation.

> [!theorem|*] Poincaré Duality
> Let $M$ be a smooth compact $n$-dimensional manifold which is orientable in the sense that there exists $\omega \in \Omega^nM$ such that $\forall p \in M: \omega_p \neq 0$. Then we have an isomorphism
> $$H^{k}(M) \cong H^{n-k}(M)$$

The simplest example to start calculating cohomology groups for is $S^n$. To start, we will calculate the groups manually for $n = 1, 2, 3$ and then generalise. We will require Poincaré Duality in this computation, so for the sake of brevity, the orientability of $S^n$ is assumed.

> [!example|*] Cohomology of $S^1$
> Given the manifold $M = S^1$ we know that $\dim M = 1$. We also know that $M$ is connected, meaning that $H^0(M) = \R$ thus we already know that now by Poincaré duality we get that $H^0(S^1) \cong H^1 (S^1)$ and since all other cohomology groups must be $0$ due to dimension we get that
> $$H^k(S^1) = \begin{cases} \R \quad k = 1 \\ 0 \quad \text{otherwise}\end{cases}$$
> 
> This supports our intuition for the first de Rahm cohomology group given above, since a circle has exactly one \"hole\" which corresponds to $\beta_1(S^1) = \dim H^1 (S^1) = 1$.


> [!example|*] Cohomology of $S^2$ and $S^3$
> Given the manifold $M = S^2$ we know that $\dim(M) = 2$ thus we know that by Poincaré duality $H^0(S^2) \cong H^2 (S^2)$. Connectedness of $S^2$ gives us that $H^0( S^2) = \R \implies H^2( S^2) = \R$.
> 
> The more complex question now remains, what $H^1(S^2)$ is. We can answer this by considering a partition of $S^2$ into two overlapping open sets, namely $U_+ = S^2 \setminus \set{(0,0, -1)^\top}$ and $U_- = S^2 \setminus \set{(0,0, 1)^\top}$
> 
> ![[04 - Resources/Assets/Partition of a Sphere Cohomology MA6012.png| 700 | center]]
> 
> Now consider a closed differential form $\omega \in \Omega^1 S^2$. We know that the restrictions of this form onto the two open sets is a form on $U_+$ or $U_-$ in the way that 
> $$\begin{aligned}
> \omega_+ &:= \left. \omega \right|_{U_+} \in \Omega^1 U_+ \\
> \omega_- &:= \left. \omega \right|_{U_-} \in \Omega^1 U_-     
> \end{aligned}$$
> But since de Rahm cohomology is invariant under homeomorphisms and $U_+ \cong \R^2 \cong U_-$ by stereographic projection, we can see that
> $$H^1(U_+) \cong H^1(\R^2) = 0 = H^1(\R^2) \cong H^1(U_-)$$
> meaning all closed 1-forms are exact on $U_+$ or $U_-$, so
> $$\exists \eta_+ \in C^{\infty}(U_+), \eta_- \in C^{\infty}(U_-): d \eta_+ = \omega_+ \quad d \eta_- = \omega_-$$
> and on $U_+ \cap U_-$ we have that 
> $$\begin{aligned}
> \omega_+ &= \omega_- \\
> \iff d \eta_+ &= d \eta_- \\
> \iff d \eta_+ &- d \eta_- = 0\\
> \iff d( \eta_+ &- \eta_-) = 0    
> \end{aligned}$$
> Now since $U_+ \cap U_-$ is connected, we have that $H^0(U_+ \cap U_-) = \R$, meaning that since $\eta_+ - \eta_-$ is closed, its value is some $c \in \R$. Thus
> $$\eta_+ - \eta_- = c \implies \eta_+ = \eta_- + c$$
> Now all of this is to say that we have determined a connection between $\eta_+$ and $\eta_-$ on $U_+ \cap U_-$. We can thus simply define
> $$f: S^2 \to \R, \quad x \mapsto \begin{cases} \eta_+ \quad x \in U_+ \\ \eta_- + c \quad x \in U_- \end{cases}$$
> and see that this map is continuous and also that
> $$df = \begin{cases} d\eta_+ \quad x \in U_+ \\ d\eta_- \quad x \in U_- \end{cases} = \begin{cases} \omega_+ \quad x \in U_+ \\ \omega_- \quad x \in U_- \end{cases} = \omega$$
> meaning our closed form is automatically exact and thus $H^1(S^2) = 0$.
> 
> We can apply the same logic for the cohomology groups of $S^3$, since Poincaré duality here fills out the unknown group and we get that
> $$\begin{matrix}
> 	H^0(S^3) = \R && H^2(S^3) = 0 \\
> 	H^1(S^3) = 0 && H^3(S^3) = \R\\
> \\ \end{matrix}$$

The idea we used in these calculations can be applied to many more manifolds, especially if we can cover that manifold with open sets $U_i$ such that $M = \bigcup_i U_i$ in such a way that the intersections are \"simple\". The general form of this concept is a tool from [[Homology and Cohomology Theories|homological algebra]] called the \"Meyer-Vietoris Sequence\" It roughly relates the [[Homology and Cohomology Theories|cohomology groups]] of open sets covering a manifold to the cohomology of the entire manifold. Using this, a big and useful result is that we can generalise the argument from above to $S^n$

> [!theorem|*] Cohomology of $S^n$
> The de Rahm cohomology groups of the $n$-sphere $S^n$ are given by $$H^k(S^n) = \begin{cases}\R \quad k \in \set{0, n} \\ 0 \quad \text{otherwise}\end{cases}$$

^11b039

This result roughly supports the intuition we stated before for the different Betti numbers, since $\beta_2(S^2) = 1$ roughly corresponds to the fact that the 2-Sphere is inflatable.

> [!remark|*]
> We will not prove, but assume, another nice property from the theory of [[De Rahm Cohomology]]. Namely, this property describes that, per our intuition, $\R^n$ doesn't have any higher-dimensional holes and is connected. This means
> $$H^q (\R^n) = \begin{cases}\R \quad q = 0 \\ 0 \quad \text{otherwise}\end{cases}$$

Another useful tool for computation works via considering the cohomology of Products
> [!theorem|*] Künneth Formula
> Given two manifolds $M, N$ we have the following
> $$H^{k}_{\Omega}(M \times N) = \bigoplus_{p+q = k} H_{\Omega}^{p}(M) \otimes H_{\Omega}^{q}(M)$$

### Poincare Polynomial
A tool for simplifying the information contained in the de Rahm cohomology groups is by reducing our view to only the betti numbers. We can then consider them a sequence and define the generating function of this sequence:

> [!definition|*] Poincaré Polynomial
> Given a smooth manifold $M$ such that $\forall k: \dim H^k(M) < \infty$ we define its Poincaré Polynomial as
> $$P_M(t) = \sum\limits_i \dim(H^i (M)) t^i = \sum\limits_i \beta_i t^i$$

The uses of this compact representation are, that it lends us more structure. Specifically, we gain the possibility of multiplying polynomials. This is useful when calculating Betti numbers for product spaces $A \times B$. This expresses the Künneth Formula in a nicer way since then
$$\beta_k(A \times B) = \sum\limits_{p+q = k} \beta_p(A) \beta_q(B)$$
which gives us the following theorem
> [!theorem|*] Multiplicativity of Poincaré Polynomials
> Given two smooth manifolds $A, B$ with finite dimensional de Rahm cohomology groups, we can calculate
> $$P_{A \times B}(t) = P_A(t) P_B(t)$$

`\begin{proof}`
$$\begin{aligned}
        P_{A \times B}(t) &= \sum\limits_i \beta_i(A \times B) t^i \\
        &= \sum\limits_i \sum\limits_{p+q = i} \beta_p(A) \beta_q(B) t^i \\
        &= \left( \sum\limits_i \beta_p(A) t^i \right) \left( \sum\limits_i \beta_p(B) t^i \right) \\
        &= P_A (t) \cdot P_B(t)
\end{aligned}$$
`\end{proof}`
$$$
