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
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  &__drawer{
    background-color: rgb(255, 253, 253);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    height: 70%;
    position: absolute;
    right: -100%;
    top: 60px;
    box-shadow: -2px 0px 6px 1px rgba(0, 0, 0, 0.2);
    transition: all .5s;
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
    width: 40px;
    height: 40px;
    background-color: #AFF0B8;
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover + .nav__drawer{
      position: absolute;
      right: 0;
    }

    &--bar{
      display: block;
      height: 2px;
      width: 25px;
      background-color: #29BB3E;
      margin: 2px;
    }
  }
}
</style>
