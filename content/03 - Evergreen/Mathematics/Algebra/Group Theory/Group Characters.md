---
publish: true
aliases:
  - Dual Group
  - dual group
created: 2025-06-14T15:08:50.000+02:00
modified: 2026-06-10T19:14:49.910+02:00
tags:
  - thoughts
---

A useful perspective from linear algebra is considering the intuition behind the dual space $V^{*}$ of some given $\C$-Vector Space. One can think of this dual space as a collection of maps that measure how much a given vector points into a prespecified direction. This is the reason we can always write a canonical basis for the dual space (in finite dimensions) since checking if a vector is pointing in a direction $a e_{1} + b e_{2}$ amounts, via linearity, to checking how much our vector points in the direction of $e_{1}$ and $e_{2}$ and multiplying by some coefficients.

In a very different context, namely [[Groups|abelian groups]] we would like to construct a similar functional that takes group elements to quantify some property of them in a useful manner. We will borrow some ideas from the linear functionals on vectors spaces and note that they preserve the linear structure. The two candiates for a sort of dual group is the set of maps
$G \to (\C, +) \quad \text{or} \quad G \to (\C \setminus \set{0}, \cdot)$
This choice is now motivated slightly by the uses of this functional but we will pick the mapping into $\C^{\times} = \C \setminus \set{0}$ since for finite abelian groups we know that they are periodic. This is mainly due to the [[Structure Theorem for Finite Abelian Groups|structure theorem]] and the canonical way to see that a group like $\Z_{N}$ is periodic for every $N$. This periodicity is captured in the periodicity of the group $\C^{\times}$ since here multiplication is like a rotation.

With this choice out of the way we can now build up the theory of these “group functionals” that map $G \to \C^{\times}$. We call them characters of a group.

> [!definition] Characters
> Given an abelian group $G$. A group homomorphism $ \chi : G \to \C^{\times}$ is called a group character.
> The set $\hat G$ is simply the set of all characters of $G$. It turns out to be a group with respect to point-wise multiplication in $\C^{\times}$.
> The neutral element being the map $\mathbb{1}_{G}$ and the inverse is $\chi^{-1} = \overline{\chi}$
> This set with the group operation is called the **dual group** of $G$.

^8a3d23

The dual group captures a lot of the structure of our group, which is apparent by the following definition

> [!definition|\*] Pullback along Character
> Given a character $\chi: H \to \C^{\times}$ and a homomorphism $\phi: G \to H$ for two groups $G$ and $H$ we can pullback $\phi$ along $\chi$ via
> $h^{*}\chi:G \to \C^{\times}, \quad g \mapsto \chi \circ \phi(g)$

Due to the connection of general finite abelian groups to $\Z_{n} = \faktor{\Z}{N \Z}$ we will now find some properties by pulling back along the projection
$\pi: G \to \faktor{G}{H}$
For some discrete group $G$ we can then define an algebra homomorphism of [[Functions on Finite Sets| functions on finite sets]] by
$J: \C^{\faktor{G}{H}} \to \C^{G}, \quad f \mapsto f \circ \pi$
The image specifically is all $H$-Periodic functions since
$J \left(\C^{\faktor{G}{H}} \right) = \set{f \in \C^{G} \midline f(x + h) = f(x), \forall h \in H}$

> [!proposition|\*] Faktoring Characters through Quotient Groups
>
> 1. If $\tilde \chi \in \widehat {\faktor{G}{H}}$ then $\chi = \tilde \chi \circ p \in \hat G$
> 2. If $\chi \in \hat G$ then $\exists \tilde \chi \in \widehat{\faktor{G}{H}}:\chi = \tilde \chi \circ p \iff \at{\chi}{H} = 1$

`\begin{proof}`

1. Given $\tilde \chi \in \widehat{\faktor{G}{H}}$ we can trivially show that since $\tilde \chi$ and $p$ are both homeomorphisms that $\chi = \tilde \chi \circ p$ also is.
2. Let $\chi \in \hat G$

Let us first consider the left-to-right implication. We can easily see that if $\chi = \tilde \chi \circ p$ that for $h \in H$
$\chi(h) = \tilde \chi \circ p (h) = \tilde \chi([e]_{H}) = 1$

From right to left we can either use the universal property of the quotient group, but we can also explicitly define
$\tilde \chi: \faktor{G}{H} \to \C, \quad gH \mapsto\chi(g)$
then we can see that
$\chi = \tilde \chi \circ p$
`\end{proof}`

> [!remark|\*] Orthogonal Complements and Quotients
> Consider for a given subgroup $H \leq G$ we can define $H^{\perp} =  \set{\chi \in \hat G \midline \chi(x) = 1, \quad \forall x \in H}$ which we call the orthogonal complement. By property two this set corresponds in a bijective manner to the dual of the factor group if $H$ is a normal subgroup. This means we will without mentioning it consider any $\chi \in \widehat{G}$ with the property that $\at{\chi}{H} = 1$ to correspond to $\tilde \chi \in \widehat{\faktor{G}{H}}$

> [!proposition|\*] Orthogonality of Characters
> Given a finite abelian group $G$ know that
>
> - For $\chi, \eta \in \widehat G$ with $\chi \neq \eta$ we get $\innprod{\chi}{\eta} = \sum\limits_{x \in G} \chi(x) \overline{\eta(x)} = 0$
> - For $\chi \in \widehat{G}$ we get $\innprod{\chi}{\chi} = \sum\limits_{x \in G} |\chi(x)|^{2} = |G|$

^30577f

`\begin{proof}`
We dont prove this in general but only for the case of $\Z_{N}$.

> [!corollary|\*] Sum of Characters
> Given a finite abelian group $G$ we have that if $\chi \neq 1$
> $\sum\limits_{x \in G} \chi(x) = 0$

`\begin{proof}`
Consider
$\sum\limits_{x \in G} \chi(x) = \sum\limits_{x \in G} \chi(x) \cdot 1 = \innprod{\chi}{1} = 0$
`\end{proof}`

## Characters of finite abelian groups

In a lot of the cases we will want to consider $G$ tends to be a finite abelian group (especially in [[MA5911 Discrete Harmonic Analysis|discrete harmonic analysis]]). In this situation our group charcters simplify even more since for every $g \in G$ there exists $k \in \N$ such that $g^{k} = e$ gives us the following equation for some $\chi \in \hat G$
$\chi(g)^{k}=\chi(g^{k}) = \chi(e) = e$
Thus $\mathbb{T} \ni \chi(g) = e^{2 \pi i t}$
Since $g$ was chosen generally we know that characters on finite [[Groups|abelian groups]] all map into the torus group $\mathbb{T}$. Here we can get specific into what the characters measure if we interpret them as “functionals”. We map a group element to some part of the torus in such a way that products are respected. This amounts to different ways of winding group elements around the Torus and thus a specific character can be considered as measuring where the elements land under a specific winding. This abstract intuition becomes readily apparent when considering [[Discrete Fourier Transform| discrete fourier transformation]] which treat each winding as a possible “frequency mode” and for some $f$ the discrete fourier transform $\widehat{f}: \widehat{G} \to \C$ tells us given a frequency mode $\chi$ how much $f$ vibrates in this mode (very loosely speaking)

> [!corollary|\*] Mapping Inverses
> Given a finite Abelian Group $G$ and $\chi \in \widehat G$ then
> $\chi(-x) = \overline{\chi(x)}$

`\begin{proof}`
This is simply given by
$\chi(-x) = \chi(x)^{-1} = \frac{\overline{\chi(x)}}{|\chi(x)|} = \overline{\chi(x)}$
where since $\chi(x) \in \mathbb{T}$ we get $|\chi(x)| = 1$
`\end{proof}`

Now let $G = \Z$ and $H = N \Z$ and define $e_{t}(k) = e^{2 \pi i k t}$ then we have

> [!proposition|\*] Dual Group of $\Z$
> $\widehat \Z = \set{e_t \midline t \in [0, 1)}$

`\begin{proof}`
Clearly $e_{t} \in \hat \Z$ for every $t \in [0, 1)$
Let $\chi \in \widehat\Z$, then $\chi(k + l) = \chi(k) \chi(l)$
for all $k, l \in \Z$.
This equation determines that $\chi$ is completely determined by $\chi(1)$. Since $\Z$ is an abelian group we know that
$\chi(1) \in \mathbb{T} \implies \exists t \in [0, 1): \quad \chi(1) = e^{2 \pi i t}$
Then
$\chi(k) = \left( e^{2 \pi i t} \right)^{k} = e^{2 \pi i tk} = e_{t}$
`\end{proof}`

> [!corollary|\*] Dual Group of $\Z_N$
> $\hat \Z_{N} = \set{ \chi_{[z]} \midline [z] \in \Z_{N}}$ with $\chi_{[z]}([x]) = \omega_{N}^{xz}$ and $\omega_{N} = e^{2\pi i \frac{1}{N}}$

`\begin{proof}`
Considering the natural projection
$\pi: \Z \to \Z_{N}, \quad a \mapsto [a]_{N}$
we can explicitly describe any $\tilde\chi \in \widehat{\Z_{N}} = \widehat{\faktor{\Z}{N \Z}}$ by factoring $\pi$ though meaning
$\tilde\chi \circ \pi \in \widehat\Z \implies \chi \circ \pi(k) = e^{2 \pi i kt}$
We then know that
$1 = \tilde \chi \circ \pi(0) = \tilde \chi \circ \pi(N \cdot k) = e^{2 \pi Nk t} = \left( e^{2 \pi N t} \right)^{k}$
implying
$t = \frac{l}{N}, \quad l = 0, 1, \ldots, N-1$
This gives us explicit characters $\chi \in \widehat{\Z_{N}}$ with
$\chi \left([a]_{N} \right) =  e^{2 \pi i \frac{la}{N}}$
We can now find a bijection
$\alpha: \set{0, 1, \ldots, N-1} \to \widehat \Z_{N}, \quad l \mapsto \chi_{l}$
where $\chi_{l}\left([a]_{N} \right) =  e^{2 \pi i \frac{la}{N}}$
`\end{proof}`

This group is often also called the [[Groups#^47768b|discrete torus group $\mathbb{T}_{n}$]]. It might be useful to consider some simple examples of Duals explicitly, to understand what each character does:

> [!example|\*] Simple Examples of Dual Groups
> Let us consider specifically an abelian group of order $4$. By the [[Structure Theorem for Finite Abelian Groups|structure theorem]] we have two possibilites for $G$
>
> 1. $G \cong \Z_{4}$
> 2. $G \cong \Z_{2} \times \Z_{2}$
>
> ---
>
> In the first case of $G \cong \Z_{4}$ we have the elements
> $G = \set{0, 1, 2, 3}$
> We then know that for any $\chi \in \widehat{\Z_{4}}$ we always have  $\begin{align*} \chi(0) &= 1 \\
> \chi(2) &= \chi(1)^{2}\\
> \chi(3) &= \chi(1)^{3}\end{align*}$
> The only freedom we thus have is mapping $\chi(1)$ to some elements in $\set{1, i, -1, -i}$ which gives us four characteristic functions
> $\widehat{\Z_{4}}=\set{\chi_{z} \midline z = 1, i, -1, -i}$
> with $\chi_{z}(1) = z$
> **We can visualize this by…**
> -----------------------------
>
> In the second case of $G \cong \Z_{2} \times \Z_{2}$ we have elements
> $G = \set{(0, 0), (0, 1), (1, 0), (1, 1)}$
> We now know for any $\chi \in \widehat{\Z_{2} \times \Z_{2}}$  we have
>
> $$\begin{align*}\chi(0, 0) &=  1 \
> \chi(1, 1) &= \chi(0, 1) \cdot \chi(1, 0)\\
> $$

\chi(0, 1)^{2} &= 1\\
\chi(1, 0)^{2} &= 1\end{align\*}\$\$

> which means that $\chi(0, 1), \chi(1, 0) \in \set{-1, 1}$ which gives us four possibilities and
> $\widehat{\Z_{2} \times \Z_{2}} = \set{\chi_{(a,b)} \midline a, b = 0, 1}$
> with $\chi_{(a,b)}(0, 1) = b, \chi_{(a,b)}(1, 0) = a$

> [!proposition|\*] Orthogonality Relation of Characters
> Let $\chi, \eta \in \hat \Z_{N}$ then
> $\left<\chi, \eta \right> = \sum\limits_{x \in \Z_{N}} \chi(x) \overline{\eta(x)} = \begin{cases}N, \quad \chi = \eta \\ 0, \quad \chi \neq \eta\end{cases}$

`\begin{proof}`
Let $z, z' \in \Z_{N}$ with $\chi = \chi_{z}$ and $\eta = \chi_{z'}$ then
$\innprod{\chi_{z}}{\chi_{z'}} = \sum\limits_{x \in \Z_{N}} \chi_{z}(x) \overline{\chi_{z'}(x)} = \sum\limits_{x \in \Z_{N}} \omega_N^{x(z-z')} = \sum\limits_{x \in \Z_{N}} \left( \omega_N^{(z-z')} \right)^{x}$
Let
$w = \omega_{N}^{z-z'} = e^{2 \pi i \frac{z-z'}{N}}$
we then get
$w^{N} = e^{2 \pi i (z-z')} = 1$
with $w \neq 1$ for $z \neq z'$. We then get
$0 = w^{N} - 1 = (w-1)(1 + w + \ldots + w^{N-1})  = (w - 1) \sum\limits_{k=0}^{N-1} w^{k}$
hence $\sum\limits_{k=0}^{N-1} w^{k} = 0 \implies \innprod{\chi}{\eta} = 0$
If $\chi = \eta$ meaning $z = z'$ we get
$\omega_{N}^{z-z'} = 1 \implies \innprod{\chi}{\eta} = N$

`\end{proof}`

> [!remark|\*] Inner Product on Continous Groups
> A little remark about this is that given the torus group $\mathbb{T}$ we get that $\hat{\mathbb{T}} \cong \Z$
> then we can define
> $\innprod{\chi_{k}}{\chi_{l}} = \innprod{e^{2 \pi i k}}{e^{2 \pi i l}} = \int_{0}^{1} e^{2 \pi i (k -1)t} dt$
>
> We can also look at non-compact groups and note that
>
> $\chi_{\eta}(x) = e^{2 \pi i \eta x}$ we can also write that
> $\innprod{\chi_{\eta}}{\chi_{\eta'}} = \int_{\R} e^{2 \pi i (\eta - \eta')} dx$
> which makes no sense in the usual context, but you can make it similar to our structure by interpreting it with distributions

> [!proposition|\*] Dual Group of General Abelian Groups
> Let $N_{1}, \ldots, N_{L} \in \N$ and $G = \Z_{N_{1}} \times \cdots \times \Z_{N_{L}}$ then
> $\hat G = \set{\chi_{z} \midline z = (z_{1}, \ldots, z_{L}) \in G}$

`\begin{proof}`
Consider the explicit definition of
$\chi_{z}(x) = \exp \left({2 \pi i \sum\limits_{j=1}^{L} \frac{z_{j}x_{j}}{N_{j}}} \right)$
where $x = (x_{1}, \ldots, x_{L})$ and $z = (z_{1}, \ldots, z_{L})$
Then we can easily see that there are exactly the same amount of functions as we expect element in the dual group
`\end{proof}`

Now let $G$ be a finite abelian group then by the [[Structure Theorem for Finite Abelian Groups|structure theorem]] there are $N_{1}, \ldots, N_{L} \in \N$ such that
$G \cong \Z_{N_{1}} \times \cdots \times \Z_{N_{L}}$
Via an isomorphism $\phi$. Then we have
$\hat G = \set{\chi_{z} \circ \phi \midline z = (z_{1}, \ldots, z_{L}) \in G}$

> [!corollary|\*] The Dual has the same Magnitude as the Group
> If $G$ is a finite abelian group then $\hat G \cong G$. In particular $| \hat G | = |G|$

Observe now that the dual $\hat G$ of a (finite) abelian group is itsself an abelian group with respect to the complex multiplication.

An implicit question is now that the dual of $\hat G$ is. Take some $x \in G$ and define $\alpha_{x}: \hat G \to \mathbb{T}$ with $\alpha_{x} (\chi) = \chi(x)$. It is now easy to see that
$\alpha_{x}(\chi \cdot \eta) = (\chi \cdot \eta)(x) = \chi(x) \cdot \eta(x) = \alpha_{x} (\chi) \alpha_{x}(\eta)$ thus our constructed $\alpha_{x}$ is in the dual of $\hat G$. Further by corollary 2.24 we get that
$\left| \hat{\hat{G}} \right| = |\hat{G}| =|G|$
Now define the map $\Gamma: G \to \hat{\hat G}, \quad x \mapsto \alpha_{x}$. Then we can see that $\Gamma(x+y) = \alpha_{x+y} = \alpha_{x} \alpha_{y}$ meaning $\Gamma$ is a group homomorphism. Its kernel can be explicitly seen to be
$\ker \Gamma = \set{0}$
and since $|G| = \left| \hat{\hat G} \right|$ we know $\Gamma$ is surjective, meaning
$\hat{\hat G} \cong G$

Putting this into a more general Theorem which we will not prove which holds for locally compact abelian groups.

> [!theorem|2.25] Pontrijagin
> Let $G$ be a finite abelian group then
> $\hat{ \hat G} \cong G$

> [!remark]
> Note that for the mapping $G \to \hat G$ we need to introduce an enumeration. But mapping $G \to \hat{\hat G}$ does not need these.
