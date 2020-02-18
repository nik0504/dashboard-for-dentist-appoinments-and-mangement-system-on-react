import React from 'react';
import './dashboard.css';
import Panel1 from './panel1';
import Panel2 from './panel2';

export default class DashProfile extends React.Component {
    render() {
        return (
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