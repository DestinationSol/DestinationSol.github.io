---
layout: post
title: "GSoC World-Gen Project: World Generation Up and Running" #This is your post tile
description: > #This is a brief description of your post that will show up in post previews.
    In the past few weeks, I have set up generation of working SolarSystems and Planets!
author: "IsaiahBlanks1" #This will show up as the post author
image: "gooey-imperial.png" #This is the image that you see in post previews
parallax: true #This determines whether or not the asteroid field will appear
---



New Project Updates
--------------------------------
The last few weeks have brought good progress to the World-Gen project. 

The first milestone was the completion of the SolarSystemGenerator class. This is the class that runs the setup of SolarSystems in the world generation phase. It can be easily utilized by modders to create customized SolarSystems in their worlds. 

The second milestone reached was the completion of the PlanetGenerator class. This class plays a similar role to SolarSystemGenerator, but for planets. It is also easy for a modder to extend it and make their own Planets to explore.

In the new World-Gen system, I not only added ways to modify world properties using the existing config files and assets, I also added the ability to load your own config files and assets to create new, interesting terrain. There will be a tutorial on how to do this coming up soon!

Completed Work On SolarSystemGenerator 
--------------------------------------
![SolarSystems with varying sizes](/img/posts/world-gen-in-action/VaryingSolarSystemSizes.png)

Finishing up SolarSystemGenerators was a major step forward in the World-Gen project. This class handles many of the steps involved in setting up the Destination: Sol world. For example, it determines how every Feature (Planet, Maze, Asteroid Belt, etc.) in the World will be placed. It also decides how many to place, which types to use, and more.

One helpful step I took in developing SolarSystemGenerators was creating the Orbital class. This class helps keep track of all the different areas that objects can be placed in within a SolarSystem. You can think of these areas as a 'ring' that circles around the center of the System. Each Feature is placed within one of those rings.

Completed Work On PlanetGenerator
---------------------------------
![A Tiny Planet](/img/posts/world-gen-in-action/tinyPlanet1.png)

With PlanetGenerators functioning, the flexibility of the new World-Gen system is really starting to show itself. PlanetGenerators allow users to modify how the objects that make up Planets are place. The density of clouds, amount of ships, the size of the planet, and more can easily be modified. New textures for the Planet can also be added by importing your own assets, more on that soon!

An interesting aspect of Planet generation is that the actual objects that make up the Planet are not all created with the initial world generation. Rather, the game builds Planets whenever a player gets within a certain distance of them. Therefore, PlanetGenerator doesn't modify object placement directly. Rather, it allows you to change values which will eventually be used to modify the object placement.

Next Steps
----------

Next week, I will begin working on the MazeGenerator class, which will bring to Destination: Sol the ability to modify Mazes. I will also work on the tutorial for importing custom assets and configs.  

