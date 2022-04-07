<template>
  <HeaderItem/>
  <div class="row">
    <SideBar/>
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