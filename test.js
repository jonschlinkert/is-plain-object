/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var isPlainObject = require('./dist/is-plain-object.js').isPlainObject;

function Foo() {
  this.abc = {};
}

assert(isPlainObject(Object.create({})));
assert(isPlainObject(Object.create(Object.prototype)));
assert(isPlainObject({ foo: 'bar' }));
assert(isPlainObject({}));
assert(isPlainObject(Object.create(null)));

assert(!isPlainObject(/foo/));
assert(!isPlainObject(function() {}));
assert(!isPlainObject(1));
assert(!isPlainObject(['foo', 'bar']));
assert(!isPlainObject([]));
assert(!isPlainObject(new Foo()));
assert(!isPlainObject(null));
