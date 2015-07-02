'use strict';

var yaml = require('js-yaml');

// parse string
function parse (str) {
  if (typeof str !== 'string') {
    throw new TypeError('str is required!');
  }

  var obj = {};

  obj._content = '';

  return obj;
}

exports = module.exports = parse;
exports.parse = parse;
