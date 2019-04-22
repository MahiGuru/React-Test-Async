import React, { Component } from 'react';
import { newPosts } from '../actions/PostsListActions';
import {connect} from 'react-redux'; 

class PostForm extends Component {
  static propTypes = { 
    
  }
  constructor(props){
      super(props);
      this.state = {
          title : "",
          body : ''
      }
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
  }
  onChangeInput(e){ 
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitClick(e){ 
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.newPosts(post);
  }

  render() {
    return (
      <div>
        <div className="row">
            <label></label>
            <input type="text" name="title" value={this.state.title} onChange={this.onChangeInput} />
        </div>
        <div className="row">
            <label></label>
            <input type="text" name="body" value={this.state.body}  onChange={this.onChangeInput} />
        </div>
        <div className="row">
            <button onClick={this.onSubmitClick}>SUBMIT </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  post: state.posts.item
})

export default connect(mapStateToProps, {newPosts})(PostForm);