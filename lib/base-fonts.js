'use strict';

var map = require('component/map');
var reduce = require('component/reduce');
var SpanEl = require('./span');
var proto = BaseFonts.prototype;

module.exports = BaseFonts;

function BaseFonts() {
  if (!(this instanceof BaseFonts)) {
    return new BaseFonts();
  }
  this.sizes = [];
  this.fonts = [];
}

proto.match = function (span) {
  var sizes = map(this.sizes, checkSize(span, this.fonts));
  return reduce(sizes, or, false);
};

proto.addFont = function (fontName) {
  var span = SpanEl();
  span.style.set('font-family', fontName);
  span.attach();
  this.sizes.push(span.size());
  this.fonts.push(fontName);
  span.detach();
  return this;
};

function checkSize(span, baseFonts) {
  return function (baseSize, index) {
    span.baseFont(baseFonts[index]);
    span.applyStyle();
    var spanSize = span.size();
    return spanSize.width !== baseSize.width
      || spanSize.height !== baseSize.height;
  };
}

function or(a, b) {
  return a || b;
}
