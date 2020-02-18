import React from 'react';
import './dashboard.css';
export default class Files extends React.Component {
    render() {
        return (
            <div className='files'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p><b>Files/Documents</b></p>
                    <p style={{ alignContent: 'right' }}>Add Files</p>
                </div>
                <div className='doc'>
                    <div className='f'>
                        <a href='#'>Check Up Result.pdf</a>
                        <h6 >123kb</h6>
                    </div>
                    <div className='f'><a href='#'>Check Up Result.pdf</a>
                    <h6 >123kb</h6>
                    </div>
                    <div className='f'><a href='#'>Check Up Result.pdf</a><h6 >123kb</h6></div>
                    <div className='f'><a href='#'>Check Up Result.pdf</a><h6 >123kb</h6></div>
                </div>
            </div>
        );
    }
}