<template>
    <NavbarItem />

    <div v-if="isLoading"
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    
    <div v-else 
        class="d-flex">
        <div class="col-3">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
            <hr>
            <div class="total-list-wrapper">
                <TotalList />
            </div>
        </div>
    </div>

</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {

    components: {
        NavbarItem: defineAsyncComponent( () => import('../components/NavbarItem.vue')),
        EntryList: defineAsyncComponent( () => import('../components/EntryList.vue')),
        TotalList: defineAsyncComponent( () => import('../components/TotalList.vue')),
    },
    data() {
        return {
            isLoaded: false // Bandera para controlar si se ha cargado la lista de entradas
        }
    },
    methods: {
        ...mapActions('productListModule', ['loadEntries'])
    },
    computed: {
        ...mapState('productListModule', ['isLoading'])
    },
    created() {
        // Si la lista de entradas aún no se ha cargado, llame a la acción loadEntries
        if (!this.isLoaded) {
            this.loadEntries()
            this.isLoaded = true
        }
    },
    beforeRouteEnter(to, from, next) {
        // Verifique si el componente ya se ha creado y la lista de entradas se ha cargado
        if (from.name === null) {
            next(vm => {
                if (!vm.isLoaded) {
                    vm.loadEntries()
                    vm.isLoaded = true
                }
            })
        } else {
            next()
        }
    }
    
}
</script>

<style scoped>

.d-flex {
    position: relative;
    gap: 10px;
}

</style>