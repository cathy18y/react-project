import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'testcom/Breadcrumb';
import Loading from 'testcom/Loading';
import './styles.scss';

const propTypes = {
  history: PropTypes.object.isRequired,
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breads = [{
      name: '首页',
      path: () => this.props.history.push('/home'),
    }, {
      name: '列表',
    }];
    return (
      <div styleName="content">
        <Breadcrumb
          breads={breads}
        />
        <Loading />
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
