---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.899+02:00
tags:
  - academia
---

Prev: [[Integral - Theorie]]
Next: [[Vertauschungssätze]]

---

Mögliche Integrationsregeln sind:

- Substitution
- Partielles Integrieren
- Partialbruchzerlegung bei rationalen Funktionen
- Bei einer rationalen Funktion mit sin und cos -> Weierstraß-Substitution
  - $x = 2arctan(t)$

---

Uneigentliche Integrale der Form

$$$\int_{a}^{\infty} f(x) dx = \lim_{M \rightarrow \infty} \int_{a}^{M} f(x) 
dx$$
Es muss zunächst immer das allgemeine Integral ausgerechnet werden und dann der Grenzwert genommen werden.

Auch gilt:
$$\int_{-\infty}^{\infty}f(x) dx = \int_{-\infty}^{b} f(x) dx + \int_{b}^{\infty} f(x) dx$$
---

da Integrale in ihrer Essenz eigentlich konvergente Reihen sind, können wir Folgende Äquivalenz gelten lassen:
$$\int_{1}^{\infty} f(x) dx \text{ existiert} \Leftrightarrow \sum\limits_{k=1}^{\infty} f(k) \text{ ist konvergent}$$
$$$
