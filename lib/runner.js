'use strict';

var Style = require('./style');
var SpanEl = require('./span');
var BaseFonts = require('./base-fonts');

module.exports = function (fontList, fn) {
  var spanList = fontList.map(SpanEl);
  var baseFonts = BaseFonts();
  baseFonts.addFont('serif');
  baseFonts.addFont('monospace');
  baseFonts.addFont('sans-serif');
  spanList.forEach(attach);
  var ret = fn(baseFonts, spanList);
  spanList.forEach(detach);
  return ret;
};

function attach(span) {
  span.attach();
}

function detach(span) {
  span.detach();
}
