// Imports
const s2n = require('string2num');

function buffer(input) {
  return (String('0' + input).slice(-2));
}

function encodeString(input) {
  return (s2n.encode(input));
}

function decodeString(input) {
  return (s2n.decode(input));
}

exports.buffer = buffer;
exports.encodeString = encodeString;
exports.decodeString = decodeString;