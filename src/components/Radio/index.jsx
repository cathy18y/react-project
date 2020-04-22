import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const defaultProps = {
  disabled: false,
};
const propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      disabled: props.disabled,
    };
    this.onChangeChecked = this.onChangeChecked.bind(this);
  }

  componentWillReceiveProps({ checked, disabled }) {
    if (checked !== this.props.checked) {
      this.setState({ checked });
    }
    if (disabled !== this.props.disabled) {
      this.setState({ disabled });
    }
  }

  onChangeChecked() {
    const { checked } = this.state;
    this.props.onChange(!checked);
  }

  render() {
    const { checked, disabled } = this.state;

    return (
      <span
        styleName={`radio ${checked ? 'radio-checked' : ''} ${disabled ? 'radio-disabled' : ''}`}
        onClick={!disabled ? this.onChangeChecked : null}
      >
        {(checked || disabled) && <span styleName={`checked ${disabled ? 'disabled' : ''}`} />}
      </span>
    );
  }
}

Radio.defaultProps = defaultProps;
Radio.propTypes = propTypes;

export default Radio;
