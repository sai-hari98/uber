const readline = require('readline')

var Web3 = require('web3'); // https://www.npmjs.com/package/web3
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
exports.web3=web3;

/* Oil and Gas Contract */
var contractAddress='0xb350661A1cfd2B193E431dB653b576A6135ba447';/*replace with your contractAddress*/
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
var abi = [ { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "10000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokens", "type": "uint256" } ], "name": "addTokens", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];


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

function balanceOf(accNo)
{
    unlockAccountp(defaultAccount, defaultPassword);
    var returnCode = stcInstance.balanceOf(accNo, {fromAccount: defaultAccount});
    return returnCode;
}
exports.balanceOf = balanceOf;

function transferFrom(from, to, value)
{
    unlockAccountp(defaultAccount, defaultPassword);
    var returnCode = stcInstance.transferFrom(from, to, value, {fromAccount:defaultAccount, gas:500000});
    return returnCode;
}
exports.transferFrom = transferFrom;

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

