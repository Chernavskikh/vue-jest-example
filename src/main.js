import Vue from 'vue'
import App from '~/App.vue'
import '~/registerServiceWorker'
import router from '~/router'
import store from '~/store'

import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
