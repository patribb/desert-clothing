import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './contexts/user.context';
import { ProductsPovider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

ReactDOM.render(
  <Router>
    <UserProvider>
      <ProductsPovider>
        <CartProvider>
        <App />
        </CartProvider>
      </ProductsPovider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);

