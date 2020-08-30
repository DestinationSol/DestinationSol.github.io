---
layout: post
title: "Google Summer of Code Wrap Up"
description: > 
  This is my wrap-up post for Google Summer of Code, but I intend to keep contributing (and hopefully posting here).
author: "Isaac Lichter"
image: "asteroid_1.png"
parallax: true
---

This summer, I worked on transferring Destination: Sol from the Object-Oriented Programming model to [Entity-Component-System](https://github.com/MovingBlocks/Terasology/wiki/Entity-system-concepts) 
(ECS) architecture. In ECS architecture, new behavior is added using composition, rather than inheritance, so it becomes very easy to add or remove any particular piece of functionality.

For example, in order to construct a ship with a shield, an entity would be given a ship component and a shield component. If, at a later point, the ship loses the shield, then the shield component would simply be removed. However, if the ship with a shield was constructed using inheritance (i.e. the ship-with-a-shield class inherited from ship), then it would be very difficult to remove the shield dynamically.

`Entities` are the core type of object in ECS. They don't have any behavior on their own - to add behavior, `Components`, which contain information, are attached to the `Entity`. When something should happen to the `Entity`, an `Event` is sent, and `Systems` process that event using the information in the `Entity`'s `Components`.

For my project, I used an existing ECS library ([Gestalt](https://github.com/MovingBlocks/gestalt)). Gestalt provided the framework for me to build new, Destination-Sol-specific ECS structures, without needing to design the underlying framework. I created basic systems using that structure ([health](https://github.com/MovingBlocks/DestinationSol/pull/515), [force/contact handling](https://github.com/MovingBlocks/DestinationSol/pull/516), [entity removal](https://github.com/MovingBlocks/DestinationSol/pull/519), [physics](https://github.com/MovingBlocks/DestinationSol/pull/522), [graphics](https://github.com/MovingBlocks/DestinationSol/pull/541), and [projectile handling](https://github.com/MovingBlocks/DestinationSol/pull/548)). I also have several pull requests for small features ([rubble creation](https://github.com/MovingBlocks/DestinationSol/pull/550), [stasis](https://github.com/MovingBlocks/DestinationSol/pull/518), and [money-dropping](https://github.com/MovingBlocks/DestinationSol/pull/529)) and refactoring/bugfixes ([impulse handling](https://github.com/MovingBlocks/DestinationSol/pull/549), [EmptyComponent implementation](https://github.com/MovingBlocks/DestinationSol/pull/547)], and [sprite scaling](https://github.com/MovingBlocks/DestinationSol/pull/551)). In addition, I refactored [asteroids](https://github.com/MovingBlocks/DestinationSol/pull/543) to make use of the new architecture. Here's the full list of my work:

- [https://github.com/MovingBlocks/DestinationSol/pull/515](https://github.com/MovingBlocks/DestinationSol/pull/515)
- [https://github.com/MovingBlocks/DestinationSol/pull/516](https://github.com/MovingBlocks/DestinationSol/pull/516)
- [https://github.com/MovingBlocks/DestinationSol/pull/518](https://github.com/MovingBlocks/DestinationSol/pull/518)
- [https://github.com/MovingBlocks/gestalt/pull/79](https://github.com/MovingBlocks/gestalt/pull/79)
- [https://github.com/MovingBlocks/DestinationSol/pull/519](https://github.com/MovingBlocks/DestinationSol/pull/519)
- [https://github.com/MovingBlocks/DestinationSol/issues/521](https://github.com/MovingBlocks/DestinationSol/issues/521)
- [https://github.com/MovingBlocks/DestinationSol/pull/527](https://github.com/MovingBlocks/DestinationSol/pull/527)
- [https://github.com/MovingBlocks/DestinationSol/pull/529](https://github.com/MovingBlocks/DestinationSol/pull/529)
- [https://github.com/MovingBlocks/DestinationSol/pull/534](https://github.com/MovingBlocks/DestinationSol/pull/534)
- [https://github.com/MovingBlocks/DestinationSol/issues/535](https://github.com/MovingBlocks/DestinationSol/issues/535)
- [https://github.com/MovingBlocks/DestinationSol/issues/538](https://github.com/MovingBlocks/DestinationSol/issues/538)
- [https://github.com/MovingBlocks/DestinationSol/pull/539](https://github.com/MovingBlocks/DestinationSol/pull/539)
- [https://github.com/MovingBlocks/DestinationSol/pull/541](https://github.com/MovingBlocks/DestinationSol/pull/541)
- [https://github.com/MovingBlocks/DestinationSol/pull/543](https://github.com/MovingBlocks/DestinationSol/pull/543)
- [https://github.com/MovingBlocks/DestinationSol/pull/544](https://github.com/MovingBlocks/DestinationSol/pull/544)
- [https://github.com/MovingBlocks/DestinationSol/pull/547](https://github.com/MovingBlocks/DestinationSol/pull/547)
- [https://github.com/MovingBlocks/DestinationSol/pull/548](https://github.com/MovingBlocks/DestinationSol/pull/548)
- [https://github.com/MovingBlocks/DestinationSol/pull/549](https://github.com/MovingBlocks/DestinationSol/pull/549)
- [https://github.com/MovingBlocks/DestinationSol/pull/550](https://github.com/MovingBlocks/DestinationSol/pull/550)
- [https://github.com/MovingBlocks/DestinationSol/pull/551](https://github.com/MovingBlocks/DestinationSol/pull/551)
- [https://github.com/MovingBlocks/DestinationSol/issues/552](https://github.com/MovingBlocks/DestinationSol/issues/552)

For further detail, check out my previous blog posts ([1](http://destinationsol.org/2020/06/01/gsoc-project.html), [2](http://destinationsol.org/2020/06/15/core-entity-structure.html), [3](http://destinationsol.org/2020/07/01/finished-core-structures.html), [4](http://destinationsol.org/2020/07/20/basic-ecs-structures.html), [5](http://destinationsol.org/2020/08/10/working-asteroids.html)) or take a look at my documentation. 

I had a lot of fun working on this project! At times I felt like a detective, and other times I felt like an architect. I couldn't have wished for a better community or mentors - everyone was incredible! Whether it was helping me with my questions, giving me helpful tips, or discussing design concepts, everyone was incredibly helpful and friendly. This was a great experience, and I'm thrilled to have been able to contribute!