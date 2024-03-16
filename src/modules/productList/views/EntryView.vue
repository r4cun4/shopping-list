<template>
  <template v-if="entry">
    <div class="d-flex form-wrapper">
      <div class="input-wrapper">
        <input
          type="text"
          v-model="entry.name"
          placeholder="Nombre*"
          @input="validateName"
          :class="{ invalid: !isNameValid }"
        />
        <label :class="{ invalid: !isNameValid }">{{ nameLabel }}</label>
      </div>
      <div class="input-wrapper">
        <input
          type="number"
          v-model="entry.price"
          placeholder="Precio*"
          @input="validatePrice"
          :class="{ invalid: !isPriceValid }"
        />
        <label :class="{ invalid: !isPriceValid }">{{ priceLabel }}</label>
      </div>
      <div class="input-wrapper">
        <input
          type="number"
          v-model="entry.quantity"
          placeholder="Cantidad*"
          @input="validateQuantity"
          :class="{ invalid: !isQuantityValid }"
        />
        <label :class="{ invalid: !isQuantityValid }">{{
          quantityLabel
        }}</label>
      </div>

      <div class="buttons-wrapper">
        <button class="btn btn-save mx-2" @click="saveEntry">
          <i class="fa fa-save alt"></i>
          Guardar
        </button>
        <button
          v-if="entry.id"
          class="btn btn-trash mx-2"
          @click="onDeleteEntry"
        >
          <i class="fa fa-trash alt"></i>
          Eliminar
        </button>
      </div>
    </div>
  </template>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      entry: null,
      isNameValid: true,
      isPriceValid: true,
      isQuantityValid: true,
    };
  },

  computed: {
    ...mapGetters("productListModule", ["getEntriesById"]),
    nameLabel() {
      return this.isNameValid ? "Ingresá el producto" : "Nombre incorrecto";
    },
    priceLabel() {
      return this.isPriceValid ? "Ingresá el precio" : "Precio incorrecto";
    },
    quantityLabel() {
      return this.isQuantityValid
        ? "Ingresá la cantidad"
        : "Cantidad incorrecta";
    },
    isInvalid() {
      return !this.isNameValid || !this.isPriceValid || !this.isQuantityValid;
    },
  },

  methods: {
    ...mapActions("productListModule", [
      "updateEntry",
      "createEntry",
      "deleteEntry",
    ]),
    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          name: "",
        };
      } else {
        entry = this.getEntriesById(this.id);
      }

      this.entry = entry;
    },
    async saveEntry() {
      this.validateName();
      this.validatePrice();
      this.validateQuantity();
      
      if (this.isInvalid) {
        return;
      }

      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        await this.createEntry(this.entry);
      }
    },
    async onDeleteEntry() {
      await this.deleteEntry(this.entry.id);
    },
    validateName() {
      this.isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*(\s\d+[a-zA-Z]*)?$/.test(
        this.entry.name
      );
    },
    validatePrice() {
      if (this.entry.price <= 0 || isNaN(this.entry.price)) {
        this.isPriceValid = false;
      } else {
        this.isPriceValid = true;
        this.entry.price = Number(this.entry.price.toFixed(2));
      }
    },
    validateQuantity() {
      if (this.entry.quantity <= 0 || isNaN(this.entry.quantity)) {
        this.isQuantityValid = false;
      } else {
        this.isQuantityValid = true;
      }
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>

.form-wrapper {
  gap: 7px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  border-radius: 25px;
  background-color: #252529;
  &:hover {
    border: 1px solid #37E2D5 !important;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input {
  color: #979FAD;
  background-color: #1A1A1A;
  padding: 10px;
  border: none;
  border-radius: 0 10px 0 0;
  height: 100%;
  transition: transform 1s;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input:focus-visible {
  outline: #1A1A1A;
}

input:focus {
  border-bottom: 2px solid #37E2D5;
  transform: scale(1.2);
}

input::placeholder {
  color: #ccc;
}

input::placeholder * {
  color: #c94d59;
}

input.invalid {
  background: #c94d59;
}

label {
  margin: 10px;
  padding-top: 2px;
}

label.invalid {
  color: #c94d59;
}

.buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  background-color: #590696;
  color: #37e2d5;
  border: 1px none;
  border-radius: 10px;
  transition: transfortm 5s ease-in-out;
}

.btn:active {
  transform: scale(1.5);
}

</style>
