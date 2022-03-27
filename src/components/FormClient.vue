<template>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    <div id="myDropdown" class="dropdown-content">
      <input v-bind:value="name" v-on:input="name=$event.target.value" type="text" placeholder="имя">
      <input v-bind:value="surname" v-on:input="surname=$event.target.value" type="text" placeholder="фамилия">
      <input v-bind:value="patronymic" v-on:input="patronymic=$event.target.value" type="text" placeholder="что-то">
      <input v-bind:value="dateOfBirth" v-on:input="dateOfBirth=$event.target.value" type="date" placeholder="дата рождения">
      <button id="btnDrop" type="submit" v-on:click="save">lol</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";


export default {

  props: {
    clients: {
      type: Array,
    }
  },
  data() {
    return {
      name: '',
      surname: '',
      patronymic: '',
      dateOfBirth: ''
    }
  },
  name: 'form-client',
  methods: {
    save: function () {
      axios.post('http://localhost:9090/api/v1/clients', {
        "name": this.name,
        "surname": this.surname,
        "patronymic": this.patronymic,
        "dateOfBirth": this.dateOfBirth
      },{timeout:2}).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
          this.name = "",
          this.surname = "",
          this.patronymic = "",
          this.dateOfBirth = ""
    }
  }
}
</script>

<style scoped>
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-top : 100px;
  margin-left: 40px;
  padding-right: 100px;
  border-right: 2px solid gray;
}

.dropdown-content {
  display: none;
  position: relative;
  min-width: 160px;
  overflow: auto;
  z-index: 1;
}

.dropdown-content input {
  color: black;
  margin: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>