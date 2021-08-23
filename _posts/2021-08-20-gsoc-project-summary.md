---
layout: post
title: "GSoC World-Gen Project: Wrap Up" #This is your post tile
description: > #This is a brief description of your post that will show up in post previews.
    The last few weeks have brought the project to completion! We've now got fully functioning and modular World Generation in Destination: Sol
author: "IsaiahBlanks1" #This will show up as the post author
image: "gooey-imperial.png" #This is the image that you see in post previews
parallax: true #This determines whether or not the asteroid field will appear
---
Summary
-------
    
It's time to wrap up the 2021 GSoC project for Destination: Sol. Over the last couple of months, I've entirely redesigned the world generation system in Destination: Sol. Previously, the Destination: Sol world always consisted of the same few Planets, Mazes and, Asteroid Belts, all within the same type of SolarSystem. Adding any new type of feature to the game would have been a hassle, as every aspect of the world-gen system was tightly coupled to every other aspect. This made it hard to change any particular part of the world.

Now the world generation process works quite differently. It begins with `GalaxyBuilder` (previously referred to as `WorldBuilder`). This class uses reflection to find all available `SolarSystemGenerator` classes. A `Generator` class represents a feature of the Destination: Sol world, such as a Planet, Maze, Asteroid Belt, or even a SolarSystem. The `GalaxyBuilder` loads `Generators` that represent entire SolarSystems. It then finds a position for each SolarSystem (based on the SolarSystem size) and then tells each `SolarSystemGenerator` to run its build process.

This build process has two sections. First, properties related to this specific `SolarSystemGenerator`, such as its name or its config file, are set. Then, a method is called to initiate the build process of each Feature (Planet, Maze, or Asteroid Belt) that will populate this SolarSystem. Then, once each of those build processes complete, the `SolarSystemGenerator` creates a `SolarSystem` object for the game's runtime code to use. 

We mentioned that each of those `SolarSystemGenerator` build processes initiates `FeatureGenerator` build processes. These work very similarly to the process for `SolarSystemGenerators`. However, they only contain the step of setting the details specific to that feature. For example, within the `build()` method of a `PlanetGenerator` implementation, the code will set the Planet config file, ground height, atmosphere height, orbit speed, rotation speed, and name. Once the values are set, the `build()` method concludes by instantiating a `Planet` object for the game to use.

Each `Generator` class, whether a `SolarSystemGenerator` or `FeatureGenerator`, is an implementation of an abstract class that requires the implementation to have a `build()` method. These abstract classes also provide all the relevant methods for determining the details of the particular object you are generating. 

# Flow of Galaxy Generation
![World Generation Sequence](/img/posts/wrap-up-2021/FlowOfGeneration.png)

I created a class called `Orbital` to help keep track of where Features should go within a SolarSystem. You can think of the `Orbitals` as concentric rings that surround the SolarSystem center. They each have a certain width and begin a certain distance from the center of the System. Depending on its size, a SolarSystem will have 3, 5, or 7 `Orbitals`. There is also an additional `Orbital` for Mazes, which are always on the edge of the SolarSystem.

I also modified how the game loads Planets, Mazes, and Asteroid Belts during runtime. Previously, the game loaded in data from config files and used it to determine how Features would look, how many enemies they would have, how thick their cloud cover would be, etc. The only way to modify these values was to create your own config file, which takes some knowledge of JSON and is fairly cumbersome. Therefore, I created methods and restructured the runtime code to allow modders to change those values and give their Features more flair. 

This project also added the ability to load your own config files for Planets, Mazes, Asteroid Belts, and Solar Systems. This can allow more extensive modding of the Destination: Sol world by allowing users to change textures, enemy types, and more.

I also added a customizable maze-layout system. Normally, Destination: Sol generates mazes with a random configuration of open and closed areas. The new system allows you to create a 2D array in a JSON representing the desired layout of your maze and load it into the game. 

Finally, I wrote a tutorial for modders to use. It instructs on how to easily add your own generators to create custom content for the game. I used docsify to create this tutorial from a GitHub repository. You can find it at:
[http://destinationsol.org/TutorialGalaxyGeneration/#/tutorial/](http://destinationsol.org/TutorialGalaxyGeneration/#/tutorial/)

Links To My Work
----------------
Here are links to the code I've completed this summer: 

- [https://github.com/MovingBlocks/DestinationSol/pull/596](https://github.com/MovingBlocks/DestinationSol/pull/596)
- [https://github.com/MovingBlocks/DestinationSol/pull/597](https://github.com/MovingBlocks/DestinationSol/pull/597)
- [https://github.com/MovingBlocks/DestinationSol/pull/602](https://github.com/MovingBlocks/DestinationSol/pull/602)
- [https://github.com/MovingBlocks/DestinationSol/pull/603](https://github.com/MovingBlocks/DestinationSol/pull/603)
- [https://github.com/MovingBlocks/DestinationSol/pull/604](https://github.com/MovingBlocks/DestinationSol/pull/604)
- [https://github.com/DestinationSol/TutorialGalaxyGeneration](https://github.com/DestinationSol/TutorialGalaxyGeneration)

For further detail, you can look at the previous blog posts I've written: [Post 1](https://destinationsol.org/2021/06/25/gsoc-new-project-first-weeks.html), [Post 2](https://destinationsol.org/2021/07/23/gsoc-world-gen-in-action.html). You can also look through the extensive JavaDoc documentation I've included in the code.

Conclusion
----------

I greatly enjoyed working on Destination: Sol this summer. Taking what was a constrained process and turning it into a modular, user-friendly system satisfied both my creative drive and love of programming. I feel that I've unlocked a lot of potential for people to have fun modding Destination: Sol, and I've improved an important part of the game's codebase. My team of mentors led me all along the way, and I appreciate their guidance greatly. I also interacted with other members of the community when they reached out with suggestions--it is great to be a part of such an open community! I look forward to contributing more in the future.  


