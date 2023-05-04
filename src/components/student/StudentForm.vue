<template>
  <div @submit.prevent>
    <input v-model="client.name" :class="(v$.client.name.$error) ? 'invalid':''"
           type="text"
           placeholder="имя">
    <input v-model="client.surname" type="text" placeholder="фамилия"
           :class="(v$.client.surname.$error) ? 'invalid':''">
    <input v-model="client.patronymic" type="text" placeholder="что-то">
    <input v-model="client.dateOfBirth" type="date" placeholder="дата рождения">
    <button class="btn" id="btnDrop" v-on:click="save">сохранить</button>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import {required, minLength} from '@vuelidate/validators'

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  name: 'form-client',
  props: {
    filter: {}
  },
  data() {
    return {
      client: {
        name: '',
        surname: '',
        patronymic: '',
        dateOfBirth: '',
      }
    }
  },
  validations: {
    client: {
      name: {required, minLength: minLength(3)},
      surname: {required, minLength: minLength(3)}
    },
  },
  methods: {
    save() {
      const btn = document.getElementById("btnDrop")
      btn.onclick = function () {
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
          this.classList.remove("disabled")
        }, 1000);
      }
      this.v$.$touch();
      if (this.v$.$errors.length > 0) {
        return
      }
      this.v$.$reset()
      this.$emit("create", {client: this.client})
      this.client= ""


    },

  }
}
</script>
