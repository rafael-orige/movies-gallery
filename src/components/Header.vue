<template>
  <header>
    <div class="header-left">
      <img src="../assets/logo.png" alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
        </ul>
      </nav>
    </div>

    <div class="header-right">
      <label for="search">
        <input
          autocomplete="off"
          v-model="input"
          @input="debounce"
          id="search"
          type="search"
          placeholder="Search..."
        />
        <button @click="search">Click to search</button>
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
    };
  },
  methods: {
    search() {
      if (!this.input) return;
      this.$store.commit('setSearch', this.input);
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
      this.$store.commit('setSearch', query);
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
    }
  }

  label {
    background-color: transparent;
    border: 2px solid transparent;
    border-bottom: 2px solid #273455;
    color: white;

    &:focus,
    .active {
      outline: none;
      border-radius: 5px;
      border: 2px solid #273455;
    }

    #search {
      background-color: transparent;
      border: none;
      color: white;
      padding: 5px 10px;

      &:focus {
        outline: none;
      }
    }

    button {
      border: none;
      outline: none;
      background: transparent;
      color: white;
    }
  }
</style>
