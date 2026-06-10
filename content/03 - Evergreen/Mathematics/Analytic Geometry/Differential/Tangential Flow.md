---
publish: true
created: 2026-01-28T14:04:29.000+01:00
modified: 2026-06-10T19:14:50.697+02:00
tags:
  - thoughts
---

In the context of Differential Geometry we consider some [[Flow CIT413033 |flow]] on a planar curve $\gamma: I \to M$ where $M$ is some manifold. We know that a tangential flow then is a map such that

$\theta: T \times M \to M$
has the property that
$\del_{t} \theta(\cdot, \gamma(s)) = d_{p} \gamma$
meaning that at every point of our curve our flow would push the curve in the tangential direciton. Normally when considering a curve we dont care about how the flow maps on the entire manifold and thus we tend to write
$\tilde\theta: T \times J \to M , \quad (t, s) \mapsto \theta(t, \gamma(s))$
