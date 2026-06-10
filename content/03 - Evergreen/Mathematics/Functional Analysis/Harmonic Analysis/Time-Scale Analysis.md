---
publish: true
created: 2025-06-24T14:06:10.519+02:00
modified: 2026-06-10T19:14:51.570+02:00
tags:
  - thoughts
---

Similar to the Time-Frequency Analysis Setup, we can analyse the Time-Scale Domain of a function by using the so-called Dilation Operator
![[Common Linear Operators of Harmonic Analysis#^1963f7]]

We can then from this define the Time-Scale Shift, formally called a wavelet transform by simply noting that
![[Common Linear Operators of Harmonic Analysis#^e73cb9]]

which has some simple properties given by
![[Common Linear Operators of Harmonic Analysis#^8b853f]]

---

Using this we first consider that our mother wavelets $\phi$ can satisfy a socalled admissibility condition, which will amount to

> [!proposition|\*] Admissibility Condition Gives Isometry
> For $0 \neq \phi \in \C^\mathbb{F}$ with $\hat \phi(1)  \neq 0$ then
> $W_{\phi}: L^{2}(\mathbb{F}) \to  L^{2}(\mathbb{F} \times \mathbb{F}^{\times})$
> is an isometry up to a constant if and only if the admissimbility condition (AC) is holds
> $\norm{\phi}_{2} = \sqrt{|\mathbb{F}|} |\hat\phi(1)|$

`\begin{proof}`
Exercise
`\end{proof}`

Note that the admissibility condition implies that
$\sum\limits_{x \in \mathbb{F}} | \phi(x) | ^{2} = \norm{\phi}_{2}^{2} = |\mathbb{F}| |\hat \phi(1)|^{2} = |\mathbb{F}| \frac{1}{|\mathbb{F}|} \left| \sum\limits_{x \in \mathbb{F}} \phi(x) \right|^{2} = \left| \sum\limits_{x \in \mathbb{F}} \phi(x) \right|^{2}$

> [!corollary|4.20]
> Let $0 \neq \phi \in \C^{\mathbb{F}}$ then for $f, g \in \C^{\mathbb{F}}$ we have
> $\sum\limits_{x \in \mathbb{F}} \sum\limits_{a \in \mathbb{F}^{\times}} W_{\phi} f(x, a) \overline{W_{\phi}g(x, a)} = c_{\phi} \sum\limits_{x \in \mathbb{F}} f(x) \overline{g(x)}$
> with $c_{\phi} = (|\mathbb{F}| - 1) \left| \sum\limits_{x \in \mathbb{F}} \phi(x) \right|^{2}$

`\begin{proof}`
Straightforward
`\end{proof}`

> [!proposition|4.21] Inversion
> Let $0 \neq \phi \in \C^{\mathbb{F}}$ for $f \in \C^{\mathbb{F}}$ we have
> $f(y) = \frac{1}{c_{\phi}} \sum\limits_{x \in \mathbb{F}} \sum\limits_{a \in \mathbb{F}^{\times}} W_{\phi} f(x, a) T_{x}D_{a}\phi(y)$

`\begin{proof}`
Straightforward
`\end{proof}`

Note that this an overcrowded frame. We could consider a sparser data set which we might do later.
