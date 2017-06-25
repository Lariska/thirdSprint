import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import * as VueGoogleMaps from 'vue2-google-maps';

// Vue.use(Element)
Vue.use(VueResource);
Vue.use(Element, { locale })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCc_X_TBp3vs4y4oWiEcRrHpwilGYJWNEY',
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input 
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
