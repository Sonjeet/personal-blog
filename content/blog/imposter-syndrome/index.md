---
title: My imposter syndrome
date: "2020-03-04"
description: "My worst case of imposter syndrome"
---

## What is imposter syndrome?

Imposter syndrome is something that people from different industries and different points in life experience. It essentially leaves you to feel incompetent and unworthy of being somewhere. For a formal definition, Collins dictionary defines it as the following:

> A feeling that despite evidence of competence, you do not deserve any success you achieve and are afraid of being judged by others who you believe are better than you

## My worst experience

I'm proud to admit that I've experienced this at times in my journey as a software developer and I'd like to share my most memorable situation.

### Setting the scene **😄**

I was ~9 months into an internship as a frontend developer. The app we were working on was a large government project and each of the 6 members of the frontend team shared equal responsibility. However, large parts of the app were initially developed by a contractor that didn't follow DRY code principles which led to a convoluted and buggy codebase. At that stage we couldn't really go back and change everything so after a few more months of keeping a buggy app alive, management had decided to get a JS consultancy on board to help us remedy the situation. They made a lot of valid and useful suggestions. One of them was to migrate new functionality to TypeScript code. Since I had previously played around with TS I thought that I could integrate the changes into our app.

### Problem 1: Typed imports 😨

So I mentioned earlier that I had briefly played around with TypeScript. When I say this, I mean that I had read through the docs, modified things within a `tsconfig.json` and written things within the TS [playground](https://www.typescriptlang.org/play/). I felt like I was comfortable with the syntax and so I got cracking with the migration. I installed TS into the environment, created a `tsconfig.json` and then started writing some code.

This is where things fell apart. What I thought would be a simple task became a massive hurdle. In TS you can only import other TS files. If you want type safety, you can't really import a JS file without some further configuration. One of the ways you can make this process work is by creating a declaration file for each internal JS dependency that you want to import.

This isn't a massive problem, it's actually a reasonably straight forward. The only problem was that at this stage I wasn't aware of declaration files and I hadn't even figured out that I needed one. I made a few Google searches and at the time I didn't have much luck. It was only when someone from the backend team came over to my desk that I learnt about declaration files. It turns out he had been working with TS for a while by contributing declaration files for some Oracle products on the DefinitelyTyped [Github](https://github.com/DefinitelyTyped/DefinitelyTyped) repo. Thankfully he was able to point me in the correct direction and things started working.

### Problem 2: Framework types 😰

The framework we were using was [Oracle JET](https://www.oracle.com/webfolder/technetwork/jet/index.html). It's got a relatively poor community space in relation to other frameworks like React, Vue, Angular etc. JET does not put much effort into its documentation and they do not keep their [cookbook](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html) in sync with new releases which is a shame. These are problems that could easily be remedied if they allowed the community to contribute back. 

As I mentioned, at that time Oracle did not put much effort into the documentation and so sometimes trying to integrate TS with certain JET components were a mystery to me and the team. In addition to this, JET has its own forums. These exist so that the JET core team can answer questions and help people on their code (similar to Stack Overflow but only for JET developers). This forum was not that active and it wouldn't be a rare case for your question to go unanswered. As the JET framework had some issues with their internal framework types I tried reaching out to them but I was never acknowledged.

Since they wouldn't get back to me after pestering them for a bit I felt like I was just asking questions that I should know the answers too. Even other members in the team tried posting in the forum with no luck of an answer.

### Problem 3: More DRY code please 😓

This one isn't so bad. As I mentioned earlier, our app was initially developed without DRY principles in mind. I really wanted to add some level of DRY code when I realised that I was duplicating types and interfaces in different files. I flagged this up with management and told them I would work out a suitable way to share types for the client side code. I did some research and found a few methods to share types. I think by this stage I had been worn out with the problems mentioned above, in addition to other problems in the app. 

So I kind of lost some confidence and didn't want the burden of deciding how we should share types on the client side. As a result I confirmed my thoughts with the JS consultancy that was on board with us and I was given the clear to implement it.

## You can only take positives from it

I tried to summarise some of the problems I was having during that period but I don't want to cover everything that I experienced at that stage. This really hit me hard because I'm generally a confident person when someone asks me to develop a feature. If a task was delegated for a senior, I would normally take it on to help them save time and help the team accomplish something in general. The problems I mentioned above was probably my worst experience.

**B U T . . .**

I'm happy to have gone through that experience in hindsight. It was tough but I learnt a lot of things. After the internship came to an end I had a realisation that it didn't matter how much I struggled with that problem. My reasoning for that is because I feel a lot more prepared for future projects. I now realise that you're not really learning if you're comfortable for a long duration of time. This has helped me with university work and professional work because now when I face a challenge my thought process now is *"Yep, this is pretty tough. But by the end of it I'll be prepared to face this challenge again"*. It also helps to keep in mind that out of all the job applications that were sent in for your current role, it was you that got the job. There was something about your application and personality that management really wanted at the company. This means that you have the credentials to be working wherever you work, which should be a massive *"F**k you"* to imposter syndrome.

So if anyone reading has gone through imposter syndrome I'd urge them to look at the positives of the situation. You'll learn something by the end of it. I just want to add this final point too... if you are in an environment where you're trying to learn but you're faced by challenges in which your team is unwilling to help out then just call it quits. My feeling is that if your team won't help you when you're down then there is another team out there which will. At my latest internship I openly communicated with both the frontend and backend team to help me out when I needed it, and I wasn't disappointed, it's helped me a lot in my journey as a developer so far.