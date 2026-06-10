---
publish: true
created: 2026-02-10T17:08:00.102+01:00
modified: 2026-06-10T19:14:51.328+02:00
tags:
  - thoughts
---

A useful surface theoretic transformation is given by the Spin-Transform which locally rotates our surface in a way that is still integrable. We use the view of [[Quaternions in Differential Geometry]] which identifies $\R^{3}$ with $\mathrm{Im}(\mathbb{H})$. We locally encode for a given $\lambda \in \mathbb{H}$ a strech rotation around the imaginary part by conjugation
$z \mapsto \overline{\lambda} z \lambda$
Taking some map $f$ we can locally deform it by considering the equation
$dg = \overline{\lambda} df \lambda$
This is not in general integrable, since the differential form is not necessarily closed. If we have isothermic $f$ we can set $\lambda = f^{*} \pm 1$ and automatically get the integrability property, telling us that we have two canonical choices which give so-called [[Bonnet Pairs]].

## Discretization

We now want to take this transform and find a discrete description of this.

> [!definition|\*] Normal Transport Quaternions
> Given a discrete net $f: \Z^{2} \to \R^{3} \cong \mathrm{Im}(\H)$ together with an edge constraint Gauss map $n: \Z^{2} \to S^{2}$ we can define the **normal transport** quaternions by
>
> $$$\begin{align*}
> \phi := \tau + (f_{1} - f) \\
> \psi := \eta + (f_{2} - f) \\
> \end{align*}$$
> with $\tau, \eta \in \R$ such that
> $$n_{1} = - \phi^{-1} n \phi \quad n_{2} = - \psi^{-1} n \psi$$
> $$$

Now note that this simply describes the relationship of normal vectors along a surface. The Normal transport has two types of Holonomy or compatability

$H = \Phi \Psi_{1} \overline{\Phi_{2}} \overline{\Psi}, \quad A = \Phi + \Psi_{1} - \Phi_{2} - \Psi$
Which describe the curvature of our Normals and if the edges actually close up. If $A$ is real then we know that our edges must close up since the imaginary components of the Transports cancel out.

This is such a rigid system that we can actually reconstruct the whole normal vector field by one vector using the Holonomy in the following way

> [!lemma] Reconstructing Normals from Holonomy
> Given a discrete net $f$ with normal transport for which the multiplicative holonomy $H$ has non-zero imaginary component. Then up to sign $n$ is given by the normalized imaginary pard of the holonomy at each vertex

`\begin{proof}`
We know that given the holonomy we want for any vector
$n = H^{-1} n H$
since this is a rotation on the right side by a quaternion along the axis of $\mathrm{Im}(H)$ we know that $n \mid \mid \mathrm{Im}(H)$ and thus determined up to sign.
`\end{proof}`

### Local Spin Transforms using Normal Transport

Now we can use this construction to define spin transforms locally in the following way

> [!definition|\*] Discrete Spin Transform
> Given a discrete net $f$ with normal $n$ and normal transport $\phi, \psi$. For a map $\lambda: \Z^{2} \to \H$ define new normal transports
> $\tilde{\Phi} = \overline{\lambda} \Phi \lambda_{1}, \quad \tilde{\Psi} = \overline{\lambda} \Phi \lambda_{2}$
> Then if the additive holonomy $\tilde{A}$ is real then we can generate $\tilde{f}$ using $\tilde{f}_{1} - \tilde{f} = \mathrm{Im}(\tilde{\Phi})$ and $\tilde{f}_{2} - \tilde{f} = \mathrm{Im}(\Psi)$ and
> $\tilde{n} = \lambda^{-1} n \lambda$
> is a new discrete net with normals that satisfy the edge constaint and $\tilde{\Phi}$ and $\tilde{\Psi}$ are the normal transport. The pair $\tilde{f}$ and $\tilde{n}$ are called the spin transform of $f, n$.
