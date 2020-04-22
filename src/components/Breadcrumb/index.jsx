import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  breads: PropTypes.array.isRequired,
};

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breads: props.breads,
    };
  }

  componentWillReceiveProps({ breads }) {
    if (!_.isEqual(breads, this.props.breads)) {
      this.setState({ breads });
    }
  }

  render() {
    const { breads } = this.state;

    const content = _.map(breads, (b, index) => {
      if (index === (breads.length - 1)) {
        return (
          <span>{b.name}</span>
        );
      }
      return (<a onClick={b.path}>{b.name} / </a>);
    });

    return (
      <div>
        {content}
      </div>
    );
  }
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
