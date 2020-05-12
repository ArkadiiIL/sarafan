import Vue from 'vue';
import Vuetify from 'vuetify'
import '@babel/polyfill'
import 'api/resource'
import App from 'pages/App.vue';
import store from "./store/store.js";
import {connect} from "./util/ws.js";
import 'vuetify/dist/vuetify.min.css'


if (frontendData.profile) {
    connect();
}
Vue.use(Vuetify);


new Vue({
    vuetify : new Vuetify(),
    store,
    el: '#app',
    render: a => a(App)
});

