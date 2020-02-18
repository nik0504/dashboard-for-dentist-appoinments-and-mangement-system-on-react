import React from 'react';
import './dashboard.css';
import TreatLog from './treatlog';
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
export default function Appoinments() {
    let { path,url} = useRouteMatch();
    return (
        <div className='appoinments'>
            {/* <p>appoinments</p> */}
            <div className='bt'>
                <Link to={`${url}/upcoming`}>Upcoming Appoinments</Link>
                <Link to={`${url}/post`}>Post Appoinments</Link>
                <Link to={`${url}/medical`}>Medical Record</Link>
            </div>
            {/* <div className='treat'>
                    <div>
                        <p>Root Canal Treatment</p>
                    </div>
                    <TreatLog />
                </div> */}
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a button.</h3>
                </Route>
                <Route path={`${path}/upcoming`}>
                    <div className='treat'>
                        <div>
                            <p>Root Canal Treatment</p>
                        </div>
                        <TreatLog />
                    </div>
                </Route>
                <Route path={`${path}/post`}>
                    Previous Record
                </Route>
                <Route path={`${path}/medical`}>
                    Paracetamol
                </Route>
            </Switch>
        </div>
    );
}
