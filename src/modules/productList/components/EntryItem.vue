import { mapMutations, mapState } from 'vuex';
<template>
    <li @click="$router.push({ name: 'entry', params: { id: entry.id }})">
        {{entry.name}} {{entry.quantity}} ${{entry.price}}
    </li>

</template>

<script>
import { mapState, mapActions } from 'vuex'

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
        ...mapActions('productListModule', ['createEntry', 'updateEntry'])
    }
}
</script>

<style>

</style>