<template>
  <section class="movies">
    <MoviesFragment category="Movies" :data="movies" />
    <MoviesFragment category="TV Shows" :data="tvShows" />
  </section>
</template>

<script>
import MoviesFragment from '@/components/MoviesFragment.vue';

export default {
  name: 'HomeScreen',
  components: {
    MoviesFragment,
  },
  data() {
    return {
      movies: [],
      tvShows: [],
    };
  },
  async created() {
    this.$store.dispatch('setAll');
  },
  computed: {
    getShowsAndMovies() {
      return this.$store.getters.getAll;
    },
  },
  watch: {
    getShowsAndMovies(data) {
      this.movies = data.movies;
      this.tvShows = data.shows;
    },
  },
};
</script>
