import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router';
import NewPost from './NewPost';
import BlogsApi from '../services/BlogsApi';
import PostsList from '../posts/PostsList';
 
afterEach(cleanup);

const history = createMemoryHistory()

const renderNewPost = () => {
  return render(
    <Router history={history}>
      <NewPost blogApi={BlogsApi}/>
    </Router>
  );
};

it('should render new post page', () => {
  renderNewPost();
  expect(screen.getByRole("heading")).toBeInTheDocument();
})

it('should give an error message when user leaves title blank.', () => {
   renderNewPost();
   fireEvent.click(screen.getByRole("button"), {name: "Submit"});
   expect(screen.getByText("Title must be present.")).toBeInTheDocument()
});

// it('should submit a post to the posts list', async ()  => {
//   renderNewPost();
//   const titleInput = screen.getByTestId("titleInput");
//   fireEvent.change(titleInput, { target: { value: 'Test post' } });
//   fireEvent.click(screen.getByRole("button"), {name: "Submit"});
//   renderPostsList();
//   await waitForElementToBeRemoved(() => screen.queryByText('LOADING...'));
//   await waitFor(() => expect(screen.getByText('Test post')).toBeInTheDocument())
// });






