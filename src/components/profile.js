import React from 'react';
import './dashboard.css';
import logo from './new1.png'
export default class Profile extends React.Component {
    render() {
        return (
            <div className='profile'>
                {/* <p>Profile</p> */}
                <div className='p1'>
                    <div className='pro'>
                    <img src={logo} alt="Logo" className='pic'/>
                    <h2 style={{marginLeft:'60px',marginTop:'0'}}>Daine Cooper</h2>
                    <p style={{marginLeft:'60px',marginTop:'0px',fontSize:'12px'}}>dianeCooper@example.com</p>
                    {/* <h2 style={{marginLeft:'50px',marginTop:'0%',display:'inline',borderRight:'1px solid'}}>15</h2>
                    <h2 style={{display:'inline',marginLeft:'100px'}}>2</h2> */}
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                        {/* <span>15</span><br/> */}
                        <div>
                        <h2 style={{display:'inline'}}>15</h2><br/>
                        <span style={{fontSize:'12px'}}>Post</span>
                        </div>
                        <div>
                            <center>
                        <h2 style={{display:'inline'}}>2</h2><br/></center>
                        <span style={{fontSize:'12px'}}>Upcoming</span>
                        </div>
                        
                    </div>
                    <button style={{backgroundColor:'white',width:'90%',marginLeft:'5%',height:'40px'}}>Send Message</button>
                    </div>
                </div>
                <div className='p2'>
                    <div className='s1'>
                        <div className='element'>
                            <label>Gender</label>
                            <input value=' Female' readOnly />
                        </div>
                        <div className='element'>
                            <label>Birthday</label>
                            <input value=' Feb 24th 1997' readOnly />
                        </div>
                        <div className='element'>
                            <label>Phone Number</label>
                            <input value=' 123456789' readOnly />
                        </div>
                    </div>
                    {/* <hr></hr> */}
                    {/* <hr style={{ borderTop: '1px solid black' }}></hr> */}
                    <div className='s1'>
                    <div className='element'>
                            <label>Street Address</label>
                            <input value=' #123' readOnly />
                        </div>
                        <div className='element'>
                            <label>City</label>
                            <input value=' New Delhi' readOnly />
                        </div>
                        <div className='element'>
                            <label>ZIP Code</label>
                            <input value=' 123456' readOnly />
                        </div>
                    </div>
                    <div className='s2'>
                    <div className='element'>
                            <label>Member Status</label>
                            <input value=' Active Member' readOnly />
                        </div>
                        <div className='element'>
                            <label>Registered Date</label>
                            <input value=' Feb 24th 1997' readOnly />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}