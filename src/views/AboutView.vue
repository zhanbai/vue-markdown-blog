<script setup lang="ts">
import About from "@/posts/About.md";
</script>

<template>
  <div class="about">
    <About />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
