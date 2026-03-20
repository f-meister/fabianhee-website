---
title: "Hello World!"
date: 2026-03-20
summary: "How I vibe coded my way to this website"
tags: ["Vibe Coding", "AI", "Mentality"]
categories: ["Engineering", "Web Design"]
image: "feature.jpg" 
showComments: true
draft: false
showHero: true
heroStyle: "background"
---

Welcome, welcome, welcome!

This is the first ever post on this site, and frankly, it's been a long time coming.

I had shy-ed away from creating a full-blown personal-professional website for a loooong time before this due to many reasons...among them:

1. **EXPENSIVE** hosting costs
2. **TOO MANY FRAMEWORK** choices
3. Frameworks always have **TOO MANY FEATURES** that I would never use
4. Did I mention **EXPENS**...ok I did
5. Did I mention **TOO MA**...ok I did

All those factors equal **TIME** and that's one thing we'll never get back, no matter what you may gain.

After my previous forays into _TRYING_ to build a funcitoning website, I decided to give up everything apart from my domain name, since, [you'll never know 20 years later if the next big quintillion dollar company is gonna buy out your domain for an ungodly amount of money.](https://www.reddit.com/r/malaysia/comments/1r2725x/the_malaysian_who_sold_aicom_for_usd70_million/) 

Thankfully it is 2026 now and AI can narrow down everything I need for building a site that's cost effective, as well as being able to build it from scratch.

My criteria:

1. A Simple, Static Website (that's right, I don't need TOO MANY FEATURES!)
2. Fast and feature rich if I ever feel the need to add rocket boosters and stuff
3. Fully configurable from building to maintanence

In this way, I could not only look like I know what I'm doing, but also have it as a single point of truth for all my work history...yes, I got so sick and tired to having to update numerous documents over the years for job applications!

Anyway, here's how I approached the whole thing:

1. [Hosting and Deployment](#the-launchpad) - Cloudflare Pages
2. [The structure](#the-framework) - Hugo & Blowfish
3. [The Builder](#cicd) - GitHub Actions

## The Launchpad
In the beginning, I actually considered using GitHub Pages as I was only familiar with that as the "free" alternative for those expensive web hosting services. After a few prompts and really digging into what Gemini could offer me, it finally spit out something I would never have expected: [Cloudflare.](https://www.cloudflare.com/developer-platform/products/pages/)

If you are anything like myself, your brain would instantly go "isn't that the DDOS page?" As I dug deeper, I got more and more convinced that this was **THE WAY**:
* Cheap - the free tier has everything you need with a very high ceiling before you hit the paywall. It also has **zero egress fees** which is perfect for my current situation
* Performance and Global Reach - we all know Cloudflare by now and it's pretty much everywhere
* Security - they're the DDOS people. Of course it's gonna be safe!  
* Scalability - this one I didn't know until I read further into their offerings but pairing this factor with their generous free tier means it's pretty much the way to go.

The only reason why this isn't more popular than say, GitHub Pages or Netlify, is their documentation isn't the best. However, in the age of LLMs and AIs, this is a non-issue.

Now that I had that sorted, it's time for what framework to actually choose...

## The Framework
I've seen sites using [Hugo](https://gohugo.io/) before and honestly, I was already dead-set on using vanilla Hugo until I found out about [Blowfish](https://blowfish.page/).

Without hesitation, I dove in headfirst as soon as Gemini suggested it as one of three theme options. I don't remember the other one, and I honestly can't be bothered to scroll a few hundred pages up the chat history to see the thing...I'm sure it's good but Blowfish looked really nice and simple for what I needed.

Anyway, I vibed coded the structure and applied the [Keep-It-Simple-Stupid principle](https://en.wikipedia.org/wiki/KISS_principle) as much as I could, applying all the years of best software engineering practices I could remember to make sure that it not only looked good but could scale up with the number of changes I'd be doing down the road.

By the time you're reading this, this is my 3rd day of work on this website (I still have to push to prod but oh well, that's in another few hours or so lol) and I've never felt more productive and motivated as I reach closer to my goal. Vibe coding isn't the big bad dummy that the "old timers" make it up to be. In fact, it's a huge boost for not only productivity but also morale, especially in this kind of scenario where fixing a stupid UI bug eats up motivation like COVID-19 chewing through a geriatric tenant in a dilapidated housing area.

Ok, let's get down to my favourite part of the whole shebang...

## CI/CD
I don't know why but Continuous Integration/Continuous Deployment always makes me happy. I always feel like a kid looking at this magic thing that runs in the face of high tech wizardry as you sit back and watch your work fly into cyberspace while staring at the logs running down your screen like its The Matrix...you know, that old movie that us internet/gaming boomers watched back when were were young?

Anyway, I went with GitHub Actions for this instead of Cloudflare's built-in deployment mechanism since it ended up being and either-or situation: Either I give up the coveted green checkmark in my repository for a working deployment in Cloudflare, or I get my GREEN Medal of Honor in my repository and boost my fragile ego.

Me:
{{< youtube Vhh_GeBPOhs >}}

## Summary
All-in-all, I think vibe coding is awesome and all self-respecting developers should try it at least once. What would have taken me at least a full week to cobble together took me under 4 days (a few more hours to check while tending to my 3 noisy kids during their school holidays right now...ugh...)

The caveat here is that your vibe coding will only be as good as your knowledge of programming best-practices and principles. If you're a 0, your work might look like a 100 on the surface, but under the hood, it'll be a mess of spaghetti. If you're at least a 50/100, then odds are, your work will look great AND will be much easier to refactor and maintain. I don't believe anyone is a 100 so that's about as far as I will go LOL.

Anyway, have fun exploring the website and let me know what you think down in the comments below!

Much Love,

-Fab
