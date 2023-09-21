<template>
    <div class="entry-list-container">
        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-3"
            @click="$router.push({ name:'entry', params: { id:'new' } })">
                <i class="fa fa-plus-circle"></i>
                Agregar producto
            </button>
        </div>
    <div class="entry-scrollarea">
        <ul>
            <EntryItem
                v-for="entry in showListEntry"
                :key="entry.id"
                :entry="entry"
            />
        </ul>

        </div>
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
}
.entry-scrollarea {
    padding: 30px 10px;
}
</style>
