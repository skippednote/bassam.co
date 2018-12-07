---
layout: page
title: Thank You
permalink: /thankyou/
---

<div class="section contact">
    <header class="post__header">
        <h1 class="post__title">{{page.title}}</h1>
    </header>

    <div class="message message--success message--large">Hi! I have received your message and you will be hearing from me in next 24 hours.</div>

    <div class="section__alpha">
        <form class="contact__form" action="https://formkeep.com/f/ac082401e973" method="POST">
            <p>
                <input class="contact__form--shallow" type="text" name="name" placeholder="Full Name">
            </p>

            <p>
            <input class="contact__form--shallow" ype="text" name="email" placeholder="Email">
            </p>

            <p>
            <textarea class="contact__form--deep" name="message" placeholder="Message..." rows="5"></textarea>
            </p>

            <p>
            <input class="button" type="submit">
            </p>
        </form>
    </div>
    {% include aside.html  %}
</div>
