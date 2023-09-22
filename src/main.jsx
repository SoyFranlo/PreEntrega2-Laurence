import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx';
import './index.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcrinr2qxqyILXQ4ZzSotyzcVpXwDKH0E",
  authDomain: "react-proyecto-cc8d1.firebaseapp.com",
  projectId: "react-proyecto-cc8d1",
  storageBucket: "react-proyecto-cc8d1.appspot.com",
  messagingSenderId: "298998112785",
  appId: "1:298998112785:web:c8d54339119c3ccabb07b0"
};

// Firebase initialization
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
