/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
'use strict';

var lyff = require('../lyff.js'), eq = require('assert').deepStrictEqual;

function t(bfn) {
  var actual = lyff('./' + bfn + '.yaml', require),
    expected = require('./' + bfn + '.json');
  eq(actual, expected);
}

t('users');
