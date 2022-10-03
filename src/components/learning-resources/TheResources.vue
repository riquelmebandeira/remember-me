<template>
  <div class="component-switcher">
    <button
      class="component-switcher__btn"
      @click="setActiveComponent('ResourcesList')"
    >
    Resources
    </button>

    <button
      class="component-switcher__btn"
      @click="setActiveComponent('ResourceForm')"
    >
    Add Resource
    </button>
  </div>
  <keep-alive>
    <component :is="activeComponent"></component>
  </keep-alive>
</template>

<script>
import ResourcesList from './ResourcesList.vue'
import ResourceForm from './ResourceForm.vue'

export default {
  components: {
    ResourcesList,
    ResourceForm
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    }
  },
  data() {
    return {
      activeComponent: "ResourcesList",
      storedResources: [
        {
          "id": "vue-documentation",
          "title": "Official Guide",
          "description": "The official Vue.js documentation.",
          "link": "https://vuejs.org/"
        },
        {
          "id": "google",
          "title": "Google",
          "description": "A dev's best friend :)",
          "link": "https://google.com/"
        }
      ]
    }
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component
    },
    addResource(title, description, link) {
      const id = new Date()
      this.storedResources.push({id, title, description, link})
      this.activeComponent = "ResourcesList"
    },
    deleteResource(id) {
      const resIndex = this.storedResources.findIndex((res) => res.id === id)
      this.storedResources.splice(resIndex, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-switcher {
  max-width: 50rem;
  margin: 1.5rem auto;

  button + button {
    margin-left: 1rem;
  }

  &__btn {
    padding: 1rem;
  }
}
</style>