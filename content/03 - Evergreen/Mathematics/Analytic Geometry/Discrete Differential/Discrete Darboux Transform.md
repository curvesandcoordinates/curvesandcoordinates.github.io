---
publish: true
created: 2026-02-09T15:06:45.000+01:00
modified: 2026-06-10T19:14:50.895+02:00
tags:
  - thoughts
---

The [[fundamental theorem of planar curves on the complex projective line]] tells us that similar to the discrete planar curves we uniquely define a curve
$\gamma: \Z \to \mathbb{CP}^{1}$ by its Cross-Ratio which is why the intuition of considering this the “projective curvature” is so apt.

Connected to this we consider a transform that also keeps a specific Cross-Ratio in mind, namely the Darboux Transform:

> [!definition|\*] Darboux Transform
> Given a regular discrete Curve $\gamma: I \to \C P^{1}$. Then for any $\delta_{0} \in \C P^{1}$ there is a unique discrete curve $\delta$ via
> $cr(\gamma, \gamma_{1}, \delta_{1}, \delta) = \mu$
> and we call $\delta$ the Darboux transform of $\gamma$

We can think of this as taking the fundamental theorem and twisting it slightly to generate a related curve. This tends to look like an interesting offset.

Because of the way we generate the Darboux transform we can definitely see that this Cross-Ratio of a curve which is “projective curvature” must somehow be related between the two curves. This is done in the following Lemma:

> [!lemma|\*] Cross Ratio Connection between Curve and Darboux Transform
> Let $\gamma$ be a discrete curve with Darboux transform $\tilde{\gamma}$, define
> $s_{k} = cr(\gamma_{k-1}, \delta_{k}, \gamma_{k+1}, \gamma_{k})$
> then
> $\tilde{Q_{k}} = Q_{k} \frac{s_{k}}{s_{k+1}}$
> $(1-\mu) Q_{k} = \frac{s_{k+1}}{(1 - s_{k})(s_{k+1} - 1)}$

`\begin{proof}`
Done in the exercises, but it doesnt require much except for visualization that $\frac{s_{k}}{s_{k+1}}$ can be written differently.
`\end{proof}`

We would also like to understand what aspects of a curve get preserved under the Darboux transform. For preiodic curves we can use the fact that a Möbius transformation in general has two fixed points (since the Eigenspace of the representing matrix is in general two dimensional and multiples are identified). This gives rise to the following

> [!lemma|\*] Closed Curves get mapped to Closed Curves under Darboux
> Given a parameter $\mu \in \C$ we can in general pick two distinct Darboux transforms (by picking the starting value $\delta_{0}$) such that the Darboux transform of a periodic curve $\gamma$ is also periodic

^dee278

`\begin{proof}`
Note that for a closed curve $\gamma$ with period $n$ we can consider the Darboux transform $\tilde\gamma$ and note that the map sending
$H: \tilde{\gamma_{0}} \to \tilde{\gamma_{n}}$
is a Möbius transformation. This has in general two fixed points which would amount to finding a closed Darboux transform.
`\end{proof}`

This lemma can be read as [[Time Discrete Evolution of Darboux Transforms]]

## Euclidean Discrete Darboux Transform

We now want to consider the Darboux transform in the smooth case for a second and see what we can define in the euclidean world.

First note that in the smooth case we have the following:

> [!definition|\*] Smooth Darboux Transform and Tractrix
> Let $\gamma: I \to \R^{n}$ be a smooth arc-length parametrized curve. $\widehat{\gamma}$ is called a Tractrix of $\gamma$ if and only if $v = \widehat{\gamma} - \gamma$ satisfies:
>
> - $\norm{v} = const$
> - $\widehat{\gamma}' \mid \mid v$
>
> If $\widehat{\gamma}$ is a Tractrix for a curve $\gamma$, then the curve $\tilde{\gamma} := \gamma + 2v = \gamma + 2(\widehat{\gamma} - \gamma)$ is called a Darboux transform of $\gamma$.

This euclidean view of a Darboux transform differes slightly from the complex one. Namely one is real, the other is complex. Secondly we also have that this real version depends continously on $v \in \R^{n}$ while the other has constant time steps for a fixed cross-ratio $\mu$.

We can formualte the following

> [!lemma|\*]
> The Darboux transform of an arc-length smooth parametrized curve is again arc-length parametrized.

`\begin{proof}`
$\innprod{\tilde{\gamma}'}{\tilde{\gamma}'} = \innprod{\gamma' + 2 v'}{\gamma' + 2 v'} = 1 + 4 \innprod{\gamma'}{v'} + 4 \innprod{v'}{v'} = 1 + 4 \innprod{\gamma' + v'}{v'} = 1 + 4\innprod{\widehat{\gamma}'}{v'} = 1$
`\end{proof}`

### Discretize this!

> [!definition|\*] Discrete Darboux Transform in the Euclidean Case
> Let $\gamma$ be an arc-length parametrized discrete curve. Then $\tilde{\gamma}$ is called a Darboux transform of $\gamma$ if $\norm{\tilde{\gamma}_{1} - \tilde{\gamma}} = 1$, and $\norm{\tilde{\gamma} - \gamma} = l = cost$ and $\gamma, \gamma_{1}, \tilde{\gamma}_{1}, \tilde{\gamma}$ do not form a parallelogramm.
> The Curve $\widehat{\gamma} = \frac{1}{2} (\gamma + \tilde{\gamma})$ is called the discrete tractrix

> [!remark|\*]
>
> - One can see $\Delta \gamma + \Delta \tilde{\gamma} \mid (\tilde{\gamma} - \gamma) + (\tilde{\gamma}_{1} - \gamma_{1})$
> - $cr(\gamma, \gamma_{1}, \tilde{\gamma}_{1}, \tilde{\gamma}) = \frac{1}{l^{2}}$
> - One can show that the Davoux Transform commutes with tangential and (m)KdV flows.

We have already gotten the intuition that a darboux transform with parameter $\mu = -1$ is like homolorphic extension is given by.

> [!definition|\*]
> a map $z: \Z^{2} \to \C$ with $cr(z_{k,l}, z_{k+1,l}, z_{k+1, l+1}, z_{k, l+1}) = -1$ is called a discrete holomorphic map. More general the cross-ratio can be set to be $\frac{\alpha_{k}^{2}}{\beta_{l}^{2}}$ and still have everything we would like for this holomorphic maps.
