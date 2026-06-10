---
publish: true
created: 2026-02-12T20:31:39.216+01:00
modified: 2026-06-10T19:14:50.241+02:00
tags:
  - thoughts
---

With $V = \K^{k \times k}$ we can view matrix multiplication $(A, B) \mapsto AB$ as a bilinear map $V \times V \to V$ which can be represented by the order $3$ matrix-multiplcation tensor
$\mu_{k} := \sum\limits_{i,j,l = 1}^{k} E^{ij} \otimes E^{jl} \otimes E_{il} \in V^{*} \otimes V^{*} \otimes V$
where $E^{ij}(A) = A_{ij}, E^{jl}(B) = B_{jl}$ and $E_{il}$ is the $il$-matrix unit. So we get $\mu_{k}(A \otimes B \otimes \mathbb{1}) = AB$

By flattening we see that $\rank(\mu_{k}) \geq k^{2}$ and from the definition $\rank(\mu_{k}) \leq k^{3}$.

We would like to quantify the aritmetic complexity $\gamma(k)$ for computing $k \times k$ matrices. This is connected to the rank of this tensor by the following

> [!theorem|\*] Connection of Rank to Arithmetic Complexity
> If $\rank(\mu_{k}) = r$, then
> $\gamma(N) = \begin{cases} O(N^{\log_{k}r}), &\quad r > k^{2} \\ O(N^{2 + \epsilon}), &\quad \forall \epsilon> 0 \text{ for } r = k^{2} \end{cases}$
> for $N \to \infty$.

….
