---
publish: true
aliases:
  - cohomology
  - homology
  - cohomology groups
  - homology groups
  - cohomology group
  - homology group
  - homological algebra
created: 2025-11-09T23:51:49.240+01:00
modified: 2026-06-10T19:14:50.575+02:00
tags:
  - thoughts
---

In the study of algebraic and differntial geometry it is important to find invariant of spaces or objects that are unique up to some kind of isomorphism. The isomorphism itsself depends on the category we pick, but the concept remains. A central invariant of topological spaces even (which is a very general category) is given by the homology and cohomology of objects.

Homology and Cohomology can be seen as a general categorical property exhibited by chains and cochains. The realisation of which homology and cohomology we actually concern ourselves with can thus be varied and leads to many different definitions.

## General Construction

In the general setting we consider for some suitable [[Rings|ring]] $R$ a sequence of $R$-Modules $\set{A^{i}}$. With the following structure

> [!definition|\*] Chains and Cochains
> Given a sequence of $R$-Modules $\set{A^{i}}$ with a collection of module homeomorphisms $\set{d_{i}: A^{i} \to A^{i+1}}$
> $\begin{CD} \ldots @>>> A^{i-1} @>d_{i-1}>> A^{i} @>d_{i}>> A^{i+1} @>d_{i+1}>> \ldots \end{CD}$
> We call the structure a chain complex if for all $i \in \N$ we have $d_{i} \circ d_{i+1} = 0$. The sequence is also called exact if
> $\im d_{i-1} = \ker d_{i}$
> Most importantly a cochain complex is defined in the same way but with maps $\set{d_{i}: A^{i} \to A^{i-1}}$
> and all arrows reversed.

We often summarize this structure by constructing a graded $R$-module $A^{\bullet} = \bigoplus_{i \in \Z} A^{i}$ which then has this chain or cochain substructure.  Concerning the maps $d_{i}$ called differentials we also often just write $d$ and implicitly know from where to where we are mapping. Thus the equation for a chain complex becomes
$d^{2} = 0$
Also note that depending on the choice of $R$ we can recover different things. Specifically when choosing $R = \Z$ we generalise this definition to that of [[Groups|abelian groups]].

Given a chain or cochain complex $A^{\bullet}$ we ask ourselves the natural question of how exact this construction is. From the defining property of complexes we already know that
$\im d_{i-1} \subset \ker d_{i}$
and by the fact that $d$ is a homomorphism of modules we know that $\im d_{i-1}$ is infact a submodule. To measure how exact this sequence is we thus consider the quotient and call this measure homology (or cohomology when working on cochains).

> [!definition|\*] Homology and Cohomology
> Given a chain complex $A^{\bullet} = \bigoplus_{i \in \Z} A^{i}$ we call the generated $R$-Modules
> $H_{i}(A^{\bullet}) = \faktor{\ker d_{i}}{\im d_{i-1}}$
> It is summarised as the graded $R$-Module $H_{\bullet}(A^{\bullet}) = \bigoplus_{i \in \Z} H_{i}(A^{\bullet})$
> For a cochain complex we similarly define
> $H^{i}(A^{\bullet}) = \faktor{\ker d_{i}}{\im d_{i-1}} \quad H^{\bullet}(A^{\bullet}) = \bigoplus_{i \in \Z} H_{i}(A^{\bullet})$

We can immeadiately see that the exact sequences give us trivial homology and thus are uninteresting homologically speaking.

An even more general definition of these objects can be seen in the Eilenberg / Steenrod Axioms, which define a specific type of homology that is universal and unique. We can then find this type of “regular” homology and many different categories, giving us a nice general structure

## Example Homologies and Cohomologies

We can consider many example of homology and they are somewhat related if the categories are. The most common example is that in the category of topological space we can define [[Singular Simplicial Homology]] by constructing chains of $n$-simplices and the differential being the boundary operator.

When specialising the topological space to something like smooth manifolds we can define even more different homologies, such as [[De Rahm Cohomology]] which uses [[Differential Forms on Manifolds|differential forms]] and the differential of these to construct the cochains. In this context we can also more generally define [[Čech Cohomology]] for some open covers, which is simpler to compute as it is very combinatorial, and we can also define [[Sheaf Cohomology]].

Many of these Cohomology theories are equivalent when we consider well-behaved spaces, which depends on what context were in.
