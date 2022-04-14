<template>
  <div class="col s3 sidebar">
    <ul class="ul_sidebar">
    <li  v-for="link in links" :key="link.url"
        :to="link.url">
      <router-link class="side_item" :to="link.url">{{link.title}}</router-link>
    </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  props:{
    user: Object
  },
  data(){
    return{
      links:[
        {title: 'Главная',url: '/'},
        {title: 'Расписания',url: '/timetable/1'},
        {title: 'Подразделения',url: '/lol'},
        {title: 'Студенты',url: '/lol00'},
        {title: 'Рейтинг',url: '/rating'},
        {title: 'О университете',url: '/info'}
      ]
    }
  }
}
</script>
