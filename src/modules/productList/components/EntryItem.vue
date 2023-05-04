import { mapMutations, mapState } from 'vuex';
<template>
    <li @click="$router.push({ name: 'entry', params: { id: entry.id }})">
        {{entry.name}} {{entry.quantity}} ${{entry.price}}
    </li>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    // la prop entry la recibo desde EntryList
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
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