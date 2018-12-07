---
title: "Design patterns: Strategy pattern"
layout: post
description: Understanding strategy pattern
categories: design-pattern
---

The Strategy pattern is one of the behavioural patterns that determine the behaviour of a class at runtime. It can be used to encapsulate multiple alogrithms that implement the same interface based on different contextual values. This makes it easy to add or remove features since the changes are scoped to a single block of code (class). So instead of having multiple implementations of common algorithms and making changes throughout the codebase to swap somthing out, with implementing *Strategy Pattern* we just refactor one class and end up having DRY'er code. In object oriented languages this pattern is implemented using classes but for languages like *Go* or *JavaScript* a variant of this can be implemented using `if else` statement.

We will be using PHP for demonstration here, however design patterns are not limited to a particular language unless they require features that are unique to some languages, say concurrency for example.

For the first iteration we have two classes that implement two database adapters. For other scenarios there can be several such classes which can be encapsulated together.

~~~php
<?php

class RedisStore {
    public function update() {
        // implementation for querying a no-sql db.
        return "RedisStore has been updated";
    }
}

class SQLStore {
    public function update() {
        // implementation for querying a sql db.
        return "SQLStore has been updated";
    }
}

$redis = new RedisStore();
$redis->update();

$sql = new SQLStore();
$sql->update();
~~~

Both of these classes are implementing the `update` method that updates a database entry, not so DRY if you ask me. Also if in future we happen to replace the *Redis* adpater with *Mongo* we would have to create a new `MongoStore` class and replace `RedisStore` everywhere, which can be a lot of work.

We will start by creating an `interface` which essentially is a contract that the classes extending it have to abide by. Interfaces can be used with or replaced by `abstract classes` incase the requirements are beyond public methods. The `DataStore interface` contains the `update` method that is common between all the database adapters.

~~~php
<?php

interface Datastore {
    public function update();
}

class RedisStore implements Datastore {
    public function update() {
        // implementation for querying a no-sql db.
        return "RedisStore has been updated";
    }
}

class SQLStore implements Datastore {
    public function update() {
        // implementation for querying a sql db.
        return "SQLStore has been updated";
    }
}

$redis = new RedisStore();
$redis->update();

$sql = new SQLStore();
$sql->update();
~~~

The code looks a bit better now, however there is still a code smell. What we really want is an abstract class like `DatabaseApater` so that we don't end up using classes like `RedisStore`, `MongoStore`, `SQLStore`, and so on.

To tackle this we will use the **Strategy Pattern**. Instead of initializing a specific adapter class we will create an abstract one which based on the context passed will use a particular adapter.

~~~php
<?php

class DatabaseAdapter {

    private $strategy = null;

    public function __construct($strategy) {
        if ($strategy == "redis") {
            $this->strategy = new RedisStore();
        } else if ($strategy == "sql") {
            $this->strategy = new SQLStore();
        }
    }

    public function updateStore() {
        return $this->strategy->update();
    }
}

interface Datastore {
    public function update();
}


class RedisStore implements Datastore {
    public function update() {
        // implementation for querying a no-sql db.
        return "RedisStore has been updated";
    }
}

class SQLStore implements Datastore {
    public function update() {
        // implementation for querying a sql db.
        return "SQLStore has been updated";
    }
}

$store = new DatabaseAdapter();
echo $store->updateStore("redis");

// RedisStore has been updated
~~~

Instead of creating a `RedisStore` like in the previous code block, we will create a new instance of `DatabaseAdapter` class and pass it `"redis"` as an argument. This based on `if else` conditional will initiate the correct database adapter. Now if we replace the `"redis"` with `"sql"` we would be using the `SQLStore` and adding a new adapter is easy as updating the `if else` conditional with another block (or we could use switch statement).

Our code is now easily extensible and a lot more DRY compared to the first iteration.
