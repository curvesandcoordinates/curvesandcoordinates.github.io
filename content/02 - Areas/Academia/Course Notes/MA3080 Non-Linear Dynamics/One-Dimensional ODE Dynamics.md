---
publish: true
created: 2025-10-28T10:44:07.000+01:00
modified: 2026-06-10T19:12:41.564+02:00
tags:
  - academia
---

Dynamics concerns itself specifically with the effects of system in which differential equations determine the trajectory. We have seen from other courses that simple differential equations of the form
$x' = f(x)$
with $x = x(t) \in \R^{d}$ are relatively simple to solve and have (under nice assumptions like [[Lipschitz Continuity]] of $f$) we know that via Picard-Lindelöf we get at least a local solution of the problem.

In dynamics will will always consider two aspects to a given problem:

1. The analytical solution to a problem given its differential equation (very algebraic and solution oriented)
2. The geometric intuition given by a differential equation which might lead us into the direction of a qualitative analysis

In order to hone the geometric intuition we require some simple terms

> [!definition|\*] Phase Spaces and Trajectories
> Given a differential equation
> $x' = f(x)$
> with $x = x(t) \in \R^{d}$ we define the following terms
>
> 1. $\R^{d}$ is called the Phase Space of the system
> 2. $x: \mathcal{I} \to \R^{d}$ is called the trajectory of our system

Note that we can think of the equation giving us a vector field determining the trajectory $x$ of a system.

> [!example|\*] Lienar Example
> Considering an example like
> $x' = x$
> with $x = x(t) \in \R$ and $x(0) = x_{0}$
> We already know that an analytic solution is given by seperation of variables and is $x(t) = x_{0} e^{t}$. Qualitatively this can be seen from a phase portrait which shows that the given vector field always points away from the origin, meaning that even the qualitative picture would expect our trajectory to be ever moving away from the origin. Note also that since $x = 0$ is a zero of the right side, that the vector field is $0$ there and thus a point placed there should also stay there.

> [!definition|\*] Equilibrium Points
> Given the differential equation $x' = f(x)$
> with $x = x(t) \in \R^{d}$ we call a point $x^{*} \in \R^{d}$ and equilibrium point if
> $f'(x^{*}) = 0$

sometimes we call an equilibrium point a steady state or stationary point.

## Calculation in Low-Dimensional Examples

The theory of ODEs handles the case where $f$ is a linear map. Given a non-linear map though it becomes significantly more difficult to solve analytically for a solution. If the degree of the polynomial though is low enough there exist ways to obtain a solution which we will discuss in the one-dimensional case now.

> [!example|\*] Logistic Population Modelling
> From Biology we obtain a differential equation that is meant to model population size called the Verhulst Model or logistic equation. It is given by
> $x' = r x \left(1 - \frac{x}{p}\right)$
> where $r, p > 0$ are parameters interpreted as the growth rate and the carrying capacity.
> We can transform this problem a little to remove one parameter completely by defining $\tilde{t} = r t$ which then gives us that
> $\frac{dx}{d\tilde{t}} = \frac{x'}{r}$
> giving us
> $\frac{dx}{d \tilde{t}} = x \left(1-\frac{x}{p}\right)$
> which we will simply take as out new canonical growth formula. We can even normalize more by considering the transformation given by $x = p \tilde{x}$ and obtain
> $x' = x - x^{2} = x \left(1 -x\right)$
> Qualitatively we can see that in any case the map $f$ has two zeros, $x_{0}^{*} = 0, x_{1}^{*} = p$ which means we have two equilibria in the system. We can also see though by observing the vector field that the two equilibria seem to not be the same. $x_{0}^{*}$ has all arrows pointing away from it, meaning a small perturbation might knock our particle off of the point. The other equilibrium seems to be rather attractive or stable, since a small perturbation will move the particle back to it.

We capture the idea of stability of equilibria seen in the previous example in the following definition

> [!definition|\*] Lyapunov Stability
> An equilibrium point $x_{*} \in \R^{d}$ of a system $x' = f(x)$ is called Lyapunov Stable if for every $\epsilon > 0$ there exists $\delta > 0$ such that
> $\norm{x_{0} - x_{*}} \leq \delta \implies \norm{x(t) - x^{*}} \leq \epsilon \quad \forall t \geq 0$
> Sometimes we just call such a point stable. If a point is not Lyapunov stable it is called unstable.

This is caputred in the idea that given a ball of any size around $x_{*}$ we can always find a smaller ball such that if we start our particle anywhere inside this smaller ball it will never go further away from the equilibrium than the bigger ball. Thinking ob a football on a parabola makes this image clear, as we can for any height always find a smaller height to let go our ball at such that it doesnt have enough enery to exceed the bigger threshhold.

The attractive property discussed in the example also gives rise to a stronger notion

> [!definition|\*] Local Asymptotic Stability
> An equilibrium point $x_{*} \in \R^{d}$ of a system $x' = f(x)$ is called locally asymptotically stable if it is stable and there exists some $\delta > 0$ such that
> $\norm{x_{0} - x_{*}} \leq \delta \implies \lim_{t \to +\infty} \norm{x(t) - x_{*}} = 0$

This can again be visualised by a footbal in a parabola, which only exerts local asymptotic stability if we introduce friction, since then the ball will loose energy with every undulation and at some point lay still. If friction is removed we still call the equilibrium stable but our ball doesnt every need to stay still at the equilibrium point.

### Global Stability

In general the stability problem is easier to see on the local level. Global asymtotic stability, by which we mean that the $\delta$-balls can be made as big as one wants, is in general more difficult to prove.

We can check it in our example

> [!example|\*] Global Stability of Verhulst Model
> Back in the situation
> $x' = x \left(1 - \frac{p}{x}\right)$
> we have that $x_{*} = 0$ is an unstable equilibrium point. A phase portrait shows that given $x_{0} < 0$ our particle escapes to $- \infty$ and given $x_{0} > 0$ we have that
> $\lim_{t \to \infty} x(t) = p$
> This behaviour is emblematic for the fact that the term “global stability” depends a lot on our chosen domain. If we choose $x_{0} \in \R$ then this system is not globally stable while choosing $x_{0} \in \R^{+}$ is globally stable.

We will now aim to prove this qualitative picture of global stability of the Verhulst Model in order to show a technique we can use to prove global stability.

For this we borrow an intuition from physics. Namely we want to prove that given trajectory always goes to a specific point. To prove this in physics we often use so-called potentials, which have the property that they decrease along trajectories and are $0$ at an equilibrium. Given such a function $L$ such that for any trajectory $x(t)$ the map
$\frac{dL}{dt}(x(t)) < 0$
would mean that along trajectories our function goes to zero and it is zero at equilibria, thus any starting point must go to an equilibrium.

This idea is encoded in the following definition

> [!definition|\*] Lyapunov Functions
> In the context of a general ODE
> $x' = f(x)$
> with $x(t) \in \R^{d}$ we call a map $L: \mathcal{X} \to \R$ a Lyapunov Function if it satisfies the following properties, also let $x_{*}$ be an equilibrium:
>
> 1. $L \in C^{1}(\mathcal{X}, \R)$ and $x_{*} \in \mathcal{X} \subset \R^{d}$
> 2. $L(x_{*}) = 0$ and $L(x) > 0$ for $x_{*} \neq x \in \mathcal{X}$
> 3. $\frac{d}{dt} (L \circ x) < 0$ for $x_{*} \neq x \in \mathcal{X}$

In concrete applications these conditions suffice to be used for our tools but we do encounter the situation that for $\mathcal{X} \subset \R^{d}$ unbounded we would like the Lyapunov function $L$ to not become flat at infinity. Here we would want an additional property, namely beign _radially unbounded_, which amounts to stating that
$\norm{x} \to \infty \implies L(x) \to \infty$
This allows us to describe exactly the technique described above to prove local asymptotic stability.

> [!theorem|\*] Strict Lyapunov Function
> Let $L$ be a Lyapunov function for the ODE $x' = f(x)$ and let $x_{*} \in \mathcal{X} \subset \R^{d}$ be an equilibrium point. Then $x_{*}$ is locally asymptotically stable.
> If $\mathcal{X} \subset \R^{d}$ is compact and $x(t) \in \mathcal{X}$ for all $t \geq 0$ then we have
> $\lim_{t \to + \infty} \norm{x(t) - x_{*}} = 0$

this statement is not prove explicitly but we can consider it an intutitive fact. Using this let us now prove the global stability of the Verhulst Model.

> [!proposition|\*] Verhulst Model is Globally Stable on the Positive Real Axis
> Given the Differential Equation of the Verhulst Model
> $x' = x \left(1 - \frac{x}{p}\right)$ with $x \in \R^{+}$
> the equilibrium $x_{*} = p$ is globally asymptotically stable, meaning that for any $x_{0} > 0$ we have that
> $\lim_{t \to +\infty} \norm{x(t) - x_{*}} = 0$

`\begin{proof}`
By the previous discussions this amounts to finding a Lyapunov function for $f(x) = x \left(1 - \frac{x}{p}\right)$. Note that we simplify the model first by moving the equilibrium to the origin by considering $y = x - p$ then our system becomes
$y' = (y + p) \left(1 - \frac{y+p}{p}\right) = -y \left(\frac{y}{p} + 1\right)$
with $y_{0} > -p$ where we are now focussing on the equilibrium $y_{*} = 0$
Now to find a good candidate for a Lypunov function note that we can always write a one-dimensional ODE as a gradient system
$y' = - \nabla V(y) = - \dot V(y)$
for some $V: \R^{+} \to \R$. By the fundamental theorem of calculus we get that
$V(y) = \int \frac{y^{2}}{p} + y = \frac{1}{2} y^{2} + \frac{1}{3p} y^{3}$

Now we will use this as our Lypunov function, meaning we have to prove the properties

- $V (0) = 0$
- $V(y) > \frac{1}{2}p^2 - \frac{1}{3p} p^{3} = \frac{1}{2}p^2 - \frac{1}{3} p^{2} = \frac{1}{6} p^{2} > 0$ for all $y > -p$
- $\frac{d}{dt} V(y(t)) = \dot V(y) y' = -\left(\dot V(y)\right)^{2} < 0$ for all $0 \neq y \in (-p, \infty) \setminus \set{0}$

As we are working with an unbounded area we can also easily check radial unboundedness and see that we have found a suitable Lypunov function.

This means that the transformed system is globally asymptotically stable at $y_{*} = 0$ and thus our original system is at $x_{*} = p$
`\end{proof}`

Note that in the proof the idea of using the gradient system representation forces the third property of the lyapunov function to be true. This isnt in general so easy though since gradient systems can only easilly be found in one-dimensional cases.

## Local Analysis of Dynamical ODEs

For a general non-linear system it can be really difficult to even find the equilibria, further finding Lypunov functions to prove some sort of strong stability condition is also increasingly difficult in higher dimensions. Thus we might want to try a local approach at analysing equilibria given a steady state $x_{*}$ and $d = 1$.

For this we consider the conceptual image already brought up before. We are given a statring point very close to our equilibrium, for example at some perturbation around $x_{*}$. Then we can write this trajectory relative to $x_{*}$ as
$x(t) = x_{*} + \epsilon X(t)$
where $X(t) \in \R$ and $\epsilon > 0$.

Using Taylor expansion gives

$$$\begin{align*}
\epsilon X' = \left(x_{*} + \epsilon X\right)' = x' &= f(x_{*} + \epsilon X) = f(x_{*}) + \epsilon f'(x_{*}) X + \frac{\epsilon^{2}}{2} f''(x_{*})X^{2} + \ldots \\
&=  \epsilon f'(x_{*})X + O(\epsilon^{2}X^{2})
\end{align*}$$
If we now divide by $\epsilon$ and note that our perturbation can be arbitrarily small we get that
$$X' \approx f'(x_{*}) X$$
Considering now this new simpler system we know that behaviour around $0$ has to roughly correspond to bevaviour of $x(t)$ around $x_{*}$

> [!definition|*] Linearized Systems
> Given an ordinary differential equation
> $$x' = f(x)$$
> with $x \in \R^{d}$ we call the linearized system or linearization near $x_{*}$ is given by
> $$X' = J_{f}(x_{*}) X$$
> where $J_{f}$ is the jacobian of $f: \R^{d} \to \R^{d}$

This linear system is more simplistic in its dynamics. For a visual idea behind this consider if we had a linear system
$$X' = A X$$
where $A$ was especially simple
$$A = \mathrm{diag}(\lambda_{1}, \ldots, \lambda_{n})$$
then we can of course define any vector in terms of a basis of eigenvectors. We can then note that applying $A$ maps
$$\begin{pmatrix}v_{1} \\ \vdots \\ v_{n}\end{pmatrix} \mapsto \begin{pmatrix}\lambda_{1} v_{1} \\ \vdots \\ \lambda_{n} v_{n}\end{pmatrix}$$
meaning that if all $\lambda_{i} < 0$ we can expect that $X'$ is pointed back to the way we are moving a particle, which indicates stability. If there is a direction in which $\lambda_{j} > 0$ then moving the vector in that direction means we can escape into that direction.

This intuition is completely correct, but we need to modify the technicalities a little when trying to move a general matrix $A$ into the diagonal form. We mostly use the [[Jordan-Normal Form]] for this transformation and it gets us the following statements. 

> [!theorem|*] Stability of Linear Systems
> Let $A \in \R^{d \times d}$ be a given and let $\set{\lambda_{j}}_{j \in I}$ be the distinct eigenvalues of $A$. Then the ODE given by 
> $$x' = Ax$$
> with $x(t) \in \R^{d}$ and $x(t_{0}) = x_{0}$ has an equilibrium at $x_{*} = 0$.
> The stability of this steady state is
> - *asymtotically stable* if $\forall j \in I: \quad \mathrm{Re}(\lambda_{j}) < 0$
> - *unstable* if there exists $j \in I$ such that $\mathrm{Re}(\lambda_{j}) > 0$

The main interprestation here is that for a linear system the eigenvalues give us an idea of how the steady state behaves. Keep in mind that complex entreis correspond to “rotation” around the steady state, while attraction or repelling is governed by the real component. 

This statement lets us combine everything and actually say something about the local behaviour of a non-linear ODE

> [!corollary|*] Linear Stability Analysis of ODEs
> Suppose $f \in C^1$ and consider the ODE
> $$x' = f(x) \quad x = x(t) \in \R^d$$
> The stability of an equilibrium point $x_{*}$ is determined by the linearized system
> $$X' = Df(x_{*}) X$$
> as long as there are no Eigenvalues on the imaginary axis.
> More specifically if all the real parts of Eigenvalues are
> - negative then $x_{*}$ is locally asymptotically / exponentially stable
> - positive then $x_{*}$ is unstable

Using this we also want to classify the points for which we can actually say something using linearization

> [!definition|*] Hyperbolic Points
> Given the above situation $x' = f(x)$ with the linearization $X' = AX$ we call an equilibrium $x_{*}$ **hyperbolic** if $\mathrm{Re}(\lambda) \neq 0$. It is called **non-hyperbolic** if $\mathrm{Re}(\lambda) = 0$.

$$$
