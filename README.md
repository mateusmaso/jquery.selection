jquery.selection [![Build Status](https://travis-ci.org/mateusmaso/jquery.selection.svg?branch=master)](https://travis-ci.org/mateusmaso/jquery.selection)
================

jQuery plugin for handling selection.

## Features

* Save selection
* Restore selection

## Dependencies

* jquery.js (>= 2.1)

## Examples

```javascript
var textarea = $("textarea:focus");

textarea.saveSelection();
textarea.blur();
textarea.restoreSelection();
textarea.hasSelection();
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
