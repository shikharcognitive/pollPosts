import React from 'react';
import { render , fireEvent, waitFor, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import PageSizeCustomOptions from './components/infiniteScroll';
import { Provider } from 'react-redux';
import store from './store/store';
import StoryDetails from './components/storyDetails';
import axios from 'axios';
jest.mock('axios', () => jest.fn());

// Render App and Home page

test('Render App', () => {
  //verify if UI is ready or not
 const {getByText} = render(<BrowserRouter><App /> </BrowserRouter>);
 getByText('Navbar will be here');
});

test('render scroll page', async() => {
  const setupRes:any = {
    exhaustiveNbHits: Boolean,
exhaustiveTypo: Boolean,
hits: Array,
hitsPerPage: Number,
nbHits: Number,
nbPages: Number,
page: Number,
params: String,
processingTimeMS: Number,
query: String
  }
  const {getByLabelText, getByText, getByTestId } = render(<BrowserRouter><Provider store={store}><PageSizeCustomOptions></PageSizeCustomOptions></Provider></BrowserRouter>);
  getByTestId('tableBox');
  (axios as unknown as jest.Mock).mockResolvedValueOnce(setupRes);
  // jest.fn().mockImplementationOnce(() => Promise.resolve());
  jest.mock('axios', () => jest.fn(() => Promise.resolve()));

});

// test('render Story Details page', () => {
//   render(<BrowserRouter><Provider store={store}><StoryDetails storyId='53636'></StoryDetails></Provider></BrowserRouter>)
//   });
