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
