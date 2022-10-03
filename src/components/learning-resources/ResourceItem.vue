<template>
  <li>
    <div class="card">
      <header>
        <h2 class="card__title">{{ title }}</h2>
        <button class="card__delete-btn" @click="deleteResource(id)">Delete</button>
      </header>
      <p class="card__description">{{ description }}</p>
      <nav>
        <a :href="link" class="card__link">See resource</a>
      </nav>
    </div>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: ['id', 'title', 'description', 'link']
}
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
  }

  li + li {
    margin-top: 1rem;
  }

  .card {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
    font-family: sans-serif;
    border-radius: 3px;
    color: white;
    background-color: purple;
    padding: 2rem 2rem;
    position: relative;

    & > *:not(:last-child) {
      margin-bottom: .5rem;
    }

    &__delete-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      cursor: pointer;
      padding: .5rem;
      border-radius: .3rem;
      border: 1px solid rgb(236, 207, 207);
      background-color: rgb(247, 90, 90);
      color: rgb(236, 207, 207);
    }
    
    &__link {
      color: aquamarine;
      text-decoration: none;
    }
  }
</style>