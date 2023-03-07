import { defineAsyncComponent } from 'vue';
<template>
   <div class="entry-scrollarea">
        <h1
        v-for="item in 100"
        :key="item"
        >entry</h1>
    </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue'

export default {
    components: {
        // EntryItem: defineAsyncComponent( () => import('../components/EntryItem.vue'))
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