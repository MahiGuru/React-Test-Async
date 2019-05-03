import React, { Component } from 'react' 
import { fetchPosts } from '../actions/PostsListActions';
import {connect} from 'react-redux'; 
import Keycloak from 'keycloak-js';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }
  componentWillMount(){
    this.props.fetchPosts()
  } 
  componentWillReceiveProps(newProps) {
    if(newProps.newPost){
      this.props.posts.unshift(newProps.newPost);
    }
  }
  componentDidMount() {
    const keycloak = Keycloak('../keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }
  render() {
    const postData = this.props.posts.map((post) =>  (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      )
    )

    if(this.state.keycloak){
      if(this.state.authenticated) {
        return (
          <div>
              <div>This is keycloak served component </div>
              <h1> POSTS</h1>
              {postData}
          </div>
        )
      }else{
        return (<div> Unable to authenticate</div>)
      }
    }

    return (
      <div> Initializing keycloak</div>
    )
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts); 