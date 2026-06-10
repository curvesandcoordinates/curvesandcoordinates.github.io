---
publish: true
created: 2025-11-09T15:14:00.103+01:00
modified: 2026-06-10T19:14:50.070+02:00
tags:
  - thoughts
---

Consider $G = S_{n}$ the symmetric group acting on $V = K^n$ by permuting the canonical basis vectors. The Action on $K[V] = K[x_{1}, \ldots, x_{n}]$ is given as follows for $\sigma \in S_{n}$
$\sigma(x_{i}) = x_{\sigma(i)}$
**Check this is a proper action as defined before. Where did the inverse go?**
Consider the action of $G$ on$V$ we then get that

$\sigma(f)(v) = f(\sigma^{-1}v)$
Since $K[V] = K[x_{1}, \ldots, x_{n}]$ we know that since the action is an algebra homomorphism that we only need to consider how it acts on $x_{i}$. This considering some vector $a \in V$ and the map $f = x_{i}$ meaning $f(a) = a_{i}$ we get that
$\sigma f (a) = f(\sigma^{-1} v) = (\sigma^{-1} v)_{i}$
This means we need to look at the effect of our action on the vectors more closely. We say that $\sigma\left( \sum\limits a_{i} e_{i} \right) = \sum\limits_{i} a_{\sigma(i)} e_{i}$ meaning the inverse is given by

With another variable $y$ form a polynomial $F := \prod_{i=1}^n (y + x_{i}) = y^n + s_{1}y^{n-1} + \ldots + s_{n-1} y + s_{n}$
We can now make an important observation, namely that $s_{i} \in K[V]^G$. This is given since for any permutation we know that trivially $\sigma F = F$
Now since the equality of polanmials means that all the coefficients must be the same we know that all the $s_{i}$ are invariants. Explicitly trying to calculate the $s_{i}$ we can see that

$$$\begin{align*}
s_{1} = x_{1} + \ldots + x_{n} \\
s_{n} = x_{1} \cdot \ldots \cdot x_{n}
\end{align*}$$
all intermediary steps can be seen as
$$s_{i} = \sum\limits_{1 \leq j_{1} < \ldots < j_{i} \leq n} x_{j_{1}} \cdot \ldots \cdot x_{j_{i}}$$
We call these $s_{i}$ the elementary symmetric polynomials

> [!theorem|*] Elementary Symmetric Polynomials generate the Invariant Ring of the Symmetric Group
> Given $V = K^n$ and $G = S_{n}$ acting on $K[V]$ as above we have that:
> $$K[V]^G = K[s_{1}, \ldots, s_{n} ]$$

`\begin{proof}`
> [!remark|*] Lexicographic Monomial Ordering
> In preperation for the proof we need to quickly define the Lexicographic Monomial Ordering. For monomials $t = x_{1}^{e_{1}} \cdots x_{n}^{e_{n}}$ and $t' = t = x_{1}^{e_{1}'} \cdots x_{n}^{e_{n}'}$ we write $t \leq t'$ if $t = t'$ or $e_{i} \leq e_{i}'$ for the $i$ with $e_{i} \neq e_{i}'$. This give us a total order for monomials. For any $0 \neq f \in K[\underline{x}]$ we define $LM(f)$ to be the biggest monomial in $f$. This is called the “leading monomial” and $LC(f)$ is its coefficient.
> 
> We also have some Rules for monomials such that for $s, t, t'$ we get
> $$t \leq t' \iff st \leq st'$$
> If $s \leq s', t \leq t'$ then we have $st \leq s t' \leq s' t'$. This means that 
> 
$$LM(fg) = LM(f) \cdot LM(g)$$

An important observation is that if we try to find the leading monomial of $s_{i}$ we have to note that we want to maximise the exponents of every $x_{i}$. Since by construction the highest exponent any $x_{i}$ can have is $1$ we can see that
$$LM(s_{i}) = x_{1} \cdot x_{2} \cdots x_{i}$$

Let us now assume by way of contradiction that the theorem is false, meaning we assume there is some $f \in K[\underline{x}]^G \setminus K[s_{1}, \ldots, s_{n}]$ (since the inclusion $K[\underline{s}] \subset K[\underline{x}]^G$ is trivially given). We can now choose $f$ such that $LM(f)$ is minimal and write $$LM(f) = x_{1}^{e_{1}} \ldots x_{n}^{e_{n}}$$
Then applying the transposition swapping $x_{1}$ and $x_{2}$ we can get that since $f \in K[\underline{x}]^G$ we get that
$$LM(f) = x_{1}^{e_{2}} x_{2}^{e_{1}} \ldots x_{n}^{e_{n}}$$
giving us that $e_{1} \geq e_{2}$. Continuing this in general we get that 
$$e_{1} \geq e_{2} \geq \ldots \geq e_{n}$$
Now calculating we get
$$LM(s_{1}^{e_{1}- e_{2}} s_{2}^{e_{2}- e_{3}} \cdots s_{n-1}^{e_{n-1} -e_{n}} s_{n}^{e_{n}}) = x_{1}^{e_{1}} \ldots x_{n}^{e_{n}} = LM (f)$$
We can now set $g = f - LC(f) s_{1}^{e_{1}- e_{2}} s_{2}^{e_{2}- e_{3}} \cdots s_{n-1}^{e_{n-1} -e_{n}} s_{n}^{e_{n}}$ which by definition has the p@roperty that
$$LM(g) < LM(f)$$
and since $g \in K[\underline{x}]^G \implies g \in K[\underline{s}]$ then we know that $f \in K[\underline{s}]$

`\end{proof}`
$$$
