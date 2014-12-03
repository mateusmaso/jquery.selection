// jquery.selection
// ----------------
// v0.1.1
//
// Copyright (c) 2013-2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/jquery.selection

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(global.$);
    exports = factory(global.$);
  } else {
    factory(root.$);
  }

}(this, function($) {

  $.fn.saveSelection = function() {
    return this.each(function() {
      if (window.getSelection().rangeCount > 0) {
        $(this).data("savedSelection", window.getSelection().getRangeAt(0));
      }
    });
  };

  $.fn.restoreSelection = function() {
    return this.each(function() {
      var selection = window.getSelection();
      var range = $(this).data("savedSelection");

      if (this.is("textarea") || this.is("input") || !range) {
        this.focus();
      } else {
        if (selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };

  $.fn.hasSelection = function() {
    return $(this).data("savedSelection") != null;
  };

}));
