<template>
  <template v-if="entry">
    <div class="d-flex">
      <textarea disabled rows="1" v-model="entry"></textarea>
      <div>
        <button class="btn btn-edit mx-2" @click="updateEntry" ><i class="fa fa-edit alt"></i></button>
        <button class="btn btn-save mx-2" @click="saveEntry" ><i class="fa fa-save alt"></i></button>
      </div>
  </div>
  </template>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      entry: null
    }
  },

  computed: {
    ...mapGetters('productListModule', ['getEntriesById']),
  },

  methods: {
    ...mapActions('productListModule', ['updateEntry']),
    loadEntry() {   
      const entry = this.getEntriesById( this.id )
      console.log( 'soy entry', entry.name )  
      
      this.entry = entry.name
    },
    updateEntry() {
      const updateEntry = this.updateEntry()
      console.log('SOY EDIT', updateEntry)
    }
  },

  created() {
    this.loadEntry()
  },

  watch: {
    id() {
      this.loadEntry()
    }
  }
}
</script>

<style scoped>
.d-flex {
  justify-content: space-between;
}
.btn {
  width: 40px;
  border: 1px solid;
  border-radius: 50%;
}
</style>
