<template>
<component :is="layout">
  <router-view/>
</component>
</template>
<script>
import MainLayout from "@/layout/MainLayout";
export default {
  name: 'App',
  computed: {
    layout(){
     return 'main-layout'
    }
  },
  components:{MainLayout},
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/style.css";
</style>
