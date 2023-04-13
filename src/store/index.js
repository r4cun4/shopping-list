import { createStore } from 'vuex'

import productListModule from '@/modules/productList/store/productList'

const store = createStore({
    modules: {
        productListModule
    }
})

export default store