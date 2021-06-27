import Vue from 'vue'
import Index from '@/Index'
import {VueMaskDirective} from 'v-mask'
import VueRouter from 'vue-router'
import router from '@/router/index'
import Vuelidate from 'vuelidate'
import './assets/common.css';
import "normalize.css"

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective);
Vue.use(VueRouter);


new Vue({
    render: h => h(Index),
    router
}).$mount('#app')
