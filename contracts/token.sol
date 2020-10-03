pragma solidity ^ 0.4.0;

contract ERC20Token
{
    uint _totalSupply;
    mapping (address => uint) balances;
    address admin = 0x5DEAA1a5E4694F84dAD0502810d84Bc50e382bd4;
    modifier checkAdmin()
    {
        require(msg.sender == admin);
        _;
    }
   function ERC20Token() public 
    {
        balances[msg.sender] = 10000000000;
        _totalSupply = 10000000000;
    }

    function totalSupply() public constant returns (uint)
    {
        return _totalSupply;
    }

    function addTokens(uint tokens) public checkAdmin
    {
        balances[msg.sender] += tokens;
        _totalSupply += tokens;
    }

    function balanceOf(address _owner) public constant returns (uint256 balance)
    {
        return balances[_owner];
    }

    function transferFrom(address _from,address _to, uint256 _value) public returns (bool success)
    {
        if(balances[_from] >= _value && _value > 0)
        {
            balances[_from] -= _value;
            balances[_to] += _value;
            //balances[_to] += _value;
            return true;
        }
        return false;
    }
}