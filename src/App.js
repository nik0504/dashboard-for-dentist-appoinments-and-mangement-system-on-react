import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/sidebar';
import Dashboard from './components/dashboard'
import Sidebar from './components/sidebar'
import DashProfile from './components/dashprofile';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <Router>
      <div className='main'>
        <Sidebar />

        <Switch>
          <Route path="/overview" >Hey</Route>
          <Route path="/calender" >H</Route>
          <Route path="/patient-list" component={Dashboard}></Route>
          <Route path="/message" >Hey you</Route>
          <Route path="/payment" >100</Route>
          <Route path="/settings" >tool</Route>
        </Switch>


        {/* <Dashboard /> */}
      </div>
    </Router>
  );
}

export default App;
