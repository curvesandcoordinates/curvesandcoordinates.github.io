---
publish: true
created: 2025-07-09T14:34:14.240+02:00
modified: 2026-06-10T19:12:42.624+02:00
tags:
  - academia
---

#linker-exclude

## Prep

### Wie weit bin ich bis jetzt

- Basic Visualisierung
  - Export und Visualisierung von Parametrischen Flächen
  - Beispielflächen
- Complexere Operationen durch Quaternionische Beschreibung von Flächen
  - Spin-Transformation
  - Christoffel Duale Konstruieren
  - Integrieren und Differenzieren einer gegeben Parametrischen Function

### Was will ich noch machen

- 2 oder 3 Flächen Drucken bzw schön in Blender visualisieren
- Implementierung des Isothermen Torus
- Bonnet Paare vom Isothermen Torus konstruieren

Formal sollte ich noch

- Gute Readme des Projekts erstellen
- Write-Up über was ich alles gemacht habe (vielleicht reicht schon das Readme idk)

### Welche Fragen habe ich an Tim um diese Ziele zu erreichen

Ich wende mich in der konstruktion der Objekte aus dem paper sehr an abschnitt 7.2 “Constructing Examples”. Hierbei wird gesagt dass explizite formels für den parametrischen Torus bei gegebenen Parametern einfach durch numerisches integrieren möglich ist. Mein problem ist aber erstmal folgendes.

![[04 - Resources/Assets/Call Notes for 10. July 2025 Theorem 3.png]]
Die in Theorem 3 genannte vorschrift benutzt berechnungen die ich nicht kenne. Speziell

- Was ist mit $\Phi^{-1}$ gemeint?
  - \==Ich verstehe das entweder als $\frac{1}{\Phi}$ und dann ist die dritte formel logarithmisches differenzieren und die erste ergibt sinn weil wir in den Quaternionen arbeiten und alles unkommutativ ist. YESSSSSSS
  - Oder es ist die Inverse von $\Phi$ wobei ich dann garnix deuten kann
- Wie implementiere ich die theta funktionen in diesem kontext
  - \==Ich hatte mir nur ein bisschen bachground dazu angeschaut und bemerkt dass es viele verschiedene Arten gibt bzw es packages wie [“Theta.jl”](https://juliapackages.com/p/theta) die die riemann theta funktionen ausrechnen mit einer matrix in der “Siegel upper-half space” aber ich hatte keine ahnung was hier gemeint war
- Die freiheit die gegeben ist durch die $\tau$-admissible reparametrization $w(v)$ verstehe ich auch nicht wirklich, ich hätte Remark 6 benutzt und einfach gesetzt das $w'(v) = \cos (v)$ aber das ist sehr willkürlich.
  - \==Ich hatte auch noch in Lemma 4 gesehen das wir in einem bestimmten context unser $w$ explizit mit der Weierstrass $\mathfrak{p}$ angeben. Ich verstehe diese funktion auch nicht.

Die Konstruktion der Bonnetpaare würde ich mithilfe von
![[04 - Resources/Assets/Call Notes for 10. July 2025 Theorem 5.png]]

und
![[04 - Resources/Assets/Call Notes for 10. July 2025 Appendix.png]]
wobei ich eigentlich nur noch explizit die theta funktionen verstehen muss und die parametrisierung aber im endeffekt alles andere dann schon abgedeckt ist.

### Was wurde im Call besprochen

**Zur Frage wie man die Theta Funktionen darstellen soll**
Tim meinte dass das Package [EllipticFunctions.jl](https://stla.github.io/EllipticFunctions.jl/#Functions) sehr gut sein sollte für die darstellung elliptischer funktionen. Hier drin sind alle theta funktionen und wie weirerstrass p funktion vorhanden. Das einzige was wichtig ist ist das

1. Der zweite parameter komische gemacht ist von denen. Tim meinte dass die in der Package ein $q$ benutzen es während in dem paper alles mit $\tau$ geschrieben ist. Aber die beiden sind related mit $q = e^{i \pi \tau}$
2. Es gibt keine $\vartheta_{2}'$  funktion aber mit der [[WolframEllipticTheta.pdf|pdf von wolfram alpha]] kann man leicht diese funktionen umrechnen

Ich hab auch gefragt warum in dieser ganzen konstruktion eine Rhombische Funktion gebraucht wird und nicht eine Rechteckige reicht und er hat mir erzählt dass die ganze idee für den isothermen torus aus einem diskreten fall kam und bei dem gedanken dass ganze kontinuierlich zu gestalten haben sie die klassifikation von isothermen flächen von Darboux angeschaut. Bei diesen konnten aber keine der klassifikationen sich überhaupt schließen und das war erstmal blöd. Dann haben sie den Wente Torus gesehen und gedacht dass dieser ja definitiv krümmungslinien hat die sich schließen und isothermen character hat (obwohl er es nicht ist). Es stellt sich herraus dass diese ein grenzfall von der Klassifikation von Darobux darstellt. In der gesamten klassifikation hat Darboux auch eine wahl getroffen, die effektiv darauf hinausläuft dass er sich mit rechteckig periodischen funktionen befasst hat und nicht mit rhombischen. Deswegen der rhombische Fall hier und dieser erlaubt eben genau das was gebraucht war.

**Zu Frage zur repmarametrisierungsfunktion**
Tim hat mir im allgemeinen das prozedere nochmal visuell erklärt. Du konstruierst diese schöne kurve $\gamma(u, v)$ die eigentlich eine familie an kurven darstellen soll. Was du jetzt machst ist du nummst $v$-benachbarte kurven und rotierst diese um eine “achse” im raum. Diese Achse hängt von der jeweiligen kurve ab aber in jedem infinitisimalen schritt drehst du die nächste kurve um die achse der vorherigen, diese Aufgabe übernimmt das $\Phi$. Wenn wir jetzt am ende etwas isothermes wollen dann wollen wir ja das die fläche die wir nach dieser rotation von der Familie rauskriegen gleich schnell in $u$ und in $v$ richtung geht. Diese bedingung erfüllen wir indem wir das $w$ besonders begrenzen. Speziell muss es diese eigenschaft von $\tau$-admissibility haben. Dennoch gibt es eine freie wahl von einem guten $w$. Jede Wahl gibt dir einen anderen isothermen zylinder der valide ist. Die aufgabe ist nun in dem paper das $w$ so zu wählen dass mein isothermer zylinder zu einem Torus wird.

Eine intrinsich gute Wahl ist dass du streng forderst dass mein Zylinder am ende $v$-lineien auf eine Kugel packt. Diese Bedingung gibt dir für jede $v$-linie eine Kugel auf der diese liegt und die mittelpunkte dieser Kugeln bilden noch eine linie im raum. Von dieser linie kannst du jetzt (irgendwie?? ich glaube indem du alle noch einschränkst dass die bonnetpaare sich auch schließen oder so. Hier spielt noch irgendwie mit rein dass wir ) eine coole achse rauskriegen die dir erlaubt den isothermen zylinder zu schließen. Die wahl von diesem $w$ ist durch die weierstraß $\mathcal{p}$ funktion gegeben in Lemma 4.

Das ist aber nur eine Wahl von $w$ wir können prinzipiell $w$ frei wählen um diese Bonnet paare und den isothemren torus zu konstruieren. Ein beispiel ist dass Tim am anfang vom paper einen isothermen Torus zeigt der eben mit einem Frei gewählten $w$ gemacht ist. Dieses haben sie gefunden indem sie erstmal die intrinsiche $w$ wahl als fourier reihe dargestellt haben. Dann haben sie nur endliche terme angeschaut und mit hinzugefügten koeffizienten numerisch eine gute wahl für $w$ gefunden

Hier ein screenshot von seinem frei gewählten $w$
$W(v) = C -  A\frac{\cos \left( v + \cot^{-1}\left( \frac{1}{\pi} \right) \right)}{\sin\left( \cot^{-1}\left( \frac{1}{\pi} \right) \right) \pi} + B \frac{\cos \left( 2 v + \cot^{-1}\left( \frac{1}{2 \pi} \right) \right)}{\sin \left( \cot^{-1}\left( \frac{1}{2 \pi} \right) \right) 2 \pi}$
![[04 - Resources/Assets/2025-07-10.png]]

Der grund warum wir ein weniger intrinsiches $w$ wollen könnten ist dass vielleicht manche leute die symmetrie von den intrinsich gewählten zu gut finden. Damit ist gemeint dass die bonnet paare die durch den intrinsichen Weg konstruiert sind involution voneinander sind. Das löst technisch gesehen dass Bonnet-Problem aber kommt vielleicht wie schummeln rüber. Die freier gewählten paare durch das approximierte $w$ haben aber diese beziehung nicht und lösen trotzdem das ganze problem irgendwie

### Plan of Attack

- Die familie von ebenen kurven darstellen nur mit theta funktionen

- Numerische integrieren von der rotationsfunktion $\Phi$ für ein freiew $w$ berechnen

- Isothermen Zylinder darstellen
  - Die bonnet paare in diesem case lösen vielleicht nichts sind aber vielleicht ganz interessant

- Isothermen Torus für die richtige wahl von $w$ darstellen

- Bonnet paare in diesem case darstellen

Coole Visualisierungsideen

- Animationen von der Konstruktion sind vielleicht cool, Fächer an kurven der sich öffnet
- Drucken!!!!!!!!!!
