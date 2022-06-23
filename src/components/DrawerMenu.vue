<template>
  <input type="checkbox" id="burger-wrapper" class="burger-wrapper" />
  <label for="burger-wrapper" class="burger">
    <div class="bars">
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </div>
  </label>
  <nav class="burger-wrapper__nav">
    <ul>
        <li v-for="(route, index) in nav"
          :key="index"
          class="main-button"
        >
      <router-link :to="route.path" class="main-button__links">
        {{ route.name }}
      </router-link>
    </li>
    </ul>
  </nav>

</template>

<script setup>
// @ is an alias to /src
  import { ref } from 'vue'
  import routes from '@/router/routes'

  const nav = ref( routes )
</script>

<style scoped lang="scss">
  .bar {
    transition: all 70ms linear;
  }

  .burger-wrapper{
    display: none;
    &:checked {
      + .burger {
        & .bar-1 {
          transform: rotate(45deg) translate(8px, 6px);
        }

        & .bar-2 {
          opacity: 0;
        }

        & .bar-3 {
          transform: rotate(-45deg) translate(8px, -6px);
        }
      }
      &+.burger+.burger-wrapper__nav{
        transform: translateX§(-100vw);
      }
    }
    &__nav {
      width: 100vw;
      height: 100vh;
      background: lightgrey;
      opacity: 90%;
      position: absolute;
      transform: translateX(100vw);
      // transition: 500ms;
      font-size: 58px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      z-index: 100;
    }
  }

  .burger{
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    &>.bars {
      height: 50%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      z-index: 1000;
      &>span{
        display: block;
        height: 5px;
        width: 100%;
        background: red;
      }
      }
  }
</style>
