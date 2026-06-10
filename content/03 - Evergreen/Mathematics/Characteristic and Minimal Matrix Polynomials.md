---
publish: true
created: 2026-02-12T09:58:21.734+01:00
modified: 2026-06-10T19:14:51.705+02:00
tags:
  - thoughts
---

When considering a matrix $A$ it is an intrinsic property that is connected to the Eigenvalues and Eigenvectors to consider the characteristic polynomial of this matrix.

## Minimal Polynomia

The minimal polynomial is connected to the characteristic polynomial and defines its theory.

> [!definition|\*] Minimal Polynomial of a Matrix
> Let $A \in \K^{n \times n}$ be some matrix, then the $P \in \K[x]$ is called the minimal polynomial of $A$ if it is the monic polynomial of least degree such that
> $P(A) = 0$
> meaning that any other Polynomial $Q \in \K[x]$ with $Q(A) = 0$ is a multiple of $P$.

It is important because the charactersitic polynomial can be shown to share is zeroes with the minimal polynomial which leads to interesting properties
