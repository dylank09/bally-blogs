import React from 'react';
import { render, cleanup, screen, getByRole } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router';
import PostsList from './PostsList';
import BlogsApi from '../services/BlogsApi';
 
afterEach(cleanup);
const history = createMemoryHistory()


const renderPostsList = () => {
  return render(
    <Router history={history}>
      <PostsList blogApi={BlogsApi}/>
    </Router>
  );
};

it('should render correctly', () => {
  const { container } = renderPostsList();
  expect(container).toBeInTheDocument();
});

it('should have correct title', () => {
  renderPostsList();
  expect(screen.getByText("Posts")).toBeInTheDocument()
});

// //tests on posts

// it ("signs up a user and logs them in", () => {
  
// });

// it ("submits a post with title and body", () => {
//   const response = BlogsApi.sendPost("title", "body"); //doesnt work with CORS
// });

// it ("gets the post that was created there", () => {
  
// });

// it ("cannot make post if logged out", () => {
//   //log out user
//   const response = BlogsApi.sendPost("title", "body");
// });

// it ("posts are ordered by date", () => {
  
// });



// //useless tests
// //render tests (using snapshots)
// it ("renders app", () => {
//   const { asFragment } = render(<App/>);
//   expect(asFragment()).toMatchSnapshot();
// });

// it ("renders post list", () => {
//   const { asFragment } = render(
//                           <Router history={history}>
//                             <PostsList blogApi={BlogsApi}/>
//                           </Router>);
//   expect(asFragment()).toMatchSnapshot();
// });

// it ("renders post page", () => {
//   const { asFragment } = render(
//                           <Router history={history}>
//                             <PostPage blogApi={BlogsApi}/>
//                           </Router>);
//   expect(asFragment()).toMatchSnapshot();
// });