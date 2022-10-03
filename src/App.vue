<template>
  <TheResources />
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue'

export default {
  components: {TheResources},

}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(56, 206, 233);
  list-style-type: none;
}
</style>