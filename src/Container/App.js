import React, { Component } from 'react'
import './App.css';
import Form from "../Component/Form.js"
import Data from "../Component/Data.js"



export default class App extends Component {
  
    constructor(){
        super()
       this.state={
            firstname:"",
            lastname:"",
            email:"",
            phonenumber:"",
            visibility: false,
            message:" ",
            gender:" " ,
            favcar:" " ,
            javascript:false,
            Express:false,
            Nodejs:false,
            showResults:false
            
             }


        //  this.toggleVisibility = this.toggleVisibility.bind(this)
        //  this.onSubmit = this.onSubmit.bind(this)
         this.onChangehandle = this.onChangehandle.bind(this)
         this.onClickhandle= this.onClickhandle.bind(this)
          
    }
    onClickhandle=(e)=>{   
     e.preventDefault()
 this.setState((currentState) => ({showResults: !currentState.showResults}));
 this.setState({showResults:true});

//   if (firstname.value == "")                                  
// { 
//     window.alert("Please enter your name."); 
//     firstname.focus(); 
//     return false; 
// } 
// if (lastname.value == "")                                  
// { 
//     window.alert("Please enter your lastname."); 
//     lastname.focus(); 
//     return false; 
// } 
// if (email.value == "")                               
// { 
//     window.alert("Please enter your email."); 
//    email.focus(); 
//     return false; 
// } 
   
// if (phonenumber.value == "")                                   
// { 
//     window.alert("Please enter a valid Phonenumber."); 
//     phonenumber.focus(); 
//     return false; 
// } 

  }

    onChangehandle=(event)=>{
         const {name, value, type, checked}= event.target
         type === "checkbox" ? this.setState({[name]:checked}):this.setState({[name]:value})
        // this.setState({[e.target.name]:e.target.value})
      }

 

  render() {
    return (
      <div className="App">
        <h1> Form Registration</h1>
        <Form 
        // showResults={this.state.showResults}
        onchange={this.onChangehandle}
       
        firstname={this.state.firstname} 
        lastname={this.state.lastname} 
        email={this.state.email} 
        phonenumber={this.state.phonenumber} 
        visibility={this.state.visibility} 
        gender={this.state.gender} 
        Nodejs={this.state.Nodejs}  
        javascript={this.state.javascript}
        Express={this.state.Express} 
        onClickhandle={this.onClickhandle} />
        <br />


{this.state.showResults? <Data  message={this.state.message}
        lastname={this.state.lastname} 
        firstname={this.state.firstname} 
        email={this.state.email} 
        phonenumber={this.state.phonenumber}
        gender={this.state.gender}  
        favcar={this.state.favcar}
        Nodejs={this.state.Nodejs}  
        javascript={this.state.javascript}
        Express={this.state.Express} 
        visibility={this.state.visibility} />
        : null
    }

      </div>
    )
  }
}


