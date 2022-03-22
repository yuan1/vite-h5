// 按需全局引入 vant组件
import { Button } from 'vant';

const plugins = [Button];

export const vantPlugins = {
  install: function (vm) {
    plugins.forEach((item) => {
      vm.component(item.name, item);
    });
  },
};
