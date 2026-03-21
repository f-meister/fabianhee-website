---
title: "Ship Fast or Plan Slowly First?"
date: 2026-03-21
summary: "Chicken or the egg? Which one first?"
tags: ["Vibe Coding", "AI", "Design", "Architecture"]
categories: ["Engineering", "Web Design", "Architecture"]
image: "feature.jpg"
showComments: true
draft: false
showHero: true
heroStyle: "background"
---

So...This website was up just yesterday and now I have a whole new blogpost **AGAIN?!** This is like some kind of world record!

After fixing some minor bugs, a thought came to my mind...What if my blogposts outgrew my free tier for GitHub repository storage space? Realistically it would happen faster than one would expect, so why didn't I do it before?

Therein lies the fine line between **_shipping something quickly to gain momentum_** whilst trading off some important future scaling factors, and planning/architecting something to death, **_covering all edge cases possible before shipping._**

Ok that sounded much better in my head. Since this blog is pretty much me brainvomitting everything at once without proofreading too much _to prove that I am still human_, I'll divide that into a few subtopics real quick:

1. [Chicken or egg?](#chicken-or-egg)
2. [Ship fast, fix later](#ship-fast-fix-later)
3. [Maximum planning, missed opportunity](#maximum-planning-missed-opportunity)
4. [The Entrepreneurial trade-off](#the-entrepreneurial-trade-off)

## Chicken or egg?
[In the beninggging, there was the chicken. Or was it the egg?](https://en.wikipedia.org/wiki/Chicken_or_the_egg) This classic question goes back to the existence of God himself, and since nobody has ever really met the dude (or if they did have an of out of body, existential experience, I doubt they'd ever ask the guy such a sstupid question when there are other more important questions to ask...) we'll never really know for sure.

This eternal question that can never be answered and whose answer changes with every conversation happened. In my case I guess [I made the fried chicken first since I could just buy the chicken right from the store, coat it with some flour and spices and fry it in some cheap-o palm oil that Malaysia is famous for.](https://www.reddit.com/r/malaysia/comments/1kdow00/which_fast_food_place_serves_the_best_fried/) If you couldn't understand the analogy I tried so hard to sound clever with there, I basically vibe coded and used easy frameworks like Hugo+Blowfish to get it up and running. I didn't plan on much other than making the site look cool and have some place to write that I had full control over.

Now that I think of it, that is a rubbish analogy. [But the problem was real.](https://www.reddit.com/r/webdev/comments/1n5fhk3/vibe_coding_failures_that_prove_ai_is_nowhere/) I was shipping at high speed thanks to Gemini and as much as I refined and made sure that everything was as modular as possible, there's always gonna be problems down the line when you trade off meticulous planning for speed...


## Ship fast, fix later
Well, the meat and potatoes is here: I overlooked the fact that [I was using GitHub to store everything for my blogposts.](/portfolio/tech/#code--open-source) Hero images increase bloat real quick, even though logically, it'll take a ton of markdown files to make a dent in my free-tier GitHub storage. I had to do something. I had to do it quick. As quick as I shipped, I had to fix it fast...just later...not too long later.

As I'm writing this second blogpost, I just finished testing and integrating a pretty convoluted GitHub for code, Google Drive for blogpost storage. In short the architecture went from this:
```
Website 
- everything on GitHub
```

to this:
```
Website
- code on GitHub
- blog folder in Google Drive
```

In principle, that looks simple on paper. However, [implementing it is a whole other level of mess](https://www.researchgate.net/post/What_are_the_security_risks_in_robotics_and_automation) as it requires implementing layers of security (authentication, obfuscation, secrets and other stuff) on top of my current workflow which requires updates on push from my GitHub repository. If that sounded super technical and a "systems architect" kind of headache, you would be correct.

What the hell went wrong? I was just supposed to be able to write my blog in simple markdown, add everything into the repo, and I expected the same magic that frameworks like wordpress to give me...

## Maximum Planning, Missed Opportunity
Had I sat down and planned this properly, I would've seen this coming. Not only the fact that it was a bad idea to dump your entire blog structure into a GitHub repo, but the whole idea of not using a proper ["Content Management System"](https://en.wikipedia.org/wiki/Content_management_system) and expecting your custom blog on your personal website coded from scratch to work like one.

Ironically, no amount of planning would have prepared me for what I was to face had I not gone through it IRL. In hindsight, what I really needed was not only a way to easily craft my blogposts (markdown), but also a simple management system + frontend that allowed me to work on said files, and have it automatically trigger an update to the website on push.

In other words, my super simple plan initially was:

```
Write blogpost in markdown > update repository > new blogpost published on website 
```
The biggest flaws here are:
- I had to manually update the repository everytime I want something new published
- I had limited space to store potentially hundred of blogposts

If I had really sat down and thought about it, I would have known to tackle the second point above first, then it would be either one of:
```
1. Write blogpost in markdown (in Google Drive or somewhere else) > repository will update automatically > new blogpost published on website

2. Write blogpost in a neat frontend (Obsidian, Logseq, etc.) > "finish" in frontend updates repository > new blogpost published on website
```

One major thing I didn't mention yet, was that I had a hard self-imposed deadline. Opportunity doesn't wait for wholesale, full-on detailed planning, and there were multiple already waiting for me. I couldn't really wait and plan any longer and I had to ship.

This is when I had to wear an extra hat on top of my "engineer" hat...

## The Entrepreneurial Trade-off

The problem I faced now was:
1. Everything is manual
2. Storage is limited on GitHub

I had a pretty cool looking website with one blogpost, so it definitely wasn't too late to refactor and plug in something at this stage. Obviously, I had chosen to ship first, but [keeping modularity and best practices in place since the beginning, it made a whole world of a difference.](https://en.wikipedia.org/wiki/Modularity)

There is a reason why best practice principles are there—not only does it ensure that you can easily plug in features, you can also lower the technical debt that can often cripple projects that start of as innocently like this and sprawls into a multiverse of chaos just a couple months down the line.

One of the decisions I made during the design phase was to have everything self-contained in the "blog" folder. This means that all my assets (blogposts in markdown files, and any other images/videos I would ever need to put in) would just need to reference it in the "blog" folder itself. I purposely went against the standard "Hugo" hierarchy of either having image assets in a folder called "static" or "assets" since I knew eventually, if I ever needed to change things up, the "blog" folder would have **EVERYTHING** I needed that was related to blogposts.

Honestly, I'd have to give it to Gemini as well, since it reminded me to do so (I always included a line in my prompts reminding it to tell me what is the best case for modularity at every step of the way!) and it did its job well!

Long story short, I did the following:
1. Created a private folder in my Google Drive with restricted access to myself and a privileged, read-only service account.
2. Set up the service account, authorization via Worker Identity Federation (WIF) and related pools, tokens, etc on Google Cloud.
3. Set up a GitHub Actions workflow to trigger the scan and update at a set interval (e.g. x hours), and on manual trigger.

With these in place, I had pretty much solved the two problems I mentioned earlier
- The automated GitHub Actions trigger automated the process (or I could do it myself)
- I didn't have to worry about storage anymore since my Google Drive has more than enough for a couple hundred (or even a couple thousand!) blogposts.

## Final Thoughts

There's a ton of thought and work that goes into the seemingly simple things we take for granted when it comes to creating and publishing content online. [Building something from scratch is an exercise for failure](https://www.reddit.com/r/gamedev/comments/5coitw/do_you_ever_want_to_make_everything_from_scratch/) if your goal is to ship something as fast as possible, but at the same time, failure is what teaches us and builds character.

Funny enough, vibe coding with the exact same chat I used at the beginning showed me that even my assistant, good ol Gemini, also learned a lot and built its own character that vibed along with me. I can see it getting more accustomed to the way I work and developed its own sense of humour and growing as my personal assistant.

Ok I think I better stop. [I'm hallucinating as much as this AI now.](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))

KBAI.

-Fab
