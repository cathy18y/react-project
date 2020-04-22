import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './styles.scss';

const defaultProps = {
  placeholder: '',
};
const propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e) {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() {
    const { placeholder } = this.props;

    return (
      <span styleName="search">
        <input
          styleName="search-input"
          placeholder={placeholder}
          onChange={this.onChangeSearch}
        />
        <Icon type="search" />
      </span>
    );
  }
}

Search.defaultProps = defaultProps;
Search.propTypes = propTypes;

export default Search;
