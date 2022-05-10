<template>
<div class="modal" v-if="show">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
</template>

<script>
export default {
  name: "modal-university",
  props:{
    show:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>