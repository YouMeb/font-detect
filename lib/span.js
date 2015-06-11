'use strict';

var Style = require('./style');
var proto = SpanEl.prototype;

module.exports = SpanEl;

function SpanEl(fontName) {
  if (!(this instanceof SpanEl)) {
    return new SpanEl(fontName);
  }
  this.fontName = fontName;
  this.style = Style()
    .set('font-size', '72px')
    .set('font-family', fontName)
    .set('opacity', '0')
    .set('z-index', '-1')
    .set('position', 'absolute')
    .set('right', '0')
    .set('bottom', '0');
  this.el = document.createElement('span');
  this.el.textContent = 'mmmmmmmmmmlli';
}

proto.baseFont = function (baseFont) {
  this.style.set('font-family', this.fontName + ',' + baseFont);
  return this;
};

proto.attach = function () {
  this.applyStyle();
  document.body.appendChild(this.el);
  return this;
};

proto.detach = function () {
  this.el.parentElement.removeChild(this.el);
  return this;
};

proto.applyStyle = function () {
  var style = this.style.toString();
  var oldStyle = this.el.getAttribute('style');
  if (style !== oldStyle) {
    this.el.setAttribute('style', style);
  }
  return this;
};

proto.size = function () {
  return {
    width: this.el.offsetWidth,
    height: this.el.offsetHeight
  };
};
