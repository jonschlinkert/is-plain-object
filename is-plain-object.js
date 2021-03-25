/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * Returns if the encountered value is a native value that we can parse
 * or process. This is basically the javascript typeof but with added
 * support for null.
 *
 * @param {*} value
 *
 * @returns {boolean}
 */
function isPrimitive (value) {
  if (value === null) {
    return true;
  }
  return ['undefined', 'boolean', 'number', 'string', 'bigint'].includes(
    typeof value
  );
}


export function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined || isPrimitive(ctor)) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};
