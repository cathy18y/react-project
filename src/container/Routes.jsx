import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App/index';
import Home from './Home/index';
import List from './List/index';

const routes = (
  <Router>
    <Switch>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={List} />
        </Switch>
      </App>
    </Switch>
  </Router>
);

const propTypes = {
  history: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired,
};

const Routes = (props) => {
  const { history, store } = props;
  return (
    <div>
      {routes}
    </div>
  );
};

Routes.propTypes = propTypes;

export default Routes;

