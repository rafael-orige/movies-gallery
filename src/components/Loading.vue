<template>
  <div v-if="condition" class="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    condition: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>

@keyframes load {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}

.loading {
  display: flex;
  justify-content: center;

  div {
    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    background-color: white;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    transform: scale(0.8);
    margin: 3px;

    &:nth-child(2) {
      animation-delay: .2s;
    }

    &:nth-child(3) {
      animation-delay: .40s;
    }

    &:nth-child(4) {
      animation-delay: .60s;
    }
  }
}
</style>
