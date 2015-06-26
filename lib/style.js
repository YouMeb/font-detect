'use strict';

var map = require('component/map');
var proto = Style.prototype;

module.exports = Style;

function Style() {
  if (!(this instanceof Style)) {
    return new Style();
  }
  this.data = {};
}

proto.set = function (key, value) {
  this.data[key] = value;
  return this;
};

proto.toString = function () {
  var data = this.data;
  var values = [];
  var prop;

  for (prop in data) {
    if (data.hasOwnProperty(prop)) {
      values.push(prop + ': ' + data[prop]);
    }
  }

  return values.join(';');
};
