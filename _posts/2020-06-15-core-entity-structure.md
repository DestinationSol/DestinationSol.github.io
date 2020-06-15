---
layout: post
title: "The Initial Structures are Almost Complete" 
description: I've finished most of the fundamental structures for ECS-based design. The next stage is putting those structures to use.
author: "Isaac Lichter" 
image: "gooey.png"
parallax: true
---

Hello everyone! Over the past two weeks, I have developed most of a framework for implementing [Entity-Component-System](https://github.com/MovingBlocks/Terasology/wiki/Entity-System-Architecture) architecture in Destination: Sol. Here's a breakdown of what I've done so far:

[My first sub-project](https://github.com/MovingBlocks/DestinationSol/pull/515/files) was making a way to handle damage. First, an entity is assigned a [Health](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/main/java/org/destinationsol/components/Health.java) component. The component contains information about the maximum and current health that the entity has. When the entity receives damage, like when it gets hit by a projectile, a [Damage Event](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/main/java/org/destinationsol/events/DamageEvent.java) is sent to the entity. That event is then processed by the [Damage System](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/main/java/org/destinationsol/systems/DamageSystem.java), which subtracts an amount of health from the entity equal to the damage amount. To ensure that the system works properly, I created [three](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/test/java/org/destinationsol/systems/DamageSystemTests/OnDamageTest.java) [unit](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/test/java/org/destinationsol/systems/DamageSystemTests/NonNegativeHealthTest.java) [tests](https://github.com/IsaacLic/DestinationSol/blob/ecsImplementation/engine/src/test/java/org/destinationsol/systems/DamageSystemTests/NonNegativeDamageTest.java).

Developing the health/damage system was relatively smooth. There was just one issue: when I ran the tests all at once, they didn't pass. When they were run individually, though, they all passed. The issue was that the three tests were sharing information about the systems registered to process events, but they were also each registering the Damage System. What that meant was that there were three copies of the Damage System, so the Damage Event was processed three times, resulting in triple damage. Once that issue was fixed, the tests all passed, even when run together.



#not changed yet

This coming week, I will be implementing ECS for the construction of asteroids. Once I finish, developers will be able to easily create asteroids using the ECS framework, which is one step closer to easy development and modding. 

The week after, I will do the same for the Transcendent object, which is the object that represents a player when they go through a StarPort. That code is particularly tangled, so I want to clean it up to make future development easier. I'll post again about my progress in two weeks.