'use strict';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';

ReactDOM.render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);