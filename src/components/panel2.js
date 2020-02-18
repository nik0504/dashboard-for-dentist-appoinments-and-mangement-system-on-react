import React from 'react';
import './dashboard.css';
import Notes from './notes';
import Files from './files';
export default class Panel2 extends React.Component {
    render(){
        return(
            <aside className='panel2'>
                {/* <p>notes</p> */}
                <Notes/>
                <Files/>
                </aside>
            
        );
    }
}