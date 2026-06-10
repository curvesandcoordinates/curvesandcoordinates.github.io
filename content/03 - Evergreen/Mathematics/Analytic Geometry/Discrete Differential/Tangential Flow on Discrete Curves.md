---
publish: true
created: 2026-01-28T14:15:45.000+01:00
modified: 2026-06-10T19:14:51.244+02:00
tags:
  - thoughts
---

When discretizing the whole concept of [[Tangential Flow]] in the discrete case we need to make some small modifications. First we consider flows to be defined in the following way:

> [!definition|\*] Flow on Discrete Curves
> A flow on a discrete curve $\gamma: I \to \R^{n}$ is a smooth deformation $\gamma_{t}: I \times J \to \R^{n}$ with $\gamma_{0} = \gamma$ and $0 \in J \subset \R$. The deformation should be given by the (prescribed) vector field
> $v := \dot \gamma = \frac{d}{dt} \gamma_{t}: I \times J \to \R^{n}$
> describing the evolution of $\gamma$.

This means that we can imagine a discrete vectorfield on out discrete curve and let it evolve in that direction. To now consider a tangential flow we will want to use as a vector field the [[Tangent Vectors of Discrete Planar Curves]] which are two-fold. It turns out due to a theorem we will prove shortly that the choice of the [[Tangent Vectors of Discrete Planar Curves#Vertex-Tangent Vector|vertex tangent vectors]] is the most useful. This brings us to

> [!definition|\*]  Tangential Flow
> A tangential flow for an Arc-Length Parametrized curve $\gamma: I \to \C$ is a flow whose vector field points in the direction of the vertex tangent vectors and that preserves the arc-length parametrization.

this means we can consider different parametrizations of [[Discrete Planar Curves]] as simply results of a tangential flow of the Arc-Length Parametrized curve $\gamma$.

A very useful conceptual thing is the direct connection between the tangent vector field and the tangential flow. This is made explicit by the following theorem

> [!theorem|\*] Discrete Tangential Flows are Multiples of Vertex Tangent Field
> Every tangential flow is a constant multiple of the vertex tangential vector field.
> $\dot \gamma = \alpha \Delta^{h} \gamma$
> for some constant $\alpha$

`\begin{proof}`
The fact that we want to preserve arc-length parametrization can be written as
$0 = \frac{\del}{\del t} \norm{\Delta \gamma} = \frac{\del}{\del t} \innprod{\Delta \gamma}{ \Delta \gamma} = 2 \innprod{\frac{\del}{\del t} \Delta \gamma}{ \Delta \gamma}$
this simplifies to
$0 = 2 \innprod{\dot \gamma_{1} - \dot \gamma}{\Delta \gamma} = 2 \innprod{\alpha_{1} \Delta^{h} \gamma_{1} - \alpha \Delta^{h} \gamma}{\Delta \gamma}$
but we can see that
$\innprod{\Delta^{h} \gamma}{ \Delta \gamma} = \innprod{\frac{{\Delta \gamma + \Delta \gamma_{\overline{1}}}}{1 + \innprod{\Delta \gamma}{\Delta \gamma_{\overline{1}}}}}{\Delta \gamma} = \frac{\innprod{\Delta \gamma }{\Delta \gamma} +  \innprod{\Delta \gamma_{\bar{1}}}{\Delta \gamma}}{1 + \innprod{\Delta \gamma}{\Delta \gamma_{\overline{1}}}} = \frac{1 +  \innprod{\Delta \gamma_{\bar{1}}}{\Delta \gamma}}{1 + \innprod{\Delta \gamma}{\Delta \gamma_{\overline{1}}}} = 1$
similarly we get that
$\innprod{\Delta^{h} \gamma_{1}}{ \Delta \gamma} = 1$
Giving us
$0 = 2\alpha_{1} \innprod{\Delta^{h} \gamma_{1}}{\Delta \gamma} - 2\alpha \innprod{\Delta^{h}\gamma}{ \Delta \gamma} = 2 \alpha_{1} - 2 \alpha \implies \alpha_{1} = \alpha$
meaning that $\alpha$ is constant.
`\end{proof}`

> [!remark|\*]
> A straight line (arc - length parametrized) can no longer be characterized by a constant (vertex tangent vector)
> We can think of an example that has constant tangent vector but isnt a straight line, namely a Zigzag (nice example to draw)
