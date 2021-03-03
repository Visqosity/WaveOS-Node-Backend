// Local Imports
log = require('./modules/common-utilities.js').log;
log('Importing Local Modules...', 'Setup');
log();
buffer = require('./modules/string-utilities.js').buffer;
encodeString = require('./modules/string-utilities.js').encodeString;
decodeString = require('./modules/string-utilities.js').decodeString;
packetParse = require('./modules/parse-utilities.js').packetParse;

const accounts = require('./apps/accounts.js');
const server = require('./server.js');

log('Succesfully Imported Local Server Components', 'Setup');
log();

// External Imports
log('Importing External Modules...', 'Setup');
log();
const scratch = require('node-scratch-client');

log('Succesfully Imported External Server Components', 'Setup');
log();
log('Enabling Connection To Scratch');
log();

// Initialization
const projectID = '';
const username = process.env.SCRATCH_USERNAME;
const password = process.env.SCRATCH_PASSWORD;

// Session Validation
const Client = new scratch.Client({
  username: username,
  password: password
});

log ('Connection To Servers Established');
log();

// Setup
Client.login().then(() => {
  let cloud = Client.session.createCloudSession(projectID);

  cloud.connect().then(() => {
    cloud.on('set', variable => {
      console.log('[' + variable.name.slice(2) + ']: ' + decodeString(variable.value));
      cloud.set(variable.name, server.handoff(packetParse(decodeString(variable.value))));
    });
  });
});