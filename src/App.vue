<template>
  <drawer-menu/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import DrawerMenu from '@/components/DrawerMenu.vue'

export default {
  components: {
    DrawerMenu
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  overflow-x: hidden;
  width: 100vw;
}
</style>
