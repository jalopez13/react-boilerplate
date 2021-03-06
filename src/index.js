import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './containers/App';

// Accessibility runtime checker
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById('root'));
