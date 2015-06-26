'use strict';

var map = require('component/map');
var bind = require('component/bind');
var reduce = require('component/reduce');
var runner = require('./runner');
var slice = Array.prototype.slice;

module.exports = function () {
  var fontList = slice.call(arguments);
  return runner(fontList, detect);
};

function detect(baseFonts, spanList) {
  var match = bind(baseFonts, 'match');
  var results = map(spanList, match);
  return reduce(results, and, true);
}

function and(curr, next) {
  return curr && next;
}

function noop() {}
