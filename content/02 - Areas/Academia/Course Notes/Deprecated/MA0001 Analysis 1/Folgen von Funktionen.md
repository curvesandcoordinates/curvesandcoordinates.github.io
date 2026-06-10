---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.788+02:00
tags:
  - academia
---

Prev: [[Differenzierbarkeit]]
Next: [[Integral - Theorie]]

---

Punktweise Konvergenz bedeutet, dass für jeden Punkt $x\in D$ gilt, dass für $(f_n)$
$\lim_{n \rightarrow \infty} f_{n}(x)= f(x)$
--------------------------------------------

Gleichmäßige Konvergenz bedeutet, dass eine Folge von Funktionen gegen eine Funktion f konvergiert mit folgender Bedingung:
Sei $\epsilon > 0$ und ein $n_{0} \in \mathbb{N}$ so dass gilt: $|f_{n} (x) - f(x)| \leq \epsilon$
Für alle $x\in D$ und $n \geq n_{0}$

---

Gleichmäßige Konvergenz ist stärker als Punktweise Kovnergenz und überträgt von der Funktionenfolge bestimmte Eigenschaften wie stetigkeit.

---

Definieren wir die Supremumsnorm mit:
$||f||_{\infty} = \sup_{x\in D} |f(x)|$
---------------------------------------

Für Funktionen in $B(D;K)$ also Beschränkte Funktionen von B nach K dann gilt:
$||f||_{\infty} = 0 \Leftrightarrow f = 0$
$||\lambda f||_{\infty} = |\lambda| ||f||_{\infty}$
$||f + g||_{\infty} \leq ||f||_{\infty} + ||g||_{\infty}$
---------------------------------------------------------

Gleichmäßige Konvergenz gilt dann von $(f_{n})\in B(D;K)$ nach $f \in B(D;K)$  wenn gilt:
$\lim_{n \rightarrow \infty} ||f_{n} - f||_{\infty} = 0$

---

Das Weierstraßkriterium bezeichnet Konvergenz von Funktionsreihen:

Für eine Folge $(f_{k}) \in B(D;\mathbb{K})$ wenn gilt:
$\sum\limits_{k=0}^{\infty} ||f_k||_{\infty} < \infty$
dann konvergiert die Reihe absolut und die partialsummen konvergieren gleichmäßig gegen $f: D \rightarrow \mathbb{K}$
$f(x) = \sum\limits_{k = 0}^{\infty} f_k(x)$
