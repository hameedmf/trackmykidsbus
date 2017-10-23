import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

console.log('STRIPE KEY ', process.env.REACT_APP_STRIPE_KEY);
console.log('ENVIRONMENT ', process.env.NODE_ENV);
