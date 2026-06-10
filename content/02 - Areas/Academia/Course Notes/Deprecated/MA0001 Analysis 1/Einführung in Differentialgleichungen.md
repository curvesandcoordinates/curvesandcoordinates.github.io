---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.785+02:00
tags:
  - academia
---

Prev: [[Taylor Reihen]]
Next: [[Extras]]

---

Das lösen von DGL geht in bestimmten fällen sehr einfach:

## Seperabele DGL

$y' = f(t,y) = g(t) h(y)$
Hierbei trennen wir lediglich alle von y abhängigend terme von denen von t abhängigen und integrieren.

## Inhomogene Gleichungen Erster Ordnung

$y'(t) - a(t)y(t) = f(t)$
hierbei ist berechnen wir zunächst:
$m(t) = \exp\left(-\int_{0}^{t} a(s) ds \right)$
$z(t) = \int_{0}^{t} m(s) f(s) ds$
und die Lösung ist dann:
$y(t) = \frac{z(t)}{m(t)}$

---

Wir können auch mit der variation der Konstanten arbeiten und zunächst die homogone Lösung der gleichung berechnen und dann die Konstante als Funktion zu betrachten. Dann setzt man in die DGL ein und formt nach C(t) um um eine Lösung für C(t) in diesem Fall zu finden. Am Ende ist die Lösung dannd die Summe der Partikularen und inhomogenen lösung.
