// Imports
const fs = require('fs');

function replaceContents(file, data) {
  fs.writeFileSync(file, data);
}

function getContents(file) {
  return (fs.readFileSync(file));
}

exports.replaceContents = replaceContents;
exports.getContents = getContents;