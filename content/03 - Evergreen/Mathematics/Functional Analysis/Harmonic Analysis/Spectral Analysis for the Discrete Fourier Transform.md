---
publish: true
created: 2025-06-27T20:56:54.000+02:00
modified: 2026-06-10T19:14:51.533+02:00
tags:
  - thoughts
---

We want to develop a theory of the spectrum for the [[Discrete Fourier Transform|discrete fourier transform]]. This should get similar properties to the [[Spectrum of Real Fourier Transform|spectrum of real fourier transform]] but we can express everything explicitly as its finite dimensional.

Recall that the DFT was defined to be
$\mathcal{F}f(\chi) = \frac{1}{\sqrt{|G|}} \sum\limits_{x \in G} f(x) \overline\chi(x)$
We will focus on $G = \Z_{N}$ since the cartesian product only introduces index-complexity and any finite group is the cartesian product of $\Z_{a_{i}}$. In this case we can determine some basic properties of the [[Discrete Fourier Transform]]:

![[Common Linear Operators of Harmonic Analysis#^a0addf]]

For more detail check out [[Common Linear Operators of Harmonic Analysis#Discrete Fourier Transform| this]]

From this some interesting results are

- $\mathcal{F}^{4} = id$
- $\mathcal{F^{2}} \delta_{m} = \delta_{-m} = \delta_{N-m}$
- $\mathcal{F}^{2} \chi_{m} = \chi_{m} = \chi_{N-m}$

We now introduce a matrix $F_N$ with respect to the canonical basis $\set{\delta_{m} \midline m = 0, 1, 2 \ldots, N-1}$ which is the matrix corresponding to $\mathcal{F}$. Then $F_{N}^{P}$ corresponds to $\mathcal{F}^{P}$

$F_{N}^{2} = \begin{pmatrix}1 & 0 & \ldots & 0 & 0 \\0 & 0 & \cdots & 0 & 1 \\ \vdots & \vdots & & & \vdots \\ 0 & 0 & &0 & 0 \\ 0 & 1 & \cdots & 0 & 0\end{pmatrix}$
Keep in mind that the first coloumn stays fixed since
$\mathcal{F}^{2}  \delta_{0} = \delta_{N} = \delta_{0}$

> [!lemma|\*] Characteristic Polynomial of the Square of DFT
> The characteristic polynomial of $F_{N}^{2}$ is given by
> $p(\lambda) = \begin{cases}(\lambda-1)^{\frac{N+1}{2}} (\lambda+1)^{\frac{N-1}{2}} , \quad N  \text{ odd} \\ (\lambda-1)^{\frac{N+2}{2}} (\lambda+1)^{\frac{N-2}{2}} , \quad N  \text{ even}\end{cases}$

`\begin{proof}`
This statement boils down to intelligently calculating the matrix we have defined before.
To this end first define the antidiagonal matrix $\mathcal{J}_{k} \in \C^{k \times k}$ as
$\mathcal{J}_{k} = \begin{pmatrix}0 & 0 & \cdots & 0 & 1 \\ 0 & 0 & \dots &1 & 0 \\ \vdots & \vdots & &\vdots&\vdots \\ 0 & 1 &\dots &0&0\\ 1 & 0 & \cdots & 0 & 0\end{pmatrix}$
This allows us to decompose $F_{N}^{2}$ by

$$$F_N^{2} = \begin{pmatrix}1 & 0 \
0 & \mathcal{J}_{N-1}\end{pmatrix}$$
Now developing by the first coloumn we get
$$\det(\lambda I_{N} - F_{N}^{2}) = \det \begin{pmatrix}\lambda - 1 & 0 \\0 & \lambda I_{N-1} -\mathcal{J}_{N-1}\end{pmatrix} = (\lambda-1)\det(\lambda I_{N-1} - \mathcal{J}_{N-1})$$

Now we can recusively look at the characteristic polynomial of $\mathcal{J}_{k}$ and note that developing the matrix gives us
$$\det(\lambda I_{k} - \mathcal{J}_{k}) = \lambda \det \begin{pmatrix}\lambda I_{k-2} - \mathcal{J}_{k-2} & 0 \\ 0 & \lambda\end{pmatrix} + (-1)^{k+1} (-1) \det \begin{pmatrix}0 & -1 \\ \lambda I_{k-2} - \mathcal{J}_{k-2} & 0\end{pmatrix}$$
This simplifies to
$$\det(\lambda I_{k} - \mathcal{J}_{k}) = \lambda^{2} (-1)^{k-1+k-1} \det(\lambda I_{k-2} - \mathcal{J}_{k-2}) + (-1)^{k+2} (-1)^{k-1+1} (-1) \det(\lambda I_{k-2} - \mathcal{J}_{k-2}) = (\lambda^{2} - 1) \det(\lambda I_{k-2} - \mathcal{J}_{k-2})$$
Following this recurrence relation we get that
$$\det(\lambda I_{k} - \mathcal{J}_{k}) = \begin{cases}
(\lambda^{2}-1)^{\frac{k}{2}} &\quad k \text{ even} \\
(\lambda - 1)(\lambda^{2}-1)^{\frac{k-1}{2}}  &\quad k \text{ odd}
\end{cases}$$
Now using this we can divide up the cases
1. **$N$ odd
$$p(\lambda) = \det(\lambda I_{N} - F_{N}^{2}) = (\lambda - 1) \det(\lambda I_{N-1} - \mathcal{J}_{N-1}) =  (\lambda - 1) (\lambda^{2} - 1)^{\frac{N- 1}{2}} = (\lambda - 1)^{\frac{N- 1}{2} + 1} (\lambda + 1)^{\frac{N- 1}{2}} =(\lambda + 1)^{\frac{N + 1}{2}} (\lambda + 1)^{\frac{N - 1}{2}}$$
2. **$N$ even
$$p(\lambda) = \det(\lambda I_{N} - F_{N}^{2}) = (\lambda - 1) \det(\lambda I_{N-1} - \mathcal{J}_{N-1}) =  (\lambda - 1)^{2} (\lambda^{2} - 1)^{\frac{N- 2}{2}} = (\lambda - 1)^{\frac{N+ 2}{2}} (\lambda + 1)^{\frac{N - 2}{2}}$$

`\end{proof}`

According ot the previous lemma we have that $\spec(F_{N}^{2}) = \set{1, -1}$ hence we have
$$\spec(F_{N}) \subset \set{1, -1, i, -i}$$

Now we consider multiplicities. Let $m_{1}, m_{-1}, m_{i}, m_{-i}$ denote the multiplicities of their corresponding eigenvalues.

> [!lemma|*] Relations of Multiplicities of Eigenvalues
> Let $\tr(\mathcal{F}) = \alpha + i \beta \in \C$ then  the vector
> $$v = \begin{pmatrix}m_{1}  \\
 m_{-1}  \\
 m_i  \\
 m_{-i}\end{pmatrix}$$
  is a unique solution to $$Av = b_{e} \quad \text{or to } Av = b_{o}$$
> where 
> $$A = \begin{pmatrix}1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \\ 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1\end{pmatrix}$$
>  and
> $$b_{0} = \begin{pmatrix}\alpha \\ \beta \\ \frac{1}{2}(N+1) \\ \frac{1}{2}(N-1)\end{pmatrix} \quad b_{e}= \begin{pmatrix}\alpha \\ \beta \\ \frac{1}{2} (N+2) \\ \frac{1}{2}(N-2)\end{pmatrix}$$

`\begin{proof}`
Exercise
`\end{proof}`


Some notation that is relevant is that for any $f \in \C^{Z_{N}}$ we call it 
- *even*: if $f(m) = f(-m) = f(N-m)$
- *odd*: if $f(m) = f(-m) = - f(N-m)$



Analogous to the real case we now decompose our space. But we do this in a different manner that we had before, namely we define two spaces
$$\begin{align*}
L_{+}(\Z_{\N})&= \set{f \in \C^{Z_{N}} \midline f \text{ even}}\\
L_{-}(\Z_{\N})&= \set{f \in \C^{Z_{N}} \midline f \text{ odd}}
\end{align*}$$
Define the functions
$$v_{j} = \begin{cases}
\delta_{0}, &\quad j = 0 \\
\delta_{j} + \delta_{N-j}, &\quad j = 1, \ldots, \nu-1
\end{cases}$$

$$w_{k} = \begin{cases}
\delta_{N}, &\quad j = 0 \\
\delta_{k} - \delta_{N-k}, &\quad j = 1, \ldots, N-1
\end{cases}$$


> [!lemma|3.20]
> The system $\set{v_{j}, w_{k} \midline j = 0, \ldots \nu - 1, k = 1, \ldots N- \nu}$ ahs the properties that
> 1. $v_{j} \in L_{+}(\Z_{N}), w_{k} \in L_{-}(\Z_{N})$
> 2. The system is an orthogonal basis for $L^{2}(\Z_{N})$
> 3. $L^{2}(\Z_{N}) = L_{+}(Z_{N}) \oplus L_{-}(\Z_{N})$ in particulat the dimensions are $\dim L_{+} = \nu$ and $\dim L_{-}(\Z_{N}) = N - \nu$
> 4. $L_{+}$ is an eigenspace of $\mathcal{F^{2}}$ for $1 \in \spec(\mathcal{F}^{2})$
> 5. $L_{-}$ is an eigenspace of $\mathcal{F}^{2}$ for $-1 \in \spec(\mathcal{F}^{2})$

`\begin{proof}`
Clear calculation (maybe in the exercises)
`\end{proof}`


> [!lemma|3.21]
> Let $\phi \in L^{2}(\Z_{N})$ with $\mathcal{F} \phi = \lambda \phi$ Then we eithr have
> - $\phi$ is even and $\lambda \in \set{-1, 1}$
> - $\phi$ is odd and $\lambda \in \set{-i, i}$

`\begin{proof}`
Let $\phi \in L^{2}(\Z_{N})$ with the property $\mathcal{F}\phi = \lambda \phi$. Then we can see that $\mathcal{F}^{2} \phi = \lambda^{2} \phi$. Write $\phi$ in the ONB $\set{v_{j}, w_{k} \midline j = 0, \ldots, \nu -1, k = 1, \ldots, N-\nu}$

$$\phi = \sum\limits_{j=0}^{\nu-1} a_{j} v_{j} + \sum\limits_{k=1}^{N- \nu} b_{k}w_{k}$$
Then we can explicitly calculate
$$\mathcal{F}^{2} \phi = \sum\limits_{j=0}^{\nu-1} a_{j} v_{j} + \sum\limits_{k=1}^{N- \nu} b_{k}w_{k} = \lambda^{2} \left( \sum\limits_{j=0}^{\nu-1} a_{j} v_{j} + \sum\limits_{k=1}^{N- \nu} b_{k}w_{k} \right)$$

comparing coefficients leads to
$$\begin{align*}
(\lambda^{2}-1) a_{j} &=  0 && j = 0, 1, \ldots, \nu-1 \\
(\lambda^{2}+1) b_{k} &=  0 && k = 1, 2, \ldots, N - \nu
\end{align*}$$
from this we get that if
$$\begin{align}
\lambda &= \pm i \implies \forall j: \quad a_{j} = 0 \\
\lambda &= \pm 1 \implies \forall k: \quad a_{k} = 0 
\end{align}$$
In case (1) we have that $\phi$ is odd and in case (2) $\phi$ is even.
`\end{proof}`


Now we define spaces
$$E_{1} = \set{\mathcal{F}g + g \midline g \in L_{+}(\Z_{N})}$$
and 
$$E_{-1} = \set{\mathcal{F}g + g \midline g \in L_{-}(\Z_{N})}$$
also we define
$$E_{i} = \set{i \mathcal{F}g - g \midline g \in L_{-}(\Z_{N})}$$
$$E_{-i} = \set{i \mathcal{F}g + g \midline g \in L_{-}(\Z_{N})}$$

> [!theorem|3.22]
> $E_{1}, E_{-1}, E_{i}, E_{-i}$ are eigenspaces of $\mathcal{F}$ corresponding to Eigenvalue $\set{1, -1, i, -i}$
> In particular 
> $$\begin{align*}L_{+}(\Z_{N}) &= E_{1} \oplus E_{-1}\\L_{-}(\Z_{N}) &= E_{i} \oplus E_{-i}\end{align*}$$
> and thus
> $$L^{2}(\Z_{N}) = E_{1} \oplus E_{-1} \oplus E_{i} \oplus E_{-i}$$

`\begin{proof}`
> [!claim|*]
> Elements in $E_{1}, E_{-1}, E_{i}, E_{-i}$  are eigenfunctions

`\begin{proof}`
Note that for $g \in L_{+}(\Z_{n})$ then by Proposition 3.16(iii) we have $\mathcal{F}^{2} g = g$ hence
$$f_{\pm} = \mathcal{F}g \pm g \in E_{\pm}$$
Then we have that
$$\mathcal{F}f_{\pm} = \mathcal{F}^{2} g \pm \mathcal{F}g = g \pm \mathcal{F}g = \pm f_{\pm}$$ Given a $g \in L_{-}(\Z_{N})$ then proceed similarly
`\end{proof}`

> [!claim|*]
> Every eigenfunction is in one of the spaces $E_{1}, E_{-1}, E_{i}, E_{-i}$

`\begin{proof}`
Assume we are given an eigenfunction $\mathcal{F}f = f$ then by Lemma 3.21 we know that $f$ is even. Thus so is $g = \frac{1}{2}f$, meaning that
$$\mathcal{F}g + g \in E_{1}$$
and also 
$$\mathcal{F}g + g = f$$
The remaining parts are proven similarly. 
`\end{proof}`

Now since $\mathcal{F}$ is unitary we know that $L^{2}(\Z_{N})$ can be decomposed into a direct sum of eigenspaces. 
`\end{proof}`


> [!theorem|3.23] Schur
> Let $N = 4k + r$ with $r \in \set{0, 1, 2, 3}$ then the multiplicities of $\lambda \in \spec(\mathcal{F})$ are as follows
> - $N = 4k$: Then $m_{1} = k+1 \quad m_{-1} = k \quad m_{i}= k-1 \quad m_{-i}= k$
> - $N = 4k + 1$ Then $m_{1} = k+1 \quad m_{-1} = k \quad m_{i}= k \quad m_{-i}=k$
> - $N = 4k + 2$ Then $m_{1} = k+1 \quad m_{-1} = k+1 \quad m_{i}= k \quad m_{-i}=k$
> - $N = 4k + 3$ Then $m_{1} = k+1 \quad m_{-1} =k+1 \quad m_{i}= k \quad m_{-i}= k+1$

`\begin{proof} 
%
`\end{proof}`
$$$
