---
publish: true
created: 2026-02-09T23:19:06.822+01:00
modified: 2026-06-10T19:14:50.845+02:00
tags:
  - thoughts
---

We now also briefly want to consider surfaces of constant negative Gauss curvature. In the smooth case we characterize these by having a socalled Chebyshev Net, meaning we have that

$$$\begin{align*}
\norm{f_{x}(x, y)} = A(y) \\
\norm{f_{y}(x, y)} = B (x)
\end{align*}$$
Discretizing this we will consider edge lengths which are constant in one respective direction and also want planar vertex stars.

> [!definition|*] K-Nets
> A map $F: \Z^{2} \to \R^{3}$ with the following two properties
> 1. $\norm{F_{n+1, m} - F_{n, m}} = A_{n}$ and $\norm{F_{n, m+1} - F_{n, m}} = B_{m}$
> 2. $F_{n \pm 1, m} - F_{n, m}, F_{n, m \pm 1} - F_{n, m}$ are all coplanar (planar vertex stars)
> Is called a $K$-net or sicrete surface of contant negative Gauss curvature.

In order to figure out that $K$-nets actually exist, let us study one quadrilateral first: The condition 1) gives that is must be a folded parallelogram as opposite edges ahve the same length but it needs not to be planar.

Thinking of the four points we can think of them as the edges of a tetrahedron and consider the dihedral angles of this, detnoting them $\delta_{1}$ and $\delta_{2}$. We can now also consider the volume of the tetrahedron in two different ways
$$V = \frac{1}{3} \mathcal{A}(ACD) H_{ACD}$$ where $\mathcal{A}(ACD)$ is the area of the triangle $ACD$ and $H_{ACD}$ is the height $B$ makes above that. We can calculate the height by
$$H_{ACD} = \sin(\delta_{1}) H_{in ABD}$$
so $H_{ACD} = \frac{2 \sin(\delta_{1}) \mathcal{A}(ABD)}{|AD|}$
altogether we get for the volume
$$V = \frac{2}{3} |\sin(\delta_{1})| \frac{\mathcal{A}(ACD) \mathcal{A}(ABD)}{|AD|}$$
…

In the end this leaves us with the identity
$$\frac{|sin(\delta_{1})|}{AD|} = \frac{|\sin(\delta_{2})|}{|AB|}$$
Here is a remarkable observation:
	Our folded parallelograms come with a natual vertex-Gauss map given by the cross product of the incident edges. For a consistent oriantation we require that $\sgn(\angle(N, N_{1})) \neq  \sgn(\angle(N, N_{2}))$
> [!lemma|*]
> The Gauss map of a $K$-net furnishes a weak Chebychev net in $S^{2}$ It is Lorenz-Harmonic:
> $$N_{u} - N_{l} - N_{r} + N_{d} = \rho( N_{u} + N_{l} + N_{r} + N_{d})$$
> with $\rho: \Z^{2} \to \R$.
> Up to scaling and translation one can reconstruct the $K$-net from $N$ via
> $$F_{1} - F = N_{1} \times N, F_{2} - F = -N_{2} \times N$$

`\begin{proof}`
For the Gauss map we have that the edge length are exactly the dihedral angles which a coupled to the edge length of the $K$-net via the above observation: Basically the $K$-net can be scaled such that $\sin(\delta_{i})$ is the edge lengths of the surface.

Now for a spherical parallelogram we have that the diagonals intersect at their midpoints (and this vector is the center of the $180$ deg rotational symmetry …).

So we know that $X = N_{u} + N_{d} \parallel N_{l} + N_{r} =: Y$. So $Y = \lambda X$ and 
$$X-Y = (1 - \lambda) X = \frac{1- \lambda}{1 + \lambda} (1 + \lambda)X =\frac{1- \lambda}{1 + \lambda}(X + Y) $$
This is exactly the Lorenz-Hamonicitiy. Finally since $N \perp F_{1} - F$ and $N_{1} \perp F_{1} - F$ and since $\norm{F_{i} - F} = |\sin(\delta_{i})|$ we see that $F$ can be reconstructed (keep in mind the opposite sign convention we imposed when defining the normals).
`\end{proof}`

With this knowledge we can already construct discrete $K$-nets: Prescribing two spherical polygons intersecting in one vertex as initial conditions we can uniquely construct a sphrical parallelogram net by means of reflections.

Given three points $N_{l}, N_{d}, N_{r}$ we find $N_{u}$ by reflecting $N_{d}$ along the midpoint of $N_{l}$ and $N_{r}$ meaning at $N_{l} + N_{r}$. This reflection can be explicitly written as
$$N_{u} = 2 \innprod{N_{l} + N_{r}}{N_{d}} \frac{N_{l} + N_{r}}{\norm{N_{l} + N_{r}}} - N_{d}$$
Once we have constructed the Gauss map $N$. We can construct the $K$-net using the formulae from before
$$F_{1} - F = N_{1} \times N, F_{2} - F = -N_{2} \times N$$

In the smooth case it is know that the angle between the asymptotic lines on $K$-surface satisfies the Sine-Gordon Equation:
$$\omega_{uv} = AB \sin(\omega)$$
Here $u, v$ are the asymptotic parameter lines and $A$ and $B$ are as above (can be chosen to be 1). If one switches coordinates this can rewritten into 
$$\omega_{xx} - \omega_{tt} = \sin(\omega)$$
So we are interestd to see what we get in the discrete case for this angle. First note that
$$\omega = \angle(N_{d} \times N_{r}, N_{d} \times N_{l}) \text{ and } \tilde{\omega} = \angle(F_{r} - f_{d}, F_{l} - F_{d})$$
then the relation is $\omega = \pi - \tilde{\omega}$

We will continue to work with the Gauss map here: By Napiers rule for spherical triangles we know that
$$\tan\left( \frac{\omega}{2} \right) \tan\left(\frac{\alpha+ \beta}{2} \right) = \frac{1 + \tan\left( \frac{\delta_{1}}{2} \right) \tan\left( \frac{\delta_{2}}{2} \right)}{1 - \tan\left( \frac{\delta_{1}}{2} \right) \tan\left( \frac{\delta_{2}}{2} \right)}$$


…….. missing notes

---

## Constructing a Lax Pair for this

We set 
$$U = \begin{pmatrix}\cot\left( \frac{\delta_{1}}{2} \right) e^{i(h_{1}- h)}  & i \lambda \\ i \lambda  &  \cot\left( \frac{\delta_{1}}{2} \right) e^{-i(h_{1} - h)}\end{pmatrix}$$
$$V = \begin{pmatrix}1  & \frac{i}{\lambda} \tan\left( \frac{\delta_{2}}{2} \right) e^{i(h_{2} + h)} \\ \frac{i}{\lambda} \tan\left( \frac{\delta_{2}}{2} \right) e^{-i(h_{2} + h)}  &  1\end{pmatrix}$$

An we define recursively $F_{1} = U F$ and $F_{2} = V F$ with the initial value of $F = I$. We can nicely think of $F$ as a discretization of a Frame Field, meaning a collection of Axis  that locally gives us axis.

We now need to first see what parameters get limited by forcing consistency of $F$, meaning we check for the integrability ondition
$$U_{2} V = V_{1} U $$
Calculating this numerically or using Mathematica tells us that
$e^{h + h_{12}} - e^{i(h_{1} + h_{2})} = (1 - e^{i (h + h_{1} + h_{12} + h_{2})}) k$

this is called the Hirota Equation which  allows us to calculate $h$ from this which is compatible and thus such a Frame field exists. In particular due to the Frame field properties we know that
$$F^{-1} \k F = F^{-1} e_{3} F =: N$$
To get the surface we can do the following trick: Set $\lambda = e^{t}$ and look at $F^{-1} \frac{d}{dt}F$. The claim then is that $F^{-1} \in \mathrm{su}(2) = \mathrm{Im}(\H)$ since the logarithmic derivative of any matrix $F \in \mathrm{SU}(2)$ has to be an element of the Lie group. This can be explained as considering the curve
$$t \mapsto F^{-1}(0) F(t)$$
which goes through the identity at $t = 0$. Taking the derivative gives the tangential vector at the identity meaning it has to be an element of a Lie Algebra. This means we can define a map
$$f: \Z^{2} \to \R^{3} \cong \mathrm{Im}(\H) \cong \mathrm{su}(2), \quad f = F^{-1} \frac{d}{dt} F$$
How does an edge of this net look (we denote $\frac{d}{dt} F =: F_{t}$):
$$f_{1} - f = F_{1}^{-1} F_{1t} - F^{-1}F_{t} = F^{-1} U^{-1} (UF)_{t} - F^{-1} F_{t} = F^{-1} (U^{-1} U_{t} F + U^{-1} U F_{t} - F_{t}) = F^{-1}(U^{-1}U_{t}) F$$
similarly
$$f_{2} - f = \ldots = F^{-1} (V^{-1} V_{t}) F$$
since we know that the logarithmic derivative gives us a vector in $\R^{3}$ we know that the edge ist basically determined by the logarithmic derivative of $U$ and $V$ up to global rotation $F$. This means we can consider just $U, V$ and their lgoarithmic derivatives.

Note that $U, V$ are actually not normalized so $F$ is NOT in $\mathrm{SU}(2)$ but $F^{-1} v F$ is still a rotation and if $q$ is a unit quaternion and $g$ a real function then
$$(gq)^{-1} (gq)_{t} = g^{-1}q^{-1}(g_{t} q + g q_{t}) = \frac{g_{t}}{g} \cdot 1 + q^{-1} q_{t}$$
meaning the logarithmic derivative of some unit quaternion and some non-unit quaternion differ simply by a real part, meaning we can simply remove the real part of it. In matrix terms we can identify the real part with the trace and note that we can take the trace free part of the matrix representing our objects

… Mathematika calculation

and thus the edges have constant length which is the first thing we need to a $K$-net

We now also need perpendicularity. Im very lost right now.

Note that thsi construction allows for a change of $U, V$ by a rotation around the normal ($\lambda$ independent):
$$\tilde{F} = RF \text{ with } R^{-1} k R = k$$
so then we can check that everything stays the same since $$\tilde{F}^{-1} k \tilde{F} = F^{-1} R^{-1} k R F = F^{-1} k F$$
But then this gives us 
$$\tilde{F}_{1} = \tilde{ U} \tilde{F} \implies R_{1} F_{1} = \tilde{U} RF \text{ or } UF = F_{1} = R_{1}^{-1} \tilde{U} RF$$
this results in
$$\tilde{U} = R_{1} U R^{-1}$$
and analogously for $\tilde{V}$



Next Backlund-Trafos for finding more solutions
$$$
