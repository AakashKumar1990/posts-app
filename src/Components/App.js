import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import PostList from '../Components/PostList'

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    
   
    return (
      <div>
        <Header title='Posts-List' />
       <PostList />
      </div>
    );
  }
}

export default App;
