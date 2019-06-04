import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/styles/icon.css'
import '@/assets/styles/global.scss'


Vue.config.productionTip = false;
Vue.prototype.$axios=axios;

const bus=new Vue();
Vue.prototype.bus=bus;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
