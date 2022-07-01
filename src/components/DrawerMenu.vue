<template>
  <input type="checkbox" id="burger-wrapper" class="burger-wrapper" />
  <label for="burger-wrapper" class="burger">
    <div class="bars">
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </div>
    <nav class="burger-wrapper__nav menus">
      <button v-for="(route, index) in nav"
        :key="index"
        class="main-button"
      >
        <router-link :to="route.path" class="main-button__links">
          {{ route.name }}
        </router-link>
      </button>
    </nav>
  </label>

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
          transform: rotate(-45deg) translate(7px, -5px);
        }
      }
      &+.burger .burger-wrapper__nav{
        display: flex;
      }
    }
    &__nav {
      width: 100vw;
      height: 100vh;
      background: lightgrey;
      opacity: 90%;
      position: absolute;
      top: -10px;
      right: -10px;
      // transform: translateX(100vw);
      // transition: 500ms;
      font-size: 58px;
      display: none;
      align-items: center;
      justify-content: center;
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
        height: 2px;
        width: 100%;
        background: #2C7C46;
      }
      }
  }
</style>
