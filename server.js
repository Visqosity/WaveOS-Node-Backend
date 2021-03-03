// Registery
accounts = require('./apps/accounts.js');

// Execution
function handoff(packet) {
  if (packet.target == process.env.SERVER_ID) {
    if (packet.application == 'accounts') {
      return (accounts.application(packet.type, packet.sender, packet.contents));
    }
  }
}

exports.handoff = handoff;