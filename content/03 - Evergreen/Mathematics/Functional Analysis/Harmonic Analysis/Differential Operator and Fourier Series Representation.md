---
publish: true
created: 2024-01-10T12:48:45.216+01:00
modified: 2026-06-10T19:14:51.440+02:00
tags:
  - thoughts
---

As an Example of  Operator theory in action (specifically in the Context of [[MA3001 Functional Analysis]] ) we want to formalise the differential Operator and through its Eigenvectors deduce the Fourier Series Representation for periodic functions.

Intuitively we have learned that a well-conditioned operator is both[[§7 More about invertibility - Index Theory#^255964 | compact]] and [[§8 Spectral Theory of Compact Operators#^68c2fa|self-adjoint]]. We will want to find that the simple differential Operator has these properties.

## Setup

To define what (at first limited) flavour of the differential operator we want let us consider the following differential equation
$u' = \lambda u$
with  $u \in C^{1}_{\text{per}, 0} = \set{u \in C^{1}( [0, 2\pi]) \mid u(0) = u(2\pi), u'(0) = u'(2\pi), \int_{0}^{2\pi} u dx= 0}$ with the norm $\norm{u} = \norm{u}_{\infty} + \norm{u'}_{\infty}$
If we want to solve this problem in general we can see it as an Eigen-problem concerning the differential operator $D = \frac{d}{dx}$ with domains defined as $D: C^{1}_{\text{per}, 0} \to C_{\text{per}, 0}$
where $C_{\text{per}} = \set{u \in C([0, 2\pi]) \mid u(0) = u(2\pi), \int_{0}^{2\pi} u dx= 0}$

### Problems of this Operator

This operator is nice to define but lacks valued properties that we would like to have, in order to make the Eigen-problem as simple as possible

1. The Domain and Target spaces are different, which is unusual for an Eigenvalue Problem, meaning we would like to make them the same. The Problem here is that the image space specifically is much bigger than the domain, so simply expanding doesn't work.
2. Our operator also isn't compact, which we would like to at least have.

We can solve both of these Problems by considering the inverse operator of $D$

> [!info]
> Notice that in the best case scenario we don't unexpectedly change the Eigenvalues and Vectors while inverting. Meaning this all still aids to solving the original differential Equation

## Construction of the Inverse Operator

The Inverse of our Operator $D$ is an integral Operator in the following way $\begin{align*}
Du = f &\iff u' = f \iff u' = \text{antiderivative of f with zero mean} \\
&\iff u(x) = \int_{0}^{x}f(s) ds - \frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{x}f(s)ds\right)dx
\end{align*}$
where the right hand sign is divided up into:$\begin{align*}
\int_{0}^{x}f(s) ds &= \text{antiderivative}\\
\frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{x}f(s)ds\right)dx &= \text{mean of antiderivative}
\end{align*}$
By modifying integrands we can write this simpler by

$$$\begin{align*}
	u(x) &=  \int_{0}^{2\pi} \mathbb{1}_{[0,x]}(s) f(s) ds - \frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{2\pi}\mathbb{1}_{[0,x]}(s)f(s)ds\right)dx\\
&= \int_{0}^{2\pi} \mathbb{1}_{[0,x]}(s) f(s) ds - \frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{2\pi}\mathbb{1}_{[0,x]}(s)f(s)dx\right)ds\\
&= \int_{0}^{2\pi} \mathbb{1}_{[0,x]}(s) f(s) ds - \frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{2\pi}\mathbb{1}_{[0,x]}(s)dx\right)f(s)ds\\
&= \int_{0}^{2\pi} \mathbb{1}_{[0,x]}(s) f(s) ds - \int_{0}^{2\pi} \frac{2\pi- s}{2\pi} f(s)ds\\
&= \int_{0}^{2\pi} \left[ \mathbb{1}_{[0,x]}(s) - \frac{2\pi- s}{2\pi} \right] f(s)ds\\
\end{align*}$$
We can use this standard form to now construct our inverse operator to $D$
 $I: C_{\text{per}, 0} \to C^{1}_{\text{per}, 0}$ with $(If)(x) = \int_{0}^{2\pi} \left[ \mathbb{1}_{[0,x]}(s) - \frac{2\pi - s}{2\pi} \right] f(s) ds$ and by construction we get that $D^{-1} = I$. This $I$ is formally called a Greens's Function.

We can now, since $C_{per, 0}^{1} \subset C_{per,0}$, simply consider $I: C_{\text{per}, 0} \to C_{\text{per}, 0}$ and solve our first problem.

### Compactness of $I$ 
In fact we have solved the second problem as well, since we can use [[§8 Spectral Theory of Compact Operators#^3677fd|Lemma 8.1]] in the following way.
Notice that $I: C_{\text{per}, 0} \to C^{1}_{\text{per}, 0}$ is continuous by the [[§5 Open Mapping Theorem#^f57832 | OMT]], meaning that for $B_{1}(0) \subset C_{per, 0}$ we get that $$I(B_{1}(0)) \text{ is bounded in } C_{per, 0}^{1}$$
By [[§8 Spectral Theory of Compact Operators#^3677fd|Lemma 8.1]] we also can see that $I(B_{1}(0))$ is relatively compact in $C_{per, 0}$ so $I: C_{\text{per}, 0} \to C_{\text{per}, 0}$ is compact

## Spectrum of $I$
Now that we have a Compact operator we can use [[§8 Spectral Theory of Compact Operators#^78eb81 | Theorem 8.1]] and gain some insights into this Operator.

Since we are working with infinite Dimensional spaces we know that $\dim X = \infty \implies 0 \in \spec I$. 
Considering any other eigenvalues we have that $$\begin{align*}
\lambda \in \spec K \setminus \set{0} &\iff \lambda \text{ eigenvalue of } I\\
&\iff \exists f\neq0: If = \lambda f\\
&\iff DIf = \lambda D f\\
&\iff f = \lambda D f\\
&\iff \frac{1}{\lambda}f = Df\\
\end{align*}$$
So all Eigenvalues of $I$ are reciprocals of Eigenvalues of $D$. Let for any $\lambda \in \mathbb{C}$ :$\mu = \frac{1}{\lambda}$ then we can calculate: $$\begin{align*}
Df = \mu f \iff f' = \mu f \iff f(x)=Ae^{\mu x}
\end{align*}$$
Now that we know how our general Eigenvectors, look we can use our periodicity meaning $f(0) = f(2\pi)$ and get $$\begin{align*}
f(0) = f(2 \pi) \implies Ae^{\mu 0} &= A e^{\mu2\pi} \implies 1 = e^{\mu2\pi} \implies 1 = e^{\Re(\mu) 2\pi} \cdot e^{i(\Im(\mu)) 2\pi}
\end{align*}$$
Since we know that $|e^{\Re(\mu) 2\pi)}| = 1 \iff \Re(\mu) = 0$ it holds that $$e^{\Im(\mu) 2\pi} = 1 \implies \mu = i k$$
Meaning our eigenvectors look like $f(x) = A e^{ikx}$  $\forall k \in \mathbb{Z}$. Since we also have our extra property of functions having mean zero we can also restrict this general Eigenvector a little more $$\int_{0}^{2\pi} f(x) dx = \int_{0}^{2\pi} A e^{ikx} dx = \frac{A}{ik} \cdot 0 = 0$$ and can see that $k \in \mathbb{Z} \setminus \set{0}$ 

Now we know that the $\spec K = \set{ \frac{1}{ik} \mid k \in \mathbb{Z} \setminus \set{0}} \cup \set{0}$ 

### Eigenvectors
We can also find out what Eigenvectors correspond to this spectrum, since
 $$ \lambda = \frac{1}{ik} \implies \ker(I-\lambda \mathcal{I}) = \span \set{e^{ikx}}$$which already hints at the Fourier Series Representation of functions.

## Fourier Series Representations and ONB
Up until now all we have done is complicatedly solve a differential Equation by considering it as an Eigen-problem with a complicated but nice operator. We haven't really gotten very far in applying our results outside of this differential equation.

Using Hilbert Spaces (specifically expanding our above problem to $L^{2}_{per}$) and our [[§8 Spectral Theory of Compact Operators#^aacb21 |Eigenvector-Theory on Self-Adjoint operators]], we can use the already defined Operator to prove the existence and efficacy of Fourier Series Representations. For this we can express the existence of Fourier Series Representations in the following simple claim 

> [!claim|*] Fourier Series Representation of $L^2$ functions
> The Set $\set{e_{k}} \subset L^2([0,2\pi])$ with $$e_{k}(x) = \frac{1}{\sqrt{2\pi}}e^{ikx}$$
> is an Orthonormal Basis of $L^{2}([0, 2\pi])$ meaning that for all $f \in L^{2}([0, 2\pi])$ we can write $$f = \lim_{N\to \infty} \sum\limits_{k=-N}^{N} \innprod{f}{e_{k}}e_{k}$$
> The limit here being in $L^{2}$, so $$\norm{f - \sum\limits_{k=-N}^{N} \innprod{f}{e_{k}}e_{k}}_{L^{2}} \to 0 $$

in the language of Functional Analysis this becomes simple to show since we only need to show that the $e_{k}$ are actually Eigenvectors of a Self-Adjoint, compact operator and that the space $L^2([0, 2\pi])$ is separable.

## The Operator
Since we already know that the space of Eigenvectors of our previously constructed map $I$ contains our Fourier Basis, so we only need to modify our efforts from there.

We now define $I:L_{0}^{2} \to L_{0}^{2}$ with $$(If)(x) = \int_{0}^{2\pi} \left[ \mathbb{1}_{[0,x]}(s) - \frac{2\pi - s}{2\pi} \right] f(s) ds$$
where now our domain is $L_{0}^{2} = \set{f \in L^{2}([0, 2\pi]) \mid \int_{0}^{2\pi} f = 0}$ (we here again start with the mean-zero functions but will loosen this assumption later).

To show that this function is well-defined we merely need to show that for all $f \in L^2_0$ we get $If \in L^2_0$ . This holds since $$\begin{align*}
|If(x) - If(y)| &= \int_{0}^{2\pi} \left[ \mathbb{1}_{[0,x]}(s) - \frac{2\pi - s}{2\pi} \right] f(s) ds - \int_{0}^{2\pi} \left[ \mathbb{1}_{[0,y]}(s) - \frac{2\pi - s}{2\pi} \right] f(s) ds\\\\
&= \int_{0}^{2\pi} f(s)\left[ \mathbb{1}_{[0,x]}(s) - \mathbb{1}_{[0,y]}(s)\right] ds \text{ using } x< y\\
&= \int_{x}^{y} 1 \cdot f(s)ds \le \sqrt{\int_{x}^{y} 1 ds} \sqrt{\int_{x}^{y} f(s)ds} \le \sqrt{\int_{x}^{y} 1 ds} \sqrt{\int_{0}^{2\pi} f(s)ds}\\
&\leq \sqrt{|x-y|} \cdot \norm{f}_{L^2}
\end{align*}$$

Which means that our Operator doesn't just map to $L^2_0$ but to continuous functions which are smaller.

## Eigenspace Invariance
We know that in our previous Setup the Eigenvectors of correspond to the Fourier Basis. We have changed the space though, and in expanding it the question is whether we have added some Eigenvectors, that we are ignoring now.

Suppose that we have $u \in L^2_0$ which is an Eigenvector. Then we get $\exists \lambda \in \mathbb{C}\setminus \set{0}$ such that $$\begin{align*}
Iu &= \lambda u\\
u &= \frac{1}{\lambda}I u
\end{align*}$$
Since $Iu \in C_{per,0}$ by our previous continuity proof, meaning we can say that $u \in C_{per,0}$ since the derivative of it must be continuous.

## Compactness
To show the compactness we will simply use some facts from Analysis

> [!definition|*] Hölder Continuous Functions
> Let $\alpha \in (0, 1], A \subset \mathbb{R}^{n}$ compact subset, then the set of Hölder-Continuous Functions is $$C^{\alpha}(A) = \set{u \in C(A) \mid \sup\limits_{x, y \in A, x \neq y} \frac{|u(x) - u(y)|}{|x-y|^{\alpha}}< \infty}$$
> 
with the Norm 
$$\norm{u}_{\alpha} = \norm{u}_{\infty} + \sup\limits_{x, y \in A, x \neq y} \frac{|u(x) - u(y)|}{|x-y|^{\alpha}} $$

>[!info]
>A couple useful facts are that:
>- $|u(x) - u(y)| \leq \norm{u}_{\alpha} |x-y|^\alpha$
>- For $\alpha = 1$ we get the lipschitz continuous functions

A nice theorem we also need is that 
> [!theorem|8.5]
> For $\alpha \in (0,1], A \subset \mathbb{R}$ compact subspace. Bounded compact sets in $C^{\alpha}(A)$ are relatively compact subsets of $C(A)$
> 

We can now use this to claim that our Operator $I$ is compact 
Consider a founded sequence $\set{f_{j}}$ in $L_{0}^{2}$, then consider $\set{If_{j}}$ and note that the boundedness of $f_{j}$ gives us (using the continuity innequality from above) that $$\set{If_{j}} \text{ bounded in } C^{\alpha}([0, 2\pi]) \text{ with } \alpha = \frac{1}{2}$$
Using theorem 8.5 we get that $\set{Kf_{j}}$ has a convergent subsequence in $C([0,2\pi])$. Since the $L^{2}$ Norm is stronger than our norm on $C$ via $$\norm{g_{j} - g}_{L^{2}}= \sqrt{\int_{0}^{2\pi} |g_{j} - g | ^{2}} \leq \sqrt{2\pi \norm{g_{j}- g}_{\infty}^{2}} = \sqrt{2\pi} \norm{g_{j} - g}_{\infty}$$
## Self-Adjoint
The deciding property that we will be adding to our operator is that we would like it to be Self-Adjoint. This would allow us to use the [[§8 Spectral Theory of Compact Operators#^aacb21|spectral theory]] and prove our claim.

First consider what fails for the normal derivative operator $D$ (which still is the inverse of $I$). Consider for $f, g \in C_{per, 0}^{1}$
$$\begin{align*}
\innprod{Df}{g} &= \int_{0}^{2\pi} \frac{df}{dx} \cdot \overline{g}\\
&= f \cdot g \mid_{[0, 2\pi]} - \int_{0}^{2\pi}f \cdot \overline{\frac{dg}{dx}} = - \int_{0}^{2\pi}f \cdot \overline{Dg}\\
&= -\innprod{f}{Dg}
\end{align*}$$

This means we nearly have self-adjointness but need to correct the operator a little bit. We can modify it by considering the Operator $\frac{1}{i}D = \frac{1}{i} \frac{d}{dx}$ since then
$$\begin{align*}
\innprod{\frac{1}{i}Df}{g} &= \int_{0}^{2\pi} \frac{1}{i}\frac{df}{dx} \cdot \overline{g}\\
&= \frac{1}{i}f \cdot g \mid_{[0, 2\pi]} - \int_{0}^{2\pi}f \cdot \overline{\frac{1}{i}\frac{dg}{dx}} = \int_{0}^{2\pi}f \cdot \overline{\frac{1}{i}Dg}\\
&= \innprod{f}{\frac{1}{i}Dg}
\end{align*}$$

Since we know $I = D^{-1}$ we would like to check if the same logic applies to $iI$ and that becomes a self-adjoint operator.

Suppose $f, g \in C_{per,0}$ and let $u = If, v = Ig \iff f = u', g = v'$ then we get $$\innprod{f}{Ig}=\innprod{\frac{d}{dx} u}{v} = -\innprod{u}{\frac{d}{dx} v} = - \innprod{If}{g}$$
so the same fix gets us $$\innprod{f}{iKg} = \innprod{iKf}{g}$$
## Quality of Life
Now we essentially have proven everything. By our spectral theory of self adjoint operators we know that the Eigenvalues, namely $\set{e^{ikx}}_{k \in \mathbb{N}\setminus \set{0}}$ form an Orthonormal Basis of $L_0^2$ and thus our claim from above is proven....nearly. We are still imposing the restriction that the mean is 0. This is not necessary.

We will remedy this as follows, for any $f \in L^2([0, 2\pi])$ we consider the mean $\tilde f = \frac{1}{2\pi} \int_{0}^{2\pi} f$ and set$$f = (f - \tilde f) + \tilde f$$
where $(f - \tilde f) \in L_{0}^{2}$ and $\tilde f \in \span \set{e_{0}}$. This means that $L^{2} = \span \set{e_{k}}_{k\in \mathbb{N}}$ 

## Summary
To Summarise we have shown via the spectral theorem of self-adjoint operators using the operator $(\frac{1}{i} \frac{d}{dx})^{-1}$ which has eigenvector $e_{k}$. We dont even have to explicitly show that the $e_{k}$ are orthogonal, but rather we can just believe in Proposition 8.2 which tells us that the Eigenvectors of Self-Adjoint Compact operators are Orthogonal, given that they are different. 
$$$
