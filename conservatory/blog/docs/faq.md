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
**A:** Universes are shared on your PC. The save files for all locations in the game exist universally, and always load no matter which character you have started playing as. If you want separate worlds, go somewhere else in the universe, or go to a different universe.

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

### 2018 - 2020 ⸬ The well-named *Game3D* - and it's story, start to finish!

&nbsp;&nbsp;*Game3D* was the very distinctive and original internal placeholder name for the first iteration of this project. It was made in Unity at the time.

&nbsp;&nbsp;At this point in history, I was interested in creating a narrative experience. I might still use the lore idea but in general it was a short, simple, choose-your-own-adventure style narrative. In fact, some of the races in The Conservatory are actually reimagined forms of the characters here!

&nbsp;&nbsp;In this game's lore, the player was a *dustrat* - a simple, self-sufficient like people who were scrappers and farmers. They were closely inspired by gremlins from *Spiral Knights*. They existed in a toxic, destroyed world, where all of the rich and lucky folks lived in the sky above all the smog and dust. They lived in ruin and were barely scraping by. These people have been revised into the [Kirivians](./races/kirivian.md) and given a much more hopeful story, by the way!

&nbsp;&nbsp;The story of the game is that *The Primes*, a term encompassing the hyper-advanced people that lived in the sky, left the dustrats to rot. They thought of the dustrats like vermin, primitive cavemen undeserving of mercy. They were kept out of the public eye. The thing is, before The Primes went into the sky, they had bases on the ground. These bases are now derelict and abandoned, with occasionally broken automated security trying to defend it, from time to time.

&nbsp;&nbsp;The dustrats and The Primes had a common enemy, however: The avidly named *Virulent*. The Virulent is a living, spreading, fungus-like mega-colony that can create simpler creatures composed entirely out of itself. I guess another good analogy is *Phazon* from the Metroid series.

&nbsp;&nbsp;On the surface, every day is a struggle against the spread of The Virulent. It sends toxic barrages and monsters into civilized areas in an attempt to gain territory and assimilate the helpless people. The Primes figured that the only way to win was to leave, and built their giant cities in the skies. The cities are held up by giant towers that are constantly checked and cleaned. Turns out managing The Virulent is a *lot* easier when you control where it spreads, a bit like a tower defense I suppose.

&nbsp;&nbsp;The [Novans](./races/novan.md) use the artstyle I gave to The Virulent: Dark black tones with purple, cyan, yellow, red, and green highlights. Very alien, very unsettling, yet somehow breathtaking in its own way.

&nbsp;&nbsp;The player's adventure began when they were sent with a group of friends to a derelict Prime facility. Thing is, they found something there that changes everything: A bioweapon. This bioweapon was designed to destroy The Virulent, but was quite casually left behind once The Primes left for the skies (why bother working on it and perfecting it if we'll just leave anyway)? So there it was, sitting in a facility unfound for centuries. The issue is that it was still under very high security, and the only way to unlock the containment area was to reactivate the facility, which means turning all of the old robots and AI back on. Thankfully, the player realizes that the constructs and AI there were so incredibly old that they didn't even know the dustrats existed, so to these constructs they were just another sapient race that had taken the place of their creators through the passage of time.

&nbsp;&nbsp;Now that the player has the help of these facility constructs to unlock the bomb, they run into a new set of problems: For one, the facility is on the border of where The Virulent has spread. It's quite literally at the doorstep of the facility. The other issue is that the bomb wasn't armed. To arm it, they needed to get the codes, and they had two choices for this: Venture into the corrupted land to a neighboring security facility that *probably* had the codes (it did, but this was left vague to the player for a sense of uncertainty, as if going there may not hve worked), or have the constructs phone home and ask their creators in the sky for the codes. Basically, die to fungal zombification, or tell your enemies you are in a facility they own where they could just send the kill instruction to the robots that are now helping you.

1. **Phone home (good? ending).** This allows the codes to be acquired, but not first without calling the attention of The Primes. The player is told that this will reasonably have bad repercussions because The Primes *do not like* the dustrats. This starts a war. The Primes try to say "don't use the bioweapon, we have a better solution!" (delete all life from the surface). The player uses the tech from the facility, including weapons and armor, to fight The Primes off and defend their people from this terrible fate.
2. **DIY (neutral ending).** The player travels into the unknown hellscape of Virulent territory to find the security facility. This starts the same war-like scenario, but it's dustrats vs. Virulent. The people agree that this offensive might be the war to end all wars, so they give it their all and destroy The Virulent permanently. The Primes have no shits to be given, so the two exist, one (still) in utopia, and the other (still) a bunch of scavengers and scrappers.

&nbsp;&nbsp;And of course, the well-anticipated secret third option:

3. **Assimilate (bad ending).** This starts like #2, but the player takes a detour from their group during the offensive. This causes the player to come across Life Bullshittery<sup>TM</sup> that ultimately can result in them being turned into a creature of The Virulent. In this case, the player acts selfishly and becomes part of a huge collective of power. The player switches sides by destroying the bomb and then ensuring The Virulent covers 100% of the surface. This destroys the player's old way of life, including all friends and family who resist. Whether or not they get powerful enough to take down the primes was left open ended, but I think it would be very possible.

### 2022 - 2023 ⸬ *Game2D!*

&nbsp;&nbsp;That's right, it's *Game3D* but with one less dimension! ... uh, wait.

&nbsp;&nbsp;Well, joking aside, that's literally what it was. I switched to SDL, thinking to make my own engine as an exercise to my skill. I actually got very far, my first major roadblock was having to get shaders working and I didn't feel like redoing my renderer.

&nbsp;&nbsp;This actually kind of had two phases. The first was in C++. When I realized that I wanted my game to support modding, I changed to C# and wrote an SDL wrapper in .NET. Finally, when I realized that this project might actually be something serious, I thought about the grand scheme of things and some changes were made, leading to where I am now.

&nbsp;&nbsp;A key point to bring up is that I actually got far along with development of the title in 2D here. Believe it or not, the quest and dialogue system that The Conservatory uses is the same one from this project!

### 2023 - Present ⸬ *Starlike3D* aka *The Conservatory* (mostly)

&nbsp;&nbsp;As I continued to work on Game2D's design plan, I realized that I wanted a role playing game. I had this really compelling place, and I love role playing games. So the first thing in mind, because my maps were voxel based, was a sandbox. This is where I began to take inspiration from other games. To be frank, I *love* Starbound, No Man's Sky, and Minecraft. I wanted to make something that was like all three of them at once. **And with that, I got started on The Conservatory.** The original story slowly got phased out until it became irrelevant, hence why I told it to you up above.

&nbsp;&nbsp;The primary change of plan was the most obvious choice: No more custom engine. If I wanted to make a game, I needed to *make a game* (not an engine). 

&nbsp;&nbsp;I thought about going back to Unity, but at the time I was worried about royalties. The thing is, I may be a techno-wizard turbo nerd, but I still have mental disability and having to worry about money stuff is really overwhelming to me. Only a year later, Unity tried the disaster that was install fees. So I guess I really dodged a bullet on that one didn't I? Unity was out of the question.

&nbsp;&nbsp;Unreal was also a contender, but the .NET support hadn't yet released. The thing is, I still knew for a fact that my game *had* to be written in C#. It's easy to use, powerful, and supports modders. So no Unreal. C++ is not easy to reverse engineer, and so it's not friendly to new programmers looking to get into modding a game they like.

&nbsp;&nbsp;I found another engine but honestly I forgot what it was called. I don't even remember anything about it. I just mention it because I find it *really* funny that there's this period where I had some weird obscure engine that I have zero recollection of. It was also kind of garbage anyway lmao. Bro forgor💀

&nbsp;&nbsp;And then finally, I set my eyes on Godot. Honestly, **I can't emphasize enough how the *stars aligned* for this one.** It wasn't the first time I tried Godot, in fact I tried it way back for the original Game3D but lost patience too fast (and at the time, it was a hobby project, so it was much easier to use Unity which I already understood. I wasn't concerned with ti being a "real project"). 

&nbsp;&nbsp;Anyway, the stars aligned because Godot is in a period of time where it's getting some absolute freakin' banger updates. 4.2, 4.3, and 4.4 are all outstanding upgrades that add seriously useful and vital features to the engine. I can't use my words to describe how happy it makes me.

&nbsp;&nbsp;Godot feels like one of those cartoon moments where the characters are stuck and need something like a key to open a door, and there's just a very conveniently shaped rock nearby that works as a key. Literally just *"Ooh, look at this, it's perfect."* And that it is. I have very few gripes with it. Best of all, it supports C# *natively* (including bleeding edge versions of .NET!!!) and is super easy for modders to use!


[^disp:Note]: $2^{64}$<span style="font-size:0">2 to the power of 64</span> at a minimum. This is the amount of unique seeds that can exist, but I can salt seeds (combine them with other seeds) to effectively wedge randomness into everything; since seeds generate more seeds themselves recursively, the extra ones that get generated can have variation so that they follow different patterns in different places, making the apparent amount of unique combinations larger. Still, that amount of $2^{64}$<span style="font-size:0">2 to the power of 64</span> is the lower limit as per the mathematics.<br/><br/>If this number (somehow) seems like a letdown, think of this: If you could visit a planet in the blink of an eye (100ms, and that's a very fast blink!), did you know that it'd still take 58 **billion years (yes, with the letter B)** for you to see them all?