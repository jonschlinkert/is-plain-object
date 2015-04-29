/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var expect = require('chai').expect;
var isPlainObject = require('../');

describe('Same-Realm Server Tests', function() {
  it('should return `true` if the object is created by the `Object` constructor.', function() {
    expect( isPlainObject(Object.create({})) ).to.be.true;
    expect( isPlainObject(Object.create(Object.prototype)) ).to.be.true;
    expect( isPlainObject({foo: 'bar'}) ).to.be.true;
    expect( isPlainObject({}) ).to.be.true;
  });

  it('should return `false` if the object is not created by the `Object` constructor.', function() {
    function Foo() {this.abc = {};};

    expect( isPlainObject(/foo/) ).to.be.false;
    expect( isPlainObject(function () {}) ).to.be.false;
    expect( isPlainObject(1) ).to.be.false;
    expect( isPlainObject(['foo', 'bar']) ).to.be.false;
    expect( isPlainObject([]) ).to.be.false;
    expect( isPlainObject(new Foo) ).to.be.false;
    expect( isPlainObject(null) ).to.be.false;
    expect( isPlainObject(Object.create(null)) ).to.be.false;
  });
});
