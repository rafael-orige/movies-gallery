<template>
  <div
    :class="`card ${large ? 'large' : 'default'}`"
    :title="this.title"
  >
    <div class="card-wrapper">
      <img
        :src="`https://image.tmdb.org/t/p/w500${this.image}`"
        :alt="this.title"
        class="image"
      />
      <div class="bookmark"></div>
      <div v-if="large" class="information inside">
        {{this.title}}
      </div>
    </div>

    <div v-if="!large" class="information">
      <p>
        {{this.year}} -
        {{this.category}} -
        <span :title="`${this.votes} total votes`">{{this.rating}} Rating</span>
      </p>
      <h2 class="title">{{this.title}}</h2>
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
    movie: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      image: 'undefined',
      title: 'undefined',
      year: '2020',
      rating: 0,
      votes: 0,
      category: '',
    };
  },
  created() {
    const { movie } = this;

    this.image = movie.poster_path;
    this.title = movie.title || movie.name;
    this.rating = movie.vote_average;
    this.votes = movie.vote_count;
    this.category = movie.category;

    const releaseDate = movie.release_date || movie.first_air_date;
    const year = releaseDate ? releaseDate.split('-')[0] : 'undefined';
    this.year = year;
  },
};
</script>

<style scoped lang="scss">

.card {
  cursor: pointer;
  margin-bottom: 20px;
  overflow: hidden;

  &.default {
      flex-grow: 1;
    }

    &.large {
      width: 450px;
    }
}

.card-wrapper {
  overflow: hidden;

  .image {
      border-radius: 5px;
      height: 200px;
      object-fit: cover;
      overflow: hidden;
      position: relative;
      transition: all ease-out 0.1s;
      width: 100%;

      &:hover {
        transform: scale(1.2);
      }
    }
}

.information {
  max-width: 100%;

  p {
    margin: 10px 0 5px 0;
    font-size: 0.8em;
  }

  h2 {
    font-size: 1.1em;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>
