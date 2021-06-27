import VueRouter from "vue-router";
import ClientAddress from '@/page-2/СlientAddress'
import ClientCreation from '@/page-1/ClientCreation'
import ClientDocument from "@/page-3/ClientDocument";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: ClientCreation
        },

        {
            path: '/address',
            name: 'address',
            component: ClientAddress
        },

        {
            path: '/document',
            name: 'document',
            component: ClientDocument
        }
    ]
})