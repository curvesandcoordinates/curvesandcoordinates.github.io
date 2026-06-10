---
publish: true
created: 2025-07-01T16:57:01.000+02:00
modified: 2026-06-10T19:14:51.798+02:00
tags:
  - thoughts
---

In information theory we want to somehow axiomatize the concept of information in an abstract context. We will generall base the definitions upon these principles.

Given some event $A$ in a probability space with $P(A) = p$ we want to define a measure of information contained in this event.

> [!definition|\*] Information of an event
> The information is a function
> $I: [0, 1] \to \R$
> such that for $A \in \Omega$ with $P(A) = p$ we have that
>
> - $I(p) \geq 0$
> - $I(1) = 0$
> - $I(p_{1} p_{2}) = I(p_{1}) + I(p_{2})$
> - $I \in C^1([0, 1])$

This definition contains a lot of properties we would expect of information. Namely we determin the information in an event purely by its probability. If an event is certain we have no information, which might be counter-intuitive, but makes sense since in a certain situation we don’t learn anything new if it happens.

Some quick consequences of this definition we get

> [!proposition|\*] Properties of Infromation
>
> - Powers become products $I(p^a) = aI(p)$
> - Logarithm representation of Information $I(p) = \log\left( \frac{1}{p} \right) = - \log(p)$

`\begin{proof}`
The first property can be shown for $a \in \N$. After that we simply extend to $\mathbb{Q}$ and then by continuity to $\R$.

Consider that for some $f$ we can write $f(x) = I(e^{-x})$ which then gives us the functional equation
$f(x + y) = I(e^{-x - y}) = I(e^{-x} e^{-y}) = I(e^{-x}) I(e^{-y}) = f(x) f(y)$
which is specifically solved by $f(x) = c x$ which gives us
$I(p) = f(-\log(p)) = -c \log(p)$
with $c = f(1) = I(0)$ which we can normalise by.
`\end{proof}`

## A Stream of Information

Assume we have a signal consisting of a stream of $N$ symbols from the set
$\set{x_{0}, x_{1}, \ldots, x_{N-1}}$
the probability that one of the characters is $x_{i}$ is given to be $p_{i}$. We can thus for a general stream of length $L$ determine that on avarage our stream will have the symbol $x_{i}$ have $L \cdot p_{i}$ times. The overall information can then be expressed by
$I(p) = I(p_{0} \cdot \ldots \cdot p_{N-1}) \approx \sum_{i=1}^{N-1} L p_{i} \log \left( \frac{1}{p_{i}}\right)$
The avarage information is then given by

> [!definition|\*] Shannon Entropy Function
> Given a stream of length $L$ where the character set is $\set{x_{0}, \ldots, x_{N-1}}$ and the probability per character is $p_{i}$ then the Shannon Entropy function is given as
> $H(p) = \frac{1}{L} I(p) = - \sum\limits_{i=1}^{N-1} p_{i} \log(p_{i})$

^eecf2b
