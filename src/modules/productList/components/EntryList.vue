<template>
   <div class="entry-scrollarea">
        <h3
          v-for="item in showListEntry"
          :key="item.id">
          {{item.name}}
          {{item.quantity}}
          ${{item.price}}
        </h3>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('productListModule', ['showListEntry']),
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc( 100vh - 56px );
}
.entry-scrollarea {
    height: calc( 100vh - 120px );
    overflow: scroll;
}
</style>
