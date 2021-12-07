/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
'use strict';

var rrf = require('read-resolved-file-sync'),
  sly = require('safeload-yaml-pmb'),
  stubRqr = { resolve: String };

function lyff(path, rqr) {
  var data = rrf(rqr || stubRqr, path, 'UTF-8');
  data = sly(data);
  return data;
}

lyff.default = lyff;

lyff.r = function preConfig(rqr) {
  return function lyfrf(path) { return lyff(path, rqr); };
};

module.exports = lyff;
