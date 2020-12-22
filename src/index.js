import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/jiayi'>
      <Switch>
        <App />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


