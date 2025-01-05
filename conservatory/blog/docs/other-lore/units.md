# Units in The Conservatory

I love my sci-fi to be at least reasonably coherent. No sci-fi can be perfect - if it were, there would be no *"fi"* in the phrase. Still, people love it when it seems coherent enough and makes intuitive sense.

**While the game will usually measure in your choice of Metric or Imperial units**, I have also included in-universe custom units called *Interstellar Standard Units*, based off of cosmological constants, which you can use if you are feeling particularly daring.

## The Interstellar Standard Unit System

### Real World Universal Constants, as seen in *The Conservatory*

**First, some background lore from real life.** In 2019, all of our standard units of measurement (SI units) were modified to be built upon *Universal Constants*. These are constants based on *the laws of physics themselves*. This boasts several **real world benefits** to the way we measure things!

1. The values can **never** become inaccurate or change over time. They can only become more precise. The speed of light will always be *exactly* 299792458 meters per second in a vacuum, for instance, and this is a truth of reality that can not be changed.
2.  These values are the same everywhere in the universe[^1], which means **if we ever encounter aliens, these units are *universal*.** We can tell an alien that a meter is a certain amount of *Planck lengths* (one of these universal constants) and even if they have no clue what a meter is, they can figure that out on their own!

Turns out this is awesome for writing stories too, like *The Conservatory*'s lore.

The Conservatory uses real world Universal Constants, however **it assumes completely precise values exist**[^disp:Explain&#x3F;]. The math is the same as the real world, with the exact values for *Planck's constant* and the *Boltzmann constant*. The *Planck length* is treated as exactly $1.616255\times10^{-35}$ meters. Other universal constants (Length, Mass, Temperature, Time, G) can be calculated from all of these.

When calculating the values in-game, please impolitely discard preservation of significant figures. The game's math doesn't care about them, and since we aren't doing real physics or science here, it doesn't really matter.

### What are the game units?

!!! danger "Don't overwhelm yourself!"
    There's a lot of information here, but you **probably don't need it all**! If you are just looking for how to use these numbers when writing stories or dialogue, skip to the next section after the data tables below.

Here's the raw units. **If you want to know how to write stories using these, see the next section.**

| Usage | Name | Abbreviation | Value | Measurement |
| - | - | - | - | - |
| Length | Stride | $st$| $\ell_P\times2^{112}$ | $\text{1 st}\approx0.08392$ meters |
| Length | Sprint | $sp$ | $\mathsf{stride}\times2^{16}$ | $\text{1 sp}\approx5499.78$ meters |
| Time | Tempora | $tm$ | $t_P\times2^{144}$ | $\text{1 tm}\approx1.202288$ seconds |
| Time | Hold | $hl$ | $\mathsf{tempora}\times64$ | $\text{1 hl}\approx1.28$ minutes |
| Time | Octholds | $oct$ | $\mathsf{hold}\times64$ | $\text{1 oct}\approx1.36$ hours |
| Time | Cycle | $cy$ | $\mathsf{tempora}\times2^{16}$<br/><small>$\mathsf{octhold}\times16$</small> | $\text{1 cy}\approx21.887$ hours<br/><small>$\text{1 cy}=16$ octhold</small> |
| Time | Sequence | $se$ | $\mathsf{cycle}\times512$ | $\text{1 se}\approx1.28$ years |
| Temperature | Thermo | $th$ | $T_P\times2^{-108}$ | $\text{1 th}\propto0.43658$ Kelvin |
| Temperature | Plasma | $pl$ | $\mathsf{thermo}\times2^{16}$ | $\text{1 pl}\propto28611.72873$ Kelvin |
| Mass | Fulcra | $fl$ | $m_P\times2^{24}$ | $\text{1 fc}\approx0.3651$ kilograms |
| Mass | Cargo Fulcra | $flc$ | $\mathsf{fulcra}\times2^{16}$ | $\text{1 flc}\approx23930.149$ kilograms |
| - | - | - | - | - |
| Velocity | Warp | $W$ | <a href="https://en.wikipedia.org/wiki/Speed_of_light">$c$</a><br/><small>$\mathsf{strides}\times \frac{{299792458\text{ m}}}{1.202288\mathsf{\text{ s}}}$</small> | $\text{1 W} = c$<br/><small>$\approx20925774.675254$ st/tm</small> |

#### Real World Units Used Above

| Name | Abbreviation | Value | Meaning |
| - | - | - | - |
| Planck length | $\ell_P$ | $=1.616255\times10^{-35}$ meters | Smallest measurable length allowed by the laws of physics. |
| Planck time | $t_P$ | $\approx5.391246366844892\times10^{-44}$ seconds | The amount of time it takes to travel $\text{1 }\ell_P$ at the speed of light $c$.
| Planck temperature | $T_P$ | $\approx1.41678418\times10^{32}$ Kelvin | Maximum allowed temperature by the laws of physics. |
| Planck mass | $m_P$ | $\approx2.17643437560\times10^{-8}$ kilograms | Odd one out. Less of an obvious meaning than the others, with no good analogy. |

### Advice for Writers

Numbers are based on powers of two. Instead of numbers like 5, 10, or 100, our interstellar citizens really enjoy 2, 4, 8, 16, 32, 64, so forth.

#### Time

Sorry, I lied. You'll have to look at the table above (the bigger one) to learn what these units are.

* Try these quick substitutions for our **common phrases** (these are *not* mathematically correct!):
    * "Just a few seconds" => "Count a few tempora"
    * "Give me 5 mintues" => "Give me 4 holds"
    * "... 15 minutes" => "... 16 holds"
    * "30 minutes" => "32 holds"
    * "60 minutes" => "64 holds" <small>(Like in person, rarely used but still valid.)</small>
    * "An hour" => "1 octhold"
    * "12 hours" => "8 octholds"
    * "24 hours" => "16 octholds" <small>(Like in person, rarely used but still valid.)</small>
    * "A day" => "A cycle"
    * "A year ago" => "A sequence ago"
    * "A decade ago" => "8 sequences ago"
    * "A century ago" => "64 sequences ago" <small>(this is 80 years, not 100, but colloquially it's used the same way)</small>

**There is an analogue to *Star Trek*'s *Stardate* system used by this game.** It uses a unit of time measured since the foundation of the [ISCA](./isca.md)

| Sequence | . | Cycle | / | Whole Octholds |
| - | - | - | - | - |
| Fewest digits (Sequence) | (dot) | Three digits (Cycle, 000-511) | (forward slash) | Four Digits (whole holds, 0000-1023) |

Example: `1.442/0965` is 1 sequence + 442 cycles + 15 octholds (960 holds) + 5 holds<br/>
<small>Could be thought of as "2 years, 100-some days, at 22:47" (n.b. this is me eyeballing it and is not accurate)</small>


[^1]: Shhh.. Shhh. Yes. I know. It's more important that people understand even if some nuance is left out with respect to relativity and whatnot.
[^disp:Explain&#x3F;]: These values normally have some margin for error due to quantum mechanics preventing you from actually measuring something with 100% accuracy. The Universe doesn't particularly enjoy being snooped in on. The game throws this limitation away because it makes things very hard to work with!