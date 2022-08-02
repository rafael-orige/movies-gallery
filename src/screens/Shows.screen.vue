<template>
  <section class="movies" v-if="!error">
    <MoviesFragment :data="shows" category="Shows" />
    <Loading :condition="loading" />
    <div ref="obs"></div>
  </section>
  <h1 class="error" v-else>{{error}}</h1>
</template>

<script>
import MoviesFragment from '@/components/MoviesFragment.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'ShowsScreen',
  components: {
    MoviesFragment,
    Loading,
  },
  data() {
    return {
      shows: [],
      observer: null,
      loading: false,
      page: 1,
      error: '',
    };
  },
  computed: {
    getShows() {
      return this.$store.getters.getShows;
    },
    getLoading() {
      return this.$store.getters.getLoading;
    },
    getError() {
      return this.$store.getters.getError;
    },
  },
  watch: {
    getShows(data) {
      this.shows = [...this.shows, ...data];
    },
    getLoading(data) {
      this.loading = data;
    },
    getError(data) {
      this.error = data;
    },
  },
  created() {
    this.$store.dispatch('setShows');
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (this.loading) return;
        this.$store.dispatch('setShows', this.page);
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
