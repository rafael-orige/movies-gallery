<template>
  <div id="app">
    <div class="container">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
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
  }
}

</style>
