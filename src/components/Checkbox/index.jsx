import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './styles.scss';

const defaultProps = {
  checked: false,
};
const propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
    this.onChangeChecked = this.onChangeChecked.bind(this);
  }

  componentWillReceiveProps({ checked }) {
    if (checked !== this.props.checked) {
      this.setState({ checked });
    }
  }

  onChangeChecked() {
    const { checked } = this.state;
    this.setState({ checked: !checked });
    this.props.onChange(!checked);
  }

  render() {
    const { checked } = this.state;

    return (
      <span
        styleName={`checkbox ${checked ? 'checked' : ''}`}
        onClick={this.onChangeChecked}
      >
        {checked && <Icon type="check" />}
      </span>
    );
  }
}

Checkbox.defaultProps = defaultProps;
Checkbox.propTypes = propTypes;

export default Checkbox;
