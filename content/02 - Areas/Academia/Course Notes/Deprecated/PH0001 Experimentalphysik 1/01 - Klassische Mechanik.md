---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.552+02:00
tags:
  - academia
---

Backlink: [[PH0001 Experimentalphysik 1]]

Die Kinematik beschreibt Bewegungen von Massen. Zu vereinfachung betrachten wir in diesem Semester extra Massepunkte.

### Bewegung eines Massepunktes und die darstellung in Systemen

Wir beschreiben die Bewegungen eines Massepunktes in erster Linie mit dem Ortsvektor  $r(t)$ in Abhängigkeit von t. Die form der Koordinaten (oder in "Lineare Algebra" die Wahl der Basis) entscheidet man je nach Aufgabenstellung. Möglich sind kartesische, kugel-  oder sogar zylinderkoordinaten (siehe [[Koordinatensysteme]])

Betrachtet man die gesamte spanne von t die relevant für eine Gegebene Bewegung ist so bekommt man eine Bahnkurve in seinem jeweiligen Koordinatensystem. Diese Kurve kann in ihrer veränderung betrachtet werden.

### Geschwindikeit und Beschleunigung

So gilt:

$$
\vec{r(t)} = x(t) e_x + y(t) e_y + z(t) e_z
$$

Ist unser Ortsvektor. Dessen veränderung pro Zeiteinheit kann als **Geschwindigkeit** aufgefasst werden ( in m/s).

$$
\vec{v(t)} = \dot{x}(t) e_x + \dot{y}(t) e_y + \dot{z}(t) e_z = \dot{\vec{r}}(t)
$$

$$
\vec{v}(t) = \begin{pmatrix} v_x \\ v_y \\ v_z \end{pmatrix}
$$

Die Veränderung der Geschwindikeit ist folglich also die Beschleunigung:

$$
\vec{a(t)} = \dot{v}_x(t) e_x + \dot{v}_y(t) e_y + \dot{v}_z(t) e_z = \dot{\vec{v}}(t) = \ddot{\vec{r}}(t)
$$

### Die Kinematischen Gleichungen - Standardbewegungen

Da wir uns nur mit Bewegungen und den unterschiedlichen auffassungen dieser befassen lohnt es sich diese in bestimmte charakteristische Fälle zu untergliedern, die jeweils die allgemeine Herrangehensweise (beschrieben in [[Allgemeine Bewegung]]) konkretisiert für bestimte konstante Parameter.

zwischen foglenden Fällen wir unterschieden:

- [[Gleichförmig Beschleunigte Bewegung]]
- [[Gleichförmige Kreisbewegung]]

### Newton und seine Kraft

Die beschleunigung wird in der Realität nicht unbedingt seperat betrachtet, sondern meist als Kenngröße die Kraft F (in Newton).
[[Kraft]]

Am Wichtigstens sind für die Mechanik die [[Sätze von Newton]] und ihre Formulierungen

Allgemein können wir Kräfte wie die gravitation als [[Zentralkräfte]] bezeichnen für sie besonders gilt:

$$
F_G = -G \frac{m_1 m_2}{r^2} \hat{r}
$$

Die Gewichtskraft ist ein Spezialfall dieser auf der Erdoberfläche. Deswegen muss berücksichtigt werden, dass die Erdanziehung je weiter oben man ist nachlässt.

EIne Große Frage bei Newton ist ob die schwere Masse gleich der Trägen Masse ist. Dies können wir experimentell bejaen.

[[Konservative Kräfte]]

### Andere Kräfte

- [[Elastische Kraft]]
- [[Federkraft]]
- [[Reibungskraft]]
- [[Scheinkräfte]]

### Arbeit

Allgemein Betrachten wir neben der Kraft als wichtige größe noch die Arbeit. Sie beschreibt in Newton Meter, die Kraft in Richtung des Weges mal den Weg. Bei einem Kraftfeld, welches je nach Position eine Kraft hergibt, kann sie wie folgt berechnet werden.

$W_{12} = \int_{r_1}^{r_2} F(r) dr$

Es sollte bemerkt werden, dass wir Arbeit auch für einzelfälle ausrechnen können mit:

$ W = F s$

Sie kann positiv oder Negativ sein, wobei die Konvention ist, dass wenn die Arbeit postiv ist dann verrichtet der Körper diese Arbeit und wenn sie Negativ ist dann wird auf dem Körper diese Arbeit verrichtet.

Die Arbeit is null wenn die Kraft Senkrecht zum Weg steht, daher gilt in 2 Dimensionen

$W = F * s * cos(\theta)$

### Energie

Energie ist mit Arbeit verbunden, dass ein Maß an Energie (in Joule) gesehen werden kann als die Fähigkeit eines Körpers Arbeit zu verrichten. Allgemein Unterscheiden wir zwischen zwei verschiedenen Konzepten der Energie:

- [[Kinetische Energie]]
- [[Potentielle Energie]]

Diese Werden durch den [[Energieerhaltungssatz]] verbunden und geregelt. Allgemein werden viele Größen zeitlich verbunden in den sog. [[Erhaltungssätze]]

### Leistung

Leistung ist wie schnell sich die Arbeit an einem Körper verändert, also die zeitliche Ableitung der Arbeit.

$ P = \frac{dW}{dt}= \frac{\vec{F} dr}{dt} = \vec{F} \vec{v}$

Oft bezeichnen wir jedoch die Durchschnittsleistung eines Systems. Hierbei betrachten wir die diskrete Version der obigen Formel:
$P = \frac{\Delta W}{\Delta t}$

Aufgrung der Verbindung zwischen Arbeit und Energie kann man die Leistung auch als zeitliche Änderung der Energie sehen. Also die Rate mit der Energie umgewandelt wird:

$P = \frac{dE}{dt}$

## Mechanik Starrer Körper

Betrachten wir starre Körper so können wir sie identifizieren mit dem Masseschwerpunkt:

$$
\vec{R}_s = \frac{\sum_i m_i \vec{r}_i}{\sum_i m_i} = \frac{1}{M} \sum_i m_i \vec{r}_i
$$

Nehmen wir einen Ausgedehnten Körper mit eine nicht-gleichmäßigen Dichte, so können wir den masseschwepunkt auch als Volumenintegral über der dichteFunktion berechnen.

$$
\vec{R}_s = \frac{1}{M} \int_V \vec{r} \rho(\vec{r})dV
$$

- [[Ermittlung des Massenmittelpunkts]]

Wir können die Kraft auf diese ausgebreitete Masse als Summe der einzelmassen berechnen:
$\sum_i \vec{F}_i = \vec{F}_{gesamt} = M \ddot{\vec{R}}_s$

Wir verinfachen also hier eigentlich mit den gleichen Methoden des [[Schwerpunktsystem]]s ein komplexer Ausgedehnter Körper auf einen Massepunkt der Masse $M$ und der Position $\vec{R}_s$

Der Hauptpunkt Starrer Körper ist jedoch die neue Problematik der [[Rotation Starrer Körper]]

Damit können wir jetzt allgemein die Bewegung Starrer Körper als eine MIschung aus Tranlationsbewegung des Schwerpunkts und Rotation um eine Achse um den Schwerpunkt auffassen. Wir haben also 6 Freiheitsgrade.

Wenn wir uns diese Bewegungen Energetisch Anschauen wollen, so gilt nun, dass:
$E_{rot} = \frac{1}{2}J \omega^2$

### Energieerhaltung eines rollenden Zylinders:

Betrachten wir einen rollenden Zylinder, welcher auf einer Schiefen Ebene runter rollt. Wollen wir die Endgeschwindigkeit rausfinden können wir follgenden Energetischen Ansatz wählen:
$E_{pot} = E_{kin} + E_{rot}$

Hierbei kommt raus, dass diese GEschwindigkeit nicht von dem Radius oder von der Masse abhängig ist, sondern lediglich durch unsere Definition vom Trägheitsmoments abhängt, die wiederrum von der Form unseres Rollenden Objekts abhängt.

## Kepler und Sein Gesetz

Allgemein wissen wir aus der Schule schon, das wir Keplers Gesetze als nützliche beschreibung der Bewegung von Körpern auf elliptischen Bahnen sehen Können:

[[Keplers Gesetze]]
