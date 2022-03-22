import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './contexts/user.context';
import { CategoriesPovider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

ReactDOM.render(
  <Router>
    <UserProvider>
      <CategoriesPovider>
        <CartProvider>
        <App />
        </CartProvider>
      </CategoriesPovider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);

