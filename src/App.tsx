import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageSizeCustomOptions from './components/infiniteScroll';
import StoryDetails from './components/storyDetails';
import store from './store/store';

const App : React.FC<any> = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <h1> Navbar will be here </h1>
      <Routes>
      <Route path='/' element={<PageSizeCustomOptions/>}/>
      <Route path='/story-details/:author' element={<StoryDetails/>}/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
