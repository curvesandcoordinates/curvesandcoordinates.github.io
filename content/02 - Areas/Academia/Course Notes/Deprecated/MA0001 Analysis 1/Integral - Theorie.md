---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.844+02:00
tags:
  - academia
---

Prev: [[Folgen von Funktionen]]
Next: [[Integral - Praxis]]

---

Wir definieren eine Zerlegung eines Intervalls als eine Diskrete Menge von Punkten zwischen $a$ und $b$.

Eine Diskrete Zerlegung die Äquidistant ist von $[a, b]$, wäre zum Beispiel:
$Z=\{x_J\}$ mit $x_{J} = \frac{b-a}{k}$

Der Vektorraum aller Treppenfunktionen von a nach b ist bezeichnet als $T[a,b]$

---

Von dieser Treppenfunktion $\Phi$ lässt sich nun das Integral sehr leich ausrechnen indem wir lediglich rechnen:
$I(\Phi) = \sum\limits_{j=0}^{n} c_{j} (x_{j} - x_{j-1}) = \int_{a}^{b} \Phi(x) dx$
mit $c_{j}$ als Wert der funktion an der Stelle:

---

Eine Regelfunktion ist eine Funktion die gleichmäßig angenähert werden kann durch immer feinere Treppenfunktionen.

Eine funktion $f: [a,b] \rightarrow \mathbb{R}$ ist genau dann eine Regelfunktion wenn es zu jedem $\epsilon > 0$ eine Treppenfunktion $\Phi$ mit:
$||f - \Phi||_{\infty} \leq \epsilon$

Jede Regelfunktion hat für alle Punkte einen Links und Rechtsseitigen Grenzwert.
Jede monotone Funktion ist eine Regelfunktion.

---

Das Integral einer Regelfunktion ist eindeutig und kann definiert werden durch:
$\int_{a}^{b} f(x) dx = \lim_{n \rightarrow \infty} \int_{a}^{b} \Phi_{n(x)}dx = \lim_{n \rightarrow \infty} \sum\limits_{j=0}^{n} c_{j} (x_{j} - x_{j-1})$
Dieses Integral ist Linear und seperabel, und erfüllt zwei weitere Eigenschaften:

$\left| \int_{a}^{b} f(x) dx\right| \leq \int_{a}^{b} |f(x)| dx \leq (b-a) ||f||_{\infty} $
und für $f \leq g$ folgt:
$\int_{a}^{b} f(x) dx \leq \int_{a}^{b} g(x) dx$
------------------------------------------------

Jede Stetige Funktion ist eine Regelfunktion

---

Der Hauptsatz der Differential und Integralrechnung:
$F(x) = \int_{c}^{x} f(t) dt$
Es gilt:

- $F'(x) = f(x)$
- $\int_{a}^{b} f(x) dx = F(b) - F(a)$
- Jede Stammftunktion unterscheidet sich nur um eine Konstante.

---

Mittelwertsatz der Integralrechnung:
Es Existiert ein $\eta \in [a,b]$
$\int_{a}^{b} f(x) g(x) dx = f(\eta) \int_{a}^{b} g(x) dx$
Es folgt:
$\int_{a}^{b} f(x) dx = f(\eta) (b- a)$
