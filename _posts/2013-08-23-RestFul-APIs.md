---
title: Creating RESTFul APIs using Express.js and Node.js
layout: post
categories: JavaScript
---


When building web app using client-side JavaScript frameworks like [Backbone](http://backbonejs.org), [Ember](http://emberjs.com), [Knockout](http://http://knockoutjs.com/), etc, [Node.js](http://nodejs.org) comes up as a strong contender for the backend. Though we can use almost anything varying from *Ruby on Rails* to *dot Net*, Node.js provides some amazing features (**Asynchronous**!) which make it hard to ignore. Although Node.js is meant for very low level tasks and can be used to build things like Chat servers, Ad servers,  and File Transfer app, there are several frameworks that are built on top of Node.js which we can use to create a REST API or even full-fledged web applications.

We will use [Express.js](http://expressjs.com/), a web application framework that uses [Connect](http://www.senchalabs.org/connect/) middleware to create a REST API which we will be able to serve to our client side frameworks. Express.js, apart from the Connect's middleware adds a ton of other features, that make routing a breeze. Express.js is similar to [Sinatra](http://sintrarb.com) for Ruby, which helps in easily setting up a REST API.

Since this tutorial is based on creating API's using Express, we will consider that you already have Node.js setup. To install Express we will use **NPM** which come with Node.js.

~~~
npm install -g express
~~~

This will install Express globally so we can run the Express executable from any directory and it will scaffold a basic structure for us. We can setup Express with support for sessions and cookies, CSS preprocessor middleware (Stylus and LESS), various templating languages. For our application we will go for a vanialla Express setup.

~~~
express --force
npm install
~~~

With this we will get a structured app. Run `npm install` to install all the Express dependencies. We can test our app by running

~~~
node app.js
~~~

![image](http://f.cl.ly/items/3l0t2t392a140e1n2A37/Screen%20Shot%202013-08-22%20at%2011.12.41%20PM.png)

We should be welcomed with a screen saying "Welcome to Express". Now that we have express running we will connect our app to a database. For this tutorial we will be using [MongoDB](http://www.mongodb.org/). We will use the `mongojs` NPM module to connect the MongoDB with Express. Prerequisites for this are MongoDB which can be installed using the executable packages available on Mongodb.com or using package managers like Homebrew. To install and add the `mongojs` module to the dependenices run

~~~
npm install mongojs --save
~~~

We will need to create a database and a collection which we will be reading from and writing data to. I have created an `Axelerant` database  and `employees` collection inside it. Now add the following piece of code inside your `app.js` file before we define the routes.

~~~ javascript
var dbname = 'Axelerant';
var collections = ['employees'];

var db = require('mongojs').connect(dbname, collections);
~~~

Now that we have connected our Express app to Mongo, we will define routes to access the data inside our database. I used the Mongo console to add sample data to the `employees` collection to work with.
We will create our first route to get the listing of all the employees.

![image](http://f.cl.ly/items/18413S233j151l103O1d/Screen%20Shot%202013-08-22%20at%2010.55.26%20PM.png)

~~~ javascript
app.get('/employees', function(req, res) {
  db.employee.find({}, function (err, employees) {
    if (err) { throw error }
      res.json(employees);
    });
});
~~~

Next we will display a single employee. We can add a particular ID to every entry; however, we will leave this job to Mongo which will automagically add a unique ID to every entry we add.

~~~ javascript
app.get('employee/:id', function(req, res) {
  var id = req.params.id;
  db.employees.find({"_id" : id}, function(err, employee) {
    if (err) { throw err }
      res.json(employee);
  });
});
~~~

Here we are grabbing the `_id` parameter by querying it in the database.

The next step is to add routes which we will use to add data (employees) from the database.

~~~ javascript
app.post('/employees', function(req, res) {
  var employee = res.json(req.body);
  db.employees.save(employee);
});
~~~

Since we have no front-end for our application we will be using REST clients like [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) or [Advanced REST](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) Client to make POST or DELETE requests.

<p class="full-span">
    <img src="http://f.cl.ly/items/2V4312353t381B291V0I/Screen%20Shot%202013-08-22%20at%2011.05.44%20PM.png" alt="">
</p>

We pass the data using the REST client which is parsed using the `bodyParser` middleware and converted to JSON to be stored.

![image](http://f.cl.ly/items/2z0C0H303h2r1m212c3J/Screen%20Shot%202013-08-22%20at%2011.21.58%20PM.png)

That will be all for this time. In the next part I'll connect our REST API to a client-side framework to build a CRUDy app.

You can find the source code for this tutorial on [Github](https://github.com/skippednote/RESTFul-APIs-using-Express.js-and-Node.js).
