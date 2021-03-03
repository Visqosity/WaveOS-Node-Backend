//Local Imports
buffer = require('./string-utilities.js').buffer;
encoder = require('./string-utilities.js');
fs = require('./filesystem.js');

//Object Initializations
var time = new Date();
var delay = true;

function log(text, level) {
  if (level === undefined && text === undefined) {
    console.log('[' + getTime() + ']' + '\n');
  }
  else {
		console.log("[" + getTime() + " / " + level + "]: " + text);
  }
}

function getTime() {
	return(buffer(time.getHours()) + ":" + buffer(time.getMinutes()) + ":" + buffer(time.getSeconds()));
}

function quickEncode(input) {
  encoder.encodeString(input);
}

exports.log = log;
exports.getTime = getTime;