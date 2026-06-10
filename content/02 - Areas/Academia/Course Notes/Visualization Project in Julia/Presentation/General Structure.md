---
publish: true
created: 2025-11-23T20:39:55.000+01:00
modified: 2026-06-10T19:12:42.720+02:00
tags:
  - academia
---

## Outline

1. Bonnet Problem?
   1. Context of defining an object uniquely
   2. Bonnets Conjecture
   3. Research and excerpt of statements proven in this Probelm
2. “Isometric Tori Paper”
   1. Aim of the Paper as disproving the Bonnet Problem
   2. Construction prerequisites
      1. Construction of Isothermic Cylinders
      2. Quaternionic Description
   3. Main Statements of the Paper
3. Implementation in Julia (Visualisations)
   1. Philosophy and Tool Classes
   2. Curvature Line Visualizations - Other Objects and Isothermic Cylinders
   3. Isothermic Tori (Spherical Curvature Lines?)
   4. Bonnet Pairs and their Non-Congruence

### What Animations do I need?

Curvature Line Visualization

- “Bobenko Curve”
- Curvature Lines Sweeping Regular Torus and More irregular Shape

Isothermic Tori

- (Wente Torus)
- Isothermic Cylinders and their Curvature lines
- Isothermic Torus with arbitrary reparametrization function
- (Isothermic Torus with Spherical Curvature Lines)

Bonnet Pairs

## 1. Bonnet Problem

- The Classical Properties of an immersion $f: U \to \R^{3}$ are central to differential geometry
  - First and Second Fundamental form
    - **First Fundamental Form (Metric)**: Local Lengths → Allows us to determine path lengths and is an intrinsic property
    - **Second Fundamental Form**: Curvature of the Embedding in the Ambient Space
      - **Mean Curvature**: $H = -\frac{1}{2} \tr(A)$
      - **Gaus Curvature**: $K = \det A$
      - Eigenvectors of the Operator give us Curvature Directions and their Eigenvalues are the curvatures.
- Bonnet is known for a classical theorem saying that for a general metric and second fundamental form satisfying the Gauss-Codazzi compatability equations that a immersion can be uniquely determined up to rigid motion

> [!theorem|\*] Bonnet Theorem
> Given a two tensors $g, h$ satisfying the Gaus-Codazzi Equations define up to rigid motion an immersion $f: U \to \R^{3}$

- Bonnet also Conjectured in “Mémoire sur la théorie des surfaces applicables sur une surface donée” (1867) that the same uniqueness can be achieved by only specifying a metric and a mean curvature function up to some exceptions, these exceptions got to be knowhn as Bonnet Surfaces
- What surfaces are not unique:
  - **CMC Surfaces** - Lawson and others have studied these families of surfaces (see here for nice [pictures](https://www.math.uni-tuebingen.de/user/nick/lawson/lawson-cmc.html))
  - **Bonnet Families** - Bonnet himself came up with a family of counterexamples  that have been globally studies by for example Alexander Bobenko (author of the paper)
  - **Bonnet Pairs** - These are a pair of surfaces $f^{+}$ and $f^{-}$ such that they are non-congruent but related by a mean curvature preserving isometry.
    - [Lawson and Tribuzy](https://projecteuclid.org/journals/journal-of-differential-geometry/volume-16/issue-2/On-the-mean-curvature-function-for-compact-surfaces/10.4310/jdg/1214436095.pdf) proved that if the mean curvature function is not constant there exists at most two compact smoth immersions.
    - This paper can be seen as giving explicit examples of the objects described in Lawson and Tribuzy

## 2. Isometric Torus Paper

### Pre-requisites

#### Isothermic Surfaces (Conformal and Curvatureline Parametrizations)

From classical differential geometry we know that we can of course find many different parametrizations for a given surface. We will only consider a very nice class of parametrizations that simplify the first and second fundamental form a lot. Specifically we consider a conformal parametrization, meaning that for given
$f: U \to \R^{3}$
we want $\innprod{f_{u}}{ f_{v}} = 0 \quad \innprod{f_{u}}{f_{u}} = \innprod{f_{v}}{f_{v}} = e^{2h}$

This simplifies our first and second fundamental form a lot.

The second property we want is that the parametrization is in the direction of curvature lines, in this way all our visualizations become very intuitive to plot since the in the parameter plane (u-v Plane) we can nicely visualise the constant u and v lineas as the curvature lines we can see.

==Show Interactive Animation of Isothermic Surfaces==

#### Quaternionic Surface Description

Papers by Bobenko use a nice embedding of $\R^{3}$ into $\mathbb{H}$. We can consider the quaternions as a natural extension of the complex numbers and describe every number as
$z = a + b \mathbb{i} + c \mathbb{j} + d \mathbb{k}$
with the relations
$\mathbb{ij = k \quad jk = i \quad ki = j \quad ji = -k \quad kj = -i \quad ik = -j}$
and
$\mathbb{i}^{2} = \mathbb{j}^{2} = \mathbb{k}^{2} = \mathbb{ijk} = -1$

We embedd by considering
$\phi: \R^{3} \to \im \mathbb{H}, \quad \begin{pmatrix}x \\ y \\ z\end{pmatrix} \mapsto x \mathbb{i} + y \mathbb{j} + z \mathbb{k}$
This gives us some nice properties for calculating scalar and cross products

$$$\begin{align*}
XY = - \innprod{X}{Y} + X \times Y \\
XY - YX = 2( X \times Y)
\end{align*}$$
The main use that we will be getting out of this visualization is that a lot of our operations that we will be doing can be expressed in terms of conjugation by a quaternionic value.

We thus look at what conjugation means geometrically correspond to rotation and scale rotations around the imaginary component of $q$.

==Animation of Helicoid rotating by complex number==
#### Transformations
Some relevant transformations that we can describe in this context are the Christoffel Dual to a Surface and the Spin Transformation of a Surface.

Both of these use local language and description. of a surface to transform it and then integrating back up gives us a again a tranformed global immersion.

One local-transformation that can be described is simpler to state when we consider an isothermal surface. Denote the 1-Form defined by out parametrization $f: U \to \R^{3}$ by $df = f_{u} du + f_{v} dv$. Then we define the Christoffel dual $f^{*}$ to be the surface with the property that
$$d f^{*} = \frac{f_{u}}{\norm{f_{u}}} du -  \frac{f_{v}}{\norm{f_{v}}} dv$$
Geometrically we can try to understand this operation (which turns out to be an involution) if we consider some visual examples

==Christoffel Dual of Enneper Picture==

We can thus descripe this local transformation as keeping the curvature line direcitons the same but changing the curvature values around. 


Another relevant transformation for the description of Bonnet Pairs is in form of a Spin Transform. We have seen this before when discussing conjugation in out embedded vectors $\R^{3} \cong \im \mathbb{H}$. We saw that conjugating by a quaternion rotates our object and scales it. A spin transform simply does this locally

So for a given $f: U \to \im \mathbb{H}$ we consider the spin transform $\tilde{f}$ to have the local description
$$d \tilde{f} = \lambda df \overline{\lambda}$$
for some quternion $\lambda \in \mathbb{H}$. We can also choose this to be a function $\lambda: U \to \mathbb{H}$ and at every point rotate differently.

This obviously does not always give us an integrable surface, but the conditions tht $\lambda$ has to satisfy are given further by [Kamberov et. all.](https://arxiv.org/pdf/dg-ga/9610006) and this transformation can be used to give local deformations that preserve curvature of an object. [LINK TO Local deformation Paper](https://multires.caltech.edu/pubs/SpinXForm.pdf)

==Spin Tranformation Script==
### Local Properties of Bonnet Surfaces
These two transformations are relevant to Bonnet Surfaces since Kamberov, Pedit and Pinkall proved in their paper “Bonnet Pairs and Isothermic Surfaces” that using the quaternionic embedding we can locally describe a condition for bonnet pairs in the following way

> [!theorem|*]
> The immersions $f^{\pm}: D \to \im \mathbb{H} \cong R^{3}$ build a Bonnet pair if and only if there exists an isothermic surface $f: D \to \im \mathbb{H}$ and a real number $\epsilon \in \R$ such that
> $$df^{\pm} = (\pm \epsilon - f) df^{*} (\pm\epsilon + f)$$
> where $f^{*}$ is the christoffel dual of the surface.

Now this is ofcourse simply a Spin-Transform of the Christoffel Dual which are both operations that we understand. We can thus attempt to to construct bonnet pairs by considering exactly this local “Bonnet Operation”. I did this numerically for some surfaces to see what this operation tends to do visually speaking

==Bonnet Operation of Catenoid==

#### Isothermic Cylinders
The last thing we need to import from a different paper if the main object of study, an isothermic embedding of a topological torus. This is described in detail in the Paper “Isothermic Tori with One Family of Planar Curvature Lines and Area Constrained Hyperbolic Elastica”.

The main theorem build in this paper is given in the following theorem

> [!theorem|*] Isothermic Cylinder with one Generic Family (u-curves)
> Every isothermic cylinder with one generic family ($u$-curves) of closed planar curvature lines is given in isothermic parametrization by the following formulas.
> $$\begin{align*}
> f(u, v) &= \Phi^{-1}(v) \gamma(u, w(v)) \mathbb{j} \Phi(v) \\
> \gamma(u, w) &= -i \frac{2 \vartheta_{2}(\omega)^{2}}{\vartheta_{1}'(0)\vartheta_{1}(2\omega)} \frac{\vartheta_{1}\left( \frac{1}{2} (u + iw - 3\omega)\right)}{\vartheta_{1}\left( \frac{1}{2} (u + iw + \omega)\right)} \\
> \frac{\Phi'(v)}{\Phi^{-1}(v)} &=\sqrt{1 - w'(v)^{2}} W_{1}(w(v)) \mathbb{k} \\
> W_{1}(w) &= i \frac{\vartheta_{1}' (0)}{2 \vartheta_{2}(\omega)} \frac{\vartheta_{2}(\omega - iw)}{\vartheta_{1}(iw)}
>\end{align*}$$


In general this construction consists of two aspects.
1. The Curve $\gamma(u)$ or more specifically the family of curves $\gamma_{v}(u)$ generating our torus
2. The rotation defined by the map $\Phi$

==Animation of Gamma Curves==

The most important thing to keep track of in this statement is the freedoms of parameters we have. Namely we have
- The functions $\vartheta_{i}(z \mid \tau)$ are the jacobi elliptic functions on an elliptic integral of rhombic type spanned by $\pi$ and $\pi \tau$.
- Programmatically you always need to specify $\tau \in \frac{1}{2} + i \R$ such that $0 < \im \tau < \im_{\C} \tau_{0} \approx 0.3547$ (defined by $\vartheta_{2}''(0 \mid \tau_{0}) = 0$)
- $w(v)$ is $\tau$-admissible reparametrization function.
- also $\omega$ is uniquely determined
The only freedoms are choosing $\tau$ and $w(v)$

We can visualise the generation of this surface as traversing the family of curves via the reparametrization $w$ and rotating at every point by the rotation $\Phi$.

This nice construction can be seen in wayy simpler examples as well, when we observe a klein bottle (torus parametrization) or even simpler a cylinder constructed by a family of curves


==1. Animation of Undulating Torus==
==2. Animation of Toric Klein Bottle ==
==3. Animation of Isothermic Torus with constant w ==
==4. Animation of Isothermic Torus with constant w non optimal omega ==
==5. Animation of Isothermic Torus with simple w ==

### Main Statements
We will not go into the details here but from the local description of bonnet surfaces via our spin transformation in combination with the gauss-codazzi equations we can find some periodicity conditions that need to be satisfied for a surface to generate compact bonnet pairs.

Following these arguments we get the following explicit parametrization for bonnet surfaces
> [!theorem|*]
> Let $f(u, v) = \Phi^{-1}(v) \gamma(u, w(v)) \mathbb{j} \Phi(v)$ be an isothermic cylinder with one generic family of closed planar curvature lines as in the previous theorem. For each $\epsilon \in R$ the resulting Bonnet pair surfaces $f^{\pm}(u, v)$ are real analytic cylinders with translational periods in $v$ that are equal up to sign. Their immersion formulas are
> $$f^{\pm}(u, v) = R(\omega)^{2} f(\pi - 2 \omega + u, v) - \epsilon^{2} f(\pi - u, v) \pm 2 \epsilon \left(\Phi^{-1}(v) \widehat{B}(u, w(v)) \mathbb{i} \Phi(v) + \tilde{B}(v)\right)$$
> where $R$ is given explicitly, $\widehat{B}(u, w(v))$ is a real analytics real-valued function that is $2 \pi$-periodic in $u$ and $\tilde{B}(v)$ is a real analytic $\R^{3}$-valued function that depends only on $v$. Both can be explicilt given.

The main meat of the paper consists in showing that the isothermic torus satisfies exactly these conditions and that we can explicitly write down the parametrization of the bonnet pairs. 

Ill only illuminate one important step in this argumentation, namely specifying a choice for the reparametrization function $w$. We say that $w$ determines how our isothermic torus gets made and we also noted that this freedom is very vast.
We can of course find $w$ such that the periodicity conditions are given and we have bonnet pairs (we will show one of these choices later) but first we can choose to restrict our surface’s $v$ coordinate curves.

The $u$-curves are planar by construction and we have seen the family of curves that determine them, but the choice of $v$ curves is not limited yet. In the paper it is proven that if we restrict our $v$ curves to always lie on a sphere the resulting parametrization $w$ is given explicitly via the weierstrass p function and the resulting tori are especially symmetric.

From this limitation we get the following explicit reparametrization function
> [!theorem|*]
> An isothermic cylinder from a fundamental piece of rhombic type has immersion formula $f(u, v)$ given as in the previous thorems with periodic $\tau$-admissible reparametrization function $w$ globally defined by
> $$\begin{align*}
> w(v) &= \wp^{-1}\left(a_{0} + \frac{a_{1} \wp(v; \delta^{-2} Q) + a_{2}}{a_{3} \wp(v; \delta^{-2} Q) + a_{4}}; Q_{3}\right) \end{align*}$$
> where $a_{i} \in \C$ depend on the elliptic curves $Q, Q_{3}$ and their derivatives evaluated at $s_{0}, s_{1}^{-}, s_{1}^{+}$

where I have decided to not express the statement fully in this case, since that would only overload notation in our case. 
I will only note that the elliptic curves $Q$ and $Q_{3}$ are described explicitly in the paper in terms of $\vartheta_{i}$ and constants $s_{1}$ and $s_{2}$. From specific zeroes we get the rest of the information we need.

Nevertheless we can see that now we have a full set of parameters that describe an elliptic curve for this canonical choice of $w$, namely
$$\im_{\C} \tau \quad \delta \quad s_{1} \quad s_{2}$$

This solution gives us an isothermic cylinder and then also the corresponding bonnet pairs, which were shown in the paper. We can see though that this solution is especially symmetric, in fact it is shown that the bonnet pairs relate by reflection (which ensures non-congruence in the simplest case).

For a more general choice of $w$ we can also find more explicitly asymmetric examples of Bonnet Tori. One development done in the paper is to approximate a solution, that satisfies the periodicity conditions. They give the $w$ function explicitly as
$$w(v) = \frac{A}{\pi} \sin(v) + \frac{A}{\pi^{2}} \cos(v) - \frac{B}{2\pi} \sin(2v) + \frac{B}{4\pi^{2}} \cos(2v) + C$$
For specified values for $A, B, C$
$$A = 1.44531765156 \quad B = 1.33527652772 \quad C = 1.05005399924$$
its Obtained by pertrubation of the symmetric solution and then approximating

==Show my Examples==


---

- Main Statements
	- General Construction relies on theoretical background of isothermic cylinders which in the background satisfy periodicity conditions
	- In the end the main statements leave us with some freedoms, namely three
	- Choosing these can be tricky sometimes and requires some numerical methods
	- Choosing the right reparametrization determines the symmetry of the results
$$$
