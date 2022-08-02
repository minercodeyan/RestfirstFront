<template>
  <div class="progress" v-show="isLoading">
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

</style>