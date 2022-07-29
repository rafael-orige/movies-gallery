<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <nav>
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    align-items: center;
    background-color: #161d2f;
    border-radius: 5px;
    display: flex;
    justify-content: left;
    padding: 15px;
    width: 100%;

    nav {
      margin-left: 40px;
    }

    img {
      height: 40px;
      width: auto;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 5px 5px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
</style>
