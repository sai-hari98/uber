const readline = require('readline')
//var sleep = require('sleep');

var Web3 = require('web3'); // https://www.npmjs.com/package/web3
// Create a web3 connection to a running geth node over JSON-RPC running at
// http://localhost:8545
// For geth VPS server + SSH tunneling see
// https://gist.github.com/miohtama/ce612b35415e74268ff243af645048f4
var web3 = new Web3();
exports.web3=web3;
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var contractAddress='0x7B0cBbF7eC94AAf365835fb3164fF873B2966Ac9';/*replace with your contractAddress*/
exports.contractAddress=contractAddress;
var defaultAccount='0x77A5a320Ea4081fCD6B2bEed1c7784f997054D2f';/*aws main Account*/
exports.defaultAccount=defaultAccount;
var defaultPassword="django23";
exports.defaultPassword=defaultPassword;

var stc;
exports.stc=stc;

var stcInstance;
exports.stcInstance=stcInstance;

var gas = 500000;
exports.gas=gas;

var abi = [ { "constant": true, "inputs": [], "name": "getUsers", "outputs": [ { "name": "", "type": "address[]", "value": [] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "adrs", "type": "address" } ], "name": "getDetails", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "address" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "indices", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "emailId", "type": "string" }, { "name": "mobNo", "type": "string" }, { "name": "accNo", "type": "address" }, { "name": "pswd", "type": "string" } ], "name": "setDetails", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];


exports.abi = abi;

function initialize(contractAddress, account)
{
	contractAddress = contractAddress;
	web3.eth.defaultAccount = account;
	defaultAccount = account;

}
exports.initialize=initialize;

function getContract(abi)
{
	stc  = web3.eth.contract(abi);
}
exports.getContract=getContract;

function getContractInstance(contractAddress)
{
	stcInstance = stc.at(contractAddress);
}
exports.getContractInstance=getContractInstance;

function setDetails(name, emailId, mobNo, accNo, pswd, fromAccount)
{
	unlockAccountp(defaultAccount, defaultPassword);
	var returnCode = stcInstance.setDetails(name, mobNo, emailId, accNo, pswd, {fromAccount:defaultAccount,gas:500000});
	return returnCode;
}
exports.setDetails = setDetails;

function getDetails(accNo)
{
	unlockAccountp(defaultAccount, defaultPassword);
	var returnCode = stcInstance.getDetails(accNo);
	return returnCode;
}
exports.getDetails = getDetails;

function getUsers()
{
	unlockAccountp(defaultAccount, defaultPassword);
	var returnCode = stcInstance.getUsers();
	return returnCode;
}
exports.getUsers = getUsers;

function unlockAccountp(defaultAccount,defaultPassword){
	console.log("enetered unlockAccountp", "account", defaultAccount);
	var returnCode = web3.personal.unlockAccount(defaultAccount,defaultPassword,0);
}
exports.unlockAccountp = unlockAccountp;

// lockAccount locks the blockchain account
function lockAccount(account){
	var returnCode = web3.personal.lockAccount(account);
}
exports.lockAccount = lockAccount;