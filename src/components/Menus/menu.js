import _ from 'lodash';

export const menus = [
  {
    name: '首页',
    path: '/home',
    pathname: 'home',
  }, {
    name: '推荐',
    path: '/advices',
    pathname: 'advices',
  }, {
    name: '分类',
    path: '/classify',
    pathname: 'classify',
  },
];

export const isActive = (fullPath, pathname) => {
  const path = _.split(fullPath, '/');
  if (_.includes(path, pathname)) {
    return true;
  }
  return false;
};
