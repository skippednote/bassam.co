+++
date = "2016-07-27T15:05:12+05:30"
draft = false
title = "HTTP requests in Elm"
description = "Using Elm to fetch remote data."
+++

## Introduction

Elm is a strictly typed functional programming language that compiles down to JavaScript. The first feature Elm showcases on its website is **No runtime exceptions**, which is a huge claim considering how frequently you run into them. There are just a few other languages that make this claim and all of them share a common feature: _managed effects_. This means that actions that require mutations like HTTP requests or writing a file to disk are all treated as data. However, with mutations, come one off errors, like _request failed_ or _no write access_. To deal with this Elm has a special construct, **Maybe**, which represents values that may or may not exist.

{{<highlight elm>}}
type Maybe a
= Just a
| Nothing
{{</highlight>}}

Suppose you are expecting a list of names as response to an HTTP request and you want to convert the first item in the list to upper case. This would be pretty straight forward in most of the languages. You grab the first item from the list and call the `uppercase` method on it. But what if you get an empty list or no list as a response? Your code just considers the success scenario.

The Elm compiler doesn't let you skip such cases and makes sure you handle them responsibly. Therefore the claim, No runtime exceptions.

{{<highlight elm>}}
case List.head listOfNames of
Just name ->
name
|> String.toUpper
Nothing ->
"No value found"
{{</highlight>}}

Here I'm checking if the `listOfNames` has a head (first item) and if so I'll take that value and convert it to uppercase. Otherwise, if the list is empty, I'll just show a message to the user and avoid errors like _undefined is not a function_.

## HTTP requests

If you are coming from a language like JavaScript, effects takes a while to wrap your head around. Unlike other platforms where _everything goes_, in Elm you have to take care of all the cases as you saw earlier.

To demonstrate how HTTP effects work I'll show you how to get data from Reddit and render it on a page. I expect you to have a basic understanding of how Elm and Elm architecture works as I'll be going through the HTTP action only.

You can try the [live demo here](https://skippednote.github.io/elm-http-example/) or see the [source code here](https://github.com/skippednote/elm-http-example).

![](/imgs/blog/elm-http.png)

### Code example

{{<highlight elm>}}
module Main exposing (..)

import Html exposing (..)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (type', placeholder, src)
import Html.App as App
import Http
import Json.Decode as Json exposing ((:=))
import Task
import List

-- App

main =
App.program
{ init = init
, subscriptions = subscriptions
, update = update
, view = view
}

--- Model

type alias RedditPost =
{ title : String
}

type alias Model =
{ subreddit : String
, response : (List RedditPost)
, error : String
}

init : ( Model, Cmd Msg )
init =
( Model "" [] "", Cmd.none )

-- Update

type Msg
= InputUpdate String
| Get
| FetchPass (List RedditPost)
| FetchFail Http.Error

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
case msg of
InputUpdate val ->
( { model | subreddit = val }, Cmd.none )

        Get ->
            ( model, getSubReddit model.subreddit )

        FetchPass response ->
            ( { model | response = response }, Cmd.none )

        FetchFail err ->
            case err of
                Http.BadResponse code message ->
                    ( { model | error = message }, Cmd.none )

                _ ->
                    ( { model |
                         error = "Failed"
                       , response = [] }, Cmd.none )

-- View

view model =
div [] input [ type' "text", onInput InputUpdate, placeholder "SubReddit" ][]
, button [ onClick Get ][ text "go" ]
, p [][ text model.error ]
, ul [] (List.map subbreddit model.response)
]

subbreddit response =
li [] h3 [][ text response.title ]
]

-- HTTP

getSubReddit : String -> Cmd Msg
getSubReddit subreddit =
let
url =
"https://www.reddit.com/r/" ++ subreddit ++ ".json"
in
Task.perform FetchFail FetchPass (Http.get decodeRedditPost url)

decodeRedditPost =
Json.at [ "data", "children" ] decodeList

decodeList =
Json.list decodeSubReddit

decodeSubReddit =
Json.at [ "data" ] decodeInnerData

decodeInnerData =
Json.object1 RedditPost
("title" := Json.string)

-- Subscriptions

subscriptions : Model -> Sub Msg
subscriptions model =
Sub.none
{{</highlight>}}

I have created an input field from where I enter the subreddit I want to fetch. Whenever I click on the Go button it will trigger the `Get` action that returns the current model and performs the `getSubReddit` task. The task takes in the subreddit string from the model and combines it to create a url. Next it uses the `get` method from `HTTP` package. I pass it two parameters, decodeRedditPost to tell it how to decode the response and url from which to fetch data. If the request is successful the `FetchPass` function renders the response else I'll use `FetchFail` to handle errors. This is similar to `then` and `catch` blocks from JavaScript Promises.

### Decoding response

Decoding response can get a bit tricky as you have to define the structure you are expecting. When performing the `Http.get` I pass the response to `decodeRedditPost` to pluck the data I want to show on the page. The payload that Reddit responds with is a bit complex and to get the nested values I've created a type alias: `RedditPost`.

{{<highlight json>}}
// Truncated JSON response from Reddit.
{
"kind": "Listing",
"data": {
"modhash": "",
"children": [
{
"kind": "t3",
"data": {
"title": "Noob refactoring question.",
"created_utc": 1469595665,
"distinguished": null,
"mod_reports": [],
"visited": false,
"num_reports": null,
"ups": 3
}
},
...
]
}
}
{{</highlight>}}

`decodeReddit` takes the `data` object and inside that the `children` array using the `Json.at` function and pass the returned value to `decodeList`.

{{<highlight elm>}}
decodeRedditPost =
Json.at [ "data", "children" ] decodeList
{{</highlight>}}

`decodeList` use `Json.list` to go over the `children` list and passes the objects to `decodeSubReddit`.

{{<highlight elm>}}
decodeList =
Json.list decodeSubReddit
{{</highlight>}}

`decodeSubReddit` goes through every object and grabs the `data` object and passes it to `decodeInnerData`.

{{<highlight elm>}}
decodeSubReddit =
Json.at [ "data" ] decodeInnerData
{{</highlight>}}

`decodeInnerData` receives the the `data` object and I pluck `title` from it using `Json.object1`.

{{<highlight elm>}}
decodeInnerData =
Json.object1 RedditPost
("title" := Json.string)
{{</highlight>}}

### Success and Failure

On success I update the model to add the response and render it to the page. On failure I take the error and pattern match on it. Based on the type of failure I update the error message and show it on the page. `Http.BadResponse` checks if the response code is not in the 200 range and then updates the error message received. For other types of errors I'm updating the model with "Failed" string.

{{<highlight elm>}}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
case msg of
...

        FetchPass response ->
            ( { model | response = response }, Cmd.none )

        FetchFail err ->
            case err of
                Http.BadResponse code message ->
                    ( { model | error = message }, Cmd.none )

                _ ->
                    ( { model | error = "Failed" }, Cmd.none )

{{</highlight>}}

Even though this is a lot of code for a simple HTTP request, it is code with guarantees. It's important to understand the why Elm does effects in a particular way and all the _"how to"_ questions become simple to answer.
