<template>
  <section class="movies" v-if="!error">
    <MoviesFragment :data="movies" category="Movies" />
    <Loading :condition="loading" />
    <div ref="obs"></div>
  </section>
  <h1 class="error" v-else>{{error}}</h1>
</template>

<script>
import MoviesFragment from '@/components/MoviesFragment.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'MoviesScreen',
  components: {
    MoviesFragment,
    Loading,
  },
  data() {
    return {
      movies: [],
      observer: null,
      loading: false,
      page: 1,
      error: '',
    };
  },
  computed: {
    getMovies() {
      return this.$store.getters.getMovies;
    },
    getLoading() {
      return this.$store.getters.getLoading;
    },
    getError() {
      return this.$store.getters.getError;
    },
  },
  watch: {
    getMovies(data) {
      this.movies = [...this.movies, ...data];
    },
    getLoading(data) {
      this.loading = data;
    },
    getError(data) {
      this.error = data;
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (this.loading) return;
        this.$store.dispatch('setMovies', this.page);
        this.page += 1;
      }
    });
    this.observer.observe(this.$refs.obs);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
};
</script>
