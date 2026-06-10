---
publish: true
created: 2025-06-17T14:49:17.870+02:00
modified: 2026-06-10T19:14:51.480+02:00
tags:
  - thoughts
---

Having built up the theory around the [[Discrete Fourier Transform]] we can consider a function $f \in L^{1}(\Z_{N})$ and ask questions about the frequency content of this signal.
Consider for instance the question\
$$\textbf{Given a specific time $t_{0} \in \Z_{N}$ dowe have a frequency $\omega_{0} \in \widehat{\Z_{N}}$?}$$
This question should on its face be slightly absurd since in order to observe a frequency we require some time interval. A frequency by definition oscilates in a time interval. So we have to consider some interval $(t_{0} - \epsilon, t_{0} + \epsilon)$. In a given interval though we might have multiple oscilations of $f$ thus we would also be detecting other frequencies $\omega$ which gives us a certain uncertainty in the frequency space as well.

Furthermore note that if we become more specific in the time domain we might be checking a too small intervall for our frequency thus increasing uncertainty in frequency space and vise-versa. This interplay is studied in so-called uncertainty principles and we will consider two of them here

## Heisenberg Uncertainty Principle

The most common uncertainty principle uses the language of supports. The support of a function is basically the set on which that function is non-zero, thus interesting for us. This means that the following uncertainty relation tells us that cutting of the function $f$ above and below to focus on one specific area decreases the support of $f$ but at the same time must increase the size of the support of $\widehat{f}$ meaning we introduce more frequencies (mainly artificial noise created by the unnatural cuts).

> [!theorem|\*] Heisenberg Uncertainty Principle
> Let $f \in \C^{G}$ be a non-zero function. Then we have
> $|\supp(f)| \cdot |\supp(\hat f)| \geq |G|$

`\begin{proof}`
We can first express $f$ in terms of $\hat f$ by the inversion formula
$f = \frac{1}{|G|} \sum\limits_{\chi \in \hat G} \hat f(\chi) \chi$
Then we can estimate that
$|f(y)| \leq \frac{1}{|G|} \sum\limits_{\chi \in \hat G} |\hat f(\chi)| |\chi(y)| = \frac{1}{|G|} \sum\limits_{\chi \in \hat G} |\hat f(\chi)|$
Analogously we have that
$|\hat f(\chi)| \leq \ \sum\limits_{y \in G} |f(y)|$
both of these innequalities can involve the support if we consider that

$$$\begin{align*}
|\widehat{f}(\chi)| &\leq \sum\limits_{y \in G} |f(y)| \leq m \cdot |\supp(f)|
\end{align*}$$
where $m = \norm{f}_{\infty}$ 

This now gives us

$$|f(y)| \leq \frac{1}{|G|} \sum\limits_{\chi \in \hat G} |\hat f(\chi)| =  \frac{1}{|G|} \sum\limits_{\chi \in \supp(\widehat{f})} |\hat f(\chi)|\leq \frac{m}{|G|} |\supp(f)|\sum\limits_{\chi \in \supp(\widehat{f})}1$$
finally giving us
$$|f(y)| \leq \frac{m}{|G|}|\supp(f)| \cdot |\supp(\widehat{f})|$$
Now since we are in the finite case the maximum gets reached thus we can pick a $y'$ such that $f(y') = m$ and get
$$m \leq \frac{1}{|G|} m |\supp(f)| |\supp(\hat f)|$$
and so we get
$$|G| \leq |\supp(f)| |\supp(\hat f)|$$

`\end{proof}`

Keep in mind that there exist functions $f$ such that the equality holds. Take for example $f = \delta_{0}$ then $|\supp(\hat f)| = |G|$

This innequality tells us that if we measure how localized a function is by the cardinality of its support, that we can not localize $f$ without delocalizing $\hat f$ and vice-versa.

A question that comes up now is how to characterize those functions that give equality in this theorem.

> [!lemma|*] Fourier Transform of Characteristic Function on Normal Subgroup
> Given $H \triangleleft G$. Then for every $\chi \in \hat G$
> $$\widehat {\mathbb{1}_{H}}(\chi) = 
> \begin{cases}
|H|, \quad \chi \in H^{\perp} \\
 0,  \quad \text{otherwise} \\
\end{cases}$$

`\begin{proof}`
For $\chi \in H^{\perp}$ we get that 
$$\widehat{\mathbb{1}_{H}}(\chi) = \sum\limits_{x \in G} \mathbb{1}_{H}(x) \overline{\chi(x)} = \sum\limits_{x \in H} \overline{\chi(x)} = |H|$$

In the other case let us consider $\chi \notin H^{\perp}$ then we can find some $y \in H$ such that $\chi(y) \neq 1$. Then
$$\widehat{\mathbb{1}_{H}}(\chi) = \sum\limits_{x\in H} \overline{\chi(x)} = \chi(y) \sum\limits_{x\in H} \overline{\chi(x + y)} = \chi(y) \sum\limits_{z \in H} \chi(z) = \chi(y) \widehat{\mathbb{1}_{H}}(\chi)$$
impying that $\widehat{\mathbb{1}_{H}}(\chi) = 0$
`\end{proof}`

> [!lemma|*] Cardinality Relation of Orthogonal Subgroups
> If $H < G$ then $$|H| |H^{\perp}| = |G|$$

^8538d4

`\begin{proof}`
$$|H| = \sum\limits_{y \in G} \mathbb{1}_{H}(y) = \sum\limits_{y\in G} |\mathbb{1}_{H}(y)|^{2} = \norm{\mathbb{1}_{H}}_{2}^{2} = \frac{1}{|G|} \norm{\widehat{\mathbb{1}_{H}}}_{2}^{2} = \frac{1}{|G|} \sum\limits_{\chi \in \hat G} |\widehat{\mathbb{1}_{H}}(\chi)|^{2} = \frac{1}{|G|} |H|^{2}|H^{\perp}|$$
Where the last equality is by paseval.
`\end{proof}`

We will also require the so-called [[Common Linear Operators of Harmonic Analysis#Modulation Operator|modulation operator]] which modulate the function via a given character $\chi \in \widehat{G}$. Intuitively we can think of modulation as translation in the frequency space, as we can see in the property that [[Common Linear Operators of Harmonic Analysis|$T_{\chi}\mathcal{F} = \mathcal{F} M_{\chi}$]].

> [!lemma|*] We can translate and modulate any function to include $0$ and the identity.
> Let $0 \neq f \in \C^{G}$. There are $x \in G$ and $\chi \in \hat G$ (keep in mind that $\chi^{-1} = \overline{\chi}$) such that
> $$0 \in \supp(T_{-x}M_{\overline{\chi}}f)$$ and 
> $$\mathbb{1}_{\hat G} \in \supp(\widehat{T_{-x}M_{\overline{\chi}}f})$$

`\begin{proof}`
Since $f \neq 0$ there is $x \in G$ with $f(x) \neq 0$. Moreover, there is $\chi \in \hat G$ such that $\widehat f(\chi) \neq 0$ by the uniqueness theorem. Taking these characters and calculating gives us the Lemma

We can then calculate
$$T_{-x} M_{\overline{\chi}} f(0) =  T_{x} (\overline{\chi} f)(0) = \overline{\chi(x)} \cdot f(x) \neq 0$$
and if we consider $\mathbb{1}_\widehat{G}(x) = 1$
$$\widehat{T_{-x}M_{\overline\chi}f}(\mathbb{1}_\widehat{G}) = \sum\limits_{g \in G} T_{-x}M_{\overline\chi} f(g) \mathbb{1}_\widehat{G} (g) = \sum\limits_{g \in G} f(x-g) \overline{\chi(x-g)} = \widehat{f}(\chi) \neq 0$$
thus the contents of our supports are given
`\end{proof}`


We can now fully characterise functions that give us equality in the heisenberg innequality.

> [!theorem|*] Equality Condition of the Heisenberg Innequality
> If $0 \in \supp(f), \mathbb{1}_{\hat G} \in \supp(\hat f)$ then we have
> $$|G| = |\supp(f)| |\supp(\hat f)| \iff f = c \mathbb{1}_{H}$$
> where $c \in \C \setminus \set{0}$ and $H \triangleleft G$

`\begin{proof}`
For the proof we consider $G \cong \Z_{N}$ since the general statement then is obtained via the structure theorem

### “$\implies$ “ Assume that for $f \in \C^G$ we have $|G| = |\supp(f)| \cdot |\supp(\hat{f})|$
Let 
$$N = |G| = |\supp(f)| |\supp(\hat f)|$$
and consider $$\supp(f) = \set{y_{1}, \ldots, y_{M}}$$
then we can say that $M \leq N$ by assumption. Now we define a canonical map
$$\phi: G \to \hat G, \quad n \mapsto \phi_{n}$$
with $$\phi_{n}(l) = \exp \left( 2 \pi i l\frac{n}{N} \right)$$
Now for $0 \leq p \leq N-M$ let 
$$w_{k}^{(p)} := \widehat f(\phi_{k+p}) = \sum\limits_{y \in \Z_{N}} f(y) \overline{\phi_{k+p}}(y) = \sum\limits_{y \in \Z_{N}} f(y) \exp\left( -2 \pi i y\frac{(k+p)}{N}\right)$$

We now denote $z_{j} = \exp \left(- 2 \pi i \frac{y_{j}}{N} \right)$ and construct a matrix 
$$Z = (z_{k, j})^{M}_{k,j=1}$$
with 
$$z_{k,j} = z_{j}^{p+k}$$
also we denote two specific vectors
$$v = \begin{pmatrix}f(y_{1}) \\ \vdots \\ f(y_{M})\end{pmatrix} \quad w^{(p)} = \begin{pmatrix}w_{1}^{(p)} \\ \vdots \\ w_{M}^{(p)}\end{pmatrix}$$
then we can see that we can write everything sofar as a matrix multiplication 
$$w^{(p)} = Z \cdot v$$
We want to now understand this linear equation better by calculating the determinant of the matrix $Z$. To do this we first note that every column of $Z$ has the form
$$\begin{pmatrix}z_{j}^{p+1} \\ \vdots \\ z_{j}^{p+M}\end{pmatrix} = z_{j}^{p + 1}\begin{pmatrix}1\\ \vdots \\ z_{j}^{M-1}\end{pmatrix}$$
This means that we can deconstruct the determinant by
$$\det(Z) = z_{1}^{p+1}\cdot z_{2}^{p+1} \cdot \ldots \cdot z_{M}^{p+1} \det\begin{pmatrix}1& 1 & \cdots & 1 \\ \vdots &&&\vdots \\ z_{1}^{M-1}  & z_{2}^{M-1} & \cdots & z_{M}^{M-1}\end{pmatrix} = (z_{1}^{p}\cdot z_{2}^{p}\cdots z_{M}^{p})(z_{1}\cdot z_{2}\cdots z_{M}) \prod_{1 \leq j < k \leq M}(z_{j} - z_{k})$$
Where the last simplification results in a so-called vandermonde matrix. Since our values of $z_{i}$ are pairwise always different we know that $\det(Z) \neq 0$. This means we have only trivial zeros in our linear. equation for any $p$. This shows that $\hat f \circ \phi$ does not have $M$ consecutive zeros since our argument above can be done for any $p$. In particular we get that
$$\supp(\hat f \circ \phi) = \set{0, M, 2M, \ldots, N-M}$$

Rewriting gives us
$$\supp(\hat f) = \set{\phi(0), \phi(M), \phi(2M), \ldots, \phi(N-M)}$$
This implies that $\supp(f) \subset \Z_{N}$ is a group.

### $\impliedby$ Let $f = c \mathbb{1}_{H}$ where $c \in \C$ and $H \triangleleft G$
For the given $f$ we know that
$$H = \supp(f)$$
By the [[#^8538d4|cardinality relation of orthogonal subgroups]] we get that
$$|H| |H^{\perp}| = |G|$$
For $\chi \in \hat G$ and $\gamma \in H^{\perp}$ we have
$$\hat{f}(\gamma \chi) = \sum_{y \in G} \mathbb{1}_{H}(y) \overline{\gamma(y) \chi(y)} = \sum_{y \in H} \overline{\gamma(y) \chi(y)} = \sum_{y \in G} \overline{\chi(y)} = \sum_{y \in G} \mathbb{1}_{H}(y) \overline{\chi(y)} = \hat{f}(\chi)$$
Now if we use $\chi = \mathbb{1}_{\hat{G}}$ we get that
$$\hat{f}(\gamma) = \hat{f}(\mathbb{1}_{H})$$
thus telling us that on $H^{\perp}$ the fourier transform $\hat{f}$ is constant meaning $H^{\perp} \subset \supp(\hat{f})$

Now using $$|G| = |H| |H^{\perp}| = |\supp(f)| \cdot | \supp(\hat f)|$$

Since $|H^{\perp}|= |\supp(\hat f)|$ we get that $H^{\perp} = \supp(\hat f)$ giving us
$$\hat f = c \cdot \mathbb{1}_{H^{\perp}}$$
and thus our statement follows from lemma 3.11


The other direction is proven directly. Assume $f = \mathbb{1}_{H}$ for $H < G$ then by 3.11 we see that $\hat f = |H| \cdot \mathbb{1}_{\hat H}$ meaning that
$$|\supp (\hat f)| = |H^{\perp}|$$
And now using Lemma 3.12 we get what we want. 

WHATTT
`\end{proof}`

> [!remark|*]
> Given a group $G = \Z_{p}$ with $p$ a prime T. Tao has improved the bound by showing that then
> $$|\supp(f)| + |\supp(\hat f)| \geq p + 1$$
> which is mainly due to the fact that in groups of prime order our group becomes a field. 


## Entropy Uncertainty Principle (EUP) 

This uncertainty principle deals with describing how the information contained in $f$ and $\hat f$ is limited to a certain extend. To formulate this we first need to define information / entropy. Consult the [[Definitions of Information Theory]] for more detail on the actual definitions.

For the case of this uncertainty principle we only need to consider the formal situation of getting a stream of information of length $L$. This stream is a list of characters from the set $\set{x_{0}, \ldots, x_{N-1}}$ each symbol has probability $p_{i}$.

In this situation a measure of information is the [[Definitions of Information Theory#^eecf2b|shannon entropy function]] given by
$$H(p) = - \sum\limits_{i=1}^{N-1} p_{i} \log (p_{i})$$
This function also adheres to a the unvertainty principle we will discuss. To prove the EUP we need to first use a well-known Lemma from Measure theory in the context of [[Group Characters|dual groups]].

> [!lemma|*] Hausdorff-Young Innequality
> Let $p \in (1, 2)$ and the dual index $p'$ such that $\frac{1}{p} + \frac{1}{p'} = 1$ and a measure on the dual group given by the counting measure $\hat{\gamma}$. Thenfor $f \in \C^{G}$ then we have
> $$\norm{\hat f}_{\hat \gamma, p'} \leq \norm{f}_p$$


Using this we can prove the statemt of our uncertainty principle

> [!theorem|*] Entropy Uncertainty Principle
> Let $f \in \C^{G}$ with $\norm{f}_{2} = 1$. Then we have that
> $$H(|f|^{2}) + H(|\hat f|^{2}) \geq 0$$

`\begin{proof}`
The proof of this statement requires first restating it in an equivalent manner. Consider that
$$\begin{align*}
H(|f|^{2}) &+ H(|\hat f|^{2}) \geq 0 \\
\iff - \sum\limits_{g \in G} |f(g)|^{2} \log \left( |f(g)|^{2} \right) &- \sum\limits_{\chi \in \widehat{G}} |\widehat f(g)|^{2} \log \left( |\widehat f(g)|^{2} \right) \geq 0 \\
\iff \sum\limits_{g \in G} |f(g)|^{2} \log \left( |f(g)| \right) &+\sum\limits_{\chi \in \widehat{G}} |\widehat f(g)|^{2} \log \left( |\widehat f(g)| \right) \leq 0 \
\end{align*}$$

The approach here is to define a relevant function whose derivative is this term above. For this we consider a function given by some variable $l_{p}$-norms. To this end let us consider that for some $1 \leq p \leq 2$ we define $p' = \frac{p}{p-1}$

We then define a function for a given $f \in \C^{G}$
$$A(p) = \norm{f}_{p} + \norm{\hat f}_{p'} = B(p) + C(p)$$

where we write $B(p) = \norm{ f }_{p}$ and $C(p) = C(p') = \norm{ \widehat{f} }_{p'}$

To connect this to the term we want to prove we have to consider the derivative of $B$ and $C$. Consider for example that
$$\frac{d}{dp} \left( \log(B(p)) \right) = \frac{B'(p)}{B(p)} \iff B'(p) = B(p) \frac{d}{dp} \left( \log(B(p)) \right)$$
Computation gives us that since $B(p) = \left( \sum\limits_{y \in G} |f(y)|^{p} \right)^{\frac{1}{p}}$ we have
$$\log(B(p)) = \log \left( \left( \sum\limits_{y \in G} |f(y)|^{p} \right)^{\frac{1}{p}} \right) = \frac{1}{p} \log \left( \sum\limits_{y \in G} |f(y)|^{p} \right)  = \frac{1}{p} \log(\norm{ f }_{p}^{p} )$$
this gives us that
$$\frac{d}{dp} \left( \log(B(p) \right) = -\frac{1}{p^{2}} \log(\norm{ f }^{p}_{p} ) + \frac{1}{p} \frac{1}{\norm{ f }_{p}^{p} } \frac{d}{dp} \left( \sum\limits_{y \in G} |f(y)|^{p}  \right) = -\frac{1}{p^{2}} \log(\norm{ f }^{p}_{p} ) + \frac{1}{p \norm{ f }_{p}^{p}} \left( \sum\limits_{y \in G} |f(y)|^{2}\log(|f(y)|) \right)$$
In combination with $\norm{f}_{2} = 1 \implies B(2) = 1$ we see that
$$B'(2) = B(2) \frac{d}{dp} \left( \log(B(2)) \right) =  \frac{1}{2} \sum\limits_{y \in G} |f(y)|^{2} \log(|f(y)|)$$
Similarly we get
$$C'(2) = \left( \frac{1}{|G|} \sum\limits_{\chi} |\hat f(\chi)|^{2} \right)^{\frac{1}{2}} \left( \frac{1}{4} \log(|G|) - \frac{1}{4} \log \left( \sum\limits_{\chi} | \hat f(\chi)|^{2} \right) + \frac{1}{2} \frac{\sum\limits_{\chi} | \hat f(\chi)|^{2} \log|\hat f|}{\sum\limits_{\chi} | \hat f(\chi)|^{2}} \right)$$
ans since $\norm{f}_{2} = 1$ means $\norm{\hat f} = |G|$ we have that 
$$C'(2) = \frac{1}{2 |G|} \sum\limits_{\chi} | \hat f(\chi)|^{2} \log(|\hat f(\chi)|)$$
Using young's innequality we conclude that 
$$A(p) \geq 0$$
meaning in particular $A(2) \geq 2$ consequently we have that $A'(2) \leq 0$ which shows the statement.
`\end{proof}`




$$$
