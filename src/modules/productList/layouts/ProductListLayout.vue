<template>
    <NavbarItem />
    
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <EntryItem />
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {

    components: {
        NavbarItem: defineAsyncComponent( () => import('../components/NavbarItem.vue')),
        EntryList: defineAsyncComponent( () => import('../components/EntryList.vue')),
        EntryItem: defineAsyncComponent( () => import('../components/EntryItem.vue'))
    }
    
}
</script>