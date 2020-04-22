import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from 'testcom/Page';
import Loading from 'testcom/Loading';
import Breadcrumb from 'testcom/Breadcrumb';
import Copy from 'testcom/Copy';
import InlineSelect from 'testcom/InlineSelect';
import Radio from 'testcom/Radio';
import Checkbox from 'testcom/Checkbox';
import Search from 'testcom/Search';
import Tag from 'testcom/Tag';
import Select from 'testcom/Select';
import Input from 'testcom/Input';
import Tabs from 'testcom/Tabs';
import { breads, selects, options, tabs } from './util';
import './styles.scss';

const propTypes = {
  history: PropTypes.object.isRequired,
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioGroup: [],
    };
    this.onChangePrev = this.onChangePrev.bind(this);
    this.onChangeNext = this.onChangeNext.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onChangeChecked = this.onChangeChecked.bind(this);
  }

  onChangePrev() {
  }

  onChangeNext() {
  }

  onChangeRadio(checked, value) {
    let { radioGroup } = this.state;
    radioGroup = [];
    if (checked) {
      radioGroup = [value];
    }
    this.setState({ radioGroup });
  }

  onChangeChecked() {
  }

  onChangeSelect() {
  }

  onChangeIpt() {
  }

  render() {
    const { radioGroup, prev = 0, more = false } = this.state;

    return (
      <div styleName="content">
        <Breadcrumb breads={breads(this)} />
        <InlineSelect
          selects={selects}
          multiple
        />
        <Loading />
        <Copy id="test" text="test001" />
        <Page
          prev={prev > 0}
          more={more}
          onPrev={this.onChangePrev}
          onNext={this.onChangeNext}
        />
        <Radio
          checked={_.includes(radioGroup, 'test001')}
          onChange={c => this.onChangeRadio(c, 'test001')}
        />
        <Radio
          checked={_.includes(radioGroup, 'test002')}
          onChange={c => this.onChangeRadio(c, 'test002')}
        />
        <Checkbox
          onChange={this.onChangeChecked}
        />
        <div styleName="margin">
          <Search />
        </div>
        <Tag text="test" />
        <span styleName="margin-left">
          <Select
            options={options}
            placeholder="选择"
            onChange={v => this.onChangeSelect(v)}
          />
        </span>
        <span styleName="margin-left">
          <Input
            placeholder="输入..."
            onChange={v => this.onChangeIpt(v)}
          />
        </span>
        <div styleName="margin">
          <Tabs tabs={tabs} />
        </div>
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
