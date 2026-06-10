---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.779+02:00
tags:
  - academia
---

Prev: [[Exponentialfunktion, Trig, Log]]
Next: [[Folgen von Funktionen]]

---

Eine Funktion $f: D \rightarrow \mathbb{R}$ ist differenzierbar in $a \in D$ wenn der Grenzwert des Differenzenquotienten existiert:
$\lim_{h \rightarrow 0} \frac{f(a+h) - f(a)}{h}$
und die Ableitung and der stelle heißt:
$f'(a) = \lim_{h \rightarrow 0} \frac{f(a+h) - f(a)}{h}$

---

Die verschiedenen Ableitungen werden nicht hingeschrieben

---

Ableitung eine Umkehrfunktion:
$[f^{-1}(y)]' = \frac{1}{f'(f^{-1}(y))}$
Vorraussetzungen: Stetig, streng monoton, diffbar, f(x) ungleich 0

---

Für ein Lokales Extremum gilt:
$f'(x) = 0$

---

Satz von Rolle:
Gilt $f(a) = f(b)$ so gibt es einen Punkt $x\in(a,b)$ mit $f'(x)=0$

---

Für stetiges und difbares f gilt,
Es existiert ein $\xi \in (a,b)$ mit
$f'(\xi) = \frac{f(b) - f(a)}{b-a}$
-----------------------------------

Für $\zeta \in (a,b)$:
$m := \inf f'(\zeta)$
$M := \sup f'(\zeta)$
Dann folgt für $x\leq y$ :
$m(y-x) \leq f(y) - f(x) \leq M(y-x)$
-------------------------------------

Monotoniekriterium:

- $f'(x) \geq 0$ $\Leftrightarrow$ f ist monoton wachsend
- $f'(x) > 0$ $\Rightarrow$ streng monoton wachsend
- $f'(x) \leq 0$ $\Leftrightarrow$ monoton fallend
- $f'(x) < 0$ $\Rightarrow$ streng monoton fallend

---

Satz von L'hopital:
Für $f, g$ stetig und difbar mit einem $x \in (a,b)$ $f(x) = g(x) = 0$ und $g'(\xi) \neq 0$ für alle $\xi \in (a,b)$ \ ${x}$

4Falls: $\lim_{\xi \rightarrow x} \frac{f'(\xi)}{g'(\xi)}$
so folgt:
$\lim_{\xi \rightarrow x} \frac{f(\xi)}{g(\xi)} = \lim_{\xi \rightarrow x} \frac{f'(\xi)}{g'(\xi)}$

---

Für Konvexe Funktionen gilt, dass für eine beliebige Sekante die Funktion dazwischen unter der Sekante liegt, also es gilt:
$f(\lambda x + (1 - \lambda) y ) \leq \lambda f(x) + (1 - \lambda) f(y)$
Für solche Funktionen gilt, die Ableitung ist monoton wachsend. Gleichzeitig gilt, dass zu jedem $x \in (a,b)$ gilt:
$f(y) - f(x) \geq f'(x) (y - x)$
