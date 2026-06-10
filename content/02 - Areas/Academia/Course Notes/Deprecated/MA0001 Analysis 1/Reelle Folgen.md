---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.968+02:00
tags:
  - linker-exclude
---

Next: [[Reihen]]

---

Eine Folge ist eine Abbildung von den Natürlichen Zahlen zu den Reellen.

Man kann die vorschrift rekursiv oder direkt angebene

---

Eine Folge hat einen Grenzwert $a$ wenn gilt:

$ \text{Sei } \epsilon >0 \text{ so folgt für alle } n \geq n_0: |a_n - a| < \epsilon$

Dieser Grenzwert ist eindeutig

---

Ist eine Folge konvergent so ist sie beschränk, das heißt, dass es einen Wert $C$ gibt für den gilt:
$ |a_n| \leq C$ Für alle $n$
Aus konvergenz folgt beschränktheit aber andersrum nicht.

---

Grenzwerte lassen sich addieren, multiplizieren, wie gehabt. Solange eine Folge ungleich null ist bis auf endlich viele ausnahmen können wir auch division durch führen.

---

Wichtige Sätze:

- Sandwichkriterium
- Monotoniesatz
  - Beschränkt + Monoton Wachsend = Konvergent gegen sup oder inf

---

Eine Folge ist uneigentlich Konvergent wenn es für jedes $C > 0$ ein $n_0 \in \mathbb{N}$ existiert mit:
$a_n \geq C \text{ für } n > n_0$
Hierbei kann die Folge gegen plus oder minus unendlich konvergieren

Jede monotone Folge ist entweder Konvergent oder uneigentlich konvergent.

---

Allgemein gilt für eine Folge in den Naürlichen Zahlen:
$k \leq n_k$
Jede Folge hat monotone Teilfolge und konvergiert diese Folge so konvergieren auch alle Teilfolgen

Häufungspunkte sind konvergenzwerte von Teilfolgen

---

Bolzano Weierstaß besagt, jede beschränkte reelle Folge besitzt eine Konvergente Teilfolge!

---

Wir können den Limes Superior als größten Häufungspunkt und den Limes INferior als kleinsten Häufungspunkt darstellen gleichzeitig gilt:
$\liminf a_n \leq \limsup a_n$
------------------------------

Wir definieren eine Cauchy Folge für $\epsilon > 0$ und $m,n$ größer als $n_0$ für welche gilt:
$|a_n - a_m| < \epsilon$
Eine Konvergente Folge ist eine Cauchyfolge. Umgekehrt ist eine Cauchyfolge konvergent falls der zugrundeliegende Raum vollständig ist.

---

Für eine Komplexe Folge gilt der Konvergenzbegriff zu deuten als ein beliebig klein werdenden Radius.

Eine Komplexe Konvergenz kann man wie folgt in eine Reelle umwandeln:
$\lim z_n = z \Leftrightarrow \lim |z_n - z| = 0$
Oder man betrachtet den Imaginär und Realteil und konvergieren diese beiden konvergiert die komplexe Folge.

Konzepte der Cauchyfolgen, Rechenregeln und Bolzano-Weierstraß gelten im Komplexen genau wie im Reellen.

Komplexkonjugierte des Limes einer Komplexen Folge ist das komplexkonjugerte des Grenzwerts.

---
