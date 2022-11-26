<template>
  <div class="progress spinner-m" v-show="isLoading">
    <div class="indeterminate"></div>
  </div>
</template>

<script>
export default {
  name: "UniSpinner",
  props:{
    isLoading: {
        type: Boolean,
        default: true
    }
  }
}
</script>

<style scoped>
.spinner-m{
  margin: 20% auto;
  width: 40%;
}
</style>