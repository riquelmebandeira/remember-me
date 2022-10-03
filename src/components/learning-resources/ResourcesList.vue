<template>
  <ul class="resources-list">
    <ResourceItem
      v-for="resource in storedResources"
      :key="resource.id"
      v-bind="resource"
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue'

export default {
  components: { ResourceItem },
  inject: ['storedResources']
}
</script>

<style lang="scss" scoped>
.resources-list {
  max-width: 50rem;
  margin: auto;
}
</style>