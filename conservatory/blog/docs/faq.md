# Development FAQ and History

!!! danger "This is NOT a list of promises!"
    <span style="color:#faa">**Anything you see here is *NOT* a promise or guarantee. Features mentioned on this page *WILL BE ADDED, REMOVED, OR CHANGED WITHOUT ANY SORT OF NOTICE.***</span> While I will try to honor most of the things I want to see in this game, I'm just one guy, and the last thing I want to do is tell you that you'll get something that I can't fulfill.

&nbsp;&nbsp;This page covers common questions I get and some of the history of the game's development.

## FAQ

**Q: What's it like?**<br/>
**A:** I took serious inspiration from *Starbound*, *No Man's Sky*, and *Empyrion: Galactic Survival*. If you want a more fulfilling answer, you can read [the long page about the game's history](about.md).

***

**Q: How many planets can I visit?**<br/>
**A:** At least $2^{64}$<span style="font-size:0">2 to the power of 64</span>[^disp:Note]

***

**Q: Will it have multiplayer?**<br/>
**A:** I really, *really* want it to. The issue is that I haven't made multiplayer before though, and while I firmly understand the concept of client and server, network authority and the like, *I don't know* if I can get it to work in The Conservatory. It's a daunting task.

***

**Q: Can I build my own ship and fight with it?**<br/>
**A:** I like the idea of building your own ship and I plan to at least try to have buildable vehicles. As far as space combat goes, I could probably get it to work, but don't expect anything fancy like ships coming apart into debris.


***

**Q: How do save files work? Are universes shared?**<br/>
**A:** Universes are shared on your PC. The save files for all locations in the game exist universally. If you spawn a character into the same seed, that world will **not** be fresh. However, by default, characters have their own seed, ensuring that if you install a universe-affecting mod, it only affects that one character (and any other characters sharing that universe).

***

**Q: Do you support modding?**<br/>
**A:** Hell yeah! I'm shipping the game with full documentation, (probably) its PDB file (or some substitute), and even handwritten guides *with pictures* describing things I think modders will want to do, like adding new voxels, species, and locations. I have made it my goal to make modding as easy as possible.

***

**Q: How far along are you / when will it be done?**<br/>
**A:** [These things. They take time.](https://www.youtube.com/watch?v=0d6yBHDvKUw) Especially as a solo dev! All snarkyness aside, I don't know. I have my goal set and I'm making my way towards it slowly but surely!

***

**Q: Can I be a tester?**<br/>
**A:** Probably. But only when I host public tests. Private testing will be people picked by me.

***

**Q: Is it gonna be on Steam?**<br/>
**A:** Yes! The store page is private at this time, though.

***
***


## History

&nbsp;&nbsp;The Conservatory has had a very, very long history with varying levels of significance. Things go back a lot further than you think!

### 2018 - 2020 ⸬ *Game3D*

&nbsp;&nbsp;*Game3D* was the original internal placeholder name for the first iteration of this project. It was made in Unity at the time.

&nbsp;&nbsp;At this point in history, I was interested in creating a narrative experience, completely different than what you know of today. It was a short, simple, choose-your-own-adventure style narrative. In fact, some of the races in The Conservatory are actually reimagined forms of the ones seen in this game!

&nbsp;&nbsp;In this game's lore, the player was a *dustrat* - a simple, self-sufficient people who were scrappers and farmers. They were closely inspired by gremlins from *Spiral Knights*. They existed in a toxic, destroyed world, where all of the rich  folks lived in the sky above all the smog and dust. The [Kirivians](./races/kirivian.md) seen here in The Conservatory are loosely inspired by The Dustrats, including the state of their world post-disaster. The only difference is that the Kirivians were given a significantly more hopeful story, and a much nicer world. Not paradise, but it's cozy despite its problems.

&nbsp;&nbsp;The third main power in the game, separate from the Dustrats and the Primes (the rich people), was the avidly named *Virulent*. The Virulent is a living, spreading, fungus-like mega-colony that can create simpler creatures composed entirely out of itself. I guess a good analogy is *Phazon* from the Metroid series, minus the radioactivity.

&nbsp;&nbsp;The [Novan](./races/novan.md) in The Conservatory use the artstyle I gave to The Virulent: Dark black tones with purple, cyan, yellow, red, and green highlights. Very alien, very unsettling, yet somehow breathtaking in its own creepy way. Notably, I actually quite dislike body horror, so I put a lot of time into coming up with a creepy/"icky" look without it striking that forbidden nerve (and frankly, I think that resorting to body horror for an alien based on fungus is cheap and lazy. There's so much potential being ignored! Think about all of the shapes, all of the pieces, all of the flowers and lights. It doesn't all have to be flesh tubes and indescribable horrors of slime.)

&nbsp;&nbsp;An entire story for this game was drafted and planned out, ready to be created as if the story were some guide, but it never saw the light of day...

### 2022 - 2023 ⸬ *Game2D*

&nbsp;&nbsp;That's right, it's *Game3D* but with one less dimension! ... uh, wait.

&nbsp;&nbsp;Well, joking aside, that's really what it was. I switched to SDL, thinking to make my own engine as an exercise to my skill. I actually got quite far, so much so that even some of the systems in The Conservatory (primarily the dialogue system, and quests) are almost exact replicas from the systems in *Game2D*. My major roadblock was having to get shaders working, and I didn't feel like redoing my renderer to integrate OpenGL.

&nbsp;&nbsp;Anyway, this version of the project existed in two phases. The first was in C++. When I realized that I wanted my game to support modding, I changed to C# and wrote an SDL wrapper in .NET. As I tinkered with the game in C#, the idea of a sandbox became more and more appealing...

### 2023 - Present ⸬ *Starlike3D* aka *The Conservatory* (mostly)

&nbsp;&nbsp;As I continued to work on Game2D's design plan, I realized that I wanted a role playing game and a sandbox. I had this really compelling place, and I love role playing games. This is where I began to take inspiration from other games. To be frank, I *love* Starbound, No Man's Sky, and Minecraft. I wanted to make something that was like all three of them at once. **And with that, I got started on The Conservatory.** The original story slowly got phased out until it became irrelevant, hence why it never saw the light of day.

&nbsp;&nbsp;The primary change of plan was the most obvious choice: No more custom engine. If I wanted to make a game, I needed to *make a game* (not an engine). 

&nbsp;&nbsp;I thought about going back to Unity, but at the time I was worried about royalties. The thing is, I may be a techno-wizard turbo nerd, but I still have mental disability and having to worry about money stuff is really overwhelming to me. Only a year later, Unity tried the disaster that was install fees. So I guess I really dodged a bullet on that one didn't I? Unity was out of the question. Unreal was also a contender, but the .NET support hadn't yet released. The thing is, I still knew for a fact that my game *had* to be written in C#. It's easy to use, powerful, and supports modders. C++ is not easy to reverse engineer, and so it's not friendly to new programmers looking to get into modding a game they like. So no Unreal.

&nbsp;&nbsp;So began my search for a replacement engine. I did find one, but honestly I forgot what it was called. I don't even remember anything about it. This is unremarkable sure, but I mostly just want to mention it because I find it *really* funny that there's this entire period of time where I was using an engine and just don't remember it.

&nbsp;&nbsp;Anyway, I eventually set my eyes on Godot. **I can't emphasize enough how the *stars aligned* for this.** See, this wasn't the first time I tried Godot, in fact I tried it way back for the original Game3D (this would make it some early version of Godot 3). At the time, the game was an experimental/for-fun project. I didn't see it as very useful to learn a new engine, let alone one that felt really strange to use from the get-go, especially in the face of the fact that Unity was very familiar to me already.

&nbsp;&nbsp;When I revisited Godot at the start of this era of the project, I was actually quite reluctant to do so. Here I was thinking *"Eh, I tried this one in the past and it wasn't great..."* and I am *so* glad I tried it again anyway. Needless to say, Godot 4.2 was a hell of a lot better than Godot 3.0, and my impressions were immediately positive. In that time the engine had improved so much that I actually second guessed if it was Godot I had tried already in the past. **But it gets better.** You see, Godot 4.2 marks the start of a still-ongoing spree of banger updates from the community and team. I'm not joking. Look at the size of these update logs: [4.2](https://godotengine.github.io/godot-interactive-changelog/#4.2) with a wall. [4.3](https://godotengine.github.io/godot-interactive-changelog/#4.3) with an even bigger wall (like, holy shit). [4.4](https://godotengine.github.io/godot-interactive-changelog/#4.4) with the same thing, and the addition of the Jolt Physics engine which is *incredible* (and multithreaded!!), and now finally [4.5](https://godotengine.github.io/godot-interactive-changelog/#4.5) with new rendering features and tools for disabled players and developers alike. Good God!

&nbsp;&nbsp;And so now here I am, working on The Conservatory.


[^disp:Note]: $2^{64}$<span style="font-size:0">2 to the power of 64</span> at a minimum. This is the amount of unique seeds that can exist, but I can salt seeds (combine them with other seeds) to effectively wedge randomness into everything; since seeds generate more seeds themselves recursively, the extra ones that get generated can have variation so that they follow different patterns in different places, making the apparent amount of unique combinations larger. Still, that amount of $2^{64}$<span style="font-size:0">2 to the power of 64</span> is the lower limit as per the mathematics.<br/><br/>If this number (somehow) seems like a letdown, think of this: If you could visit a planet in the blink of an eye (100ms, and that's a very fast blink!), did you know that it'd still take 58 **billion years (yes, with the letter B)** for you to see them all?