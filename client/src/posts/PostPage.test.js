import React from 'react';
import { render, cleanup, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router';
import PostPage from './PostPage';
import BlogsApi from '../services/BlogsApi';
 
afterEach(cleanup);

const history = createMemoryHistory()

const renderPostPage = () => {
  return render(
    <Router history={history}>
      <PostPage blogApi={BlogsApi}/>
    </Router>
  );
};

//causes CORS
it('should render LOADING first', async () => {
  renderPostPage();
  expect(screen.queryByText('LOADING...')).toBeInTheDocument();
})



