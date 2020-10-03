pragma solidity^0.4.0;
contract DriverRegister
{
    address[] driversAddresses;
    struct Driver
    {
       string _name;
       string _carNo;
       string _from;
       string _to;
       string _mobNo;
       string _pswd;
       address _accNo;
    }
    Driver[] drivers;
    mapping (address => uint) public indices;
    uint i = 0;
    
    function setDetails(string name, string carNo, string from, string to, string mobNo, string pswd,address accNo) public
    {
       drivers.push(Driver(name, carNo, from, to, mobNo, pswd,accNo));
       driversAddresses.push(accNo);
       indices[accNo] = i;
       i++;
    }
    
    function getDetails(address adrs) public constant returns(string,string,string,string,string,string)
    {
       return(drivers[indices[adrs]]._name, drivers[indices[adrs]]._carNo, drivers[indices[adrs]]._from, drivers[indices[adrs]]._to, drivers[indices[adrs]]._mobNo, drivers[indices[adrs]]._pswd);
    }
    
    
    function getDrivers() public constant returns(address[])
    {
        return driversAddresses;
    }
}