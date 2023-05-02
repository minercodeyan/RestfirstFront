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
import {getUserName} from "@/common/userDataHelper";
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
     this.user=getUserName();
    }
  },
  mounted() {
    this.user=getUserName();
  }
}
</script>
