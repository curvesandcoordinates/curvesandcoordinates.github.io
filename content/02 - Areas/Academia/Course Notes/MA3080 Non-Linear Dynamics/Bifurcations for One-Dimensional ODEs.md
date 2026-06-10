---
publish: true
created: 2026-02-16T23:34:36.000+01:00
modified: 2026-06-10T19:12:41.595+02:00
tags:
  - academia
---

We now want to consider an ode that is dependent on one parameter and consider how the equilibria behave under changing the parameter. Consider the ODE
$x' = f(x, p)$
where $p$ is considered the parameter. We assume everyhting is sufficciently smooth and see what we can say.

### Local Analysis Explicitly

Using the multi-dimensional Taylor Expansion we can locally expand the expression around a given equilibriums $x_{*}$ for a fixed parameter value $p_{*}$. This extensive analysis tells us that for a fixed parameter value we again can describe the local behaviour by the linearized system. We now have one added degree of freedom given by $p$ which generally will destroy hyperbolicity at an isolated point. When explicitly calculating we get
$x' = \del_{x} f(0) x + \del_{p} f(0) p + \frac{1}{2} \del_{xx}f(0) x^2 + \ldots$
plugging in a $p_{*}$ such that the first term vanishes we generally get an ODE
$x' = \del f_{p}(0) p + \frac{1}{2} \del_{xx}f(0)x^2 + \ldots$

## Fold Bifurcations

In general when we consider a system of the form
$y' = q + y^2$
we can see that depending on $q$ we get one, two or no equilibria. This is callled a Fold Bifurcation and it is goverend by the following theorem

> [!theorem|\*] Fold Bifurcation
> Consider an ODE
> $y' = q + y^2$
> then there exists a (generic) fold bifurcation at $(0, 0)$ if the following conditions hold
>
> - $f(0) = 0 \quad \del_{x} f(0) = 0$
> - $\del_{xx}f(0) \neq 0, \quad \del_{p}f(0) \neq 0$

It is also a fact that one of the two bifurcations is stable and the other unstable by definition.
![[04 - Resources/Assets/Bifurcations for One-Dimensional ODEs_Fold Bifurcation.png]]

### A quick note on the Definition of Bifurcations in general

We call such a transition in equilibria a bifurcation. We tend to write down normal forms for different bifurcations as these are the prototypical example of how a specific bifurcation occurs. We consider anything a bifurcation of the same type if the phase portraits are topologically equivalent to one of the normal forms.

## Three Prong Bifurcations

We can now also consider systems which occur often in physics and biology. Namely such ones that have a continous line of equilibria. This means we consider ones where the ODE has the form
$x' = xf(x, p)$
these can have more complex behaviour of
