import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const defaultProps = {
  placeholder: '',
};
const propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeIpt = this.onChangeIpt.bind(this);
  }

  onChangeIpt(e) {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <span styleName="input">
        <span styleName="placeholder">{!value ? placeholder : ''}</span>
        <input
          value={value}
          styleName="input-cont"
          onChange={this.onChangeIpt}
        />
      </span>
    );
  }
}

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
