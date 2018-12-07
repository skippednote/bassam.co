---
title: JavaScript and future development landscape
layout: post
description: Future of JavaScript, Meteor.js and Kadira
categories: javaScript
---
<h4 class='message'> Source: This was originially posted on the <a href="http://www.axelerant.com/blog/javascript-and-future-development-landscape">Axelerant Blog</a></h4>

### Introduction

We have arrived at a place where most of the work is handled on the client-side and back-end serves as a data endpoint (JSON/XML) . We have routers, databases, templates, and all the other jazz working in the browser. Everything is fast and interactive. We are moving towards Single Page Applications that persist state, via the URI or in data storages (local or on server). This is all thanks to the worlds most loved  (and hated) language, JavaScript. Even with a fair share of "Bad Parts" JavaScript has prevailed, there have been several addition in the current stable version EcmaScript 5 which added a lot of syntactic sugar. With the upcoming EcmaScript 6 release JavaScript has become a fledged Object Oriented language which until now was taunted as a Prototypal language acting as a faux OO language .

We have seen release of hundreds of client-side frameworks; Angular, Ember, and Backbone being the most used ones. Backbone has even made into the Drupal 8 core, which tells you a lot about the requirements and use-case of these frameworks. Thanks to one of the JavaScripts overlords, Ryan Dahl, JavaScript is available as a server side language for the past few years. Node.js has seen the fastest growth in open-source community compared to all other big player like: Ruby, Python, PHP or Java.  The number of contribution per quarter are exponentially more.

Front-end community has seen a boom in tooling landscape which was almost negligible until Node.js arrived. We have build tools, dependency managers, scaffold generators and a lot more. This has given a huge productivity boast to the developers. A lot more can be achieved and worked on as now we don't have to loose sanity over repetitive tasks like compiling, minifying, linting, or analyzing. Unlike other languages and stacks, JavaScript can be run on all fronts: Browser, Server and Database which has reduced the barrier of entry by several folds. There is no context shift as you will be writing JavaScript everywhere. Despite the fact JavaScript can work with any server-side language or database.


### Meteor
Meteor is one of the most unique and exciting framework out there on the web right now. It's built on top of Node.js and everything from templates to database is reactive, so a changes on client-side or in the database is synchronized instantaneously without any extra efforts. Meteor has quickly gathered a strong and extremely helpful community which make it a platform you would love to build on and for. Unlike the other frameworks there is no concepts of MVC or middlewares, although you can implement them if it suits you. It is built on top of seven principals which act as guide for the core and the apps you build. One of the principal that is near to my heart:

> **Embrace the Ecosystem**

>  Meteor is open source and integrates, rather than replaces, existing open source tools and frameworks.

We can use build tools like Grunt, Gulp or Broccoli  with Meteor for various tasks, but the up side with Meteor is that it compiles all your assets, minifies them and concatenates them into single file. Dependencies are managed based on the directory structure, for example: content inside `lib` directory is loaded first and files named `main.*` are loaded last. One another important Meteor feature is that you can share libraries on server and client, so if you have a date-time formatting library like Moment.js, you can use it to convert UNIX epoch date-time stamp to human readable in the browser rendering from view-templates or on the server before it gets stored in the database.


### Case Study
Following the [Write Code Every Day](http://ejohn.org/blog/write-code-every-day/), last weekend I ended up working on an application for writing  markdown files. I started with MEAN stack but later switched to Meteor. This was something I wanted for personal use but ended up opening for public. Like every other Meteor projects I have worked on, I was able to scaffold a prototype in couple of hours and rest of the time was spent on refining the user experience and adding features here and there.

#### Introducing Writ
![writ](http://writ.bassam.co/writ.png)

[Writ](http://writ.bassam.co/) is an application for writing notes in Markdown with live preview on the side. You can store your notes on the databases and access from anywhere. Changes are reactive and if you update a note on one device, the same note open on a different device gets updated without making any requests. Writ is built upon several packages that come with Meteor and third party packages via [Atmosphere.js](http://atmospherejs.com/) along with some custom helper modules and Handlebars helpers.

![Writ](http://f.cl.ly/items/3R0R1h1C3H2h3o0M2u0I/Screen%20Shot%202014-06-06%20at%2012.16.37%20AM.png)
_This post was written in Writ. Dogfooding._

Just like any other single page application there was a delay in initial page load for Writ.  When we load a SPA site for the first time we are rendering templates on client side, subscribing to a database collections, parsing, and running scripts and styles, this a lot of work which lead to a slow application boot. However thanks to all the awesome work done by the Meteor community, two packages came in handy to reduce the page load time exponentially: Fast Render & Iron-Router.

 [Fast Render](https://github.com/arunoda/meteor-fast-render/) by [@arunoda](http://twitter.com/arunoda) sends just the data that you need for initial load, this significantly improves the performance.  You just have to drop this into your application and you are good to go. Note that you will need [Meteorite](https://github.com/oortcloud/meteorite/) to install the Fast Render package.

[Iron Router](https://github.com/EventedMind/iron-router/) is a routing package for Meteor, an extremely powerful and extensible one.  It comes with some handy predefined functions like: `layoutTemplate`, `loadingTemplate `,  `onBeforeAction `, `onAfterAction ` and a lot more. One of the powerful function among these is `waitOn `, it helps improve performance, as you subscribe to a collection only when you are on a defined route.

Tests for Writ are written in [Mocha](http://visionmedia.github.io/mocha/) which is a BDD/TDD testing library. It has support for asynchronous function calls and a handy CLI tool which runs every time you make changes in the source files. There are other Meteor specific testing frameworks like [Laika](https://github.com/arunoda/laika) but I choose Mocha because I was already familiar with it.

Arunoda released [Kadira](https://kadira.io) same day I released Writ and I had already signed up for it sometime back and gone through the documentation which helped me quickly integrate it with Writ. Kadira is a [New Relic](http://newrelic.com/) esque app for monitoring your Meteor application, you get a live feed of data and how your users are using it. It helped me track issues people were facing with OAuth and redirect-loop.

![Kadira](http://f.cl.ly/items/0u0S0a2v3S1D1f1o192t/Screen%20Shot%202014-06-05%20at%2010.02.31%20PM.png)

### Closing
JavaScript has come a long way, from snow flakes to a full stack language.We are seeing native supports for reactive features like `Object.Observe` and `DOM Mutation Observers`. Promises have landed in all the stable versions of Safari, Chrome, Firefox and Internet Explorer, so good bye [Callback Hell](http://callbackhell.com/). We even have Generators in ES6. JavaScript is running everywhere from your toaster to your smartphone and it's here to stay. You can embrace it or perish.