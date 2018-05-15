import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';


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
      }
      render(){
        const postslist= this.state.posts.map((post,i)=>{
            return <Card key={i} postTitle={post.title}> </Card>
          })
          return(
              <div>
              <ul>{postslist}</ul></div>
          )
      }
}
export default PostList;