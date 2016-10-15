## What's it worth

Most people vulcanize the polymer components they use. But since each of those can (and will) have a lot of dependencies, it's hard to know exactly how big your app will get if you add for example a <paper-icon-button> to your page.

This little test script helps work out how big your Polymer dependencies *reall* are.

### Example

```
// Make sure you have the elements you want to test installed
$ bower install PolymerElements/paper-button PolymerElements/paper-icon-button

// Now run gulp
$ gulp --components "paper-button paper-icon-button"
[09:27:55] File size: deps.html 27.85 kB
[09:27:55] File size: deps.js 267.73 kB
[09:27:55] File size: all files 295.58 kB
```

### Real world example

I had a small app that was only using a handful of paper elements. But look at the cost:
```
$ bower install PolymerElements/iron-flex-layout PolymerElements/iron-ajax PolymerElements/paper-fab PolymerElements/paper-icon-button PolymerElements/paper-toast PolymerElements/iron-pages PolymerElements/iron-form PolymerElements/paper-input PolymerElements/paper-button PolymerElements/iron-icon PolymerElements/app-layout PolymerElements/paper-item
$
$ gulp --components "iron-flex-layout iron-ajax paper-fab paper-icon-button paper-toast iron-pages iron-form paper-input paper-button iron-icon app-layout paper-item"

[09:32:35] File size: deps.html 60.81 kB
[09:32:35] File size: deps.js 498.03 kB
[09:32:35] File size: all files 558.84 kB

OUCH
```
