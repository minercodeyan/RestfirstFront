<template>
  <header-item/>
  <div class="row">
    <side-bar/>
    <router-view/>
  </div>
</template>
<script>
import HeaderItem from "@/components/HeaderItem";
import SideBar from "@/components/SideBar";
export default {
  name: "MainLayout",
  components: {HeaderItem,SideBar}
}
</script>

<style scoped>

</style>