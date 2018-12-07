---
layout: page
title: Journal
permalink: /journal/
---
<div class="section section__page journal">
    <div class="section__alpha">

      <header class="post__header">
        <h1 class="post__title">{{ page.title }}</h1>
      </header>

        <ul class="bare-list section__list">
            {% for post in site.posts %}
            <li class="section__item">
                <h3 class="section__title">
                    <a class="section__link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                </h3>
                <time class="section__date">{{ post.date | date: "%b %-d, %Y" }}</time>
                <span class="space"></span>
                <a class="section__categories" href="/category/#{{post.categories}}">{{post.categories}}</a>
            </li>
            {% endfor %}
        </ul>
    </div>
    {% include aside.html %}
</div>
