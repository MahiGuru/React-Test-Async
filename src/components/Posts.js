import React, { Component } from 'react' 
import { fetchPosts } from '../actions/PostsListActions';
import {connect} from 'react-redux'; 

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  } 
  componentWillReceiveProps(newProps) {
    if(newProps.newPost){
      this.props.posts.unshift(newProps.newPost);
    }
  }

  render() {
    const postData = this.props.posts.map((post) =>  (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      )
    )
    return (
      <div>
        <h1> POSTS</h1>
        {postData}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts); 