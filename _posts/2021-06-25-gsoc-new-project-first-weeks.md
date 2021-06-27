---
layout: post
title: "GSoC World-Gen Project: Laying Down A Framework" #This is your post tile
description: > #This is a brief description of your post that will show up in post previews.
  This year, I am working on a World-Gen project in Destination: Sol for Google Summer of Code.
  Here's what has happened in the first few weeks.
author: "IsaiahBlanks1" #This will show up as the post author
image: "gooey-imperial.png" #This is the image that you see in post previews
parallax: true #This determines whether or not the asteroid field will appear
---



World-Gen Modularization Project
--------------------------------
This summer, I have begun working on modularizing the World-Gen code in Destination: Sol. Currently, Destination: Sol generates the world in the same manner everytime (i.e. the same few Planets, Solar Systems, Mazes, and so on). There's not as much variety to the world as there could be, and adding more variety would be difficult with the setup of the code currently.

With my project, Destination: Sol will look at World-Gen in a completely new way. Instead of following the same steps everytime to create the world using the same few options for how the world should look, the game will follow a general system of how a world will be created. Into that system can be inserted any sort of Solar System, Planet, Maze, or anything else a modder might wish to create! Of course, the game world will be generated in the way it currently is by default (though it will do this using the new system as well), but with this project the doors will be opened for anyone to add cool, new features.

The way in which modders will create their own content is through Java classes called Generators. These will be classes that Destination: Sol will notice and be able to use for world generation. The process should be streamlined by the framework of classes that I am setting up, and it will be simple to change any aspect of the world. 

First Few Weeks of Coding
-------------------------

In the first few weeks of coding this summer, I have mainly focused on setting up the general framework for the World-Gen classes. This is a very important step, as the framework defines the general approach the game will take when generating a world. 

Much of the first couple weeks were spent coding the [WorldBuilder](https://github.com/MovingBlocks/DestinationSol/blob/fa5bad01c0d738ca543b16d636baa68b2355e4de/engine/src/main/java/org/destinationsol/world/WorldBuilder.java) class and all the basic Generator classes so that they will be executed in the correct order. The cornerstone of World-Gen will be the the WorldBuilder class. This class will begin the process of generating a Destination: Sol world by retrievingall Generator types available. Then it will pick from those types however many [SolarSystemGenerators](https://github.com/MovingBlocks/DestinationSol/blob/fa5bad01c0d738ca543b16d636baa68b2355e4de/engine/src/main/java/org/destinationsol/world/generators/SolarSystemGenerator.java) the world will need to create (depending on how many Solar Systems you want to have in the world). Next, it creates a 'map' of the world by setting a position for each SolarSystem. Finally, the WorldBuilder tells each SolarSystemGenerator to start building a SolarSystem. It also gives each SolarSystemGenerator access to a list of all the types of [FeatureGenerators](https://github.com/MovingBlocks/DestinationSol/blob/gsoc2021/engine/src/main/java/org/destinationsol/world/generators/FeatureGenerator.java) (Generators that represent Mazes, Planets, Belts, or anything that might inhabit the Solar System). 

From here, the SolarSystemGenerators take over. These classes find places for each Planet, Maze, and Belt that will show up in the Solar System. Most of that code will be handled by abstract class methods that modders do not have to pay attention to. They will only need to set values, and the system will do the work. So far, this is the point that I have reached in coding. SolarSystemGenerator can create a radius for the SolarSystem, and place Mazes within the Solar System. However, I am still working on the methods that will place Planets and Belts.

This easy creation of content won't only apply to SolarSystems. Any feature within a SolarSystem, whether it is a Planet, Maze, Belt, or anything else a modder wishes to implement will be easy to configure as well, using the FeatureGenerator class. 

One particular highlight of the coding so far has been refactoring the way in which Solar Systems are created so that they will still form properly, while still keeping each component of the Solar System as modular as possible. For example, in the current Destination: Sol code, the position of SolarSystems and Mazes are deteremined in the same class and in the same method. This doesn't lend to a modular framework where each piece is separate from each other. Rather, it means that the layout of a SolarSystem will be very similar each time. Therefore, I seperated the two steps of the process, so the WorldBuilder class handles the positioning of SolarSystems, and the SolarSystemGenerators handle the positioning of their Planets, Mazes, and Belts.

The next step of my project will be to finish up the SolarSystemGenerator so that is handles creating all aspects specific to Solar Systems. Then I will head on the PlanetGenerator class and create a system for handling Planet creation. 



