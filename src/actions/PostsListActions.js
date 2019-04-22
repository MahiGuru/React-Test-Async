import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
    console.log("dispatched");
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
          type: FETCH_POSTS,
          payload: data
      }));
    
}

export const newPosts = (postData) => dispatch => {
    console.log("NEW CALLED");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(data => dispatch({
          type: NEW_POST,
          payload: data
      }));
    
}
