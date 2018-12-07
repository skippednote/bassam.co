---
layout: page
title: Contact
permalink: /contact/
---

<div class="section contact">
    <div class="section__alpha">

        <header class="post__header">
            <h1 class="post__title">{{page.title}}</h1>
        </header>


        <form class="contact__form" action="https://formkeep.com/f/ac082401e973" method="POST">
            <p>
                <input class="contact__form--shallow" type="text" name="name" placeholder="Full Name" required>
            </p>

            <p>
            <input class="contact__form--shallow" ype="text" name="email" placeholder="Email" required>
            </p>

            <p>
            <textarea class="contact__form--deep" name="message" placeholder="Message..." rows="5" required></textarea>
            </p>

            <p>
            <input class="button" type="submit">
            </p>
        </form>
    </div>
    {% include aside.html  %}
</div>
