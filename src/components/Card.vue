<template>
  <div class="card">
    <div :class="`image ${large ? 'large' : 'default'}`">
      <div class="bookmark"></div>
      <div v-if="large" class="information inside">
          AAAAA
      </div>
    </div>
    <div class="information">
      <p>2022 - CATEGORY - RATING</p>
      <h2 class="title">MOVIE TITLE</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    large: {
      type: Boolean,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
    margin: 20px;
}

.image {
  border-radius: 5px;
  height: 200px;
  position: relative;
  overflow: hidden;

  &::before {
    background-color: rgba($color: #000000, $alpha: 0.2);
    content: "";
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &.default {
    width: 300px;
  }

  &.large {
    width: 450px;
  }
}

</style>
