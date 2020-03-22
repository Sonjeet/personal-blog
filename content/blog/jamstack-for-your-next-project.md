---
path: jamstack-intro
date: 2020-03-22T17:24:10.348Z
title: JAMStack for your next project?
description: Should you use JAMStack for your next project?
---
## JAMWhat?

JAMStack. It's yet another thing that's trending in the web development ecosystem and so I started to look into it. When I first started reading up on the JAMStack last year I was a bit confused. The only real thing that stuck in my head was that the JAM in JAMStack stands for:

* JavaScript
* APIs
* Markup

Not that interesting right? I've been using JS, APIs and Markup forever now... or at least it feels that way. So I never really understood what the hype was about this JAMStack thing. But then I did some more research and I understood how the JAMStack could be useful. It helps you build fast and secure sites by pre-rendering files and serving them from a CDN which completely abstracts the server-side processes from your workflow.

First I want to talk about what the JAMStack is not. The JAMStack isn't a specific technology, it's not driven by a large company and believe it or not, you don't really need any JavaScript to be up and running with a JAMStack site. In addition to this, JAMStack sites should not be tightly coupled with servers. This means things like:

* Server-side CMSs like Wordpress
* Single Page Applications that uses isomorphic rendering to build views on the server at runtime like NextJS
* Web apps built on monolithic servers

## Benefits of the JAMStack

Before I dive into talking about how people develop sites with the JAMStack, I feel like it's important to highlight the benefits of sites built with the JAMStack. It only feels right this way since things seem to move at 300mph in the web industry and I don't want you to feel like this is just another trendy thing that will lose traction soon. Trust me, it's awesome!

### More Secure 🕵️‍♂️

You haven't got a server to manage or maintain. Hence, there's no need to worry about server or database vulnerabilities. Server-side processes are simply abstracted into APIs which can be leveraged at build time.

### Better Performance 🏃‍♀️

Since you're serving pre-rendered markup from a CDN, you no longer need to wait for pages to load at runtime. This of course decreases the TTFB (time to first byte).

### Cost Friendly! **💸**

CDNs often allows static files to be hosted for free. Plus, you'll be saving a lot of time and money because you don't have to think about any work for server-side tasks like database query optimisation.

### Simpler Scaling 📈

Scaling with static files is super simple. You just make sure that the files are available at more CDNs. A lot of CDNs will actually include scaling as part of their plans too so you don't have to think about it too much.

### Developer Experience 🤩

For a long time now developers have sacrificed their own experience to make their users happy. The JAMStack caters for us developers though! Us frontend developers can develop and ship apps quicker thanks to the abstraction of the server.

### Traditional Sites vs JAMStack Sites

Working with the JAMStack is a bit different to your typical approach on web development. Here's what happens with a 'traditional' web stack (image from a JAMStack [talk](https://www.youtube.com/watch?v=Opye_qcRdUo) by [Phil Hawksworth](https://www.hawksworx.com/)):

![Tradition Web Stack](https://i.imgur.com/F2RTvMR.png)

It works something like this:

1. Client makes request for a view
2. Request might hit a CDN, if this is the first request then it will most likely hit a load balancer. At this stage the load balancer works out which of the many web servers should receive the request.
3. A server will receive the request, at this stage it will assemble a view by applying some data to a template. To do this successfully it needs to query data from the database.
4. Database responds with data. The web server then assembles a view. After this it can send a response out to the client with the view.

The JAMStack doesn't require so many stages since the server has been abstracted away. Here's how it works.

1. Client makes request for a view
2. Request will hit a CDN which stores pre-rendered content that was requested. The CDN sends this view back to the client.

**And that's it.**

The speed of getting a view back to you so quickly improves the user experience, but the lack of server processes also improves the development experience. It's a win-win situation.

## Development Workflow

JAMStack sites are built with version control in mind, this means that your whole codebase would live at a single source of truth like a git repository. The workflow looks something like this:

### Develop

* Write all your code in one version control system. This allows you to view `diff` histories of files and collaborate with others more easily. You can also leverage webhooks in order to build your app again after some new code is pushed up.

### Build Process

* The automated build process involves compiling your code down into static assets which can be served by a CDN.
* Atomic deployments are made after the build is complete. This is really beneficial for production apps since your deployment will either succeed or completely fail. This is ideal as your app is always available to the user in a working state.
* Our static assets are stored on a CDN. The benefit of this is that CDNs will take care of cache invalidation for you. This helps to make sure that the most recent versions of your content will be served to the users.

## Where to go from here...

You now understand the core ideas of JAMStack sites. To start building one you can use a static site generator. Some popular ones at the moment include [Gatsby](https://www.gatsbyjs.org/), [Gridsome](https://gridsome.org/), [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [11ty](https://www.11ty.dev/) and more.

To learn more about the JAMStack, I highly recommend giving this short (*and free*) [eBook](https://www.netlify.com/oreilly-jamstack/) a read.
