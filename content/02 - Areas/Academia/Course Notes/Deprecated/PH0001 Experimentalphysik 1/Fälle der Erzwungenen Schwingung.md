---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.893+02:00
tags:
  - academia
---

Backlinks:[[Erzwungene Schwingung]],[[02 - Schwingungen und Wellen]]

Wir wollen nun die Fälle der erzwungenen Schwingung nach langen zeiten Betrachten, dafür gehen wir auf die vereinfachte Form der Bewegung für lange zeiten ein.
$x(t) = A \cos(\omega t + \delta)$
Hierbei ist $\omega$ die Frequenz des exzenters. Dann kommt nach einsetzen in unsere DGL der erzwungenen Schwingung folgendes raus:

$-m \omega^{2} A \cos(\omega t + \delta) - b \omega A \sin(\omega t + \delta) + kA \cos(\omega t + \delta) = F_{0}\cos(\omega t)$

Wobei folgende Unterteilung gemacht werden kann:
![[04 - Resources/Assets/Lange Schwingungskraft.png]]

Wir unterscheiden jetzt zwischen Folgenden Fällen die jeweils immer mehrere Terme aus dieser Gleichung verinfachen und uns ein Bild geben wür was passiert.

Im folgenden wird $\omega_0$ die eigenfrequenz der schwingung mit leichter Reibung beschreiben (ohne den erwingungsterm):

## Getriebener Fall

Wenn gilt: $\omega << \omega_0 = \sqrt{\frac{k}{m}}$
dann folgt , dass man Reibungsterm und Trägheitsterm weglassen kann da das Omega davor effektiv null ist. Somit überwiegt die Rückstellende Kraft und es gilt:
$-kx + F_{0}\cos(\omega) = 0 \Rightarrow x(t) =\frac{F_{0}}{k} \cos(\omega t)$
Das System wird also von dem Exzenter statisch getrieben getrieben.

## Freien Fall

Wenn Gilt: $/omega >> \omega_0 = \sqrt{k/m}$ und $ \omega >> k/b$
So überwiegt der Trägheitsterm und die Masse bewegt sich Quasifrei.

Es folgt, dass die Bewegungsgleichung nach einsetzen ungefär so aussieht:
$x(t) = -\frac{F_0}{m\omega^2} \cos(\omega t)$

Wobei das Minus von eines Phase $\delta = - \pi$ kommt.

## Resonanzfall

Ist: $\omega = \omega_0 \Rightarrow \omega_0^2 = \frac{k}{m}$

So folgt die Dominanz des Reibungsterm und es folgt, dass die Amplitude dieser Schwingung von der Anregeramplitude abhängt:
$A = \frac{F_0}{b \sqrt{k/m}}$
Und diese Schwingung hat einen Phasenunterschied von $\delta = -90 \deg$ Von der anregerschwingung.

Spezieller gilt hier das die schingung in [[Resonanz]] verfällt
