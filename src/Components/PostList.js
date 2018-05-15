import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
class PostList extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
          }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          this.setState({posts:response.data})
        })
        const postslist= this.state.posts.map((post,i)=>{
            return <li key={i}>{post.title} </li>
          })
      }

      render(){
        
          return(
              <div>{this.postslist}</div>
          )
      }
}
export default PostList;