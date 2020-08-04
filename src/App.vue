<template>
  <div id="app" class="app">
    <router-link class="app__header--link" to="/">
      <h1 class="app__header">My Notes</h1>
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap');

  $light-black-color: #2c3e50;

  .app {
    margin-top: 60px;

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: $light-black-color;

    &__header {
      margin: 0 auto;

      width: 200px;
      border-radius: 20px;

      cursor: pointer;

      transition: background-color 0.3s;

      &:hover {
        color: #fff;
        background-color: $light-black-color;
      }
    }

    &__header--link {
      color: $light-black-color;
      text-decoration: none;
    }
  }
</style>
