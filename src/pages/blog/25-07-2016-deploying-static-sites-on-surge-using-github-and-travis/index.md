---
date: "2016-07-25"
title: "Deploying static sites on Surge using GitHub and Travis"
path: "/deploying-static-sites-on-surge-using-github-and-travis"
---

## Introduction

I archived the [last iteration](http://v0.bassam.co) of my site which I had been hosting on GitHub pages for several years now. This setup has worked fine for me but there were a bunch of reasons for me to move away from it.

- I wanted to switch from Jekyll to a faster static-site generator.
- I'm was not happy with installing one more language (ruby) on my machine just to build static website.
- There are performance penalties for websites hosted on GitHub pages and sadly you can not resolve this as you don't have access to the server to fine tune it to your needs.
- No HTTPS support. Goodbye PWA.

## Moving to Hugo

I switched to [Hugo](https://gohugo.io) and it feels light years faster. The syntax and conventions are similar to what they are for Jekyll. There are some Go specific functions within the templates but thats pretty much it. Other than being extremly fast, Hugo has no development dependencies, you can simply [download](https://github.com/spf13/hugo/releases) a binary and use it to build and serve a blog.

But like all good things there is a price you have to pay. GitHub pages, where I had been hosting my website, supports only ruby based static site generators. This meant I had to manually push the compiled content from the `public` directory to the `gh-pages` branch. I have done this around 8-10 times since I built this site and it is driving me near madness.

```bash
$ hugo
$ mv public ../blog
$ cd ../blog
$ git init
$ git remote add origin git@github.com/skippednote/bassam.co.git
$ git checkout gh-pages
$ git add .
$ git commit -m "New Blog"
$ git push origin head
```

## Using Travis to deploy to Surge

I could move all this into a shell script and run it via commit hooks but instead I choose to use a CI to build all the deployment artifacts. I went with [Travis](http://travis-ci.com/) as I'm already familiar with it.

I plan to move to AWS in future where I can configure NGINX as per my needs but for now I choose to use [Surge](https://surge.sh) to serve this website. Deploying to Surge with Travis is quite simple and [fairly documented](https://docs.travis-ci.com/user/deployment/surge). Every time I push to this [repository](https://github.com/skippednote/bassam.co), Travis will pick up the commit, build the public directory and deploy to Surge.

## Code

```yaml
// .travis.yml

language: go
go:

- 1.6
  install:
- pip install Pygments --user
- go get -v github.com/spf13/hugo
  script:
- hugo --source .
  deploy:
  provider: surge
  project: ./public/
  domain: http://bassam.co
  skip_cleanup: true
```

Here I setup a Travis environment for Go. It use [gimme](https://github.com/travis-ci/gimme) to install the specified version - 1.6. In the _install_ step it will `go get` Hugo and all its dependencies and build the static site from source by running the script command - `hugo --source ./`. I'm also installing `Pygments` for syntax highlighting. Next we deploy the `public` directory to Surge. You will have to update the `SURGE_LOGIN` and `SURGE_TOKEN` environment variable on the setting page of this repository on Travis. You can get the `SURGE_TOKEN` by running `surge token` in you terminal, assuming you have it [installed](https://surge.sh/help/getting-started-with-surge) and you are logged in. You will also need to [update your DNS](https://surge.sh/help/adding-a-custom-domain) so that your domain points to Surge servers.

With that the site should be live and served from Surge CDN's. I'm pretty happy with this setup for now especially with the [performance benefits](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.bassam.co%2F&tab=desktop) I'm seeing.
