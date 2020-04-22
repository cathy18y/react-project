import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import './styles/themes.less';
import Root from './container/Root';

const history = require('history').createBrowserHistory();

const router = routerMiddleware(history);
const store = createStore(combineReducers({}), applyMiddleware(router));

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./container/Root', render);
}

