import { createApp } from 'vue';
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
import App from './App.vue';

const defaultoptions = {treeName:'blocks-tree'};

createApp(App)
  .use(VueBlocksTree, defaultoptions)
  .mount('#app');
