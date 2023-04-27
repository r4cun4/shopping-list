import { mapMutations, mapState } from 'vuex';
<template>
    <form @submit.prevent="addItem">
        <input v-model="product.name" type="text" placeholder="Agregá un producto">
        <input v-model="product.price" type="text" placeholder="Agregá el precio">
        <input v-model="product.quantity" type="text" placeholder="Agregá las unidades">
        <!-- <button @click="increment">+</button>
        <button @click="decrement">-</button> -->
        <button @click="saveEntry">Agregar</button>
    </form>
    
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['productListModule']),
    },

    data() {
        return {
            product: {
                name: '',
                price: '',
                quuantity: '',
            }
        }
    },

    methods: {
        ...mapActions('productListModule', ['createEntry', 'updateEntry']),
        ...mapMutations('productListModule', ['increment', 'decrement', 'addEntry']),
        async saveEntry() {
            this.createEntry(this.product)
            // this.updateEntry( this.product )
        }
    }
}
</script>

<style>

</style>