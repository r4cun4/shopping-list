export default {

    name: 'product-list',
    component: () => import(/* webpackChunkName: "productList" */ '@/modules/productList/layouts/ProductListLayout.vue'),


}