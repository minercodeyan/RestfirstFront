<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>
import MainLayout from "@/layout/MainLayout";
import AdminLayout from "@/layout/AdminLayout";

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {MainLayout, AdminLayout},
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/style.css";
</style>
