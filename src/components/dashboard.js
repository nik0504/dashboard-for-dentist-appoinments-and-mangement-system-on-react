import React from 'react';
import './dashboard.css';
import Panel1 from './panel1';
import Panel2 from './panel2';
import DashProfile from './dashprofile';

export default class Dashboard extends React.Component {
    render() {
        // console.log(this.props.ss);
        return (
            // <div className='dashboard1'>
            // {this.props.ss?"dehbbdwbh":null}
            // edkldw
            // </div>
            <div className='dashboard'>
                <div className='name'>
                    <h1>Diane Cooper</h1>
                    <hr style={{ borderTop: '1px solid lightgrey' }}></hr>
                </div>
                <div className='flow'>
                    <p><b>Patient List > Diane Cooper</b></p>
                    <hr style={{ borderTop: '1px solid lightgrey' }}></hr>
                </div>
                <div className='flex'>
                    <Panel1 />
                    <Panel2 />
                </div>
            </div>
        );
    }
}