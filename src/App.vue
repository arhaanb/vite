<template>
  <main>
    <header v-if="$route.meta.title">
      <h1>
        {{ $route.meta.title }}
      </h1>
    </header>

    <router-view />
    <br />
    <br />
    <span class="mode" @click="toggleDark">
      <carbon-sun v-if="isDark" />
      <carbon-moon v-else />
    </span>
  </main>
</template>

<script setup>
import { isDark, toggleDark } from '@/logics'
</script>

<style scoped>
.mode {
  background-color: #69e;
  padding: 0.5em;
  margin-top: 1em;
  border-radius: 0.35em;
  color: #222 !important;
  transition: 0.3s;
}

.mode:hover {
  background-color: rgb(184, 210, 255);
  cursor: pointer;
}
</style>
