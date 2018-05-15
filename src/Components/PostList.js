import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PostList=(props)=>{
    return(
        <div className="displayPost">
          {/* <p>{ this.props.list.lemgth ? this.props.list : 'Loading...' } </p> */}
          {/* {this.props.list} */}
          <p>{props.list}</p>
        </div>
    )
}

export default PostList;