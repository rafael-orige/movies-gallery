<template>
  <section id="recommended" v-if="!searching">
    <MoviesFragment category="Movies" :data="movies" />
    <MoviesFragment category="TV Shows" :data="tvShows" />
  </section>
  <section id="search" v-else>
    <MoviesFragment category="Search" :data="search" :totalResults="totalResults" :query="query" />
  </section>
</template>

<script>
import MoviesFragment from './MoviesFragment.vue';

export default {
  name: 'RecommendedSection',
  components: {
    MoviesFragment,
  },
  props: {
    category: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      movies: [],
      tvShows: [],
      searching: false,
      search: [],
      query: '',
      totalResults: 0,
    };
  },
  async created() {
    this.$store.dispatch('setMovies');
  },
  computed: {
    getShowsAndMovies() {
      return this.$store.getters.getAll;
    },
    getSearch() {
      return this.$store.getters.getSearch;
    },
    getSearchState() {
      return this.$store.getters.getSearching;
    },
  },
  watch: {
    getShowsAndMovies(data) {
      this.movies = data.movies;
      this.tvShows = data.shows;
    },
    getSearch(data) {
      this.searching = this.$store.getters.getSearching;
      this.search = data.result;
      this.totalResults = data.total_results;
      this.query = data.query;
    },
    getSearchState(data) {
      this.searching = data;
    },
  },
};

</script>

<style lang="scss" scoped>
#recommended {
  height: fit-content;
  width: 100%;
  padding-top: 30px;
}
</style>
