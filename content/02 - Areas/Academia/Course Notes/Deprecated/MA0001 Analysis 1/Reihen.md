---
publish: true
created: 2022-09-08T15:33:10.000+02:00
modified: 2026-06-10T19:12:39.933+02:00
tags:
  - academia
---

Prev: [[Reelle Folgen]]
Next: [[Funktionen]]

---

Definition einer Reihe als Folge ihrer Partialsummen, also kann man Reihen auch als einfache Folgen sehen mit Summenzeichen in den Partialsummen.

---

Geometrische Reiehe:
$ \sum^\infty z^k = \frac{1}{1-z}$
Konvergiert für $|z| < 1$
Für die Partialsumme gilt:
$s_{n}= \frac{1-z^{n+1}}{1-z}$

---

Harmonische Reihe Divergiert:
$\sum^{\infty}\frac{1}{k}$
--------------------------

Jede Folge einer Konvergenten Reihe muss eine Nullfolge sein:
$\sum^{\infty}a_{k}= A \Rightarrow \lim_{n\rightarrow \infty} a_{k}= 0$
-----------------------------------------------------------------------

Absolute Konvergenz ist:
$\sum\limits^{\infty}|a_{k}|= a$
Absolute Kovnergenz impliziert Kovnergenz:
$\left| \sum\limits^{\infty}a_{k}\right| \leq \sum\limits^{\infty} |a_k|$

---

Absolute Konvergenz hat viele Eigenschaften von Normaler Grenzwert-Konvergenz:

- Eine Folge ist genau dann absolut Kovnergent wenn ihre Partialsumme Beschränkt ist
- Eine Komplexe Folge kann man real und imaginärteil aufteilen
- Eine Komplexe Folge ist absolut konvergent genau dann wenn real und imaginärteil absolut konvergent sind

---

Konvergenzkriterien:

- Majorantenkriterium: Absolute Konvergenz wenn $\sum\limits b_{k}$ mit $|a_{k|}\leq b_k$ für alle $k \geq n_0$
- Minorantenkriterium: Reihe Divergiert wenn eine Divergente Minorante existiert
- Quotientenkriterium: $q = \lim |\frac{a_{k+1}}{a_k}|$ Die Reihe ist Absolut Konvergent für $q<1$, divergent für $q > 1$ , unklar für $q = 1$
- Wurzelkriterium $w = \limsup \sqrt[n]{|a_k|}$ mit $w < 1$

---

Das Leibnizkriterium ist nützlich um die Konvergenz von Alternierenden Reiehen zu berechnen.
Für eine Alterniernde Reihe wie folgt:
$\sum\limits^{\infty}(-1)^{k}a_k$ konvergiert genau dann wenn $a_{k}$ eine Nullfolge ist

Der Fehler ist dan gegeben durch:
$\left| \sum\limits^{\infty}(-1)^{k} a_{k} - s_{n} \right| \leq a_{n+1}$
------------------------------------------------------------------------

Allgemein sind Potenzreihen wie folgt definiert:
$f(z)= \sum\limits^{\infty} c_{k} (z-a)^{k}$
Ihr Kovnergenzradius ist:
$r := \frac{1}{\limsup_{k\rightarrow\infty} \sqrt[k]{|c_k|}}$
$r := \frac{1}{R} = \left| \frac{a_k}{a_{k+1}} \right| $
--------------------------------------------------------

Für zwei Absolut Konvergente $\sum\limits a_k$ und $\sum\limits b_j$ Reiehen in C gilt:
$c_{l}= \sum\limits^{l}_{j=0} a_{l-j} b_j$
Dann ist $\sum\limits c_{l}$ absolut Konvergent und es gilt:
$\sum\limits c_{l} = \sum\limits a_{k} \cdot \sum\limits b_j$
