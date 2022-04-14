<template>
  <div class="filter">
    <h6><b>Расписание занятий для студентов ""</b></h6>
    <input v-model="filter" type="text" placeholder="Поиск..." v-on:keyup.enter="$emit('lol',this.filter)" @submit.prevent>
  </div>
  <div class="card">
    <div class="card-content">
      <span class="card-title">{{$route.params.id}}</span>
      <p>I am ely.</p>
      <p>I am ely.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentsTimeTableFilter",
  emits: ['lol'],
  data(){
    return {
      filter: '',
    }
  }
}
</script>

