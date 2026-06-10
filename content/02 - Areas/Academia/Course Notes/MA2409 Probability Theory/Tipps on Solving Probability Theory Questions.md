---
publish: true
created: 2024-11-20T13:23:36.000+01:00
modified: 2026-06-10T19:12:40.370+02:00
tags:
  - academia
---

- Symmetric Distributions are good for counter examples.

- Distributions to know
  - Bernouli
    - Parameter: $p \in [0,1]$
    - Density: $P(X = 1) = p$ and $P(X = 0) = 1 - p$
  - Binomial
    - Parameters: $n \in \N \quad p \in [0,1]$
    - Density$P(X = k) = \begin{pmatrix}n \\ k\end{pmatrix} p^{k} (1-p)^{k}$
  - Exponential
    - Parameter: $\lambda > 0$
    - Density: $f(x) = \mathbb{1}_{[0,\infty]}(x) \cdot \lambda e^{- \lambda x}$
  - Normal
    - Parameters: $\mu \in \R \quad \sigma^{2} > 0$
    - Density: $f(x) = \frac{1}{\sigma \sqrt{2 \pi}} e^{\frac{-1}{2} \left( \frac{x-\mu}{\sigma} \right)^{2}}$
  - Poissing
    - Parameters: $\lambda \in (0, \infty)$
    - Density: $P(X = k) = \frac{\lambda^{k} e^{-\lambda}}{k!}$

- Dom Convergence for finding Limits

- CDF $\implies$ PDF using the chain rule if RVs are composed (like in $\max \set{X, Y}$)

- Right Continuity is important for the CDF

- Write the Radon-Nykodin derivative as $d \mu = f d \lambda$ instead of $\frac{d \mu}{d \lambda} = f$

- When probing limits think of how to get to dom. convergence
  - Specifically if you have a limit of a probability so $\lim f \cdot P(A)$ then try constructing $Y = f \cdot \mathbb{1}_{A}$ since then $\mathbb{E}(Y) = f \cdot P(A)$ so our limit is an expectation which is an intergral.

- Jensen seems imporntant and useful: $f(\mathbb{E}(X)) = \mathbb{E}(f(X))$

- Maybe standard but $|X|^{k} \leq 1 + |X|^{n}$ for $1 \leq k \leq n$

- Tonelli Changes integration bounds so keep in mind that you can swap integrals over the entire domain but must first rewrite with indicator functions so for example$\begin{align*}
  \int^{\infty}_{0} \int_{0}^{x} f(x, y) dy dx 
  &= \int^{\infty}_{0} \int_{0}^{\infty} f(x, y) \mathbb{1}_{\set{y < x}} dy dx \\
  &=  \int^{\infty}_{0} \int_{0}^{\infty} f(x, y) \mathbb{1}_{\set{y < x}} dy dx \\
  &=  \int^{\infty}_{0} \int_{0}^{\infty} f(x, y) \mathbb{1}_{\set{y < x}} dx dy\\
  &= \int^{\infty}_{0} \int_{y}^{\infty} f(x, y) dx dy
  \end{align*}$

- When proving convergence stuff try to work with almost sure convergence as it is simply convergence “per omega” in the reals and thus inherits properties like bolzano weierstraß and so on.

- Showing some stuff for subsequences is useful too. Specifically when convergence in probability is assumes we can use that $X_{n}\overset{\text{prob}}{\to} X \implies \exists \set{n_{k}} \subset \set{n}: X_{n_{k}} \overset{\text{a.s.}}{\to} X$ and stiff find some useful properties for $X$ by just using this subsequence.#
  - From analysis we know that subsequence + monotonicity implies convergence of the entire sequence

- When showing that a RN Derivative does not exist it might be useful to assume one exists and prove that it makes no sense.

- KEEP $\sigma$-Finiteness in mind!!!!!

- When using a property that is local in some way, meaning it only holds for small $x \in A_{\delta}$ we can always split up by the elements in our set and the elements outside of our set and hopefully show that the probability of being outside the event is bounded or goes to 0
  - A great example is finding a uniform bound for some uniformly continuous thing we want to find a bound $\epsilon$ for ${} |f_{n}(y) - f(x)|$. So we can use uniform continuity which say that for $|y-x| < \delta$ and split up

- Given Random Variables that are independent $X_{n}$ such that they converge in probability to $X$ then $X$ is almost surely a constant!!

- Proving convergence in probability can often amount to calculating integrals given a density

- When wanting to prove that the sum $\sum\limits X_{n}$ converges (meaning the sum of the random numbers) we can use borel cantelli and show that $X_{n} = 0$ infinitely often which suffices to show the sum converges.

- Note that the events $\set{X \neq Y} = \bigcup_{k} \set{|X-Y| > \frac{1}{k}}$

- To Prove a sequence of RVs doesnt converge almost surely we can use Borel Cantelli to show that some event for the $X_i$ happens infinitely often and then use the inverse triangle innequality to prove that $|X_{n} - X_{n-1}| > C$.

- MAYBE REMEMBER DIFFERENT CONTINUITY DEFINITION?????

- Remember $\sum\limits_{k=0}^{n} a_{k} = \frac{1-a_{n-1}}{1-a_{n}}$

- When calculating the exponential in characteristic functions it might be useful sometimes to demember $\exp(t) = \sum\limits_{k=0}^{\infty} \frac{t^{k}}{k!}$

- A discrete Random Variable is a countable sum of Indicator functions

- Convergence Rules for products might be useful
  - Given $X_{n} \overset{dist}{\to} X$ and $Y_{n} \overset{dist}{\to} c \in \R$ then $X_{n} + Y_{n} \overset{dist}{\to} X + c$
    - This implies that given $X_{n} \overset{dist}{\to} X$ and $Y_{n}- X_{n} \overset{dist}{\to} 0$ then $Y_{n} \overset{dist}{\to} X$
  - Given $X_{n} \overset{dist}{\to} X$ and $Y_{n} \overset{dist}{\to} c \in \R$ we get that $X_{n} Y_{n} \overset{dist}{\to} c X$

- Given $X$ such that $\Exp{X^{2}} = 0$ then $X = c \in \R$ almost surely

- When proving the conditions for Martingale Convergence it is sometimes useful to consider the variance or the 2nd Moment and use the fact that convergence of the second moment gives us that the supremum of the first moment is less than or equal to that convergence factor.

- Expectation has Product Independence for independent random variables

- The martingale Condition gives us that $\Exp{X_{n}} = \Exp{X_{m}}$ for any $n$ and $m$
