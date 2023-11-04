import React, { useState } from 'react';
//now added:
import Web3 from 'web3';
//
import ReactDOM from 'react-dom';
import App from './app';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MacBookAir1 from './views/mac-book-air1'
import MacBookAir2 from './views/mac-book-air2'
import MacBookAir11 from './views/mac-book-air11'
import NotFound from './views/not-found'

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    // Request user's accounts access if necessary
    window.ethereum.request({ method: 'eth_requestAccounts' });
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

export default web3;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the link to public/index.html
);