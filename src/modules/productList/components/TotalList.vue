<template>
  <h1> Subtotal : ${{ showPriceByEntry }}</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
      ...mapGetters('productListModule', ['showPriceByEntry']),
    },
    methods: {
      showSubtotal() {
        this.showPriceByEntry()
      },
    }
}
</script>

<style>

</style>