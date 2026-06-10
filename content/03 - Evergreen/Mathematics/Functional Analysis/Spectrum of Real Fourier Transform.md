---
publish: true
created: 2025-07-15T22:23:08.497+02:00
modified: 2026-06-10T19:14:51.666+02:00
tags:
  - thoughts
---

Take the Operator
$F: L^{2}(\R) \to L^{2}(\R), F(f)(y) = \int_{\R} f(x) e^{- 2 \pi i y x}$
it is unitary and thus $\spec(F) \subset \mathbb{T}$
It turns out that $\spec(F) = \set{1, -1, i, -i}$

This gives us a spectral decomposition of this operator
$F = P_{1} + P_{-1} + P_{i} + P_{-i}$
and we can decompose $L^{2}(\R)$ into
$L^{2}(\R) = E_{1} \oplus E_{-1} \oplus E_{i} \oplus E_{-i}$
Now we can ask what eigenfunctions exist, meaning $\phi \in L^{2}(\R)$ such that
$F(\phi) = \lambda \phi$
Then is turns out that these eigenfunction turn out to be exactly
$\phi = h_{n}$ with $h_{n}(x) = e^{- \frac{x^{2}}{2}} H_{n}(x)$
where $H_{n}(x)$ are the so-called Hermite Polynomials. We can also prove that $\set{H_{k}}$ is a system of orthogonal polynomials meaning
$\int_{R} H_{n}(x) H_{m}(x) e^{-x^{2}} dx = K_{n} \cdot \delta_{n,m}$
where $K_{n}$ is only a normalization term. We can also note that
$\int_{\R} h_{n}(x) h_{m}(x)$
is exactly the same intergral.

Using the spectral decomposition we can also write
$F(f) = \sum\limits_{n} (i)^{n} \innprod{f}{h_{n}} h_{n}$
Meaning essential to calculating the fourier transform are the coefficients given by $\innprod{f}{h_{n}} = \int_{\R} f(x) h_{n}(x) dx$. Most of the time these coefficients are difficult to solve analytically. Something we can do though is sample our function at equidistant points. This will allow an approximation
$\int_{\R} f(x) h_{n}(x) dx \approx \frac{1}{N} \sum\limits_{k=0}^{N-1} f\left(\frac{k}{N}\right)h_{n}(\frac{k}{N})$
This approximation is not optimal though. The trick in this theory is to not take equidistant points but rather choosing them related to the zeros of the hermite polynomials. If we remove the control over where to sample we get into non-equispaced sampling theory and specifically into the area of Marcinkiewicz-Zygmund inequalities.
