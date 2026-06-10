---
publish: true
created: 2026-02-09T23:12:41.514+01:00
modified: 2026-06-10T19:14:51.155+02:00
tags:
  - thoughts
---

In the continous theory we use the surface theory analogous to what we just defined to analyse surfaces of a specific type with constrains. We can do similarly in our discrete theory and consider for example minimal surface, meaning surfaces with constant mean curvature $H = 0$.

We culd simply define discrete minimal nets as edge constraint nets with $H = 0$ but this would be a non-constructive way to go about it. Let us first find a nice condition in the contionus theory that is equivalent to being minimal and translate that into the discrete theory in the hope that it is more constructive.

### Continous Theory of Minimal Surfaces

> [!definition|\*] Isothermic Surfcaes
> An immersion $f: U \to \R^{3}$ is said to be in isothermal reparametrization if and only if $f$ is conformally parametrized, meaning $\norm{f_{x} = \norm{f_{y}}}$ and $f_{x} \perp f_{y}$ and moreover parametrized by curvature lines. A surface is called an isothermic surface if and only if $f$ admits such a parametrization (away from umbilics)

Keep in mind that this is a restriction. Not all surfaces admit an isothermal parametrization. Examples of surfaces that do include surfaces of revolution, quadrics and surfaces of constant mean curvature (meaning minimal surfaces too).

> [!lemma|\*] Christoffel Dual
> If $f: U \to \R^{3}$ is in isothermal parametrization, then there is another isothermic net $f^{*}: U \to \R^{3}$ such that
> $f_{x}^{*} = \frac{f_{x}}{\norm{f_{x}}^{2}} \quad f_{y}^{*} = -\frac{f_{y}}{\norm{f_{y}}^{2}}$
> We call $f^{*}$ the dual surface of $f$.

In general the dual defined here is unique up to translations. Keep in mind that this dualization is an involution.

The connetion of this construction to minimal surfaces is that any minimal surface is dual to a conformal parametrization (isothermal technically) of the sphere. This equivalence also allows us to compute objects, as dualizing is simply computable. We only need to find a nice way to confromally parametrize the sphere.

#### Conformal Parametrizations of the Sphere

As we are interested in loacl theory at the moment we will think of conformal parametrizations as the stereograpic image of a holomorphic map (this is true locally and away from umbilics).

The stereographic projection
$\sigma: \R^{2} \subset \R^{3} \to S^{3}, x \mapsto 2 \frac{x - (0, 0, 1)^{T}}{\norm{x - (0, 0, 1)^{T}}} + \begin{pmatrix}0 \\ 0 \\ 1\end{pmatrix}$
maps a holomorphic map $g: \C \to \C$ to
$n: \C \cong \R^{2} \to S^{2} \quad n = \sigma \circ g$
By calculation this turns out to be
$n = \frac{1}{1 + g \bar{g}}\begin{pmatrix}\mathrm{Re}(g) \\ \im(g) \\ g \bar{g} - 1 \end{pmatrix} = \frac{1}{1 + g \bar{g}}\begin{pmatrix}g  + \bar{g} \\ \frac{g- \bar{g}}{i} \\ g \bar{g} - 1 \end{pmatrix}$
this allows us to construct minimal surfaces using $f = n^{*}$ which can be written directly

$$
f = \int \mathrm{Re} \frac{1}{g'}\begin{pmatrix}1 - g^{2} \\ i(1 + g^{2}) \\ 2g\end{pmatrix}
$$

More generally we can write for holomorphic $h$ and meromorphic $g$ that
$f = \mathrm{Re} \int \begin{pmatrix}1- g^{2} \\ i (1 + g^{2}) \\ 2g\end{pmatrix} h$
and $h$ has a zero of order $2n$ exactly if $g$ has a pole of order $n$ there.

Constructing this analogously in the discrete case is easily done, since we already have an equivalence to holomorphicity which is is that a map $g: \Z^{2} \to \C$ is holomorphic if and only if $\mathrm{cr}(g, g_{1}, g_{12}, g_{2}) = -1$.

In this way we can define the induced gauss map as
$n = \frac{1}{1 + g \bar{g}}\begin{pmatrix}g  + \bar{g} \\ \frac{g- \bar{g}}{i} \\ g \bar{g} - 1 \end{pmatrix}$
We now need to dualize this, for this to happen we will show that $n$ like $g$ has planad quads with cross-ratio -1 and that these are dualizable in a way that allows for global dualization of the net.

> [!claim|\*] Induced Discrete Gauss Map  has planar quadrilaterals
> The map $n$ defined above has planar quadrilaterals with cross ratio $-1$.

`\begin{proof}`
The stereographic map $\sigma$ preserves the cross-ratio and since
$n = \sigma \circ g$
we know that $\mathrm{cr}(n, n_{1}, n_{12}, n_{2}) = \mathrm{cr}(g, g_{1}, g_{12}, g_{2}) = -1$
`\end{proof}`

With this we now restrict ourselves to consider the quads in the complex plane, since each quad is planar and thus can be embedded in some $\C$

> [!claim|\*] The induced discrete Gauss map can be locally dualized
> Given the induced Gauss map above $n$ we can limit ourselves to one quarilateral with edge-vectors $a, b, c, d \in \C$. We can dualize this quad to some $a^{*}, b^{*}, c^{*}, d^{*} \in \C$.

`\begin{proof}`
We know from the previous observations that
$a + b + c + d = 0 \quad \frac{ac}{bd} = -1$
Dualizing this gives us
$\begin{matrix}a^{*} = \frac{a}{\norm{a}^{2}} = \frac{1}{\bar{a}}  & b^{*} = -\frac{1}{\bar{b}} \\ c^{*} = \frac{1}{\bar{c}} & d^{*} = -\frac{1}{\bar{d}}\end{matrix}$
then we definitely have
$\frac{a^{*}c^{*}}{b^{*} d^{*}} = -1$
This means we only need to show that $a^{*} + b^{*} +c^{*} +d^{*} = 0$. Calculating this out we can see that conjugating gives us

$$$\begin{align*}
0 &= \bar{a}^{*} + \bar{a}^{*} + \bar{b}^{*} + \bar{c}^{*} + \bar{d}^{*} \\
&= \frac{1}{\bar{a}} + \frac{1}{\bar{b}} +\frac{1}{\bar{c}} +\frac{1}{\bar{d}} \\
&= c - \frac{ac}{b} + a - \frac{ac}{d} \\
&= a + c - \frac{ac}{bd}(b+d) = a + b + c + d
\end{align*}$$
$$$

`\end{proof}`
This means we can dualize the maps with cross-ratio $-1$. Giving us the following Definition

> [!definition|\*]
> Let $g: \Z^{2} \to \C$ be a discrete holomorphic map and
> $n = \frac{1}{1 + g \bar{g}}\begin{pmatrix}g  + \bar{g} \\ \frac{g- \bar{g}}{i} \\ g \bar{g} - 1 \end{pmatrix}$
> and $f := n^{*}$.
> We then call $f$ and $n$ discrete minimal net and its Gauss map

We can now consider some explicit examples for this

> [!example|\*]
> We are now in the position to construct actual examples. Setting
> $g(k, l) = a(k + il)$
> for $a > 0$. We get a discrete version of the Enneper surface.
> While choosing for $a, b > 0$ the exponensial map
> $g(k, l) = e^{\left( 2 \arcsin\left( \sin\left( \frac{\alpha}{2} \right) \right)k + i \alpha l \right)}$
> the resulting surface then is a discrete version of the catenoid.

This construction can actually mirror the Weierstraß representation of minimal surfaces in the continous case. If we combine the stereographic projection with the dualization we find that
$n_{1} - n = \frac{1}{1 + g_{1} \overline{g_{1}}} \begin{pmatrix}g_{1} + \overline{g_{1}} \\-i(g_{1} - \overline{g_{1}}) \\ g_{1} \overline{g_{1}} - 1\end{pmatrix} - \frac{1}{1 + g \overline{g}} \begin{pmatrix}g_ + \overline{g} \\-i(g - \overline{g}) \\ g \overline{g} - 1\end{pmatrix}$
then
$\norm{n_{1} - n}^{2} = 4 \frac{(g_{1} - g) (\overline{g_{1}} - \overline{g})}{(1 + g_{1} \overline{g_{1}})^{2} (1 + g \overline{g})^{2}}$
this all (skipping some steps) leads to a one parameter family of discrete minimal surfaces
$f_{1} - f = \frac{1}{2} \mathrm{Re} \left( \frac{e^{i \alpha}}{g_{1} - g} \begin{pmatrix}1 - g_{1} g \\ i(1 + g_{1} g) \\ g_{1} + g\end{pmatrix} \right)$
and
$f_{2} - f = -\frac{1}{2} \mathrm{Re} \left( \frac{e^{i \alpha}}{g_{2} - g} \begin{pmatrix}1 - g_{2} g \\ i(1 + g_{2} g) \\ g_{2} + g\end{pmatrix} \right)$
In this way we have found a discrete approximation to defining minimal surfaces via the Weierstrass representation. We will now see how this relates to our definition of mean curvature since in the continous case any minimal surface has zero mean curvature.

> [!definition|\*]
> Two quadrilaterals $P$ and $Q$ with parallel edges are said to be dual to each other if
> $0 = A(P, Q)$
> where $A$ is the mixed area function.

This notion of duality is considered seperate for now from the isothermic duality. They are related though as we will see later.

> [!proposition|\*] Duality of Quads with Parallel Edges
> Given two quads $P = (p_{1}, \ldots, p_{4})$ and $Q = (q_{1}, \ldots q_{4})$ with parallel edges we have that
> $P \text{ and } Q \text{ are dual} \iff p_{1} - p_{3} \parallel q_{2} - q_{4} \text{ and } p_{2}- p_{4} \parallel q_{1} - q_{3}$
> meaning the non matching diagonals have to be parallel

`\begin{proof}`
Let $a, b, c, d$ denote the edges of $P$ in the correct order and $a*, b*, c*, d*$ the edges of $Q$. We can the construct an intermediary polygon
$R = P + t Q$
we know that the area is given by
$A(R) = \frac{1}{2} \det(R_{2} - R_{1}, R_{3} - R_{2}) + \frac{1}{2} \det(R_{4}- R_{3}, R_{1} - R_{4}) = \frac{1}{2} \left(\det(a + t a^{*}, b + t b^{*}) + \det(c + t c^{*}, d + t d^{*})\right)$
Now we know by definnition that $A(P, Q)$ has to be $\frac{1}{2}$ of the linear term of $A(R)$ thus using that the edges are parallel we get that
$4 A(P, Q) = \det(a^{*}, b) + \det(a, b^{*}) + \det(c^{*}, d) + \det(c, d^{*}) = \ldots = 2 \det(a + b, b^{*} + c^{*})$
So $A(P, Q) = 0 \iff a + b \parallel b^{*} + c^{*}$. The same argument works for the other diagonal as well.
`\end{proof}`

> [!lemma|\*]
> Each Planar quadrilateral has a dual one. It is unique up to translation and scaling.

`\begin{proof}`
Let $m$ be the intersection of the diagonals of the quad given by $p_{1}, p_{2}, p_{3}, p_{4}$ and let
$v = \frac{p_{1} - m}{\norm{p_{1} - m}} \quad w = \frac{p_{2} - m}{\norm{p_{2} - m}}$
We can assume without loss of generality that $m = 0$ then
$\begin{matrix} p_{1} = \alpha v & p_{2} = \beta w \\ p_{3} = \gamma v & p_{4} = \delta w \end{matrix}$
now we simply define
$\begin{matrix} q_{1} = -\alpha^{-1} v & p_{2} = -\beta^{-1} w \\ p_{3} = -\gamma^{-1} v & p_{4} = -\delta^{-1} w \end{matrix}$
We can then find paralelity of the edges by considering that
$q_{2} - q_{1} = \ldots = \frac{1}{\alpha \beta} (p_{2} - p_{1})$
To show uniqueness assume that $\tilde{q}$ is another dual quadrilateral. By translation and scaling we can achieve, that the intersdections of the diagonals of $q$ and $\tilde{q}$ coincide and that $\tilde{q_{1}} = q_{1}$. Since $\tilde{q_{2}} - \tilde{q_{1}} \parallel q_{2} - q_{1}$ and $\tilde{q_{2}}$ and $q_{2}$ lie on the same diagonal they must coincide as well. Iteratively it follows that $\tilde{q_{3}} = q_{3}$ and $\tilde{q_{4}} = q_{4}$.
`\end{proof}`

Note that eventhough every planar quad has a dual one this is in general not true for entire meshes. Meshes that are dualizable in this sense are called Koenigs nets. We will now show that isothermic nets are infact Koenig nets:

> [!lemma|\*]
> The dual of a quadrilateral with cross ratio $\mathrm{cr}(\square) = -1$ is dual in the above sense.

`\begin{proof}`
Exercise
`\end{proof}`

## How well-behaved are the maps Constructed here

We now can take some time to ask if these maps are well-behaved in the sense of being [[Edge-Constraint Nets]]. in this construction we can see that we are lucky in the sense that the normals are pre-prescribed by the duality construction and thus we get that for free and can simply calculate that the edge constraint condition is satisfied using that $f_{1} - f \perp n_{1} + n$
