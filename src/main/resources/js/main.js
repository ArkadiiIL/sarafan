import Vue from 'vue';
import Vuetify from 'vuetify'
import '@babel/polyfill'
import 'api/resource'
import router from "./router/router.js";
import App from 'pages/App.vue';
import store from "./store/store.js";
import {connect} from "./util/ws.js";
import 'vuetify/dist/vuetify.min.css'
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';

Sentry.init({
    dsn: 'https://a4526570ccc24091b8be7fbfb08e4f3b@o397686.ingest.sentry.io/5252416',
    integrations: [new VueIntegration({Vue, attachProps: true})],
});

Sentry.configureScope(scope =>
    scope.setUser(
        {
            id: profile && profile.id,
            username: profile && profile.name
        }
    ));


if (profile) {
    connect();
}
Vue.use(Vuetify);


new Vue({
    vuetify : new Vuetify(),
    store,
    router,
    el: '#app',
    render: a => a(App)
});

