---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.998+02:00
tags:
  - academia
---

Backlink: [[02 - Schwingungen und Wellen]]

Wir betrachten nun ein System mit einer Rückstellen Kraft nach dem Gesetz von Hooke aber auch mit einer Approximation einer allgemeinen Reibung (der Stokesschen Reibungskraft):
$F_{H}= -kx$
$F_{R}= -bv = -b \dot{x}$
Hier gilt nurn für die Gesamt kraft auf eine Punktmasse der Masse $m$.

$m \ddot{x} = -kx -b \dot{x} \Rightarrow \ddot{x} + \frac{b}{m} \dot{x} + \frac{k}{m} = 0$
Diese DGL ist wesentlich komplizierter, da wir nun mehr bedingungen gegeben haben.
Wir definieren zunächst:
$\omega^{2}= \frac{k}{m}$
$2\gamma = \frac{b}{m}$
Wobei wir nun verschiedene Lösungsansätze haben.

## Exponentieller Lösungsansatz

Wir beginnen mit dem Ansatz:
$x(t) = c \cdot e^{\lambda t}$
Erlangen wir durch einsetzen und lösen nach $\lambda$ die allgemeine Lösung:
$x(t)=e^{-\gamma t} \left[c_{1} e^{\sqrt{\gamma^{2}- \omega ^{2}}\cdot t} + c_{2} e^{-\sqrt{\gamma^{2}- \omega ^{2}}\cdot t}\right]$
Wobei die komplexen Konstanten $c$ und $\lambda$ zu bestimmen sind.

## Trigonometrischer Lösungsansatz

Nehmen wir den einfacheren Ansatz:
$x(t) = A\cdot e^{-\gamma t} cos(\omega' t)$
Wobei wir nun eine neue Winkelgeschwindigkeit / Frequenz haben $\omega'$
mit:
$\omega' = \sqrt{\omega^{2}- \gamma^2}$
wobei wir unsere Lösung auch wie folgt schreiben können:
$x(t)= A \cdot e^{- \frac{t}{t_{L}}} cos(\omega' t)$
mit $t_L$ die mittlere Lebensdauer, oder die Zeit die es benötigt um auf $\frac{1}{e}$ der urprünglichen Amplitude zu kommen.

## Spezialfälle und Verhalten des Gedämpften Oszillators

Betrachten wir beide Ansätze so können wir sehen, dass es unterschiedliches Verhalten geben wird je nach dem wie $\omega$ zu $\gamma$ steht, da sich dann der wert von $\omega'$ radical ändert.

![[04 - Resources/Assets/Aperiodischer Grenzfall.png]]

### Schwache Dämpfung

Hier gilt
$\omega > \gamma \Rightarrow \omega' >0$
Ist die Reibung genügend klein so haben wir genau den Fall den wir uns vorstellen, so wir eine Schwidungn haben, jedoch mit einer einhüllenden inversen Exponentialfunktion.

### Aperiodischer Grenzfall

Hier Gilt:
$\omega = \gamma \Rightarrow \omega' = 0$
Hier gibt es gegen der Intuition keine wirkliche Schwingung, da der Schwingterm ausfällt und nun nur noch der inverse Exponentialterm überwiegt.

### Überkritische Dämpfung

Hier Gilt:
$\omega < \gamma \Rightarrow \omega' \in \mathbb{C}$
Hier kriecht das System zu seinem Gleichgewichtszustand zurück, schwingt jedoch nicht und verhält sich langsamer als im Aperiodischen Grenzfall
