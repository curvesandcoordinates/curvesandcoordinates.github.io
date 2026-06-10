---
publish: true
created: 2026-02-08T21:54:46.283+01:00
modified: 2026-06-10T19:14:51.292+02:00
tags:
  - thoughts
---

We want to consider flows on discrete curves $\gamma: I \to \mathbb{CP}^{1}$. For this we note that $\mathbb{CP}^{1} \cong \faktor{\C^{2}}{\sim}$ using the standard projective equivalence embedding (See [[Complex Projective Line]] for more Info). This allows us to see $\gamma$ as an embedding of some curve $\Gamma: I \to \C^{2}$ choosing some normalization. This can be made rigours

> [!definition|\*] Lifting Projective Curves and Notation for Cross-Ratios
> Let $\gamma: I \to \mathbb{CP}^{1}$ we then denote the embedding of this into $\C^{2}$ by
> $\Gamma_{k} = \lambda_{k} \begin{pmatrix}\gamma_{k} \\ 1\end{pmatrix}$
> in the case of $\gamma_{k} = \infty$ the lifting is $\Gamma_{k} = \lambda_{k} \begin{pmatrix}1 \\ 0 \end{pmatrix}$. This gives us freedom in scaling though, which is why we only consider the canonical embedding as the curve with $\det(\Gamma_{k}, \Gamma_{k+1}) = 1$
> Using this we get a proportionality constant
> $u_{k} = \det(\Gamma_{k-1}, \Gamma_{k+1})$
> from this we find the following nice formular
> $\Gamma_{k+1} = u_{k} \Gamma_{k} - \Gamma_{k-1}$
> and
>
> $$$Q_{k} = \mathrm{cr}(\gamma_{k-1}, \gamma_{k}, \gamma_{k+2}, \gamma_{k
> 1}) = \frac{1}{u_{k} u_{k+1}}$$
> $$$

Keep in mind that the way to read this definition is to think of $\det(\Gamma_{k}, \Gamma_{k+1}) = 1$ as saying that every consequtive set of points on the curve must be linearly independent. which then forces the nice formula since they must make a basis. The formula for $Q_{k}$ comes fromt the useful trick of writing the cross-ratio as a determinant fraction
$\mathrm{cr}(a, b, c, d) = \frac{\det(a, b) \det(c, d)}{\det(b, c) \det (d, a)}$
meaning the $u_{k}$ are in general the only real freedom we have and they encode the “projective curvature”

We now want to consider Flows on these embedded curves, since these are just curves in $\C^{2}$. We can first note that we have a set of linearly independent variables
$\Gamma \quad \Gamma_{1} - \Gamma_{\bar{1}}$
We can also note that $\det(\Gamma, \Gamma_{1} - \Gamma_{\bar{1}}) = 2$. This allows us to write for any given flow
$\dot \Gamma =  A \Gamma + B (\Gamma_{1} - \Gamma_{\bar{1}})$
choosing the constant nicely we can express this as
$\dot \Gamma =  \alpha \Gamma + \frac{\beta}{u} (\Gamma_{1} - \Gamma_{\bar{1}})$
Since we choose the curve to be normalized by $\det(\Gamma, \Gamma_{1}) = 1$ we can easily calculate that
$0 = \frac{d}{dt} \det(\Gamma, \Gamma_{1}) = \det(\dot \Gamma, \Gamma_{1}) + \det(\Gamma, \dot \Gamma_{1})$
calculating this out brings us to the following restriction

> [!definition|\*] Flows on the Embedded Curves
> For a given discrete curve $\gamma: I \to \mathbb{CP}^{1}$ and its embedding into $\C^{2}$, $\Gamma$ any flow on $\Gamma$ defined by
> $\dot \Gamma =  \alpha \Gamma + \frac{\beta}{u} (\Gamma_{1} - \Gamma_{\bar{1}})$ has to satisfy
> $\alpha_{1} + \alpha = \beta - \beta_{1}$

From this restriction we get a more general lemma

> [!lemma|\*]
> The quantities $u$ and $Q$ evolve under a flow $\dot \Gamma =  \alpha \Gamma + \frac{\beta}{u} (\Gamma_{1} - \Gamma_{\bar{1}})$ with
>
> $$$\begin{align*}
> \dot u &= u (\alpha_{1} + \alpha_{\bar{1}} + \beta_{1} - \beta_{\bar{1}}) + 2 \left(\frac{\beta_{\bar{1}}}{u_{\bar{1}}} - \frac{\beta_{1}}{u_{1}}\right) \\
> \frac{{\dot Q}}{Q} &= 2 ((Q -1)(\beta_{1} - \beta) + Q_{1} \beta_{11} - Q_{\bar{1}} \beta_{\bar{1}})
> \end{align*}$$
> $$$

> [!lemma|\*] Evolution of Flow of Projective Curve
> Given a discrete curve $\gamma$, if its lift $\Gamma$ evolves with $\dot \Gamma =  \alpha \Gamma + \frac{\beta}{u} (\Gamma_{1} - \Gamma_{\bar{1}})$, then
> $\dot \gamma = \beta \Delta^{h} \gamma$

`\begin{proof}`
Simply note that in general we can calculate that

$$$\begin{align*}
\alpha \Gamma &= \alpha \begin{pmatrix}\lambda_{k} \gamma_{k} \\ \lambda_{k} \end{pmatrix} \\
\frac{\beta}{u} (\Gamma_{1} - \Gamma_{\bar{1}}) &= \frac{\beta}{u} \begin{pmatrix}\lambda_{k+1} \gamma_{k+1} - \lambda_{k-1} \gamma_{k-1} \\ \lambda_{k+1} - \lambda_{k-1}\end{pmatrix}
\end{align*}$$
using the identification
$$\gamma_{k} = \frac{\Gamma^{(1)}}{\Gamma^{(2)}}$$
`\end{proof}`


Let us now consider some examples of flows on a curve

> [!example|*] Simple Flows
> A simple example for a flow is choosing $\beta = 0$ giving us $\alpha_{1} = - \alpha$ thus giving us
> $$\dot \Gamma_{k} = (-1)^{k} \alpha \Gamma_{k}$$
> Since we have a freedom of scaling when embedding $\mathbb{CP}^{1}$ into $\C^{2}$ this simply corresponds to that and we cant see this flow on the curve in $\mathbb{CP}^{1}$.
> We can also choose $\beta = \frac{1}{2}$ and $\alpha = 0$ then we get the flow described by
> $$\dot \Gamma_{k} = \frac{1}{2 u_{k}} (\Gamma_{k+1} - \Gamma_{k-1})$$
> We can also describe the evolution of the other quantities as
> $$\begin{align*}
> \dot u = \frac{1}{u_{\bar{1}}} - \frac{1}{u_{1}} -2 \alpha u \\
> \dot Q = Q (Q_{1} - Q_{\bar{1}})
> \end{align*}$$
> For the curve in projective space we know that $\dot \gamma = \frac{1}{2} \Delta^{h} \gamma$ meaning that this flow is the tangential flow if the curve is arc-length parametrised.

We can also choose other simple situations like $\beta = Q + Q_{\bar{1}}$ and get discrete solutions to the mKdV equations.
$$$
