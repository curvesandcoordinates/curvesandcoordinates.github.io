---
publish: true
created: 2026-02-22T21:20:34.151+01:00
modified: 2026-06-10T19:12:42.307+02:00
tags:
  - academia
---

# Intuition Flow of Invariant Theory

Goal:
Classify G-orbits on V

Problem:
Orbit space V/G usually not algebraic

Solution:
Construct categorical quotient:
V//G := Spec(K\[V]^G)

Map:
π: V → V//G
v ↦ (f(v)) for all f ∈ K\[V]^G

Key fact:
π(v)=π(w)
⇔ orbit closures meet

So:
Invariants separate orbit closures

---

Why local finiteness?
K\[V] infinite dimensional
Representation theory works in finite dimension

Local finiteness:
Every f ∈ K\[V] lies in finite-dimensional G-stable subspace
→ allows averaging
→ Reynolds operator

---

Linearly reductive:
⇔ Reynolds exists
⇔ K\[V]^G splits inside K\[V]

This gives:
finite generation of K\[V]^G

---

HSOP:
Choose algebraically independent invariants f₁,...,f\_r
such that:
R finite over K\[f₁,...,f\_r]

Meaning:
V//G is finite cover of affine space

---

PHSOP:
Stronger:
K\[V] = ⊕ K\[f₁,...,f\_r]·u\_i

Secondary invariants = u\_i

Measure:
How far K\[V]^G is from polynomial

If only u₁=1:
Invariant ring is polynomial

---

Cohen–Macaulay:
HSOP behaves regularly
⇔ PHSOP exists
⇔ K\[V] free over K\[V]^G

No torsion / degeneracy

---

Molien:
Compute:
dim(K\[V]^G\_d)

Idea:
Fixed vectors = averaged trace

Gives:
Hilbert series

Compare:
H(R,t) = (∑ t^{e\_i}) / ∏(1 - t^{d\_i})

→ read off:

- primary degrees
- secondary degrees
