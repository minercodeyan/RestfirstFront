<template>
  <header class="header">
    <div class="header__inner">
      <div><h1>logo</h1></div>
      <nav class="nav">
        <input type="text" placeholder="поиск"/>
        <a class="nav-item">silka2</a>
        <a class="nav-item">silka3</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-item"
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  border-bottom: 2px solid gray;
}
.nav{
  display: flex;
  padding: 50px;
}
.nav-item{
  padding: 0px 20px;
}
</style>