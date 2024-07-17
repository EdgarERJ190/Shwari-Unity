import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure you're importing BrowserRouter correctly
import './index.css'; // Import your global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// Report Web Vitals for performance monitoring
reportWebVitals();
