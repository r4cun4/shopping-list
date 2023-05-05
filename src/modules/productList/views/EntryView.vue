<template>
  <template v-if="entry">
    <div class="d-flex">
      <input type ="text" v-model="entry.name"/>
      <div>
        <button class="btn btn-save mx-2" @click="saveEntry"><i class="fa fa-save alt"></i></button>
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
      entry: null,
    }
  },

  computed: {
    ...mapGetters('productListModule', ['getEntriesById']),
  },

  methods: {
    ...mapActions('productListModule', ['updateEntry']),
    loadEntry() {   
      const entry = this.getEntriesById( this.id ) 
      this.entry = entry
    },
    async saveEntry() {
      console.log('Guardando entrada')
      await this.updateEntry( this.entry )
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
.btn {
  width: 40px;
  border: 1px solid;
  border-radius: 50%;
}
</style>
