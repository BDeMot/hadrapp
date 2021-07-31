<template>
  <div class="home">
    <img alt="burhaniya logo" width="150" src="../assets/logo.jpg">
    <h1>Hadrapp</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
