/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var isPlainObject = require('./');

describe('.isPlainObject()', function () {
  it('should return `true` if the object is created by the `Object` constructor.', function () {
    assert(isPlainObject(Object.create({})) === true);
    assert(isPlainObject(Object.create(Object.prototype)) === true);
    assert(isPlainObject({foo: 'bar'}) === true);
    assert(isPlainObject({}) === true);
  });

  it('should return `false` if the object is not created by the `Object` constructor.', function () {
    function Foo() {this.abc = {};};

    assert(isPlainObject(/foo/) === false);
    assert(isPlainObject(function () {}) === false);
    assert(isPlainObject(1) === false);
    assert(isPlainObject(['foo', 'bar']) === false);
    assert(isPlainObject([]) === false);
    assert(isPlainObject(new Foo) === false);
    assert(isPlainObject(null) === false);
    assert(isPlainObject(Object.create(null)) === false);
  });
});
