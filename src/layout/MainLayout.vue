<template>
  <header-item v-bind:user="user"/>
  <div class="row">
    <side-bar/>
    <router-view @update="forceRerender"/>
  </div>
</template>
<script>
import HeaderItem from "@/components/HeaderItem";
import SideBar from "@/components/SideBar";
export default {
  name: "MainLayout",
  components: {HeaderItem,SideBar},
  data(){
    return{
      user: null
    }
  },
  methods:{
     forceRerender() {
     this.user=JSON.parse(localStorage.getItem('user'))
    }
  },
  mounted() {
    this.user=JSON.parse(localStorage.getItem('user'))
  }
}
</script>
