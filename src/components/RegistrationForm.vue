<template>
  <h2>Регистрация</h2>
  <form class="reg_form" method="post" @submit.prevent>
    <input v-model="user.name" :class="(error.name) ? 'invalid':''" type="text" placeholder="login" />
    <div v-if="error" class="error" v-text="error.name[0]"></div>
    <input v-model="user.email" :class="(error.email) ? 'invalid':''" type="email" placeholder="My@Email" />
    <div v-if="error" class="error" v-text="error.email[0]"></div>
    <input v-model="user.password" :class="(error.password) ? 'invalid':''" type="password" placeholder="password" />
    <div v-if="error" class="error" v-text="error.password[0]"></div>
    <button class="btn mt-2" v-on:click="signUpUser">Зарегистрироваться</button>
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
        role: null
      },
      error: ''
    }
  },
  validations: {
    user: {
      name: {required, minLength: minLength(3)},
      email: {required, minLength: minLength(3)},
      password: {required}
    },
  },
  methods: {
    async signUpUser() {
      await indexApi.auth.signUp(this.user)
          .catch(error=>{
            this.error = error.response.data;
            console.log(this.error)
      })
      if(!this.error){
        router.push('home')
      }
    }
  }
}
</script>

