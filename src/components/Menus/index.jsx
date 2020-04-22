import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { menus, isActive } from './menu';
import './styles.scss';

const propTypes = {
  pathname: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: props.pathname,
    };
  }

  componentWillReceiveProps({ pathname }) {
    if (pathname !== this.props.pathname) {
      this.setState({ pathname });
    }
  }

  jump(path) {
    this.props.history.push(path);
  }

  render() {
    const { pathname } = this.state;

    const content = _.map(menus, m => (
      <Menu.Item
        styleName={isActive(pathname, m.pathname) ? 'active' : ''}
        onClick={() => this.jump(m.path)}
      >
        {m.name}
      </Menu.Item>
    ));

    return (
      <Menu>{content}</Menu>
    );
  }
}

Menus.propTypes = propTypes;

export default Menus;

