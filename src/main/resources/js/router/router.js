import Vue from 'vue'
import VueRouter from 'vue-router'
import MessagesList from "../pages/MessageList.vue";
import Profile from "../pages/Profile.vue";
import Auth from "../pages/Auth.vue";
import Subscriptions from "../pages/Subscriptions.vue";

Vue.use(VueRouter);

const routes = [
    { path:'/', component: MessagesList },
    { path:'/user/:id?', component: Profile },
    { path: '/auth', component: Auth },
    { path: '/subscriptions/:id', component: Subscriptions },
    { path:'*', component: MessagesList }


];

export default new VueRouter({
    mode: 'history',
    routes
});