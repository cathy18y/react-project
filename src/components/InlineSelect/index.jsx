import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './styles.scss';

const defaultProps = {
  multiple: false,
};

const propTypes = {
  selects: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
};

class InlineSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selects: props.selects,
      selected: [props.selects[0].value],
    };
    this.selected = [props.selects[0].value];
  }

  onChangeSelected(v) {
    const { multiple } = this.props;
    if (multiple) {
      if (_.includes(this.selected, v)) {
        this.selected = _.filter(this.selected, s => s !== v);
      } else {
        this.selected = _.concat(this.selected, [v]);
      }
    } else {
      this.selected = [v];
    }
    this.setState({ selected: this.selected });
  }

  render() {
    const { selects, selected } = this.state;

    const content = _.map(selects, s => (
      <Button
        onClick={() => this.onChangeSelected(s.value)}
        styleName={_.includes(selected, s.value) ? 'selected' : ''}
      >
        {s.name}
      </Button>
    ));

    return (
      <div styleName="inline-select">{content}</div>
    );
  }
}

InlineSelect.defaultProps = defaultProps;
InlineSelect.propTypes = propTypes;

export default InlineSelect;
