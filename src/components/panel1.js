import React from 'react';
import './dashboard.css';
import Profile from './profile';
import Appoinments from './appoinments';
export default class Panel1 extends React.Component {
    render(){
        return(
            <div className='panel1'>
                {/* <p>Profile</p> */}
                <Profile/>
                <Appoinments/>
            </div>
        );
    }
}