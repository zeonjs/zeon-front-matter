'use strict';

var yaml = require('js-yaml');
var regex = {
  yaml: /^([\s\S]*?)(-{3,})\n([\s\S]+?)\n\2(?:$|\n([\s\S]*)$)/,
  // comments: /^([\s\S]*?)(<!--\[conf\.(yaml|json)\])\n([\s\S]+?)\n(\[conf\.\3\]-->)(?:$|\n([\s\S]*)$)/
  comments: /^([\s\S]*?)(<!--\[conf\])\n([\s\S]+?)\n(\[conf\]-->)(?:$|\n([\s\S]*)$)/
};

/*!
 * split ------------------------------
 */
// split core
function split (str) {
  if (typeof str !== 'string') throw new TypeError('str is required!');

  if (regex.yaml.test(str)) return splitYAML(str);
  if (regex.comments.test(str)) return splitComments(str);

  return {
    content: str
  };
}
// yaml mode
function splitYAML (str) {
  var match = str.match(regex.yaml);

  return {
    data: match[3],
    content: match[4],
    separator: match[2]
  };
}
// comment mode
function splitComments (str) {
  var match = str.match(regex.comments);

  return {
    data: match[3],
    content: match[5],
    separator: 'yaml'
  };
}

/*!
 * parse ------------------------------
 */
// parse core
function parse (str, options) {
  if (typeof str !== 'string') throw new TypeError('str is required!');

  var splitData = split(str);
  var raw = splitData.data;

  if (!raw) return { _content: str };

  var data;

  data = parseYAML(raw, options);

  if (!data) return { _content: str };

  data._content = splitData.content;

  return data;
}
// parse YAML
function parseYAML (str, options) {
  var result = yaml.load(str, options);
  if (typeof result !== 'object') return;

  return result;
}

exports = module.exports = parse;
exports.parse = parse;
exports.split = split;
