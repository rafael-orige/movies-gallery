<template>
  <div id="app">
    <div class="container">
      <Header />
      <Recommended />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Recommended from './components/RecommendedSection.vue';

export default {
  name: 'App',
  components: {
    Header,
    Recommended,
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

</style>
