import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { vantPlugins } from './plugins/vant';

import 'lib-flexible';

createApp(App).use(router).use(store).use(vantPlugins).mount('#app');
