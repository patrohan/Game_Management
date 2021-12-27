import React, { Component } from "react";
import Axios, * as others from 'axios';

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    Axios.post("/login", userData).then((res)=>{
        console.log(res)
        if(res.data.success){
            console.log("Signed in successfully")
            this.setState({email:"", password:""})
            window.location.href = 'http://localhost:4000/homepage'
        }else{
            console.log(res.error)

        }
    })
    
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
          <button className="btn-flat waves-effect"><a href="/">Back to Home</a></button>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Admin Login</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
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
                  Login
                </button>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1">
                Don't have an account? <button className="btn-flat waves-effect"><a href="/register">Register</a></button>
              </p>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1">
                User? Login here <button className="btn-flat waves-effect"><a href="/login">User Login</a></button>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminLogin;