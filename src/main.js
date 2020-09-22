import Vue from 'vue'
import App from '~/App.vue'
import '~/registerServiceWorker'
import router from '~/router'
import store from '~/store'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import BootstrapVue from 'bootstrap-vue'
import InputValidated from '@/components/InputValidated'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install VeeValidate rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('input-validated', InputValidated)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
