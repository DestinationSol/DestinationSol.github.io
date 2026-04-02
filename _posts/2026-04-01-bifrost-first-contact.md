---
layout: post
title: "Bifrost: First Contact"
description: >
    Motion once again! A new arc, in a new era, with something neat.
author: "Cervator"
image: "bifrost-first-contact.png"
parallax: true
---

Something is stirring. In a new age we try again, and bring something to inspire with.

## The Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/PnhUTK0CpHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

That's Destination Sol interacting with our other game [Terasology](https://terasology.org/) — a completely independent game, a 3D voxel world. Player chat across game engines. Items being "beamed" between universes. A block of stone from Terasology converted to credits in DestSol as if it were mined ore.

Destination Sol has never had multiplayer. Now it's talking to another game entirely.

This is [Bifrost](https://github.com/SiliconSaga/bifrost) — a cross-game federation protocol, named after the mythical rainbow bridge between realms. And this is its first contact.

## What's Going On?

A lot, actually, even if it has seemed quiet on this blog and in DestSol land overall for a while.

There has been this [whole AI thing going on in the world, for better or worse](https://siliconsaga.net/oss-communities-and-ai/). Behind the quiet there's been work on [development methodology (GDD) & workspace tooling](https://siliconsaga.net/guardian-driven-development/), and DestSol got a new `NakamaClient` wired into the game loop, a `/say` console command for chat, and — the fun part — **Beam Out** and **Beam In** buttons added directly to the inventory screen. The [POC pull request](https://github.com/MovingBlocks/DestinationSol/pull/734) has the details.

Bifrost was built across a handful of sessions using [Guardian Driven Development (GDD)](https://siliconsaga.github.io/yggdrasil/gdd/) — a human-AI collaborative methodology that came out of this community's long experience with mentoring contributors. The tools are getting good enough that fragmented time can produce real things.

For the full story — how it works, what's next, and why it matters — read the detailed writeup on [siliconsaga.net](https://siliconsaga.net/bifrost-first-contact/).

## What's Next?

We're trying to get some momentum again right now. The workspace tooling is maturing. And Bifrost has an absurd [roadmap](https://github.com/SiliconSaga/bifrost/blob/main/bifrost-protocol.md) meant to inspire, not direct.

It goes from chat and items to ghost presence. Cross-server (and game!) travel. Eventually stepping through a portal from a voxel world into a spaceship cockpit. Sound ambitious? Yes. Needed? Nope! Exciting? Absolutely! But it isn't the only path forward. Wherever we go, if the tooling lets us move faster without losing our community soul then that's a good thing.

If you're curious, come say hello on [Discord](https://discord.gg/terasology).

It's good to be back.
