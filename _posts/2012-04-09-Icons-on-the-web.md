---
title: Icons on the web
layout: post
categories: design
---

We use icons on almost every website we build, they are mostly in png or gif formats, to provide visual aid and user experience. The problem with them is that they consume extra space and don't scale well. They add more HTTP requests thereby increasing the page load time, if we aren't using image sprites.

We can use SVG files instead. Being vector graphics, SVG files scale very well. They don't add to the number of HTTP requests as they are coded into our markup. However  coding SVG icons isn't very simple for everyone.

Another technique to add icons to your page without consuming much memory or adding to HTTP requests is using Data URI. But be cautioned, if you are using Data URI be ready to have your CSS filled with mountainous amount of alien code. For this we can can use a separate CSS file, but then you will be adding another HTTP request.

Finally we arrive at @font-face, everyone must be familiar with these. Some of the folks on the internet have crafted hundreds of icons for @font-face. This makes things very simple when coding and scaling websites. You can use simple 'font-size' tag to resize these icons without the need of 'img' tags. However @font-face has its fallbacks too, they aren't sharp when up-scaled to a larger size and seem pixelated.

For now, SVG and @font-face are the best option if you are aiming for a responsive and fast website. Getting rid of 'px' from our stylesheet is a majors step towards a scaling and faster web.
