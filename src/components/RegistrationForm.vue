<template>
  <h2>Регистрация</h2>
  <form class="reg_form" method="post" @submit.prevent>
    <input v-model="user.username" :class="(v$.user.username.$error) ? 'invalid':''" type="text" placeholder="login" />
    <span v-if="v$.user.password.$error"  class="error">error</span>
    <input v-model="user.email" :class="(v$.user.email.$error) ? 'invalid':''" type="email" placeholder="My@Email" />
    <span v-if="v$.user.password.$error"  class="error">error</span>
    <input v-model="user.password" :class="(v$.user.password.$error) ? 'invalid':''" type="password" placeholder="password" />
    <div v-if="v$.user.password.$error" class="error">error</div>
    <div v-if="error" v-text="error" class="error"></div>
    <button class="btn mt-2" v-on:click="saveUser">Зарегистрироваться</button>
  </form>
</template>

<script>
import indexApi from "@/api/indexApi";
import useVuelidate from "@vuelidate/core";
import {minLength, required} from "@vuelidate/validators";
import router from "@/router";

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  name: "RegistrationForm",
  data(){
    return{
      user: {
        username: '',
        email: '',
        password: '',
        role: []
      },
      error: ''
    }
  },
  validations: {
    user: {
      username: {required, minLength: minLength(3)},
      email: {required, minLength: minLength(3)},
      password: {required}
    },
  },
  methods: {
    async saveUser() {
      this.v$.$touch();
      if (this.v$.$errors.length > 0) {
        return
      }
      this.v$.$reset()
      try {
        await indexApi.auth.signUp(this.user).then(response=>console.log(response.data))
        await router.push({ name: 'Home' })
      }
      catch(error) {
        this.error=error.response.data
      }
    }
  }
}
</script>

