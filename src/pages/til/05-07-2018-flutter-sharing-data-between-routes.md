---
date: "2018-07-05"
title: "Flutter: Sharing data between routes"
path: "/til/flutter-sharing-data-between-routes"
type: "til"
category: "flutter"
---

Sharing data between routes isn't straightforward and if you are coming from a front-end background like me the first thing you would do is reach out for a state management library like Redux. While there are things like BloC pattern or `flutter_redux`, I'm deliberately trying to avoid them and figure out a solution that comes out of the box with Flutter.

#### Scenario

- Given you are on the `Home` widget which renders a list of notes.
- And you navigate to the `AddNew` widget and fill in the textfield and press save.
- And you are navigated back to `Home` widget with the textfield data.
- Then you should have a new note added to the list of notes.

```dart
// Home widget

// We create an async _addNew method in our Home widget that will receive a value
// once we pop back from the AddNew widget.
Future _addNew() async {
    String inputValue = await Navigator.of(context).push(MaterialPageRoute<String>(
        builder: (BuildContext context) => AddNew()
    ))

    // If we receive a value from the AddNew route, we update the Widget state
    // so that it re-renders it.
    if (!inputValue.isEmpty) {
        setState(() {
            _inputValue = inputValue;
        })
    }
}
```

```dart
// AddBew widget

// We pop off the current route from the Navigation history moving back to the
// previous route (Home widget) passing it the Textfield value to it.
_onSave() {
    Navigator.of(context).pop<String>(widget._inputValue);
}
```

You can find a complete example for reference [here](https://github.com/skippednote/flutter-twitter-timeline/).
