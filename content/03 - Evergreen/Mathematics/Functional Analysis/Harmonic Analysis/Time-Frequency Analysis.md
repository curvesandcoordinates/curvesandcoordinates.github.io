---
publish: true
created: 2025-06-24T14:05:27.459+02:00
modified: 2026-06-10T19:14:51.567+02:00
tags:
  - thoughts
---

In Signal analysis we would sometimes like to graph that frequencies occur over times. This graph is useful to understand information transfered by a signal. To to this we will take a “cookie-cutter” function which cuts our function to only a local piece. Think specifically of a smooth version of $g_{m}(x) = \mathbb{1}_{[m, m+1]}(x)$ which allows us to only look locally at a function. The fourier transform of this gives us information on the frequencies contained in this.

Obviously some important properties of the cookie cutter is how local it is cutting. The more local you go the less the possible frequencies become etc. Depending on the smoothness of the cutter functions we also may introduce more frequencies that arent actually in our RAW signal.

> [!remark|\*] Redefine the Translation Operator for Ease of notation
> For ease of notation we will redefine the translation operator here to be the left translation
> $T_{p} f = f(j-p) \quad p \in \set{0, 1, \ldots, N-1}$

We will be using the [[Common Linear Operators of Harmonic Analysis#The Modulation Operator| Modulation Operator]] in the context of our simplest group $G = \Z_{N}$. In this case the modulation operator becomes:
$M_{q}f(j) = e^{2 \pi i  \frac{q}{N} j} f(j)$

Using these two operators and the interactive properties given in [[Common Linear Operators of Harmonic Analysis#The Time-Frequency Shift|properties of the Time-Frequency Shift]] we can define the main operator in time-frequency analysis

![[Common Linear Operators of Harmonic Analysis#^9acdd8]]

Sometimes we consider the parameter space as tuples, meaning we describe a specific Time-Frequency Shift with $\pi_{\lambda}$ where $\lambda = (p, q) \in G \times \widehat{G}$.

> [!proposition|\*] Basic Properties of Time Frequency Shifts
>
> 1. $\Pi(p, q)^{\ast} = T_{-p} M_{-q} = e^{-2 \pi i \frac{pq}{N}} \Pi(-p, -q)$
> 2. $\Pi(p, q) \Pi(p', q') = e^{-2 \pi i \frac{pq'}{N}} \Pi(p + p', q + q')$
> 3. $\Pi(p, q) \Pi(p', q') = e^{-2 \pi i \frac{pq' - q p'}{N}} \Pi(p', q') \Pi(p, q)$

`\begin{proof}`
Stupid Computation
`\end{proof}`

It even is infact true that the Time-Frequency Shifts make a Basis for the space of Operators on Functions. This means they are in a sense fundamental.

> [!proposition|\*] Time-Frequency Shifts form an ONB for Operators
> The set
> $\set{\frac{1}{\sqrt{N}} \pi(p, q) \midline p, q \in [0, N-1]}$ is an ONB with respect to the [[Operators of Finite Function Spaces#^f98065|Hilbert-Samuel Product]] for $(\mathcal{L}(\C^{\Z_{n}}), \innprod{\cdot}{\cdot}_{HS})$

`\begin{proof}`
We simply compute given two parameters $\lambda = (p, q), \quad \lambda' = (p', q')$
$\innprod{\pi_{\lambda}}{\pi_{\lambda'}}_{HS} = \sum\limits_{n=0}^{N-1} \innprod{\pi_{\lambda}\delta_{n}}{\pi_{\lambda'} \delta_{n}}$
Now the inner scalar product can be calculated seperately for $k \in \N$
$\innprod{\pi_{\lambda} \delta_{n}}{\pi_{\lambda'} \delta_{n}} = \sum\limits_{x=0}^{N-1} e^{\frac{2\pi i}{N} x (q-q')} \delta_{n}(x-p) \delta_{n}(x-p') = \sum\limits_{x=0}^{N-1} e^{\frac{2\pi i}{N} x (q-q')} \delta_{p+n}(x) \delta_{p'+n}(x)$
Since the last delta function are only both 1 if
$p + n = x = p' + n \implies p = p'$
Thus giving us the reformulation that
$\innprod{\pi_{\lambda} \delta_{n}}{ \pi_{\lambda'} \delta_{n}} = \delta_{p, p'} e^{\frac{2\pi i}{N} (q - q')(p + n)} = \delta_{p, p'} \cdot e^{\frac{2\pi i}{N} (q - q')p} \cdot e^{\frac{2\pi i}{N} (q - q')n}$
We can now solve that in general
$\innprod{\pi_{\lambda}}{\pi_{\lambda'}}_{HS} = \sum\limits_{n=0}^{N-1} \delta_{p, p'} \cdot e^{\frac{2\pi i}{N} (q - q')p} \cdot e^{\frac{2\pi i}{N} (q - q')n} =\delta_{p, p'} e^{\frac{2\pi i}{N} (q - q')p} \sum\limits_{n=0}^{N-1} e^{\frac{2\pi i}{N} (q - q')n} = Ne^{\frac{2\pi i}{N} (q - q')p} \delta_{p, p'} \delta_{q, q'}$
Since we know that $p = p'$ and $q = q'$ implies that $\lambda = \lambda'$ we get
$\innprod{\pi_{\lambda}}{\pi_{\lambda'}}_{HS} = Ne^{\frac{2\pi i}{N} (q - q')p} \delta_{\lambda, \lambda'}$
By counting dimensions we get that it is an ONB
`\end{proof}`

Using this basic Transformation of the Time-Frequency Transform we can now analyse a function using a socalled window function. We take this function $g \in \C^{N}$ and think of this as a probe, which we can time-frequency tranform to any place and ask how similar $f$ is to this function. This is called a _Gaber-Transform_.

> [!definition|\*] Gaber Transform (Short-Time Fourier Transform)
> Given a function $g \in \C^{N}$ we can define a map
> $V_{g} : \C^{\Z_{N}} \to \C^{\Z_{N} \times \Z_{N}} \quad V_{g}f(p, q) = \frac{1}{\sqrt{N}} \innprod{f}{\Pi(p, q) g}$
> That is
> $V_{g}f(p, q) = \frac{1}{\sqrt{N}} \sum\limits_{n=0}^{N-1} f(n) g(n-p) e^{- \frac{2 \pi i}{N}qn                                                                                                                                        }$
> where $g$ is called the window function.

^d241a0

This Fourier Transform we can also create an inversion formula. This creates $f$ from its infromation given in the Gaber Transform using $g$.

> [!proposition|\*] Inversion Formula for Gaber Transform
> Let $f, g \in \C^{\Z_{N}}$ then
> $f(k) = \frac{1}{\sqrt{N} \cdot \norm{g}_{2}^{2}} \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} V_{g}f(p, q) \overline{g(k - p)} e^{\frac{2 \pi i}{N}qk}$

^b84b0c

`\begin{proof}`
Simply compute for some $k \in \Z_{N}$ we have

$$$\begin{align*}
\frac{1}{\sqrt{N} \cdot \norm{g}_{2}^{2}} \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} V_{g}f(p, q) \overline{g(k - p)} e^{\frac{2 \pi i}{N}qk} &= \frac{1}{N \cdot \norm{g}_{2}^{2}} \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1}\sum\limits_{n=0}^{N-1} f(n) g(n-p) e^{- \frac{2 \pi i}{N}qn                                                                                                                                        } \overline{g(k - p)} e^{\frac{2 \pi i}{N}qk} \\
&= \frac{1}{N \cdot \norm{g}_{2}^{2}} \sum\limits_{p,n} f(n) g(n-p)\overline{g(k - p)} \sum\limits_{q} e^{\frac{2 \pi i}{N}q(k-n)}
\end{align*}$$
Now using the identity that
$$\sum\limits_{q} e^{\frac{2 \pi i}{N}q(k-n)} = \begin{cases}
N, \quad k = n \\ 0, \quad k \neq n
\end{cases}$$
we can calculate that
$$\begin{align*}
\frac{1}{\sqrt{N} \cdot \norm{g}_{2}^{2}} \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} V_{g}f(p, q) \overline{g(k - p)} e^{\frac{2 \pi i}{N}qk} &= \frac{1}{\norm{g}_{2}^{2}} \sum\limits_{p} f(k) g(k-p)\overline{g(k - p)} \\
&= f(k) \frac{\sum\limits_{p}g(p)\overline{g(p)}}{\norm{g}_{2}^{2}} \\
&= f(k)
\end{align*}$$
`\end{proof}`

> [!remark|*] Inversion Formula for Gaber Transform uses a System
> Hence $f \in \C^{\Z_{N}}$ can be expressed as the above formula which is 
> $$f(k) = \frac{1}{\sqrt{N} \cdot \norm{g}_{2}^{2}} \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} \innprod{f}{\Pi(p, q) g} \Pi(p, q) g$$
> The system $\set{\frac{1}{\sqrt{N}} \Pi(p, q)g}$ is in some sense an overcomplete system for $L^{2}(\Z_{N})$ we have reduntant information. Also we can observe that
> $$\norm{f}_{2}^{2} = \frac{1}{N^{2} \cdot \norm{g}_{2}^{4}} \norm{\sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} \innprod{f}{\Pi(p, q) g} \Pi(p, q) g}_{2}^{2} \leq \frac{1}{N^{2} \cdot \norm{g}_{2}^{4}} \left( \sum\limits_{p=0}^{N-1} \sum\limits_{q=0}^{N-1} |\innprod{f}{\Pi(p, q) g}| \norm{\Pi(p, q) g}_{2} \right)$$
> which ultimativly gives us
> $$\norm{f}_{2}^{2} \leq \frac{1}{N^{2} \norm{g}_{2}^{4}} N \norm{g}_{2}^{2} \norm{f}_{2}^{2}$$
> somehow we get that
> $$N^{2} \norm{g}_{2}^{2} \norm{f}_{2}^{2} = \sum\limits_{p,q = 0}^{N-1} |\innprod{f}{\Pi(p, q) g}|^{2}$$
> which shows that $\set{\Pi(p, q) g}$ is a tight frame


> [!proposition|*] Properties of the Gaber Transform
> 1. $V_{g}f(p, q) = e^{- 2 \pi i p \frac{q}{N}} V_{\hat g} \hat f (p, - q)$
> 2. $V_{g} f (p, q) = e^{-2 \pi \frac{pq}{N}}\left( f * M_{q} \overline{g^{*}} \right)(p) = \left( \hat f \ast M_{-p} \hat{g^{*}} \right)(q)$
> 3. (Moyals Identity) $\innprod{V_{g_{1}}f_{1}}{V_{g_{2}}f_{2}}_{L^{2}(\Z_{N} \times \Z_{N})} = \overline{\innprod{g_{1}}{g_{2}}_{L^{2}(\Z_{N})} }\cdot \innprod{f_{1}}{f_{2}}_{L^{2}(\Z_{N})}$

`\begin{proof}`
The first two properties are straight and formal calculation.

The third identity can be obtained by explanding
$$\innprod{V_{g_{1}}f_{1}}{V_{g_{2}}f_{2}}_{L^{2}(\Z_{N} \times \Z_{N})} = \sum\limits_{p,q} V_{g_{1}}f_{1} (p, q) \overline{V_{g_{2}}f_{2}(p, q)} = \cdots = \frac{1}{N} \sum\limits_{n, m} \sum\limits_{p}f_{1}(n) \overline{f_{2}(m)} \overline{g_{1}(n-p)} g_{2}(m-p) \sum\limits_{q}e^{-2 \pi i q \frac{n-m}{N}}$$
with the orthogonality relation of given characters we get
$$= \frac{1}{N} N \sum\limits_{n} f_{1}(n) \overline{f_{2}(m)} \cdot \sum\limits_{p} \overline{g_{1}(n-p)} g_{2}(n-p)$$
which gives us our claim by changing variables in the second sum
`\end{proof}`

If we now formally consider the situation where $g = f$ we can calculate
$$V_{f}f(p, q) = \frac{1}{\sqrt{N}} \sum\limits_{n=0}^{N-1}f(n) \overline{f(n-p)} e^{-2\pi i q \frac{n}{N}}$$

We can now begin to work towards another Identity that involves the Fourier Transform of a fuction with two inputs. This requires us define a way to simplify two inputs into one output. For this consider the symplectic Form given by the Matrix $J = \begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}$ and note that its explicit form is given for $v = \begin{pmatrix}v_{1} \\ v_{2}\end{pmatrix}, w = \begin{pmatrix}w_{1} \\ w_{2}\end{pmatrix}$ to be
$$\beta(v, w) = v_{1} w_{2} - v_{2} w_{1}$$
Using this we can now define a new Fourier Transform:
> [!definition|*] Symplectic Fourier Transform
> Using the symplectic Form $J = \begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}$ with the corresponding explicit function $\beta(v, w) = v_{1} w_{2} - v_{2} w_{1}$ we can define the symplectic Fourier Transform to be
> $$\mathcal{F}_{s} = \mathcal{F} \circ J$$
> An explicit expansion gives us $$\mathcal{F_{s}} f (p, q) = (\mathcal{F} \circ J)(p, q) = \frac{1}{N} \sum\limits_{n,m=0}^{N-1} f\left(J\begin{pmatrix}n \\ m\end{pmatrix} \right) e^{- 2 \pi i \frac{pn + qm}{N}} = \sum\limits_{n,m = 0} f(-m, n)e^{- 2\pi i \frac{pn + qm}{N}} = \sum\limits_{n,m = 0} f(m, n) e^{-2 \pi i \frac{pn - qm}{N}}$$

From this we can now symplectically Fourier Transform the Gabor Transform and Prove an Important Identity in this context

> [!proposition|4.16] Sussmanns Identity
> For $f_{1}, f_{2}, q_{1}, q_{2} \in \C^{\Z_{N}}$ we have
> $$\mathcal{F_{s}}(V_{g_{1}}f_{1} \overline{V_{g_{2}}f_{2}})(p, q) = V_{g_{1}}g_{2}(p, q) \cdot  V_{f_{1}}f_{2}(p, q)$$
> in particular
> $$\mathcal{F_{s}}(|V_{g}f|^{2})(p, q) = V_{g} g (p, q) \cdot V_{f}f (p,q)$$

`\begin{proof}`
$$\begin{align*}
\mathcal{F_{s}} (V_{g_{1}} f_{1} \overline{V_{g_{2}}f_{2}}) &= \frac{1}{N} \sum\limits_{nm} V_{g_{1}} f_{1}(m, n) \overline{V_{g_{2}} f_{2}(m,n) }e^{-2 \pi i \frac{pn - qm}{N}} \\
&= \frac{1}{N^{2}} \sum\limits_{nm} \innprod{f}{\Pi(m,n) g_{1}} \overline{\innprod{f}{\Pi(m,n) g_{1}}}e^{-2 \pi i \frac{pn - qm}{N}} 
\end{align*}$$

Using the fact that $\Pi$ is unitary we get
$$= \frac{1}{N^{2}} \sum\limits_{n,m} \innprod{\Pi(p, q)f_{1}}{\Pi(p, q)\Pi(m, n) g_{1}} \overline{\innprod{f}{\Pi(m,n) g_{1}}}e^{-2 \pi i \frac{pn - qm}{N}} $$
Using the commutator relation of $\Pi$ we get
$$\begin{align*}
&= \frac{1}{N^{2}} \sum\limits_{n,m} \innprod{\Pi(p, q)f_{1}}{\Pi(m, n)\Pi(p, q) g_{1}} \overline{\innprod{f}{\Pi(m,n) g_{1}}} \\
&= \frac{1}{N^{2}}\sum\limits_{n,m} V_{\Pi(p, q) g_{1}} \left( \Pi(p, q) f_{1} \right)(m,n) \overline{V_{g_2}f_{2}(m,n)} \\
\end{align*}$$
Now finally we use Moyals Identity
$$= \frac{1}{N} \innprod{f_{2}}{\Pi(p, q) f_{1}} \cdot \innprod{g_{2}}{\Pi(p, q) g_{1}} = V_{g_{1}} g_{2} (p, q) \cdot V_{f_{1}}f_{2}(p, q)$$
`\end{proof}`

## Time Frequency Analysis for finite Abelian Groups
We now dont have to rewrite everything. Simply just redefine the translation and modulation operators in this situation
$$T_{x}f(y) = f(y - x)$$
and
$$M_{\xi}f(y) = \xi(y) f(y)$$
for $\xi \in \hat G$

> [!remark]
> In the general case we see that $G \times \hat G$ is the time frequency plane. Algebraically we get $G \cong \hat G$ hence we know that
> $$G \times \hat G \cong G \times G$$
> meaning the questions can be asked why we introduced time frequency analysis in the first case instead of simply considering harmonic analysis on $G \times G$. The answer is that harmonic analysis on $G \times \hat G$ is very different to that on $G \times G$. This is because
> $$\hat{\left( G \times G \right)} = \hat G \times \hat G \neq \hat G \times G = \hat{\left( G \times \hat G \right)}$$

$$$
