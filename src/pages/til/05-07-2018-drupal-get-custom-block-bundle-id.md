---
date: "2018-07-05"
title: "Drupal: Get custom block bundle ID"
path: "/til/druapl-get-custom-block-bundle-id"
type: "til"
category: "drupal"
---

When working with custom blocks in Drupal 8, the block ID generated is something like this `block_content:a53e9671-9158-40b7-9668-108c758404b9`. This, however, isn't useful when you are preprocessing it to manipulate how it is rendered.

A way around this is to check the block bundle and based on that make the required changes.

```php
function themename_preprocess_block(&$variables) {
  // This checks whether the block is a custom block.
  if (isset($variables['elements']['content']['#block_content'])) {
    $block_content = $variables['elements']['content']['#block_content'];
    // Get the block bundle
    $bundle = $block_content->bundle();

    if ($bundle === "my_block") {
        $variables['attributes']['class'][] = 'hidden';
    }
  }
}
```
