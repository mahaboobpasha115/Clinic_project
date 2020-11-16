import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styling from "./signup.module.css";
const initialState = {
    userName: "",
    email: "",
    password: "",
    userNameError: "",
    emailError: "",
    passwordError: ""
}
class  Signup extends Component {
    state = {
        initialState
      };
      handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        });
      };    

    componentDidMount() {
        if(!localStorage.getItem("signup_info")) {
            localStorage.setItem("signup_info", JSON.stringify({ data: [] }));
        }
    }

    validate = () => {

        let userNameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.userName) {
            userNameError = "Name cannot be empty";
          }
        if (!this.state.email.includes("@")) {
            emailError = "Invalid email";
          }
        if (!this.state.password) {
            passwordError = "Please enter valid password";
          }  

          if (
            userNameError ||
            emailError ||
            passwordError
            ) {
                this.setState({
                    userNameError,
                    emailError,
                    passwordError
                });
                return false;
            }
            return true;
    }

    handleBack = () => {
      this.props.history.push("/admin");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let existingData = localStorage.getItem("signup_info");
            existingData = JSON.parse(existingData);
            existingData.data.push({
                ...this.state,
                ...{ id: existingData.data.lenght + 1},
            });
            localStorage.setItem(
                "signup_info", JSON.stringify(existingData)
            )
          console.log(this.state);
          toast.success("Signed Up Succesfully", {
            autoClose: 3000,
          });
        
          this.setState(initialState);
        }
      };

    render() {
    return (
        <div className={styling.container}>
        <h1>Sign-up</h1>
            <form onSubmit={this.handleSubmit}>
                <label className={styling.name}>
                <input 
                type="text" 
                placeholder="Name" 
                name="userName" value={this.state.userName}
                onChange={this.handleChange}/>
                </label>
                <div className={styling.errorname}>
                  {this.state.userNameError}
                  </div>
                
                <label className={styling.email}>
                <input  
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}/>
</label>
                <div className={styling.erroremail}>{this.state.emailError}</div>
                
                <label className={styling.password}>
                <input type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}/>
                </label>
                <div className={styling.errorpass}>{this.state.passwordError}</div>
            <button type="submit" className={styling.sign} >Sign Up</button>
             <ToastContainer/>
            </form>
        </div>
    )
}
}
export default Signup;
