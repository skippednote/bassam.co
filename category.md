---
layout: page
title: Category
permalink: /category/
---
<div class="section section__page category">
    <div class="section__alpha">

      <header class="post__header">
        <h1 class="post__title">{{ page.title }}</h1>
      </header>

        <div class="category__list">
        {% for category in site.categories %}
          <div class="category__item">
            <h3 id="{{category | first}}">{{category | first}}</h3>

            {% for posts in category %}
                <ul class="bare-list section__list">
                    {% for post in posts %}
                        {% if post.url %}
                            <li class="section__item">
                                <h3 class="section__title">
                                    <a class="section__link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                                </h3>
                                <time class="section__date">{{ post.date | date: "%b %-d, %Y" }}</time>
                            </li>
                        {% endif %}
                    {% endfor %}
                </ul>
            {% endfor %}
            </div>
        {% endfor %}
        </div>
    </div>
    {% include aside.html %}
</div>
