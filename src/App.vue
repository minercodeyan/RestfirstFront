<template>
<div id="app">
  <header-item></header-item>
  <div class="row">
 <form-client></form-client>
  <client-list v-bind:clients="clients"/>
  </div>
  <footer>kk</footer>
</div>
</template>

<script>
import ClientList from "@/components/ClientList";
import HeaderItem from "@/components/HeaderItem";
import FormClient from "@/components/FormClient";

import axios from "axios";
export default {
  name: 'App',
  components: {
    FormClient,
    HeaderItem,
    ClientList,
  },
  data(){
    return{
      clients: [],
    }
  },
  mounted() {
    axios.get('http://localhost:9090/api/v1/clients')
        .then(response=>this.clients=response.data)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
}
.btn{
  padding: 5px;
  background-color: #3498DB;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid;
}
.row{
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
