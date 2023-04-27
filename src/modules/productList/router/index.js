export default {

    name: 'productList',
    component: () => import(/* webpackChunkName: "productList" */ '@/modules/productList/layouts/ProductListLayout.vue'),
    children: [
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "productList-entry" */ '@/modules/productList/views/EntryView.vue')
        }
    ]

}