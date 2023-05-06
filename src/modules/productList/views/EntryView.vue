<template>
  <template v-if="entry">
    <div class="d-flex form-wrapper">
      <div class="input-wrapper">
        <label>Nombre</label>
        <input type ="text" v-model="entry.name" placeholder="Ingresá un producto"/>
      </div>
      <div class="input-wrapper">
        <label>Precio</label>
        <input type ="number" v-model="entry.price" placeholder="0"/>
      </div>
      <div class="input-wrapper">
        <label>Unidades</label>
        <input type ="number" v-model="entry.quantity" placeholder="0"/>
      </div>

      <div class="buttons-wrapper">
        <button class="btn btn-save mx-2" @click="saveEntry"><i class="fa fa-save alt"></i></button>
        <button
          v-if="entry.id"
          class="btn btn-trash mx-2"
          @click="onDeleteEntry"><i class="fa fa-trash alt"></i></button>
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
    ...mapActions('productListModule', ['updateEntry', 'createEntry', 'deleteEntry']),
    loadEntry() {

      let entry;

      if(this.id === 'new') {
        entry = {
          text: ''
        }
      } else {

        entry = this.getEntriesById( this.id ) 

      }

      this.entry = entry
    },
    async saveEntry() {
      
      if (this.entry.id) {
        await this.updateEntry( this.entry )
      } else {
        await this.createEntry( this.entry )
      }

    },
    async onDeleteEntry() {
      console.log('delete', this.entry)
      await this.deleteEntry( this.entry.id )
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

/* el form wrapper es el que hay que ponerle un media querie */

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input {
  height: 100%;
}

.buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  width: 40px;
  border: 1px solid;
  border-radius: 50%;
}
</style>
