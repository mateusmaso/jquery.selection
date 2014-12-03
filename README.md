jquery.selection [![Build Status](https://travis-ci.org/mateusmaso/jquery.selection.svg?branch=master)](https://travis-ci.org/mateusmaso/jquery.selection)
================

jQuery plugin for handling selections.

## Features

* Save selection using ```saveSelection``` method.
* Restore selection using ```restoreSelection``` method.

## Dependencies

* jquery.js (>= 2.1.0)

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
