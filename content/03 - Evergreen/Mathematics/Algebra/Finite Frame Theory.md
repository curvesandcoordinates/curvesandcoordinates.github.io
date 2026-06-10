---
publish: true
created: 2025-06-24T14:06:46.731+02:00
modified: 2026-06-10T19:14:49.903+02:00
tags:
  - thoughts
---

An important property of Vector Spaces is the reduction of problems to a set of non-unique basis vectors. We usually learn the definition of a basis but dont think much about how practical only $n$ vectors are in a $n$-dimensional vector space. When dealing with real data, we can even think of increasing the number of basis vectors and thus “overdescribing” our elements. This would allow us to lose information while still being able to extrapolate the entire vector space.

The theory of these structures that behave like overpopulated bases is called Frame theory. In the follolwing we always consider $(H, \innprod{\cdot}{\cdot})$ to be an $N$ dimensional Hilbert Space.

At first some basic definitions to know what we are talking about:

> [!definition|\*] Frame
> Given a $N$ dimensional Hilbert Space $(H, \innprod{\cdot}{\cdot})$ we call a collection of vectors $\set{\phi_{m}}_{m=1}^{M} \subset H$
> is called a frame for $H$ if there are constants $0 < A \leq B$ such that
> $A \norm{x}^{2} \leq \sum\limits_{m=1}^{M}|\innprod{x}{\phi_{m}}|^{2} \leq B \norm{x}^{2}$
> for all $x \in H$. We call $A, B$ frame coefficients.

^e4560e

Now this in and of itself merely tells us that we want our frame to give us a not too small but also not to big measurement of the norm of a vector. $A$ limits how much information we can lose and $B$ limits us not measuring too much. The quality of the frame is then determined by how close $A, B$ are to $1$. If they were $1$ we could say that our Frame exactly captures the length information of a vector.

These special conditions result in properties a frame can have. We name some as

> [!definition|\*] Classification of Frames
> Given a $N$ dimensional Hilbert Space $(H, \innprod{\cdot}{\cdot})$ and $\set{\phi_{m}}_{m=1}^{M} \subset H$ a Frame with frame coefficients $A, B > 0$. We then call the Frame:
>
> - _tight_ if $A = B$
> - \*perseval Frame \*if $A = B = 1$
> - \*exact \*if $\set{\phi_{m}}_{m \in I}$ is not a frame for every $I = \set{1, \ldots, M} \setminus \set{m_{0}}$ for $m_{0} \in [1, M]$
> - _equiangular_ if there exists $C > 0$ such that for all $m, m' \in [1, \ldots, M]$ with $m \neq m'$ we have $|\innprod{\phi_{m}}{\phi_{m'}}| = c$

Given this theory we can now consider the system $\Phi = \set{\phi}_{m=1}^{M}$ and treat it more like we usually treat bases. This allows us to prove some nice equivalences connecting the theory of frames to properties of $\Phi$ as a basis.

> [!proposition|\*] Connection Between Frames and Bases
> Let $H$ be a finite dimensional hilbert space and  $\Phi = \set{\phi_{m}}_{m=1}^{M} \subset H$ a system then the following implications hold:
>
> 1. $\Phi \text{ ONB} \implies \Phi \text{ is perseval Frame}$
> 2. $\Phi \text{ Frame} \iff \span \Phi = H$
> 3. $\Phi \text{ ONB} \iff \Phi \text{ perseval Frame}, \forall m \in [1, \ldots, M]: \norm{\phi_{m}} = 1$
> 4. $\Phi \text{ exact frame} \implies \Phi \text{ is a Basis for } H$

`\begin{proof}`
**1.** Obviously given by the Frame Innequality

**2. $\Longleftarrow$**
Assume $\span \Phi \neq H$ then there exists $x \in H \setminus \set{0}$ with
$\innprod{x}{\phi_{m}} = 0 \quad \forall m \in \set{1, \ldots, M}$
then
$A \norm{x}^{2} \leq \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2} = \implies \norm{x}^{2}=0 \implies x = 0$
which is a contradiction
**2. $\Longrightarrow$**
If $\Phi$ is not a frame then there is a sequence $(x_{n})$ with $\norm{x_{n}} = 1$ and
$\sum\limits_{m} |\innprod{x_{n}}{\phi_{m}}|^{2} < \frac{1}{n}$
then the sequence $(x_{n})$ is bounded so there exists a subsequence $(x_{n_{j}})$ with some $x \in H$ such that
$x_{n_{j}} \to x$
Hence for $j \to \infty$ we get $\innprod{x}{\phi_{m}} = 0$ for all $m$ but since $\norm{x} = 1$ the system $\Phi$ does not span $H$

**3. $\Longrightarrow$**
For $m_{0} \in \set{1, \ldots, M}$ then we have
$\norm{\phi_{m_{0}}}^{2} = \sum\limits_{m} |\innprod{\phi_{m_{0}}}{\phi_{m}}|^{2} = \norm{\phi_{m_{0}}}^{4} + \sum\limits_{m \neq m_{0}} |\innprod{\phi_{m_{0}}}{\phi_{m}}|^{2}$
Since $\norm{\phi_{m}} = 1$ for all $m$ we get
$0 = \sum\limits_{m \neq m_{0}} |\innprod{\phi_{m_{0}}}{\phi_{m}}|^{2} \implies \innprod{\phi_{m_{0}}}{\phi_{m}} = 0$
and since $m_{0}$ this means all $\phi_{m}$ are orthogonal. Since $\Phi$ is a frame it spans $H$ thus $\Phi$ is an ONB.
The other direction is trivial

**4.** Since $\Phi$ is a frame we have that $\span \Phi = H$. Now assume that $\Phi$ is linearly independent then there is a $m_{0}$ such that
$I = \set{1, \ldots, M} \setminus \set{m_{0}}$
we get
$\phi_{m_{0}} = \sum\limits_{i \in I} c_{i} \phi_{i}$
Hence $\set{\phi_{i}}_{i \in I}$ is a frame by **2** which contradicts the exactness.
`\end{proof}`

> [!remark|\*] Its easy to construct a Perseval Frame that isnt an ONB
> We have to note that by this proposition every orthonormal basis is a perseval Frame, but the converse is false. A frame can contain reduntant information, that is its whole point. This means we can consider two orthonormal Bases of $H$, say $\set{u_{m}}$ and $\set{v_{m}}$ then the system
> $\Phi = \set{\frac{1}{\sqrt{2}} u_{m}} \cup \set{\frac{1}{\sqrt{2}} v_{m}}$
> is a parseval Frame but not orthonormal basis.

We now consider some simple examples of frames to get a slight idea of what is meant

> [!example|\*]
>
> 1. The must reduntant type of frame is given by considering an ONB of $H$ say $\set{e_{m}}$ and defining the system to be given by $\Phi = (e_{1}, 0, e_{2}, 0, \ldots)$ this is infact a perseval frame.
> 2. In a similar vain let $\set{e_{m}}$ be a basis and consider the doubling system defined as $\Phi = (e_{1}, \frac{1}{\sqrt{2}} e_{2}, \frac{1}{\sqrt{2}}e_{2}, \frac{1}{\sqrt{3}} e_{3}, \frac{1}{\sqrt{3}} e_{3}, \frac{1}{\sqrt{3}} e_{3}, \ldots, \frac{1}{\sqrt{n}} e_{n}, \ldots, \frac{1}{\sqrt{n}} e_{n})$

## Analysis and Synthesis of Frames

We can note that a frame is a special case of a [[Analysis and Synthesis of System in Hilbertspaces#^fe935d|system]] of vectors, which comes with an Analysis and Synthesis, defined as:

$$$\begin{align*}
T: H \to \C^{M}, &\quad x \mapsto \begin{pmatrix}\innprod{x}{\phi_{1}} \\ \vdots \\ \innprod{x}{\phi_{M}}\end{pmatrix} \\
S: \C^{M} \to H, &\quad \begin{pmatrix}a_{1} \\ \vdots \\ a_{M}\end{pmatrix} \mapsto \sum\limits_{m=1}^{M} a_{i} \phi_{m}
\end{align*}$$
with the notable property that $S = T^{*}$. For more information on these consider [[Analysis and Synthesis of System in Hilbertspaces]]. Sometimes we write $T_{\Phi}$ and $S_{\Phi} = T^{*}_{\Phi}$ to specify which Frame the operator is connected with.

We can now find properties of these operators and their connection to Frames
> [!proposition|*] Properties of the Analysis Operator of a Frame
> Let $H$ be a finite dimensional hilbert space and  $\Phi = \set{\phi_{m}}_{m=1}^{M} \subset H$ a system with $T$ its [[Analysis and Synthesis of System in Hilbertspaces|analysis operator]] then the following implications hold:
> 
> For the [[Analysis and Synthesis of System in Hilbertspaces|analysis operator]] we have
> *1.* The norm of images of the analysis operator is given by $$\norm{Tx}^{2} = \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}$$
> *2.* $\Phi$ is a frame if and only if $T$ is injective
> 
> For its adjoint, the synthesis operator we have
> *3.* Given a canonical basis $\set{e_{m}}_{m=1}^{M}$ then for the orthogonal projection $P: \C^{M} \to \mathrm{Im}(T)$ we have that $$\phi_{m} = T^{*} e_{m} = T^{*} P e_{m}$$
> *4.* $\Phi$ is a Frame if and only if $T^{*}$ is surjective
> 
> In general we have the following relationship:
> *5.* Let $L: H \to H$ be a linear mapping then the analysis operator of $L \Phi$ is simply $T_{L \Phi} = T_{\Phi}\circ L^{*}$ In particular if $\Phi$ is a Frame of $H$ and $L$ is invertible then $L \Phi$ is a Frame for $H$

^478ca7

`\begin{proof}`
**For 1.** Simply consider the formula for $Tx$ which gives us for a given system $\Phi$
$$Tx = \begin{pmatrix}\innprod{x}{\phi_{1}} \\ \vdots \\ \innprod{x}{\phi_{M}}\end{pmatrix}$$

**For 2.** $\Longleftarrow$
Since we always work in finite dimensions and with finite systems we know that the operator $T$ must be bounded. This means
$$ \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2} = \norm{Tx}^{2} \leq M \norm{x}^{2}$$
The lower frame bound is obtained by considering the helper function $f: H \to \R, x \mapsto \norm{Tx}^{2}$. As $\ker T = \set{0}$ we know that $f$ is bounded below somehow. Consider the unit ball $B = \set{v \in H \midline \norm{v} = 1}$ then we can see that
$$\at{f}{B} \geq \lambda > 0$$
since $B$ is compact.
Now this means that we can write for any $x \in H$
$$\norm{Tx} = \norm{x} \norm{T\left( \frac{x}{\norm{x}} \right)} \geq \norm{x} \lambda$$
which gives us the lower bound

**For 2.** $\Longrightarrow$
Assume the system $\Phi$ is a Frame. Then we only need to note that the Frame innequality translates to
$$A \norm{x}^{2} \leq \norm{Tx}^{2} \leq B \norm{x}^{2}$$
For non-zero $x$ this means that since $\norm{x}>0$ that also $\norm{Tx} > 0$. For $x = 0$ we get $0 \leq \norm{Tx} \leq 0$.

**For 3.**
Note that for the canonical basis $\set{e_{m}}_{m=1}^{M}$ we can simply calculate that
$$T^{*} e_{m} = \phi_{m}$$
which proves one part of our statement. To see that the orthogonal projection leaves our Image space invariant we can more explicitly show that
$$(\im T)^{\perp} = \ker T^{*}$$
which we can show by considering some $y \in (\im T)^{\perp}$ and for any $x \in C^{M}$ we have
$$\innprod{T^{*} y}{x} = \innprod{y}{Tx} = 0 \implies T^{*}y = 0$$

This means that $T^{*} P e_{m} = T^{*}e_{m}$.

**For 4.**
To prove this we simply use the previous equality saying that
$$(\im T)^{\perp} = \ker T^{*}$$
Now we have the following equivalence
$$\ker T = 0 \iff \im T = \C^{M} \iff (\im T)^{\perp} = 0 \iff \ker T^{*} = 0$$
meaning that by **2** we have shown what we want.

**For 5.**
Given a linear operator $L: H \to H$ and a Frame $\Phi$ with [[Analysis and Synthesis of System in Hilbertspaces|analysis operator]] $T_{\phi}$ we then can see that the analysis operator of $T\Phi$ is given by
$$T_{T\Phi} x = \begin{pmatrix}\innprod{x}{L\phi_{1}} \\ \vdots \\ \innprod{x}{L\phi_{M}}\end{pmatrix} = \begin{pmatrix}\innprod{L^{*}x}{\phi_{1}} \\ \vdots \\ \innprod{L^{*}x}{\phi_{M}}\end{pmatrix} = (T_{\Phi} \circ L^{*}) (x)$$

`\end{proof}`

The adjoint can as usual be seen as the transpose of a matrix if we define an ONB of $H$. If $\set{e_{n}}_{n=1}^{N}$ is an ONB of $H$ then for any $c \in \C^{M}$ we can see that
$$T^{*} c = \sum\limits_{m} c_{m} \phi_{m} = \sum\limits_{m} c_{m} \sum\limits_{n} \phi_{m,n} e_{n}$$
We get that $T^{*}$ is given with respect to $\set{e_{n}}$ by the matrix
$$\begin{pmatrix}\mid & \mid & & \mid\\ \phi_{1} & \phi_{2}& \cdots& \phi_{m} \\ \mid & \mid & & \mid\end{pmatrix} \in \C^{N \times M}$$
---
Now we have two operators that move from our vector space $H$ to another space where our Frame is the basis. Also we can move from this “Frame Space” back to $H$ via the adjoint. What now seems natural is to construct an operator from $H$ to $H$ in which any vector simply matched to its local frame representation.

> [!definition|*] Frame Operator
> Let $\Phi = (\phi_{m})$ be a System in a finite dimensional hilbert space $H$ then
> $$S: H \to H, \quad Sx = T^{*}T x = \sum\limits_{m} \innprod{x}{\phi_{m}} \phi_{m}$$
> is called a **Frame operator**


Note that this operator does a couple things. Firstly it looks very similar to a basis representation. If $\Phi$ were an ONB then $S$ would simply be the identity, since we just map every vector to the verctor represented by its basis. This gives a first insight into what the frame operator does. Second, consider the siutation where we have an incomplete Frame. By that I mean a Frame that has less vectors than the dimension of $H$. In this situation our Frame operator projects any vector down into the span of $\Phi$ and if we have an overcrowded system, meaning there exist vectors that are in the span of the rest, then those are counted multiple times.

Our frame operator measure in this way, how much overcrowding or undercrowding we have in our Frame. Let us now prove some basic properties of this Operator.

> [!proposition|*] Simple Properties of Frame Operators
> 1. Let $\Phi = \set{\phi_{m}}$ be a system with frame operator $S$ then $$\innprod{Sx}{x} = \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}$$
> 2. If $\Phi = \set{\phi_{m}}$ is a Frame with bounds $0 < A \leq B$ then the frame operator $S$ is self-adjoint, positive and invertible with $$A I \leq S \leq B I$$
> 3. Let $\Phi = \set{\phi_{m}}$ is a Frame with operator $S_{\Phi}$ and let $L: H \to H$ be invertible linear mapping. Then $\set{L \phi_{m}} = L \Phi$ is a Frame for $H$ with frame operator $$S_{L \Phi} = LS_{\Phi} L^{*}$$

`\begin{proof}`
**For 1.**
Consider the definition of $S$ and calculate
 $$\innprod{Sx}{x} = \innprod{T^{*}T x}{x} = \innprod{Tx}{Tx} = \norm{Tx}^{2} = \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}$$

**For 2.**
Self-Adjointness and Positivity are clearly given by the fact that $S = T^{*} T$. Using the [[#^478ca7|previous proposition]] we can easily see invertibility, since $\Phi$ being a Frame gives us surjectivity and injectivity of the respective [[Analysis and Synthesis of System in Hilbertspaces|analysis operator]]. The Operator innequality simply has to be read as a statement on the diagonal entries of every of these matrices.

**For 3.**
Simply note that we know that the analysis operator of $L \Phi$ we have 
$$T_{L \Phi} = T_{\Phi} \circ L^{*}$$
We can then note that the corresponding Frame operator to be
$$S_{L\Phi} = T_{L\Phi}^{*} T_{L \Phi} = (T_{\Phi} L^{*})^{*} (T_{\Phi} L^{*}) = L T_{\Phi} T_{\Phi} L^{*} = L S_{\Phi} L^{*}$$
`\end{proof}`

A question that will now become tractable in this situation is to consider how we can reconstruct a vector $x$ given only the data relative to our frame $Tx$. Using the previous statement let us consider a Frame $\Phi = \set{\phi_{m}}_{m=1}^{M}$ for some $H$. We then know that the corresponding frame operator is invertible, meaning we can write for any $x \in H$
$$S S^{-1}x = x = S^{-1}S x$$
Explicitly this gives us the two equations
$$\begin{align*}
x &= S^{-1}Sx = S^{-1} \left( \sum\limits_{m} \innprod{x}{\phi_{m}} \phi_{m}\right) = \sum\limits_{m} \innprod{x}{\phi_{m}} S^{-1} \phi_{m} \\
x &= SS^{-1}x = S\left( \sum\limits_{m} \innprod{x}{S^{-1}\phi_{m}} \phi_{m}\right)
\end{align*}$$
This means we can reconstruct any vector by either changing our Frame by $S^{-1}$ and keeping the coefficients, or by changing the coefficients to be relative to $S^{-1}$ and keeping the Frame.

> [!proposition|*] Equivalence of Tight Frames
> Let $\Phi = \set{\phi_{m}}$ be a frame for $H$ with analysis operator $T$ and frame operator $S$. Then the following are equivalent
> 1. $\Phi$ is a tight Frame
> 2. $S = AI$
> 3. For every $x \in H$ we get that $x = A^{-1} \sum\limits_{m=1}^{M} \innprod{x}{\phi_{m}} \phi_{m}$
> 4. For every $x \in H$ we get $A \norm{x}^{2} = \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}$
> 5. $\frac{1}{\sqrt{A}} T$ is an isometry

`\begin{proof}`
**1 $\Rightarrow$ 2**
Given the innequality
$$AI \leq S \leq BI$$
and the fact that due to tightness $A = B$ we weg that
$$S = AI$$

**2 $\Rightarrow$ 3**
Simply use the reconstructive equalities using $S = AI \implies S^{-1} = A^{-1} I$ thus
$$x = \sum\limits_{m} \innprod{x}{\phi_{m}}A^{-1} \phi_{m} = A^{-1} \sum\limits_{m} \innprod{x}{\phi_{m}}\phi_{m}$$

**3 $\Rightarrow$ 4**
Simply take the Norm.

**4 $\Rightarrow$ 5**
Simply consider for any $x \in H$ we can calculate
$$\norm{\frac{1}{\sqrt{A}} T x} = \frac{1}{\sqrt{A}} \norm{Tx} = \frac{1}{\sqrt{A}} \sqrt{\sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}} = \frac{1}{\sqrt{A}} \sqrt{A \norm{x}^{2}} = \norm{x}$$
meaning that this operator is an isometry.

**5 $\Rightarrow$ 1**
Assume that $\frac{1}{\sqrt{A}} T$ is an isometry. We then know that this is equivalent to stating
$$\norm{Tx}^{2} = A \norm{x}^{2}$$
and since this is equivalent to stating
$$\sum\limits|\innprod{x}{\phi_{m}}|^{2} = A \norm{x}^{2}$$
we are done by dividing this equality up into two innequalities.
`\end{proof}`

## Spectral properties of the Frame Operator
Since the Frame Operator contains so much information about how much data our Frame encompasses it might seem natural to see what the spectral properties of this operator are.

For this we mainly tease out properties concerning the equation
$$Sv = \lambda v \implies \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2} = \innprod{Sv}{v} = \lambda \innprod{v}{v} = \lambda \norm{v}^{2}$$
which connects Eigenvector properties explicitly to the Frame bounds and Frame innequality


> [!proposition|*] The Eigenvalues give us Upper and Lower Frame Bounds
> Let $\Phi = \set{\phi_{m}}$ be a Frame for $H$ with frame operator $S$ and let $\spec(S) = \set{\lambda_{1}, \ldots, \lambda_{N}}$ with $0 < \lambda_{1} \leq \lambda_{2} \leq \ldots \leq \lambda_{N}$. Then $\lambda_{1}$ coincides with the optimal upper frame bound and $\lambda_{N}$ coincides with the optimal lover Frame bound.

`\begin{proof}`
For the sake of brevity we will only prove the lower bound, since the upper works in a parallel way.

Assume there exists an $A > 0$ such that $\lambda_{1} < A$ with the property that for any $x \in H$
$$A \norm{x}^{2} \leq \sum\limits_{m} |\innprod{x}{\phi_{m}}|^{2}$$
Note that we can write this in terms of the frame operator by stating
$$A \norm{x}^{2} \leq \innprod{Sx}{x}$$
Now consider the corresponding eigenvector to the eigenvalue $\lambda_{1}$, say $v_{1}$ which we can choose to be normed with $\norm{v_{1}} = 1$. This then gives us
$$A \leq \innprod{S v_{1}}{v_{1}} = \lambda_{1}\innprod{v_{1}}{v_{1}} = \lambda_{1}$$
which gives us a contradiction.
`\end{proof}`

Connected to the Eigenvalue properties we can also see how the eigenvectors work in the frame operator. In this context one discusses the energy in the direction of an eigenvector.

> [!proposition|*] Energy Equations for Eigenvectors
> Let $\Phi = \set{\phi_{m}}$ be a frame with operator $S$ and let $\set{v_{n}}$ be a system of orthonormal eigenvectors of $S$ with respect to eigenvalues $\lambda_{i}$ then
> $$\lambda_{j} = \sum\limits_{m} |\innprod{v_{j}}{\phi_{m}}|^{2}$$
> In particular 
> $$tr S = \sum\limits_{m} \norm{\phi_{m}}^{2}$$

`\begin{proof}`
For the explicit formula of the Eigenvalues we simply note that 
$$\lambda_{j} = \innprod{\lambda_{j} v_{j}}{v_{j}} = \innprod{Sv_{j}}{v_{j}} = \sum\limits_{m} |\innprod{v_{j}}{\phi_{m}}|^{2}$$
For the Trace, formula consider choosing an ONB which can always be chosen due to finite-dimensionality of $H$ and all properties of $S$. Choosing that Basis we can express $S$ as a matrix
$$S = \begin{pmatrix}\lambda_{1} & \cdots & 0 \\
\vdots &  & \vdots  \\
0 &  \cdots\  & \lambda_{n} \end{pmatrix}$$
then with this we see that
$$\tr S = \sum\limits_{i} \lambda_{i} = \sum\limits_{i} \sum\limits_{m} |\innprod{v_{j}}{\phi_{m}}|^{2} = \sum\limits_{m} \norm{\phi_{m}}^{2}$$
`\end{proof}`

## The Gramian Matrix

The way we came up with the frame operator is considering intuitively how our frame acts upon vectors in $H$. What we can also do is concatenate the Analysis and Synthesis Operators in the other way and get a map
$$\C^{M} \to \C^{M}$$
where we find out how our Frame affects parts of the frame. This operator then gets called the Grammian operator:

> [!definition|*] Grammian Operator of a Frame
> Given a Frame $\Phi = \set{\phi_{m}}$ for a finite-dimensional Hilbert Space $H$ with analysis operator $S = T^{*} T$ We define the Gramian Operator to be
> $$G: \C^{M} \to \C^{M}, \quad x \mapsto T T^{*} x$$
> More explicitly we know that for $a \in \C^{M}$
> $$Ga  = \sum\limits_{m} a_{m} \begin{pmatrix}\innprod{\phi_{m}}{\phi_{1}} \\
\vdots \\
\innprod{\phi_{m}}{\phi_{M}}\end{pmatrix}$$
>Even more explicitly we can write it as a Matrix relative to the canonical basis of $\Phi$ to be
$$G = \begin{pmatrix}\innprod{\phi_{1}}{\phi_{1}} & \innprod{\phi_{1}}{\phi_{2}} & \cdots & \innprod{\phi_{1}}{\phi_{M}}  \\ \innprod{\phi_{2}}{\phi_{1}} & \innprod{\phi_{2}}{\phi_{2}} & \cdots & \innprod{\phi_{2}}{\phi_{M}} \\ \vdots & \vdots &  & \vdots\\ \innprod{\phi_{M}}{\phi_{1}} & \innprod{\phi_{M}}{\phi_{2}} & \cdots & \innprod{\phi_{M}}{\phi_{M}} \\ \end{pmatrix}$$


Now this operator simply captures the information about how much parts of frame are pointing in similar directions. This can be seen a measure of how much space our frame is covering, and maybe also how overloaded it it. In any case we can connect some properties of the Frame and Frame Operator to the Gramian Operator in the following Proposition:

> [!proposition|*] Connecting the Gramian to Frames
> Let $\Phi = \set{\phi_{m}} \subset H$ be a frame with analysis operator $T$ and frame operator $S$ and Grammian $G$. Then 
> 1. $U: H \to H$ is unitary if and only if the Gramian of $G_{U \Phi} = G_{\Phi}$.
> 2. $\spec(G) \setminus \set{0} = \spec(S)$
> 3. If $\Phi$ is a parseval Frame if and only if $G$ is an orthogonal projection onto $\im(T)$
> 4. $G$ is invertible if and only if $M = N$

`\begin{proof}`
**For 1.**
Assume that we have a unitary operator $U: H \to H$. Then we know that
$$\innprod{\phi_{i}}{\phi_{j}} = \innprod{U \phi_{i}}{ U \phi_{j}}$$
This is equivalent to stating that for any $a \in \C^{M}$ we have
$$G_{U \Phi}a = \sum\limits_{m} a_{m} (\innprod{U \phi_{m}}{U \phi_{k}})_{k=1}^{M} = \sum\limits_{m} a_{m} (\innprod{ \phi_{m}}{ \phi_{k}})_{k=1}^{M} = G_{\Phi} a$$
Since $\Phi$ is the basis of $\C^{M}$ we can also see that the back implication is trivial.

**For 2.**
Let $\lambda$ be a non-zero eigenvalue of $S$, meaning that there exists a $v \in H$ with
$$Sv = \lambda v$$
Then since we can decompose
$$\lambda v =Sv = T^{*} T v$$
Applying $T$ to this we get
$$\lambda Tv = G(Tv)$$
thus telling us that $\lambda$ is a eigenvector of $G$ to the vector $Tv$

**For 3.**
Assume $\Phi$ is a perseval Frame. Then we know that $S = I$ meaning that
$$G T = T T^{*} T = T S = T$$
This means that for any vector $v \in \im T$ we get
$$Gv = v$$
The other direction is simply given by the fact that being an orthogonal projection is equivalent to $S = I$ and using previous properties.

**For 4.**
Since $\Phi$ is a Frame we know that $T$ is injective, thus $\ker T = 0 \implies \mathrm{Rank} T = N$. We thus also know that $\mathrm{Rank} T^{*} = N$ meaning that in total also
$$\mathrm{Rank} G = N$$
Now given an invertible $G: \C^{M} \to \C^{M}$ we know that $\mathrm{Rank} G = M \implies M = N$.

Given that $M = N$ we know that $T: H \to \C^{M}$ is a linear injective map between two spaces of the same dimension and thus Bijective which gives us what we want.  
`\end{proof}`


## The Reconstruction Problem and Dual Systems
We previously mentioned that reconstructing a vector $x \in H$ from the data given in $Tx$ relative to some frame $\Phi$ is important. We got to these formulas
$$\begin{align*}
x &= S^{-1}Sx = S^{-1} \left( \sum\limits_{m} \innprod{x}{\phi_{m}} \phi_{m}\right) = \sum\limits_{m} \innprod{x}{\phi_{m}} S^{-1} \phi_{m} \\
x &= SS^{-1}x = S\left( \sum\limits_{m} \innprod{x}{S^{-1}\phi_{m}} \phi_{m}\right)
\end{align*}$$
which hold for any given frame $\Phi = \set{\phi_{m}}$. The former reconstructs $x$ from the frame coefficients but we need to work in the system $\set{S^{-1} \phi_{m}}_{m=1}^{M}$ which we call the **Canonical Dual System**. This System immeadieately has interesting properties, since it mus have frame bounds $\frac{1}{A}$ and $\frac{1}{B}$.

In general we need to define what these dual systems are first to understand what properties of the canonical one are good.

> [!definition|*] Dual System
> Given a finite system of vectors $\Phi = \set{\phi_{m}}_{m=1}^{M}$ in a hilbert space $H$ we call the system $\Psi = \set{\psi_{m}}_{m=1}^{M}$ the dual system if for any $x \in H$ we have that
> $$x = \sum\limits_{m} \innprod{x}{\phi_{m}} \psi_{m}$$

Some general connection between a Frame and its Dual are given by

> [!proposition|*] Connection Between a Frame and Its Dual
> Let $\Phi = \set{\phi_{m}}$ and $\Psi = \set{\psi_{m}}$ be frames for $H$ with corresponding analysis operators $T_\Psi$ and $T_\Phi$. Then the following are equivalent
> 1. $x = \sum\limits_{m}  \innprod{x}{\psi_{m}} \phi_m$
> 2. $x = \sum\limits_{m} \innprod{x}{\phi_{m}} \psi_{m}$
> 3. $\innprod{x}{y} = \sum\limits_{m} \innprod{x}{\phi_{m}} \innprod{\psi_{m}}{y}$
> 4. $T_{\Phi}^{*} T_{\Psi}= id$ and $T_{\Psi}^{*} T_{\Phi} = id$

`\begin{proof}`
Skipped For Now. but super trivial
`\end{proof}`

Since we have already revealed we can simply say that the **canonical dual frame** given by $\set{S^{-1} \phi_{m}}$ is also a dual frame of course. This whilst always being canonical also has some optimal properties, namely that it has the “lowest energy”. This statement is a corollary of the next statement

> [!proposition|*] We can Decompose into Canonical Dual Frame
> Let $\Phi = \set{\phi_{m}}$ be a frame for $H$ with frame operator $S$. If $x = \sum\limits_{m}^{M}a_{m} \phi_{m}$ then
> 
$$\sum\limits_{m} |a_{m}|^{2} = \sum\limits_{m} |\innprod{x}{S^{-1}\phi_{m}}|^{2} + \sum\limits_{m} |a_{m} - \innprod{x}{S^{-1} \phi_{m}}|^{2}$$

`\begin{proof}`
Let $T$ be the [[Analysis and Synthesis of System in Hilbertspaces|analysis operator]] for $\Phi$. Then we can consider that using self-adjointness we get
$$(\innprod{x}{S^{-1} \phi_{m}})_{m}^{M} =  (\innprod{S^{-1} x}{\phi_{m}})_{m}^{M} \in \im(T)$$
Since $x = \sum\limits_{m} a_{m} \phi_{m}$ we get
$$\left( a_{m} - \innprod{x}{S^{-1} \phi_{m}} \right)_{m=1}^{M} \in \ker(T^{*}) = \im(T)^{\perp}$$
Using this we get that
$$(a_{m})_{m=1}^{M} = \left( \innprod{x}{S^{-1}} \right)_{m}^{M} + \left( a_{m} - \innprod{x}{S^{-1} \phi_{m}} \right)_{m}^{M}$$
The statement follows by taking the norm
`\end{proof}`

Now we can explicitly state in which way the canonical dual frame is minimal compared to any other dual frame

> [!corollary|*] The Canonical Dual Frame is Optimal
> Let $\Phi = \set{\phi_{m}}$ be a frame for $H$ with dual frame $\set{\psi}_{m=1}^{M}$ then
> $$\norm{\left( \innprod{x}{S^{-1} \phi_{m}} \right)_{m=1}^{M}}_{2} \leq \norm{\left( \innprod{x}{\psi_{m}} \right)_{m=1}^{M}}_{2}$$

`\begin{proof}`
Consider the vector definition where
$$x = \sum\limits_{m=1}^{M} \innprod{x}{\psi_{m}} \phi_{m}$$
then we get from the previous proposition the fact that
$$\norm{(\innprod{x}{\psi_{m}})_{m=1}^{M}}^{2} = \norm{(\innprod{x}{S^{-1} \phi_{m}})_{m=1}^{M}}^{2} + \norm{(a_{m} - \innprod{x}{S^{-1} \phi_{m}})_{m=1}^{M}}^{2} \geq \norm{(\innprod{x}{S^{-1} \phi_{m}})_{m=1}^{M}}^{2}$$
`\end{proof}`


> [!proposition|4.34]
> Let $\Phi = \set{\phi_{m}}$ be a frame for $H$ with analysis operator $T$ and Frame operator $S$ then the following are equivalent
> 1. $\set{\psi}_{m=1}^{M}$ is dual to $\Phi$
> 2. The analysis operator $\tilde T$ of $\set{\psi_{m} - S^{1} \phi_{m}}_{m}^{M}$ satisfies $\im(\tilde T) \perp \im(T)$

`\begin{proof}`
Let $\tilde \psi_{m}= \psi_{m} - S^{-1} \phi_{m}$ and let $x \in H$ then 
$$\begin{align*}
x &= \sum\limits_{m} \innprod{x}{ \psi_{m}} \phi_{m}\\
 &= \sum\limits_{m} \innprod{x}{\tilde\psi_{m} - S^{-1} \phi_{m}}\phi_{m} \\
&= \sum\limits_{m} \innprod{x}{S^{-1} \phi_{m}} \phi_{m} + \sum\limits_{m} \innprod{x}{\tilde\psi_{m}} \phi_{m}\\
&= x + \sum\limits_{m}\innprod{x}{\tilde \psi_{m}} \phi_{m} \\
&= x + T^{*}\tilde T x
\end{align*}$$
Hence if $\im(\tilde T) \perp \im(T)$ then $T^{*} \tilde T x = 0$ which means that $\Psi$ is dual to $\Phi$.
                           
Conversely  the same procedure tells us that $T^{*} \tilde T x = 0$ which means that perpendicularity
`\end{proof}`


> [!corollary|4.35]
> Let $\Phi = \set{\phi_{m}}$ be a frame for $H$ with analysis operrator $T$ and frame operator $S$. Also let $\spec(S) = \set{\lambda_{n_{1}}, \ldots, \lambda_{n_{N}}}$ and $\set{v_{n} \midline n = 1, \ldots N}$ a system of orthonormal eigenvectors of $S$.
> Then every dual frame $\Psi = \set{\psi_{m}}$ of $\Phi$ is of the form
> $$\psi_{m} = \left( \sum\limits_{n=1}^{N} \frac{1}{\lambda_{n}} \innprod{\phi_{m}}{v_{n}} + \overline{h}_{m,n} \right) v_m$$
> where $(h_{k})_{k}^{M} \in \im(T)^{\perp}$.

`\begin{proof}`
Note that $S$ is self-adjoint with orthonormal eigensystem $\set{v_{n} \midline n = 1, \ldots, N}$ Then
$$S^{-1} \phi_{m} = \sum\limits_{n=1}^{N} \innprod{S^{-1}\phi_{m}}{v_{n}} v_{n} = \sum\limits_{n=1}^{N} \frac{1}{\lambda_{n}}\innprod{\phi_{m}}{v_{n}}v_{n}$$
This means that $\psi_{m} = S^{-1} \phi_{m} + \tilde \phi_{m}$ with $\tilde \phi_{m} = \sum\limits_{n=1}^{N} h_{m,n} v_{n}$. The analysis opertor of $\tilde \phi_{m}$ is given by
$$\tilde T x = \left( \innprod{x}{\tilde \phi_{m}} \right)_{m=1}^{M} = \left( \sum\limits \overline{h_{m,n}} \innprod{x}{v_{n}} \right)_{m=1}^{M}$$
Thus $(h_{m,n})_{m,n=1}^{M,N}$ is the matrix representation of $\tilde T$ with respect to $v_{n}$

The statement follows from Proposition 4.34
`\end{proof}`


> [!corollary|4.36]
> A Frame $\Phi = \set{\phi_{m}}_{m=1}^{M} \subset H$ has a unique dual frame iff $N = M$ where $N = \dim H$

`\begin{proof}`
The proof follows from proposition 4.34
`\end{proof}`

### Frame Algorithm
If $\Phi = \set{\phi_{m}}$ is a frame then reconstruction is always possible using the canonical dual Frage $S^{-1} \phi_{m}$. We would now like to know if there is a fast way to compute $S^{-1}$

>I have learned a long time ago… when I started to learn mathematics… never compute an inverse. It can be very costly

The way out is the Frame Algorithm

> [!proposition|*] Frame Algorithm
> Let $\Phi = \set{\phi_{m}}$ be a Frame for $H$ with frame bounds $A, B$ and frame operator $S$. Then for any $x \in H$ we can construct a sequence $(y_{j})_{j=1}^{\infty}\subset H$ by
> $$\begin{align*}y_{0} &= 0\\
> y_{j} &= y_{j-1} + \frac{2}{A+B}S(x-y_{j-1})\end{align*}$$
> then $$\norm{x-y_{j}} \leq \frac{B-A}{B+A}^{j} \norm{x}$$
> In particular $\lim_{j \to \infty} y_{j} = x$

`\begin{proof}`
$$\innprod{\left( I - \frac{2}{A+B} S \right)x}{x} = \ldots = \norm{x}^{2} - \frac{2A}{A+B} \norm{x}^{2} = \frac{B-A}{A+B} \norm{x}^{2}$$
Similarly
$$- \frac{B-A}{B+A} \norm{x}^{2} \leq \innprod{ \left( I - \frac{2}{A+B} S \right)x}{x}$$
Hence
$$\norm{I - \frac{2}{A+B}S} \leq \frac{B-A}{B+A}$$
The statements follow by induction step.
`\end{proof}`

Note that with this algorithm we get
$$y_{j} = y_{j-1} + \frac{2}{A+B}S(x-y_{j-1}) = y_{j-1} + \frac{2}{A+B} \left( \sum\limits_{m}^{M} (\innprod{x}{\phi_{m}} - \innprod{y_{j-1}}{\phi_{m}}) \phi_{m} \right)$$

This algortithm is not free though. The determination of our frame bounds becomes crucial, since if $A$ is too small and or $B$ is too big we have the issue that our convergence speed is close to 1 which makes it slow.

What if our frame is parseval….well this exam question is easy since for a parseval frame we might think that we have bad convergence but keep in mind that in a parseval frame the reconstruction problem is immeadiately given.
$$$
