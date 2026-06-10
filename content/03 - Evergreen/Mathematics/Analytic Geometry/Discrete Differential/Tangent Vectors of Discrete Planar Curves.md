---
publish: true
aliases:
  - Edge-Tangent Vector
created: 2025-11-04T21:48:17.786+01:00
modified: 2026-06-10T19:14:51.279+02:00
tags:
  - thoughts
---

An important first choice we have to take in the theory of [[Discrete Planar Curves]] is the choice of what we consider the tangent vectors of our curves. We can on the one hand simply think of the $k$-th tangent vector to be the difference between $\gamma_{k+1}$ and $\gamma_{k}$. This only depends on the verticies and points in the direction of the edges. We can though also try and construct a vector that actually lies tangent to the entire combination of three vectors. This we will later call the Vertex Tangent vector.

The choice determines a lot and this theme of having an object be discretized in many different ways allowing us freedom can in some sense be seen as the strength of this theory. It allows us to pick apart concepts and intuitions that fall together in the continous case.

## Edge-Tangent Vector

The first and most intuitive definition for a tangent vector is to simply consider the vector pointing along the edge with base point being our $k$-th vertex of $\gamma$.

> [!definition|\*] Edge-Tangent Vector
> The Edge-Tangent Vector of a discrete Curve $\gamma: I \to \R^2$ is defined as the forward difference
> $S_{k} := \gamma_{k+1} - \gamma_{k}$
> or in our notation
> $S = \gamma_{1} - \gamma$
> Sometimes we will also write $\Delta \gamma_{k} := \gamma_{k+1} - \gamma_{k}$

This vector has many uses which are discussed further in the [[Discrete Planar Curves|general theory]]. One important point is that this difference to us is a good first order approximation of the derivative of our function. We know that normally the derivative would be a vector that is given essentially by the difference quotient - which is very similar to our object here

## Vertex-Tangent Vector

Another way to define a tangent vector is that we want the tangent vector to not point in the direction of the next vertex but rather to point tangent to the curve like in the discrete case. We should imagine for this that this definition of a tangent vector requires some information on the neighbours of our respective point. The aim is then to avarage the movement $\Delta \gamma_{\bar{1}}$ and $\Delta \gamma$. There are many different types of avarages and when discussing the [[Curvature of Discrete Planar Curves]] we will see that the most useful avarage in this situation is the harmonic mean given by

> [!remark|\*] Harmonic Mean
> Usually for $a, b$ we call the harmonic mean $H_{a, b}$ the following term
> $H_{a, b} = \frac{1}{\frac{1}{2}\left( \frac{1}{a} + \frac{1}{b} \right)} = 2 \frac{ab}{a + b}$
> which since we work in $\R^{2} \cong \C$ we can easily do for our vectors.

The intuition behind using this mean instead of the usual avarage is not only that it turns out to be the right definition, but also that we want shorter edge lengths around our $k$-th vector to be weighted more strongly in the vector. This converges nicely to what we would like it to converge to in the continous case, since there we can think of infinitesimal edge lengths.

We now define

> [!definition|\*] Vertex-Tangent Vector
> The vertex-tangent vector of a regular discrete curve $\gamma: I \to \C$ is given by
> $T:= \Delta^{h} \gamma := 2 \frac{\Delta \gamma \Delta \gamma_{\overline{1}}}{\Delta \gamma +\Delta \gamma_{\overline{1}}}$

The notion of required regularity here also plays a role, since nonregular curves that already begin to fail in having tangents even in the discrete case on non-regular points, like singularities.

> [!remark|\*]
> In case of an arc-length parametrized curve we have a simplification of the vertex-tangent vector
> $\Delta^{h} \gamma = 2 \frac{\Delta \gamma \Delta \gamma_{\overline{1}}}{\Delta \gamma + \Delta \gamma_{\overline{1}}} = 2 \frac{\Delta \gamma \Delta \gamma_{\overline{1}} \left(\Delta \gamma + \Delta \gamma_{\overline{1}}\right)}{\norm{\Delta \gamma + \Delta \gamma_{\overline{1}}}^{2}} = 2 \frac{{\Delta \gamma_{\overline{1}} + \Delta \gamma}}{\norm{\Delta \gamma + \Delta \gamma_{\overline{1}}}^{2}} = \frac{{S + S_{\overline{1}}}}{1 + \innprod{S}{S_{\overline{1}}}}$
