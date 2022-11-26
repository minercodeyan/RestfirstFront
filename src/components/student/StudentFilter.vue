<template>
    <div class="col s6">
      <input ref="key" type="text" placeholder="Введите имя студента">
      <button class="btn" v-on:click="search">Найти студента</button>
    </div>
    <div class="col s6 filters">
      <p>
        <label>
          <input type="checkbox">
          <span>Женский</span>
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox">
          <span>Мужской</span>
        </label>
      </p>
    </div>
</template>

<script>


export default {
  name: "StudentFilter",
  emits: ["search"],
  data() {
    return {
      key: ''
    }
  },
  methods:{
    search(){
      this.$emit("search",{key: this.$refs.key.value})
    }
  }
}
</script>

<style scoped>

</style>