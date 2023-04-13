import { mapMutations, mapState } from 'vuex';
<template>
    <form @submit.prevent="addItem">
        <input v-model="newItem" type="text" placeholder="Agregá un producto">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
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
            newItem: ''
        }
    },

    methods: {
        ...mapActions(['createEntry']),
        ...mapMutations('productListModule', ['increment', 'decrement', 'addEntry']),
        async saveEntry() {
            await this.createEntry( this.entry )
        }
    }
}
</script>

<style>

</style>