import VueRouter from "vue-router";
import ClientCreation from '@/page-1/ClientCreation';
import ClientAddress from '@/page-2/СlientAddress';
import ClientDocument from "@/page-3/ClientDocument";
import ClientCreated from "@/page-4/ClientCreated";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: ClientCreation,
            name: 'creation',

        },

        {
            path: '/address',
            name: 'address',
            component: ClientAddress,

        },

        {
            path: '/document',
            name: 'document',
            component: ClientDocument
        },

        {
            path: '/message',
            name: 'message',
            component: ClientCreated
        }
    ]


})