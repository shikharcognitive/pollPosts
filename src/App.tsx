import React, {useEffect, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequest } from './store/posts/actions';
import { RootState } from './store/root-reducer';

function App() {

  const dispatch = useDispatch();

  const { error, pending, posts } = useSelector( (state:RootState) => state.posts)

  useEffect( () => {
    dispatch(fetchPostRequest());
    // if(posts.length > 0) {
    //   console.log('here received the posts : ', posts);
    // }
  }, [])
  return (
    <div className="App">
      <h1> Navbar will be here </h1>
      {posts &&
        posts.map( (post:any) => {
          return <h5>{post.story_title}</h5>
        })
      }
    </div>
  );
}

export default App;
