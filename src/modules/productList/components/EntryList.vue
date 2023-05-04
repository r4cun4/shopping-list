<template>
   <div class="entry-scrollarea">
    <ul>
        <EntryItem
            v-for="entry in showListEntry"
            :key="entry.id"
            :entry="entry"
        />
    </ul>

    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';

import { mapGetters } from 'vuex';

export default {
    components: {
        EntryItem: defineAsyncComponent(() => import('./EntryItem.vue'))
    },
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
