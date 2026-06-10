---
publish: true
created: 2026-02-09T23:07:16.521+01:00
modified: 2026-06-10T19:14:51.213+02:00
tags:
  - thoughts
---

In the theory of [[Discrete Surfaces and their Curvature]] one might ask what surfaces need to have as a property to be well behaved. We see this property exactly in the last Lemma in which we saw that the only way to have our normal relation between the fundamental forms hold is if and only if $II$ is symmetric.

We will want to consider only shapes with symmetric $II$ but will generalise a little to give us a general constraint that needs to be satified and then prove that this constaint will give us the best shapes. We call these Edge Constraint Nets.

> [!definition|\*] Edge-Constraint Net
> We call a pair of quadrilateral nets $(f, n): \Z^{2} \to \R^{3} \times S^{2}$ and edge-constraint net if it satisfies the following:
> For each pair of points of $f$ connected by an edge, the avarge of the normals at those points is perpendicular to the edge, meaning for $i = 1, 2$ we get
> $f_{i} - f \perp \frac{n_{i} + n}{2}$

this turns out to be useful since

> [!lemma|\*] Edge-Constraint Nets are Well-Behaved
> Consider a single quad from an edge-constraint net $(f, n)$ then the second fundamental form is symmetric

`\begin{proof}`
In the above notation we want to show that $\innprod{f_{x}}{n_{y}} - \innprod{n_{x}}{f_{y}} = 0$. As $N \perp n_{x}, n_{y}$ this quantity is the same when unprojected meaning we can think of $f_{x}$ as $f_{x} = \frac{f_{1} - f + f_{12} - f_{2}}{2}$. Expanding out the unprojected
$\innprod{f_{x}}{n_{y}} - \innprod{n_{x}}{f_{y}}$
we can find that is is a constant multiple of the sum of edge-constraint conditions once around the quadrilateral which vanishes as it vanishes on each edge by assumption.
`\end{proof}`

For these well-behaved nets we can find that the continous case is mirrored entirely

> [!lemma|\*] Smooth Relations for Edge-Constraint Nets
> The following smooth relations hold true for edge-constraint nets as well
>
> 1. $K = \kappa_{1} \kappa_{2} = \frac{\det(II)}{\det(I)}$
> 2. $H = \frac{\kappa_{1} + \kappa_{2}}{2}$
> 3. $III - 2 H II + K I = 0$
> 4. $A(f, f)^{2} = \det(I)$

## More

A special case of edge constraint nets is given by [[Cirular Nets]].
