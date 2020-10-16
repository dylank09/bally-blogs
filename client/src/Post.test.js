import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from './App';
import PostsList from './posts/PostsList';
import { Router } from 'react-router';
import PostPage from './posts/PostPage';
 
afterEach(cleanup);
const history = createMemoryHistory()

it ("renders app", () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});

it ("renders post list", () => {
  const { asFragment } = render(
                          <Router history={history}>
                            <PostsList/>
                          </Router>);
  expect(asFragment()).toMatchSnapshot();
});

it ("renders post page", () => {
  const { asFragment } = render(
                          <Router history={history}>
                            <PostPage/>
                          </Router>);
  expect(asFragment()).toMatchSnapshot();
});

it ("renders post component", () => {
  const { asFragment } = render(
                          <Router history={history}>
                            <PostPage/>
                          </Router>);
  expect(asFragment()).toMatchSnapshot();
});