import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import PageSizeCustomOptions from './components/infiniteScroll';
import store from './store/store';

const App : React.FC<any> = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <h1> Navbar will be here </h1>
      <PageSizeCustomOptions/>
    </div>
    </Provider>
  );
}

export default App;
