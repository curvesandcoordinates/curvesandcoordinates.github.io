---
publish: true
created: 2025-06-24T14:07:54.530+02:00
modified: 2026-06-10T19:14:51.492+02:00
tags:
  - thoughts
---

We want to now use all this Frame buisness to work on our Time Frequency space. Consider some $\Lambda \subset G \times \hat G$
and $g \in \C^{G}$ a fixed function. We can then construct a frame from this by considering
$(g, \Lambda) = \set{\pi(\lambda) g \midline \lambda \in \Lambda}$
We have then already shown in [[Time-Frequency Analysis#^b84b0c|the inversion formula for the gaber transform]] that for any $f \in \C^{G}$ we have
$f(k) = \frac{1}{\norm{g}_{2}^{2} \sqrt{|G|}} \sum\limits_{\lambda\in \Lambda} c_{\lambda} \pi(\lambda) g(k)$
hence $(g, G \times \hat G)$ is a tight frame. But this is as we have mentioned before slightly overcrowded.

> [!definition|\*] Gaber Frame
> In general for some fixed $g \in \C^{G}$ and some subgroup $\Lambda \leq G \times \widehat{G}$ we call the frame
> $(g, \Lambda) = \set{\pi(\lambda) g \midline \lambda \in \Lambda}$
> a Gaber Frame

**Q: What are subsets $\Lambda \subset G \times \hat G$ such that $\set{\Pi(\lambda)g \midline \lambda \in \Lambda}$ is a Frame**

> [!proposition|4.38]
> If $\Lambda \triangleleft G \times \hat G$ then
> $S \pi(\lambda) = \pi(\lambda) S$
> for every $\lambda \in \Lambda$ where $S = S_{\lambda}$ is the frame operator  for $(g, \Lambda)$

`\begin{proof}`
Let $f \in \C^{G}$ be a function and then we can calculate

$$$\begin{align*}
S \pi(\lambda) f = \sum\limits_{\mu \in \Lambda} \innprod{\pi(\lambda)f}{ \pi(\mu)g} \pi(\mu)g = \sum\limits_{\mu \in \Lambda} \innprod{ f}{ \pi(\mu)g} \pi(\mu)g
\end{align*}$$

>The Reader is left to the Proof

`\end{proof}`

We now introduce some useful notation. Given $\Lambda \triangleleft G \times \ hat G$ we define
$$\Lambda^{\circ} = \set{\mu \in G \times \hat G \midline \Pi(\lambda) \Pi(\mu) = \Pi(\mu)\Pi(\lambda), \forall \lambda \in \Lambda}$$
which is sometimes called the **adjoint subgroup of $\Lambda$**. It is easy to see that this adjoining is an involution meaning
$$\left( \Lambda^{\circ} \right)^{\circ} = \Lambda$$

> [!proposition|*] Frame Operator of Gabor Frame Expressed by Adjoint
> Let $\Lambda \triangleleft G \times \hat G$ with $g, \tilde g \in \C^{G}$ then
> $$\sum\limits_{\lambda \in \Lambda} \innprod{f}{\Pi(\lambda)g} \Pi(\lambda) \tilde g = \frac{|\Lambda|}{|G|} \sum\limits_{\mu \in \Lambda^{\circ}} \innprod{\tilde g}{\Pi(\mu) g} \Pi(\mu) f$$
> In particular the frame operator $S$ of $(g, \Lambda)$ has the form
> $$S = \frac{|\Lambda|}{|G|} \sum\limits_{\mu \in \Lambda^{\circ}} \innprod{g}{\Pi(\mu) g} \Pi(\mu)$$

`\begin{proof}`
Since $\set{\frac{1}{\sqrt{|G|}} \Pi(\lambda) \midline \lambda \in G \times \hat G}$ is an ONB for $\left( \mathcal{L}(\C^{G}), \innprod{\cdot}{\cdot}_{HS} \right)$ hence the operator

$$\tilde S f = \sum\limits_{\lambda \in \Lambda} \innprod{f}{\Pi(\lambda)g} \Pi(\lambda) \tilde g$$
has a representation
$$\tilde S = \sum\limits_{\mu \in G \times \hat G} a_{\mu}\Pi(\mu)$$
Moreover 
$$\Pi(\lambda)^{*} \Pi(\mu) \Pi(\lambda) = c_{\lambda, \mu} \Pi(\mu)$$
with $c_{\lambda, \mu} \in \mathbb{T}$
Then
$$\sum\limits_{\mu \in G \times \hat G} a_{\mu}\Pi(\mu) = \tilde S = \Pi(\lambda)^{*} \tilde S \Pi(\lambda) = \sum\limits a_{\mu} \Pi(\lambda)^{*} \Pi(\mu) \Pi(\lambda) = \sum\limits_{\mu} c_{\lambda,\mu} a_{mu} \Pi(\mu)$$
The coefficients $a_\mu$ are unique which means that
$$a_{\mu}= 0 \text{ or } c_{\lambda, \mu} = 1$$ for all $\lambda \in \Lambda$.
This implies that $\lambda \in \Lambda^{\circ}$ and $a_{\mu}= 0$ if $\mu \notin \Lambda^{\circ}$.

To complete the proof we have to simply prove an additional claim

> [!claim|*]
> if $\mu \in \Lambda^{\circ}$ then
> $$a_{\mu} = | \Lambda | \innprod{\tilde g}{\Pi(\mu) g}$$

`\begin{proof}`
Let $h, g \in \C^{G}$ and $A \in \mathcal{L}(\C^{G})$ then computation is
$$\innprod{h \otimes g}{A}_{HS} = \sum\limits_{x \in G} \innprod{(h \otimes g) \delta_{x}}{A \delta_{x}} = \ldots = \innprod{h}{Ag}$$


Now we have
$$\tilde S = \sum\limits_{\lambda \in \Lambda} \Pi(\lambda) \tilde g \otimes \Pi(\lambda) g$$
and 
$$a_{\mu} = \frac{1}{|G|} \innprod{\tilde S}{\Pi(\mu)}_{HS} = \ldots = \frac{|\Lambda|}{|G|} \innprod{\tilde g}{\Pi(\mu) g}$$
`\end{proof}`

This gives the first identity and the second follows with $\tilde g = g$.
`\end{proof}`

From this we get a fundamental identity. It is similar to the sussmann identity in a more general fashion by seperating the g-s from the f_s.
> [!corollary|4.40] Fundamental Identity in T-F Analysis
> Let $\Lambda \triangleleft \widehat{G}$ then we have
> $$\sum\limits_{\lambda \in \Lambda} V_{g}f(\lambda) V_{\tilde g} \tilde f = \frac{|\Lambda|}{|G|} \sum\limits_{\lambda \in \Lambda^{\circ}} V_{g} \tilde g (\lambda) \overline{V_{f} \tilde f (\lambda)}$$

`\begin{proof}`
Straightforward computation using the previous result
`\end{proof}`

Now the important question is that if we are given a time frequency frame and we want to reconstruct vectors using this if the dual frame can be expressed as time frequency shifts aswell

> [!proposition|4.41] Dual Frame is also a Time Frequency Shift
> Let $\Lambda \triangleleft G \times \widehat{G}$ and let $(g, \Lambda)$ be a frame for $\C^{G}$. Then the canonical dual frame $\set{S^{-1} \Pi(\lambda)g \midline \lambda \in \Lambda}$ is given by 
> $$(\tilde g, \Lambda) = \set{\Pi(\lambda) \tilde g \midline \lambda \in \Lambda}$$
> for some $\tilde g \in \C^{G}$
> In particular we get that
> $$f = \sum\limits_{\lambda \in \Lambda} \innprod{f}{\Pi(\lambda)\tilde g} \Pi(\lambda) g = \sum\limits_{\lambda \in \Lambda} \innprod{f}{\Pi(\lambda)g} \Pi(\lambda) \tilde g$$
> For all $f \in \C^{G}$

`\begin{proof}`
We mainly use proposition 4.39 by expressing the frame operator as
$$S = \sum\limits_{\lambda \in \Lambda} \Pi(\lambda)g \otimes \Pi(\lambda)g$$
Now $S$ commutes with all $\Pi(\lambda)$, and so does $S^{-1}$.
Thus 
$$S^{-1} \Pi(\lambda) g = \Pi(\lambda) S^{-1} g = \Pi(\lambda) \tilde g$$

`\end{proof}`

This is one of the best possible cases, since we have a firm hand on the dual frame if we can find this $\tilde g$ which by the proof is given by $S^{-1} g$. Thus in general the reconstruction problem has been greatly simplified for a given frame of $\C^{G}$, we can now work towards finding sparser frames.

> [!theorem|4.42] Wexler-Raz
> Let $\Lambda \triangleleft G \times \widehat{G}$. Then for the Gabor frames $(g, \Lambda)$ and $(\tilde g, \Lambda)$ we have the following identity
> $$f = \sum\limits_{\lambda \in \Lambda} \innprod{f}{\Pi(\lambda)g}\Pi(\lambda)g \iff \innprod{g}{\Pi(\mu) \tilde g} = \frac{|G|}{|\Lambda|} \delta_{\mu, 0}$$

`\begin{proof}`
Given the right to left direction let us assume that
$$\innprod{g}{\Pi(\mu) \tilde g} = \frac{|G|}{|\Lambda|} \delta_{\mu, 0}$$
then
$$S = \sum\limits_{\lambda \in \Lambda} \Pi(\lambda) g \otimes \Pi(\lambda)\tilde g = id$$
Then
$$\Pi(0) = id = S = \frac{|G|}{|\Lambda|} \sum\limits_{\lambda \in \Lambda^{\circ}} \innprod{g}{\Pi(\lambda) \tilde g} \Pi(\lambda)$$
Note that $\set{\Pi(\lambda) \midline \lambda \in \Lambda^{\circ}}$ is linearly independent. In particular
$$\frac{|\Lambda|}{|G|} \innprod{g}{\Pi(\mu)\tilde g} = \delta_{\mu, 0}$$
`\end{proof}`
                   
Now a quick corollary of this is

> [!corollary|4.42]
> If $\Lambda \triangleleft G \times \widehat{G}$ then $(\phi, \Lambda)$ is a tight frame for $\C^{G}$ iff $(\phi, \Lambda^{\circ})$ is an orthogonal set.

> [!theorem|4.43] Ron-Shen
> Let $\Lambda \triangleleft G \times \widehat{G}$ then $(g, \Lambda)$ is a frame of $\C^{G}$ if and only if $(g, \Lambda^{\circ})$ is a linearly independent set

`\begin{proof}`
In the finite case this is very much simpler than in the infinite case, since there the notion of linear independence needs to be extended.

Consider left to right, meaning assume $(g, \Lambda)$ is a frame then by the Wexler-Raz theorem 4.42 we have
$$\innprod{\Pi(\lambda)g}{\Pi(\mu)\tilde g} = \delta_{\mu, \lambda}$$
==Check this again==
for all $\lambda, \mu \in \Lambda^{\circ}$ then
$$0 = \sum\limits_{\lambda \in \Lambda^{\circ}} c_{\lambda} \Pi(\lambda) \implies 0 \innprod{\sum\limits_{\mu \in \Lambda^{\circ}} c_{\mu} \Pi(\mu)g}{\Pi(\lambda) \tilde g} = c_{\lambda}\innprod{\Pi(\lambda) g}{\Pi(\lambda) \tilde g}$$
which gives us that $c_{\lambda}= 0$ for all $\lambda \in \Lambda^{\circ}$ thus $(g, \Lambda^{\circ})$ is linearly independent.

From right to left we asume linear independence of $(g, \Lambda^{\circ})$. Then there is a unique $\tilde g \in \span \set{\Pi(\lambda)g \midline \lambda \in \Lambda^{\circ}}$ such that $\tilde g \perp \span \set{\Pi(\mu)g \midline \mu \in \Lambda^{\circ} \setminus \set{0}}$ hence 
$$\innprod{g}{\Pi(\mu) \tilde g} = \delta_{\mu, 0}$$
Then theorem 4.42 implies $(g, \Lambda)$ is a frame.
`\end{proof}`

$$$
