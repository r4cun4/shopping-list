<template>
    <h1>Lista de Productos</h1>
    <div class="d-flex flex-column">
        <div class="d-flex px-3">
            <input
                type="text"
                v-model="newProduct"
                placeholder="Ingresa el producto"
            />
            <button
                @click="sum"
                class="btn btn-success mx-2"
            >
                <i class="fa fa-plus"></i>
            </button>
            <button
                @click="sub"
                class="btn btn-danger mx-2">
                <i class="fa fa-minus"></i>
            </button>
            <div>{{quantity}}</div>
        </div>
        <div class="d-flex mt-2">
            <input type="submit" value="add" @click="addToList">
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            products: [],
            newProduct: null,
            quantity: 0
        }
    },
    methods: {
        sum() {
            if ( this.quantity >= 0 ) {
                return this.quantity++
            }
        },
        sub() {
            if ( this.quantity > 0 ) {
                return this.quantity--
            }
        },
        addToList() {
            if ( this.newProduct != null && this.quantity > 0 ) {
                this.products.push(this.newProduct)
            } else {
                console.log('Olvidaste de agregar cantidad y nombre de producto')
            }
        }
    }
}
</script>

<style>

</style>