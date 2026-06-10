---
publish: true
created: 2025-04-25T11:06:36.813+02:00
modified: 2026-06-10T19:12:42.614+02:00
tags:
  - academia
---

# Visualization in Julia

The goal of this project given to me by Tim and Jannik is to develop a visualizer for [Bonnet Pairs](https://arxiv.org/pdf/2110.06335) and in general allow interactive visualization of manifolds in Julia.

The end goal would be to make these Visualizations also 3D Printable.

To do this I will first need to learn the basics of Julia and Visualization. Im imagining a setup where I have 3 Modules

1. Generating the Data for compact and non-compact Bonnet Pairs
2. Inputting General geometric Data and visualizing in OpenGL or WebGL the Surface in an interactive Window using Julia
3. Inputting General geometric Data and creating a servicable 3D File to further use in 3D printing

Maybe the planning of these Modules will change over time depending on technological specifications and time.

## Some good Julia Tutorials

The channel [doggo dot jl](https://www.youtube.com/@doggodotjl/videos) seems to have many good beginner and package specific tutorials that also delve into interactive visualization (eventhough I havent found any 3D videos yet)

A good use of Makie seems to be shown in [this](https://www.youtube.com/watch?v=2sz9j0PI1PU\&t=872s) video aswell. It might be more up my street

Something similar to what Im doing is [here](https://blogs.lawrence.edu/makerspace/2019/06/26/into-the-manifold/)

Check out this for [visualization inspiriation in Blender aswell](https://www.reddit.com/r/math/comments/1kp8fzd/visualizing_elliptic_curves_in_3d_using_the_hopf/)
