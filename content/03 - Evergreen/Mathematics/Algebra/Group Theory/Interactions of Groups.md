---
publish: true
created: 2025-06-14T15:00:52.000+02:00
modified: 2026-06-10T19:14:49.973+02:00
tags:
  - thoughts
---

Ther[[Groups|groups]]t simple structures for generating new [[Groups|groups]] from old ones. They are multiplicative in nature and mainly boild down to the cartesion product.

> [!definition|\*] General Product on Group Subsets
> Let $A, B \subset G$ be non-empty subsets. Then we define
>
> $$$\begin{align*}
> AB &= \set{a \cdot b \midline a \in A, b \in B} \\
> A^{-1} &= \set{a^{-1} \midline a \in A}
> \end{align*}$$
>
> $$$

> [!proposition|\*] When is a product a Subgroup?
> Let $A, B \leq G$. Then $AB \leq G \iff AB = BA$

`\begin{proof}`
Let us first consider left-to-right implication. Assume $AB \leq G$. Now consider $a \in A$ and $B \in B$ then we get that since $ab \in AB \leq G$ that $(ab)^{-1} = b^{-1} a^{-1} \in AB$
Now we can find $a' \in A, b' \in B$ with $b^{-1}a^{-1} = a' b'$ which gives us
$ba = (b^{-1} a^{-1})^{-1} = (a' b')^{-1} = b'^{-1} a'^{-1} = ab \in AB$
Thus $BA \subset AB$ and similarly we can prove $AB \subset BA$

For the right-to-left implication we simply need to prove the group properties, namely

1. **Non-Empty:** $e = e \cdot e \in AB$
2. **Closure:** For any $x = ab, y = a'b' \in AB$ we have $xy = aba'b' = a a' b b' = A B \in AB$ with $A = a a'$ and $B = b b'$
3. **Inverses:** For any $x = ab \in AB$ we have that $x^{-1} = b^{-1} a^{-1} \in BA = AB$
   `\end{proof}`

## Direct Product

Instead of using the normal product notion of group multiplication we can also consider the groups sets. In this context the product is simply the cartesian product. Meaning we will try to generate a new working group given a set of other groups via defining a compatible operation on their cartesian product.

> [!definition|\*] The Direct Products Group
> Let $G_{1}, \ldots, G_{n}$ be groups. Then we define $G = G_{1} \times G_{2} \times \cdots \times G_{n}$ as the _external direct product_ which is a group with the operation
> $(x_{1}, \ldots, x_{n})(y_{1}, \ldots, y_{n}) = (x_{1} y_{1}, \ldots, x_{n} y_{n})$

> [!remark|\*] Projections given by the external direct product
> Given this structure we can construct an embedding of $G_{j}$ into the Product by constructing an injective map
> $\Pi_{j}: G_{j} \to G, \quad x \mapsto (e_{1}, \ldots, e_{j-1}, x, e_{j+1}, \ldots, e_{n})$
> Which now naturally fulfills the isomorphism property
> $G_{j} \cong \im(\Pi_{j})$

> [!proposition|\*] Properties of the Image of the Projection
> Let $G^{(j)}= \im (\Pi_{j})$ then the following properties hold
>
> 1. $G^{j} < G$
> 2. $G^{(j)} G^{(k)} < G$ for any $1 \leq j, k \leq n$
> 3. In relation to the image group $G$ we get
> 4. $G = G^{(1)} \cdot \cdots \cdot G^{(n)}$
> 5. $G^{(j)} \trianglelefteq G$
> 6. $G^{(i)} \cap \prod_{j\neq i} G^{(j)} = \set{e}$

`\begin{proof}`
Let $G^{(1)}, \ldots, G^{(n)} < G$ satisfying a, b, c. Then
$\alpha: \bigtimes_{i=1}^{n} G^{(i)} \to G, \quad (x_{1}, \ldots, x_{n}) \mapsto x_{1} \cdot \ldots \cdot x_{n}$
is a bijective group homomorphism. We have that $G = \bigtimes_{i=1}^{n} G^{(i)}$ which is the internal direct product.
`\end{proof}`

The previous statemtent tells us that we can build $G$ as a product of subgroups if it is the product of groups.
