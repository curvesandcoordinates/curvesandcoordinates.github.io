---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.838+02:00
tags:
  - academia
---

Backlink: [[02 - Schwingungen und Wellen]]

Bei der erzwungenen Schwingung wird mit einem Exzenter die schwingung um einen harmonischen Term angetrieben. Um die frequenz dieses Exzenters von der der Schwingung zu unterscheiden nennen wir die Frequenz der Schwingung $\omega_{schw.}$ und die des exzenters $\omega_{exz.}$

Es gilt nunr für den verbundenen Massepunkt follgendes:
$F_{ges} = m \ddot{x}= -kx -b\dot{x} + F_{0}\cos(\omega_{exz.} t)$
Daraus folgt
$\ddot{x} + 2\gamma \dot{x}+ \omega_{schw}^{2}= K \cos({\omega_{exz}t})$
mir Substitutionen:
$2\gamma = \frac{b}{m}$
$\omega_{schw}^{2}= \frac{k}{m}$
$K = \frac{F_{0}}{m}$

Diese Differentialgleichung ist sehr schwer zu lösen, da sie Inhomogen ist. Wir Lösen indem wir die Inhomogene Gleichung Lösen und dann dieses Resulat auf eine Partikulare Lösung addieren.

Hier gilt speziell:
$x(t) = A \cos(\omega_{exz} t + \delta) + Ce^{-\gamma t} \cos(\sqrt{\omega_{schw}^{2}- \gamma} \cdot t)$
Wobei $\delta$ der Phasenunterschied zwischen Exzenter und Auslenkung ist.
Diese Phasenverschiebung kann man berechnen wenn man zeitpunkt zweier Maxima nimmt und setzt: $\Delta t = \frac{\delta}{\omega}$ zwischen zwei harmonischen Oszilatoren mit Frequenz $\omega$

Betrachten wir jedoch große zwiten so verschwindet der zweite Summand, da dieser nur zum Einschwingen ist. Damit ist unsere Gleichung für lange zeiten:

$x(t) = A cos(\omega_{ezx} t + \delta)$

[[Fälle der Erzwungenen Schwingung]]
