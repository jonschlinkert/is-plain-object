/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import isObject from 'isobject';

var toString = Object.prototype.toString;
var hasProp = Object.prototype.hasOwnProperty;

function isObjectObject(o) {
  return isObject(o) === true && toString.call(o) === '[object Object]';
}

export default function isPlainObject(o) {
  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  var ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  var prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (hasProp.call(prot, 'isPrototypeOf') === false) return false;

  // Most likely a plain Object
  return true;
};
