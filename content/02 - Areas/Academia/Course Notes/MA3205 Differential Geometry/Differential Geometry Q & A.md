---
publish: true
created: 2025-02-07T10:17:05.000+01:00
modified: 2026-06-10T19:12:41.203+02:00
tags:
  - academia
---

- In what situations can we extend tangential vectors at $T_{p} M$ to an area?
  - Given a curve we can extend a vector $v \in T_{p} M$ along $\gamma$ using parallel transport. This gives one vector on every point $\gamma(t)$. Starting with unit $v$ gives us unit vector, and orthogonal vectors also stay orthogonal. So an ON Basis can be moved around this way.
  - Given a vector $v \in T_{p} M$ we want to extend it to an Area around $p$ say $U$. Given $v$ has a basis representation using the gaus basis. Meaning we can extend it to some neighbourhood by defining a vector field $V = \sum\limits v_{k} \del_{k}$.
    - Note that for example we do this when defining $\nabla$ on curves, but the extension doesnt matter
    - We can also extend a vector field on a curve to a vectorfield in the neigbourhood of a curve. In a similar way.
      - A strategy we used for this is also to define our basis in a useful way by setting $\del_{1} = \gamma'$ and the rest be orthonormal to this. Then express the vector field on $\gamma$ by this basis and extend with constant coefficients in this basis.
- How can I think of the Ricci Curvature as a trace of some Matrix?
  - Given a Tensor of Rank 3 we can think of a contraction as fixing two indecies and getting a matrix.
