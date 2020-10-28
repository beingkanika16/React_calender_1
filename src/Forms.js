import React from "react";
import "./styles.css";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      age: "",
      mail:"",
      pass: "",
      sub: "",
      pas:"",
      maill:""
    
    };
  }

  me = (event) => {
    this.setState({
      msg: event.target.value
    });
  };
  ag = (event) => {
    this.setState({
      age: event.target.value
    });
  };
  mal= (event) => {
    this.setState({
      mail: event.target.value
    });
  };
  pswrd = (event) => {
    this.setState({
      pass: event.target.value
    });
  };
  pswrd1 = (event) => {
    this.setState({
      pas: event.target.value
    });
  };

  handelSubmit= (event) => {
    event.preventDefault();
    alert(`${this.state.msg} ${this.state.age} ${this.state.mail} ${this.state.pas} ${this.state.pass}`)
    
     
   
      if(  this.state.msg.length<= 5){
  this.setState({
    sub: "**please enter nameupto maximun 8 digit "
  })
  
      }
      if (this.state.mail=="") {
        this.setState({      
              maill:"**please enter your mail"
        })
      }
      
    
       if (this.state.age<18 ||this.state.age==="") {
         this.setState({
age:"**please enter valid age i.e above 18"
         })
       } 
        
      
      if (this.state.pas !== this.state.pass) {
        this.setState({
          pas: "both values are different",
          pass: "both values are different"
        });
      }
     
    };
  
    render() {
    return (
      <>
        <form className="bg" onSubmit={this.handelSubmit}>
          <label className="lb">Name</label>
          <input
            className="inp"
            type="text"
            value={this.state.msg}
            onChange={this.me}
          />
          <h6 className="name">{this.state.sub}</h6>
          <label className="lb">Age</label>
          <input
            className="inp"
            type="number"
            value={this.state.age}
            onChange={this.ag}
          />
          <h6 className="nam">{this.state.age}</h6>
          <label className="lb">Email</label>
          <input
            className="inp"
            type="email"
            value={this.state.mail}
            onChange={this.mal}
          />
          <h6 className="nam">{this.state.maill}</h6>
          
          <label className="lb">Password</label>
          <input
            className="inp"
            type="password"
            value={this.state.pass}
            onChange={this.pswrd}
          />
          <h6 className="na">{this.state.pass}</h6>
          <label className="lb">Confirm-Password</label>
          <input
            className="inp"
            type="password"
            value={this.state.pas}
            onChange={this.pswrd1}
          />
          <h6 className="na">{this.state.pas}</h6>
          <button
            className="btn "
           
            onClick={this.click}
          >Submit</button>
        </form>
      </>
    );
  }
}
export default Forms;
