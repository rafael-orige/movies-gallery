<template>
  <h1>
    {{category === 'Search'
    ? `${totalResults} were found to ${query}`
    : `Recommended ${category}`}}
  </h1>
  <div class="wrapper">
    <Card v-for="movie in this.data" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'MoviesFragment',
  components: {
    Card,
  },
  props: {
    category: String,
    data: Array,
    totalResults: {
      type: Number,
      require: false,
    },
    query: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
  h1 {
    font-size: 1.5em;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2.6%;
  }
</style>
