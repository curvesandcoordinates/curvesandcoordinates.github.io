---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.621+02:00
tags:
  - academia
---

Backlink: [[01 - Klassische Mechanik]]

## Bewegung in einer Dimension

Wir betrachten nun eine allgemeine Bewegung in einer Dimension, die resultierenden gleichungen wurden schon in [[01 - Klassische Mechanik]] für die Position, Geschwindigkeit und Beschleunigung behandelt.

Die Verbindung zwischen Position, Geschwindigkeit und Beschleunigung ist die Ableitung. Dies bedeutet, dass wir an eine Aufgabe herrangehen können, indem wir das Integral berechnen in den Schritten wie folgt.

Mit $a(t)$ als Beschleunigungsfunktion, gilt

$$
v(t) = \int a(t) dt + a(t=0)
$$

Analog gilt für  $\vec{v}(t)$ als Geschwindigkeitsfunktion

$$
r(t) = \int v(t) dt + v(t=0) = \int\int a(t) dt dt + a(t=0) t +r(t=0)
$$

Dieser Prozess resultiert in einem Ortsvektor zur jeder Zeit $t$ und somit in einer Bahn.

## Multidimensional

Bewegungen in $n$ dimensionen sind unterteilbar in $n$ eindimensionale Beweungen, wenn sie unabhängig voneinander sind.

$$
\vec{r}(t) = \sum_{k=1}^n r_k(t) \hat{e}_k
$$

wobei alle $\hat{e}_k$ jeweils Basen von einem $n$ - dimensionalen Raum.
