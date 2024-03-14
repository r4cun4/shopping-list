import { mapMutations, mapState } from 'vuex';
<template>
    <li class="list-group-item"
        :class="{ active: isSelected }"
        @click="handleClick">
        {{entry.name}} ${{entry.price}} ({{entry.quantity}})
    </li>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        entry: {
            type: Object,
            required: true
        },
        isSelected: {
            type: Boolean,
            default: false
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
                quantity: '',
            }
        }
    },

    methods: {
        ...mapActions('productListModule', ['createEntry', 'updateEntry']),
        handleClick() {
            this.$router.push({ 
                name: 'entry', 
                params: { id: this.entry.id }
            });
            this.$emit('select', this.entry.id);
        }
    }
}
</script>

<style scoped>

li {
    color: #37DCC9;
    background-color: #1A1A1A;
    cursor: pointer;
}

li:hover {
    color: #fff;
    background-color: #0D6EFD;
}
</style>