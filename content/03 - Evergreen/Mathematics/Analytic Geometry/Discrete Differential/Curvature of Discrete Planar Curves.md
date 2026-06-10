---
publish: true
created: 2025-11-05T18:25:30.000+01:00
modified: 2026-06-10T19:14:50.796+02:00
tags:
  - thoughts
---

We would like to use the usual intuition of curvature of planar curves. This is given in the contionus case by the inverse of the radius of the tangential circle at a point. To do this in the discrete case it seems useful to consider a circle based at a point that is somehow “best approximating” meaning it touches the adjacent points. These are then named Vertex Osculating Circles.

### Vertex Osculating Circles

We now consider the nicest and most direct definition

> [!definition|\*] Vertex Osculating Circles
> The vertex osculating circle of a regular discrete curve at a point $\gamma$ is the unique circle passing through $\gamma_{\bar{1}}, \gamma$ and $\gamma_{1}$, where we consider a line a degenerate circle.

Intuitionally we know that these circles are somehow approximating the second derivative in the continous sense, hence we would like to have some locality property. They seem to have this as they only depend on neighbouring points.

The following lemma is now a good beginning intution on the possibly arbitrary seeming definition of the [[Tangent Vectors of Discrete Planar Curves#Vertex-Tangent Vector|vertex tangent vectors]] in the discrete setting, as is connects our idea of curvature to them directly

> [!lemma|\*] Vertex Tangent Vector is Tangential to Osculating Circle
> The vertex tangent vector at $\gamma$ is tangential to the vertex osculating circle at $\gamma$

`\begin{proof}`
We will first state a theorem from classical geometry that is useful in this situation

> [!lemma|\*] Double Angle Formula in Three Cocyclic Points
> Given a triangle $ABC$, let $M$ be the circumcenter (meaning the center of the circumscribing circle) and let $\alpha = \angle(AB, AC), \beta = \angle(BC, BA), \gamma = \angle(CA, CB)$ then we have that
> $\angle(MB, MC)$

> [!corollary|\*] Radius of Circumscribing Circle
> For the Radius $r$ of the circumscribing circle and the edges of the triangle $a = CB, b, AC, c = BA$ we have
> $2r = \frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)}$

This allows us to do the following. Consider the points $\gamma_{\bar{1}}, \gamma, \gamma_{1}$ of a regular discrete curve and set $B = \gamma_{\bar{1}}, A = \gamma, C = \gamma_{1}$. Assume the edge $B-C$ is parallel to the real axis, then the angle of the tangent to the circulcircle at $A$ is given by
$\angle(-i, MA) = \alpha + 2\beta$
using the previous lemma and a simple diagram.
On the other hand the argument (meaning the complex angle) of $\Delta^{h} \gamma = 2 \frac{\Delta\gamma \Delta \gamma_{\bar{1}}}{\Delta \gamma + \Delta \gamma_{\bar{1}}}$ is simply given by
$\mathrm{arg}(\Delta^{h} \gamma) = \mathrm{arg}(\Delta\gamma) + \mathrm{arg}(\Delta \gamma_{\bar{1}}) - \mathrm{arg}(\Delta \gamma - \Delta \gamma_{\bar{1}})$
since we assumed to be oriented such that
$\mathrm{arg}(\Delta^{h} \gamma) = \angle(BC, BA) - \angle(BC, AC) = \beta - \gamma = \alpha + 2 \beta - \pi$
which means that the vectors are parallel.
`\end{proof}`

What notion of curvature do these circles bring then. We can calculate the radius of each vertex osculating circle by noting that the diameter is given by the above formula with $a = |BC| = | \Delta \gamma + \Delta \gamma_{\bar{1}}|$ meaning we get for the given angle of rotation $\phi_{k} = \angle(\Delta \gamma_{k-1}, \Delta \gamma_k)$ the formula
$r = \frac{{|\Delta \gamma + \Delta \gamma_{\bar{1}}}|}{2 \sin \alpha}$
and thus

> [!definition|\*] Vertex Osculating Circle Curvature
> $\kappa_{k} = \frac{2 \sin \phi_{k}}{|\Delta \gamma_{k} + \Delta \gamma_{k-1}|}$with $\phi_{k} = \angle(\Delta \gamma_{k-1}, \Delta \gamma_{k})$

This notion of curvature is perfectly fine since it intuitively gives us what we would want and seems to converge to our continous notion in the limit. The only problem we have when using this is that for arc-length parametrized curve this curvature can not become abtritraily big. In the most extreme cases it is bounded by $2$ due to simple geometry.

### Edge-Osculating Circles

We can consider the circles that touch three successive edges $S_{k-1}, S_{k}$ and $S_{k+1}$ and has its center at the intersection of the bisectors of the angles $\angle(- S_{k-1}, S_{k}) \quad \angle(-S_{k}, S_{k+1})$
This definition doesnt have the previous problems but it now doesnt seem as local and also can not be extended to higher dimensions. We can again by pure geometry calculate the radius and thus the curvature

> [!definition|\*] Edge Osculating Circle Curvature
> $\kappa_{k} = \frac{\tan\left( \frac{\phi_{k}}{2} \right) + \tan\left( \frac{\phi_{k+1}}{2} \right)}{| \Delta \gamma_{k} |}$

### Curvature for Arc-Length Parametrized Discrete Curves

Both the previous attempts at finding a good choice for Curvature have their limits. For an arc-length parametrized curve we will consider a mixture of both of them. Namely we take the circle with center at the vertex Center of curvature (center of the vertex osculating circles) that touches the two incident edges (in their midpoints). This means our points that our circle and the curve have in common are
$A = \gamma_{\bar{1}} + \frac{\Delta\gamma_{\bar{1}}}{2} \quad B = \gamma + \frac{\Delta\gamma}{2}$

In this case the radius is given by
$r = \frac{1}{2 \tan \frac{\phi}{2}}$
Which means

> [!definition|\*] Curvature of Arc-Length Parametrized Discrete Curve
> The curvature of a discrete arc-length parametrized curve is
> $\kappa = 2 \tan \frac{\phi}{2}$
> with $\phi = \angle(\Delta \gamma, \Delta \gamma_{\bar{1}})$

## Curvature Evolution under Tangential Flow

We now want to study how curvature changes over time when we let the curve flow along its tangential flow. Intuitively we know from the contious case that curvature $\dot \kappa = \del_{s} \kappa$ for $s$ parameter of the curve.

> [!lemma|\*]
> The Curvature $\kappa$ of a discrete arc-length parametrized curve $\gamma$ evolves with the tangential flow $\dot \gamma = \alpha \Delta^{h} \gamma$ as
> $\frac{\dot \kappa}{1 + \frac{k^{2}}{4}} = \frac{\alpha}{2} \left(\kappa_{1} - \kappa_{\bar{1}}\right)$

`\begin{proof}`
First, observe that $\Delta \dot{\gamma} \perp \Delta \gamma$ by simple calulcation, which means there is some $\mu \in \R$ such that $\Delta \dot{\gamma} = i \mu \Delta \gamma$. TO calculate $\mu$ we simply calculate
$\mu = \innprod{\Delta \dot \gamma}{\Delta \gamma} = \innprod{\alpha_{1} \frac{\Delta \gamma_{1} + \Delta \gamma}{1 + \innprod{\Delta \gamma_{1}}{\Delta \gamma}}- \alpha_{} \frac{\Delta \gamma_{} + \Delta \gamma_{\bar{1}}}{1 + \innprod{\Delta \gamma_{}}{\Delta \gamma_{\bar{1}}}}}{ i \Delta \gamma} = \alpha \left(\frac{\innprod{\Delta \gamma_{1}}{i \Delta \gamma}}{1 + \innprod{\Delta \gamma_{1}}{\Delta \gamma}}- \frac{\innprod{\Delta \gamma_{\bar{1}}}{i \Delta \gamma}}{1 + \innprod{\Delta \gamma_{}}{\Delta \gamma_{\bar{1}}}}\right)$
Now using the angles between the vectors we can begin to simplify
$\mu = \alpha \left(\frac{\sin \phi}{1 + \cos\phi} - \frac{\sin \phi_{\bar{1}}}{1 + \cos\phi_{\bar{1}}}\right) = \alpha \left( \tan \frac{\phi}{2} + \tan \frac{\phi_{1}}{2} \right) = \frac{\alpha}{2} (\kappa_{1} + \kappa)$
This can be read as a discrete verion of $\gamma^{''} = ik \gamma^{'}$

Now consider the expression
$\frac{\Delta \gamma}{\Delta \gamma_{\bar{1}}} = e^{i\phi}$
due to arc-length parametrization. We can simplify more by
$\frac{\Delta \gamma}{\Delta \gamma_{\bar{1}}} = e^{i\phi} = \frac{1+i \tan\left( \frac{\phi}{2} \right)}{1-i \tan\left( \frac{\phi}{2} \right)} = \frac{2 + i \kappa}{2 - i \kappa}$
This can be seen as a Möbius transformation which we know we can invert. Inverting simply gives us
$\kappa = \frac{2}{i} \frac{\Delta \gamma - \Delta \gamma_{\bar{1}}}{\Delta\gamma + \Delta \gamma_{\bar{1}}}$
from dotting this we get
$\dot\kappa = \frac{2}{i} \frac{\Delta \dot\gamma - \Delta \dot\gamma_{\bar{1}}}{\Delta\dot\gamma + \Delta \dot\gamma_{\bar{1}}} = 4 (\mu -\mu_{\bar{1}}) \frac{\Delta \gamma \Delta \gamma_{\bar{1}}}{(\Delta \gamma + \Delta \gamma_{\bar{1}})^{2}} = (\mu - \mu_{\bar{1}}) \left( 1 + \frac{\kappa^{2}}{4}\right)$
Giving us our formula when pluggin in $\mu$
`\end{proof}`

Note that $\phi = 2 \arctan \frac{\kappa}{2}$ and $\dot \phi = \frac{\dot \kappa}{1 + \left(\frac{\kappa}{2}\right)^{2}}$ simplifies the above lemma to a different version
$\dot \phi = \alpha \left(\tan \frac{\phi}{2} - \tan \frac{\phi_{\bar{1}}}{2}\right)$

## Discretizing Second Derivatives

In the smooth setup we know that $\gamma'' = i \kappa \gamma'$ holds for arc-legnth parametrized curves. Discretization of $\gamma'' = \Delta \Delta \gamma$ reveals similarly connected relationships to curvature:

- $\Delta \Delta \gamma = i \sin(\phi) \Delta^{h}\gamma$
- $\Delta \Delta \gamma = \frac{i \kappa}{2} (\Delta \gamma + \Delta \gamma_{\bar{1}})$
- The vertex center of curvature is given by $m = \gamma + \frac{i}{\kappa} \Delta^{h} \gamma$

### Curvature Via Normals

It might also be somewhat interesting for us to consider curve normals of a given discrete curve. We can naturally consider a couple options for Normal vectors

> [!definition|\*] Discrete Curve Normal Vectors
> Given a discrete curve $\gamma: \Z \to \C$ has multiple possible choices for normal vectors
>
> - **Edge Normals:** $n = i \Delta \gamma$
> - **Vertex Normals:** $n = i \Delta^{h} \gamma$
> - **Bisecting Normals:** Angular bisectors of verticies.

Interstingly normals can also help us ligitimse our formulae for curvature since the continous case also allows us to consider a translated curve via a normal field
$\gamma_{t} = \gamma + tN$
We can then consider how the arc length changes with respect to this offset $t$. We then find that
$\norm{\dot \gamma_{t}} = \norm{\dot \gamma} \cdot |1 - \kappa t|$

In the discrete case we shift the edges by some offset and notice that these edges then can always be extended to construct a new curve that looks the same but has higher edge-length. We can then see that here
$\norm{\Delta\dot\gamma_{t}} = \norm{\Delta  \gamma} \cdot \left|1 - t \frac{\tan \frac{\phi_{1}}{2} + \tan \frac{\phi}{2}}{\norm{\Delta \gamma}}\right|$
We can also consider some sort of vertex curvature in this way, by picking a direction at one vector and shifting into that direction by t. Then the rest of the vertex shifted curve is uniquely determined in general. Here we find that
$\norm{\Delta\dot\gamma_{t}} = \norm{\Delta  \gamma} \cdot \left|1 - 2t \frac{\cos \psi}{\norm{\Delta \gamma}}\right|$
where $\psi$ is the angle between the shift vector and the edge we begin at.

### Fundamental Theorem of Planar Curves

> [!theorem|\*] Fundamental Theorem of Planar Curves
> The discrete curvature function $\kappa$ determines an arc-length parametrized discrete curve uniquly up to euclidean motions.

`\begin{proof}`
Given $\kappa$ fix some $\gamma_{0}$ and the direction of $\Delta \gamma_{0}$. THen $\gamma$ is determined by the recursive relation
$\gamma_{k+1} = \gamma_{k} + \Delta \gamma_{k-1} \left(\frac{2 - i \kappa}{2 + i \kappa}\right)$
`\end{proof}`

The uniqueness is more simple here since we know that the position and rotation of our curve is given by the fixed $\gamma_{0}$ and $\Delta \gamma_{0}$.
