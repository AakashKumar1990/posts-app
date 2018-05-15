import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Styling.css'

const Card=props=>{
    return(
        <div className='displayList '>
        <ul>
            <li className='displayPost'>
                {props.postTitle}
            </li>
        </ul>        
        </div>
    )
}

export default Card;