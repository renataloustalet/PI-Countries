import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.jsx';
import { BrowserRouter } from 'react-router-dom'
import './fonts/Signika-Bold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

