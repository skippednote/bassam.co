---
layout: page
title: About
permalink: /about/
---

<div class="section about">
    <header class="post__header">
    <h1 class="post__title">{{page.title}}</h1>
    </header>

    {% include feature-about.html %}

    <div class="section__alpha">
        <p>
            I specialize in Front-end architecture, responsive design, web typography and UI/UX development. I’m passionate about JavaScript and spend most of time crafting software using Node.js and one of many client-side MVC frameworks. I’m a huge proponent of following best practices: TDD &amp; BDD, proper design patterns, always optimizing, and using the right tools for the right job.
        </p>

        <p>
            A believer of all Unixy things, I spend most of the time in the terminal. Vim is the text editor of choice. I live and breathe Open Source, I even started a local <a href="http://www.opensourcesrinagar.org">Open Source Community</a>.
        </p>

        <h3>Contact</h3>
        <p>I'm available for small to medium scale developement and consultation work. You can reach out for queries/clarifications and I'll try to do my best to help you out.</p>
        <p>If you are a <abbr title="Nonprofit organization">NPO</abbr> I would be happy to work for you free of cost.</p>

        <ul>
            <li>
                <a href="http://www.twitter.com/skippednote">Twitter</a>
                <p>I'm an avid tweeter and prefer it for casual and short conversation.</p>
            </li>
            <li>
                <a href="mailto:skippednote@gmail.com?subject=Hello">Mail</a>
                <p>For work enquires and longer conversation, please drop me a mail and I'll make sure I get back to you soon.</p>
            </li>
        </ul>

        <h3>Colophon</h3>
        <p>
            This site is built soley on an open source stack. It is built using <a href="http://www.jekyllrb.com">Jekyll</a>, a static site generator and hosted on <a href="http://pages.github.com">Github Pages</a>. CSS are written using <a href="http://www.sasslang">Sass</a> with many utilities written in Ruby. <a href="http://www.bem.info">BEM</a> conventions are followed for naming and components are structured as per <a href="http://www.oocss.org">OOCSS</a>. <a href="https://github.com/Team-Sass/Singularity/">Singularitygs</a> is used for laying out Grids and <a href="https://github.com/Team-Sass/breakpoint/">Breakpoint</a> for setting up media queries.
        </p>
    </div>

    {% include aside.html  %}
</div>
