import React from 'react';
import { withRouter } from 'react-router';
import Menus from 'testcom/Menus';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location: { pathname }, history } = this.props;

    return (
      <div>
        <Menus pathname={pathname} history={history} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default withRouter(App);
