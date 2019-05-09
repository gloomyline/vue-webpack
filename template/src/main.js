{{#if_eq deviceType "mobile"}}
import 'amfe-flexible'
{{/if_eq}}
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
{{#if_eq deviceType "mobile"}}
// import cube-ui modules on demand
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  Dialog,
  Locale,
} from 'cube-ui'

Vue.use(Style)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Locale)
{{/if_eq}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
