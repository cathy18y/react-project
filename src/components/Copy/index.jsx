import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Icon } from 'antd';
import './styles.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const copy = new Clipboard(`#${props.id}`);
    const that = this;
    copy.on('success', () => {
      that.setState({ copied: true });
      _.delay(() => {
        that.setState({ copied: false });
      }, 2000);
    }).on('error', () => {});
  }

  render() {
    const { id, text } = this.props;
    const { copied } = this.state;

    let popover = (<div styleName="popover">复制</div>);
    if (copied) {
      popover = (<div styleName="popover copied">已复制</div>);
    }

    return (
      <a
        id={id}
        data-clipboard-text={text}
        onClick={e => e.stopPropagation()}
        styleName="copy"
      >
        <Icon type="copy" />
        {popover}
      </a>
    );
  }
}

Copy.propTypes = propTypes;

export default Copy;
