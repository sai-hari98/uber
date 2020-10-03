import React, { Component } from 'react';

class DriverRegistration extends Component {
  constructor(props){
        super(props);
        this.state={
            list:[],
            isLoaded:false,
            errorOnLoad:false
        };
    
        this.onRegister=this.onRegister.bind(this);
      
    }
    // componentWillMount(){
    //   this.getlist()
    // }
    onRegister(e){
        //build form body
        // e.preventDefault();
        this.setState({
            isLoaded: true,
            err: {},
            errorOnLoad: false,
        });
        var formBody = [];

        formBody.push("name=" + encodeURIComponent(this.refs.name.value));
        formBody.push("carNo=" + encodeURIComponent(this.refs.carNo.value));
        formBody.push("licNo=" + encodeURIComponent(this.refs.licNo.value));
        formBody.push("aadharNo=" + encodeURIComponent(this.refs.aadharNo.value));
        formBody.push("mobNo=" + encodeURIComponent(this.refs.mobNo.value));
        formBody.push("pswd=" + encodeURIComponent(this.refs.pswd.value));
        // formBody.push("accNo=" + encodeURIComponent(this.refs.accNo.value));
        
           
        formBody = formBody.join("&");

        //do fetch call
        fetch('/api/register',{
            method:'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        .then((data) => {
            return(formBody.json());
          })
        .then((status)=>
        {
            console.log(JSON.stringify(status));
            if(status.code==200){
               
                alert("Registration Successfull")
                
                     
            }
            else if(status.code===406){
                alert("Email Already Registered");
            }
            else
            {
              alert(status);
              console.log(status);
            }
        })
        .catch((err)=>{
            console.log(err);
            alert("Error to register : "+err);
        })

    }
/*string name,
string carNo,
string licNo,
string aadharNo,
string mobNo,
string pswd,
address accNo*/
  render() {
    return (
     <div className="container">
        <form className="form-horizontal" role="form">
          <h2>Driver Registration</h2>
          <div className="form-group">
            <label htmlFor="name" className="col-sm-3 control-label">Name</label>
            <div className="col-sm-9">
              <input type="text" id="name" ref="name" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="carNo" className="col-sm-3 control-label">Car No.</label>
            <div className="col-sm-9">
              <input type="text" id="carNo" ref="carNo" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="licNo" className="col-sm-3 control-label">License No.</label>
            <div className="col-sm-9">
              <input type="text" id="licNo" ref="licNo" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="aadharNo" className="col-sm-3 control-label">Aadhar No.</label>
            <div className="col-sm-9">
              <input type="text" id="aadharNo" ref="aadharNo" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobNo" className="col-sm-3 control-label">Mobile No.</label>
            <div className="col-sm-9">
              <input type="text" id="mobNo" ref="mobNo" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pswd" className="col-sm-3 control-label">Password</label>
            <div className="col-sm-9">
              <input type="text" id="pswd" ref="pswd" className="form-control" autofocus />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rpswd" className="col-sm-3 control-label">Re-type Password</label>
            <div className="col-sm-9">
              <input type="text" id="rpswd" ref="rpswd" className="form-control" autofocus />
            </div>
          </div>
          
          <div className="form-group">
           <div className="col-sm-9 col-sm-offset-3">
             <button type="submit" onClick={this.onRegister} className="btn btn-primary btn-block">Register</button>
           </div>
          </div>

        </form> {/* /form */}
      </div> 
       );
  }
}

export default DriverRegistration;
