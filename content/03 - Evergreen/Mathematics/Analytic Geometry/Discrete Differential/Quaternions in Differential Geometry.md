---
publish: true
created: 2026-02-09T23:16:47.175+01:00
modified: 2026-06-10T19:14:51.193+02:00
tags:
  - thoughts
---

To describe objects more nicely locally we use quaternions since the mutliplication they give is relatively useful for rotation and local euclidean transformations.

> [!definition|\*] Quaternions
> The real $4$ dimensional vector space $\mathbb{H}$ spanned by the generators $1, i, j, k$ together with the multiplication given by the rules
> $\mathbb{ij = k \quad jk = i \quad ki = j \quad ji = -k \quad kj = -i \quad ik = -j}$
> and
> $\mathbb{i}^{2} = \mathbb{j}^{2} = \mathbb{k}^{2} = \mathbb{ijk} = -1$
> is called the algebra of Quaternions. It furnishes a skew field (meaning it is like a field but the multiplaciton is non-commutative)

For a quaternion $q = a + b \mathbb{i} + c \mathbb{j} + d \mathbb{k}$ we denote the real and imaginary parts as follows:

$$$\begin{align*}
\mathrm{Re}(q) &=  a \\
\mathrm{Im}(q) &= b \mathbb{i} + c \mathbb{j} + d \mathbb{k}
\end{align*}$$
Note that $\mathrm{Im}(q) \not \in \R$. 

We will use a useful identification by considering that $\mathrm{Im}(\mathbb{H}) \cong \R^{3}$. This can be identified via the simple mapping
$$\begin{pmatrix}a  \\ b \\ c\end{pmatrix} \mapsto a \mathbb{i} + b \mathbb{j} + c \mathbb{k}$$
and also we define the conjugation of quaternions as flipping the imaginary part, meaning
$$\bar{q} = a - b \mathbb{i} - c \mathbb{j} - d \mathbb{k}$$
and using this we can define
$$\norm{q} = q \bar{q}$$
We also ge that 
$$q^{2} = - \norm{q}^{2}$$
and
$$q^{-1} = \frac{\bar{q}}{\norm{q}^{2}}$$
Also for $p, q \in \mathrm{Im}(\mathbb{H})$ we find
$$pq = -\innprod{p}{q} + p \times q$$
For a unit Quaternion $q$ and an imaginary one $v \in \mathrm{Im}(\H)$ we find that
$$q = \cos\left( \frac{\phi}{2} \right) + \sin\left(  \frac{\phi}{2} \right) w$$
with $w \in \mathrm{Im}(\H)$ and $\norm{w} = 1$ and
$$q^{-1} v q \in \mathrm{Im}(\H)$$
is the rotation of $v$ around $w$ with angle $\phi$.

In fact $S^{3} = \set{q \in \H \midline \norm{q} = 1}$ is a double cover of $\mathrm{SO}(3)$

> [!remark|*] What direction is conjugation spinning
> Lets try a $90$-Degree rotation to check. We would get 
> $$q = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} k \sim 1 + k$$
> This means that rotation of, say $i$, is given by
> $$\left( \frac{1}{\sqrt{2}}( 1 - k) \right) i \left( \frac{1}{\sqrt{2}}( 1 k k) \right) = \frac{1}{2}(i-j)(1 + k) = \frac{1}{2}(i - j - j - i) = -j$$
> So this conjugation rotates clockwise around our chosen vector $q$

### Matrix Representations of Quaternions
We identify 
$$\mathbb{1} \cong \begin{pmatrix}1  & 0 \\
0 & 1\end{pmatrix} \quad \i \cong \begin{pmatrix}0 & -i \\ -i  & 0\end{pmatrix} \quad \j \cong \begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix} \quad \k \cong \begin{pmatrix}-i  & 0 \\ 0 & i\end{pmatrix}$$
we can find a representation of $\H$ in $\mathrm{gl}(2, \C)$. In particular $S^{3} \cong \mathrm{SU}(2)$ and $\mathrm{Im}(H) \cong \mathrm{su}(2)$. In this representation we find that if $\tau$ is out representaiton of quaternions as matrices that
$$\norm{q} = \det(\tau(q))$$
We can check this by simple calculation. We also in this process find that all of the operations from quaternions have a matrix equivalent:
$$\begin{align*}
\mathrm{Re}(q) &= \frac{1}{2} \mathrm{tr}(\tau(q))
\bar{q} &= \tau(q)^{H} \text{ conjugate transpose}
\end{align*}$$
If $p, q \in \mathrm{Im}(\H)$ we find that
$$p \times q = \frac{1}{2}(pq - qp) \longleftrightarrow \frac{1}{2}[\tau(p), \tau(q)] = \frac{1}{2}(\tau(p) \tau(q) - \tau(q) \tau(p))$$
$$$
