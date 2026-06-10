---
publish: true
created: 2024-07-27T16:36:35.887+02:00
modified: 2026-06-10T19:12:37.484+02:00
tags:
  - academia
---

# Flow on Manifolds

A Flow is a map $\theta: U \times M \to M$ with $U$ an open neighbourhood of $0 \in \R$. The flow should be seen as induced by a Vector Field $X \in \mathfrak{X}(M)$ as the solutions to the differential equations implied by the field. We can always find a so-called global flow, which is simply a flow defined on $\R \times M$.

The properties of this flow are

- $\theta(t, \theta(s, p)) = \theta(t +s, p)$
- $\theta(0, p) = p$

Now given this, the intuition one should have is that a given flow $\theta$ is a collection of different homotopic diffeomorphisms $\set{\theta_{t}=\theta(t, \cdot)}$ where $\theta_{0}= id_M$ and any $\theta_{t}$ moves along the vector field for a time $t$.
