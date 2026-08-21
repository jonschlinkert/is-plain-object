'use strict';

var assert = require('assert');
var isPlainObject = require('../dist/is-plain-object.js').isPlainObject;

assert(isPlainObject(Object.create(null)));
assert(isPlainObject({ foo: 'bar' }));
assert(!isPlainObject([]));
assert(!isPlainObject(null));
