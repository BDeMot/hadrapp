<template>
  <div class="home">
    <img alt="burhaniya logo" width="130" src="../assets/logo.jpg">
    <h1 class="title">Hadrapp</h1>
  </div>
</template>

<script setup>
// @ is an alias to /src
  import { ref } from 'vue'
  import routes from '@/router/routes'

  const nav = ref( routes )
</script>