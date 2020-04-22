import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  tabs: PropTypes.array.isRequired,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: props.tabs,
    };
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  componentWillReceiveProps({ tabs }) {
    if (!_.isEqual(tabs, this.props.tabs)) {
      this.setState({ tabs });
    }
  }

  onChangeTab(e) {
    e.stopPropagation();
    const value = $(e.target).data('value');
    this.setState({ checkedValue: value });
  }

  render() {
    const { tabs, checkedValue } = this.state;
    const content = _.map(tabs, tab => (
      <span
        key={tab.value}
        data-value={tab.value}
        styleName={checkedValue === tab.value ? 'checked' : ''}
      >
        {tab.name}
      </span>
    ));

    return (
      <div
        styleName="tab"
        onClick={this.onChangeTab}
      >
        {content}
      </div>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;

