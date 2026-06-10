---
publish: true
created: 2022-09-08T15:33:10.000+02:00
modified: 2026-06-10T19:12:39.953+02:00
tags:
  - academia
---

Prev: [[Vertauschungssätze]]
Next: [[Einführung in Differentialgleichungen]]

---

Eine Taylorreihe ist formal wie folgt definiert:
$T_{f}(x) = \sum\limits_{k = 0}^{\infty} \frac{f^{(k)}(a)}{k!} (x-a)^{k}$
-------------------------------------------------------------------------

mit der Taylor entwicklung und den berechnet Konvergenzradius der Folge, können wir sagen, dass die Taylorriehe gegen den Funktionswert der zu approximierenden Funktion konvergiert im Kovnergenzradius.

---

Aallgemein gilt für ein n+1-mal differenzierbares $f$
$f(x) = \sum\limits_{k = 0}^{\infty} \frac{f^{(k)}(a)}{k!} (x-a)^{k} + R_{n+1}(x)$
mit
$R_{n+1} (x) = \frac{1}{n!} \int_{a}^{x} (x-t)^{n} f^{n+1}(t) dt$

Dieses Restglied ist sozusagen der Fehler unserer Approximation.

---

DAs Restglied kann mithilfe des Mittelwertsaztes der Integralrechnung auch wie folgt umgeschreieben werden:
Für $\xi$ zwischen x und a folgt
$R_{n+1} (x) = \frac{f^{(n+1)} (\xi)}{(n+1)!}(x-a)^{n+1}$
