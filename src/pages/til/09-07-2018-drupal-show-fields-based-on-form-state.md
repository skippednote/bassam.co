---
date: "2018-07-09"
title: "Drupal: Show fields based on form state"
path: "/til/druapl-show-field-based-on-form-state"
type: "til"
category: "drupal"
---

If we want to show specific fields based on a users choice we can use Drupal's Form API states.

Here is an example where a user can choose between Pizza or Burger and based on the option they select the relevant fields become visible.

```php
function modulename_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  if ('the_form_id_goes_here' === $form_id) {
    // Show the Toppings field if the selected dish is a Pizza.
    // `field_toppings` is the field name that we want to show when the value of the
    // field `field_dish` is Pizza.
    $form['field_toppings']['#states'] = [
      'visible' => [
        ':input[name="field_dish"]' => [ // Even for select elements use `input`
          'value' => 'pizza',
        ],
      ],
    ];

    // Show the Patty field if the selected dish is a Burger.
    // `field_patty` is the field name that we want to show when the value of
    //the field `field_dish` is Burger.
    $form['patty']['#states'] = [
      'visible' => [
        ':input[name="field_dish"]' => [
          'value' => 'burger',
        ],
      ],
    ];
  }
}
```

Here `:input[name=*]` is a jQuery selector which gets toggled based on the form value we choose. This all happens on the client side using JavaScript.

We can also do a negative of this wherein we replace `visible` with `invisible` so the fields gets hidden when the given condition is met.
