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

/*var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));*/

/* Oil and Gas Contract */
var contractAddress='0x3252FcF228e22e7C20448892A84f45247FC09d09';
exports.contractAddress=contractAddress;
var defaultAccount='0x77A5a320Ea4081fCD6B2bEed1c7784f997054D2f';/*aws main Account*/
exports.defaultAccount=defaultAccount;
var defaultPassword="django23";/*aws main account password*/
exports.defaultPassword=defaultPassword;
var stc;
exports.stc=stc;
var stcInstance;
exports.stcInstance=stcInstance;
var gas = 500000;
exports.gas=gas;
/*replace below abi with your abi*/
var abi = [ { "constant": true, "inputs": [ { "name": "adrs", "type": "address" } ], "name": "getDetails", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getDrivers", "outputs": [ { "name": "", "type": "address[]", "value": [] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "indices", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "carNo", "type": "string" }, { "name": "from", "type": "string" }, { "name": "to", "type": "string" }, { "name": "mobNo", "type": "string" }, { "name": "pswd", "type": "string" }, { "name": "accNo", "type": "address" } ], "name": "setDetails", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];



exports.abi = abi;

function initialize(contractAddress, account) {

	//console.log("contractAddress:", contractAddress, "account:", account);
	//set up the web3 provider, setup the default account and contcat address
	contractAddress = contractAddress;
	web3.eth.defaultAccount = account;
	defaultAccount = account;

}

exports.initialize=initialize;

function getContract(abi){

	//console.log("entered getContract:");
	//debugger;
	stc  = web3.eth.contract(abi);
	//console.log("exiting getContract:");
}

exports.getContract=getContract;

function getContractInstance(contractAddress)
{
	//console.log("entereed getContractInstance:", "contractAddress:",contractAddress);
	//debugger;	
	// get the contract instance 
	stcInstance = stc.at(contractAddress);
}

exports.getContractInstance=getContractInstance;

function setDetails(name, carNo, from, to, mobNo, pswd, accNo, fromAccount)
{
	unlockAccountp(defaultAccount, defaultPassword);
	var returnCode = stcInstance.setDetails(name, carNo, from, to, mobNo, pswd, accNo, {fromAccount:defaultAccount,gas:500000});
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

function getDrivers()
{
	unlockAccountp(defaultAccount, defaultPassword);
	var returnCode = stcInstance.getDrivers();
	return returnCode;
}

exports.getDrivers = getDrivers;
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