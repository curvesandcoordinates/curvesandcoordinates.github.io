---
publish: true
created: 2022-09-08T15:33:08.000+02:00
modified: 2026-06-10T19:12:39.804+02:00
tags:
  - linker-exclude
---

Prev: [[Reihen]]
Next: [[Exponentialfunktion, Trig, Log]]

---

Funktionen haben eine Definitionsmenge wo werte herkommen und eine Wertemenge in welche Werte zugewiesen werden. Meist betrachten wir in der Analysis Abbildungen von D nach K wobei D eine Teilmenge von R oder C ist und K ein Körper.

---

Wir können den Abschluss einer Gegebenen Menge $D \subset \mathbb{C}$  mit $\bar{D}$ bezeichnen. Dieser Abschluss enthällt alle möglichen Grenzwerte von allen Folgen in D. Damit ist es eine Abgeschlossene Menge ohne unklare Ränder und ohne Löcher.

---

Grenzwert einer Funktion: Eine Zahl c in K heißt Grenzwert von f and der Stelle a falls:

- Für JEDE Folge $(x_n)$ in $D$ mit $x_{n} \rightarrow a$ gilt: $\lim f(x_{n}) = c$
- Epsilon Delta Definition gilt:

Zu jedem $\epsilon > 0$ gibt es $\delta > 0$  gilt: $|f(x) - c| < \epsilon$ für ALLE $x \in D$ mit $|x-a| < \delta$

---

Stetigkeit:
f ist stetig in a wenn für jedes $\epsilon > 0$ ein $\delta > 0$ existiert, so dass für alle $x \in D$ mit $|x-a| < \delta$ gilt:
$|f(x) - f(a)| < \epsilon$
Diese ist Charekterisiert durch Folgen:
f ist genau dann stetig in a wenn für alle Folgen in D mit $x_{n} \rightarrow a$ gilt: $\lim f(x_{n}) = f(a)$

---

Jede addition, multiplikation, und skalarultiplikation von stetigen Funktionen behält stetigkeit bei. Hintereinanderausführung behält auch stetigkeit bei.

---

Jegliche Rationale Funktion ist Stetig (Bruch von Polynomen).

---

Wenn eine Funktion von $[A,B]$ nach R geht und $f(A)f(B) < 0$ dann gibt es ein $x \in (A, B)$ mit \$f(x)=0

Daraus folgt, dass für jedes $y \in [f(A), f(B)]$ ein $x \in [A,B]$ mit $f(x) = y$

---

Im Intervall erreicht jede Funktion ein maximalwert und minimalwert.

---

Für eine Stetige Funktion gibt es immer einen Wert zwischen zwei Funktionswerten.

---

Lipschitz-Stetigkeit:
Eine Funktion ist Lipschitz-Stetig wenn es ein D gibt für das erfüllt wird, $\forall x,y \in D$
$|f(x) - f(y)| \leq L |x-y| \Leftrightarrow \frac{|f(x) - f(y)|}{|x-y|} \leq L$ also visuell, solange die Sekante durch jeden Punkt einen Maximalwert besitzt.

Ist eine Funktion Lipschitz-Stetig so ist sie Stetig.

---

Funktionen können Monoton sein, genau wie Folgen.
Eine Streng Monotone stetige Funktion ist immer Bijektiv und die Umkehrfunktion ist auch Streng monoton und stetig.
Es gilt: $f([a,b]) = [f(a), f(b)] \Rightarrow f^{-1}: [f(a), f(b)] \rightarrow [a,b]$

---
