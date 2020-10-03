
var express = require('express');
// var routes = require('./routes');
var bodyParser = require('body-parser');
var studentMain = require("./studentMain.js");
var userMain = require("./userMain.js");
var tokenMain = require("./tokenMain");
var cookie = require("cookie-parser");
var app = module.exports = express();
var port = 9001;
var router=express.Router();
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookie());
app.use(bodyParser.urlencoded({
   limit: '50mb',
   extended: true
 }));
//
// app.get('*', function(req, res) {
//     res.sendFile(path.join(path.join(__dirname, 'build'), 'index.html'))
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/postform2', function(req, res, next){
 console.log(req.body.name, req.body.carNo,  req.body.from, req.body.to, req.body.mobNo, req.body.pswd);
 //let data = Main.registerStudent(req.body.email, req.body.password);
var i=0;
	var stuaddress = [];
    var passbcn=req.body.pswd;
    stuaddress[i]= studentMain.web3.personal.newAccount(req.body.pswd);
    var newstu= stuaddress[i];/*new student address*/
    i++;
    console.log('new driver registerd at address : ',newstu);
    
     var regstufrm = studentMain.defaultAccount;/*register student from defaultAccount*/
     var defaultPassword = studentMain.defaultPassword;
     
     studentMain.unlockAccountp(regstufrm,defaultPassword);/*unlock the account*/
     /*register the new student in blockchain from defaultAccount*/
     var id = studentMain.setDetails(req.body.name, req.body.carNo,  req.body.from, req.body.to, req.body.mobNo, req.body.pswd, newstu, studentMain.gas);
     // studentMain.setDetails(newstu,name,carNo,licNo,aadharNo,mobNo,pswd,regstufrm,defaultPassword,studentMain.gas);
     console.log(id);
     console.log('setDetails Contract Done!!!');
     res.send({
     	"code":200
     });
     next();
});



app.post('/postform', function(req, res,next){
    var i=0;
	var userAddress = [];
    var passbcn=req.body.pswd;
    userAddress[i]= userMain.web3.personal.newAccount(req.body.pswd);
    var newUser= userAddress[i];
    i++;
    console.log('new user registerd at address : ',newUser);
    console.log(req.body.name, req.body.emailId, req.body.mobNo, newUser, req.body.pswd);

     var regstufrm = userMain.defaultAccount;
     var defaultPassword = userMain.defaultPassword;
     
     userMain.unlockAccountp(regstufrm,defaultPassword);
     var id = userMain.setDetails(req.body.name, req.body.emailId, req.body.mobNo, newUser, req.body.pswd, userMain.gas);

     var returnValue = tokenMain.transferFrom(tokenMain.defaultAccount, newUser, 100);
     console.log(returnValue);
    console.log(tokenMain.balanceOf(newUser));
     console.log('setDetails Contract Done!!!');
     res.send({
     	"code":200
     });
     next();
    
})

app.post('/driverLoginForm', function(req, res){
    console.log("Hello");
    console.log(req.body.accNo, req.body.pswd);
    var driverAddresses = studentMain.getDrivers();
    console.log(driverAddresses);
    if(driverAddresses.indexOf(req.body.accNo.toLowerCase()) > -1)
    {
        var driverDetails = studentMain.getDetails(req.body.accNo);
        if(driverDetails[5] === req.body.pswd)
        {
            driverDetails = driverDetails.join("&");
            console.log(driverDetails);
            // res.cookie("driver",driverDetails);
            res.send({
                "code": 200,
                "cookie": driverDetails
            });
        }
        else
        {
            res.send({
                "code": 400
            });
        }
    }
    else
    {
        res.send({
            "code": 400
        })
    }
});

app.post('/userLoginForm', function(req, res){
    console.log("Hello");
    console.log(req.body.accNo, req.body.pswd);
    var userAddresses = userMain.getUsers();
    console.log(userAddresses);
    var flag = 0;
    for(var i = 0; i < userAddresses.length; i++)
    {
        if(userAddresses[i] === req.body.accNo)
        {
            flag = 1;
            break;
        }
    }
    console.log(flag + " : flag");
    if(flag)
    {
        var userDetails = userMain.getDetails(req.body.accNo);
        console.log(userDetails);
        if(userDetails[4] === req.body.pswd)
        {
            userDetails = userDetails.join("&");
            console.log(userDetails);
            // res.cookie("user",req.body.accNo + "&" + userDetails);
            res.send({
                "code": 200,
                "cookie": req.body.accNo + "&" + userDetails
            });
        }
        else
        {
            res.send({
                "code": 400
            });
        }
    }
    else
    {
        res.send({
            "code": 400
        })
    }
});

// app.get('/api',routes.users);

app.listen(port,()=>{
    console.log("signup Server started on port " + port);
});

app.post('/postform4', function(req, res){
        var from = req.body.from;
        var to = req.body.to;
        var wantedDriverAddresses = [];
        var driverAddresses = studentMain.getDrivers();
        console.log(driverAddresses, typeof driverAddresses);
        for(var i = 0;i < driverAddresses.length; i++)
        {
            var driverDetails = studentMain.getDetails(driverAddresses[i]);
            console.log(driverAddresses[i], driverDetails[2],driverDetails[3]);
            if(from === driverDetails[2] && to === driverDetails[3])
            {
                wantedDriverAddresses.push(driverAddresses[i]);
            }
        }
        wantedDriverAddresses = wantedDriverAddresses.join("&");
        console.log(wantedDriverAddresses);
        if(wantedDriverAddresses.length>0)
        {
            res.send({
                "code": 200,
                "wantedDrivers": wantedDriverAddresses
            });
        }
        else{
            res.send({
                "code": 400
            })
        }
})

app.post('/transfer', function(req, res){
    console.log(req.body.from, req.body.to);
    var returnValue = tokenMain.transferFrom(req.body.from, req.body.to, 1);
    console.log(returnValue);
    res.send({
        "code": 200
    })
})

	console.log("Initializing the Smart Contracts","\n");
    
    studentMain.initialize(studentMain.contractAddress, studentMain.defaultAccount);
    console.log("Completed Contract Initialization","\n","\n");
    console.log("Setting up the Contract ABI","\n");
    
    studentMain.getContract(studentMain.abi);
    console.log("Completed setting up contract ABI","\n","\n");
    console.log("Setting up the Smart Contract Instance","\n");
    
    studentMain.getContractInstance(studentMain.contractAddress);
    console.log("Completed Getting an Instance of the Smart Contract","\n","\n");


    userMain.initialize(userMain.contractAddress, userMain.defaultAccount);
    console.log("Completed Contract Initialization","\n","\n");
    console.log("Setting up the Contract ABI","\n");
    
    userMain.getContract(userMain.abi);
    console.log("Completed setting up contract ABI","\n","\n");
    console.log("Setting up the Smart Contract Instance","\n");
    
    userMain.getContractInstance(userMain.contractAddress);
    console.log("Completed Getting an Instance of the Smart Contract","\n","\n");



    tokenMain.initialize(tokenMain.contractAddress, tokenMain.defaultAccount);
    console.log("Completed Contract Initialization","\n","\n");
    console.log("Setting up the Contract ABI","\n");
    
    tokenMain.getContract(tokenMain.abi);
    console.log("Completed setting up contract ABI","\n","\n");
    console.log("Setting up the Smart Contract Instance","\n");
    
    tokenMain.getContractInstance(tokenMain.contractAddress);
    console.log("Completed Getting an Instance of the Smart Contract","\n","\n");
	
	
	
	