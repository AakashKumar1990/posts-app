import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Styling.css';

const Header=(props)=>{
    return(
        <div className='Posts-Header-container'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;