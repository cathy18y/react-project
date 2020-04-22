import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './styles.scss';

const propTypes = {
  prev: PropTypes.bool.isRequired,
  more: PropTypes.bool.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: props.prev,
      more: props.more,
    };
  }

  componentWillReceiveProps({ prev, more }) {
    if (prev !== this.props.prev) {
      this.setState({ prev });
    }
    if (more !== this.props.more) {
      this.setState({ more });
    }
  }

  render() {
    const { prev, more } = this.state;

    return (
      <div styleName="page">
        <Icon
          type="left-circle"
          theme="filled"
          styleName={prev ? 'allow' : 'no-allow'}
          onClick={this.props.onPrev}
        />
        <Icon
          type="right-circle"
          theme="filled"
          styleName={more ? 'allow' : 'no-allow'}
          onClick={this.props.onNext}
        />
      </div>
    );
  }
}

Page.propTypes = propTypes;

export default Page;
