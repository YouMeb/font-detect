'use strict';

var runner = require('./runner');
var slice = Array.prototype.slice;

module.exports = function () {
  var fontList = slice.call(arguments);
  return runner(fontList, detect);
};

function detect(baseFonts, spanList) {
  var match = baseFonts.match.bind(baseFonts);
  return spanList
    .map(match)
    .reduce(and, true);
}

function and(curr, next) {
  return curr && next;
}

function noop() {}
