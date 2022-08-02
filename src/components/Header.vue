<template>
  <header>
    <div class="header-left">
      <img src="../assets/logo.png" alt="logo" />
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/shows">TV Shows</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="header-right">
      <label for="search" :class="{active: input.length}">
        <input
          autocomplete="off"
          v-model="input"
          @input="debounce"
          id="search"
          type="search"
          placeholder="Search..."
        />
        <button @click="search"><i class="fas fa-search"></i></button>
      </label>
    </div>
  </header>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      input: '',
      query: '',
      page: 1,
    };
  },
  methods: {
    search() {
      if (!this.input) return;
      this.$store.dispatch('setSearch', this.input);
    },
    debounce: _.debounce(function () {
      this.query = this.input;
    }, 1250),
  },
  computed: {
    getQuery() {
      return this.query;
    },
  },
  watch: {
    getQuery(query) {
      if (!query) {
        this.$store.dispatch('clearSearch');
        return;
      }

      this.$store.dispatch('setSearch', { query, page: this.page });
      this.page += 1;
    },
  },
};
</script>

<style scoped lang="scss">

  header {
    align-items: center;
    background-color: #161d2f;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    width: 100%;

    .header-left {
      align-items: center;
      display: flex;

      nav {
          margin-left: 40px;
        }

      img {
        cursor: pointer;
        height: 40px;
        width: auto;
      }
    }

  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      margin: 0 5px;
      padding: 5px 5px;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  label {
    background-color: transparent;
    border: 2px solid transparent;
    border-bottom: 2px solid #273455;
    color: white;

    &:focus,
    .active {
      border-radius: 5px;
      border: 2px solid #273455;
    }

    #search {
      background-color: transparent;
      border: none;
      color: inherit;
      padding: 5px 10px;

      &:focus {
        outline: none;
      }
    }

    button {
      border: none;
      background: transparent;
      color: #6c7275;
      cursor: pointer;
      outline: none;
    }
  }
</style>
