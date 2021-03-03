// Imports
const fs = require('../modules/filesystem.js');

// Application definition
var userAccounts = {};
refresh();

// Functions
function createAccount(username, password, passwordType) {
  userAccounts[username] = {
    'type': passwordType,
    'password': password,
  };
  fs.replaceContents('./persistent/userAccounts.json', JSON.stringify(userAccounts));
}

function removeAccount(username, password) {
  refresh();
  if (queryAccount(username)) {
    if (checkPassword(username, password)) {
      delete userAccounts[username];
      backup();
    }
  }
}

function queryAccount(username) {
  refresh();
  return (!(userAccounts[username] == undefined));
}

function checkPassword(username, password) {
  refresh();
  if (queryAccount(username)) {
    return (userAccounts[username]['password'] == passwod);
  }
}

function modifyPassword(username, password, newPassword) {
  refresh();
	if (queryAccount(username)) {
		if (checkPassword(username, password)) {
		userAccounts[username]['password'] = newPassword;
		backup();
		}
	}
}

function getPasswordType(username) {
  refresh();
  if (queryAccount(username)) {
    return (userAccounts[username]['type']);
  }
}

function list() {
  refresh();
  for (var key in userAccounts) {
    console.log(key);
  }
}

function backup() {
  fs.replaceContents('./persistent/userAccounts.json', JSON.stringify(userAccounts));
}

function refresh() {
  userAccounts = JSON.parse(fs.getContents('./persistent/userAccounts.json'));
}

function application(action, username, password, newPassword) {
	if (action == 'passwordVerify') {
		return(checkPassword(username, password));
	} else if (action == 'modifyPassword') {
		modifyPassword(username, password, newPassword);
	} else if (action == 'createAccount') {
		createAccount(username, password, newPassword);
	} else if (action == 'passwordGetType') {
		return(getPasswordType(username));
	} else if (action == 'queryAccount') {
		return(queryAccount(username));
	} else {
		return('INVALID_ACTION_ARGUMENT');
	}
}

// Function exports
exports.createAccount = createAccount;
exports.removeAccount = removeAccount;
exports.queryAccount = queryAccount;
exports.checkPassword = checkPassword;
exports.modifyPassword = modifyPassword;
exports.getPasswordType = getPasswordType;
exports.list = list;
exports.backup = backup;

// Application exports
exports.application = application;