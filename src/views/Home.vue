<template>
  <div class="home">
    <img alt="burhaniya logo" width="130" src="../assets/logo.jpg">
    <h1 class="title">Hadrapp</h1>
  </div>
  <main class="menus">
    <button v-for="(route, index) in nav"
      :key="index"
      class="main-button"
    >
      <router-link :to="route.path" class="main-button__links">
        {{ route.name }}
      </router-link>
    </button>
  </main>
</template>

<script setup>
// @ is an alias to /src
  import { ref } from 'vue'
  import routes from '@/router/routes'

  const nav = ref( routes )
</script>