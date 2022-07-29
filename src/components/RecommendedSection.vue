<template>
  <section id="recommended">
    <h1>Recommended Titles</h1>
    <div class="wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'RecommendedSection',
  components: {
    Card,
  },
};

</script>

<style lang="scss" scoped>
#recommended {
  height: fit-content;
  padding: 20px;
  width: 100%;

  h1 {
    font-size: 1.5em;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
