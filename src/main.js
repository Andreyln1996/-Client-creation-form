import Vue from 'vue'
import Index from './Index.vue'
import './assets/common.css';
import "normalize.css"
import {VueMaskDirective} from 'v-mask'

Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective);


new Vue({
    render: h => h(Index),
}).$mount('#app')