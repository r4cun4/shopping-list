<template>
  <div class="d-flex flex-column px-3 h-75">
    <h1>Soy entry view</h1>
    <!-- <textarea v-model="entry.name"></textarea> -->
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  // data() {
  //   return {
  //     entry: null
  //   }
  // },

  computed: {
    ...mapGetters('productListModule', ['getEntriesById'])
  },

  methods: {
    loadEntry() {   
      const entry = this.getEntriesById( this.id )
      console.log( 'soy entry', entry )
    }
  },

  created() {
    this.loadEntry()
  }
}
</script>

<style>

</style>