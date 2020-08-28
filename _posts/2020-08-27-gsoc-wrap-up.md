---
layout: Google Summer of Code Wrap Up"
description: > 
  This is my wrap-up post for Google Summer of Code, but I intend to keep contributing (and hopefully posting here).
author: "Isaac Lichter"
image: "asteroid_1.png"
parallax: true
---

# Summary

This summer, I worked on transferring Destination: Sol from the Object-Oriented Programming model to [Entity-Component-System](https://github.com/MovingBlocks/Terasology/wiki/Entity-system-concepts) 
(ECS) architecture. In ECS architecture, new behavior is added using composition, rather than inheritance, so it becomes very easy to add or remove any particular piece of functionality.

For example, in order to construct a ship with a shield, an entity would be given a ship component and a shield component. If, at a later point, the ship loses the shield, then the shield component would simply be removed. However, if the ship with a shield was constructed using inheritance (i.e. the ship-with-a-shield class inherited from ship), then it would be very difficult to remove the shield dynamically.

`Entities` are the core type of object in ECS. They don't have any behavior on their own - to add behavior, `Components`, which contain information, are attached to the `Entity`. When something should happen to the `Entity`, an `Event` is sent, and `Systems` process that event using the information in the `Entity`'s `Components`.

For my project, I used an existing ECS library ([Gestalt](https://github.com/MovingBlocks/gestalt)). Gestalt provided the framework for me to build new, Destination-Sol-specific ECS structures, without needing to design the underlying framework. I created basic systems using that structure ([health](https://github.com/MovingBlocks/DestinationSol/pull/515), [force/contact handling](https://github.com/MovingBlocks/DestinationSol/pull/516), [entity removal](https://github.com/MovingBlocks/DestinationSol/pull/519), [physics](https://github.com/MovingBlocks/DestinationSol/pull/522), [graphics](https://github.com/MovingBlocks/DestinationSol/pull/541), and [projectile handling](https://github.com/MovingBlocks/DestinationSol/pull/548)). I also have several pull requests for small features ([rubble creation](https://github.com/MovingBlocks/DestinationSol/pull/550), [stasis](https://github.com/MovingBlocks/DestinationSol/pull/518), and [money-dropping](https://github.com/MovingBlocks/DestinationSol/pull/529)) and refactoring/bugfixes ([impulse handling](https://github.com/MovingBlocks/DestinationSol/pull/549), [EmptyComponent implementation](https://github.com/MovingBlocks/DestinationSol/pull/547)], and 
[sprite scaling](https://github.com/MovingBlocks/DestinationSol/pull/551)). In addition, I refactored [asteroids](https://github.com/MovingBlocks/DestinationSol/pull/543) to make use of the new architecture.

For further detail, check out my previous blog posts ([1](http://destinationsol.org/2020/06/01/gsoc-project.html), [2](http://destinationsol.org/2020/06/15/core-entity-structure.html), [3](http://destinationsol.org/2020/07/01/finished-core-structures.html), [4](http://destinationsol.org/2020/07/20/basic-ecs-structures.html), [5](http://destinationsol.org/2020/08/10/working-asteroids.html)) or take a look at my documentation. This was a great experience, and I'm thrilled to have been able to contribute!
