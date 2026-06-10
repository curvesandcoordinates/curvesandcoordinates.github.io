---
publish: true
created: 2026-02-12T11:54:08.035+01:00
modified: 2026-06-10T19:14:50.164+02:00
tags:
  - thoughts
---

> [!definition|\*]
> Let $M_{1}, \ldots, M_{n}, N$ be $R$-Modules. Then a map
> $f: M_{1} \times \ldots \times M_{n} \to N$
> is called multilinear if for all $i \in \set{1, \ldots, n}$ and $v_{i} \in M_{i}$:
> $f(v_{1}, \ldots, v_{i-1}, \cdot, v_{i+1} \ldots, v_{n}):M \to N$
> is $R$-linear

Another important example seperate from ones we have seen before is given by

> [!example|\*]
>
> - Consider the Convolution defined as
>   $\mathcal{C}: C_{c}(\R) ^{2} \to C_{c}(\R), (f, g) \mapsto \mathcal{C}(f, g)$
>   with
>   $C(f, g)(x) = \int_{-\infty}^{\infty} f(x-y) g(y) dy$
> - Let $X, Y$ be Banach spaces and $f: X \to Y$ differentiable. Then the higher Frechet Derivative of $f$ at $x \in X$ is a multilinear map. Specifically
>   $D^{n}f(x): X^{n} \to Y$
>   is multilinear.
