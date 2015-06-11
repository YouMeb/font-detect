'use strict';

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
  return Object
    .keys(data)
    .map(function (key) {
      return key + ': ' + data[key];
    })
    .join(';');
};
