---
publish: true
created: 2024-03-11T22:21:34.884+01:00
modified: 2026-06-10T19:14:51.744+02:00
tags:
  - thoughts
---

When we talk about binomial coefficients we often read them a "n choose k" which hints at the actual intuition behind them. They describe the combinatorial Quantity of how many possibilities there are to choose k objects from a set of n objects.

Mathematically the intuition is justified since, choosing k objects from n objects gives us:
$n \cdot (n - 1) \cdot (n - 2) \cdot (n - 3) \cdot \ldots \cdot (n - k + 1) = \frac{n!}{(n-k)!}$
The only thing missing now is that we implicitly don't really care about the order we choose objects. In our current calculation the choice (1, 2) from (1, 2, 3, 4) is different from the choice (2, 1) which is something we don't want.

Given a choice of k elements we can calculate how many possibilities there are to shuffle them by just calculating k!. Since we want to remove these shuffles (effectively ignoring order) we can just divide them out of our formular. So in the end we have:
$\begin{pmatrix}n  \\ k \end{pmatrix} = \frac{n!}{k! \cdot (n-k)!}$
