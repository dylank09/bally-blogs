import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router';
import Home from './Home';
 
afterEach(cleanup);
const history = createMemoryHistory()


const renderHome = (loggedIn) => {
  return render(
    <Router history={history}>      
        <Home handleLogout={null} loggedInStatus={loggedIn}/>
    </Router>   
              
  );
};

it('should render correctly', () => {
  const { container } = renderHome();
  expect(container).toBeInTheDocument();
});

it('should have correct title', () => {
  renderHome();
  expect(screen.getByText("Bally Blogs")).toBeInTheDocument()
});

it('should have log in displayed as the user is logged out', () => {
    renderHome(false);
    expect(screen.getByText("Log In")).toBeInTheDocument()
});

it('should have sign up displayed as no user is logged in', () => {
    renderHome(false);
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
});
