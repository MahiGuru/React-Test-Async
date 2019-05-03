import React, { Component } from 'react' 
import { fetchPosts } from '../actions/PostsListActions';
import {connect} from 'react-redux';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = { keycloak: null, authenticated: false, name:null, email: null, id: null };
    this.keycloak = null;
    this.logout = this.logout.bind(this);
  } 
  componentWillMount(){
    this.props.fetchPosts()
  } 
  componentWillReceiveProps(newProps) {
    if(newProps.newPost){
      this.props.posts.unshift(newProps.newPost);
    }
  } 
  logout(){
    console.log("LOGOUT CLICKED");
    this.keycloak.logout();
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