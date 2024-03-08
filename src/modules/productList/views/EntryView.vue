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
        </button>
        <button
          v-if="entry.id"
          class="btn btn-trash mx-2"
          @click="onDeleteEntry"
        >
          <i class="fa fa-trash alt"></i>
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
      if (this.isInvalid) {
        this.validateName();
        this.validatePrice();
        this.validateQuantity();
        return;
      }

      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        await this.createEntry(this.entry);
      }
    },
    async onDeleteEntry() {
      console.log("delete", this.entry);
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

<style scoped>

.form-wrapper {
  gap: 7px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input {
  height: 100%;
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

label.invalid {
  color: #c94d59;
}

.buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  width: 40px;
  background-color: #590696;
  color: #37e2d5;
  width: 40px;
  border: 1px none;
  border-radius: 50%;
  transition: transfortm 5s ease-in-out;
}

.btn:active {
  transform: scale(3);
}
</style>
