import React, { Component } from "react";
import Axios, * as others from 'axios';
import styled from "styled-components";
import {DropdownButton, Dropdown} from "react-bootstrap";

//maincode
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
    onChange = e => {
     this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
        };
        console.log(newUser);
        Axios.post("/signup", newUser).then((res)=>{
            console.log(res)
            if(res.data.success){
                alert("added")
                this.setState({name:"", email:"", password:"", password2:"", username:""})
            }else{
                console.log(res.data.error)
                alert(res.data.error)
            }
        })
    };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
          <button className="btn-flat waves-effect"><a href="/">Back to Home</a></button>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <button className="btn-flat waves-effect"><a href="/login">Login</a></button>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                />
                <label htmlFor="name">Username</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  onClick={this.onSubmit}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;