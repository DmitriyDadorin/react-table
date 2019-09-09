import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>, document.getElementById('root')
);

