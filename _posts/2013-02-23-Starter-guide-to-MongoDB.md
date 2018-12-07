---
title: Starters guide to MongoDB
layout: post
categories: javascript
---

#### Installing MongoDB
I'll be covering how to install Mongo on Unix and Linux platform only. I don't want to bother myself with the hassles of installing Mongo on Windows OS, it's just too much work.

Presuming that you have Ruby installed, run this command in the terminal

~~~
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
~~~

Once Installed, open two terminal windows and run `mongod` in the first window and `mongo` in the second window after that. `mongod` will start the server and start listening for the connection on port 27017. With `mongo` we start the interactive JavaScript shell interface to MongoDB and run all the commands from there.

### Creating a new Database
To create a new database simply run

~~~ sql
use dataBaseName
~~~

Here `dataBaseName` will be the name we want to use for the database

To check all the existing collections run `show collections`

### Creating a Collection and add inserting records to it

~~~ javascript
db.person.insert({
  first: 'Bassam',
  last: 'Ismail',
  dob: '19/12/1991',
  gender: 'male',
  country: 'Kashmir'
});
~~~

This will create a collection called `person` with `first`, `last`, `dob`, `gender` and `location` fields. I haven't created a field for the `primary_key` so  mongo will automatically add it as every record should have a unique id.

### Find Selector
Mongo has several clauses just like SQL to query specific information. The `find` selector is used to find specified criteria only.

Lets say we want to find all the people that are female in our `person` database.

~~~ javascript
db.person.find({
  gender: 'female';
});
~~~

The output that we will get will be records with `gender: female` fields only.

### Searching for Multiple Criteria
We can query more than one record by separating multiple records using `$or` and placing the additional fields in `[ ]` and `,` separated.

~~~ javascript
db.person.find({
  gender: 'f', $or[{last: 'Ismail'}, {first: 'Bassam'}]
});
~~~

### Sorting Records
We can sort records in MongoDB in ascending or descending order

~~~
Ascending = -1
Descending = 1
~~~

So lets say we want to get all the `male` fields which is all the men from the database and sort them in an ascending order by their names.

~~~ javascript
db.person.find({gender:'male'}).sort({first: -1});
~~~

We can even sort records on basis of multiple criteria as well

~~~ javascript
db.person.find({gender: 'male'}).sort({first: -1, location: 1});
~~~

### Limiting Records
Incase you want to limit the result of your query to given number, Mongo can help us with it's `limit` selector.

Say you want to output only 3 records from your database

~~~ javascript
db.person.find({gender: 'male'}).limit(3);
~~~

### Skipping Records
We can jump directly to records and skip initial one using Mongo's `skip` function

~~~ javascript
db.person.find({gender: 'male'}).skip(10);
~~~

This will skip the first ten records and start displaying from the eleventh one.

### Updating Records
To update the fields in our database we use the `update` function.

~~~ javascript
db.person.update(
  {first: 'Fouzia', last: 'Ismail'},
  {$set: {gender: 'f'}}
);
~~~

When updating a record we have to use the $set modifier or it the record gets replaced instead of being updated.

### Deleting Records
Just like everything else, deleting records from a Mongo database is walk in the park. The `remove` function helps us in deleting records

~~~ javascript
db.person.remove({first: 'Bilal', last: 'Ahmad'});
~~~

This will remove the record `Bilal` from the database. Note that there won't be any warning for this. So to check if the record has been updated and the record has been removed just `db.person.find()`

Incase you want to clear your database and remove all the records simply run

~~~ javascript
db.person.remove();
db.person.find();
~~~

This will remove all the records from the database and check if the database is updated for confirmation.
