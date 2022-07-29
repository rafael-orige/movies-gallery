<template>
  <div :class="large ? 'large' : 'default'">

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

<style>

</style>
