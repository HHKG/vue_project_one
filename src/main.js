// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index.js';
import 'element-ui/lib/theme-chalk/index.css';
// import {quillEditor} from 'vue-quill-editor';
// // 必须引入下面三个css;
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
import Echarts from 'echarts';
Vue.prototype.echarts=Echarts;

Vue.use(Echarts);

// 使用element
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
