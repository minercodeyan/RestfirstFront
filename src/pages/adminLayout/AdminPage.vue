<template>
  <div class="container"><h4>Панель администратора</h4>
    <action-list></action-list>
  </div>
</template>

<script>
import ActionList from "@/components/ActionList";

export default {
  name: "AdminPage",
  components: {ActionList}
}
</script>

<style scoped>
h4 {
  font-weight: bold;
  text-align: center;
}

</style>