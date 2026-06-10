---
publish: true
created: 2024-04-09T23:07:27.980+02:00
modified: 2026-06-10T19:14:51.748+02:00
tags:
  - thoughts
---

Consider the defining equation of the exponential function $y' = y$
with $y(0) = 1$. We know that here the solution is uniquely determined to be $y(x) = e^{x}$. Can we generalise the idea of an exponential by considering the solutions to $y^{(n)} = y$
with $y(0) = 1$.

---

We can extend the solutions from the simple case by considering $y(x) = \sum\limits_{\omega} a_{\omega} e^{\omega x}$ then we can see that this gives us the equations

$$$\begin{align}
y^{(n)} &= \sum\limits_{\omega} a_{\omega} \omega^{n} e^{\omega x} = \omega^{n} \sum\limits_{\omega} a_{\omega} e^{\omega x} = \omega^{n} y \\
y(0) &= \sum\limits_{\omega} a_{\omega} = 1
\end{align}$$
The restriction on our $a_{\omega}$ doesn’t restrict us too much, but using the first equation we can see that $$\omega^{n} = 1 \implies \omega^{n} = e^{i 2 \pi k} \implies \omega = e^\frac{i 2 \pi k}{n}$$
where $k \in [0, n - 1]$ 

In general the solution thus looks like $$y(x) = \sum\limits_{k=0}^{n-1} a_{k} e^{\frac{i 2 \pi k}{n}x}$$

This gives a solution space $E$ of dimension $\dim E = n$. Since this post says that 
>From [Stack Exchange](https://math.stackexchange.com/questions/2047352/finding-the-dimension-of-the-solution-space-of-a-differential-equation)
>The solution space of any homogeneous linear differential equation of order $m$ (on an interval in which the Existence and Uniqueness Theorem applies) has dimension 𝑚mm. One way to see this is that you can parametrise the solutions by the values of $$𝑦,𝑦′,…,𝑦^{(𝑚−1)}$$at a particular $x$ in the interval: for any such initial condition there is exactly one solution to the differential equation that satisfies that initial condition.

We can that this solution is general enough to fill out the solution space, thus being the only solutions.

In a sense we can then say that a way to generalise the solutions to the given differential equation are convex combinations of $e^{\frac{i 2 \pi k}{n}x}$.
$$$
