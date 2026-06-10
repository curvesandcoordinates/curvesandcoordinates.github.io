---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:38.509+02:00
tags:
  - academia
---

Backlink:[[01 - Klassische Mechanik]] [[Gleichförmige Kreisbewegung]]

Allgemein sind Kreisbewegungen wichtig als Konzeptueller Ansatz für Kinematische und Meschanische bewegungen als auch für [[Harmonische Oszilatoren]]

Im Allgemeinen würde man sich einen Kreis Denken und einen VEktor vom Zentrum zum Kreis mit einem Bestimmten Winkel $\phi$ zur x-Achse

![[04 - Resources/Assets/Rotationskraft.jpeg]]

Hiermit können wir mit einfachter trigonometrie die Position eines beliebigen Punktes wie folgt bestimmen

$$
\vec{r}(t)=\begin{pmatrix} Rcos(\omega t) \\ Rsin(\omega t) \end{pmatrix}
$$

Wobei wir $\omega = \frac{d\phi}{d t}$ als [[Winkelgeschwindigkeit]] interpretieren. Mit diesen GLeichungen ist es nun leicht die geschwindigkeit und die Beschleunigung auszurechenen

$$
\vec{v}(t) = \begin{pmatrix} -R \omega sin(\omega t) \\ R \omega cos(\omega t) \end{pmatrix}
$$

$$
\vec{a}(t) = \begin{pmatrix} -R \omega^2 cos(\omega t) \\ -R \omega^2 Sin(\omega t) \end{pmatrix}= - \omega^2 \begin{pmatrix} Rcos(\omega t) \\ RSin(\omega t) \end{pmatrix} = -\omega^2 \vec{r}(t)
$$

Wobei die Zentripetalbeschleunigung in Richtung des Kreisursprungs zeigt
