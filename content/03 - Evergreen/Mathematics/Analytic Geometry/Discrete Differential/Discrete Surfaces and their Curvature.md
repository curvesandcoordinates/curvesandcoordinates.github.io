---
publish: true
created: 2026-02-09T22:58:03.654+01:00
modified: 2026-06-10T19:14:51.159+02:00
tags:
  - thoughts
---

We will now in the context of discrete differential geometry also try to work in the basic surface theory concepts from the smooth case. To do this ween need to have some these concepts in mind (I will not write them down here but alway try to refer to them when needed).

In the smooth case we consider parametrizations fo a surface and thus it is useful to consider a map
$f: \Z^{2} \to \R^{3}$
This though doesnt allow for a canonical way to define most elements we care about (except the case of triangle meshes, which seem to already contain maximal information and not require a parametization but rather are all parametrizations).

## Defining Partials and Normals

One measurement we can canonically consider though is a measure of the area of one quadrilateral of our surface. If the quad $f, f_{1}, f_{12}, f_{2}$ was planar we could simply calculate
$A(f) = \frac{1}{2} \det(f_{12}-f, f_{2}- f_{1}, N)$
where $N = \frac{(f_{12} - f) \times (f_{2}- f_{1})}{\norm{(f_{12} - f) \times (f_{2}- f_{1})}}$ is the normally defined face normal. This comes from the definition of the determinant. We can add in a term and transform this to
$\frac{1}{2} \det(f_{12}-f, f_{2}- f_{1}, N) = \det \left(\frac{f_{1} - f + f_{12} - f_{2}}{2}, \frac{f_{2} - f + f_{12} - f_{1}}{2}, N\right)$
by symmetrizing the determinant. Given this we define the following suggestively
$f_{x} = \frac{f_{1} - f + f_{12} - f_{2}}{2} \quad f_{y} = \frac{f_{2} - f + f_{12} - f_{1}}{2}$
since then we can notice the similarity to the continous case as
$A(f) = \det(f_{x}, f_{y}, N)$
We take this to be the general definition even in the non-planar case:

> [!definition|\*] Area Element and Tangent Vectors
> Let $f: \Z^{2} \to \R^{3}$ be a map with non-vanishing edges and let $N: (\Z^{2})^{*} \to S^{2}$ be a unit vector per quadrilateral. denote the projection perpendicular to $N$ with $\pi_{N}(x) := x - \innprod{x}{N}N$ and set
> $f_{x} = \pi_{N}\left(\frac{f_{1} - f + f_{12} - f_{2}}{2}\right) \quad f_{y} = \pi_{N} \left(\frac{f_{2} - f + f_{12} - f_{1}}{2} \right)$
> Then the area element of $f$ with respect to the chosen $N$ is given by
> $A(f) = \det(f_{x}, f_{y}, N)$

Now a couple of things to keep in mind here:

- The Notation $(\Z^{2})^{*}$ denotes the dual graph of the lattice, meaning we define the normals on the faces of $\Z^{2}$
- Choosing $N$ is not done for us here, in the case of the canonical choice from above we can leave the projection out of the formulae as we saw but for now we have built into this structure the possible choice for different Face normals than defined before.
- The definition of $N$ on the faces means that we don’t per se have information on the vertices. This is important in defining the fundamental forms, since these require normals on the vertex. We will make do by simply defining a new vertex normal that is also freely chosen and show later that the vertex normal and face normal can be “compatible”.

## Fundamental Forms and Curvature

We now want to define the fundamental froms in the discrete case. This is done very easily by

> [!definition|\*] Fundamental Forms for Discrete Surfaces
> Let $f: \Z^{2} \to \R^{3}$ be a map with non-vanishing edges, $n: \Z^{2} \to S^{2}$ a map into the unit sphere and form $n_{x}, n_{y}, f_{x}, f_{y}$ as above then we have bilinear forms given by
>
> $$\begin{align*}
> $$

I &= \begin{pmatrix} \innprod{f\_{x}}{f\_{x}}  & \innprod{f\_{x}}{f\_{y}} \ \innprod{f\_{y}}{f\_{x}}  & \innprod{f\_{y}}{f\_{y}}\end{pmatrix} \\
II &= \begin{pmatrix} \innprod{f\_{x}}{n\_{x}}  & \innprod{f\_{x}}{n\_{y}} \ \innprod{f\_{y}}{n\_{x}}  & \innprod{f\_{y}}{n\_{y}}\end{pmatrix} \\
III &= \begin{pmatrix} \innprod{n\_{x}}{n\_{x}}  & \innprod{n\_{x}}{n\_{y}} \ \innprod{n\_{y}}{n\_{x}}  & \innprod{n\_{y}}{n\_{y}}\end{pmatrix}
\end{align\*}\$\$

> These are the first, second and third fundamental forms of the pair $(f, n)$

This is now a purely formal definitions but we can use them and the continous intuiton we have to get a hold of curvature information in the case of discrete surfaces

Using the discrete analog of the **Steiner Formula** we want to consider a parallel surface $f^{t} = f + tn$ for the above defined tuple $(f, n)$. Then
$A(f^{t}) = A(f + tn) = \det(f_{x} + tn_{x}, f_{y} + tn_{y}, N) = A(n) t^{2} + t \left(\det(f_{x}, n_{y}, N) + \det(n_{x}, f_{y}, N)\right) + A(f)$
We again see the half linear term to be the mixed area again, defined to be
$A(f, n) := \frac{\det(f_{x}, n_{y}, N) + \det(n_{x}, f_{y}, N)}{2}$
this means that
$A(f^{t}) = A(n) t^{2} + 2t A(f, n) + A(f) = A(f) \left( 1 + 2t \frac{A(f, n)}{A(f)} + t^{2} \frac{A(n)}{A(f)}\right)$
the similarity of this to the continous case gives us

> [!definition|\*] Discrete Mean and Gauss Curvature
> Given $f: \Z^{2} \to \R^{3}, n: \Z^{2} \to S^{2}$ and $N$ the face normals, one defines the mean curvature $H$ and the Gauss curvature $K$ by
> $H: \Z^{2} \to \R, \quad H = \frac{A(f,n)}{A(f)}$
> and
> $K: \Z^{2} \to \R, \quad K = \frac{A(n)}{A(f)}$

This entire construction is very dependent of the choice of $N$. We of course can consider the canonical choice of $N = \frac{f_{x} \times f_{y}}{\norm{f_{x} \times f_{y}}}$ but this isnt the only one. It turns out that this choice gives the maximal projected area but is not constant in the parallel family $f^{t}$. Thus keeping the Steiner-Formula motivates us to not pick the canonical $N$.

In the best case szenario we would want the choice
$N = \frac{n_{x} \times n_{y}}{\norm{n_{x} \times n_{y}}}$
but this isnt defined if $n_{x} \times n_{y}$ is vanishing. This leads us to the definition

> [!definition|\*] Canonical Face Normals
> Let $f: \Z^{2} \to \R^{3}$ and $n: \Z^{2} \to S^{2}$ be given. We define
> $n_{x} = \frac{n_{1} - n + n_{12} - n_{2}}{2} \quad n_{y} = \frac{n_{2} - n + n_{12} - n_{1}}{2}$
> and the face normal $N$ as a unit vector in $\span \set{n_{x}, n_{y}}^{\perp}$.

We can now use all of this and check this construction with some examples

> [!example|\*] Planar Surfaces
> Let $f: \Z^{2} \to \R^{3}$ be planar surface, then we know that without loss of generality we can assume that the surface lies in $\span \set{e_{1}, e_{2}}$. This would give us that $f_{x}, f_{y} \in \span \set{e_{1}, e_{2}}$. We can also easilily choose the intuitive $n = e_{3}$. Then we find that $N \in \R^{3}$
> $A(f, n) = \frac{\det(f_{x}, n_{y}, N) + \det(n_{x}, f_{y}, N)}{2} = \frac{\det(f_{x}, 0, N) + \det(0, f_{y}, N)}{2} = 0$
> and
> $A(n) = \det(n_{x}, n_{y}, N) = \det(0, 0, N) = 0$
> and thus
> $H = 0 \quad K = 0$

> [!example|\*] Discrete Sphere
> Let $f: \Z^{2} \to r S^{2}$ a sphere of radius $r > 0$ and $n = \frac{1}{r} f$ we can then see that
> $n_{x} = \frac{n_{1} - n + n_{12} - n_{2}}{2} = \frac{1}{r} f_{x} \quad n_{y} = \frac{n_{2} - n + n_{12} - n_{1}}{2} = \frac{1}{r} f_{y}$
> thus giving us
> $A(f) = \det(f_{x}, f_{y}, N) = r^{2} \det(n_{x}, n_{y}, N) = r^{2}A(n)$
> and
> $A(f, n) = \frac{\det(f_{x}, n_{y}, N) + \det(n_{x}, f_{y}, N)}{2} = \frac{2r A(n)}{2} = rA(n) = \frac{A(f)}{r}$
> This gives us
>
> $$$\begin{align*}
> H &= \frac{A(f, n)}{A(f)} = \frac{1}{r} \\
> K &= \frac{A(n)}{A(f)} = \frac{1}{r^{2}}
> \end{align*}$$
> $$$

Both of these examples match the continous case nicely.

## Relations of Fundamental Forms

We can also consider the relations that we showed, of the fundamental forms in the continous case. The main obstacle to using cayley-hamiltons theorem is that we dont have the guarantee that the anti-diagonal entries of the second fundamental form are symmetric, meaning we dont know if
$\innprod{f_{x}}{n_{y}} = \innprod{n_{x}}{f_{y}}$
which is given in the continous case.
It turns out that

> [!lemma|\*] Relation between Fundamental Forms
> Let $f, n: \Z^{2} \to \R^{3}$ and the face Normals $N$ be given. Then
> $III - 2 H II + K I = 0$
> holds if and only if $II$ is symmetric, meaning $\innprod{f_{x}}{n_{y}} = \innprod{n_{x}}{f_{y}}$.

`\begin{proof}`
Exercise of calculation.
`\end{proof}`

## What are well Baved surface

In the theory one might ask what surfaces need to have as a property to be well behaved. We see this property exactly in the last Lemma in which we saw that the only way to have our normal relation between the fundamental forms hold is if and only if $II$ is symmetric.

We will want to consider only shapes with symmetric $II$ but will generalise a little to give us a general constraint that needs to be satified and then prove that this constaint will give us the best shapes. We call these [[Edge-Constraint Nets]].
