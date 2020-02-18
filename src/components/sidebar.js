import React from 'react';
import "./sidebar.css";
import Dashboard from './dashboard';
import DashProfile from './dashprofile';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Sidebar extends React.Component {
    state = {
        patient: false,
    }

    render() {
        return (
            // <Router>
            <div className='sidebar'>
                {/* <h1>hello</h1> */}
                <h1 className='zen'>Zendenta</h1>
                <hr style={{ borderTop: '1px solid lightgrey' }}></hr>
                <Link to="/overview" ><b>Overview</b></Link>
                <Link to="/calender" ><b>Calender</b></Link>
                <Link to="/patient-list" ><b>Patient List</b></Link>
                <Link to="/message" ><b>Message</b></Link>
                <Link to="/payment" ><b>Payment Information</b></Link>
                <Link to="/settings"><b>Settings</b></Link>
                {/* {this.state.patient ?
                    <Dashboard ss='true' /> : null
                } */}
                
            </div>
            // </Router>
        );
    }
}