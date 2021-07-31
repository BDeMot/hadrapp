<template>
  <div class="nav">
    <div class="nav__burger">
      <div class="nav__burger--bar">
      </div>
      <div class="nav__burger--bar">
      </div>
      <div class="nav__burger--bar">
      </div>
    </div>
    <div class="nav__drawer">
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">Textes</router-link>
      <router-link to="/about">Leçons</router-link>
      <router-link to="/about">Audio</router-link>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 30px;

  &__drawer{
    background-color: rgb(255, 253, 253);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    max-width: 300px;
    height: 70%;
    position: fixed;
    right: 0;
    top: 50px;
    transform: translateX(100%);
    box-shadow: -2px 0px 6px 1px rgba(0, 0, 0, 0.2);
    transition: all .3s;
    & a{
      color: #014900;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      text-decoration: none;
      font-size: 2em;
        &.router-link-exact-active {
          color: #42b983;
    }
    }
  }

  &__burger{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #AFF0B8;
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover + .nav__drawer{
      transform: translateX(0);
    }

    &--bar{
      display: block;
      height: .5vh;
      width: 35px;
      background-color: #29BB3E;
      margin: 2px;
    }
  }
}
</style>
