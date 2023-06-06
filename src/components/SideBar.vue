<template>
  <div class="col s3 sidebar">
    <ul class="ul_sidebar link-ease-in-out">
    <li  v-for="link in links" :key="link.url"
        :to="link.url">
      <router-link class="side_item"  :to="link.url">{{link.title}}</router-link>
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
        {title: 'Студенты',url: '/students'},
        {title: 'Курсы',url: '/subjects'},
        {title: 'Тесты',url: '/tests'},
        {title: 'Оплата',url: '/payment'},
        {title: 'О системе',url: '/info'}
      ]
    }
  }
}
</script>
