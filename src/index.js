import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyCHStzaFFWjo1O3aWV5CyeqrDV1Lj0qGYs",
  authDomain: "ecommerce-andres.firebaseapp.com",
  projectId: "ecommerce-andres",
  storageBucket: "ecommerce-andres.appspot.com",
  messagingSenderId: "443002081718",
  appId: "1:443002081718:web:b6095b18bb7d138d5ab117",
  measurementId: "G-0YGGMGJMS9"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
