<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToProductList" class="btn btn-primary">Crea tu lista de compras!</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    goToProductList() {
      this.$router.push({ name: 'productList' })
    }
  }
}
</script>
