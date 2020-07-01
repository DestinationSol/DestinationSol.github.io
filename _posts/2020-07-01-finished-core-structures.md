---
layout: post
title: "Physics interface and Graphics are Complete"
description: > #This is a brief description of your post that will show up in post previews.
  I've created systems to handle the interactions with the physics and the graphics.
author: "Isaac Lichter"
image: "gooey.png"
parallax: true
---

Description

Two weeks ago, I left off with two goals for the core structure. The first that I worked on was creating a wrapper for the `Body` class. As I discussed two weeks ago, there was a difficulty with the way that that class, which is the bridge between the physics and the game, interacts with components. 

The Gestalt library requires that the information in components be "serializable", which means that the state of a component can be converted into a byte stream, for storage or for sending over the network. The `Body` class doesn't allow for serialization, so it can't be a field in a component.

In addition, putting a `Body` into a component violates an ECS design principle. Components should only contain information and/or indicate ways that an entity will behave. The actual logic should be handled by systems. `Body` is a mix of data and functionality, which doesn't fit neatly into ECS design.

One of my mentors, Adrijaned, came up with a creative solution. He suggested creating a system to manage all of the bodies, using a hashmap to link each entity with its respective Body. Terasology, which is an inspiration for many aspects of this project, uses a similar structure. The entities have a `BodyLinked` component to indicate that they have an assciated Body. The components and events that have to do with the Body - position, angle, velocity, and force - interact with the Body through the new system. The code for that can be found [here](https://github.com/MovingBlocks/DestinationSol/pull/522).

The other project that I worked on was creating an ECS-based way to interact with the graphics. In the previous code, the `DrawableManager` would maintain a list of all of Drawable objects and a list of the visible ones. When it was time to draw the game, the DrawableManager would go through all of the DrawableObjects and see if they were visible, and if so, draw them.

In general, ECS architecture removes the need for maintaining lists. (The `Body` problem was a rare exception.) The `EntityManager` can directly get every entity that has one or more specific components. Therefore, to render the entities, the `EntityManager` is queried for each entity with a Graphics component, a Position component, and an Angle (i.e. rotation) component. Then, the system renders that entity's graphics at that position and angle.

The Graphics component contains a list of `GraphicsElement` objects. Each GraphicsElement contains four pieces of data: the `Texture`, which is the actual sprite to be drawn; the `DrawableLevel`, which represents how deep in the foreground or background the sprite should be drawn; the `relativePosition`, which is the spatial offset that the sprite should have from the entity's center, and the `relativeAngle`, which is the rotational offset of the sprite from the entity. Each GraphicsElement represents a discrete part of the overall graphics for an entity. For example, a ship could have one GraphicsElement for its hull, a second element for its first gun, and a third element for its second gun. 

There are still a few bugs that need to be addressed before my [graphics PR](https://github.com/MovingBlocks/DestinationSol/pull/523) can be tested and merged. After that, I'll do a prefab for `Asteroid` and `Transcendent`, and then get started on ship design.