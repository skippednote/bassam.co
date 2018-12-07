---
date: "2017-09-18"
title: "Streaming HTML to your Browsers"
path: "/streaming-html-to-your-browsers"
---

> PSA: This article is in no way related to the [Stream’s Standard](https://streams.spec.whatwg.org/).

There are several strategies to reduce the time for a page to receive meaningful content and become interactive. Today we will be looking into one of the strategies that involve changing the way we serve content from the back-end.

Server-side rendering can be slow as we don’t render anything to the page until we have made all the database queries, massaged the data, and sprinkled all the additional scripts we need before a user can see it.

Here is how we normally render the content to the user:

```javascript
require('isomorphic-fetch');

const api = query => {
  return fetch(`https://reddit.com/r/${query}.json`)
    .then(res => res.json())
    .then(data => {
      return data.data.children.reduce((acc, i) => {
        acc += `<li>${i.data.title}</li>`;
        return acc;
      }, `<ul>`);
    })
    .catch(err => console.error(err));
};

module.exports = api;
```

```javascript
const express = require('express');
const api = require('./api');
const app = express();
app.use(express.static('public'));

const contentHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Streaming Content</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
`;

const contentFooter = `
</body>
</html>
`;

app.get('/', async (req, res) => {
  const body = await api('javascript');
  const html = contentHeader + body + contentFooter;
  res.send(html);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
```

To address this we can send content to the user in chunks. The initial chunk would include all the critical content the page requires to be interactive as soon as the subsequent chunks of data are received.

We can send the `<head>` tag as a part of the initial chunk where we would include all the critical CSS and JavaScript that the would be the bare minimum to make the page interactive.

```javascript
const express = require('express');
const api = require('./api');
const app = express();
app.use(express.static('public'));

const contentHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Streaming Content</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
`;

const contentFooter = `
</body>
</html>
`;

app.get('/', async (req, res) => {
  res.write(contentHeader);
  res.flushHeaders();

  const body = await api('javascript');
  res.write(body);
  res.flushHeaders();

  res.write(contentFooter);
  res.end();
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
```

Here with Express.js, we use the res.write() method to send the `<head>` content while API request is complete. This would mean all the CSS and JS would be parsed and evaluated before the next chunk of data which includes content from the API is received. We follow this `res.write()` with `res.flushHeaders()` so that we can continue sending more data down the pipe as soon it is ready.

This strategy has been popularized by Google under the [App Shell (Application Shell) banner](https://developers.google.com/web/fundamentals/architecture/app-shell) and mostly used with PWA’s. The initial chunk sent to the user is cached by Service Worker with placeholders that are replaced by content received in the later chunks.

> With thanks to [Siddharth Kshetrapal](https://twitter.com/siddharthkp) for their review and inputs.
