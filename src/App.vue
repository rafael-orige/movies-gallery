<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view v-if="!searching" />
      <section class="movies" v-else>
        <MoviesFragment
          category="Search"
          :totalResults="totalResults"
          :data="search"
          :query="query" />
      </section>
      <div ref="obs"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MoviesFragment from './components/MoviesFragment.vue';

export default {
  name: 'App',
  components: {
    Header,
    MoviesFragment,
  },
  data() {
    return {
      searching: false,
      search: [],
      query: '',
      totalResults: 0,
      searchArrLenght: 0,
      loading: false,
      observer: null,
      page: 1,
    };
  },
  computed: {
    getSearch() {
      return this.$store.getters.getSearch;
    },
    getSearchState() {
      return this.$store.getters.getSearching;
    },
  },
  watch: {
    getSearch(data) {
      this.searching = this.$store.getters.getSearching;
      this.search = [...this.search, ...data.result];
      this.totalResults = data.total_results;
      this.query = data.query;
      this.searchArrLenght = this.search.length;
    },
    getSearchState(data) {
      this.searching = data;
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (this.loading) return;
        if (this.searchArrLenght >= this.totalResults) return;

        this.$store.dispatch('setSearch', { query: this.query, page: this.page });
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

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  background-color: #10141f;
  color: #ededf0;
  font-family: "Noto Sans", Helvetica, Arial, sans-serif;
  min-height: 100vh;

  .container {
    padding: 20px;
    margin: auto;
    max-width: 1200px;
  }
}

.movies {
  height: fit-content;
  width: 100%;
  padding-top: 30px;
}

</style>
