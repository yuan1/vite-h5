// 按需全局引入 vant组件
import { Button, Form, CellGroup, Field } from 'vant';

const plugins = [Button, Form, CellGroup, Field];

export const vantPlugins = {
  install: function (vm) {
    plugins.forEach((item) => {
      vm.component(item.name, item);
    });
  },
};
