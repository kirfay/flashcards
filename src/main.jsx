import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: Adjust if you have a global stylesheet
import App from './App';  // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
