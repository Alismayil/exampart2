import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import WishlistProvider from './context/wishlistContext.jsx';
import BasketProvider from './context/basketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
