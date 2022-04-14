<template>
  <table>
    <caption>Таблица размеров обуви</caption>
    <tr>
      <th>Россия</th>
      <th>Великобритания</th>
      <th>Европа</th>
    </tr>
    <tbody>
    <tr>
      <td>34,5</td>
      <td>3,5</td>
      <td>36</td>
    </tr>
    <tr>
      <td>35,5</td>
      <td>4</td>
      <td>36⅔</td>
    </tr>
    <tr>
      <td>36</td>
      <td>4,5</td>
      <td>37⅓</td>
    </tr>
    </tbody>
  </table>
  <tr v-for="set in sets" :key="set.values()">
    <td v-for="(item, index) in set" :key="index">
      {{item}}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'example-page',
  data() {
    return {
      sets: {1:[1,2,3],2:[1,3,5],3:[3,4,5]}
    }
  },
  mounted() {
    console.log(this.sets)
  }
};
</script>