---
title: Better Web Typography
layout: post
categories: design
---

[Web is 95% typography](http://www.informationarchitects.jp/en/the-web-is-all-about-typography-period/) and you still don't put weight on it. Ridiculous, isn't. Typeface isn't all to typography however it's an essential part of it. This might have been said several times before but let's go through this once more. Legibility and Readability are the most crucial parts of web typography, getting the whitespace right and having the perfect contrast between the text and background is very important.

Today I won't be talking about these things. Instead, something that needs more attention, Scales. Text on the web is set in paragraphs, headings, blockquotes and in several other elements. We won't be able to differentiate between any of these elements if we use the same scale (font size) for them, similar thing happens when we apply a reset stylesheet.

For me it became tiresome defining a typographic scale, again and again. So now I have made a [Modest Typographic Scale](http://jsfiddle.net/skippednote/w8aX2/11/) for some of the most common elements. Just import the stylesheet after the reset file and you will have elements functioning to a typographic scale. I have used a traditional scale which varies from 2rem to 0.75rem, paragraphs are set at browser default 16px/1em(100%).  In case you want the overall type size to be larger than browser default, just increase the body font size as intended and rest of the elements will scale accordingly.

I have used rem instead of em so that the font size is independent of the containers style. Em's are good for adding margin and padding to elements only. Baseline grid made by [Dan Eden](http://daneden.me) and [Michael Wright](http://twitter.com/#!/michaelw90) is included in the scale to maintain proper leading. To keep all the element aligned to the baseline grid use margin-bottom instead of margin-top with a value that is a multiple of line-height initially set on the body.


## Special Mentions

[Pragmatic, practical font sizing in CSS](http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/)  <br>
[Basehold.it](https://github.com/daneden/Basehold.it)


>Typography is what language looks like.
