import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from './Routes';

const propTypes = {
  history: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired,
};

const Root = (props) => {
  const { history, store } = props;
  return (
    <Provider store={store} key="provider">
     <Routes history={history} store={store} />
    </Provider>
  );
};

Root.propTypes = propTypes;

export default Root;

