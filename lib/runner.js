'use strict';

var map = require('component/map');
var each = require('component/each');
var Style = require('./style');
var SpanEl = require('./span');
var BaseFonts = require('./base-fonts');

module.exports = function (fontList, fn) {
  var spanList = map(fontList, SpanEl);
  var baseFonts = BaseFonts();
  baseFonts.addFont('serif');
  baseFonts.addFont('monospace');
  baseFonts.addFont('sans-serif');
  each(spanList, attach);
  var ret = fn(baseFonts, spanList);
  each(spanList, detach);
  return ret;
};

function attach(span) {
  span.attach();
}

function detach(span) {
  span.detach();
}
