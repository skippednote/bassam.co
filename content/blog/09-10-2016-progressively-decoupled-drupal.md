+++
draft = false
date = "2016-10-09T10:37:09+05:30"
title = "Progressively Decoupled Drupal with React"
+++

I briefly talked about progressively decoupling in my session at [DrupalCon Dublin](https://events.drupal.org/dublin2016/sessions/react-front-end-your-drupal-8-back-end/) and I would like to expand on couple of techniques that have worked out well for me. I'll be using React as the client-side framework but it should work equally well with other frameworks too. I choose React because of it's small size and my familiarity with it.

## Progressive Decoupling
Unlike Fully Decoupled Drupal solutions where you have to serve a completely isolated website on a different technology stack, with Progressively Decoupled websites you can gradually build out a library of components while staying inside Drupal. These components can either consume data from Drupal, a third-party service, or just serve some static content. 

There are two primary locations where these components can live: themes and modules. Components living inside themes should primarily be used to serve static content or content from a third-party service. 
Modules are a better candidate for components that consume data exposed by Drupal as they can pass the initial state to the component. This substantially trims down the time to paint the component.


## Setup
There are a [ton of boilerplates](http://andrewhfarmer.com/starter-project/#mount) to scaffold React projects and even a [CLI tool](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) by the React team. But a simple Webpack setup with Babel and CSS loaders should suffice when building components that live inside your Drupal applications. 

You would need Node installed on your machine to transpile React components so that they can be consumed by the browser. You install it either using the binary found on the [official website](https://nodejs.org/en/download/) or using [NVM](https://github.com/creationix/nvm), which I'd recommend.

#### Webpack
Here is the Webpack setup that you will be using inside your themes and modules.

- You will have a directory named `components` where all the React components will live and each of these components will be transpiled into the `js` directory under the components name (`js/SessionList.js`, `js/DrupalNews.js`).
- All the libraries used to build the components are abstracted into a single `vendor.js` file which you can cache for a longer time and can lead to smaller components. This is done using the `CommonsChunkPlugin` Webpack plugin.
- Files with `.js` extensions are passed through the `babel-loader` which allows you to use the latest JavaScript features and convert JSX syntax to normal JavaScript functions. 
- Files with `.css` extensions are passed through the `css-loader` which inlines the styles for each of the components and adds a 5 character base64 SHA to each class name so that they don't overwrite existing styles. 

You will create the following `webpack.config.js` files inside your theme or module.

{{<highlight javascript>}}
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'SessionList': './components/SessionList',
        'DrupalNews': './components/DrupalNews',
        'vendor': [
            'react',
            'react-dom',
            'axios'
        ]
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
}
{{</highlight>}}

Incase you have multiple modules that provide React Components you can have a single Webpack setup inside the root of your `modules/custom` directory instead of each module have a separate Webpack file. You will need to make the following updates.

{{<highlight javascript>}}
entry: {
    'session_list': './session_list/components/SessionList',
    'drupal_news': './drupal_news/components/DrupalNews',
    'vendor': [
        'react',
        'react-dom',
        'isomorphic-fetch'
    ]
},
output: {
    path: path.resolve(__dirname),
    filename: '[name]/js/[name].js'
}
{{</highlight>}}

Webpack will pick up the component from the module, transpile it and put it back in the same module but inside a `js` directory.

#### Packages
In the same directory you will need to run the following commands to generate a `package.json` file and install all the dependencies for creating React components.
{{<highlight bash>}}
npm init -y
npm install -S react react-dom axios
npm install -D webpack babel-loader babel-core babel-preset-react babel-preset-es2015 babel-preset-stage-0 css-loader style-loader
{{</highlight>}}


#### Directory Structure
##### Theme
Setup for components inside a theme.
{{<highlight bash>}}
themes
└── custom
    └── con
        ├── components
        │   ├── DrupalNews
        │   │   ├── index.js
        │   │   ├── style.css
        │   │   └── test.js
        │   └── SessionList
        │       ├── index.js
        │       ├── style.css
        │       └── test.js
        ├── con.info.yml
        ├── con.libraries.yml
        ├── con.theme
        ├── js
        │   ├── DrupalNews.js
        │   ├── SessionList.js
        │   └── vendor.js
        ├── package.json
        ├── templates
        │   └── page.html.twig
        └── webpack.config.js
{{</highlight>}}

##### Progressively Decoupled Module
Setup for components inside a module.
{{<highlight bash>}}
modules
└── custom
    └── session_list
        ├── components
        │   ├── Session
        │   │   └── index.js
        │   └── SessionList
        │       └── index.js
        ├── js
        │   ├── SessionList.js
        │   └── vendor.js
        ├── session_list.info.yml
        ├── session_list.libraries.yml
        ├── session_list.module
        ├── session_list.routing.yml
        ├── src
        │   └── Controller
        │       └── SessionList.php
        ├── templates
        │   └── session-list.html.twig
        ├── package.json
        └── webpack.config.js
{{</highlight>}}

##### Multiple Progressively Decoupled Modules
Setup for components inside multiple modules so you don't require multiple Webpack setups per module.
{{<highlight bash>}}
modules
└── custom
    ├── drupal_news
    │   ├── components
    │   │   └── DrupalNews
    │   │       └── index.js
    │   ├── drupal_news.info.yml
    │   ├── drupal_news.libraries.yml
    │   ├── drupal_news.module
    │   ├── drupal_news.routing.yml
    │   ├── js
    │   │   ├── DrupalNews.js
    │   │   └── vendor.js
    │   ├── src
    │   │   └── Controller
    │   │       └── DrupalNews.php
    │   └── templates
    │       └── drupal-news.html.twig
    ├── session_list
    │   ├── components
    │   │   ├── Session
    │   │   │   └── index.js
    │   │   └── SessionList
    │   │       └── index.js
    │   ├── js
    │   │   ├── SessionList.js
    │   │   └── vendor.js
    │   ├── session_list.info.yml
    │   ├── session_list.libraries.yml
    │   ├── session_list.module
    │   ├── session_list.routing.yml
    │   ├── src
    │   │   └── Controller
    │   │       └── SessionList.php
    │   └── templates
    │      └── session-list.html.twig
    ├── package.json    
    └── webpack.config.js
{{</highlight>}}


## Inside Theme
To use React components as a part of the theme you would either add them with the globally included library or to specific entities using preprocess hook or attaching to templates. If a components needs to be shown on every page you would prefer globally adding it, otherwise you should attach it only at places where it is needed. 
#### Globally
Adding the component to the globally used library.
{{<highlight yaml>}}
global_baseline:
    version: 1.0
    css:
        theme:
            css/style.css: {}
            css/home.css: {}
    js:
        core/drupal: {}
        core/jquery: {}
        js/sessions-list.js: {}
    dependencies:
        - con/vendor

vendor:
    version: 1.0
    js:
        js/vendor.js: { minified: true }
{{</highlight>}}

#### Specific Entity
##### Adding the component to the globally used library.
{{<highlight yaml>}}
sessions_list:
    version: 1.0
    js:
        js/sessions-list.js: {}
    dependencies:
        - con/vendor

vendor:
    version: 1.0
    js:
        js/vendor.js: { minified: true }
{{</highlight>}}

##### Adding components to specific entity bundle type using `preprocess`.
<small>You can write a mounting point inside a block or add it in a template.</small> 
{{<highlight php>}}
function con_preprocess_node(&$variables) {
    $type = $variables['node']->getType();
    if($type == 'session') {
        $variables['#attached']['library'][] =  'con/sessions_list';
    }
}
{{</highlight>}}

##### Attaching component to specific template.
{{<highlight twig>}}
{{ attach_library('con/sessions_list') }}
<div class="session-list__block">
    <h3>Sessions List</h3>
    <div id="session-mount"></div>
</div>
{{</highlight>}}


## Inside Module
You can have modules that create blocks or page where React components can be mounted. The setup for modules is very similar to what it is for theme. However, there is a major upside to it, you can pass the initial state to the component via `drupalSettings` or template instead of sending XHR request from the client side everytime the component mounts. This also makes your component completely isolated as all the business and UI logic is contained in the module that can be used in multiple projects and easily refactored.

You will create a page where the component will be mounted. Everytime you hit the route for the page, you will call the `class method` mentioned in the modules `routing.yml` files. This method will get the `json` data from the endpoint and add it to the `drupalSettings` variable which is available globally in your browsers.

`Guzzle` can be used to make the http request as its avaiable with Drupal core and has easy to use API. Here you will also attach the component library so it is only shows on the page that the module added.  

{{<highlight php>}}
<?php

namespace Drupal\session_list\Controller;

use Drupal\Core\Controller\ControllerBase;
use GuzzleHttp\Client;

class SessionList extends ControllerBase {
  public function index() {
    $client = new Client();
    $res = $client->request('GET', 'http://app.dd/api/sessions');
    if($res->getStatusCode() === 200) {
      $sessions = $res->getBody();
    }

    return [
      '#theme' => 'session_list',
      '#attached' => [
        'drupalSettings' => [
          'sessions' => json_decode($sessions),
        ],
        'library' => [
          'session_list/sessions'
        ],
      ],
    ];
  }

}
{{</highlight>}}

Now if you check the browser console, you will see that the `sessions` key in `drupalSettings` object will be populated with data from the request made in the module.

{{<highlight php>}}
componentWillMount() {
    if (window.drupalSettings.sessions.length) {
        this.setState({
            loading: false,
            sessions: window.drupalSettings.sessions
        })
    } else {
        fetch('http://con.dd/api/sessions')
        .then(res => res.json())
        .then(sessions => this.setState({
            loading: false,
            sessions: sessions
        }));
    }
}
{{</highlight>}}

In your component on the componentDidMount lifecycle method you can first check the `drupalSettings` for the initial state rather than request it from the API.

The code sample for this demonstration can be found on [GitHub](https://github.com/skippednote/progressive-drupal).