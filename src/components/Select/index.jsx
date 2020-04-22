import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './styles.scss';

const defaultProps = {
  placeholder: '',
  multiple: false,
};
const propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
    this.originOpts = props.options;
  }

  componentWillReceiveProps({ options }) {
    if (!_.isEqual(options, this.props.options)) {
      this.setState({ options });
      this.originOpts = options;
    }
  }

  onChangeIpt(e) {
    const value = e.target.value;
    const options = _.filter(this.originOpts, o => o.name.indexOf(value) > -1);
    this.setState({ checkedValue: value, options });
  }

  onChangeSelect(e) {
    e.stopPropagation();
    const checkedValue = $(e.target).data('value');
    this.setState({ checkedValue });
    this.props.onChange(checkedValue);
  }

  render() {
    const { placeholder, multiple } = this.props;
    const { checkedValue, options, showSelect = false } = this.state;

    const content = _.map(options, option =>
      <li
        key={option.value}
        data-value={option.value}
        styleName={checkedValue === option.value ? 'checked' : ''}
      >
        {option.name}
      </li>,
    );

    return (
      <span
        styleName="select"
      >
        <span styleName="placeholder">{!checkedValue ? placeholder : ''}</span>
        <input
          styleName="selectipt"
          value={checkedValue}
          onChange={e => this.onChangeIpt(e)}
          onFocus={() => this.setState({ showSelect: true, options: this.originOpts })}
          onBlur={() => _.delay(() => this.setState({ showSelect: false }), 100)}
        />
        <Icon type="right" styleName={`arrow ${showSelect ? 'roate' : ''}`} />
        {!content.length && <div styleName="no-data"><Icon type="frown" />&nbsp;暂无数据</div>}
        {showSelect &&
        <ul
          styleName="selectcont"
          onClick={e => this.onChangeSelect(e)}
        >
          {content}
        </ul>}
      </span>
    );
  }
}

Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

export default Select;
