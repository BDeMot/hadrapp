<template>
  <div class="home">
    <img alt="burhaniya logo" width="130" src="../assets/logo.jpg">
    <h1>Hadrapp</h1>
  </div>
  <main class="menus">
    <button class="menus__menu">
      Textes
    </button>
    <button class="menus__menu">
      Leçons
    </button>
    <button class="menus__menu">
      Audio
    </button>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .menus{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    &__menu {
      background-color: #AFF0B8;
      height: 60px;
      width: 70%;
      margin: 10px;
      font-size: 2em;
      border: 0;
      border-radius: 100px;
    }
  }
</style>
