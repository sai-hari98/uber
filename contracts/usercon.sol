pragma solidity^0.4.0;
contract UserRegister
{
    address[] usersAddresses;
    struct User
    {
       string _name;
       string _emailId;
       string _mobNo;
       address _accNo;
       string _pswd;
    }
    User[] users;
    mapping (address => uint) public indices;
    uint i = 0;
    
    function setDetails(string name,string emailId,string mobNo,address accNo,string pswd) public
    {
       users.push(User(name, emailId, mobNo, accNo, pswd));
       usersAddresses.push(accNo);
       indices[accNo] = i;
       i++;
    }
    
    function getDetails(address adrs) public constant returns(string, string, string, address, string)
    {
       return(users[indices[adrs]]._name, users[indices[adrs]]._emailId, users[indices[adrs]]._mobNo, users[indices[adrs]]._accNo, users[indices[adrs]]._pswd);
    }
    
    
    function getUsers() public constant returns(address[])
    {
        return usersAddresses;
    }
}