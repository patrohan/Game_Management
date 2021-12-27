import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Match from "./components/layout/Match"
import Test from "./components/layout/test"
import Test1 from "./components/layout/test1"
import AdminLogin from "./components/auth/AdminLogin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/match" element={<Match />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;