---
layout: page
title: CV
permalink: /cv/
---

<h2 class="post__title cv__title">Bassam Ismail &ndash; Front-end developer</h2>

Hey there, my name is Bassam and I'm a 23-year old front-end developer from Srinagar, Kashmir. I currently work at [Axelerant](http://www.axelerant.com) as a Front-end Architect where most of my time is spent working on medium to large scale websites built on top of [Drupal](http://www.drupal.org). In the past, I've worked with various startups with an agile approach for building websites and web applications. I'm big proponent of open web and [community](http://opensourcesrinagar.github.io) [contribution](http://www.drupalkashmir.org).

---
You can find me online at:

- [bassam.co](http://www.bassam.co)
- [github.com/skippednote](https://github.com/skippednote)

or, contact at:

- [skippednote@gmail.com](mailto:skippednote@gmail.com?subject="Hello")
- [twitter.com/skippednote](http://www.twitter.com/skippednote)
- [+91 8803 721227](tel:+918803721227)


---


## Axelerant

I joined Axelerant as a front-end engineer on October, 22<sup>nd</sup> 2012. Since then I've expanded my role to different facets of development and management. This has refined my understanding, appreciation, and knowledge of how to work and collaborate in environments where one needs to be swift at adapting the culture and technologies responsibly.

### Highlights

- Leading a team of front-end developer, which involve:
    - Code review and support
    - Adopting, documenting and presenting front-end related technologies and practices.
- Rapidly introduced useful languages/technologies/frameworks to current stack.
- Blogged some of the [most viewed articles](http://axelerant.com/author/bassam/) over the last three years.
- Managed a large project in absence of Project Manager.
- Member of core engineering team.
- Represented Axelerant at [DrupalCon Amsterdam 2014](https://amsterdam2014.drupal.org/).
- [Contributed](http://www.drupalcores.com/#skippednote) to Drupal 8 core and mentored the Front-end team to push patches and review issues.

---

### Front-end

Architecting front-end for large scale websites that are:

- [Responsive](http://alistapart.com/article/responsive-web-design) with [mobile first](http://www.lukew.com/resources/mobile_first.asp) approach supporting a large array of devices varying from feature phones to latest Hi-DPi tablets.
- Using cutting-edge features like `flexbox`, `calc`, `@2x media-queries`, etc while supporting older browsers following [Progressive Enhancement](http://www.filamentgroup.com/dwpe/).
- Optimized for low-bandwidth and which load on the first-packet response.
- Following tested patterns and methodologies:
    - [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
    - [BEM](https://bem.info/)
        For component features and attributes naming.
    - [OOCSS](http://oocss.org/)
        For abstracting skin from structure which helps to easily identify common patterns.
    - [SMACSS](https://smacss.com/)
        For naming states and prefixes for layouts and components.
- Interactive:
    - Using JavaScript MVC frameworks like [React](https://facebook.github.io/react), [Angular](http://angular.org/) and [Ember](http://ember.com/) for creating engaging and interactive single page applications.
    - Using data from various endpoints for creating charts and infograms using [D3.js](http://d3js.org/).
- Continuously integrated:
    - for code linting/hinting using tools like [CSS Lint](http://www.csslint.net), [ESLint](http://eslint.org/), etc.
    - for generating documentation and style-guides on every update using [Docco](http://jashkenas.github.io/docco/) and [kss-node](http://kss-node.github.io/kss-node/).
- Reusable and easily extendible:
    - [Web Components](http://www.w3.org/TR/components-intro/) for abstracting a functionality into a html element.
    - loading these abstract components using [various](http://requirejs.org/) [module](http://jspm.io) [loaders](http://browserify.org/).

---

### Back-end

- PHP
    - [Drupal](http://drupal.org/)
        - PHP based CMS for building large scale user-moderated site with integration with various client-side technologies.
- Nodejs
    - For generating and serving data using [RESTful API's](http://bassam.co/javascript/2013/08/23/RestFul-APIs/).
    - Building CLI based [utiltiy](https://github.com/skippednote/todayjs) [tools](https://github.com/skippednote/which-os).
- Ruby
    - [Jekyll](http://jekyllrb.org/) for generating static sites used for prototyping.


---

### Tool-chain

- [Vagrant](http://www.vagrantup.com/)
    - I collaborated on a custom vagrant box that is provisioned every time an instance of a website is created using an in-house release management tool.
- [Docker](http://www.docker.com/)
    I've been using docker to setup local environments, that primarily consists of:
    - LAMP stack for running Drupal.
    - Node.js for workflow utilities and package managers like Webpack, Gulp, Grunt, Bower, JSPM, etc.
    - Ruby for Sass, Compass, and various other utility gems (Singularitygs, Toolkit, Breakpoint).
- Continuous Integration
    - [Jenkins](http://jenkins-ci.org/) and [Gitlab Ci](https://about.gitlab.com/gitlab-ci/)
        Using PHP Codesniffer and Drupal template for continuously monitor coding standards.
- [Vim](http://www.vim.org/about.php) and [tmux](http://tmux.sourceforge.net/)
    - Initially started with [Sublime Text](http://bassam.co/tools/2012/09/21/Sublime-Text-My-workflow-and-useful-resources/) but I later moved to Vim and Tmux based workflow for productivity gains.
- [GruntJS](http://gruntjs.com/) and [GulpJS](http://gruntjs.com/)
    - I introduced [Grunt](http://bassam.co/javascript/2013/03/08/Frunt/) and [Gulp](http://axelerant.com/gulpify-your-drupal-development/) to our existing stack as build tools for the front-end development.
- [Git](http://git-scm.com/) &mdash; Version Control System
    - [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) for branching model.
    - Rebasing &amp; Squashing all commits in a feautre into single commit for cleaner logs.
    - Writing terse commit messages with summaries.
- Curamine for agile tasks and workflow management.
    - It is a fork of [Redmine](http://www.redmine.org) with several custom plugins built on top of it.
- [Slack](https://slack.com/) for project collaboration

---

### Projects

 - #### Legacy			
	Legacy is the first headless Drupal projects at Axelerant. I worked closely with the Legacy front-end team to implement various facets of the project. We developed a tightly tested isomorphic single page application following all the modern standards. This even gave us oppurtunity to experiment with things like CSS modules, testing using ES2015, etc.

	**Technologies I used:**
	
	- Babel for transpiling ES2015 to ES5.
	- React for the view layer, Alt.js for Flux implementation.
	- React-router for client-side routing
	- Iso for hydration and dehydration of state for server-side rendering
	- Karma as the test runner with BDD esque tests written using Mocha and Chai.
	- Stylus as the CSS preprocessor with Jeet (grid) and Rupture (breakpoint)
	- Webpack and Gulp was build tools
	- Polyfills for newer CSS3 feature like `flexbox` and `media queries`.
	- Drupal for content-management and servering data.

 - #### NFL			
	I'm worked as a part of front-end team which consists of members from different organizations as the scale of the project was massive. I primarily worked on New England Patriots.

	**Technologies being used:**
	
	- Drupal for site building and content management.		
	- Sass with other ruby gems for utilities (toolkit, breakpoint), grid (singularitygs), etc.		
	- Polyfills for newer CSS3 feature like `flexbox` and `media queries`.

- #### Wizards

  There were three sites for Wizards &ndash; [Magic](http://mtg.wizards.com), [Wizards Play Network](http://wpn.wizards.com), [The Wizards Community](http://community.wizards.com) &ndash; and the project spanned for ten month with me being the only front-end developer. I also took up the responsibility of Project Manager for few weeks in his absence.

  The project involved refactoring most of the existing codebase. There was a lot of DOM manipulation based on the viewport size and user interaction done mostly using vanilla JavaScript. I created various types of charts using D3js using json endpoint provided by Drupal.

  **Technologies I used:**

  - Drupal for site building and content management.
  - Sass with other ruby gems for utilities (toolkit, breakpoint), grid (singularitygs), etc.
  - D3js for charting.

- #### [RedHat: The Enterprisers Project](https://enterprisersproject.com/)

    The project was done on a tight timeline with responsive support added at the later stages of the project. Based on the mocks provided by the client, the project was done on clean install of Drupal 7.

    **Technologies I used:**

    - Drupal for site building and content management.
    - Sass with other ruby gems for utilities (toolkit, breakpoint), grid (singularitygs), etc.
    - jQuery for interaction.

- #### [Opensource](http://www.opensource.com)

  For migration of [Opensource.com](http://www.opensource.com) from Drupal 6 to Drupal 7 I re-aligned the existing front-end with additional updates as suggested by the client.

  **Technologies I used:**

  - Drupal for site building and content management.
  - Sass with other ruby gems for utilities (toolkit, breakpoint), grid (singularitygs), etc.
  - jQuery for interaction.

  #### Some other projects worked on:
  - [Novartis](http://www.novartis.com)
  - [MNN](http://www.mnn.com) (mobile site)
  - [Axelerant](http://www.mnn.com)
  - [MWP advanced manufacturing](http://www.advancedmanufacturing.co.uk/)
  - [NodeDesk](http://www.nodedesk.com/)

---

## Past

Before joining Axelerant I was working as a UI designer and front-end developer with several startups based in USA and India.

- #### [StacheMySelfie](http://stachemyselfie.com/)

  Built on top of Django, I crafted the front-end for mobile, tablet, and desktop viewports. The site uses `getUserMedia` for taking a selfies with a flash polyfill.

- #### [Pixoto](http://www.pixoto.com/)

  I worked remotely with Pixoto as a front-end developer. My work varied from creating static user flows, integrating with vanilla PHP, and working with the designer for the best user experience.

- #### [Floost](http://www.floost.com/)

  At Floost I build UI and did the front-end development for user profiles, newsletters, quotes interface, etc.

---

## Side projects
- #### [scrnshtr](https://github.com/skippednote/scrnshtr)

  scrnshtr grabs a screenshot of the given url at a given resolution and uploads it to Slack.


- #### [scrnshtr-web](http://scrnshtr.bassam.co/)

  scrnshtr-web is a small utility web application built on top on Node.js using Express.js for the web server and Phantom.js to grab screenshots.


- #### [DrupalCon LA Attendes Listing](https://github.com/skippednote/dcla-tracker)

  This is a isomorphic react app with Express.js running on the backend and it scraps data from DrupalCon LA site for easy referencing.


- #### [Slack Timezone](http://axelerant.bassam.co/)

  Slack Timezone is a isomorphic react app with Express.js running on the backend. It show you the current time for all the members of your slack team.


- #### [D8 Contributors](https://github.com/skippednote/d8-contributors)

  This is a client facing app built using Angular.js. The API is written on top of Express.js and MongoDB, which gets data by scrapping content from [DrupalCores](http://drupalcores.com) using Casperjs.


- #### [Writ](http://writ.bassam.co/)

  Writ is a markdown editor that aims to provide a beautiful UI with a rich user experience. It's built using [Meteor.js](http://www.meteor.com).


- #### [Conversify](http://conversify.meteor.com/)

  Conversify is a web-based real-time chat application. It has a pleasing design for both desktop and mobile browsers. Conversify supports Emoji too.It's built using [Meteor.js](http://www.meteor.com).


- #### [Linky](http://conversify.meteor.com/)

  Linky lets you share notes and store links that tagged with your location. It uses the HTML5 geolocation API built on top of [Meteor.js](http://www.meteor.com).


- #### [Todayjs](https://github.com/skippednote/todayjs)

  Todayjs lets your prioritize tasks by creating a `today.txt` on your Desktop. Todayjs is a CLI based nodejs module.


- #### [Go-Learn](https://github.com/skippednote/Go-Learn/)

  Go-Learn is a repository that helps you get upto speed with [Go](http://www.golang.org).

---

## Education

- #### Bachelors in Information Technology, University of Kashmir
  2010 &ndash; 2014

---

## Interests

- Functional programming: How it can help manage state, and improve the code we write compared to OOP. I've started looking into [Clojure](http://clojure.org/) and [ClojureScript](https://github.com/clojure/clojurescript) to dive deeper into the world of Lisp and Functional programming.
- Developer workflow: Optimizing the process to be as productive as possible. This involves automating processes and collecting reference data. Ansible, Node.js, Vagrant, and Docker are some of the primary tools I use.
- EcmaScript 6 &amp; 7: I'm really excited about ES 6 &amp; 7. I already have [Service Workers](http://www.w3.org/TR/service-workers/) running on my site for offline browsing.

---

## Your takeaway

- I'm passionate about learning and exploring new opportunities.
- I love working in a collaborative environment with open source technologies.
