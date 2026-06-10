---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.554+02:00
tags:
  - academia
---

Backlink: [[PH0001 Experimentalphysik 1]]

# Harmonische Schwingungen

Schwingungen wurden schon oftmals behandelt in der Schule und weiteren Seminaren, jedoch werden sie in der Physik meist physikalisch für Kinematische Bewegungen oder Zustände benutzt die oszilierend sind in einer Hinsicht.

Um diese zu modellieren hat man allgemein drei verschiedene Arten der Oszilatoren definiert.

Allgemein sind Harmonische Schwingungen, solche die von einer trigonometrischen Funktion beschreieben werden. Die Allgemeinste wäre zum Beispiel:
$x(t) = A cos(\omega_0 t + \phi)$
Wobei gilt
![[04 - Resources/Assets/Variabelnamen Schwingung.png]]

Die Ideal anwendung und visualisierung solcher Schwingungen kann man mit Federn machen.

## Freier Harmonischer Oszillator

[[Harmonischer Oszilator an einer Feder]]
Hier gilt die [[Physikalische Interpretation der Winkelgeschwindigkeit]]

Verallgemeinern wir diese Anwendungen eines Oszilators als Lösung, so gitl nicht mehr $\omega^{2}= \frac{k}{m}$
sondern dor ist die Winkelgeschwindigkeit abhängig von anderen Variabeln.
Spezielle situationen entstehen an den Wendepunkten der Bewegung.

[[Fandenpendel als Harmonischer Oszilator]]

[[Exkurs Drehschwingungen]]

[[Energien  in einem Harmonischen Oszillator]]

## Gedämpfter Harmonischer Oszillator

Betrachten wir nun rückstellende Kräfte zu den schon vorhandenen Rückstellenden Kräften, wie Reibung so können wir keine harmonische Schwindung erwarten, da der Körper immer langsamer schwingen muss. Hier kommt eine Dämüfung ins spiel, also sprechen wir von einem Gedämpften harmonischen Oszillator.

[[Gedämpter Harmonischer Oszillator mit Reibung]]

[[Maßeinheiten der Dämpfung]]

## Erzwungene Schwingungen

![[04 - Resources/Assets/Schwingung mit Exzenter.png]]

Stellt man sich folgendes oszilierendes System vor, bei welchem nun die schwingung nicht nur gesartet wird und losgelassen sondern noch angetrieben wird durch einen sogenannten Exzenter, so haben wir eine "erzwungene Schwinung".

[[Erzwungene Schwingung]]

Ein weitere Weg disch schwingung von Fadenpendel anzutreiben ist die verkürzung oder verlängerung des Fadens an den Höhepunkten. Dabei gilt nicht die Übliche Winkelgeschwindigkeit, sondern:
$\omega = \frac{g}{l}\cdot (1+\epsilon \sin(2\omega t))$

Wir regen also unsere schwingung an indem wir an den Wendepunkten die winkelgeschwindigkeit kurz erhöhen.

## Nützlichkeiten harmonischer Schwingungen

- Man kann mithilfe unendlicher addition von sinus Wellen einen Puls nachmodellieren
- Man kann durch Fourier-Analyse ein Signal in verschiedene Frequenzen aufteilen um rauszufinden aus welchen Sinus wellen es entstanden ist.

## Gekoppelte Oszillatoren

Haben wir aneinenadergekoppelte Federn mit Massen dazwischen wie in folgendem Aufbau:

Wobei die Feder ganz rechts und Links die gleiche Federkonstante haben und die mittlere eine andere. Es gilt für beide Massen folgende Kraftgleichung:

$m \ddot{x}_1 = -C x_1 - C_m (x_1 - x_2)$
$m \ddot{x}_2 = -C x_2 - C_m (x_2 - x_1)$

Hiermit haben wir zwei gekoppelte Differentialgleichungen, die jeweilige Bewegungsgleichung in beiden Vorkommt. Wir können dieses Problem beheben indem wir neue koordinaten einführen und somit auf folgende bewegungsgleichungen kommen:

$ x_1 (t) = 2A \cdot \cos(\frac{\omega_1 + \omega_2}{2} t) \cdot \cos(\frac{\omega_1 - \omega_2}{2} t)$
$ x_2 (t) = -2A \cdot \sin(\frac{\omega_1 + \omega_2}{2} t) \cdot \sin(\frac{\omega_1 - \omega_2}{2} t)$

Womit wir insgesamt eine Schwebung haben, also eine Überlagerung von mehreren Schwindungen. Wobei die größere Schwingungsdauer gegeben ist durch
$\frac{4\pi}{\omega_2 - \omega_1}$ und die kleine Schwindungsdauer gegeben ist durch $\frac{4\pi}{\omega_2 + \omega_1}$

Wenn gilt, dass eine der beiden Massen gleich Schwingen, so sind sie in Phase und schwingen mir der Frequenz $ \omega_1 = \sqrt{\frac{C}{m}}$ (mit gleichen Massen)

Wenn jedoch gilt, dass die beide Schwingungen gegenphasig sind, so schwingen sie mit
$\omega_1 = \sqrt{\frac{C+2C_m}{m}}$
