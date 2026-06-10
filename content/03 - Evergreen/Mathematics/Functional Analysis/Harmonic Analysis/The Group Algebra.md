---
publish: true
created: 2025-06-17T14:47:32.576+02:00
modified: 2026-06-10T19:14:51.536+02:00
tags:
  - thoughts
---

The following construction will be done with specifically finite abelian [[Groups|groups]] in mind, but is generalizable to compact groups without much effort. We define this despite this theory being trivial in the finite abelian case, since this gives us insight into the general case for defining [[Discrete Fourier Transform| discrete fouriere transformations]].

We want to now consider the set of complex valued functions on our group $G$. We want to primarily work with the simplest functions so we will limit ourselves to bounded maps. Define the set
$L^{1}(G) = \set{f: G \to \C \midline \sum\limits_{g \in G} f(g) < \infty}$
Using an analogue of the $1$-Norm we define
$\norm{f} = \sum\limits_{g \in G} |f(g)|$
this normed space now is a [[Banach Algebras and C* Algebras#Banach Algebras|banach algebra]] using the [[Convolution on Finite Function Spaces|convolution]] as a product
$f \cdot g (x) = \sum\limits_{y \in G} f(x) g(x-y)$
We can now additionally define an operation of conjugation on Functions of this space

> [!definition|\*] Conjugate Functions
> Given a function $f \in \C^{G}$ we define the _conjugate function_ do be
> $f^{*}(x) = \overline{f(-x)}$

Applying this conjugation to function space gives us an involution, as is simple to see. This space is the main stage for defining [[Discrete Fourier Transform|the DFT]] since it is a [[Banach Algebras and C* Algebras#C*-Algebras|$*$-Algebra]] which has enough structure to allow this kind of analysis. We call the $*$-Algebra **$L^{1}(G)$ the group algebra** (for a proof see [[Banach Algebras and C* Algebras#^19cc48|here]])

> [!definition|\*] The Group Algebra
> The Tuple $(L^{1}(G), \norm{\cdot}, *)$ with
> $\norm{f} = \sum\limits_{g \in G} |f(g)|$
> and
> $f^{*}(x) = \overline{f(-x)}$
> is a $*$-algebra called the **group algebra** of $G$

## The Structure Group

Given the group algebra $L^{1}(G)$ we need to ask how we are to interpret functions of this space in order to see how fourier analysis can be introduced. One natural way to think about $f \in L^{1}(G)$ is to think of it as a signal. If we wanted to check if $f$ has a specific “frequency” $a$ we can see that this probing has a similar structure to a functional, namely: it takes in a function and gives us the length of the projection into some direction. Lossely speaking we know objects that do this already, namely if we note that $L^{1}(G)$ apart from everything else also is a finite dimensional $\C$-Vector Space. It must thus have a well-behaved space of linear functionals $L^{1}(G)'$.

Not every linear functional will do the job though. We need to bring in another intuition or aim of harmonic analysis. Namely we want to understand the convolution product on the space $L^{1}(G)$ better and we need to note that in the best case we would want to “diagonalize” this convolution when we probe a function. This means that we would like for some $\phi \in L^{1}(G)'$ which probes a specific frequency that
$\phi( f \ast g) = \phi(f) \cdot \phi(g)$
where $\ast$ denotes the convolution product. This property lays the groundwork for fourier analysis in general.

Now we have all the properties we want let us define the structure space

> [!definition|\*] Sturcture Space
> The **structure space** or **spectrum of the group algebra** is for some given finite abelian group $G$ the space
> $\Delta(L^{1}(G)) = \set{\phi \in L^{1}(G)' \midline \phi \neq 0, \phi(f * g) = \phi(f) \phi(g)}$

^f76246

This structure space should be thought of as the space of probes for functions $f \in L^{1}(G)$. This turns out to be the same as the [[Group Characters|dual group]] in the finite abelian case.

> [!proposition|\*] Non-Emptiness of the Spectrum
> If $G$ is a finite abelian group then $\Delta(L^{1}(G)) \neq \emptyset$. In particular we have that
> $\Delta(L^{1}(G)) \cong \hat G$

`\begin{proof}`
Let $\chi \in \hat G$ and consider
$\phi_{\chi}(f) = \sum\limits_{x\in G} f(x) \overline{\chi(x)}$ Then $\phi_{\chi} \in L^{1}(G)' \setminus \set{0}$ is non-trivial. Moreover
$\phi_{\chi}(f * g) = \sum\limits_{x \in G} (f*g)(x) \overline{\chi(x)} = \sum\limits_{x} \sum\limits_{y} f(y) g(x-y) \overline{\chi(x)} = \left( \sum\limits_{x} f(x) \overline{\chi(x)} \right) \cdot \left( \sum\limits_{y} g(y) \overline{\chi(y)} \right) = \phi_{\chi}(f) \phi_{\chi}(g)$

This shows that $\phi_{\chi} \in \Delta(L^{1}(G))$

Now consider that $L^{1}(G)$ has a natural basis for finite abelian $G$ namely
$B = \set{\delta_{g} \midline g \in G}$
since multiplicatively we have
$\delta_{g} \ast \delta_{h} (x) = \sum\limits_{y} \delta_{g}(y) \delta_{h}(x - y) = \delta_{g+h}$
Now for a given $\phi \in \Delta(L^{1}(G))$ we define the maps $\chi: G \to \C, g \mapsto \overline{\phi(\delta_{g})}$ then
$\chi(g+h) = \overline{\phi(\delta_{g+h})} = \overline{\phi(\delta_{g} \ast \delta_{h})} = \overline{\phi(\delta_{g})} \overline{\phi(\delta_{h})} = \chi(g) \chi(h)$
this means that $\chi \in \hat G$. Also note that
$\phi_{\chi}(f)= \sum\limits_{x \in G} f(x) \overline{\chi(x)} = \sum\limits_{x \in G} f(x) \phi(\delta_{x})$
But since $B$ is a basis of $L^{1}(G)$ this is exactly how $\phi$ acts on $f \in L^{1}(G)$ thus
$\phi_{\chi}= \phi$

This construction means we have a natural bijection
$\Phi: \hat G \to \Delta(L^{1}(G)), \quad \chi \mapsto \phi_{\chi}$
with inverse $\Phi^{-1}(\phi) = \chi$ as above.
`\end{proof}`

> [!remark|\*] Non-Triviality of the previous Statement
> The previous statemnt is non-trivial for non-abelian or compact groups. There we have to seperate the concept of the structure space a little bit more from the dual group.

## Gelfand Representations

We now have all components together to define the transformation of functions into some kind of “frequency space”. This happens by noting that every element of $\Delta(L^1(G))$ is a funtional that tests for a specific “frequency” (what every that means in the given context). Given a function $f \in L^{1}(G)$ we can now canonically define a transformed function $\hat f$ that takes in frequencies and tells us how much $f$ contains this frequency by evaluating $\hat f (\phi) = \phi(f)$ for $\phi \in \Delta(L^{1}(G))$. This transformation is generally called a **Gelfand transform**

> [!definition|\*] Gelfand Representation
> Given a finite abelian group $G$ we can define an algebra homomorphism called a **Gelfand transform**
> $\widehat\cdot: L^{1}(G) \to C(\Delta(L^{1}(G))), \quad f \mapsto \hat f$
> with $\hat f (\phi) = \phi(f)$
> we then call $\hat f$ the **Gelfand transformation** of $f$

> [!remark|\*] Identifications in the finite Abelian case
> We must note quickly that we will always be in the case of finite abelian groups, which gives us the advantage of having an isomorphism between $\Delta(L^{1}(G))$ and $\widehat G$. Thus we will often consider the gelfand transformation in the form
> $\hat f (\chi) = \phi_{\chi}(f)= \sum\limits_{g \in G} f(g) \overline{\chi(g)}$
> which simplifies the transform by simply mapping
> $L^{1}(G) \to C(\widehat G)$

The definition is justified by the following proposition

> [!proposition|\*] The Gelfand Transform is an algebra homomorphism
> The gelfand transform is an injective and continuous algebra $*$-homomorphism

^657129

`\begin{proof}`
It is trivial to check that the gelfand transform is an algebra homomorphism

$$$\begin{align*}
\widehat{(cf)} &= c \hat f\\
\widehat{(f + g)} &= \hat f + \hat g \\
\widehat{(f * g)} &=\hat f \hat g
\end{align*}$$
It becomes a $*$-homomorphism by behaving well with the conjugation defined in $L^{1}(G)$ since
$$\widehat{f^{*}}(\chi) = \sum\limits_{x \in G} f^{*}(x) \overline{\chi(x)} = \sum\limits_{x \in G} \overline{f(-x)} \overline{\chi(x)} = \sum\limits_{y \in G } \overline{f(y)} \overline{\chi(-y)} = \sum\limits_{y \in G} \overline{f(y)} \chi(y) = \overline{\sum\limits_{y \in G} f(y) \overline{\chi(y)}} = \overline{\widehat{f}}$$

Injectivity of the transform is given by checking what the kernel of $\widehat \cdot: L^{1}(G) \to C(\widehat G)$ which is governed by the equation
$$0 = \widehat f (\chi) = \sum\limits_{x \in G} f(x) \overline{\chi(x)}$$
Given the [[Group Characters#^30577f|orthogonality of characters]] we get that $f = 0$ thus the gelfand transform is injective.

Continuity is given by
$$\norm{f}_{\infty} := \max_{\phi_{\chi} \in \Delta(L^{1}(G))} |\hat f (\phi_{\chi})| \leq \sum\limits_{x \in G}|f(x)| |\overline{\chi(x)}| = \norm{f}_{1}< \infty$$
`\end{proof}`

Hence $\hat\cdot$ represents the algebra $L^{1}(G)$ on the algebra $C(\Delta(L^{1}(G)))$  it is called the Gelfand representation.




$$$
