import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const defaultProps = {
  type: '',
};
const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      type: props.type,
    };
    this.originType = props.type || 'default';
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
  }

  componentWillReceiveProps({ text }) {
    if (text !== this.props.text) {
      this.setState({ text });
    }
  }

  handleChangeChecked() {
    let { type } = this.state;
    if (type === '') {
      type = this.originType;
    } else {
      type = '';
    }
    this.setState({ type });
  }

  render() {
    const { text, type } = this.state;

    return (
      <span
        styleName={`tag ${type}`}
        onClick={this.handleChangeChecked}
      >
        {text}
      </span>
    );
  }
}

Tag.defaultProps = defaultProps;
Tag.propTypes = propTypes;

export default Tag;
