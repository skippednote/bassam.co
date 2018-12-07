---
title: Sublime Text My workflow and useful resources
layout: post
categories: tools
---

After using *Sublime Text* for more than a year, spending most of the day in the app, I think its time that I write a post about it. Today I'll share my workflow and some useful resources for Sublime Text.

###Why I use it

- I use Sublime Text 2 on my Desktop (Windows/Linux) and on my *MacBook* (OS X), which is the great thing about it, *cross-platfrom support*.
- Performance wise its really fast, Chrome like fast. Quickest startup amongst the popular code editors.
- It supports a huge active userbase and is recommened by people like [Paul Irish](http://www.twitter.com/paul_irish), [Addy Osmani](http://www.twitter.com/addyosmani), and several other hot-shot developers we follow.
- It has a huge number of packages (extensions) with includes Text Mate bundles too. Package Control being one of the most useful one.
- Powerful support for *Custom Build* systems. You can create your custom builds for pushing code to Git/FTP, setting up SASS/LESS directories, running lint on a directory/file, compiling scripts, etc.
- Beautiful UI. Coda being a tight competition, however I find Sublime Text 2's UI better for working with.

![My Sublime Text, click for a larger view](/img/ST2.jpeg)

###Packages I userbase

- HTML5 package for the new tags that were added in the HTML5 specification.
- Package Control, one of the most important bundle. For easily adding and removing bundles.
- CodeIntel for code completion, supports several programming languages.
- Nettuts+ Fetch for fetching files like CSS reset, libraries like jQuery, Angular.js, Backbone.js, etc and development packages too (HTML5 Boilerplate and Foundation by Zurb).
- SideBarEnhancement for added functionality. I can create a new files in a project, rename them, open files in a browser, etc.
- ZenCoding for getting markup done quicker though I sometimes switch to HAML.
- Soda Theme with Tomorrow color scheme. This is the best looking combination I have come across yet. I use Ubuntu Mono/Melno as default font.
- Since I've switched from vanilla CSS to preprocessors I use SASS and LESS packages for code highlighting.

*You can download my Sublime Text 2 configuration file hosted on [GitHub](https://github.com/skippednote/Sublime-Text-2-Configurations/).*


##Adding Terminal Functionality

Run this piece of code in Terminal and you will be able to open files or directory directly from Terminal in Sublime Text.

~~~
ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/	bin/subl /usr/local/bin/subl
~~~

To open a particular file from Terminal in Sublime Text

~~~
subl fileName
~~~

To open the directory from the Terminal in Sublime Text

~~~
subl .
~~~

###[Reindenting Text](http://joshbetz.com/2012/09/reindent-text-in-sublime/)

Add the following code to the Key Binding- users. Make sure not to change the Key Binding- Default or you will loose these changes next time you update Sublime Text.

~~~ json
{"keys": ["super+shift+r"], "command": "reindent" , "args": {"single_line": false}}
~~~

###Useful Resources

- [Nettuts+ released a full fledged premium tutorial series for *free*. It goes from basic installation to creating you own custom build functions. **Highly recommended**](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/)
- [Gist of useful Sublime Text 2 shortcuts](https://gist.github.com/1207002)
- [Some things beginners might not know about Sublime Text](http://blog.alainmeier.com/post/27255145114/some-things-beginners-might-not-know-about-sublime-text)
- [Sublime Text 2 Love by Kenneth Reitz](http://kennethreitz.com/sublime-text-2-love.html)
- [Joshua Hibbert's answer on my Quora question](http://www.quora.com/Whats-the-best-HTML-CSS-editor-for-Windows-apart-from-Dreamweaver-and-notepad++)
- [Sublime Text 2 Tips and Tricks by Jeffery Way on Nettuts+](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/)
- [Sublime Text 2: Possibly the Best Editor Ever!](http://sqrhedz.com/blog/2012/03/22/sublime-text-2-best-editor-ever#.UFyeA6T9GpM)
- [Distraction-free coding: The Sublime Text 2 editor](http://andreasviklund.com/reviews/distraction-free-coding-the-sublime-text-2-editor/)
- [The Definitive Guide: Sublime Text 2, a Code Editor to Love](http://designmodo.com/sublime-text-2/)
- [9 REASONS WHY SUBLIME TEXT 2 SHOULD BE YOUR NEXT IDE](http://www.trymbill.is/9-reasons-why-sublime-text-2-should-be-your-next-ide/)
- [Three Months With Sublime Text 2, videos included](http://steverandytantra.com/thoughts/three-months-with-sublime-text-2)

###Icon Replacement

- [Icon](http://iconfactory.com/freeware/preview/flrs) from Flurry set by [Icon Factory](http://iconfactory.com/)
- Replacement [Icon](http://dribbble.com/shots/382465-Sublime-Text-2-update-Replacement-Icon) by *John-Paul Lunney*
- I personally use the Sublime Text [icon](http://dribbble.com/shots/382409-Sublime-Text-2-Icon) by *Chris Lee*
- [Alternate version](http://dribbble.com/shots/707233-Alternative-Sublime-Text-2-Icon) of the current icon by *Mathias Vagni* on dribbble.
- [Minimalistic Icon](https://github.com/dmatarazzo/Sublime-Text-2-Icon) by *Daniel Matarazzo* over at GitHub.

I would highly recommend that you purchase the license and support the developers who have put in ton of hardwork to bring Sublime Text to all the major platforms. It’s just $59!
