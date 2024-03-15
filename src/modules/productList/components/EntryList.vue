<template>
    <div class="entry-list-container">
        <div class="mt-2 d-flex flex-column">
            <div class="d-flex">
                <button class="btn btn-primary mx-3"
                @click="$router.push({ name:'entry', params: { id:'new' } })">
                    <i class="fa fa-plus-circle"></i>
                    Agregar
                </button>
            </div>
        </div>
        <div class="entry-scrollarea">
            <ul class="list-group">
                <EntryItem
                    v-for="entry in showListEntry"
                    :key="entry.id"
                    :entry="entry"
                    :isSelected="entry.id === selectedEntryId"
                    @select="selectEntry"
                />
            </ul>
        </div>
        <button :disabled="isListEmpty" class="btn btn-primary mx-3"
            @click="onDeleteAllEntries">
                <i class="fa fa-trash"></i>
                Vaciar lista
        </button>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        EntryItem: defineAsyncComponent(() =>
            import('./EntryItem.vue')
        ),
    },
    computed: {
        ...mapGetters('productListModule', ['showListEntry']),
        isListEmpty() {
            return this.showListEntry.length === 0;
        }
    },
    data() {
        return {
            selectedEntryId: null,
        }
    },
    methods: {
        ...mapActions("productListModule", [
            "deleteAllEntries"
        ]),
        selectEntry(entryId) {
            this.selectedEntryId = entryId;
        },
        async onDeleteAllEntries() {
            await this.deleteAllEntries();
        },
    }
}
</script>
