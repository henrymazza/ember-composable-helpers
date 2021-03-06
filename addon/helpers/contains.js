import Ember from 'ember';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

const {
  A: emberArray,
  typeOf
} = Ember;

function _contains(needle, haystack) {
  return emberArray(haystack).contains(needle);
}

export function contains(needle, haystack) {
  if (typeOf(haystack) !== 'array') {
    return false;
  }

  if (typeOf(needle) === 'array' && needle.length) {
    return needle.reduce((acc, val) => acc && _contains(val, haystack), true);
  }

  return _contains(needle, haystack);
}

export default createNeedleHaystackHelper(contains);
