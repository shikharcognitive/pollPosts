import React from 'react';
import { render , fireEvent, waitFor, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import PageSizeCustomOptions from './components/infiniteScroll';
import { Provider } from 'react-redux';
import store from './store/store';

// Render App and Home page

test('Render App', () => {
  //verify if UI is ready or not
 const {getByText} = render(<BrowserRouter><App /> </BrowserRouter>);
 getByText('Navbar will be here');
});

test('render scroll page', () => {
render(<BrowserRouter><Provider store={store}><PageSizeCustomOptions></PageSizeCustomOptions></Provider></BrowserRouter>)
});
