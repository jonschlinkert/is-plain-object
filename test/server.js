/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var expect = require('chai').expect;
var fixtures = require('./fixtures.json');
var isPlainObject = require('../');
var parseFixtures = require('fs').readFileSync( require('path').resolve(__dirname+'/parseFixtures.js'), {encoding:'utf8'} );

parseFixtures = eval( '(' + parseFixtures + ')' );
fixtures = parseFixtures(fixtures);

describe('Same-Realm Server Tests', function () {
  it('should return `true` if the object is created by the `Object` constructor.', function() {
    fixtures.trues.forEach( function(fixture) {
      expect( isPlainObject(fixture) ).to.be.true;
    });
  });

  it('should return `false` if the object is not created by the `Object` constructor.', function() {
    fixtures.falses.forEach( function(fixture) {
      expect( isPlainObject(fixture) ).to.be.false;
    });
  });
});
