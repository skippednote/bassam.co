---
title: Saving location in MongoDB using Meteor
layout: post
categories: javascript
---

Recently I built a simple notes sharing app and while tinckering around I thought of adding a map showing the location from where the **note** was added. This involved getting the current location of the logged in user and saving the data to the databases whenever the user submitted the form.

![image](/img/meteor.png)

I used HTML5's geolocation API to get the current location using the GPS on the device or with the help of network the user was on. The tricky part was saving the location for the current session, this is where Meteor's Session helper came to use.

I created a simple function to get the location using the *geolocation* API:

~~~ javascript
function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  Session.set('loc', position.coords.latitude+','+ position.coords.longitude);
}
~~~

Here we pass the `position` parameter to the `showPosition` function on which we tag the latitude and longitude of the current location. These are then stored in the current session and are passed to the database with other value related to **note**.


~~~ javascript
Template.linkySubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var link = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      desc: $(e.target).find('[name=message]').val(),
      author: $(e.target).find('[name=author]').val(),
      owner: Meteor.userId(),
      location: Session.get('loc')
    }

    link._id = Linky.insert(link);
  }
});
~~~

We can now use Google Maps API with the `location` property per **note** to get the location on a map. Here I'm using Handlebars which is the defacto Meteor templating library.

~~~ html
<template name="linkyPage">
  {#with currentLinkyItem}
    <h2 class="linky__title">{{title}}</h2>
    <p class="linky__desc">{{desc}}</p>
    <p class="linky__author"> <p class="what">Posted by: </p><em>{{author}}</em></p>
    <p class="linky__location">
      <p class="what">Posted from: </p>
      <img src="http://maps.googleapis.com/maps/api/staticmap?center={location}&zoom=14&size=400x300&sensor=false" alt="Posted from">
    </p>
  {/with}
</template>
~~~

Here we have a view which renders fields related to a particular **note**. If you see the last item in the view, I have added a link in the `img` tag in which there is a handlebars expression that has the location from where the post was created from.
