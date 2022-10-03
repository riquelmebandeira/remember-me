<template>
<BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
  <p>Unfortunately, at least one input value is invalid.</p>
  <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
</BaseDialog>

  <form class="resource-form" @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" ref="title">
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        ref="description"
        cols="30"
        rows="10"
      />
    </div>

    <div class="form-control">
      <label for="link">Link</label>
      <input type="text" name="link" ref="link" id="link">
    </div>

    <button type="submit">Add Resource</button>
  </form>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    handleSubmit() {
      const title = this.$refs.title.value
      const description = this.$refs.description.value
      const link = this.$refs.link.value

      if (
        title.trim() === ''
        || description.trim() === ''
        || link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return
      }

      this.addResource(title, description, link)
    },
    confirmError() {
      this.inputIsInvalid = false
    }
  }
}
</script>

<style lang="scss" scoped>
.resource-form {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 50rem;

  padding: 2rem;
  border-radius: 3px;
  color: white;
  background-color: purple;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
}

.form-control {
  display: flex;
  flex-direction: column;
}
</style>