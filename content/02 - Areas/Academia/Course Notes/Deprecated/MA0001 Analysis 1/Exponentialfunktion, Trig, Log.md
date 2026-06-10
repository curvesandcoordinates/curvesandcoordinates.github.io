---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.904+02:00
tags:
  - academia
---

Prev: [[Funktionen]]
Next: [[Differenzierbarkeit]]

---

Natürliche Exponentialfunktion:
$\exp(x) = \sum\limits^{\infty}_{k=0} \frac{x^k}{k!}$
wir definieren die Zahl $e$ als $e = \exp(1)$

---

Funktionalgleichung (mit Cauchy Produkt bewiesen):
$\exp(z+w) = \exp(z) \exp(w)$
$\exp(-z) = \frac{1}{\exp(z)}$
$\exp(z) \neq 0$
$\exp(\bar{z}) = \bar{\exp(z)}$
-------------------------------

Exponentialfunktion ist lediglich eine erweiterung des normalen potenzierens

---

Sie ist streng monoton wachsend auf $\mathbb{R}$ und
wachst schneller als jede Potenz von x:
$\lim \frac{\exp(x)}{x^{k}} = \infty$
für alle k

---

Für die Komplexe Exponentialfunktion können wir bestimmen, dass:
$\overline{e^{ix}} = e^{\overline{ix}} = e^{-ix}$ also folgt:
$|e^{ix}|^{2} = \overline{e^{ix}} e^{ix} = e^{ix}e^{-ix} = 1$
-------------------------------------------------------------

Definition:
$\cos(z) = \frac{1}{2}(e^{iz} + e^{-iz})$
$\sin(z) = \frac{1}{2i} (e^{iz} - e^{-iz})$
damit folgt:
$e^{iz}= \cos(z) + i \sin(z)$
-----------------------------

$\cos(z) = \sum\limits^{\infty}_{k=0} (-1)^{k} \frac{z^{2k}}{(2k)!}$
$\sin(z) = \sum\limits^{\infty}_{k=0} (-1)^{k} \frac{z^{2k + 1}}{(2k + 1)!}$
----------------------------------------------------------------------------

Diese Funktionen sind Stetig in C

---

Polarkoordinaten sind:
$z = re^{i\phi}$
mit $r = \sqrt{x^{2} + y^{2}}$
und $\tan(\phi) = \frac{y}{x}$

---

$\pi = 2 \cdot \inf \{x | x \geq 0, \cos(x) = 0$

---

$\cos(-x) = \cos(x)$
$\sin(-x) = -\sin(x)$
$\tan(z) = \frac{\sin(z)}{\cos(z)}$
$\cot(z) = \frac{\cos(z)}{\sin(z)}$
-----------------------------------

Sinus Hyperbolicus:
$\sinh(z) = \frac{e^{z} - e^(-z)}{2}$
$\cosh(z) = \frac{e^{z} + e^(-z)}{2}$

Alle eigentschaften bis auf den Pythagorad sind analog zu sin und cos
$\sinh^{2} (z) - \cosh^{2} (z) = 1$
-----------------------------------

Die Umkehrfunktion der natürlichen Exponentialfunktion ist der natürlich logarithmus der aufgrund der stetigkeit und streng monotonen steigung auch stetig und streng monoton steigend ist.

---

Allgemein beschreiben wir nun eine Potenzfunktion mit:
$f(x) = x^{r} = \exp( r\ln(x))$
und diese ist stetig, streng monoton steigend für $r > 0$ und streng monoton fallend für $r < 0$. Für $r = 0$ bijektiv.

---

Es gilt zusätzlich:
$\lim_{x \rightarrow \infty} \arctan(x) = \frac{\pi}{2}$
