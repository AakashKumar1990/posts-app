import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Header from './Header';
import PostList from '../Components/PostList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts:[]
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      this.setState({posts:response.data})
      const postslist= this.state.posts.map((post,i)=>{
        return <PostList key={i} list={post.title} />
      })

    })
  }
  render() {
    
   
    return (
      <div>
        <Header title='Posts-List' />
        {this.postlist}
      </div>
    );
  }
}

export default App;
