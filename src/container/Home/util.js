export const breads = (that) => [{
  name: '首页',
  path: () => that.props.history.push('/home'),
}, {
  name: '列表',
  path: () => that.props.history.push('/list'),
}, {
  name: '详情',
}];

export const selects = [{
  name: 'test001',
  value: '001',
}, {
  name: 'test002',
  value: '002',
}, {
  name: 'test003',
  value: '003',
}];

export const options = [
  { name: 'test001', value: 'test1' },
  { name: 'test002', value: 'test2' },
  { name: 'test003', value: 'test3' },
];

export const tabs = [
  { name: 'test001', value: 'test1' },
  { name: 'test002', value: 'test2' },
  { name: 'test003', value: 'test3' },
];
