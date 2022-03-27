<template>
<div class="main">
<!--  <div><div v-for="client in clients" :key="client.id">{{client.id}}</div></div>-->
  <div class="client-row">
    <div class="client" v-for="client in clients" :key="client.id">
      {{client.id}}
      {{client.name}}
      {{client.surname}}
      <a href="#" class="btn">Подробнее</a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'ClientList',
  props:{
    clients: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.main{
  padding-top: 100px;
  padding-bottom: 300px;
  flex-grow: 8;
}
.client{
  margin: 10px;
  padding: 10px;
  border: solid;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
}
.client-row{
  margin: 0px 150px
}
</style>